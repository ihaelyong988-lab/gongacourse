/**
 * visitor-gate.js — 방문자 관점 실사 회귀 게이트 (AGENTS.md §10 기계 채점)
 *
 * 브라우저 컨텍스트에서 실행한다(빌드리스 원칙 유지 — npm 의존성 추가 없음).
 *   Playwright:  await page.evaluate(<이 파일 내용> + '; return __visitorGate();')
 *   수동:        devtools 콘솔에 붙여넣고 __visitorGate().then(console.log)
 *
 * 수정 전/후에 각각 돌려 **A/B로 대조**한다. 통과 여부만 보지 말고 수치가 어느 쪽으로 움직였는지 본다.
 * 게이트는 AGENTS.md §10-1 표의 축과 1:1로 대응한다.
 */
async function __visitorGate() {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const cur = () => {
    const a = [...document.querySelectorAll(".screen")].find((s) => s.classList.contains("active"));
    return a ? a.id.replace("screen-", "") : "none";
  };
  const tab = (t) => document.querySelector(`.tab[data-tab="${t}"]`);
  const G = [];
  const add = (axis, name, pass, actual, want) => G.push({ axis, name, pass: !!pass, actual, want });

  // ── J1 진입 ───────────────────────────────────────────
  const nav = performance.getEntriesByType("navigation")[0] || {};
  const res = performance.getEntriesByType("resource");
  add("J1", "가로 오버플로 0px", document.documentElement.scrollWidth <= document.documentElement.clientWidth,
      document.documentElement.scrollWidth - document.documentElement.clientWidth, 0);
  add("J1", "첫 렌더(DOMContentLoaded)", true, Math.round(nav.domContentLoadedEventEnd || 0) + "ms", "기록값");
  add("J1", "전송량", true, Math.round(res.reduce((a, r) => a + (r.transferSize || 0), 0) / 1024) + "KB", "기록값");
  // 로드 실패 이미지는 .img-failed 로 숨겨지는 폴백이 있다. 화면에 실제로 보이는 깨진 것만 센다.
  const broken = [...document.images].filter((i) => i.complete && i.naturalWidth === 0 && i.offsetParent !== null);
  add("J1", "보이는 깨진 이미지 0", broken.length === 0, broken.length, 0);

  // ── J2 신원 등록 진입점 ────────────────────────────────
  tab("home").click(); await sleep(250);
  const profOnHome = getComputedStyle(document.getElementById("appbar-profile")).display !== "none";
  add("J2", "홈에서 프로필 진입점 노출", profOnHome, profOnHome, true);
  tab("mypage").click(); await sleep(250);
  if (typeof openProfileEdit === "function") {
    openProfileEdit(); await sleep(200);
    const dlg = document.querySelector('[role="dialog"]');
    add("J2", "모달 aria-modal", dlg && dlg.getAttribute("aria-modal") === "true", dlg ? dlg.getAttribute("aria-modal") : null, "true");
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    await sleep(200);
    const ov = document.getElementById("prof-modal");
    add("J2", "ESC로 모달 닫힘", ov && !ov.classList.contains("on"), ov ? ov.classList.contains("on") : null, "닫힘");
    if (ov) ov.classList.remove("on");
  }

  // ── Q1 필명 이스케이프 ─────────────────────────────────
  if (typeof saveProfile === "function" && typeof openProfileEdit === "function") {
    const keep = JSON.parse(localStorage.getItem("gongacourse_visitor_settings") || "{}").nick || "";
    openProfileEdit(); await sleep(150);
    document.getElementById("pm-nick").value = '<b id="__gate_inj">x</b>';
    saveProfile(); await sleep(250);
    const injected = !!document.getElementById("__gate_inj");
    add("Q1", "필명 HTML 이스케이프", !injected, injected ? "주입됨" : "이스케이프됨", "이스케이프됨");
    openProfileEdit(); await sleep(120);
    document.getElementById("pm-nick").value = keep;
    saveProfile(); await sleep(150);
  }

  // ── J4 맞춤 반영 (동행 A/B) ────────────────────────────
  if (typeof setCompanionHome === "function") {
    const snap = () => { tab("home").click(); const c = document.querySelector(".today-card"); return c ? c.textContent.replace(/\s+/g, " ").trim() : ""; };
    const keep = JSON.parse(localStorage.getItem("gongacourse_visitor_settings") || "{}").companion || "none";
    setCompanionHome("none"); await sleep(300); const a = snap();
    setCompanionHome("parent"); await sleep(300); const b = snap();
    setCompanionHome("pet"); await sleep(300); const c = snap();
    const changed = !(a === b && b === c);
    add("J4", "동행 변경이 추천을 바꾼다", changed, changed ? "바뀜" : "3종 모두 동일", "바뀜");
    setCompanionHome(keep); await sleep(200);
  }
  if (typeof getCurrentSeason === "function") {
    const season = getCurrentSeason();
    const card = document.querySelector(".today-card");
    const ko = { spring: "봄", summer: "여름", autumn: "가을", winter: "겨울" }[season] || season;
    add("J4", "추천이 현재 계절", !card || card.textContent.includes(ko), season, ko);
  }

  // ── J5 저장 거부 폴백 ──────────────────────────────────
  const origSet = Storage.prototype.setItem;
  let survived = true;
  Storage.prototype.setItem = function () { throw new DOMException("QuotaExceededError"); };
  try { if (typeof setCompanionHome === "function") setCompanionHome("child"); } catch (e) { survived = false; }
  Storage.prototype.setItem = origSet;
  add("J5", "저장 거부 시 예외 미전파", survived, survived ? "버팀" : "예외 전파", "버팀");
  if (typeof setCompanionHome === "function") { setCompanionHome("none"); await sleep(150); }

  // ── J6 이탈: 탭 전환이 히스토리를 쌓는가 ───────────────
  tab("home").click(); await sleep(250);
  const h0 = history.length;
  for (const t of ["explore", "community", "saved", "mypage"]) { tab(t).click(); await sleep(200); }
  const grown = history.length - h0;
  add("J6", "탭 4회 이동 후 히스토리 증가", grown <= 1, grown, "≤1 (탭은 스택을 쌓지 않는다)");
  // 홈 복귀
  tab("home").click(); await sleep(200);

  /* ── J6 종료 확인이 실제로 발동하는가 ──
     홈 최상단에서 뒤로 1회 → confirm 이 떠야 한다. confirm 을 가로채 '취소'를 돌려주므로
     앱은 그 자리에 남고, 이 게이트가 방문자를 실제로 내보내는 일은 없다. */
  tab("home").click(); await sleep(250);
  let exitAsked = 0, exitMsg = null;
  const origConfirm = window.confirm;
  window.confirm = (m) => { exitAsked++; exitMsg = m; return false; };
  /* 이 게이트가 돌기 전 단계들이 히스토리를 여러 개 쌓아 두었다. 한 번만 뒤로 가면 스택 바닥에
     닿지 못해 "발동 안 함"으로 잘못 읽힌다. 확인이 뜰 때까지(최대 12회) 바닥으로 내려간다. */
  for (let i = 0; i < 12 && exitAsked === 0; i++) {
    history.back();
    await sleep(320);
  }
  window.confirm = origConfirm;
  add("J6", "홈에서 뒤로 1회 = 종료 확인 발동", exitAsked > 0, exitAsked > 0 ? `발동(${exitMsg})` : "발동 안 함(앱을 그냥 벗어남)", "발동");
  tab("home").click(); await sleep(200);

  // ── Q2 접근성 실측 ─────────────────────────────────────
  tab("home").click(); await sleep(250);
  const tappables = [...document.querySelectorAll("button, a, [onclick], input, .chip, .tab")].filter((e) => e.offsetParent !== null);
  const under44 = tappables.filter((e) => { const r = e.getBoundingClientRect(); return r.height > 0 && (r.height < 44 || r.width < 44); });
  add("Q2", "터치 타깃 44px 미만 0개", under44.length === 0, `${under44.length}/${tappables.length}`, 0);

  const lum = (c) => { const m = (c || "").match(/\d+/g); if (!m) return 1;
    const [r, g, b] = m.slice(0, 3).map(Number).map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  const bgOf = (el) => { let n = el; while (n && n !== document.documentElement) { const b = getComputedStyle(n).backgroundColor;
    if (b && !/rgba\(0, 0, 0, 0\)|transparent/.test(b)) return b; n = n.parentElement; } return "rgb(255,255,255)"; };
  const texts = [...document.querySelectorAll("#home-body *")].filter((e) => e.children.length === 0 && (e.textContent || "").trim().length > 3 && e.offsetParent !== null);
  const low = texts.map((e) => { const cs = getComputedStyle(e); const L1 = lum(cs.color), L2 = lum(bgOf(e));
    return { t: e.textContent.trim().slice(0, 24), ratio: +(((Math.max(L1, L2) + 0.05) / (Math.min(L1, L2) + 0.05)).toFixed(2)) }; })
    .filter((x) => x.ratio < 4.5);
  add("Q2", "본문 대비 4.5:1 미만 0개", low.length === 0, `${low.length}/${texts.length} (최저 ${low.length ? Math.min(...low.map((x) => x.ratio)) : "-"})`, 0);

  // ── S1 화면 완결성 ─────────────────────────────────────
  const screens = [];
  for (const t of ["home", "explore", "community", "saved", "mypage"]) {
    tab(t).click(); await sleep(220);
    const body = document.getElementById(cur() + "-body");
    screens.push({ tab: t, children: body ? body.children.length : -1, chars: body ? body.textContent.trim().length : -1 });
  }
  add("S1", "탭 5종 모두 내용 렌더", screens.every((s) => s.children > 0), screens.map((s) => `${s.tab}:${s.children}`).join(" "), "전부 >0");
  tab("home").click(); await sleep(200);

  // ── S1 페이지네이션: 한 화면에 전량을 쏟지 않는가 ─────
  tab("explore").click(); await sleep(400);
  const exploreCards = document.querySelectorAll("#explore-body .cc, #explore-body .course-card, #explore-body [onclick^='openCourse']").length;
  add("S1", "탐색 초기 카드 ≤ 60장", exploreCards > 0 && exploreCards <= 60, exploreCards, "≤60");
  tab("community").click(); await sleep(400);
  const commChars = (document.getElementById("community-body") || {}).textContent;
  add("S1", "소통 초기 본문 ≤ 40,000자", (commChars || "").length <= 40000, (commChars || "").length, "≤40000");

  // ── Q2 키보드 접근: 눌리는 것은 버튼이어야 한다 ────────
  tab("home").click(); await sleep(300);
  const divClickables = [...document.querySelectorAll("#home-body [onclick]")]
    .filter((e) => !/^(BUTTON|A|INPUT|SELECT|TEXTAREA)$/.test(e.tagName) && e.tabIndex < 0 && !e.getAttribute("role"));
  add("Q2", "홈에 키보드 불가 클릭요소 0", divClickables.length === 0,
      `${divClickables.length} (${divClickables.slice(0, 3).map((e) => e.className || e.tagName).join(", ")})`, 0);

  // ── J1 확대 차단 해제 ──────────────────────────────────
  const vp = (document.querySelector('meta[name="viewport"]') || {}).content || "";
  add("J1", "확대 차단 없음(user-scalable/maximum-scale)", !/user-scalable\s*=\s*no|maximum-scale/.test(vp), vp.slice(0, 70), "제한 없음");

  // ── J5 스크롤 위치 복원 ────────────────────────────────
  tab("explore").click(); await sleep(400);
  window.scrollTo(0, 600); await sleep(200);
  const before = Math.round(window.scrollY);
  const card = document.querySelector("#explore-body [onclick^='openCourse']");
  if (card && before > 200) {
    card.click(); await sleep(500);
    history.back(); await sleep(800);
    const after = Math.round(window.scrollY);
    add("J5", "뒤로가기 시 읽던 위치 복원", Math.abs(after - before) < 120, `${before} → ${after}`, "±120px");
  } else {
    add("J5", "뒤로가기 시 읽던 위치 복원", false, "측정 불가(카드 없음/스크롤 부족)", "측정 성공");
  }

  // ── J4 상세를 열어도 목록 수치가 변하지 않는다 ─────────
  tab("explore").click(); await sleep(400);
  const readSat = () => { const e = document.querySelector("#explore-body [onclick^='openCourse']"); return e ? (e.textContent.match(/(\d+)%/) || [])[1] : null; };
  const sat1 = readSat();
  const c2 = document.querySelector("#explore-body [onclick^='openCourse']");
  if (c2 && sat1) {
    c2.click(); await sleep(500);
    history.back(); await sleep(700);
    const sat2 = readSat();
    add("J4", "상세 열어도 목록 만족도 불변", sat1 === sat2, `${sat1}% → ${sat2}%`, "동일");
  } else {
    add("J4", "상세 열어도 목록 만족도 불변", false, "측정 불가", "측정 성공");
  }
  tab("home").click(); await sleep(250);

  // ── J5 재방문 보존: 저장이 방문자 기록을 담는가 ────────
  /* 저장은 시드 대비 델타만 쓴다(2026-08-14). 델타가 후기·투표를 빠뜨리면 재방문에 소멸한다.
     리로드는 이 컨텍스트를 죽이므로 화면이 아니라 저장 계약을 본다. */
  try {
    const pc = courses[0];
    const beforeUp = pc.votesUp || 0;
    const beforeLen = (pc.comments || []).length;
    const stamp = "__gate_" + Date.now();
    pc.comments = pc.comments || [];
    pc.comments.push({ user: "게이트", text: stamp, date: "2026-08-14", ratings: { scenery: 5, path: 5, parking: 5 } });
    pc.votesUp = beforeUp + 1;
    const ok = saveToLocalStorage();
    const raw = localStorage.getItem("gongacourse_data") || "";
    add("J5", "저장이 후기·투표를 담는다", ok && raw.includes(stamp), ok ? ("후기 포함 " + raw.includes(stamp)) : "저장 실패", "포함");
    // 델타 저장이면 전량 덤프(수십만 B)가 아니어야 한다 — 되돌아가면 저장 실패가 잦아진다.
    add("J5", "저장 payload 델타 유지", raw.length < 60000, raw.length + "B", "<60,000B");
    pc.comments.length = beforeLen;
    pc.votesUp = beforeUp;
    saveToLocalStorage();
  } catch (e) {
    add("J5", "저장이 후기·투표를 담는다", false, "측정 실패: " + e.message, "측정 성공");
  }

  // ── S1 모음집 잘못된 항목 진입 시 안내 ─────────────────
  try {
    navigate("collection", { id: "__gate_nope__" });
    await sleep(450);
    const scr = [...document.querySelectorAll(".screen")].find((s) => s.classList.contains("active"));
    const body = (scr ? scr.textContent : "").trim();
    add("S1", "잘못된 모음집 진입 시 안내 존재", body.length > 0, body.length + "자", ">0자");
    history.back(); await sleep(450);
  } catch (e) {
    add("S1", "잘못된 모음집 진입 시 안내 존재", false, "측정 실패: " + e.message, "측정 성공");
  }
  tab("home").click(); await sleep(250);

  // ── Q2 별점 키보드 조작 ────────────────────────────────
  /* 별점은 후기 등록의 필수 조건이라, 키보드로 못 고르면 그 사람은 후기를 아예 못 쓴다. */
  try {
    tab("explore").click(); await sleep(400);
    const card = document.querySelector("#explore-body [onclick^='openCourse']");
    if (card) {
      card.click(); await sleep(700);
      const group = document.querySelector('[role="radiogroup"]');
      const radios = group ? [...group.querySelectorAll('[role="radio"]')] : [];
      add("Q2", "별점이 radiogroup", Boolean(group) && radios.length > 0,
          group ? ("radio " + radios.length + "개") : "없음", "radiogroup + radio");
      if (group && radios.length) {
        const stops = radios.filter((r) => r.tabIndex >= 0).length;
        add("Q2", "별점 탭 정지 1개(roving)", stops === 1, stops, 1);
        const first = radios.find((r) => r.tabIndex >= 0) || radios[0];
        first.focus();
        const before = group.querySelector('[aria-checked="true"]');
        first.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", bubbles: true }));
        await sleep(200);
        const after = group.querySelector('[aria-checked="true"]');
        add("Q2", "화살표 키로 별점 변경", Boolean(after) && after !== before,
            after ? "변경됨" : "변경 없음", "변경됨");
      }
      history.back(); await sleep(450);
    } else {
      add("Q2", "별점이 radiogroup", false, "측정 불가(코스 카드 없음)", "측정 성공");
    }
  } catch (e) {
    add("Q2", "별점이 radiogroup", false, "측정 실패: " + e.message, "측정 성공");
  }
  tab("home").click(); await sleep(250);

  // ── Q1 사용자 입력 이스케이프 ──────────────────────────
  /* 태그가 실제 요소로 살아나는지만 본다. 글자로 보이면 통과, 요소가 생기면 실패다. */
  try {
    const beforeNick = visitorSettings.nick;
    const beforeNICK = NICK;
    /* 화면에 뜨는 이름은 NICK 이고 visitorSettings.nick 은 저장용이다. nick 만 바꾸면
       렌더가 옛 값을 그려 이 게이트가 아무것도 재지 못한 채 통과한다 — 2026-08-14 뮤테이션이 잡았다. */
    visitorSettings.nick = '<b id="xsschk">x</b>';
    NICK = visitorSettings.nick;
    tab("mypage").click(); await sleep(400);
    renderAppbarProfile(); await sleep(200);
    const injected = document.getElementById("xsschk");
    add("Q1", "필명 이스케이프", !injected, injected ? "요소로 살아남" : "글자로 표시", "글자로 표시");
    visitorSettings.nick = beforeNick;
    NICK = beforeNICK;
    renderAppbarProfile();
    tab("home").click(); await sleep(250);
  } catch (e) {
    add("Q1", "필명 이스케이프", false, "측정 실패: " + e.message, "측정 성공");
  }

  // ── J1 후기 진정성 (2026-08-16 신설) ─────────────────────────────────
  // 왜 있는가: 홈 "방금 올라온 후기" 3장이 지명만 바뀐 동일 문장이었다 —
  // "청산도/방축도/송이도 다녀왔는데 길이 잘 정비되어 있어 부모님 모시고 가도 무리 없었습니다."
  // 원인은 시드 후기 700건에 ts(작성 시각)가 없어 feedTs 가 날짜로 폴백(app.js:22368) →
  // 최신 날짜 2026-06-27 보유 10건이 동률 → 안정 정렬로 코스 번호순이 그대로 남는 것.
  // 사람 눈에는 "후기가 3장 있다"로 보여서 지금까지 어떤 게이트도 잡지 않았다.
  // 후기 700건의 고유 필명은 10개, 최신 글은 50일 전이다. 이 사이트의 정체성이 "경험자와 소통"이다.
  try {
    tab("home").click(); await sleep(300);
    const host = document.getElementById("home-reviews");
    const texts = host
      ? [...host.querySelectorAll("*")]
          .filter((e) => !e.children.length && (e.textContent || "").trim().length > 20)
          .map((e) => e.textContent.trim())
      : [];
    // 앞 토큰(지명)을 떼고 나머지 문장이 서로 다른지 본다 — 지명만 바꾼 템플릿을 잡는 핵심이다.
    const norm = texts.map((t) => t.replace(/^["'\s]*\S+\s/, "").trim());
    const uniq = new Set(norm).size;
    add("J1", "홈 후기 문장 서로 다름", texts.length > 0 && uniq === texts.length,
        `${texts.length}장 중 고유 ${uniq}`, `${texts.length}장 전부 고유`);

    /* 라벨 정직성 — 제목이 '후기'라고 말하면 그 카드는 실제 방문자가 쓴 글이어야 한다.
       시드 콘텐츠(ts·uid 없음)는 '코스 소개'로만 실을 수 있고 필명·날짜·별점을 달 수 없다.
       2026-08-16 이전 상태: 시드 700건(필명 10개·최신 50일 전)이 "방금 올라온 후기"라는 이름으로
       필명을 달고 사람 글처럼 노출됐다. 이 룰이 그 자리를 막는다. */
    // 섹션 제목 마크업은 sectionLabel() = <div class="sec"><span class="sec-t">…
    // 선택자가 어긋나면 heading 이 빈 문자열이 되어 룰이 조용히 통과한다(2026-08-16 실측으로 잡음).
    const headings = [...document.querySelectorAll(".sec-t")].map((e) => (e.textContent || "").trim());
    const heading = headings.find((t) => /후기|코스 한 줄 소개/.test(t)) || "";
    // 제목을 못 찾은 것은 통과가 아니라 측정 실패다.
    add("J1", "홈 후기 섹션 제목 측정", heading !== "", heading || `못 찾음(sec-t ${headings.length}개)`, "제목 문자열");
    const claimsReview = /후기/.test(heading);
    const realCount = (typeof courses !== "undefined" ? courses : [])
      .reduce((n, c) => n + ((c.comments || []).filter((cm) => cm && (cm.ts || cm.uid)).length), 0);
    add("J1", "홈 제목이 내용과 일치", !claimsReview || realCount > 0,
        `제목 "${heading}" · 실제 사용자 후기 ${realCount}건`,
        "'후기'라고 쓰면 실제 사용자 글이 1건 이상");

    // 시드 카드에 사람 표기(필명·날짜)가 붙지 않았는가 — 홈 메타 줄에 코스명 외 인물 표기 금지.
    const metas = host ? [...host.querySelectorAll(".fi-meta")].map((e) => e.textContent.trim()) : [];
    const seedHasPerson = realCount === 0 && metas.some((m) => m.includes("·"));
    add("J1", "시드에 사람 표기 없음", !seedHasPerson,
        realCount === 0 ? `메타 ${metas.length}줄 중 인물 표기 ${metas.filter((m) => m.includes("·")).length}` : "실제 후기 있음(해당 없음)",
        "코스명만 표시");
  } catch (e) {
    add("J1", "홈 후기 문장 서로 다름", false, "측정 실패: " + e.message, "측정 성공");
  }

  const failed = G.filter((g) => !g.pass);
  return { verdict: failed.length === 0 ? "PASS" : "FAIL", failedCount: failed.length, total: G.length, gates: G, screens };
}
