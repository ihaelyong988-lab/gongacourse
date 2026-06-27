// =============================================================================
// 꽁아코스 - 애플리케이션 로직 (app.js)
// =============================================================================

// 1. 초기 모크 데이터 (엑셀 데이터 기반으로 초기화)
const defaultCourses = [
  {
    id: 1,
    title: "북한산 우이령 단풍 둘레길",
    season: "autumn",
    seasonName: "가을 추천",
    location: "서울 강북구",
    duration: "2시간 30분",
    difficulty: "쉬움",
    type: "당일 나들이",
    patternClass: "bg-pattern1",
    satisfaction: 98,
    votesUp: 142,
    votesDown: 3,
    timeline: [
      { spot: "우이령길 입구", desc: "도봉산과 북한산의 경계선으로 완만한 흙길 산책 시작.", time: "10:00" },
      { spot: "할머니 손두부 (식사)", desc: "등산로 입구 근처의 40년 전통 국산 손두부 전골.", time: "11:30" },
      { spot: "숲속 카페 쉼터", desc: "단풍이 한눈에 보이는 테라스에서 대추차 한 잔.", time: "13:00" },
      { spot: "교현리 종점", desc: "완만한 흙길의 평화로운 하산길 마루.", time: "14:30" }
    ],
    comments: [
      { user: "산악대장", text: "경사가 완만해서 무릎이 아프신 어르신 분들도 걷기에 아주 최고인 코스입니다.", date: "2026-06-25" },
      { user: "꽃바람", text: "가을 단풍 철에는 사전 예약이 필수예요! 주차가 조금 혼잡하니 참고하세요.", date: "2026-06-26" }
    ],
    photos: ["pattern1", "pattern2"],
    product: {
      title: "가평 햇가평 잣 (특등급)",
      price: 25000,
      salePrice: 19800,
      desc: "우이령길 인근 농가 협동조합에서 직송하는 100% 국산 자연 햇잣입니다."
    }
  },
  {
    id: 2,
    title: "양평 세미원 연꽃 향기길",
    season: "summer",
    seasonName: "여름 추천",
    location: "경기 양평군",
    duration: "1시간 30분",
    difficulty: "매우 쉬움",
    type: "가벼운 산책",
    patternClass: "bg-pattern2",
    satisfaction: 92,
    votesUp: 88,
    votesDown: 8,
    timeline: [
      { spot: "세미원 매표소", desc: "아름다운 연꽃 연못과 전통 정원의 시작점.", time: "09:30" },
      { spot: "배다리 건너기", desc: "강을 가로지르는 독특한 배다리를 건너 두물머리로 이동.", time: "10:30" },
      { spot: "연밭 한정식", desc: "연잎밥과 깔끔한 정갈한 시골 나물 밥상.", time: "11:30" },
      { spot: "두물머리 느티나무", desc: "수령 400년 된 보호수 아래서 연핫도그 디저트 타임.", time: "13:00" }
    ],
    comments: [
      { user: "두물머리단골", text: "여름 연꽃 필 때 아침 일찍 가면 꽃이 활짝 핀 것을 볼 수 있어요.", date: "2026-06-20" }
    ],
    photos: ["pattern3"],
    product: {
      title: "양평 유기농 연잎밥 패키지 (5팩)",
      price: 30000,
      salePrice: 22000,
      desc: "세미원 인근 친환경 연잎으로 직접 빚은 건강 연잎 영양밥 세트입니다."
    }
  },
  {
    id: 3,
    title: "보성 녹차밭 & 소리길 산책로",
    season: "spring",
    seasonName: "봄 추천",
    location: "전남 보성군",
    duration: "3시간",
    difficulty: "보통",
    type: "하루 나들이",
    patternClass: "bg-pattern3",
    satisfaction: 95,
    votesUp: 115,
    votesDown: 6,
    timeline: [
      { spot: "대한다원 입구", desc: "삼나무 가로수길을 지나 푸른 녹차 계단밭 감상.", time: "10:30" },
      { spot: "초록 잎 다원 (차 시음)", desc: "갓 우려낸 신선한 우전 녹차 한잔 시음 체험.", time: "11:45" },
      { spot: "보성 꼬막정식", desc: "근교 벌교 맛집에서 즐기는 푸짐한 벌교 꼬막 무침 밥상.", time: "13:00" }
    ],
    comments: [
      { user: "녹차홀릭", text: "경사가 살짝 있어서 편안한 운동화 착용을 권장해 드립니다. 힐링 그 자체예요.", date: "2026-06-24" }
    ],
    photos: ["pattern1", "pattern3"],
    product: {
      title: "보성 보성다원 유기농 첫물 세작 녹차",
      price: 45000,
      salePrice: 38000,
      desc: "화학비료 없이 키워 이른 봄 수확한 명품 보성 세작 녹차잎입니다."
    }
  }
];

// 엑셀 프리셋용 원시 문자열 (CSV 형식)
const excelPresets = {
  1: `"지역","계절","코스명","소요시간","난이도","코스경로","추천상품"
"경기 가평","autumn","가평 아침고요수목원 단풍길","2시간","쉬움","수목원 정원산책 -> 옛날보리밥 -> 잣두부과자 카페","가평 프리미엄 햇잣"
"강원 강릉","winter","경포호수 황토 흙길 코스","1시간 30분","매우 쉬움","경포 가시연습지 -> 강릉 초당순두부 -> 솔바람 카페","강릉 초당두부 과자세트"`,
  2: `"지역","계절","코스명","소요시간","난이도","코스경로","추천상품"
"경북 경주","spring","경주 보문호 벚꽃 길","2.5시간","쉬움","보문 산책로 -> 경주 한우 물회 -> 첨성대 팥빵","경주 찰보리빵 선물세트"
"제주 서귀포","winter","한라산 천년의 숲 비자림","1.5시간","매우 쉬움","비자림 산책로 -> 성읍 민속마을 고기국수 -> 오미자차 카페","제주 서귀포 감귤초콜릿"`
};

// 로컬 스토리지 바인딩 변수
let courses = [];
let currentCourse = null;
let currentSeasonFilter = "all";
let searchKeyword = "";

// 2. 앱 기동 시 데이터 초기화 및 로딩
document.addEventListener("DOMContentLoaded", () => {
  // 로컬스토리지에서 기존 앱 데이터 로드 (데이터 지속성 확보)
  const savedCourses = localStorage.getItem("gongacourse_data");
  if (savedCourses) {
    try {
      courses = JSON.parse(savedCourses);
    } catch (e) {
      courses = [...defaultCourses];
    }
  } else {
    courses = [...defaultCourses];
    saveToLocalStorage();
  }

  renderCourseList();
  
  // 가상 스마트폰 시계 바인딩
  updateMockTime();
  setInterval(updateMockTime, 60000);
});

// 데이터 저장 헬퍼
function saveToLocalStorage() {
  localStorage.setItem("gongacourse_data", JSON.stringify(courses));
}

// 가상 디바이스 시간 표시
function updateMockTime() {
  const timeEl = document.querySelector(".time");
  if (timeEl) {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    timeEl.textContent = `${hours}:${minutes}`;
  }
}

// 3. 뷰 네비게이션 및 라우팅 (SPA)
function navigateTo(viewId, element) {
  // 내 정보 뷰 이동에 대한 특수 예외 처리 (오버레이로 작동)
  if (viewId === 'my-page') {
    toggleMyPage(true);
    return;
  }

  // 모든 메인 뷰 비활성화
  document.querySelectorAll(".app-view").forEach(view => {
    view.classList.remove("active");
  });
  
  // 열려있는 서브 뷰(내 정보) 닫기
  toggleMyPage(false);

  // 대상 뷰 활성화
  const targetView = document.getElementById(`view-${viewId}`);
  if (targetView) {
    targetView.classList.add("active");
  }

  // 상세 뷰일 때만 헤더 백버튼 노출
  const backBtn = document.getElementById("header-back-btn");
  if (viewId === "detail") {
    backBtn.style.display = "flex";
  } else {
    backBtn.style.display = "none";
  }

  // 하단 탭바 활성화 피드백 반영
  if (element && element.classList.contains("nav-item")) {
    document.querySelectorAll(".bottom-nav .nav-item").forEach(item => {
      item.classList.remove("active");
    });
    element.classList.add("active");
  } else if (viewId === "home") {
    document.querySelectorAll(".bottom-nav .nav-item").forEach((item, idx) => {
      if (idx === 0) item.classList.add("active");
      else item.classList.remove("active");
    });
  }

  // 스크롤 상단 이동
  document.querySelector(".app-content").scrollTop = 0;
}

// 내 정보 페이지 슬라이딩 제어
function toggleMyPage(show) {
  const myPage = document.getElementById("view-my-page");
  if (!myPage) return;

  myPage.style.display = show ? "flex" : "none";
  
  if (show) {
    // 탭바 '내 정보' 아이콘 불 켜기
    document.querySelectorAll(".bottom-nav .nav-item").forEach((item, idx) => {
      if (idx === 2) item.classList.add("active");
      else item.classList.remove("active");
    });

    // 내가 작성한 후기 개수 동적 연산
    let myCommentCount = 0;
    courses.forEach(c => {
      if (c.comments) {
        c.comments.forEach(comm => {
          if (comm.user === "나들이 대장님") myCommentCount++;
        });
      }
    });
    const badge = document.getElementById("my-comment-count");
    if (badge) badge.textContent = `${myCommentCount}개`;
  }
}

// 4. 코스 목록 렌더링 (필터링 자동 포함)
function renderCourseList() {
  const container = document.getElementById("course-list-container");
  if (!container) return;

  container.innerHTML = "";

  // 필터링 규칙 적용
  const filtered = courses.filter(course => {
    const matchesSeason = (currentSeasonFilter === "all" || course.season === currentSeasonFilter);
    const matchesSearch = (
      course.title.toLowerCase().includes(searchKeyword.toLowerCase()) || 
      course.location.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    return matchesSeason && matchesSearch;
  });

  const countEl = document.getElementById("course-count");
  if (countEl) {
    countEl.textContent = `총 ${filtered.length}개 코스`;
  }

  // 리스트가 빌 때 대응
  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-list" style="text-align:center; padding: 40px 16px; color: var(--text-muted);">
        <i class="fa-solid fa-face-sad-tear" style="font-size: 36px; color: #ccc; margin-bottom: 12px; display: block;"></i>
        <p style="font-size: var(--font-base); font-weight: 500;">일치하는 코스가 없습니다.</p>
        <p style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">상단 톱니바퀴 버튼을 통해 엑셀 데이터를 추가해 보세요!</p>
      </div>
    `;
    return;
  }

  // 카드 그리기
  filtered.forEach(course => {
    const card = document.createElement("div");
    card.className = "course-card";
    card.onclick = () => showCourseDetail(course.id);

    const ratioClass = course.satisfaction >= 95 ? "high-satisfaction" : "";

    card.innerHTML = `
      <div class="card-img-wrapper ${course.patternClass}">
        <span class="card-badge">${course.seasonName}</span>
      </div>
      <div class="card-info">
        <div class="card-meta">
          <span><i class="fa-solid fa-location-dot"></i> ${course.location}</span>
          <span>${course.type}</span>
        </div>
        <h3 class="card-title-text">${course.title}</h3>
        <div class="card-footer">
          <span class="ratio-badge ${ratioClass}"><i class="fa-solid fa-thumbs-up"></i> 만족도 ${course.satisfaction}%</span>
          <span class="card-duration"><i class="fa-regular fa-clock"></i> ${course.duration}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

// 검색 핸들러
function filterCourses() {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchKeyword = searchInput.value.trim();
    renderCourseList();
  }
}

// 계절 필터 탭 처리
function selectSeason(season, element) {
  currentSeasonFilter = season;
  
  if (element) {
    const chips = element.parentElement.querySelectorAll(".chip");
    chips.forEach(chip => chip.classList.remove("active"));
    element.classList.add("active");
  }

  renderCourseList();
}

// 5. 상세 화면 로드 & 시각화
function showCourseDetail(courseId) {
  const course = courses.find(c => c.id === courseId);
  if (!course) return;

  currentCourse = course;

  // 히어로 백그라운드 디자인 매핑
  const heroBg = document.getElementById("detail-hero-bg");
  if (heroBg) heroBg.className = `detail-hero ${course.patternClass}`;
  
  document.getElementById("detail-season-badge").textContent = course.seasonName;
  document.getElementById("detail-title").textContent = course.title;
  document.getElementById("detail-subtitle").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${course.location} · ${course.type}`;
  
  document.getElementById("detail-difficulty").textContent = course.difficulty;
  document.getElementById("detail-duration").textContent = course.duration;
  
  // 투표 이력 검사 및 UI 렌더링
  renderVoteButtonsState();
  updateSatisfactionUI();

  // 타임라인 그리기
  const timelineContainer = document.getElementById("detail-timeline-container");
  if (timelineContainer) {
    timelineContainer.innerHTML = "";
    course.timeline.forEach(node => {
      const timelineNode = document.createElement("div");
      timelineNode.className = "timeline-node";
      timelineNode.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-content">
          <div class="timeline-title">
            <span>${node.spot}</span>
            <span class="timeline-time">${node.time}</span>
          </div>
          <div class="timeline-desc">${node.desc}</div>
        </div>
      `;
      timelineContainer.appendChild(timelineNode);
    });
  }

  // 특산물 배너 매핑
  if (course.product) {
    const commerceTitle = document.getElementById("commerce-title");
    if (commerceTitle) commerceTitle.textContent = `${course.product.title} 산지 한정 특가`;
    
    document.getElementById("product-modal-title").textContent = course.product.title;
    document.querySelector(".price-origin").textContent = `${course.product.price.toLocaleString()}원`;
    document.querySelector(".price-sale").textContent = `${course.product.salePrice.toLocaleString()}원`;
    document.querySelector(".product-desc").textContent = course.product.desc;
  }

  // 사진 공유 갤러리 로딩
  const gallery = document.getElementById("detail-photo-gallery");
  if (gallery) {
    gallery.innerHTML = "";
    course.photos.forEach(photoPattern => {
      const photoDiv = document.createElement("div");
      photoDiv.className = `gallery-img ${photoPattern}`;
      gallery.appendChild(photoDiv);
    });
  }

  // 댓글 리스트 로딩
  renderComments();

  // 화면 전환
  navigateTo("detail");

  // SVG 드로잉 애니메이션 강제 재기동
  const path = document.querySelector(".path-line");
  if (path) {
    path.style.animation = 'none';
    path.offsetHeight; // Reflow 트리거
    path.style.animation = 'drawPath 4s linear infinite';
  }
}

// 투표 버튼들의 active 스타일 토글
function renderVoteButtonsState() {
  if (!currentCourse) return;
  
  const upBtn = document.querySelector(".vote-up");
  const downBtn = document.querySelector(".vote-down");
  
  if (!upBtn || !downBtn) return;

  upBtn.classList.remove("voted");
  downBtn.classList.remove("voted");

  const storageKey = `voted_course_${currentCourse.id}`;
  const votedType = localStorage.getItem(storageKey);

  if (votedType === "up") {
    upBtn.classList.add("voted");
  } else if (votedType === "down") {
    downBtn.classList.add("voted");
  }
}

// 만족도 통계 UI 연산 및 갱신
function updateSatisfactionUI() {
  if (!currentCourse) return;
  
  const totalVotes = currentCourse.votesUp + currentCourse.votesDown;
  const ratio = totalVotes > 0 ? Math.round((currentCourse.votesUp / totalVotes) * 100) : 100;
  
  currentCourse.satisfaction = ratio;

  document.getElementById("detail-like-ratio").textContent = `${ratio}% 만족`;
  document.getElementById("detail-votes-up").textContent = currentCourse.votesUp;
  document.getElementById("detail-votes-down").textContent = currentCourse.votesDown;
}

// 공감도 투표 핸들러
function castVote(type) {
  if (!currentCourse) return;

  const storageKey = `voted_course_${currentCourse.id}`;
  const existingVote = localStorage.getItem(storageKey);

  // 이미 투표한 이력이 있을 경우, 취소 또는 변경 가능하게 보완
  if (existingVote) {
    if (existingVote === type) {
      // 투표 취소 처리
      if (type === 'up') currentCourse.votesUp = Math.max(0, currentCourse.votesUp - 1);
      else currentCourse.votesDown = Math.max(0, currentCourse.votesDown - 1);
      
      localStorage.removeItem(storageKey);
      alert("공감 투표가 취소되었습니다.");
    } else {
      // 투표 전환 처리 (예: 추천 -> 비추천)
      if (type === 'up') {
        currentCourse.votesUp++;
        currentCourse.votesDown = Math.max(0, currentCourse.votesDown - 1);
      } else {
        currentCourse.votesDown++;
        currentCourse.votesUp = Math.max(0, currentCourse.votesUp - 1);
      }
      localStorage.setItem(storageKey, type);
      alert("공감 의견이 변경되었습니다.");
    }
  } else {
    // 최초 투표
    if (type === 'up') {
      currentCourse.votesUp++;
    } else {
      currentCourse.votesDown++;
    }
    localStorage.setItem(storageKey, type);
    alert("공감 투표가 성공적으로 기록되었습니다. 감사합니다!");
  }

  // 로컬 및 UI 갱신 동기화
  saveToLocalStorage();
  renderVoteButtonsState();
  updateSatisfactionUI();
  renderCourseList();
}

// 댓글 렌더링
function renderComments() {
  const container = document.getElementById("detail-comments-list");
  if (!container) return;

  container.innerHTML = "";
  
  if (!currentCourse.comments || currentCourse.comments.length === 0) {
    container.innerHTML = `<p style="text-align: center; color: var(--text-muted); font-size: 12px; padding: 12px 0;">등록된 댓글이 없습니다. 첫 한줄평을 남겨보세요!</p>`;
    return;
  }

  currentCourse.comments.forEach(comment => {
    const node = document.createElement("div");
    node.className = "comment-node";
    node.innerHTML = `
      <div class="comment-avatar"><i class="fa-solid fa-comment-dots"></i></div>
      <div class="comment-body">
        <div class="comment-user">${comment.user}</div>
        <div class="comment-text">${comment.text}</div>
        <div class="comment-date">${comment.date}</div>
      </div>
    `;
    container.appendChild(node);
  });
}

// 한 줄 평 추가
function submitComment() {
  const textarea = document.getElementById("comment-textarea");
  if (!textarea) return;

  const text = textarea.value.trim();
  if (!text) {
    alert("댓글 내용을 입력해주세요.");
    return;
  }

  const newComment = {
    user: "나들이 대장님", // 가상의 기본 계정명
    text: text,
    date: new Date().toISOString().split('T')[0]
  };

  if (!currentCourse.comments) currentCourse.comments = [];
  currentCourse.comments.unshift(newComment); // 최신이 위로

  textarea.value = "";
  
  saveToLocalStorage();
  renderComments();
  
  // 내 정보 카운터 즉시 갱신을 위해 toggleMyPage(false) 해두었다가 갱신 준비
  alert("성공적으로 댓글이 등록되었습니다!");
}

// 가상 사진 추가 연동
function triggerPhotoUpload() {
  const input = document.getElementById("photo-upload-input");
  if (input) input.click();
}

function handlePhotoSelected(event) {
  if (!currentCourse) return;
  const file = event.target.files[0];
  if (file) {
    const randomPatterns = ["pattern1", "pattern2", "pattern3"];
    const randomSelected = randomPatterns[Math.floor(Math.random() * randomPatterns.length)];
    
    if (!currentCourse.photos) currentCourse.photos = [];
    currentCourse.photos.unshift(randomSelected);
    
    saveToLocalStorage();
    
    // UI에 즉시 반영
    const gallery = document.getElementById("detail-photo-gallery");
    if (gallery) {
      const photoDiv = document.createElement("div");
      photoDiv.className = `gallery-img ${randomSelected}`;
      gallery.insertBefore(photoDiv, gallery.firstChild);
    }
    
    alert("나들이 사진이 프로토타입 앨범에 성공적으로 추가되었습니다!");
  }
}

// 6. 글씨 확대 모드 토글
function toggleTextSize() {
  document.body.classList.toggle("large-text-mode");
  const isLarge = document.body.classList.contains("large-text-mode");
  
  if (isLarge) {
    alert("큰 글씨 모드가 켜졌습니다. (글자 크기 약 30% 확대)");
  } else {
    alert("일반 글씨 크기로 환원되었습니다.");
  }
}

// 7. 관리자 엑셀 업로드 관리
function toggleAdminModal(show) {
  const modal = document.getElementById("admin-modal");
  if (modal) {
    modal.style.display = show ? "flex" : "none";
    if (show) loadExcelPreset(1);
  }
}

function loadExcelPreset(id) {
  const input = document.getElementById("excel-data-input");
  if (input) {
    input.value = excelPresets[id] || "";
    
    document.querySelectorAll(".btn-preset").forEach((btn, idx) => {
      if (idx === (id - 1)) btn.classList.add("active");
      else btn.classList.remove("active");
    });
  }
}

// CSV 파서 개선 (따옴표 내 쉼표 에러 대응을 위한 안전 파싱)
function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current.trim());
  return result;
}

// 엑셀 마이그레이션 적용
function importExcelData() {
  const input = document.getElementById("excel-data-input");
  if (!input) return;

  const rawText = input.value.trim();
  if (!rawText) {
    alert("가져올 데이터가 비어 있습니다.");
    return;
  }

  try {
    const lines = rawText.split('\n');
    let addedCount = 0;
    
    // 첫째 줄(헤더) 무시하고 데이터 추출
    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue;

      const values = parseCSVLine(line);
      if (values.length < 5) continue;

      const location = values[0];
      const season = values[1];
      const title = values[2];
      const duration = values[3];
      const difficulty = values[4];
      const routeStr = values[5] || "경로정보 준비중";
      const productTitle = values[6] || "산지 보증 특산품";

      // '->' 토큰 기반 일정 정보 조립
      const spots = routeStr.split("->").map(s => s.trim());
      const timeline = spots.map((spot, idx) => {
        let time = "10:30";
        if (idx === 1) time = "12:30";
        if (idx === 2) time = "14:00";
        if (idx === 3) time = "15:30";
        return {
          spot: spot,
          desc: `${spot} 방문 및 경치 관람 코스.`,
          time: time
        };
      });

      const patterns = ["bg-pattern1", "bg-pattern2", "bg-pattern3", "bg-pattern4"];
      const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];

      const newCourseId = courses.length > 0 ? Math.max(...courses.map(c => c.id)) + 1 : 1;
      const newCourse = {
        id: newCourseId,
        title: title,
        season: season,
        seasonName: season === 'spring' ? '봄 추천' : season === 'summer' ? '여름 추천' : season === 'autumn' ? '가을 추천' : '겨울 추천',
        location: location,
        duration: duration,
        difficulty: difficulty,
        type: "엑셀 연동",
        patternClass: randomPattern,
        satisfaction: 95,
        votesUp: 5,
        votesDown: 0,
        timeline: timeline,
        comments: [],
        photos: ["pattern3"],
        product: {
          title: productTitle,
          price: 22000,
          salePrice: 16500,
          desc: `${location} 농업인협회 생산자 직송 패키지 상품.`
        }
      };

      courses.push(newCourse);
      addedCount++;
    }

    if (addedCount > 0) {
      saveToLocalStorage();
      renderCourseList();
      toggleAdminModal(false);
      alert(`축하합니다! 총 ${addedCount}개의 코스가 기존 방문 엑셀 자료로부터 데이터베이스 마이그레이션이 완료되었습니다!`);
    } else {
      alert("추출 가능한 코스 레코드가 없습니다. 포맷을 확인해 주세요.");
    }
  } catch (err) {
    alert("엑셀 데이터 변환 중 오류가 발생했습니다: " + err.message);
  }
}

// 8. 특산품 상세 커머스 오버레이
function openCommerceModal() {
  const modal = document.getElementById("commerce-modal");
  if (modal) modal.style.display = "flex";
}

function toggleCommerceModal(show) {
  const modal = document.getElementById("commerce-modal");
  if (modal) modal.style.display = show ? "flex" : "none";
}
