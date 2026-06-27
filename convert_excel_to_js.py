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
    
    # 기본값은 사계절 랜덤 배정
    seasons = [("spring", "봄 추천"), ("summer", "여름 추천"), ("autumn", "가을 추천"), ("winter", "겨울 추천")]
    return random.choice(seasons)

try:
    # header=1 로 읽어서 두 번째 행을 컬럼명으로 잡음
    df = pd.read_excel(excel_file, sheet_name="트레킹,맛집 정보", header=1)
    df = df.fillna("")
    
    parsed_courses = []
    course_id = 1
    
    for idx, row in df.iterrows():
        # 번호 컬럼이나 지역 컬럼이 없으면 스킵
        num_val = row.iloc[0]
        region = str(row.iloc[1]).strip()
        sub_region = str(row.iloc[2]).strip()
        
        # 탐방지 타이틀
        title = str(row.iloc[3]).strip()
        if not title:
            title = str(row.iloc[4]).strip() # 목적지 컬럼으로 대체
            
        if not title or title == "둘레길,트레킹 \n탐방지" or "탐방지" in title:
            continue
            
        # 번호가 명확히 기재된 행들만 파싱 대상으로 삼음
        try:
            if num_val == "":
                continue
            int(float(num_val))
        except ValueError:
            continue
            
        # 난이도
        diff = str(row.iloc[8]).strip()
        if not diff:
            diff = "보통"
            
        # 시간 파싱
        duration_val = str(row.iloc[12]).strip()
        if duration_val:
            try:
                # 숫자만 추출
                dur_num = float(''.join(c for c in duration_val if c.isdigit() or c == '.'))
                duration = f"{int(dur_num)}시간" if dur_num.is_integer() else f"{dur_num}시간"
            except:
                duration = "2시간"
        else:
            # 거리가 있으면 시간 예측 (시속 3km 환산)
            dist_val = str(row.iloc[11]).strip()
            try:
                dist_num = float(''.join(c for c in dist_val if c.isdigit() or c == '.'))
                duration = f"{round(dist_num / 3.0, 1)}시간"
            except:
                duration = "2시간"

        # 계절 파싱
        season_raw = str(row.iloc[9]).strip()
        season_code, season_name = parse_season(season_raw, title)

        # 타임라인 생성
        timeline = []
        
        # 1. 출발지
        start_spot = str(row.iloc[5]).strip()
        if not start_spot:
            start_spot = "들머리 입구"
        timeline.append({"spot": start_spot, "desc": "트레킹 시작 및 코스 입구 진입.", "time": "09:30"})
        
        # 2. 중간 경유지 (사찰 또는 연계 산행)
        temple_spot = str(row.iloc[7]).strip()
        if temple_spot:
            timeline.append({"spot": temple_spot.split(",")[0], "desc": "천년 사찰의 지혜와 수려한 정취 관람.", "time": "11:00"})
            
        view_spot = str(row.iloc[6]).strip()
        if view_spot and view_spot != "정보확인 필요":
            timeline.append({"spot": view_spot.split(",")[0], "desc": "주요 경유 명소 및 조망점 관찰.", "time": "12:30"})

        # 3. 맛집 및 카페 연동
        food_raw = str(row.iloc[14]).strip()
        add_food_raw = str(row.iloc[15]).strip()
        
        food_list = []
        if food_raw:
            food_list.extend([f.strip() for f in food_raw.split(",") if f.strip()])
        if add_food_raw:
            food_list.extend([f.strip() for f in add_food_raw.split(",") if f.strip()])
            
        comments = []
        # 맛집이 있으면 타임라인과 후기 댓글에 삽입
        if food_list:
            # 첫 번째는 점심식사로 타임라인 배정
            timeline.append({"spot": f"{food_list[0]} (식사)", "desc": "현지 방문자들이 극찬한 강추 맛집 방문.", "time": "13:30"})
            if len(food_list) > 1:
                # 두 번째는 디저트 카페로 배정
                timeline.append({"spot": f"{food_list[1]} (카페)", "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.", "time": "15:00"})
                
            # 모의 댓글 조립
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
            "product": get_product(region)
        }
        
        parsed_courses.append(course_obj)
        course_id += 1
        
    print(f"Successfully processed {len(parsed_courses)} courses from Excel.")
    
    # 6. app.js 덮어쓰기 코드 작성
    # app.js 파일의 구조를 유지하면서 defaultCourses 만 덮어쓰기 위해, 
    # 기존 app.js를 읽어와서 defaultCourses = [ ... ] 부분을 교체
    with open(js_file, "r", encoding="utf-8") as f:
        js_content = f.read()
        
    # JSON 객체를 Javascript 배열 형태로 변환
    js_courses_str = json.dumps(parsed_courses, ensure_ascii=False, indent=2)
    
    # 정규식을 이용해 const defaultCourses = [ ... ]; 부분을 교체
    import re
    # const defaultCourses = [ ... ]; 구조를 찾아냄
    pattern = r"const defaultCourses = \[\s*[\s\S]*?\n\s*\];"
    replacement = f"const defaultCourses = {js_courses_str};"
    
    new_js_content = re.sub(pattern, replacement, js_content)
    
    with open(js_file, "w", encoding="utf-8") as f:
        f.write(new_js_content)
        
    print("app.js has been successfully updated with Excel data.")

except Exception as e:
    import traceback
    print("Error during conversion:", str(e))
    traceback.print_exc()
