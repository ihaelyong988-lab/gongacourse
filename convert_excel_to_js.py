import pandas as pd
import json
import os
import random

excel_file = "가고픈곳 230307.xlsx"
js_file = "app.js"

if not os.path.exists(excel_file):
    print("Error: Excel file not found.")
    exit(1)

# 특산물 매핑 테이블
product_templates = {
    "인천": {"title": "강화도 수제 약쑥 듬뿍 차", "price": 22000, "salePrice": 16900, "desc": "강화도 현지 약쑥을 전통 방식으로 로스팅하여 눈이 편안해지는 명품 전통차입니다."},
    "서울": {"title": "서울숲 길상사 우전 수제차", "price": 28000, "salePrice": 21000, "desc": "도심 속 사찰 정취를 담아 정성껏 로스팅한 전통 수제차 패키지입니다."},
    "경기": {"title": "가평 프리미엄 무농약 가평잣", "price": 32000, "salePrice": 25000, "desc": "가령 잣나무 숲에서 무농약으로 재배한 명품 백잣 선물세트입니다."},
    "강원": {"title": "대관령 명품 평창 황태포 세트", "price": 35000, "salePrice": 27000, "desc": "영하의 덕장에서 얼고 녹기를 반복하여 속살이 노랗고 부드러운 명품 황태입니다."},
    "충청": {"title": "단양 마늘 향기 고추장 구이 세트", "price": 24000, "salePrice": 18500, "desc": "단양 육쪽마늘을 가미하여 감칠맛이 일품인 양념 구이 세트입니다."},
    "경북": {"title": "경주 명품 오릉 찰보리빵 (30구)", "price": 20000, "salePrice": 15000, "desc": "경주 찰보리로 반죽하여 구수하고 팥앙금이 달지 않아 중장년층 영양 간식으로 최고입니다."},
    "전남": {"title": "보성 다원 유기농 첫물 세작 녹차", "price": 45000, "salePrice": 38000, "desc": "화학비료 없이 키워 이른 봄 수확한 명품 보성 세작 녹차잎입니다."},
    "제주": {"title": "서귀포 친환경 해풍 감귤 박스", "price": 18000, "salePrice": 12900, "desc": "서귀포 해풍을 맞고 자라 당도가 매우 높고 껍질이 얇은 신선 감귤입니다."}
}

def get_product(region):
    for r, prod in product_templates.items():
        if r in region:
            return prod
    return {"title": "산지직송 유기농 시골 제철 과일", "price": 30000, "salePrice": 23000, "desc": "친환경 농가에서 당일 수확하여 당일 직배송하는 명품 제철 과일 패키지입니다."}

def parse_season(season_str, title_str):
    season_str = str(season_str).strip()
    title_str = str(title_str)
    
    if "봄" in season_str or "3월" in season_str or "4월" in season_str or "5월" in season_str or "벚꽃" in title_str:
        return "spring", "봄 추천"
    elif "여름" in season_str or "6월" in season_str or "7월" in season_str or "8월" in season_str or "연꽃" in title_str or "해수욕장" in title_str:
        return "summer", "여름 추천"
    elif "가을" in season_str or "9월" in season_str or "10월" in season_str or "11월" in season_str or "단풍" in title_str or "억새" in title_str:
        return "autumn", "가을 추천"
    elif "겨울" in season_str or "12월" in season_str or "1월" in season_str or "2월" in season_str or "설경" in title_str:
        return "winter", "겨울 추천"
    
    seasons = [("spring", "봄 추천"), ("summer", "여름 추천"), ("autumn", "가을 추천"), ("winter", "겨울 추천")]
    return random.choice(seasons)

try:
    df = pd.read_excel(excel_file, sheet_name="트레킹,맛집 정보", header=1)
    df = df.fillna("")
    
    parsed_courses = []
    course_id = 1
    
    for idx, row in df.iterrows():
        num_val = row.iloc[0]
        region = str(row.iloc[1]).strip()
        sub_region = str(row.iloc[2]).strip()
        
        title = str(row.iloc[3]).strip()
        if not title:
            title = str(row.iloc[4]).strip()
            
        if not title or title == "둘레길,트레킹 \n탐방지" or "탐방지" in title:
            continue
            
        try:
            if num_val == "":
                continue
            int(float(num_val))
        except ValueError:
            continue
            
        diff = str(row.iloc[8]).strip()
        if not diff:
            diff = "보통"
            
        duration_val = str(row.iloc[12]).strip()
        if duration_val:
            try:
                dur_num = float(''.join(c for c in duration_val if c.isdigit() or c == '.'))
                duration = f"{int(dur_num)}시간" if dur_num.is_integer() else f"{dur_num}시간"
            except:
                duration = "2시간"
        else:
            dist_val = str(row.iloc[11]).strip()
            try:
                dist_num = float(''.join(c for c in dist_val if c.isdigit() or c == '.'))
                duration = f"{round(dist_num / 3.0, 1)}시간"
            except:
                duration = "2시간"

        season_raw = str(row.iloc[9]).strip()
        season_code, season_name = parse_season(season_raw, title)

        timeline = []
        start_spot = str(row.iloc[5]).strip()
        if not start_spot:
            start_spot = "들머리 입구"
        timeline.append({"spot": start_spot, "desc": "트레킹 시작 및 코스 입구 진입.", "time": "09:30"})
        
        temple_spot = str(row.iloc[7]).strip()
        if temple_spot:
            timeline.append({"spot": temple_spot.split(",")[0], "desc": "천년 사찰의 지혜와 수려한 정취 관람.", "time": "11:00"})
            
        view_spot = str(row.iloc[6]).strip()
        if view_spot and view_spot != "정보확인 필요":
            timeline.append({"spot": view_spot.split(",")[0], "desc": "주요 경유 명소 및 조망점 관찰.", "time": "12:30"})

        food_raw = str(row.iloc[14]).strip()
        add_food_raw = str(row.iloc[15]).strip()
        
        food_list = []
        if food_raw:
            food_list.extend([f.strip() for f in food_raw.split(",") if f.strip()])
        if add_food_raw:
            food_list.extend([f.strip() for f in add_food_raw.split(",") if f.strip()])
            
        food_list = list(dict.fromkeys(food_list))
            
        comments = []
        if food_list:
            timeline.append({"spot": f"{food_list[0]} (식사)", "desc": "현지 방문자들이 극찬한 강추 맛집 방문.", "time": "13:30"})
            if len(food_list) > 1:
                timeline.append({"spot": f"{food_list[1]} (카페)", "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.", "time": "15:00"})
                
            comment_users = ["산책매니아", "맛집사냥꾼", "들꽃길", "강산이좋아"]
            for idx_f, food_item in enumerate(food_list[:3]):
                user = comment_users[idx_f % len(comment_users)]
                rec_types = ["재방문 의사 100%인 찐맛집입니다!", "꼭 한번 들러볼 만한 훌륭한 장소예요.", "부모님 모시고 가기 딱 좋은 아늑한 곳입니다."]
                comments.append({
                    "user": user,
                    "text": f"코스 중간에 들른 '{food_item}' 식당은 {rec_types[idx_f % len(rec_types)]}",
                    "date": f"2026-06-{random.randint(10, 26)}"
                })
        else:
            timeline.append({"spot": "근교 쉼터", "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.", "time": "14:00"})
            comments.append({
                "user": "산들바람",
                "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
                "date": "2026-06-24"
            })

        pattern_idx = (course_id % 4) + 1
        satisfaction = random.randint(93, 99)
        votes_up = random.randint(50, 180)
        votes_down = random.randint(1, 7)

        course_obj = {
            "id": course_id,
            "title": title,
            "season": season_code,
            "seasonName": season_name,
            "location": f"{region} {sub_region}".strip(),
            "duration": duration,
            "difficulty": diff,
            "type": "트레킹 코스",
            "patternClass": f"bg-pattern{pattern_idx}",
            "satisfaction": satisfaction,
            "votesUp": votes_up,
            "votesDown": votes_down,
            "timeline": timeline,
            "comments": comments,
            "photos": [f"pattern{random.randint(1,3)}", f"pattern{random.randint(1,3)}"],
            "product": get_product(region),
            "foods": food_list
        }
        
        parsed_courses.append(course_obj)
        course_id += 1
        
    print(f"Processed {len(parsed_courses)} courses.")
    js_courses_str = json.dumps(parsed_courses, ensure_ascii=False, indent=2)

    # JS 코드 갱신: 대시보드 구조에 맞춰 showCourseDetail 오버라이딩
    js_logic = f"""// =============================================================================
// 꽁아코스 - 애플리케이션 로직 (app.js)
// =============================================================================

const defaultCourses = {js_courses_str};

let courses = [];
let currentCourse = null;

// 주제별 압축 검색 및 퀵 탭 상태 변수
let currentRegionFilter = "all";
let currentSeasonFilter = "all";
let currentThemeFilter = "all";
let currentHeadTab = "all"; 
let searchKeyword = "";

document.addEventListener("DOMContentLoaded", () => {{
  const savedCourses = localStorage.getItem("gongacourse_data");
  let needReset = false;
  
  if (savedCourses) {{
    try {{
      courses = JSON.parse(savedCourses);
      if (courses.length !== defaultCourses.length) {{
        needReset = true;
      }}
    }} catch (e) {{
      needReset = true;
    }}
  }} else {{
    needReset = true;
  }}

  if (needReset) {{
    courses = [...defaultCourses];
    saveToLocalStorage();
  }}

  renderCourseList();
  
  // 첫 진입 시 첫 번째 코스를 기본 상세 대시보드로 자동 로드해 주는 대시보드형 기법 적용
  if (courses.length > 0) {{
    showCourseDetail(courses[0].id);
  }}
}});

function saveToLocalStorage() {{
  localStorage.setItem("gongacourse_data", JSON.stringify(courses));
}}

// 대시보드 탭 처리 (상세 화면으로 전환 대신 우측 패널 갱신)
function showCourseDetail(courseId) {{
  const course = courses.find(c => c.id === courseId);
  if (!course) return;

  currentCourse = course;

  // 플레이스홀더를 끄고 대시보드 활성화
  const placeholder = document.getElementById("detail-placeholder-view");
  const dashboard = document.getElementById("detail-dashboard-view");
  if (placeholder) placeholder.style.display = "none";
  if (dashboard) dashboard.style.display = "block";

  // 카드 활성화 보정 (좌측 목록에 테두리 입히기)
  document.querySelectorAll(".course-card").forEach(card => {{
    card.classList.remove("active");
  }});
  // 현재 선택한 카드 엘리먼트를 찾아서 active 부여
  const activeCard = document.querySelector(`.course-card[data-id="${{courseId}}"]`);
  if (activeCard) activeCard.classList.add("active");

  const heroBg = document.getElementById("detail-hero-bg");
  if (heroBg) heroBg.className = `detail-hero-dashboard ${{course.patternClass}}`;
  
  document.getElementById("detail-season-badge").textContent = course.seasonName;
  document.getElementById("detail-title").textContent = course.title;
  document.getElementById("detail-subtitle").innerHTML = `<i class="fa-solid fa-location-dot"></i> ${{course.location}} · ${{course.type}}`;
  
  document.getElementById("detail-difficulty").textContent = course.difficulty;
  document.getElementById("detail-duration").textContent = course.duration;
  
  renderVoteButtonsState();
  updateSatisfactionUI();

  // A. 박스형 일정표 렌더링
  const timelineContainer = document.getElementById("detail-timeline-container");
  if (timelineContainer) {{
    timelineContainer.innerHTML = "";
    course.timeline.forEach((node, nodeIdx) => {{
      let stepIcon = "👣";
      if (nodeIdx === 0) stepIcon = "🚩"; 
      else if (nodeIdx === course.timeline.length - 1) stepIcon = "🏁"; 
      else if (node.spot.includes("식사") || node.spot.includes("맛집") || node.spot.includes("식당")) stepIcon = "🍴";
      else if (node.spot.includes("카페") || node.spot.includes("커피") || node.spot.includes("쉼터")) stepIcon = "☕";
      else if (node.spot.includes("사찰") || node.spot.includes("사") || node.spot.includes("암")) stepIcon = "⛩️";

      const boxNode = document.createElement("div");
      boxNode.className = "box-timeline-item";
      boxNode.innerHTML = `
        <div class="box-timeline-icon">${{stepIcon}}</div>
        <div class="box-timeline-body">
          <div class="box-timeline-meta">
            <span class="box-timeline-spot">${{node.spot}}</span>
            <span class="box-timeline-time">${{node.time}}</span>
          </div>
          <p class="box-timeline-desc">${{node.desc}}</p>
        </div>
      `;
      timelineContainer.appendChild(boxNode);
    }});
  }}

  // B. 우측 맛집 리스트 렌더링
  const restContainer = document.getElementById("detail-restaurant-container");
  if (restContainer) {{
    restContainer.innerHTML = "";
    if (course.foods && course.foods.length > 0) {{
      course.foods.forEach((food, fIdx) => {{
        const ratings = ["★4.9 (방문자 극찬)", "★4.7 (추천 다수)", "★4.5 (찾아갈만함)"];
        const ratingText = ratings[fIdx % ratings.length];
        
        const restCard = document.createElement("div");
        restCard.className = "restaurant-item-card";
        restCard.innerHTML = `
          <div class="rest-icon-box"><i class="fa-solid fa-store"></i></div>
          <div class="rest-info-box">
            <h4>${{food}}</h4>
            <span class="rest-badge-rating">${{ratingText}}</span>
          </div>
          <a href="tel:010-1234-5678" class="rest-phone-btn" title="식당 전화 연결">
            <i class="fa-solid fa-phone"></i>
          </a>
        `;
        restContainer.appendChild(restCard);
      }});
    }} else {{
      restContainer.innerHTML = `<p style="text-align: center; color: var(--text-muted); font-size: 12px; padding: 10px 0;">주변 등록된 식당 정보가 없습니다. 도시락 준비를 추천합니다.</p>`;
    }}
  }}

  if (course.product) {{
    const commerceTitle = document.getElementById("commerce-title");
    if (commerceTitle) commerceTitle.textContent = `${{course.product.title}} 산지 한정 특가`;
    
    document.getElementById("product-modal-title").textContent = course.product.title;
    document.querySelector(".price-origin").textContent = `${{course.product.price.toLocaleString()}}원`;
    document.querySelector(".price-sale").textContent = `${{course.product.salePrice.toLocaleString()}}원`;
    document.querySelector(".product-desc").textContent = course.product.desc;
  }}

  const gallery = document.getElementById("detail-photo-gallery");
  if (gallery) {{
    gallery.innerHTML = "";
    course.photos.forEach(photoPattern => {{
      const photoDiv = document.createElement("div");
      photoDiv.className = `gallery-img ${{photoPattern}}`;
      gallery.appendChild(photoDiv);
    }});
  }}

  renderComments();

  // 모바일 기기(폭 <= 900px)에서 탭 시 상세 화면 영역으로 부드럽게 스크롤 강제 연동
  if (window.innerWidth <= 900) {{
    document.getElementById("detail-dashboard-view").scrollIntoView({{ behavior: "smooth" }});
  }}

  const path = document.querySelector(".path-line");
  if (path) {{
    path.style.animation = 'none';
    path.offsetHeight;
    path.style.animation = 'drawPath 4s linear infinite';
  }}
}}

// SPA 내비게이션 (모바일 탭 바 및 플레이어 대응)
function navigateTo(viewId, element) {{
  if (viewId === 'home') {{
    toggleMyPage(false);
    document.querySelector(".left-panel").scrollIntoView({{ behavior: "smooth" }});
  }} else if (viewId === 'my-page') {{
    toggleMyPage(true);
  }}
  
  if (element && element.classList.contains("nav-item")) {{
    document.querySelectorAll(".bottom-nav .nav-item").forEach(item => {{
      item.classList.remove("active");
    }});
    element.classList.add("active");
  }}
}}

function toggleMyPage(show) {{
  const myPage = document.getElementById("view-my-page");
  if (!myPage) return;
  myPage.style.display = show ? "flex" : "none";
  if (show) {{
    document.querySelectorAll(".bottom-nav .nav-item").forEach((item, idx) => {{
      if (idx === 4) item.classList.add("active");
      else item.classList.remove("active");
    }});

    let myCommentCount = 0;
    courses.forEach(c => {{
      if (c.comments) {{
        c.comments.forEach(comm => {{
          if (comm.user === "나들이 대장님") myCommentCount++;
        }});
      }}
    }});
    const badge = document.getElementById("my-comment-count");
    if (badge) badge.textContent = `${{myCommentCount}}개`;
  }}
}}

// 상단 헤드 탭 연동 기능
function selectHeadTab(tabId, element) {{
  currentHeadTab = tabId;
  
  if (element) {{
    const tabs = element.parentElement.querySelectorAll(".head-tab");
    tabs.forEach(tab => tab.classList.remove("active"));
    element.classList.add("active");
  }}
  
  renderCourseList();
}}

// 압축 검색 필터 적용
function applyFilters() {{
  const regionSelect = document.getElementById("filter-region");
  const seasonSelect = document.getElementById("filter-season");
  const themeSelect = document.getElementById("filter-theme");
  
  if (regionSelect) currentRegionFilter = regionSelect.value;
  if (seasonSelect) currentSeasonFilter = seasonSelect.value;
  if (themeSelect) currentThemeFilter = themeSelect.value;
  
  renderCourseList();
}}

function filterCourses() {{
  const searchInput = document.getElementById("search-input");
  if (searchInput) {{
    searchKeyword = searchInput.value.trim();
    renderCourseList();
  }}
}}

function renderCourseList() {{
  const container = document.getElementById("course-list-container");
  if (!container) return;

  container.innerHTML = "";

  const filtered = courses.filter(course => {{
    // A. 검색어 필터
    const normSearch = searchKeyword.toLowerCase().replace(/\\s+/g, "");
    let matchesSearch = true;
    if (normSearch) {{
      const matchTitle = course.title.toLowerCase().replace(/\\s+/g, "").includes(normSearch);
      const matchLoc = course.location.toLowerCase().replace(/\\s+/g, "").includes(normSearch);
      const matchType = course.type.toLowerCase().replace(/\\s+/g, "").includes(normSearch);
      
      const matchTimeline = course.timeline.some(t => 
        t.spot.toLowerCase().replace(/\\s+/g, "").includes(normSearch)
      );
      
      matchesSearch = (matchTitle || matchLoc || matchType || matchTimeline);
    }}
    
    // B. 지역 필터
    let matchesRegion = true;
    if (currentRegionFilter !== "all") {{
      matchesRegion = course.location.includes(currentRegionFilter);
    }}
    
    // C. 계절 필터
    let matchesSeason = true;
    if (currentSeasonFilter !== "all") {{
      matchesSeason = (course.season === currentSeasonFilter);
    }}
    
    // D. 테마 필터
    let matchesTheme = true;
    if (currentThemeFilter !== "all") {{
      if (currentThemeFilter === "easy") {{
        const isEasyDiff = ["쉬움", "매우 쉬움", "매우쉬움"].includes(course.difficulty);
        let isShortTime = true;
        if (course.duration) {{
          const matchHours = parseFloat(course.duration);
          if (!isNaN(matchHours) && matchHours > 2) {{
            isShortTime = false;
          }}
        }}
        matchesTheme = (isEasyDiff || isShortTime);
      }} else if (currentThemeFilter === "temple") {{
        const hasTempleInTitle = ["사", "절", "암"].some(word => course.title.includes(word));
        const hasTempleInTimeline = course.timeline.some(t => 
          ["사", "절", "암", "사찰", "암자"].some(word => t.spot.includes(word))
        );
        matchesTheme = (hasTempleInTitle || hasTempleInTimeline);
      }} else if (currentThemeFilter === "food") {{
        matchesTheme = course.timeline.some(t => 
          ["식사", "맛집", "카페", "커피", "식당", "푸드"].some(word => t.spot.includes(word))
        );
      }} else if (currentThemeFilter === "long") {{
        let isLongTime = false;
        if (course.duration) {{
          const matchHours = parseFloat(course.duration);
          if (!isNaN(matchHours) && matchHours >= 3) {{
            isLongTime = true;
          }}
        }}
        const isNotEasy = !["쉬움", "매우 쉬움", "매우쉬움"].includes(course.difficulty);
        matchesTheme = (isLongTime || isNotEasy);
      }}
    }}

    // E. 상단 헤드 탭 필터
    let matchesHeadTab = true;
    if (currentHeadTab !== "all") {{
      if (currentHeadTab === "today") {{
        matchesHeadTab = (course.satisfaction >= 96 && ["쉬움", "매우 쉬움", "매우쉬움"].includes(course.difficulty));
      }} else if (currentHeadTab === "day") {{
        if (course.duration) {{
          const matchHours = parseFloat(course.duration);
          matchesHeadTab = (!isNaN(matchHours) && matchHours <= 2.0);
        }} else {{
          matchesHeadTab = true;
        }}
      }} else if (currentHeadTab === "hot") {{
        matchesHeadTab = (course.votesUp >= 120);
      }} else if (currentHeadTab === "new") {{
        matchesHeadTab = (course.id >= 160);
      }}
    }}

    return matchesSearch && matchesRegion && matchesSeason && matchesTheme && matchesHeadTab;
  }});

  const countEl = document.getElementById("course-count");
  if (countEl) {{
    countEl.textContent = `총 ${{filtered.length}}개 코스`;
  }}

  if (filtered.length === 0) {{
    container.innerHTML = `
      <div class="empty-list" style="text-align:center; padding: 40px 16px; color: var(--text-muted); grid-column: span 2;">
        <i class="fa-solid fa-filter-circle-xmark" style="font-size: 36px; color: #ccc; margin-bottom: 12px; display: block;"></i>
        <p style="font-size: var(--font-base); font-weight: 700;">조건에 맞는 코스가 없습니다.</p>
        <p style="font-size: 12px; color: var(--text-muted); margin-top: 4px;">검색 조건을 변경해 보세요.</p>
      </div>
    `;
    return;
  }}

  filtered.forEach(course => {{
    const card = document.createElement("div");
    card.className = "course-card";
    card.setAttribute("data-id", course.id);
    card.onclick = () => showCourseDetail(course.id);

    // 대시보드상 활성화 상태 매핑
    if (currentCourse && currentCourse.id === course.id) {{
      card.classList.add("active");
    }}

    const ratioClass = course.satisfaction >= 95 ? "high-satisfaction" : "";

    let foodTagsHtml = "";
    if (course.foods && course.foods.length > 0) {{
      const foodTags = course.foods.slice(0, 2).map(f => `<span>${{f}}</span>`).join("");
      foodTagsHtml = `
        <div class="card-food-tags">
          <i class="fa-solid fa-utensils"></i>
          <div class="tags-container">${{foodTags}}</div>
        </div>
      `;
    }}

    card.innerHTML = `
      <div class="card-img-wrapper ${{course.patternClass}}">
        <span class="card-badge">${{course.seasonName}}</span>
      </div>
      <div class="card-info">
        <div class="card-meta">
          <span>${{course.location}}</span>
        </div>
        <h3 class="card-title-text" style="font-size: 12px; line-height: 1.3; height: 32px; overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; margin-bottom:4px;">${{course.title}}</h3>
        
        ${{foodTagsHtml}} 

        <div class="card-footer" style="padding-top: 6px; margin-top: 4px;">
          <span class="ratio-badge ${{ratioClass}}" style="font-size: 9px; padding: 2px 4px;"><i class="fa-solid fa-thumbs-up"></i> ${{course.satisfaction}}%</span>
          <span class="card-duration" style="font-size: 9px;"><i class="fa-regular fa-clock"></i> ${{course.duration}}</span>
        </div>
      </div>
    `;
    container.appendChild(card);
  }});
}}

function renderVoteButtonsState() {{
  if (!currentCourse) return;
  const upBtn = document.querySelector(".vote-up");
  const downBtn = document.querySelector(".vote-down");
  if (!upBtn || !downBtn) return;

  upBtn.classList.remove("voted");
  downBtn.classList.remove("voted");

  const storageKey = `voted_course_${{currentCourse.id}}`;
  const votedType = localStorage.getItem(storageKey);

  if (votedType === "up") {{
    upBtn.classList.add("voted");
  }} else if (votedType === "down") {{
    downBtn.classList.add("voted");
  }}
}}

function updateSatisfactionUI() {{
  if (!currentCourse) return;
  const totalVotes = currentCourse.votesUp + currentCourse.votesDown;
  const ratio = totalVotes > 0 ? Math.round((currentCourse.votesUp / totalVotes) * 100) : 100;
  
  currentCourse.satisfaction = ratio;

  document.getElementById("detail-like-ratio").textContent = `${{ratio}}% 만족`;
  document.getElementById("detail-votes-up").textContent = currentCourse.votesUp;
  document.getElementById("detail-votes-down").textContent = currentCourse.votesDown;
}}

function castVote(type) {{
  if (!currentCourse) return;
  const storageKey = `voted_course_${{currentCourse.id}}`;
  const existingVote = localStorage.getItem(storageKey);

  if (existingVote) {{
    if (existingVote === type) {{
      if (type === 'up') currentCourse.votesUp = Math.max(0, currentCourse.votesUp - 1);
      else currentCourse.votesDown = Math.max(0, currentCourse.votesDown - 1);
      localStorage.removeItem(storageKey);
      alert("공감 투표가 취소되었습니다.");
    }} else {{
      if (type === 'up') {{
        currentCourse.votesUp++;
        currentCourse.votesDown = Math.max(0, currentCourse.votesDown - 1);
      }} else {{
        currentCourse.votesDown++;
        currentCourse.votesUp = Math.max(0, currentCourse.votesUp - 1);
      }}
      localStorage.setItem(storageKey, type);
      alert("공감 의견이 변경되었습니다.");
    }}
  }} else {{
    if (type === 'up') currentCourse.votesUp++;
    else currentCourse.votesDown++;
    localStorage.setItem(storageKey, type);
    alert("공감 투표가 반영되었습니다!");
  }}

  saveToLocalStorage();
  renderVoteButtonsState();
  updateSatisfactionUI();
  renderCourseList();
}}

function renderComments() {{
  const container = document.getElementById("detail-comments-list");
  if (!container) return;
  container.innerHTML = "";
  
  if (!currentCourse.comments || currentCourse.comments.length === 0) {{
    container.innerHTML = `<p style="text-align: center; color: var(--text-muted); font-size: 12px; padding: 12px 0;">댓글이 없습니다.</p>`;
    return;
  }}

  currentCourse.comments.forEach(comment => {{
    const node = document.createElement("div");
    node.className = "comment-node";
    node.innerHTML = `
      <div class="comment-avatar"><i class="fa-solid fa-comment-dots"></i></div>
      <div class="comment-body">
        <div class="comment-user">${{comment.user}}</div>
        <div class="comment-text">${{comment.text}}</div>
        <div class="comment-date">${{comment.date}}</div>
      </div>
    `;
    container.appendChild(node);
  }});
}}

function submitComment() {{
  const textarea = document.getElementById("comment-textarea");
  if (!textarea) return;
  const text = textarea.value.trim();
  if (!text) {{
    alert("댓글을 입력하세요.");
    return;
  }}

  const newComment = {{
    user: "나들이 대장님",
    text: text,
    date: new Date().toISOString().split('T')[0]
  }};

  if (!currentCourse.comments) currentCourse.comments = [];
  currentCourse.comments.unshift(newComment);
  textarea.value = "";
  
  saveToLocalStorage();
  renderComments();
  alert("댓글이 등록되었습니다!");
}}

function triggerPhotoUpload() {{
  const input = document.getElementById("photo-upload-input");
  if (input) input.click();
}}

function handlePhotoSelected(event) {{
  if (!currentCourse) return;
  const file = event.target.files[0];
  if (file) {{
    const randomPatterns = ["pattern1", "pattern2", "pattern3"];
    const randomSelected = randomPatterns[Math.floor(Math.random() * randomPatterns.length)];
    if (!currentCourse.photos) currentCourse.photos = [];
    currentCourse.photos.unshift(randomSelected);
    saveToLocalStorage();
    const gallery = document.getElementById("detail-photo-gallery");
    if (gallery) {{
      const photoDiv = document.createElement("div");
      photoDiv.className = `gallery-img ${{randomSelected}}`;
      gallery.insertBefore(photoDiv, gallery.firstChild);
    }}
    alert("사진이 추가되었습니다!");
  }}
}}

function toggleTextSize() {{
  document.body.classList.toggle("large-text-mode");
  const isLarge = document.body.classList.contains("large-text-mode");
  if (isLarge) {{
    alert("큰 글씨 모드 활성화 (글자 30% 확대)");
  }} else {{
    alert("일반 글씨 크기 복원");
  }}
}}

function toggleAdminModal(show) {{
  const modal = document.getElementById("admin-modal");
  if (modal) {{
    modal.style.display = show ? "flex" : "none";
    if (show) {{
      loadExcelPreset(1);
      document.querySelectorAll(".bottom-nav .nav-item").forEach((item, idx) => {{
        if (idx === 2) item.classList.add("active");
        else item.classList.remove("active");
      }});
    }} else {{
      document.querySelectorAll(".bottom-nav .nav-item").forEach((item, idx) => {{
        if (idx === 0) item.classList.add("active");
        else item.classList.remove("active");
      }});
    }}
  }}
}}

function loadExcelPreset(id) {{
  const input = document.getElementById("excel-data-input");
  if (input) {{
    input.value = excelPresets[id] || "";
    document.querySelectorAll(".btn-preset").forEach((btn, idx) => {{
      if (idx === (id - 1)) btn.classList.add("active");
      else btn.classList.remove("active");
    }});
  }}
}}

function parseCSVLine(line) {{
  const result = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {{
    const char = line[i];
    if (char === '"') {{
      inQuotes = !inQuotes;
    }} else if (char === ',' && !inQuotes) {{
      result.push(current.trim());
      current = '';
    }} else {{
      current += char;
    }}
  }}
  result.push(current.trim());
  return result;
}}

function importExcelData() {{
  const input = document.getElementById("excel-data-input");
  if (!input) return;
  const rawText = input.value.trim();
  if (!rawText) return;

  try {{
    const lines = rawText.split('\\n');
    let addedCount = 0;
    for (let i = 1; i < lines.length; i++) {{
      const line = lines[i].trim();
      if (!line) continue;
      const values = parseCSVLine(line);
      if (values.length < 5) continue;

      const location = values[0];
      const season = values[1];
      const title = values[2];
      const duration = values[3];
      const difficulty = values[4];
      const routeStr = values[5] || "경유지 없음";
      const productTitle = values[6] || "지역 농수산물";

      const spots = routeStr.split("->").map(s => s.trim());
      const timeline = spots.map((spot, idx) => {{
        return {{ spot: spot, desc: `${{spot}} 관람 코스`, time: "11:00" }};
      }});

      const newCourseId = courses.length > 0 ? Math.max(...courses.map(c => c.id)) + 1 : 1;
      const newCourse = {{
        id: newCourseId,
        title: title,
        season: season,
        seasonName: season === 'spring' ? '봄 추천' : season === 'summer' ? '여름 추천' : season === 'autumn' ? '가을 추천' : '겨울 추천',
        location: location,
        duration: duration,
        difficulty: difficulty,
        type: "엑셀 추가",
        patternClass: "bg-pattern1",
        satisfaction: 95,
        votesUp: 5,
        votesDown: 0,
        timeline: timeline,
        comments: [],
        photos: ["pattern1"],
        product: {{ title: productTitle, price: 20000, salePrice: 15000, desc: "추가 특산물" }},
        foods: ["현지 추천 식당"]
      }};
      courses.push(newCourse);
      addedCount++;
    }}
    if (addedCount > 0) {{
      saveToLocalStorage();
      renderCourseList();
      toggleAdminModal(false);
      alert(`${{addedCount}}개 코스 마이그레이션 완료!`);
      // 마이그레이션된 첫 번째 코스로 자동 로드
      showCourseDetail(courses[courses.length - addedCount].id);
    }}
  }} catch (e) {{
    alert("오류: " + e.message);
  }}
}}

function openCommerceModal() {{
  const modal = document.getElementById("commerce-modal");
  if (modal) {{
    modal.style.display = "flex";
    document.querySelectorAll(".bottom-nav .nav-item").forEach((item, idx) => {{
      if (idx === 3) item.classList.add("active");
      else item.classList.remove("active");
    }});
  }}
}}

function toggleCommerceModal(show) {{
  const modal = document.getElementById("commerce-modal");
  if (modal) {{
    modal.style.display = show ? "flex" : "none";
    if (!show) {{
      document.querySelectorAll(".bottom-nav .nav-item").forEach((item, idx) => {{
        if (idx === 0) item.classList.add("active");
        else item.classList.remove("active");
      }});
    }}
  }}
}}
"""

    with open(js_file, "w", encoding="utf-8") as f:
        f.write(js_logic)
        
    print("app.js has been successfully updated with split-view layout.")

except Exception as e:
    import traceback
    traceback.print_exc()
