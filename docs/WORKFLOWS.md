# WORKFLOWS (런북) — 꽁아코스

> 작업 유형별 표준 순서. 2회 이상 반복되면 여기에 추가하고, 안정되면 스킬로 승격(AGENTS.md §0-3).

## 표준 작업 파이프라인
1. AGENTS.md §4/§6/§9·`docs/CONVENTIONS.md` 확인 → 2. 작업 수행 → 3. `docs/VERIFY.md` 검증 → 4. 사람 검토 → 5. Closeout.

## 도메인 런북
| ID | 흐름 | 도구/스킬 체인 |
|---|---|---|
| W1 UI 변경 | 화면/스타일 개선 | `ui-ux-pro-max` 조회 → app.js/style.css 편집 → `node --check` → Claude Preview(375px) screenshot/eval → 콘솔 0 확인 → §9 기록 → 커밋 |
| W2 만보기 로직 | 센서/게이지 | 편집 → eval로 **합성 DeviceMotion** 검증(걸음수·노이즈·중복) → 라이브 갱신 확인 |
| W3 배포 | 라이브 반영 | 브랜치 푸시 → PR(master 직접 푸시 금지) → GitHub Pages 소스 빌드(`gh api -X POST .../pages/builds`) → 라이브 title/마커 curl 검증 |

## Closeout — 마감 루틴 (공통)
1. 검증 통과(VERIFY)  2. (선택) 그래프 갱신  3. 교훈 `memory/`·§9 기록  4. 브랜치 커밋 → **PR**(기본 브랜치 직접/푸시는 승인 시)  5. 변경 요약 보고.
