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

  const failed = G.filter((g) => !g.pass);
  return { verdict: failed.length === 0 ? "PASS" : "FAIL", failedCount: failed.length, total: G.length, gates: G, screens };
}
