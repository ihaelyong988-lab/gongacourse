# CLAUDE.md — 꽁아코스 (휴대폰 전용 트레킹/나들이 가이드 웹앱)

작업 전 **`AGENTS.md`를 먼저 읽으세요.** 이 프로젝트의 모든 규칙·라우팅·제약은 거기에 있습니다.
(빌드리스 정적 SPA: `index.html` + `style.css` + `app.js`(5~20456줄=304코스 데이터, 이후=로직).)

## 자기개선 (최우선 · 한 번 지시 = 영구 규칙, 두 번 설명 금지)
**사용자가 한 번 설명한 작업 지시·방식·선호는 두 번 다시 설명하게 하지 않는다.** 첫 지시에 **그 턴 안에**
`AGENTS.md` §4(절대규칙)/§9(Decision Log)/`memory`에 기록하고, 새 작업 전 이를 먼저 조회해 적용한다(재설명 요구 금지). 상세 `AGENTS.md` §0.
※ `.claude/settings.json`의 UserPromptSubmit 훅(`scripts/harness-context.mjs`)이 §0/§4/§6/§9를 매 턴 강제주입함.

## 도구/환경 한정 메모
- 검증: `node --check app.js` + Claude Preview(`.claude/launch.json`의 `gonga`, 375px)로 실화면 확인. 상세 `docs/VERIFY.md`.
- 실행/프리뷰: `preview_start gonga` → resize 375 → screenshot/eval. (serverId는 잘리지 않은 전체 문자열 사용)
- 배포: GitHub Pages(HTTPS) → https://ihaelyong988-lab.github.io/gongacourse/ (실기기 만보기·날씨는 HTTPS 필수)
- 마감: `AGENTS.md` §8 Closeout (기본 브랜치 직접 푸시 금지 → PR)

## 스킬·도구 라우팅 빠른참조 (AGENTS.md §6 미러 — 재질문 금지)
- UI/UX 디자인·개선·리뷰 → **`ui-ux-pro-max` 스킬 호출**(수동 추정 금지)
- 코스 이미지 → **실사만**(loremflickr). 일러스트·이모지 금지
- 추천 코스 → 현재 계절(`getCurrentSeason`)+날씨(`weatherInfo`) 연동 필수
- 탐색 필터 → 3탭+수납장(서랍) 아코디언 고정 / 화면 검증 → Claude Preview MCP
