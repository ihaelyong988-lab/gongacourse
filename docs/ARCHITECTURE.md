# ARCHITECTURE — 꽁아코스

## 전체 구조
휴대폰 전용 트레킹/나들이 가이드. **빌드리스 정적 SPA** — 번들러·프레임워크 없음. CDN: Font Awesome, Noto Sans KR. 데이터·상태는 localStorage.

## 폴더 레이아웃
| 폴더/파일 | 역할 | 추적 |
|---|---|---|
| `index.html` | 앱바 + 6 screen + 하단 5탭바 셸 | git |
| `style.css` | 모바일 네이티브 스타일(토큰·앱바·탭바·칩·게이지) | git |
| `app.js` | 5~20456줄=`defaultCourses`(304코스), 이후=로직 | git |
| `.claude/` | settings.json(훅 3종) · launch.json(preview) | git |
| `scripts/` | harness-context.mjs(규칙주입) · validate.mjs | git |
| `docs/` | 본 문서들 | git |

## 내부 지도 (app.js)
| 영역 | 위치/식별자 | 비고 |
|---|---|---|
| 라우터 | `showScreen`/`navigate`/`goTab`/`goBack` | history 스택, 뒤로가기 정상화 |
| 홈 | `renderHome`/`pickTodayCourse`/`loadWeather`/`getCurrentSeason` | 계절+날씨 연동 |
| 탐색 | `renderExplore`/`renderExploreFilters`/`toggleDrawer` | 3탭+수납장 필터 |
| 코스카드 | `courseCardHtml`/`coursePhoto` | 가로 미디어 카드+실사 |
| 상세 | `renderDetail` | 세로 타임라인+카카오맵 딥링크 |
| 소통 | `renderCommunity`/`communityFeed`/`getCommFeed` | 컴포저+정렬(최신/평점/인기) |
| 만보기 | `renderMypage`/`toggleStepTracking`/`onDeviceMotion`/`updateGaugeLive` | DeviceMotion 실센서+풀링 게이지 |
| 영속화 | localStorage: `gongacourse_data/saved/posts/searchcounts/steps/visitor_settings/weather` | |

## 알려진 취약점 / 히스토리
- 만보기는 웹 한계상 **포그라운드+화면 ON에서만** 카운트(백그라운드 ❌). 실동작은 실기기 HTTPS.
- preview 부분 serverId 사용 시 screenshot이 stale 프레임 → 전체 id 사용.
- 데스크톱 2단 대시보드로 되돌리지 말 것(폰 네이티브 고정).
