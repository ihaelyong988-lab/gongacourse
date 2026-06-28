# VERIFY — 검증 런북 — 꽁아코스

작업(특히 app.js/style.css/index.html 편집) 후 이 순서로 검증.

## 0. 정적 검사 (서버 없이)
```
node --check app.js            # JS 문법
node scripts/validate.mjs      # index.html 존재 시 구조 점검(없으면 PASS)
```

## 1. 실행/프리뷰 (Claude Preview MCP)
```
preview_start gonga            # .claude/launch.json: python http.server 8765
preview_resize 375 (mobile)
preview_screenshot / preview_eval
```
- ⚠️ serverId는 **잘리지 않은 전체 문자열** 사용(부분 id는 eval만 맞고 screenshot은 stale 프레임).
- 스크린샷이 stale이면 stop→start 재기동, 또는 `preview_eval`로 DOM 직접 확인.
- 만보기/날씨는 PC엔 센서·위치 없어 미작동 → **합성 이벤트(eval)로 로직 검증**, 실동작은 실기기 HTTPS.

## 2. 기능 점검 체크리스트
- 홈: 오늘의 추천이 **현재 계절** 코스인가(여름에 겨울코스 ❌), 날씨 칩.
- 탐색: 3탭(지역/테마/계절) → 탭 클릭 시 **수납장(서랍)** 펼침, 선택 시 닫힘+필터.
- 코스 카드: **실사 사진**(일러스트 ❌), 가로형 미디어 카드.
- 소통: 컴포저 업로드 + 최신/평점/**인기순** 정렬.
- 만보기: 풀 링 게이지(겹침 ❌), 측정 시작/정지, 목표 달성 시 호박색.
- 뒤로가기: 화면 스택 복귀(종료 confirm은 홈에서만).

## 3. 합격 기준
- 콘솔 에러 0, 가로 오버플로우 0, 위 체크리스트 통과.

## 참고 — 활성 훅
`.claude/settings.json`의 PostToolUse·Stop 훅이 편집 직후·턴 종료 시 `node scripts/validate.mjs`를 자동 실행.
