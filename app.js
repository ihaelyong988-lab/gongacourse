// =============================================================================
// 꽁아코스 - 애플리케이션 로직 (app.js)
// =============================================================================

const defaultCourses = [
  {
    "id": 1,
    "title": "마니산,함허동천",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "인천 강화도",
    "duration": "5시간",
    "difficulty": "비순환",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 93,
    "votesUp": 110,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "정수사매표소",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "적석사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "석모도 바람길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "희소식 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "블랙펄커피 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '희소식' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '블랙펄커피' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '그린홀리' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "희소식",
      "블랙펄커피",
      "그린홀리",
      "서령",
      "농가의식탁",
      "수라전통육개장",
      "섬약쑥한우",
      "강화원조칼",
      "멍때림"
    ]
  },
  {
    "id": 2,
    "title": "대부해솔길01코스",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "인천 대부도",
    "duration": "4시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 94,
    "votesUp": 162,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "가보고싶은집 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "유가네칼국수 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '가보고싶은집' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '유가네칼국수' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '동환네조개' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "가보고싶은집",
      "유가네칼국수",
      "동환네조개",
      "권오길칼",
      "카페에바다",
      "바바부단커피",
      "리아드소포라"
    ]
  },
  {
    "id": 3,
    "title": "인천삼형제섬길,장봉 종주길",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "인천 옹진군",
    "duration": "4시간",
    "difficulty": "비순환",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 96,
    "votesUp": 121,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "신도항",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "식객 식당",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "이백분 조개구이 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "영흥일번지 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '이백분 조개구이' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '영흥일번지' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '바닷길식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "이백분 조개구이",
      "영흥일번지",
      "바닷길식당",
      "소망식당",
      "양평해장국",
      "선재리커피집",
      "뷰카페",
      "커피아마마스",
      "0415카페"
    ]
  },
  {
    "id": 4,
    "title": "센트럴파크 둘레길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "인천 송도신도시",
    "duration": "1.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 95,
    "votesUp": 79,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "고집131 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "고기원칙 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '고집131' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '고기원칙' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '스시사쿠' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "고집131",
      "고기원칙",
      "스시사쿠",
      "스시이치",
      "송도어신",
      "장독집",
      "전구식당",
      "JS가든",
      "명품삼계탕A"
    ]
  },
  {
    "id": 5,
    "title": "인천둘레길6,9코스",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "인천 연수구",
    "duration": "4.02시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 93,
    "votesUp": 115,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "호불사입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "문화공원 작은도서관",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "백란 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "긴자 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '백란' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '긴자' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '우판등심' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "백란",
      "긴자",
      "우판등심",
      "사쿠텐",
      "군봉묵은지김치찜",
      "우화미",
      "보릿고개 인천연수점"
    ]
  },
  {
    "id": 6,
    "title": "소무의도,삼형제섬",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "인천 중구",
    "duration": "1.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 97,
    "votesUp": 120,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "무의도 광명항 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "호룡곡산",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "황해해물칼국수A (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "거해짬뽕순부두 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '황해해물칼국수A' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '거해짬뽕순부두' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '용현털보아구찜' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "황해해물칼국수A",
      "거해짬뽕순부두",
      "용현털보아구찜"
    ]
  },
  {
    "id": 7,
    "title": "소래포구 가는 길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "인천 남동구",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 98,
    "votesUp": 129,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "육통형 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "통큰해물손칼 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '육통형' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '통큰해물손칼' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '대게수산' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "육통형",
      "통큰해물손칼",
      "대게수산",
      "아웃백스테이크",
      "맷돌로만 소래점",
      "남도술상",
      "나운순대"
    ]
  },
  {
    "id": 8,
    "title": "청계산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "서울 서초구",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 98,
    "votesUp": 126,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 9,
    "title": "수락산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "서울 노원구",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 93,
    "votesUp": 100,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "우이령길21길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 10,
    "title": "도봉산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "서울 강북구",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 96,
    "votesUp": 78,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "19구간 무수골",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "간송 옛집",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 11,
    "title": "서울숲공원 산책길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "서울 광진구",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 94,
    "votesUp": 150,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 12,
    "title": "창덕궁 후원,삼청동 길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "서울 종로구",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 95,
    "votesUp": 66,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "삼각산 화계사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "삼청동 길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 13,
    "title": "홍릉숲(명성황후)",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "서울 동대문구",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 93,
    "votesUp": 93,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 14,
    "title": "덕수궁 정문~경향신문사",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "서울 중구",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 99,
    "votesUp": 136,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 15,
    "title": "구름산둘레길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 광명",
    "duration": "3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 98,
    "votesUp": 133,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "동굴주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "구름산추어 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "콩두철산 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '구름산추어' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '콩두철산' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '보릿골' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "구름산추어",
      "콩두철산",
      "보릿골",
      "신림춘천집",
      "양천뼈다귀",
      "광명족발",
      "항아리보쌈"
    ]
  },
  {
    "id": 16,
    "title": "물왕 저수지,오이도",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 시흥",
    "duration": "0.5시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 94,
    "votesUp": 100,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "정정아식당 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "카츠오모이 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '정정아식당' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '카츠오모이' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '전라도맛있는' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "정정아식당",
      "카츠오모이",
      "전라도맛있는",
      "북촌삼대갈비",
      "핵밥",
      "쏘삼208",
      "소래버섯나라",
      "조개포차",
      "등대회집"
    ]
  },
  {
    "id": 17,
    "title": "소래산 정상",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 시흥",
    "duration": "1.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 94,
    "votesUp": 158,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "흙과사람들 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "쿠우쿠우 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '흙과사람들' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '쿠우쿠우' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '100년장어촌' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "흙과사람들",
      "쿠우쿠우",
      "100년장어촌",
      "남도추어탕",
      "양평해장국",
      "고기원칙",
      "흥부네쌈밥",
      "건강한밥상",
      "좋은날국수"
    ]
  },
  {
    "id": 18,
    "title": "제3코스",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 구리",
    "duration": "2.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 93,
    "votesUp": 67,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "장자 연못길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "시골식당 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "청춘집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '시골식당' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '청춘집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '방일해장국' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "시골식당",
      "청춘집",
      "방일해장국",
      "맛집이 왜 없을까..?"
    ]
  },
  {
    "id": 19,
    "title": "분원길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 광주",
    "duration": "1.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 99,
    "votesUp": 131,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "남한산성 산행길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "초월보리밥 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "부영장어 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '초월보리밥' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '부영장어' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '농가보쌈(훈제요리)' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "초월보리밥",
      "부영장어",
      "농가보쌈(훈제요리)",
      "대복식당",
      "두코",
      "동동국수",
      "이너프투",
      "엘포레스트"
    ]
  },
  {
    "id": 20,
    "title": "남한산성 둘레길 1코스",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 성남",
    "duration": "1.2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 98,
    "votesUp": 76,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "율동호수공원 산책길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "서울감자탕 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "미방 정자점 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '서울감자탕' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '미방 정자점' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '초원의집' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "서울감자탕",
      "미방 정자점",
      "초원의집",
      "소담촌",
      "보조락",
      "가마솥전통백암순대",
      "스시긴"
    ]
  },
  {
    "id": 21,
    "title": "산수유 둘레길,길동무길",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "경기 이천",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 94,
    "votesUp": 152,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "사기막골 도예촌,예스파크,돼지박물관",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "행불선원",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "연꽃",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "석촌골 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "안옥화음식 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '석촌골' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '안옥화음식' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '설악막국수' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "석촌골",
      "안옥화음식",
      "설악막국수",
      "관촌순두부",
      "이진상회",
      "돌솥밥시골밥상",
      "엄지장수촌",
      "예원식당",
      "미반 이천점"
    ]
  },
  {
    "id": 22,
    "title": "평화누리길 1코스",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 김포",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 93,
    "votesUp": 138,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "김포 장릉 둘레길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "락원(만두국) (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "엄마의봄날 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '락원(만두국)' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '엄마의봄날' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '인생화로' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "락원(만두국)",
      "엄마의봄날",
      "인생화로",
      "평창진부막국수",
      "산들마을",
      "갈비본질",
      "그믐달",
      "육가식당"
    ]
  },
  {
    "id": 23,
    "title": "고양대덕생태공원",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "경기 고양",
    "duration": "1.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 96,
    "votesUp": 112,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "한강 다목적운동장 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "일산호수길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "밍차이 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "장어사냥 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '밍차이' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '장어사냥' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '박승광칼국수' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "밍차이",
      "장어사냥",
      "박승광칼국수",
      "공화춘",
      "에덴(장어)",
      "장수촌",
      "양평해장국"
    ]
  },
  {
    "id": 24,
    "title": "북한산,행주나루길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 고양",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 97,
    "votesUp": 89,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "제주하영 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "갤러리카페 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '제주하영' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '갤러리카페' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "제주하영",
      "갤러리카페"
    ]
  },
  {
    "id": 25,
    "title": "명지산,연인산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 가평",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 93,
    "votesUp": 57,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "자라꿈길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "농부의뜰 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '농부의뜰' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "농부의뜰"
    ]
  },
  {
    "id": 26,
    "title": "유명산,운악산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 가평",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 96,
    "votesUp": 111,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 27,
    "title": "화악산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 가평",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 99,
    "votesUp": 54,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 28,
    "title": "용문산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 양평",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 93,
    "votesUp": 164,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "용문사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "무왕리 낙엽송숲",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "광이원 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "풍년목장가든 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '광이원' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '풍년목장가든' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '농가집' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "광이원",
      "풍년목장가든",
      "농가집"
    ]
  },
  {
    "id": 29,
    "title": "양평 잣나무 숲",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 양평",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 95,
    "votesUp": 61,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "물소리길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 30,
    "title": "여주파사성",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 여주",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 95,
    "votesUp": 50,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "파사성 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "노을명소",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "감성식탁 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "강계봉진 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '감성식탁' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '강계봉진' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '명인왕갈비' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "감성식탁",
      "강계봉진",
      "명인왕갈비",
      "장복골",
      "연양정원",
      "걸구쟁이",
      "시골맛집",
      "옛맛시골집",
      "서해궁",
      "구좌리얼크",
      "돗가비",
      "재상막국수"
    ]
  },
  {
    "id": 31,
    "title": "관악산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 과천",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 99,
    "votesUp": 158,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "천연숲길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "통나무집 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "수미수작 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '통나무집' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '수미수작' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '서해숯불민물장어' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "통나무집",
      "수미수작",
      "서해숯불민물장어",
      "별주막",
      "보리촌곤드레",
      "스테이블14",
      "아라비카커핑",
      "카페반다이크"
    ]
  },
  {
    "id": 32,
    "title": "심학산,감악산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 파주",
    "duration": "1시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 98,
    "votesUp": 164,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "고령산 보광사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "마장호수 둘레길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "더티트렁크 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "심학산뜨락 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '더티트렁크' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '심학산뜨락' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '옛날시골밥상' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "더티트렁크",
      "심학산뜨락",
      "옛날시골밥상",
      "심학산두부",
      "농가",
      "식물감각",
      "가림시골밥상",
      "장어명가지중해",
      "장원막국수"
    ]
  },
  {
    "id": 33,
    "title": "소풍길1,3,6코스",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 의정부",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 96,
    "votesUp": 84,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 34,
    "title": "소요산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 동두천",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 98,
    "votesUp": 110,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 35,
    "title": "명성산,국립수목원,고모호수공원",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 포천",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 96,
    "votesUp": 72,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "광릉숲,물안개길,산정호수길",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "아트밸리(천주호)",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "쌍용해장국 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "바위섬가든 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '쌍용해장국' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '바위섬가든' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '숲속의제빵' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "쌍용해장국",
      "바위섬가든",
      "숲속의제빵",
      "강릉메밀막국수",
      "연미정",
      "등심퐁당샤브"
    ]
  },
  {
    "id": 36,
    "title": "한탄강 산책길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 연천",
    "duration": "0.2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 99,
    "votesUp": 104,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 37,
    "title": "독산성길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 오산",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 94,
    "votesUp": 167,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "북극해고등어 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "행복한콩박사 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '북극해고등어' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '행복한콩박사' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '송강커피' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "북극해고등어",
      "행복한콩박사",
      "송강커피"
    ]
  },
  {
    "id": 38,
    "title": "시화호 갈대숲길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 안산",
    "duration": "30시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 95,
    "votesUp": 179,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "먹쇠민물장어 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "포크너 본점 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '먹쇠민물장어' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '포크너 본점' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '영월애곤드레' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "먹쇠민물장어",
      "포크너 본점",
      "영월애곤드레",
      "막퍼전복",
      "카페에바다"
    ]
  },
  {
    "id": 39,
    "title": "백운호수길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 의왕",
    "duration": "1시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 97,
    "votesUp": 154,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "청계산산책길(청계사)",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "청운누룽지백숙 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "청계누룽지백숙 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '청운누룽지백숙' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '청계누룽지백숙' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '열두대문계절쌈밥' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "청운누룽지백숙",
      "청계누룽지백숙",
      "열두대문계절쌈밥",
      "이우철한정식",
      "정성담 의왕점",
      "장어의전설",
      "원조옛날보리"
    ]
  },
  {
    "id": 40,
    "title": "제부도 해안산책길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 화성",
    "duration": "0.2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 98,
    "votesUp": 82,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "동탄호수공원",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "산이내린밥상 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "왕골남서문 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '산이내린밥상' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '왕골남서문' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '산골추어탕' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "산이내린밥상",
      "왕골남서문",
      "산골추어탕",
      "구가네통영굴"
    ]
  },
  {
    "id": 41,
    "title": "동탄호수공원",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 동탄",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 97,
    "votesUp": 64,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "북극해고등어 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "크래버대게 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '북극해고등어' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '크래버대게' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '승도리네곱' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "북극해고등어",
      "크래버대게",
      "승도리네곱",
      "동트는농가",
      "늘솜초밥",
      "곤드레향기"
    ]
  },
  {
    "id": 42,
    "title": "소리길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 평택",
    "duration": "0.2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 94,
    "votesUp": 166,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "소풍정원 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "마린센터전망대",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "밥보다국시 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "나귀당귀 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '밥보다국시' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '나귀당귀' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '경복궁한정식' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "밥보다국시",
      "나귀당귀",
      "경복궁한정식",
      "아웃백스",
      "황당한 장어",
      "장수옥설렁",
      "장도참치",
      "미당초밥"
    ]
  },
  {
    "id": 43,
    "title": "용설호수 둘레길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 용인",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 98,
    "votesUp": 96,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "용인랜드숯가마",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "금광호수길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "짬뽕지존 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "세영이네 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '짬뽕지존' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '세영이네' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '안성장터국밥' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "짬뽕지존",
      "세영이네",
      "안성장터국밥",
      "남포동직화쭈꾸미",
      "미나리와삼겹살",
      "안성깍두기",
      "어부의밥상",
      "재건사커피"
    ]
  },
  {
    "id": 44,
    "title": "정광산 둘레길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 용인",
    "duration": "2.2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 97,
    "votesUp": 97,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "스시율 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "고반식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '스시율' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '고반식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '강원도막국수' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "스시율",
      "고반식당",
      "강원도막국수",
      "큰마당감자",
      "엄마는스테이크",
      "메이란",
      "미가훠궈"
    ]
  },
  {
    "id": 45,
    "title": "화성외곽길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 수원",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 94,
    "votesUp": 89,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "원천호수~여우골 숲길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "고기굽는교실 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "신림춘천집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '고기굽는교실' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '신림춘천집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '도쿄등심' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "고기굽는교실",
      "신림춘천집",
      "도쿄등심",
      "쏘삼208 인계나혜석",
      "대가원",
      "멘야고코로",
      "카페 도안"
    ]
  },
  {
    "id": 46,
    "title": "다산유적산책길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 남양주",
    "duration": "0.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 99,
    "votesUp": 158,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "운길산 수종사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "목향원 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "덕소숯불고기 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '목향원' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '덕소숯불고기' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '북한강막국수' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "목향원",
      "덕소숯불고기",
      "북한강막국수",
      "광릉한옥점",
      "기와집순두부"
    ]
  },
  {
    "id": 47,
    "title": "원미산 산책길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경기 부천",
    "duration": "1.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 96,
    "votesUp": 143,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "260도 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "긴꼬리초밥 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '260도' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '긴꼬리초밥' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '절대갈비' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "260도",
      "긴꼬리초밥",
      "절대갈비",
      "장어명가",
      "오세식당",
      "앤드류",
      "분더커피바"
    ]
  },
  {
    "id": 48,
    "title": "펀치볼 둘레길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 양구",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 96,
    "votesUp": 142,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "4개 코스 확인필요",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "양구재래식손두부 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "시래원 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '양구재래식손두부' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '시래원' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '광치막국수' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "양구재래식손두부",
      "시래원",
      "광치막국수",
      "파로호국밥"
    ]
  },
  {
    "id": 49,
    "title": "오대산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 평창",
    "duration": "3.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 97,
    "votesUp": 69,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "상원사탐방지원센터",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "오대산 월정사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "대관령 쉼터는 선자령 눈꽃 산행",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "산들산채식당 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "산촌 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '산들산채식당' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '산촌' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '오대산 민속식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "산들산채식당",
      "산촌",
      "오대산 민속식당",
      "육칼밥",
      "경남식당"
    ]
  },
  {
    "id": 50,
    "title": "발왕산 생태숲",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 평창",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 95,
    "votesUp": 67,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "대관령쉼터",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "선자령 눈꽃",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 51,
    "title": "가리산(홍천)",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 홍천",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 96,
    "votesUp": 142,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "잣나무 숲",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "준이네 통나무집 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "금수강산막국수 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '준이네 통나무집' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '금수강산막국수' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '팔봉산메밀촌막국수' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "준이네 통나무집",
      "금수강산막국수",
      "팔봉산메밀촌막국수"
    ]
  },
  {
    "id": 52,
    "title": "수타사 산소길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 홍천",
    "duration": "1시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 98,
    "votesUp": 62,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "공작산생태숲교육관",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "공작산 수타사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "전통 주조 ‘예술",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "오대산내고향 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "신토불이 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '오대산내고향' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '신토불이' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '큰집가마솥설렁탕' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "오대산내고향",
      "신토불이",
      "큰집가마솥설렁탕"
    ]
  },
  {
    "id": 53,
    "title": "방태산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 인제",
    "duration": "4시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 96,
    "votesUp": 170,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "개인약수 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "개인약수 생태탐방로",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "송희식당 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "자작자작식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '송희식당' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '자작자작식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '자작나무숲' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "송희식당",
      "자작자작식당",
      "자작나무숲",
      "천상의 화원",
      "숲속의 빈터",
      "슈네화덕피자"
    ]
  },
  {
    "id": 54,
    "title": "인제 자작나무숲",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 인제",
    "duration": "3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 95,
    "votesUp": 99,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "오대산 옛길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "옛날원대막국수 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "인제막국수 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '옛날원대막국수' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '인제막국수' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '남북면옥' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "옛날원대막국수",
      "인제막국수",
      "남북면옥",
      "방태천막국수",
      "아웅감자",
      "전씨네막국수"
    ]
  },
  {
    "id": 55,
    "title": "백담사~봉정암,한계령",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 인제",
    "duration": "10시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 97,
    "votesUp": 122,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "용대리 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "설악산 백담사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "십이선녀탕",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "산마을 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "백담순두부 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '산마을' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '백담순두부' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '산채촌' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "산마을",
      "백담순두부",
      "산채촌",
      "곰배령금순이",
      "피아시추어탕",
      "부흥식당",
      "산채이야기",
      "황태랑"
    ]
  },
  {
    "id": 56,
    "title": "아야진 해변",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 고성",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 98,
    "votesUp": 76,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "금강산 건봉사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "백촌막국수 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "교동막국수 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '백촌막국수' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '교동막국수' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '봉포맛집' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "백촌막국수",
      "교동막국수",
      "봉포맛집",
      "별미여행",
      "소구리설렁탕",
      "송지호횟",
      "드레",
      "아라커피"
    ]
  },
  {
    "id": 57,
    "title": "설악산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 속초",
    "duration": "3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 99,
    "votesUp": 160,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "설악주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "미시령 옛길(드라이브",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "너도대게 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "솔밭가든막국수 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '너도대게' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '솔밭가든막국수' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '신토불이감자' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "너도대게",
      "솔밭가든막국수",
      "신토불이감자",
      "정든식당",
      "카페설악산로",
      "원조함흥냉면",
      "강릉동화가든"
    ]
  },
  {
    "id": 58,
    "title": "설악산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 속초",
    "duration": "6시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 94,
    "votesUp": 180,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "설악주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "설악산 향로봉",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "앤커피스토리 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "단천식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '앤커피스토리' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '단천식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '속초대게' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "앤커피스토리",
      "단천식당",
      "속초대게",
      "명성게찜",
      "승진호",
      "아바이회",
      "두메산골",
      "소야삼교리 동치미",
      "아루나",
      "곤드레밥집"
    ]
  },
  {
    "id": 59,
    "title": "설악산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 속초",
    "duration": "9시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 94,
    "votesUp": 151,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "설악주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "비선대",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "김영애할머니순두부 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '김영애할머니순두부' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "김영애할머니순두부"
    ]
  },
  {
    "id": 60,
    "title": "외옹치 바다향기로",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 속초",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 99,
    "votesUp": 125,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 61,
    "title": "죽도,남애항",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 양양",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 98,
    "votesUp": 117,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "오봉산 낙산사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "구룡령 옛길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "농가맛집 달래촌<한식> (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '농가맛집 달래촌<한식>' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "농가맛집 달래촌<한식>"
    ]
  },
  {
    "id": 62,
    "title": "설악산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 양양",
    "duration": "2.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 97,
    "votesUp": 165,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "오색약수터 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "영광정 메밀국수 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "실로암메밀국수 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '영광정 메밀국수' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '실로암메밀국수' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '입암메밀타운' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "영광정 메밀국수",
      "실로암메밀국수",
      "입암메밀타운"
    ]
  },
  {
    "id": 63,
    "title": "대관령 소나무 숲",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 강릉",
    "duration": "1.3시간",
    "difficulty": "쉬움",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 99,
    "votesUp": 164,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "해안선 산책길 유료",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "심곡항~금진해변드라이브",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "강변식당 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "동화가든 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '강변식당' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '동화가든' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '엄지네포장마차' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "강변식당",
      "동화가든",
      "엄지네포장마차",
      "400년집초당순두부"
    ]
  },
  {
    "id": 64,
    "title": "오대산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 강릉",
    "duration": "2.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 95,
    "votesUp": 81,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "소금강 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "오대산 월정사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "계곡",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 65,
    "title": "추암해변,망상해변,옥계휴게소",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 동해",
    "duration": "1시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 94,
    "votesUp": 66,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "근접 해변주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "해변",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "한우설렁탕(연말끝) (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "홍대포(해천탕) (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '한우설렁탕(연말끝)' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '홍대포(해천탕)' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '냉면권가' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "한우설렁탕(연말끝)",
      "홍대포(해천탕)",
      "냉면권가",
      "무위",
      "청년마카롱",
      "더좋은날"
    ]
  },
  {
    "id": 66,
    "title": "두타산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 동해",
    "duration": "3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 93,
    "votesUp": 162,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "탐방 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "삼화사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "무릉별유천지",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "수림 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "추암횟집대게 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '수림' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '추암횟집대게' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '어향' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "수림",
      "추암횟집대게",
      "어향",
      "고향의맛칼",
      "뜰안에한정식"
    ]
  },
  {
    "id": 67,
    "title": "장호항~광진항",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 삼척",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 97,
    "votesUp": 52,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "덕봉산",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "삼척보스대게 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "삼척전복해물뚝배기 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '삼척보스대게' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '삼척전복해물뚝배기' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '두레박고을' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "삼척보스대게",
      "삼척전복해물뚝배기",
      "두레박고을",
      "오복예향",
      "삼척수제비"
    ]
  },
  {
    "id": 68,
    "title": "활기 치유의 숲",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 삼척",
    "duration": "3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 99,
    "votesUp": 170,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "마룡소,물소리길,용소폭포",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "마룡소",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "뜰애홍합밥A2 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "도하문어 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '뜰애홍합밥A2' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '도하문어' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '감나무(한식)' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "뜰애홍합밥A2",
      "도하문어",
      "감나무(한식)",
      "신다리(국수)",
      "장호용화관광랜드 식당",
      "스테이"
    ]
  },
  {
    "id": 69,
    "title": "덕항산,응봉산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 삼척",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 93,
    "votesUp": 117,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "일품해물탕 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "삼정육계장 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '일품해물탕' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '삼정육계장' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '만남의식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "일품해물탕",
      "삼정육계장",
      "만남의식당",
      "엄마손태백물닭갈비",
      "어나더",
      "파로라",
      "카페 얼",
      "부남미술관카페"
    ]
  },
  {
    "id": 70,
    "title": "태백산,민둥산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 정선",
    "duration": "3.3시간",
    "difficulty": "중상",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 94,
    "votesUp": 50,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "증산 초등 주차장,안내소",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "두위봉",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "메일촌 막국수 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "군언송어횟집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '메일촌 막국수' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '군언송어횟집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '동박골식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "메일촌 막국수",
      "군언송어횟집",
      "동박골식당",
      "윤식당",
      "예촌돌솥밥",
      "나전역카페"
    ]
  },
  {
    "id": 71,
    "title": "가리왕산,뱅뱅이길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 정선",
    "duration": "1.3시간",
    "difficulty": "비순환",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 99,
    "votesUp": 60,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "동강12경(질족령)",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "옥산장 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "번영식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '옥산장' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '번영식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '산마실' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "옥산장",
      "번영식당",
      "산마실",
      "팔도식당",
      "웰빙한방마을(닭)",
      "아리 커피로스터스",
      "아우로라",
      "뒤뜰"
    ]
  },
  {
    "id": 72,
    "title": "함백산,분주령야생화길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 태백",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 96,
    "votesUp": 87,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "함백산 하늘숲",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "망경사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "운탄고도",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "너와집 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "오투정 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '너와집' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '오투정' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '한서방칼국수' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "너와집",
      "오투정",
      "한서방칼국수",
      "소나무정원",
      "미반",
      "정가네막국수",
      "무쇠보리",
      "플레인",
      "백번의봄"
    ]
  },
  {
    "id": 73,
    "title": "태화산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 영월",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 96,
    "votesUp": 117,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "경관숲",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "산속의 친구 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "상동막국수 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '산속의 친구' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '상동막국수' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '동강다슬기' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "산속의 친구",
      "상동막국수",
      "동강다슬기",
      "강원토속식당",
      "장릉보리밥집",
      "사랑방식당"
    ]
  },
  {
    "id": 74,
    "title": "삼악산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 춘천",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 99,
    "votesUp": 139,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "청평사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "샘밭막국수 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "명가막국수 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '샘밭막국수' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '명가막국수' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '부안막국수' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "샘밭막국수",
      "명가막국수",
      "부안막국수",
      "농가닭갈비",
      "1.5닭갈비",
      "원조숯불닭불고기"
    ]
  },
  {
    "id": 75,
    "title": "용화산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 화천",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 99,
    "votesUp": 109,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 76,
    "title": "횡성호수길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 횡성",
    "duration": "1.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 99,
    "votesUp": 124,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "횡성호수길 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "채림의 정원",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "오음산 산야초밥상 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "윤가이가 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '오음산 산야초밥상' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '윤가이가' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '농가맛집산촌' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "오음산 산야초밥상",
      "윤가이가",
      "농가맛집산촌"
    ]
  },
  {
    "id": 77,
    "title": "반계리은행나무",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 문막",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 93,
    "votesUp": 144,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "자연을 담은두부 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "제주킬로그램 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '자연을 담은두부' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '제주킬로그램' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '한끼밥상' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "자연을 담은두부",
      "제주킬로그램",
      "한끼밥상",
      "빅쭌부대찌개",
      "천마산막국수",
      "정순화황토방청국장",
      "인기구이식탁"
    ]
  },
  {
    "id": 78,
    "title": "법천사지와 거돈사지,소금산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 원주",
    "duration": "3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 97,
    "votesUp": 127,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "간현관광지주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "소금산 둘레길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "부론보리밥집 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "부귀막국수 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '부론보리밥집' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '부귀막국수' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '옛맛시골집' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "부론보리밥집",
      "부귀막국수",
      "옛맛시골집",
      "부지갱이밥상",
      "만낭포 감자떡",
      "순애네추어탕"
    ]
  },
  {
    "id": 79,
    "title": "감악산(원주),원주백운산휴양림",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 원주",
    "duration": "6.1시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 96,
    "votesUp": 105,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "감악산쉼터주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "뮤지엄산",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "어가본가 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "산장가든 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '어가본가' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '산장가든' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '몽그리즈' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "어가본가",
      "산장가든",
      "몽그리즈",
      "큰골집",
      "황골엿"
    ]
  },
  {
    "id": 80,
    "title": "치악산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 원주",
    "duration": "5.3시간",
    "difficulty": "어려움",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 93,
    "votesUp": 124,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "구룡사 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "성남로457소롯길(나물밥상) (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "손말이고기산정집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '성남로457소롯길(나물밥상)' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '손말이고기산정집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "성남로457소롯길(나물밥상)",
      "손말이고기산정집"
    ]
  },
  {
    "id": 81,
    "title": "한가터11코스,국형사",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 원주",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 95,
    "votesUp": 63,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "한가터주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "국형사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "운곡솔바람숲길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "토정추어탕 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "원주복추어탕 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '토정추어탕' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '원주복추어탕' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '쌍동통닭' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "토정추어탕",
      "원주복추어탕",
      "쌍동통닭",
      "봄내(한정식)",
      "수피아카페",
      "더나무",
      "황골엿"
    ]
  },
  {
    "id": 82,
    "title": "구룡길,미륵산경천묘",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "강원 원주",
    "duration": "2.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 96,
    "votesUp": 100,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "구룡사 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "구룡사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "장가네보리밥 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "황골장어 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '장가네보리밥' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '황골장어' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '오가네손두부' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "장가네보리밥",
      "황골장어",
      "오가네손두부",
      "원주보릿고개식당",
      "칡산에"
    ]
  },
  {
    "id": 83,
    "title": "가야산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 합천",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 97,
    "votesUp": 157,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "뚝배기가든 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "홍도식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '뚝배기가든' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '홍도식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '연꽃인연' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "뚝배기가든",
      "홍도식당",
      "연꽃인연"
    ]
  },
  {
    "id": 84,
    "title": "가야산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 합천",
    "duration": "2.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 95,
    "votesUp": 85,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "가야산 해인사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "합천호 둘레길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "참숯골 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "삼성식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '참숯골' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '삼성식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '순할머니' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "참숯골",
      "삼성식당",
      "순할머니",
      "이화장식당",
      "카페모토라드",
      "카페그꽃",
      "피오르"
    ]
  },
  {
    "id": 85,
    "title": "천황산,재약산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 밀양",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 96,
    "votesUp": 98,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "죽전마을",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "사자평",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "단골집 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "설봉돼지국밥 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '단골집' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '설봉돼지국밥' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '어셈블커피로스터즈' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "단골집",
      "설봉돼지국밥",
      "어셈블커피로스터즈",
      "카페 다담다",
      "도프트커피로스터스"
    ]
  },
  {
    "id": 86,
    "title": "영남루 수변공원길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 밀양",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 97,
    "votesUp": 131,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "밀양 위양못",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "원조본가가야밀면 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "입소문맷돌순두부 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '원조본가가야밀면' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '입소문맷돌순두부' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '동부식육식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "원조본가가야밀면",
      "입소문맷돌순두부",
      "동부식육식당",
      "트리인블루",
      "메나쥬",
      "카페그로브"
    ]
  },
  {
    "id": 87,
    "title": "신불산",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "경남 울주",
    "duration": "3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 98,
    "votesUp": 87,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "복합웰컴센터, 2코스",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "도동산방(한정식)",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "언양원조불고기 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "하와이새우트럭 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '언양원조불고기' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '하와이새우트럭' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '언양향토불고기' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "언양원조불고기",
      "하와이새우트럭",
      "언양향토불고기",
      "로망스아구찜",
      "농도",
      "카페수피아"
    ]
  },
  {
    "id": 88,
    "title": "호구 의병의 숲",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 의령",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 98,
    "votesUp": 116,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "한들채 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "해밀 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '한들채' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '해밀' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '의령망개떡' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "한들채",
      "해밀",
      "의령망개떡",
      "의령화정소바국수"
    ]
  },
  {
    "id": 89,
    "title": "천성산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 양산",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 97,
    "votesUp": 107,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "영축산 통도사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "고메갈비 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "예향정 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '고메갈비' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '예향정' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '명가부산밀면' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "고메갈비",
      "예향정",
      "명가부산밀면",
      "흥부네화덕",
      "블랙업커피",
      "소소서원",
      "무타블랑"
    ]
  },
  {
    "id": 90,
    "title": "금정산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 양산",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 94,
    "votesUp": 91,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "청호재 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "언덕집(추어탕) (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '청호재' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '언덕집(추어탕)' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '해양산국밥' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "청호재",
      "언덕집(추어탕)",
      "해양산국밥",
      "남도밥상",
      "왓더버거",
      "양산 숲애서",
      "소소한하루"
    ]
  },
  {
    "id": 91,
    "title": "황매산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 산청",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 94,
    "votesUp": 173,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "수철마을~성심원",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "무제치기 폭포",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "열매랑뿌리랑 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "아름누리 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '열매랑뿌리랑' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '아름누리' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '산청약초식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "열매랑뿌리랑",
      "아름누리",
      "산청약초식당",
      "목화추어탕",
      "지리산약초장어",
      "산청요",
      "산청하늘정원카페",
      "카페묵실"
    ]
  },
  {
    "id": 92,
    "title": "황석산,산사람길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 함양",
    "duration": "3.4시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 95,
    "votesUp": 173,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "벽송사 내려올 소나무 쉼터",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "나무달 쉼터 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "예담원 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '나무달 쉼터' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '예담원' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '삼봉산 금강소나무숲' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "나무달 쉼터",
      "예담원",
      "삼봉산 금강소나무숲",
      "지안재"
    ]
  },
  {
    "id": 93,
    "title": "칠선계곡 탐방로",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 함양",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 99,
    "votesUp": 141,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "삼봉산 금강소나무숲",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "바래기암소한마리 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "함양집어탕 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '바래기암소한마리' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '함양집어탕' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '예다믄' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "바래기암소한마리",
      "함양집어탕",
      "예다믄",
      "나무달쉼터",
      "느티나무식당고택향기",
      "운학정",
      "로드44",
      "마을카페안녕"
    ]
  },
  {
    "id": 94,
    "title": "악양둑방길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 함안",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 98,
    "votesUp": 97,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "아라애연잎장어 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "아라곰탕 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '아라애연잎장어' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '아라곰탕' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '구가네' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "아라애연잎장어",
      "아라곰탕",
      "구가네",
      "카페1946",
      "레드인카페갤러리"
    ]
  },
  {
    "id": 95,
    "title": "화왕산,영축산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 창녕",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 93,
    "votesUp": 107,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "충효사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "남지 개비리길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "남지철교돼지국밥 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "남다른집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '남지철교돼지국밥' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '남다른집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '현풍닭칼국수' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "남지철교돼지국밥",
      "남다른집",
      "현풍닭칼국수",
      "산과구름아래"
    ]
  },
  {
    "id": 96,
    "title": "저도비치로드",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 창원",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 99,
    "votesUp": 175,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "하포공영주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "대장동 편백숲",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "청춘키친 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "외갓집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '청춘키친' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '외갓집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '레스트125' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "청춘키친",
      "외갓집",
      "레스트125",
      "몬스터로스터스",
      "이메진커피",
      "추다방"
    ]
  },
  {
    "id": 97,
    "title": "남해 편백 숲,남파랑길42,46코스",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 남해",
    "duration": "7시간",
    "difficulty": "비순환",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 97,
    "votesUp": 109,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "원천마믈 앵강다숲(바래길센터)",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "가천다랭이마을",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "화전별고 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "팔복정 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '화전별고' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '팔복정' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '동천식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "화전별고",
      "팔복정",
      "동천식당",
      "램스하우스",
      "한국관",
      "갯내음식당",
      "카페유자"
    ]
  },
  {
    "id": 98,
    "title": "남파랑길 37코스",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "경남 남해",
    "duration": "4시간",
    "difficulty": "비순환",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 99,
    "votesUp": 141,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "창선파출소~적량해비치 마을",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "식포~가인구간",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "당케슈니첼 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "호원정 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '당케슈니첼' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '호원정' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '힙한식' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "당케슈니첼",
      "호원정",
      "힙한식",
      "주란식당",
      "축항횟집",
      "앵강마켓",
      "카페루프탑",
      "보통날"
    ]
  },
  {
    "id": 99,
    "title": "장유 누리길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 김해",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 98,
    "votesUp": 103,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "항아리수제비 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "할매추어탕 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '항아리수제비' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '할매추어탕' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '대동할매국수' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "항아리수제비",
      "할매추어탕",
      "대동할매국수",
      "밀양돼지국밥"
    ]
  },
  {
    "id": 100,
    "title": "천자봉 산길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 진해",
    "duration": "3.7시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 95,
    "votesUp": 121,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "시루봉",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 101,
    "title": "동정호,악양루,불일폭포",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 하동",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 93,
    "votesUp": 154,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "송림공원,천년차밭길,해뜰목장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "칠불사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "하동십리벚꽃길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "좋은세상식당 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "쉬어가기좋은날식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '좋은세상식당' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '쉬어가기좋은날식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '향미가든' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "좋은세상식당",
      "쉬어가기좋은날식당",
      "향미가든",
      "평사리자연마당",
      "원조섬진강재첩국",
      "나루터재첩",
      "플래닛1020",
      "금향다원"
    ]
  },
  {
    "id": 102,
    "title": "서출동류 물길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 거창",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 93,
    "votesUp": 52,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "구구추어탕 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "바래기암소한마리 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '구구추어탕' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '바래기암소한마리' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '베지나랑키친' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "구구추어탕",
      "바래기암소한마리",
      "베지나랑키친",
      "카페쿠쿠오나",
      "카페외갓집",
      "베리순"
    ]
  },
  {
    "id": 103,
    "title": "해지개해안둘레길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 고성",
    "duration": "0.25시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 98,
    "votesUp": 171,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "고동산 둘레길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "동피랑전복마을 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "대가돌솥밥한정식 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '동피랑전복마을' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '대가돌솥밥한정식' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '수라한정식' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "동피랑전복마을",
      "대가돌솥밥한정식",
      "수라한정식",
      "오가리수제비칼국수",
      "고옥정",
      "카페녘"
    ]
  },
  {
    "id": 104,
    "title": "와룡산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 사천시",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 99,
    "votesUp": 157,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "다솔사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "박서방식당 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "우도전복죽 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '박서방식당' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '우도전복죽' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '삼천포돌게장' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "박서방식당",
      "우도전복죽",
      "삼천포돌게장",
      "사천형제국밥",
      "갤러리&카페 라안",
      "카페코끼리",
      "모엘루"
    ]
  },
  {
    "id": 105,
    "title": "고동산 둘레코스",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 통영시",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 93,
    "votesUp": 122,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "미수동 광바위 둘레길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "어촌싱싱해물탕 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "동광식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '어촌싱싱해물탕' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '동광식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '분소식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "어촌싱싱해물탕",
      "동광식당",
      "분소식당",
      "뚱보할매",
      "한산섬식당"
    ]
  },
  {
    "id": 106,
    "title": "진양호 동물원,석류공원",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 진주시",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 95,
    "votesUp": 99,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "청곡사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 107,
    "title": "몽돌해변",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 거제시",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 99,
    "votesUp": 107,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 108,
    "title": "을숙도 공원",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "부산시 사하구",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 97,
    "votesUp": 164,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "금정산 범어사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "영진돼지국밥 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "남해달인횟집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '영진돼지국밥' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '남해달인횟집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '재성밀면' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "영진돼지국밥",
      "남해달인횟집",
      "재성밀면",
      "이재모피자",
      "안단테",
      "카페운서"
    ]
  },
  {
    "id": 109,
    "title": "문경세재",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 문경",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 93,
    "votesUp": 61,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "조곡",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "산중에 자연밥상 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "조령산묵밥 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '산중에 자연밥상' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '조령산묵밥' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '온천약돌한우돼지' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "산중에 자연밥상",
      "조령산묵밥",
      "온천약돌한우돼지"
    ]
  },
  {
    "id": 110,
    "title": "청화산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 문경",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 95,
    "votesUp": 178,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "진남교반",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "인서니얼키친 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "가은식탁 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '인서니얼키친' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '가은식탁' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '문경약돌 한우정육' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "인서니얼키친",
      "가은식탁",
      "문경약돌 한우정육"
    ]
  },
  {
    "id": 111,
    "title": "주흘산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 문경",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 98,
    "votesUp": 108,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "채가네들깨국수 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "조령산묵밥청국장 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '채가네들깨국수' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '조령산묵밥청국장' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '대흥숯불' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "채가네들깨국수",
      "조령산묵밥청국장",
      "대흥숯불",
      "더힐로드33.3"
    ]
  },
  {
    "id": 112,
    "title": "안동 선비순례길 01코스 선성현길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 안동",
    "duration": "4시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 97,
    "votesUp": 53,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "천등산 봉정사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "한국문화테크파크",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "안동화련 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "뜰 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '안동화련' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '뜰' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '일직식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "안동화련",
      "뜰",
      "일직식당",
      "예미정 본채",
      "윤훈식농가쌈밥",
      "우정찜닭",
      "메밀꽃피면",
      "하회식당",
      "안동위생찜닭"
    ]
  },
  {
    "id": 113,
    "title": "만경강 산나루길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 의성",
    "duration": "4시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 96,
    "votesUp": 148,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "봉양 한우마실작목회 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "논산손칼국수 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '봉양 한우마실작목회' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '논산손칼국수' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '의성흑마늘삼계탕오리' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "봉양 한우마실작목회",
      "논산손칼국수",
      "의성흑마늘삼계탕오리"
    ]
  },
  {
    "id": 114,
    "title": "가야산 에움길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 성주",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 96,
    "votesUp": 154,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "성주호 둘레길",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "가야산 심원사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "성주왕가한정식 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "왜관식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '성주왕가한정식' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '왜관식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "성주왕가한정식",
      "왜관식당"
    ]
  },
  {
    "id": 115,
    "title": "백화산 둘레길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 상주",
    "duration": "4.17시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 97,
    "votesUp": 78,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "경천섬 둘레길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "종달이와 보릿단 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "두락 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '종달이와 보릿단' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '두락' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "종달이와 보릿단",
      "두락"
    ]
  },
  {
    "id": 116,
    "title": "파도소리길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 경주",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 95,
    "votesUp": 61,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "주상절리 조망타워",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "함월산 골굴사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "읍천항 벽화마을",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "고두반 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "수정소반 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '고두반' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '수정소반' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "고두반",
      "수정소반"
    ]
  },
  {
    "id": 117,
    "title": "화랑의언덕",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 경주",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 97,
    "votesUp": 71,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "석굴암",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "경주 남산",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "소옥 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '소옥' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "소옥"
    ]
  },
  {
    "id": 118,
    "title": "경주박물관",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 경주",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 98,
    "votesUp": 103,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "첨성대",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "대릉원",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 119,
    "title": "황학산 둘레길,한티가는길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 칠곡",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 99,
    "votesUp": 147,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "원대복집",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "호애담 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "동화연 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '호애담' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '동화연' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '해밥달밥' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "호애담",
      "동화연",
      "해밥달밥",
      "봉명참숯가든",
      "만경",
      "만리궁",
      "스톤커피로스터즈"
    ]
  },
  {
    "id": 120,
    "title": "회룡포 둘레길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 예천",
    "duration": "3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 97,
    "votesUp": 67,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "제1뿅뿅다리 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "쌍절암 생태숲길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "용궁순대 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "박달식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '용궁순대' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '박달식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '예천참우마을' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "용궁순대",
      "박달식당",
      "예천참우마을",
      "김실네청국장",
      "꽃따지골식당",
      "스너그커피하우스",
      "마라나타"
    ]
  },
  {
    "id": 121,
    "title": "소백산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 영주",
    "duration": "5시간",
    "difficulty": "어려움",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 96,
    "votesUp": 154,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "달밭골 갓길 9시이전가능",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "소백산 부석사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "무섬마을",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "풍기삼계탕 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "죽령주막 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '풍기삼계탕' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '죽령주막' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '카페 선비꽃' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "풍기삼계탕",
      "죽령주막",
      "카페 선비꽃"
    ]
  },
  {
    "id": 122,
    "title": "죽령 옛길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 영주",
    "duration": "1시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 94,
    "votesUp": 159,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "희방사역 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "희방사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "나무",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "원조서부냉면 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "창신고기마트 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '원조서부냉면' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '창신고기마트' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "원조서부냉면",
      "창신고기마트"
    ]
  },
  {
    "id": 123,
    "title": "영천댐 둘레길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 영천",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 99,
    "votesUp": 154,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "은해사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "은해사 팔공산둘레길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "숲속안골길 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "서산옥 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '숲속안골길' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '서산옥' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '정코다리' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "숲속안골길",
      "서산옥",
      "정코다리",
      "큰기와집",
      "석계손칼국수",
      "개성집(코다리)",
      "별담은호수카페 온당",
      "카페밀케이",
      "스테이클래시"
    ]
  },
  {
    "id": 124,
    "title": "검마산 금강송숲",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 영양",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 96,
    "votesUp": 174,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "죽파리 자작나무숲",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "선바위가든 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "사랑채 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '선바위가든' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '사랑채' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "선바위가든",
      "사랑채"
    ]
  },
  {
    "id": 125,
    "title": "해파랑길 트레킹제18코스",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 영덕",
    "duration": "6.4시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 97,
    "votesUp": 139,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "동광어시장(대게),강구항",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "유금사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "옥계계곡",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "태백호 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "남은대게 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '태백호' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '남은대게' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '영덕물가자미' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "태백호",
      "남은대게",
      "영덕물가자미",
      "동해바지락",
      "박근석명품",
      "송천강재첩국",
      "내담대구뽈탕찜",
      "카페J"
    ]
  },
  {
    "id": 126,
    "title": "성주호 둘레길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 고령",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 97,
    "votesUp": 55,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "무학리 광암교",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "월산복어 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "현풍닭칼국수 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '월산복어' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '현풍닭칼국수' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '신가네식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "월산복어",
      "현풍닭칼국수",
      "신가네식당",
      "고령추어탕",
      "카페블루그린"
    ]
  },
  {
    "id": 127,
    "title": "주왕산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 청송",
    "duration": "3시간",
    "difficulty": "인터넷 예약",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 97,
    "votesUp": 92,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "절골 탐방지원센터",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "절골~대문다리3.5",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "작은하늘농가 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "팔팔식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '작은하늘농가' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '팔팔식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '가든세계평화' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "작은하늘농가",
      "팔팔식당",
      "가든세계평화",
      "종가집해장국",
      "동대구식당",
      "신촌식당",
      "청솔식당"
    ]
  },
  {
    "id": 128,
    "title": "주왕산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 청송",
    "duration": "3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 96,
    "votesUp": 113,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "대전사 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "대전사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "삼보식당 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "명일여관식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '삼보식당' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '명일여관식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '사과밭에돈돈' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "삼보식당",
      "명일여관식당",
      "사과밭에돈돈",
      "좋은식당"
    ]
  },
  {
    "id": 129,
    "title": "청옥산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 봉화",
    "duration": "4시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 94,
    "votesUp": 125,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "청옥산 생태경영림 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "청량산 청량사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "우구치 낙엽송숲",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "동궁 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "고향집식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '동궁' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '고향집식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '산촌식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "동궁",
      "고향집식당",
      "산촌식당",
      "청량산쉼터매운탕",
      "더비글즈"
    ]
  },
  {
    "id": 130,
    "title": "황악산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 김천",
    "duration": "3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 97,
    "votesUp": 66,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "직지사 매표소",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "뷰 없음",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "복터진집 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "자연속으로 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '복터진집' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '자연속으로' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '농소밥심' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "복터진집",
      "자연속으로",
      "농소밥심",
      "기와집",
      "카페아하바"
    ]
  },
  {
    "id": 131,
    "title": "오봉저수지",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 김천",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 93,
    "votesUp": 177,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "황악산 직지사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "수도산 치유의 숲",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "단산가든 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "고향돼지국밥 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '단산가든' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '고향돼지국밥' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '카페자산' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "단산가든",
      "고향돼지국밥",
      "카페자산",
      "블루밍시애틀"
    ]
  },
  {
    "id": 132,
    "title": "금오산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 구미",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 99,
    "votesUp": 143,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "금오지 둘레길",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "금오산 약사암",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "선산곱창 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "낭만쭈꾸미 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '선산곱창' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '낭만쭈꾸미' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '밥을짓다' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "선산곱창",
      "낭만쭈꾸미",
      "밥을짓다",
      "순수보리밥",
      "상송식당",
      "황장군(갈비탕)",
      "평양아바이순대"
    ]
  },
  {
    "id": 133,
    "title": "팔공산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 군위",
    "duration": "1시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 94,
    "votesUp": 166,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "하늘공원 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "원효굴",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "효령매운탕 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "군산집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '효령매운탕' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '군산집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '두향' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "효령매운탕",
      "군산집",
      "두향",
      "논산손칼국수",
      "카페우즈",
      "백년가옥전통찻집"
    ]
  },
  {
    "id": 134,
    "title": "내연산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 포항",
    "duration": "2시간",
    "difficulty": "쉬움",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 95,
    "votesUp": 137,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "내연산 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "보경사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "경상북도수목원",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "흑돈 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "평남식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '흑돈' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '평남식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '영해회식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "흑돈",
      "평남식당",
      "영해회식당",
      "고려의숲한우",
      "함박웃는룻",
      "포닭집",
      "그레이비 파스타",
      "오스테리아57",
      "열두달봄"
    ]
  },
  {
    "id": 135,
    "title": "호미반도  해안둘레길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 포항",
    "duration": "1.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 93,
    "votesUp": 144,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "연오랑세오녀 테마공원~흥환",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "오어사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "사방기념공원",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "포갈집 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "샤브20 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '포갈집' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '샤브20' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '더신촌스덮죽' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "포갈집",
      "샤브20",
      "더신촌스덮죽",
      "곡강힐즈"
    ]
  },
  {
    "id": 136,
    "title": "운문호",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 청도",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 99,
    "votesUp": 144,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "호거산 운문사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "청도신화랑풍류마을",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "운문산가든 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "탐복미나리가든 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '운문산가든' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '탐복미나리가든' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '시골집(웅치기)' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "운문산가든",
      "탐복미나리가든",
      "시골집(웅치기)",
      "한재총각미나리",
      "백운숯불갈비",
      "역전추어탕",
      "아자방",
      "카페뷰",
      "오마이북",
      "가배빈"
    ]
  },
  {
    "id": 137,
    "title": "부인사 도보길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 대구",
    "duration": "3.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 99,
    "votesUp": 145,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "부인사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "금곡삼계탕 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "신마산식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '금곡삼계탕' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '신마산식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '옛집식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "금곡삼계탕",
      "신마산식당",
      "옛집식당"
    ]
  },
  {
    "id": 138,
    "title": "달성군",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "경북 대구",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 99,
    "votesUp": 170,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "달성습지 생태학습관",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "억새 생태습지",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "팔공막창 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "삼송빵집 본점 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '팔공막창' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '삼송빵집 본점' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "팔공막창",
      "삼송빵집 본점"
    ]
  },
  {
    "id": 139,
    "title": "불영사,왕피천길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 울진",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 98,
    "votesUp": 122,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "천축산 불영사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "금강소나무숲길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "장모씨암탉 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "동심식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '장모씨암탉' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '동심식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "장모씨암탉",
      "동심식당"
    ]
  },
  {
    "id": 140,
    "title": "파래소폭포",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 울산",
    "duration": "1시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 96,
    "votesUp": 70,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "홍류폭포",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "팔곡밀면 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "언양기와집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '팔곡밀면' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '언양기와집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '울산언양불고기' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "팔곡밀면",
      "언양기와집",
      "울산언양불고기",
      "아키라",
      "바다바라기",
      "대왕암아구찜"
    ]
  },
  {
    "id": 141,
    "title": "영남알프스와반구천",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 울산",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 99,
    "votesUp": 161,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "시래담(한식) (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "카몬시카페 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '시래담(한식)' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '카몬시카페' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "시래담(한식)",
      "카몬시카페"
    ]
  },
  {
    "id": 142,
    "title": "성인봉, 나리봉,죽도",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경북 울릉",
    "duration": "3.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 96,
    "votesUp": 173,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "죽도 더덕 3",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "산마을 식당 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "신비섬횟집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '산마을 식당' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '신비섬횟집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '전주식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "산마을 식당",
      "신비섬횟집",
      "전주식당",
      "태양식당",
      "다애식당",
      "박가네",
      "향우촌",
      "나리분지 야영장식당",
      "이레카페"
    ]
  },
  {
    "id": 143,
    "title": "퍼플교(안좌도‧반월도‧박지도 연결), 갯벌",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 신안",
    "duration": "1.3시간",
    "difficulty": "비순환",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 95,
    "votesUp": 167,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "천년의숲길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "꽃피는 무화가 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '꽃피는 무화가' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "꽃피는 무화가"
    ]
  },
  {
    "id": 144,
    "title": "덕룡산,남파랑길83코스",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 강진",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 96,
    "votesUp": 81,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "구목리교 서쪽~도암 농협",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "서기산 편백숲",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "설성식당 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "벙커(카페) (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '설성식당' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '벙커(카페)' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '느루갤러리' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "설성식당",
      "벙커(카페)",
      "느루갤러리",
      "궁전횟집",
      "모란추어탕",
      "모란한정식",
      "강진만한정식",
      "병영서가네",
      "은행나무"
    ]
  },
  {
    "id": 145,
    "title": "동악산(곡성)",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 곡성",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 99,
    "votesUp": 143,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "아산 조방원미술관",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "성륜사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "곡성8경 도림사",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "현식당(추어탕) (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "밥카페 반하다 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '현식당(추어탕)' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '밥카페 반하다' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '흥남면옥' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "현식당(추어탕)",
      "밥카페 반하다",
      "흥남면옥",
      "순자강(다슬기)",
      "미소식당",
      "두가헌",
      "백년가",
      "하생촌",
      "카페소나무",
      "미안커피"
    ]
  },
  {
    "id": 146,
    "title": "무등산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 화순",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 93,
    "votesUp": 160,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "천불산 운주사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "남산공원 가을국화",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "벽오동 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "화순집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '벽오동' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '화순집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '백년가든' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "벽오동",
      "화순집",
      "백년가든",
      "임광복의뜨락",
      "황금코다리",
      "브런치카페서로",
      "두베이커피플랫폼"
    ]
  },
  {
    "id": 147,
    "title": "방장산,백암산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 장성",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 95,
    "votesUp": 91,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "백암산 백양사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "청자연 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "축령산사랑가득국밥 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '청자연' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '축령산사랑가득국밥' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '동창식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "청자연",
      "축령산사랑가득국밥",
      "동창식당",
      "장성팥죽",
      "필그림"
    ]
  },
  {
    "id": 148,
    "title": "축령산(장성)",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 장성",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 94,
    "votesUp": 71,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "축령산 편백숲",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "고돈상회(등심까스) (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "석정가든 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '고돈상회(등심까스)' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '석정가든' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '백련동시골밥상' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "고돈상회(등심까스)",
      "석정가든",
      "백련동시골밥상",
      "곡간자연밥상"
    ]
  },
  {
    "id": 149,
    "title": "백운산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 광양",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 96,
    "votesUp": 76,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "옥룡사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "홍쌍리 매실농장",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "매화랑 매실이랑 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '매화랑 매실이랑' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "매화랑 매실이랑"
    ]
  },
  {
    "id": 150,
    "title": "불갑산(영광)",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 영광",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 98,
    "votesUp": 139,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "모악산 불갑사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "천일염전",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "밀향기 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "국일관 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '밀향기' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '국일관' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '골목식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "밀향기",
      "국일관",
      "골목식당",
      "일번지식당",
      "풍성한 집"
    ]
  },
  {
    "id": 151,
    "title": "고하도 둘레길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 목포",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 94,
    "votesUp": 64,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "케이블카 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "유달산",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "중앙횟집 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "유성횟집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '중앙횟집' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '유성횟집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '연잎향' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "중앙횟집",
      "유성횟집",
      "연잎향",
      "인정국수",
      "홍어라면",
      "연희네포차",
      "포미아구찜",
      "비스트로로지",
      "김근호해물"
    ]
  },
  {
    "id": 152,
    "title": "월출산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 영암",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 99,
    "votesUp": 174,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "월출산 도갑사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "덕진차밭",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "더자반 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "순덕이네 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '더자반' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '순덕이네' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '엄마쌈밥' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "더자반",
      "순덕이네",
      "엄마쌈밥",
      "전통나주곰탕",
      "애호박국밥",
      "카페월요",
      "라운지붐",
      "미술관아래"
    ]
  },
  {
    "id": 153,
    "title": "조계산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 순천",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 95,
    "votesUp": 118,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "순천전통야생차체험관",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "조계산 선암사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "불일암과 천자암",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "벽오동 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "건봉국밥 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '벽오동' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '건봉국밥' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '남녘들밥상' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "벽오동",
      "건봉국밥",
      "남녘들밥상",
      "순천만정문식당",
      "풀뿌리흑두부",
      "최대감",
      "옥천귀뚜라미",
      "참조은시골집",
      "양와당",
      "조훈모과자점"
    ]
  },
  {
    "id": 154,
    "title": "금오도 비렁길,만성리 해변",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 여수",
    "duration": "1.3시간",
    "difficulty": "순환형",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 96,
    "votesUp": 96,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "율림치주차장 - 금오산 - 금오산 삼거리 - 금오봉 - 향일암",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "향일암",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "여수 갯가길 밤바다 코스",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "비렁길 자연밥상 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "청정게장촌 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '비렁길 자연밥상' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '청정게장촌' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '여정식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "비렁길 자연밥상",
      "청정게장촌",
      "여정식당",
      "까치식당",
      "경도회관",
      "삼학집",
      "구백식당",
      "여수1923"
    ]
  },
  {
    "id": 155,
    "title": "천관산,제암산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 장흥",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 93,
    "votesUp": 129,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "구산선문 제암산 보림사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "천관산 동백숲",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "갯마을횟집 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "한라네국밥 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '갯마을횟집' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '한라네국밥' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '영천민물장어' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "갯마을횟집",
      "한라네국밥",
      "영천민물장어",
      "병영서가네",
      "보성녹차떡갈비",
      "일품양평",
      "연지보리밥",
      "오차현",
      "원앤식스"
    ]
  },
  {
    "id": 156,
    "title": "팔영산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 고흥",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 97,
    "votesUp": 117,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "관산식당 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "녹동식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '관산식당' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '녹동식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '보성식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "관산식당",
      "녹동식당",
      "보성식당",
      "유성식당",
      "월포가든",
      "엠케이알커피",
      "익금21"
    ]
  },
  {
    "id": 157,
    "title": "노고단,사성암",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 구례",
    "duration": "2.0시간",
    "difficulty": "순환형",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 93,
    "votesUp": 60,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "연기암 가는 길",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "지리산 화엄사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "화엄사 계곡길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "지리산수라간 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "양미한옥가든 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '지리산수라간' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '양미한옥가든' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '강남가든' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "지리산수라간",
      "양미한옥가든",
      "강남가든",
      "들녘밥상",
      "목월빵집",
      "라플라타",
      "잼있는커피",
      "오차커피공방"
    ]
  },
  {
    "id": 158,
    "title": "달마산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 해남",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 96,
    "votesUp": 106,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "서성식당 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "산마루터 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '서성식당' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '산마루터' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '우수영문화마을(팥칼국수)' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "서성식당",
      "산마루터",
      "우수영문화마을(팥칼국수)",
      "해남고구마빵"
    ]
  },
  {
    "id": 159,
    "title": "두륜산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 해남",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 99,
    "votesUp": 136,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "두륜산 대흥사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "아이집(옻닭) (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "맴섬횟집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '아이집(옻닭)' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '맴섬횟집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "아이집(옻닭)",
      "맴섬횟집"
    ]
  },
  {
    "id": 160,
    "title": "관매8경",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 진도",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 95,
    "votesUp": 146,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "모도",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "신호등회관 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "해담 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '신호등회관' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '해담' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '바닷가그집' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "신호등회관",
      "해담",
      "바닷가그집",
      "쪽빛",
      "카페수품항"
    ]
  },
  {
    "id": 161,
    "title": "금성산성,죽녹원,萬物시생지",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "전남 담양",
    "duration": "5시간",
    "difficulty": "쉬움",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 98,
    "votesUp": 137,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "금성산성 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "보리암",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "충용문전망",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "보자기 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "옥빈관 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '보자기' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '옥빈관' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '미소댓잎국수' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "보자기",
      "옥빈관",
      "미소댓잎국수",
      "황금소나무",
      "달빛뜨락",
      "숲속의무릉",
      "담양애꽃",
      "쌍교숯불갈비",
      "남도예담",
      "덕인관",
      "전통창평국밥"
    ]
  },
  {
    "id": 162,
    "title": "녹차밭",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 보성",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 96,
    "votesUp": 132,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "천봉산 대원사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "대원사",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "초록잎이펼치는세상 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "수복식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '초록잎이펼치는세상' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '수복식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '외서댁꼬막나라' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "초록잎이펼치는세상",
      "수복식당",
      "외서댁꼬막나라",
      "어가꼬막식당",
      "거시기꼬막식당"
    ]
  },
  {
    "id": 163,
    "title": "원효사 ↔ 서석대",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전남 광주",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 98,
    "votesUp": 59,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "산수도 옛길 입구",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "황솔촌 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "쌍교숯불갈비 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '황솔촌' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '쌍교숯불갈비' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '나주식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "황솔촌",
      "쌍교숯불갈비",
      "나주식당",
      "다연닭갈비",
      "소코아",
      "탱고아구찜",
      "본디소",
      "아르티오"
    ]
  },
  {
    "id": 164,
    "title": "망해산 둘레길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 군산",
    "duration": "3.0시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 98,
    "votesUp": 51,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "비단강길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "향토음식관아리랑 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "한주옥 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '향토음식관아리랑' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '한주옥' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '이성당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "향토음식관아리랑",
      "한주옥",
      "이성당",
      "원조군산아구",
      "복성루",
      "일해옥",
      "일흥옥"
    ]
  },
  {
    "id": 165,
    "title": "함라산탐방로",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 익산",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 96,
    "votesUp": 109,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "금마면 미륵산",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "아가페정원",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "청담옥24시 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "동서네낙지본점 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '청담옥24시' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '동서네낙지본점' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '시장비빔밥' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "청담옥24시",
      "동서네낙지본점",
      "시장비빔밥",
      "빵곰언니",
      "싱그랭이",
      "아레라",
      "미토네",
      "메종210"
    ]
  },
  {
    "id": 166,
    "title": "내장사,쌍화차,귀리떡갈비,녹차",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 정읍",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 97,
    "votesUp": 128,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "쌍화차거리,태인_平沙落雁",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "내장사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "창 힐링센타 안하림작가",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "전복돌솥밥 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "밥보씨아전복 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '전복돌솥밥' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '밥보씨아전복' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '두승산콩마을' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "전복돌솥밥",
      "밥보씨아전복",
      "두승산콩마을",
      "명인관",
      "그해가을",
      "차마루",
      "베르데카페",
      "치치하하"
    ]
  },
  {
    "id": 167,
    "title": "몽탄노적 소망의 숲,회산백련지",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 무안",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 93,
    "votesUp": 146,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "회산백련지 주차장",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "남도뻘낙지 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "하늘꿈식탁 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '남도뻘낙지' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '하늘꿈식탁' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '승달가든' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "남도뻘낙지",
      "하늘꿈식탁",
      "승달가든",
      "전주식당",
      "밥먹으러임성가는길",
      "아젤리아커피"
    ]
  },
  {
    "id": 168,
    "title": "변산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 부안",
    "duration": "2시간",
    "difficulty": "비순환",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 95,
    "votesUp": 92,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "내소사 주차장,내변산 탐방",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "내소사의 산세",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "변산마실길5 모항갯벌",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "팔도명가 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "고향맛횟집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '팔도명가' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '고향맛횟집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '향토바지락죽' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "팔도명가",
      "고향맛횟집",
      "향토바지락죽",
      "진도식당",
      "쇼트앤드",
      "산넘어 남촌엔"
    ]
  },
  {
    "id": 169,
    "title": "진안 고원마실길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 진안",
    "duration": "1.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 94,
    "votesUp": 155,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "용담호",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "마이산 탑사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "부귀메타쉐콰이아길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "초가정담 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "시골순대 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '초가정담' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '시골순대' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '동몽원' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "초가정담",
      "시골순대",
      "동몽원",
      "마이산자연밥상",
      "백제회관",
      "국태가든",
      "청송가든"
    ]
  },
  {
    "id": 170,
    "title": "구봉산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 진안",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 97,
    "votesUp": 153,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "마실길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "초가정담 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "홍연농가맛집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '초가정담' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '홍연농가맛집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '대박가든' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "초가정담",
      "홍연농가맛집",
      "대박가든",
      "국태가든",
      "앙쥬싸롱카페"
    ]
  },
  {
    "id": 171,
    "title": "운장산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 진안",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 96,
    "votesUp": 167,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "운장산 갈거계곡숲",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "마이담 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "동몽원 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '마이담' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '동몽원' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '진미가든' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "마이담",
      "동몽원",
      "진미가든",
      "덕봉정(염소)",
      "마이산자연밥상",
      "카페운일암안단테"
    ]
  },
  {
    "id": 172,
    "title": "뱀사골,둘레길2코스,하늘에 닿는 길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 남원",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 96,
    "votesUp": 103,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "구룡폭포 순환길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "달오름 마을 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "지리산 나물밥 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '달오름 마을' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '지리산 나물밥' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '현식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "달오름 마을",
      "지리산 나물밥",
      "현식당",
      "서래헌"
    ]
  },
  {
    "id": 173,
    "title": "다랭이길,흥부길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 남원",
    "duration": "3.6시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 95,
    "votesUp": 137,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "매동마을의 소나무 숲",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "실상사 구룡계곡",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 174,
    "title": "장안산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 장수",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 97,
    "votesUp": 149,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "장수밥상 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "산마을 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '장수밥상' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '산마을' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '행복한농부' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "장수밥상",
      "산마을",
      "행복한농부",
      "콩마을순두부",
      "초가정담",
      "다올",
      "커피바헬로우"
    ]
  },
  {
    "id": 175,
    "title": "옥정호 마실길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 임실",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 99,
    "votesUp": 97,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "옥저호 물안개",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "옥정호산장 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "천담집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '옥정호산장' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '천담집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '섬진강다슬기마을' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "옥정호산장",
      "천담집",
      "섬진강다슬기마을",
      "옥쭹가든",
      "고투비밀의정원"
    ]
  },
  {
    "id": 176,
    "title": "위봉사,송광사 진입도로(벗꽃길)",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 완주",
    "duration": "2시간",
    "difficulty": "쉬움",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 98,
    "votesUp": 141,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "위봉사 주차장,오성한옥마을",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "위봉사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "위봉사 명당임",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "유성식당 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "현대옥 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '유성식당' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '현대옥' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '원조화심두부' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "유성식당",
      "현대옥",
      "원조화심두부"
    ]
  },
  {
    "id": 177,
    "title": "대둔산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 완주",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 99,
    "votesUp": 57,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "대둔산 낙조산장~마천대",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "공기마을 편백나무 숲",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "대왕가든 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "통집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '대왕가든' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '통집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '갑기회관' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "대왕가든",
      "통집",
      "갑기회관",
      "멜로우어텀",
      "핸더",
      "달테이블"
    ]
  },
  {
    "id": 178,
    "title": "덕유산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 무주",
    "duration": "1시간",
    "difficulty": "쉬움",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 96,
    "votesUp": 105,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "탐방 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "독일가문비숲",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "예촌본가 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "고구려가든 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '예촌본가' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '고구려가든' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '구천동맛집' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "예촌본가",
      "고구려가든",
      "구천동맛집",
      "콩수레두부가",
      "안식당",
      "카페 나무와 그릇",
      "가든카페명천마루",
      "정원산책"
    ]
  },
  {
    "id": 179,
    "title": "향로봉 전망대",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 무주",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 95,
    "votesUp": 166,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "무주 아일랜드 생태체험공원",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "정기용 등나무 운동장",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "수작부리는카페 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "무주어죽 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '수작부리는카페' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '무주어죽' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '전북제사1970' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "수작부리는카페",
      "무주어죽",
      "전북제사1970",
      "휴앤정",
      "솥뚜껑닭볶음탕",
      "무주향(국수)",
      "휴카페138",
      "샹그릴라"
    ]
  },
  {
    "id": 180,
    "title": "선운산,고창읍성 산책로",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 고창",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 99,
    "votesUp": 76,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "도솔산 선운사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "문수산 편백숲",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "장구목 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "우리수산풍천장어 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '장구목' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '우리수산풍천장어' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '청림정금자' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "장구목",
      "우리수산풍천장어",
      "청림정금자",
      "강촌식당",
      "청원가든",
      "텃밭쌈밥",
      "만나회관",
      "농부의카페",
      "강나루풍천"
    ]
  },
  {
    "id": 181,
    "title": "모악산 마실길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 김제",
    "duration": "4시간",
    "difficulty": "비순환",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 98,
    "votesUp": 153,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "금평저수지",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "모악산 금산사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "새만금 바람길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "삶의 향기 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "원평지평선 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '삶의 향기' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '원평지평선' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '밥도둑게장' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "삶의 향기",
      "원평지평선",
      "밥도둑게장",
      "조만영의벌떡",
      "우연하게도",
      "신양옥찻집"
    ]
  },
  {
    "id": 182,
    "title": "용궐산,강천산,채계산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 순창",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 98,
    "votesUp": 139,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "용궐산 치유의숲",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "강천산 강천사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "옥정호",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "미소식당 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "창림동두부 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '미소식당' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '창림동두부' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '늘' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "미소식당",
      "창림동두부",
      "늘",
      "진도식당",
      "옥빈관",
      "강천풍경식당",
      "그대로그렇게",
      "미각"
    ]
  },
  {
    "id": 183,
    "title": "오송제",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "전북 전주",
    "duration": "1시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 96,
    "votesUp": 84,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "한옥마을",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "금평저수지 둘레길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "외할머니솜씨 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "삼백집전주본점 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '외할머니솜씨' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '삼백집전주본점' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '메르밀진미집' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "외할머니솜씨",
      "삼백집전주본점",
      "메르밀진미집"
    ]
  },
  {
    "id": 184,
    "title": "비학산 누리길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "세종 세종",
    "duration": "3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 95,
    "votesUp": 129,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "비학산 2주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "고복저수지",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "송하한정식 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "봉피양 세종시점 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '송하한정식' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '봉피양 세종시점' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '콩대박' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "송하한정식",
      "봉피양 세종시점",
      "콩대박"
    ]
  },
  {
    "id": 185,
    "title": "국립세종수목원",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "세종 세종",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 94,
    "votesUp": 153,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 186,
    "title": "곡교천 은행나무길,지중해마을",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충남 아산",
    "duration": "0.4시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 99,
    "votesUp": 131,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "피나클랜드 수목원(국화축제)",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "광덕사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "현충사",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "종가냉면 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "추억의꽁당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '종가냉면' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '추억의꽁당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '쌍둥이네' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "종가냉면",
      "추억의꽁당",
      "쌍둥이네",
      "모산수제비",
      "잇츠 아산신정호수점",
      "싸릿골",
      "시골밥상",
      "숲속장어"
    ]
  },
  {
    "id": 187,
    "title": "5구간 노을길,천리포,청산수목원",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충남 태안",
    "duration": "4시간",
    "difficulty": "비순환",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 97,
    "votesUp": 108,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "백사장항,신두리,만리포,백사장항",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "해변길6코스 샛별길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "산장가든 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "정산포바닷가 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '산장가든' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '정산포바닷가' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '청학동' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "산장가든",
      "정산포바닷가",
      "청학동",
      "이원식당",
      "바다풍경",
      "천수만꽃게장",
      "미식가",
      "덕수식당",
      "안흥식당",
      "행복한아침"
    ]
  },
  {
    "id": 188,
    "title": "안면도수목원,꽃지해수욕장",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "충남 안면도",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 99,
    "votesUp": 123,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "백사장항",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "대양횟집 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "진미정 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '대양횟집' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '진미정' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '바다야해물아' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "대양횟집",
      "진미정",
      "바다야해물아",
      "큰마을영양굴밥",
      "씨스트로",
      "카페아일",
      "카페방더오",
      "시오마카롱"
    ]
  },
  {
    "id": 189,
    "title": "예당호느린호수길,수덕사,덕천온천",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충남 예산",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 96,
    "votesUp": 144,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "국립예산치유의숲,봉수산 휴양림",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "덕숭산 수덕사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "한국토종씨앗박물관",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "산마루가든 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "여기서행복할것 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '산마루가든' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '여기서행복할것' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '한일식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "산마루가든",
      "여기서행복할것",
      "한일식당",
      "청미래(닭)",
      "대흥식당",
      "사과나무",
      "산촌식당",
      "황금시대",
      "원조할머니딸"
    ]
  },
  {
    "id": 190,
    "title": "장곡사,목재문화체험관",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충남 청양",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 94,
    "votesUp": 135,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "고운식물원",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "칠갑산골 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "농부밥상 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '칠갑산골' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '농부밥상' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '칠갑산추어탕' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "칠갑산골",
      "농부밥상",
      "칠갑산추어탕",
      "칠갑산기와집",
      "칠갑산 구기자막국수",
      "갱스커피",
      "다미칼국수"
    ]
  },
  {
    "id": 191,
    "title": "계룡저수지 둘레길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충남 계룡",
    "duration": "2.23시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 97,
    "votesUp": 76,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "계룡산 갑사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "콩밭가인 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "원조태평소국밥 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '콩밭가인' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '원조태평소국밥' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '샤브마름' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "콩밭가인",
      "원조태평소국밥",
      "샤브마름",
      "향적산한상",
      "시루콩나물밥"
    ]
  },
  {
    "id": 192,
    "title": "금강솔바람길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충남 금산",
    "duration": "3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 97,
    "votesUp": 178,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "보석사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "보석사 전나무숲길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "진악산뜰 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "명성각 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '진악산뜰' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '명성각' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '원골식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "진악산뜰",
      "명성각",
      "원골식당",
      "저곡식당"
    ]
  },
  {
    "id": 193,
    "title": "부소산성,낙화암",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충남 부여",
    "duration": "1시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 93,
    "votesUp": 96,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "서동요 둘레길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "고구락 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "외갓집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '고구락' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '외갓집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '나경버섯농가' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "고구락",
      "외갓집",
      "나경버섯농가"
    ]
  },
  {
    "id": 194,
    "title": "가야산(충남),마애여래삼존상",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충남 서산",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 94,
    "votesUp": 103,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "황금산,해미읍성",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "개심사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "내포문화숲길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "소박한 밥상 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "큰마을영양굴밥 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '소박한 밥상' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '큰마을영양굴밥' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '강미루' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "소박한 밥상",
      "큰마을영양굴밥",
      "강미루",
      "명지해물찜",
      "진주소곱창",
      "해미당",
      "품다"
    ]
  },
  {
    "id": 195,
    "title": "대명산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충남 논산",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 98,
    "votesUp": 92,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "관촉사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "온빛자연휴양림",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "셋집매 농가맛집 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "보은집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '셋집매 농가맛집' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '보은집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '햇잎갈비' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "셋집매 농가맛집",
      "보은집",
      "햇잎갈비",
      "산애들애",
      "은진손칼국수",
      "황산옥"
    ]
  },
  {
    "id": 196,
    "title": "대청호 오백리길,보문산 고척사",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충남 대전",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 97,
    "votesUp": 52,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "치유센터 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "고척사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "장태산자연휴양림",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "오씨칼국수 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "원미면옥 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '오씨칼국수' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '원미면옥' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '성심당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "오씨칼국수",
      "원미면옥",
      "성심당",
      "숯골원냉면",
      "갈마짬뽕"
    ]
  },
  {
    "id": 197,
    "title": "희리산 해송숲",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충남 서천",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 98,
    "votesUp": 104,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "장항송림산림욕장제1주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "서천 생태원",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "화양연화 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "금강식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '화양연화' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '금강식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '섬마을횟집' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "화양연화",
      "금강식당",
      "섬마을횟집",
      "모시해물칼국수",
      "강변횟집",
      "할매온정집"
    ]
  },
  {
    "id": 198,
    "title": "계룡산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충남 공주",
    "duration": "4시간",
    "difficulty": "어려움",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 93,
    "votesUp": 129,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "동학사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "동학사은선폭포",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "곰선생 동태씨 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "통천포솥뚜껑 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '곰선생 동태씨' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '통천포솥뚜껑' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '낙낙카페' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "곰선생 동태씨",
      "통천포솥뚜껑",
      "낙낙카페",
      "공다방"
    ]
  },
  {
    "id": 199,
    "title": "마곡사",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충남 공주",
    "duration": "3.7시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 98,
    "votesUp": 108,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "태화산 마곡사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "태화산 솔바람길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "매향냉면 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "루치아의뜰 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '매향냉면' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '루치아의뜰' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '고마나루' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "매향냉면",
      "루치아의뜰",
      "고마나루",
      "북경탕수육"
    ]
  },
  {
    "id": 200,
    "title": "광덕산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충남 천안",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 93,
    "votesUp": 116,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "하늘맛 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "벽오동 천안점 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '하늘맛' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '벽오동 천안점' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '통삼국 본점' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "하늘맛",
      "벽오동 천안점",
      "통삼국 본점",
      "한끼맛있다",
      "팽나무골 곤드레종로제면소",
      "멘야마쯔리",
      "화덕으로간고등어"
    ]
  },
  {
    "id": 201,
    "title": "오서산,삽시도,죽도상화원",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충남 보령",
    "duration": "2.4시간",
    "difficulty": "비순환",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 97,
    "votesUp": 55,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "삽시도 둘레길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "석화촌 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "대천가자조개 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '석화촌' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '대천가자조개' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '깐돌네굴' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "석화촌",
      "대천가자조개",
      "깐돌네굴",
      "대천키조개",
      "카페바이더오",
      "명복식당",
      "먹보네조개",
      "밥도둑꽃게",
      "일월굴칼국수",
      "제일해물칼국수"
    ]
  },
  {
    "id": 202,
    "title": "용봉산,죽도,광천시장,천수만",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충남 홍성",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 98,
    "votesUp": 176,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "그림같은 수목원,궁리포구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "남당리",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "꽃동산횟집 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "홍흥집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '꽃동산횟집' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '홍흥집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '온누리회수산' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "꽃동산횟집",
      "홍흥집",
      "온누리회수산",
      "덕이네진한소머리",
      "백소정 홍성",
      "갤러리짙은"
    ]
  },
  {
    "id": 203,
    "title": "버그내 순례길 ,농어촌테마공원",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충남 당진",
    "duration": "4시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 94,
    "votesUp": 93,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "솔뫼성지,삼선산수목원",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "대난지도선착장",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "우렁이박사 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "빙빙반점 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '우렁이박사' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '빙빙반점' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '옛날우렁이식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "우렁이박사",
      "빙빙반점",
      "옛날우렁이식당",
      "장춘닭개장",
      "배가짬뽕",
      "구남매캠핑",
      "사계절식당",
      "면천가든",
      "길목",
      "예당비빔"
    ]
  },
  {
    "id": 204,
    "title": "원통산 명품숲",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 음성",
    "duration": "3.1시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 97,
    "votesUp": 148,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "복상골 낚시터 임도공터",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "양덕저수지둘레길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "하누연 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "고등어명품이되다 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '하누연' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '고등어명품이되다' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '금강산민물매운탕' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "하누연",
      "고등어명품이되다",
      "금강산민물매운탕",
      "궤짝카페",
      "옛날칼국수보리밥"
    ]
  },
  {
    "id": 205,
    "title": "바람소리길,연암지질생태공원",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 증평",
    "duration": "1시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 97,
    "votesUp": 59,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "좌구산휴양림",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "남도예담인벨포레 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "소보양본가 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '남도예담인벨포레' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '소보양본가' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '율리손두부' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "남도예담인벨포레",
      "소보양본가",
      "율리손두부",
      "장뜰순대",
      "연가네순대국밥",
      "카페청안"
    ]
  },
  {
    "id": 206,
    "title": "농다리와 초평저수지",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 진천",
    "duration": "2시간",
    "difficulty": "쉬움",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 96,
    "votesUp": 129,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "농다리 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "보탑사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "뤁스퀘어",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "쌀밥집 곰가내 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "이레막국수 ‘한방감자탕’ (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '쌀밥집 곰가내' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '이레막국수 ‘한방감자탕’' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '곤드레밥집' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "쌀밥집 곰가내",
      "이레막국수 ‘한방감자탕’",
      "곤드레밥집",
      "자작나무삼겹살",
      "시골막국수 진천점"
    ]
  },
  {
    "id": 207,
    "title": "장령산 자연휴양림",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 옥천",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 99,
    "votesUp": 57,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "옥천 황룡사<부소담악>,화인삼림욕장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "황룡사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "옥계폭포",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "진달래가든 2호점(염소) (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "부추서리태콩국수(전원가든) (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '진달래가든 2호점(염소)' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '부추서리태콩국수(전원가든)' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '옻메기탕' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "진달래가든 2호점(염소)",
      "부추서리태콩국수(전원가든)",
      "옻메기탕",
      "농가빵"
    ]
  },
  {
    "id": 208,
    "title": "대청호16구간",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 청주",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 97,
    "votesUp": 105,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "아키아키 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "강남면옥 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '아키아키' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '강남면옥' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '정가네생선' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "아키아키",
      "강남면옥",
      "정가네생선",
      "대산보리밥",
      "고부심",
      "정다운샤브"
    ]
  },
  {
    "id": 209,
    "title": "오리숲길·세조길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 보은",
    "duration": "1.44시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 98,
    "votesUp": 78,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "법주사 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "속리산 법주사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "속리산 말티재 명품숲",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "배영숙 산야 초밥상 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "온제향가 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '배영숙 산야 초밥상' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '온제향가' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '석정' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "배영숙 산야 초밥상",
      "온제향가",
      "석정",
      "영남식당",
      "큰집",
      "속리토속음식점",
      "옛고을식당",
      "능이손칼국수",
      "기사님식당"
    ]
  },
  {
    "id": 210,
    "title": "민주지산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 영동",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 95,
    "votesUp": 63,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "민주지산자연휴양림",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "지장산 반야사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "각호산",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "청학동 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "원조동해식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '청학동' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '원조동해식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '해송식당' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "청학동",
      "원조동해식당",
      "해송식당",
      "중국성",
      "일미순대"
    ]
  },
  {
    "id": 211,
    "title": "양산팔경,월류봉",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 영동",
    "duration": "2.2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 95,
    "votesUp": 142,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "송호관광지 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "와인터널",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "삼대쭈꾸미해신탕 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "청산식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '삼대쭈꾸미해신탕' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '청산식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "삼대쭈꾸미해신탕",
      "청산식당"
    ]
  },
  {
    "id": 212,
    "title": "분천역 트레킹",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 영동",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 99,
    "votesUp": 87,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "협곡열차",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 213,
    "title": "포암산,미륵대원지 하늘재",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 충주",
    "duration": "1.5시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 98,
    "votesUp": 107,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "하늘재 문경주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "미륵대원지",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "문경새재 연결",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "게으른악어 라면먹기 좋음 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '게으른악어 라면먹기 좋음' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "게으른악어 라면먹기 좋음"
    ]
  },
  {
    "id": 214,
    "title": "적보산 씨앗숲",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 충주",
    "duration": "2.1시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 95,
    "votesUp": 136,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "다릿골가든,로드캠프 빌리지",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "오청산 소나무숲",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "청담물갈비 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '청담물갈비' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "청담물갈비"
    ]
  },
  {
    "id": 215,
    "title": "만수계곡",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 충주",
    "duration": "2시간",
    "difficulty": "보통상",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 94,
    "votesUp": 129,
    "votesDown": 3,
    "timeline": [
      {
        "spot": "만수휴게소",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "계곡외 볼것 없음",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "가마솥추어탕 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "장수골해천탕 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '가마솥추어탕' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '장수골해천탕' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '벨라루나(이탈리)' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "가마솥추어탕",
      "장수골해천탕",
      "벨라루나(이탈리)",
      "마중(곤드레 돌솥)"
    ]
  },
  {
    "id": 216,
    "title": "계족산,남산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 충주",
    "duration": "4.5시간",
    "difficulty": "어려움",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 96,
    "votesUp": 119,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "마즈막재 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "4월 충주댐 겹벗꽃길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "남한강 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "충주호매운탕 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '남한강' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '충주호매운탕' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '안토누찌' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "남한강",
      "충주호매운탕",
      "안토누찌"
    ]
  },
  {
    "id": 217,
    "title": "종댕이길,심항산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 충주",
    "duration": "3.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 94,
    "votesUp": 78,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "종댕이 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "충주댐",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "아그집들깨칼국수 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "홍창골염소탕A (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '아그집들깨칼국수' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '홍창골염소탕A' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '관아골(삼계탕)' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "아그집들깨칼국수",
      "홍창골염소탕A",
      "관아골(삼계탕)"
    ]
  },
  {
    "id": 218,
    "title": "수룡계곡",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 충주",
    "duration": "1.4시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 95,
    "votesUp": 126,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "수룡 산림욕장 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "비온 후 맑은날 관찰요망",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "정가네 명태집 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "카페 라브리 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '정가네 명태집' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '카페 라브리' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "정가네 명태집",
      "카페 라브리"
    ]
  },
  {
    "id": 219,
    "title": "수주팔봉",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 충주",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 95,
    "votesUp": 149,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "수주팔봉",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "성불산 휴양림",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "정반(화덕생선구이) (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "들림횟집송어 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '정반(화덕생선구이)' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '들림횟집송어' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "정반(화덕생선구이)",
      "들림횟집송어"
    ]
  },
  {
    "id": 220,
    "title": "악어봉,보덕암,굴",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 충주",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 93,
    "votesUp": 146,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "게으론악어 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "전망효과",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "권고집만두 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "함지박(닭뽁음) (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '권고집만두' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '함지박(닭뽁음)' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '게으른악어 라면먹기 좋음' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "권고집만두",
      "함지박(닭뽁음)",
      "게으른악어 라면먹기 좋음"
    ]
  },
  {
    "id": 221,
    "title": "월악 마애불",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 충주",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 99,
    "votesUp": 112,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "덕주사 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "월악산 덕주사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "고기박사냉면 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "초계막국수 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '고기박사냉면' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '초계막국수' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '국수타령' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "고기박사냉면",
      "초계막국수",
      "국수타령",
      "이화정(소금 크루아상)"
    ]
  },
  {
    "id": 222,
    "title": "비내길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 충주",
    "duration": "1.2시간",
    "difficulty": "쉬움",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 97,
    "votesUp": 141,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "능암탄산온천",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "물고기 점프장",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "메일면묵밥리 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "온천식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '메일면묵밥리' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '온천식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '충주시골묵집' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "메일면묵밥리",
      "온천식당",
      "충주시골묵집",
      "실비집(참배자조림)"
    ]
  },
  {
    "id": 223,
    "title": "남산,석종사",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 충주",
    "duration": "3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 93,
    "votesUp": 163,
    "votesDown": 6,
    "timeline": [
      {
        "spot": "마즈막재 주차장,범바위약수터",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "혜국스님의 석종사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "천년의 침묵",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "신양자강(안림)해물짬뽕 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "만남의바다(참치) (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '신양자강(안림)해물짬뽕' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '만남의바다(참치)' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '다담뜰한식뷔페 충주점(직동입구)' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "신양자강(안림)해물짬뽕",
      "만남의바다(참치)",
      "다담뜰한식뷔페 충주점(직동입구)",
      "충주한우프라자"
    ]
  },
  {
    "id": 224,
    "title": "충열사(임경업 장군),탄금대",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 충주",
    "duration": "1시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 94,
    "votesUp": 96,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "세계무술공원",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "복서울해장 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "삼정면목(3.5) (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '복서울해장' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '삼정면목(3.5)' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '커피단월A' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "복서울해장",
      "삼정면목(3.5)",
      "커피단월A",
      "명산가든"
    ]
  },
  {
    "id": 225,
    "title": "칠보산,군자산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 괴산",
    "duration": "3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 96,
    "votesUp": 159,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "소금강솔밭주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "각연사(3월 너도 바람꽃)",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "소금강 휴게소",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "조령산묵밥청국장 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '조령산묵밥청국장' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "조령산묵밥청국장"
    ]
  },
  {
    "id": 226,
    "title": "쌍곡폭포",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 괴산",
    "duration": "0.15시간",
    "difficulty": "도로근접",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 95,
    "votesUp": 109,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "쌍곡휴게소",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "징검다리에서 보면 좋음",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "소금강휴게소 (차 한잔만) (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '소금강휴게소 (차 한잔만)' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "소금강휴게소 (차 한잔만)"
    ]
  },
  {
    "id": 227,
    "title": "수옥폭포",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 괴산",
    "duration": "0.15시간",
    "difficulty": "도로근접",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 94,
    "votesUp": 56,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "우리 매운탕 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '우리 매운탕' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "우리 매운탕"
    ]
  },
  {
    "id": 228,
    "title": "선유구곡",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 괴산",
    "duration": "1.5시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 96,
    "votesUp": 130,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "선유입구 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "두천매운탕 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '두천매운탕' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "두천매운탕"
    ]
  },
  {
    "id": 229,
    "title": "화양구곡",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 괴산",
    "duration": "2.5시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 99,
    "votesUp": 128,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "탐방 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "문광저수지",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "얼음골봄(백숙) (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '얼음골봄(백숙)' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "얼음골봄(백숙)"
    ]
  },
  {
    "id": 230,
    "title": "산막이옛길,성불산 자연휴양림",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 괴산",
    "duration": "3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 98,
    "votesUp": 87,
    "votesDown": 5,
    "timeline": [
      {
        "spot": "팜바라기카페+성불산휴양림",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "산막이옛길+자연드림파크",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "괴산산막이매운탕 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "오십년할머니 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '괴산산막이매운탕' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '오십년할머니' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '신가네칼국수(휴양림입구)' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-17",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "괴산산막이매운탕",
      "오십년할머니",
      "신가네칼국수(휴양림입구)"
    ]
  },
  {
    "id": 231,
    "title": "조령산 자연휴양림",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 괴산",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 95,
    "votesUp": 169,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "조곡3관문 과거길",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "근교 쉼터",
        "desc": "경치가 좋은 전망 쉼터 휴식 및 하산 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "산들바람",
        "text": "한적하고 숲길 냄새가 정말 좋은 코스입니다. 적극 추천해 드립니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 232,
    "title": "가은산",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 제천",
    "duration": "4시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 97,
    "votesUp": 127,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "옥순대교 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "꽃댕이 묵마을(덕동계곡) (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "다담뜰한식뷔페 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '꽃댕이 묵마을(덕동계곡)' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '다담뜰한식뷔페' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '의림지 오디향(오색꽃비빔밥)' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "꽃댕이 묵마을(덕동계곡)",
      "다담뜰한식뷔페",
      "의림지 오디향(오색꽃비빔밥)"
    ]
  },
  {
    "id": 233,
    "title": "월악제비봉",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 제천",
    "duration": "3.5시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 96,
    "votesUp": 147,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "장회나루 휴게소 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "절반지점 뷰 최고",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "청풍황금떡갈비 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "장가네해장국 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '청풍황금떡갈비' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '장가네해장국' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '청풍명월' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-16",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "청풍황금떡갈비",
      "장가네해장국",
      "청풍명월",
      "장회나루 휴게소<한식>"
    ]
  },
  {
    "id": 234,
    "title": "능강구곡,정방사",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 제천",
    "duration": "3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 99,
    "votesUp": 84,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "능강교 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "정방사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "계곡물 맑고",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "밥상위의보약한첩<한식> (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "물태리빵집 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '밥상위의보약한첩<한식>' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '물태리빵집' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '카페슬로비' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-10",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "밥상위의보약한첩<한식>",
      "물태리빵집",
      "카페슬로비",
      "교리가든"
    ]
  },
  {
    "id": 235,
    "title": "옥순봉,구담봉",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 제천",
    "duration": "3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 96,
    "votesUp": 97,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "계란재공원 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "전망효과",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "제천시락국 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "오디향 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '제천시락국' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '오디향' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '청풍명월' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "제천시락국",
      "오디향",
      "청풍명월"
    ]
  },
  {
    "id": 236,
    "title": "도담삼봉,사인암",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 단양",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 98,
    "votesUp": 91,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "새한서점",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "가연A (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "영남식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '가연A' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '영남식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '청풍황금떡' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "가연A",
      "영남식당",
      "청풍황금떡",
      "자연식당(쏘가리)"
    ]
  },
  {
    "id": 237,
    "title": "선암골 생태유람길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 단양",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 97,
    "votesUp": 147,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "단성 체육공원",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "보발재 전망",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "그집쏘가리 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "만천하스카이 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '그집쏘가리' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-21",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '만천하스카이' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-18",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '카페인단양' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "그집쏘가리",
      "만천하스카이",
      "카페인단양",
      "내고향순두부"
    ]
  },
  {
    "id": 238,
    "title": "구인사",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 단양",
    "duration": "3.3시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 96,
    "votesUp": 137,
    "votesDown": 4,
    "timeline": [
      {
        "spot": "구인사 주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "구인사",
        "desc": "천년 사찰의 지혜와 수려한 정취 관람.",
        "time": "11:00"
      },
      {
        "spot": "단양강 잔도1.2km",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "장회나루 휴게소<한식> (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "대성식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '장회나루 휴게소<한식>' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-19",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '대성식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-12",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '단양민물매운탕' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-24",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "장회나루 휴게소<한식>",
      "대성식당",
      "단양민물매운탕"
    ]
  },
  {
    "id": 239,
    "title": "소백산 천동계곡숲",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "충북 단양",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 95,
    "votesUp": 154,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "황정산 바위꽃숲",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "가마골쉼터 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "어부네매운탕 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '가마골쉼터' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '어부네매운탕' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '보리곳간' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-11",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "가마골쉼터",
      "어부네매운탕",
      "보리곳간",
      "소백산 매운메밀칼"
    ]
  },
  {
    "id": 240,
    "title": "올레길14,16,19,21코스",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "제주 제주시",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 95,
    "votesUp": 87,
    "votesDown": 7,
    "timeline": [
      {
        "spot": "보리김치",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "사려니 숲길5코스",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "명도암 수다뜰 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "고집돌우럭 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '명도암 수다뜰' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '고집돌우럭' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '카페나모' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-22",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "명도암 수다뜰",
      "고집돌우럭",
      "카페나모",
      "제주김만복",
      "이춘옥원조",
      "제주광해",
      "울트라마린",
      "상춘재",
      "바르왓"
    ]
  },
  {
    "id": 241,
    "title": "송악산둘레길,7코스,",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "제주 서귀포시",
    "duration": "1시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 96,
    "votesUp": 96,
    "votesDown": 2,
    "timeline": [
      {
        "spot": "송악산주차장",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "마라도",
        "desc": "주요 경유 명소 및 조망점 관찰.",
        "time": "12:30"
      },
      {
        "spot": "원앤온리 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "고집돌우럭 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '원앤온리' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-23",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '고집돌우럭' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-15",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '색달식당.별돈별' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-20",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "원앤온리",
      "고집돌우럭",
      "색달식당.별돈별",
      "드르쿰다",
      "미영이네",
      "수두리보말칼국수",
      "제주오성"
    ]
  },
  {
    "id": 242,
    "title": "1코스",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "제주 성산읍",
    "duration": "2시간",
    "difficulty": "보통",
    "type": "트레킹 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 94,
    "votesUp": 69,
    "votesDown": 1,
    "timeline": [
      {
        "spot": "들머리 입구",
        "desc": "트레킹 시작 및 코스 입구 진입.",
        "time": "09:30"
      },
      {
        "spot": "백년손님 (식사)",
        "desc": "현지 방문자들이 극찬한 강추 맛집 방문.",
        "time": "13:30"
      },
      {
        "spot": "맛나식당 (카페)",
        "desc": "산책 후 편안한 커피 앤 차 쉼터 휴식.",
        "time": "15:00"
      }
    ],
    "comments": [
      {
        "user": "산책매니아",
        "text": "코스 중간에 들른 '백년손님' 식당은 재방문 의사 100%인 찐맛집입니다!",
        "date": "2026-06-25",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "맛집사냥꾼",
        "text": "코스 중간에 들른 '맛나식당' 식당은 꼭 한번 들러볼 만한 훌륭한 장소예요.",
        "date": "2026-06-26",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      },
      {
        "user": "들꽃길",
        "text": "코스 중간에 들른 '드르F4:G235쿰다' 식당은 부모님 모시고 가기 딱 좋은 아늑한 곳입니다.",
        "date": "2026-06-14",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "백년손님",
      "맛나식당",
      "드르F4:G235쿰다",
      "수마",
      "윌라라",
      "청호식당",
      "카페라라라",
      "복자씨연탄",
      "시흥해녀의집",
      "한라전복",
      "카페바르"
    ]
  }
,
  // ---- 2026-07-03 추가: 행안부 「가고싶은 섬」 47 + 「리서치 나들이」 15 (가고픈곳_리서치추가 엑셀, 중복 제외) ----
  {
    "id": 243,
    "title": "외달도 해안데크길",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "전남 목포",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern1",
    "satisfaction": 89,
    "votesUp": 69,
    "votesDown": 5,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "외달도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "해안데크 산책로",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "11:00"
      },
      {
        "spot": "해수풀장·해수욕장",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "주말산책",
        "text": "외달도 배 시간만 잘 맞추면 반나절로 충분합니다. 걷는 내내 바다가 따라와요.",
        "date": "2026-05-30",
        "ratings": {
          "scenery": 5,
          "path": 3,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 244,
    "title": "연홍도 마을벽화길",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "전남 고흥",
    "duration": "3시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern2",
    "satisfaction": 96,
    "votesUp": 82,
    "votesDown": 6,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "연홍도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "마을벽화길",
        "desc": "섬의 대표 명소 관람.",
        "time": "11:00"
      },
      {
        "spot": "해변포토존",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "12:30"
      },
      {
        "spot": "마을미술관",
        "desc": "섬의 이야기가 남은 명소 관람.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "나들이수첩",
        "text": "연홍도는 사진보다 실물이 낫습니다. 사람이 적어 조용히 걷기 좋아요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 245,
    "title": "청산도 슬로길",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "전남 완도",
    "duration": "6시간",
    "difficulty": "보통",
    "type": "섬 나들이",
    "patternClass": "bg-pattern3",
    "satisfaction": 93,
    "votesUp": 95,
    "votesDown": 7,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "청산도항",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "슬로길 1코스",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "11:00"
      },
      {
        "spot": "구들장논",
        "desc": "섬의 대표 명소 관람.",
        "time": "12:30"
      },
      {
        "spot": "돌담길",
        "desc": "섬의 대표 명소 관람.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "바닷바람",
        "text": "청산도 다녀왔는데 길이 잘 정비되어 있어 부모님 모시고 가도 무리 없었습니다.",
        "date": "2026-06-27",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 246,
    "title": "한산도,추봉도 역사길",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "경남 통영",
    "duration": "5시간",
    "difficulty": "보통",
    "type": "섬 나들이",
    "patternClass": "bg-pattern4",
    "satisfaction": 90,
    "votesUp": 108,
    "votesDown": 2,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "제승당 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "한산역사길",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "11:00"
      },
      {
        "spot": "제승당",
        "desc": "섬의 대표 명소 관람.",
        "time": "12:30"
      },
      {
        "spot": "추봉도 일주도로 꽃길",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "섬나들이",
        "text": "한산도에서 한나절 보냈습니다. 매점이 적으니 물과 간식은 챙겨 가세요.",
        "date": "2026-04-18",
        "ratings": {
          "scenery": 4,
          "path": 3,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 247,
    "title": "신수도 몽돌해변 오솔길",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "경남 사천",
    "duration": "3시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern1",
    "satisfaction": 97,
    "votesUp": 121,
    "votesDown": 3,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "신수도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "소나무 오솔길",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "11:00"
      },
      {
        "spot": "몽돌해수욕장",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "12:30"
      },
      {
        "spot": "캠핑장",
        "desc": "섬에서만 가능한 체험 거리.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "느린여행",
        "text": "신수도는 성수기보다 평일이 좋습니다. 배편 예매를 서두르는 편이 안전해요.",
        "date": "2026-05-02",
        "ratings": {
          "scenery": 5,
          "path": 4,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 248,
    "title": "내도 동백숲길",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 거제",
    "duration": "3시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern2",
    "satisfaction": 94,
    "votesUp": 42,
    "votesDown": 4,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "내도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "동백나무 숲길",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "11:00"
      },
      {
        "spot": "바람의 언덕",
        "desc": "탁 트인 바다 조망점.",
        "time": "12:30"
      },
      {
        "spot": "몽돌해수욕장",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "걷는사람",
        "text": "내도 바람이 잦은 곳이라 겉옷 하나 챙기면 걷기 딱 좋습니다.",
        "date": "2026-05-16",
        "ratings": {
          "scenery": 4,
          "path": 5,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 249,
    "title": "이수도 사슴생태 둘레길",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "경남 거제",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern3",
    "satisfaction": 91,
    "votesUp": 55,
    "votesDown": 5,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "이수도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "사슴 생태 둘레길",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "11:00"
      },
      {
        "spot": "전망대",
        "desc": "탁 트인 바다 조망점.",
        "time": "12:30"
      },
      {
        "spot": "출렁다리",
        "desc": "바다 위를 걷는 명물 구간.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "주말산책",
        "text": "이수도 배 시간만 잘 맞추면 반나절로 충분합니다. 걷는 내내 바다가 따라와요.",
        "date": "2026-05-30",
        "ratings": {
          "scenery": 5,
          "path": 3,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 250,
    "title": "풍도 야생화 둘레길",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "경기 안산",
    "duration": "5시간",
    "difficulty": "보통",
    "type": "섬 나들이",
    "patternClass": "bg-pattern4",
    "satisfaction": 88,
    "votesUp": 68,
    "votesDown": 6,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "풍도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "풍도 둘레길",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "11:00"
      },
      {
        "spot": "야생화 군락지",
        "desc": "섬의 대표 명소 관람.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "나들이수첩",
        "text": "풍도는 사진보다 실물이 낫습니다. 사람이 적어 조용히 걷기 좋아요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 251,
    "title": "방축도 트래킹길",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "전북 군산",
    "duration": "5시간",
    "difficulty": "보통",
    "type": "섬 나들이",
    "patternClass": "bg-pattern1",
    "satisfaction": 95,
    "votesUp": 81,
    "votesDown": 7,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "방축도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "트래킹 코스",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "11:00"
      },
      {
        "spot": "해안 조망점",
        "desc": "탁 트인 바다 조망점.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "바닷바람",
        "text": "방축도 다녀왔는데 길이 잘 정비되어 있어 부모님 모시고 가도 무리 없었습니다.",
        "date": "2026-06-27",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 252,
    "title": "장도 뻘배길 갯벌탐방",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "전남 보성",
    "duration": "3시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern2",
    "satisfaction": 92,
    "votesUp": 94,
    "votesDown": 2,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "장도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "뻘배길",
        "desc": "섬에서만 가능한 체험 거리.",
        "time": "11:00"
      },
      {
        "spot": "갯벌탐방장",
        "desc": "섬에서만 가능한 체험 거리.",
        "time": "12:30"
      },
      {
        "spot": "해상낚시터",
        "desc": "섬에서만 가능한 체험 거리.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "섬나들이",
        "text": "장도에서 한나절 보냈습니다. 매점이 적으니 물과 간식은 챙겨 가세요.",
        "date": "2026-04-18",
        "ratings": {
          "scenery": 4,
          "path": 3,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 253,
    "title": "모도 신비의 바닷길",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "전남 진도",
    "duration": "3시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern3",
    "satisfaction": 89,
    "votesUp": 107,
    "votesDown": 3,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "모도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "신비의 바닷길",
        "desc": "바다 위를 걷는 명물 구간.",
        "time": "11:00"
      },
      {
        "spot": "모도 마을길",
        "desc": "섬의 대표 명소 관람.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "느린여행",
        "text": "모도는 성수기보다 평일이 좋습니다. 배편 예매를 서두르는 편이 안전해요.",
        "date": "2026-05-02",
        "ratings": {
          "scenery": 5,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 254,
    "title": "소악도 12사도 순례길",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "전남 신안",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern4",
    "satisfaction": 96,
    "votesUp": 120,
    "votesDown": 4,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "소악도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "12사도 예배당 순례길",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "11:00"
      },
      {
        "spot": "노둣길 해안 조망",
        "desc": "탁 트인 바다 조망점.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "걷는사람",
        "text": "소악도 바람이 잦은 곳이라 겉옷 하나 챙기면 걷기 딱 좋습니다.",
        "date": "2026-05-16",
        "ratings": {
          "scenery": 4,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 255,
    "title": "사량도 옥녀봉 등산길",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "경남 통영",
    "duration": "6시간",
    "difficulty": "중상",
    "type": "섬 나들이",
    "patternClass": "bg-pattern1",
    "satisfaction": 93,
    "votesUp": 41,
    "votesDown": 5,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "사량도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "지리산 옥녀봉 등산코스",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "11:00"
      },
      {
        "spot": "고동산 둘레코스",
        "desc": "섬의 대표 명소 관람.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "주말산책",
        "text": "사량도 배 시간만 잘 맞추면 반나절로 충분합니다. 걷는 내내 바다가 따라와요.",
        "date": "2026-05-30",
        "ratings": {
          "scenery": 5,
          "path": 3,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 256,
    "title": "위도 상사화길",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "전북 부안",
    "duration": "5시간",
    "difficulty": "보통",
    "type": "섬 나들이",
    "patternClass": "bg-pattern2",
    "satisfaction": 90,
    "votesUp": 54,
    "votesDown": 6,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "위도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "위도상사화 군락",
        "desc": "섬의 대표 명소 관람.",
        "time": "11:00"
      },
      {
        "spot": "위도 해수욕장",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "나들이수첩",
        "text": "위도는 사진보다 실물이 낫습니다. 사람이 적어 조용히 걷기 좋아요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 257,
    "title": "송이도 몽돌해변길",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "전남 영광",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern3",
    "satisfaction": 97,
    "votesUp": 67,
    "votesDown": 7,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "송이도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "몽돌해변",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "11:00"
      },
      {
        "spot": "왕소사나무 군락지",
        "desc": "섬의 대표 명소 관람.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "바닷바람",
        "text": "송이도 다녀왔는데 길이 잘 정비되어 있어 부모님 모시고 가도 무리 없었습니다.",
        "date": "2026-06-27",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 258,
    "title": "소안도 해양생태공원길",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "전남 완도",
    "duration": "5시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern4",
    "satisfaction": 94,
    "votesUp": 80,
    "votesDown": 2,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "소안도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "미라리 해수욕장",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "11:00"
      },
      {
        "spot": "이목 해양생태공원",
        "desc": "섬의 대표 명소 관람.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "섬나들이",
        "text": "소안도에서 한나절 보냈습니다. 매점이 적으니 물과 간식은 챙겨 가세요.",
        "date": "2026-04-18",
        "ratings": {
          "scenery": 4,
          "path": 3,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 259,
    "title": "임하도 일몰 산책길",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "전남 해남",
    "duration": "2시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern1",
    "satisfaction": 91,
    "votesUp": 93,
    "votesDown": 3,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "임하교",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "임하도 해안길",
        "desc": "섬의 대표 명소 관람.",
        "time": "11:00"
      },
      {
        "spot": "일몰 조망점",
        "desc": "탁 트인 바다 조망점.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "느린여행",
        "text": "임하도는 성수기보다 평일이 좋습니다. 배편 예매를 서두르는 편이 안전해요.",
        "date": "2026-05-02",
        "ratings": {
          "scenery": 5,
          "path": 4,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 260,
    "title": "자은도 무한의 다리",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "전남 신안",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern2",
    "satisfaction": 88,
    "votesUp": 106,
    "votesDown": 4,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "무한의 다리",
        "desc": "연륙교·진입로로 걸어서 입도, 나들이 시작.",
        "time": "09:30"
      },
      {
        "spot": "1004뮤지엄파크",
        "desc": "섬의 대표 명소 관람.",
        "time": "11:00"
      },
      {
        "spot": "해변 산책로",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "걷는사람",
        "text": "자은도 바람이 잦은 곳이라 겉옷 하나 챙기면 걷기 딱 좋습니다.",
        "date": "2026-05-16",
        "ratings": {
          "scenery": 4,
          "path": 5,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 261,
    "title": "병풍도 맨드라미 정원",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "전남 신안",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern3",
    "satisfaction": 95,
    "votesUp": 119,
    "votesDown": 5,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "병풍도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "맨드라미 정원",
        "desc": "섬의 대표 명소 관람.",
        "time": "11:00"
      },
      {
        "spot": "섬 둘레 산책로",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "주말산책",
        "text": "병풍도 배 시간만 잘 맞추면 반나절로 충분합니다. 걷는 내내 바다가 따라와요.",
        "date": "2026-05-30",
        "ratings": {
          "scenery": 5,
          "path": 3,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 262,
    "title": "울릉도 관음도,삼선암",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "경북 울릉",
    "duration": "6시간",
    "difficulty": "보통",
    "type": "섬 나들이",
    "patternClass": "bg-pattern4",
    "satisfaction": 92,
    "votesUp": 40,
    "votesDown": 6,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "관음도 보행연도교",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "삼선암",
        "desc": "섬의 대표 명소 관람.",
        "time": "11:00"
      },
      {
        "spot": "봉래폭포",
        "desc": "섬의 대표 명소 관람.",
        "time": "12:30"
      },
      {
        "spot": "약수공원",
        "desc": "섬의 대표 명소 관람.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "나들이수첩",
        "text": "울릉도는 사진보다 실물이 낫습니다. 사람이 적어 조용히 걷기 좋아요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 263,
    "title": "장사도 해상공원 까멜리아",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 통영",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern1",
    "satisfaction": 89,
    "votesUp": 53,
    "votesDown": 7,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "장사도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "해상공원 산책로",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "11:00"
      },
      {
        "spot": "동백 군락지",
        "desc": "섬의 대표 명소 관람.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "바닷바람",
        "text": "장사도 다녀왔는데 길이 잘 정비되어 있어 부모님 모시고 가도 무리 없었습니다.",
        "date": "2026-06-27",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 264,
    "title": "우도 우도8경 나들이",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "제주 제주시",
    "duration": "5시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern2",
    "satisfaction": 96,
    "votesUp": 66,
    "votesDown": 2,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "우도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "우도8경 순환길",
        "desc": "섬의 대표 명소 관람.",
        "time": "11:00"
      },
      {
        "spot": "해변 쉼터",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "섬나들이",
        "text": "우도에서 한나절 보냈습니다. 매점이 적으니 물과 간식은 챙겨 가세요.",
        "date": "2026-04-18",
        "ratings": {
          "scenery": 4,
          "path": 3,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 265,
    "title": "덕적도 서포리 해수욕장",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "인천 옹진",
    "duration": "5시간",
    "difficulty": "보통",
    "type": "섬 나들이",
    "patternClass": "bg-pattern3",
    "satisfaction": 93,
    "votesUp": 79,
    "votesDown": 3,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "덕적도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "서포리 해수욕장",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "11:00"
      },
      {
        "spot": "비조봉",
        "desc": "탁 트인 바다 조망점.",
        "time": "12:30"
      },
      {
        "spot": "때뿌루 해변",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "느린여행",
        "text": "덕적도는 성수기보다 평일이 좋습니다. 배편 예매를 서두르는 편이 안전해요.",
        "date": "2026-05-02",
        "ratings": {
          "scenery": 5,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 266,
    "title": "호도 해수욕장 바다전망대",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "충남 보령",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern4",
    "satisfaction": 90,
    "votesUp": 92,
    "votesDown": 4,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "호도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "호도 해수욕장",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "11:00"
      },
      {
        "spot": "바다 전망대",
        "desc": "탁 트인 바다 조망점.",
        "time": "12:30"
      },
      {
        "spot": "청파초교 호도분교",
        "desc": "섬의 이야기가 남은 명소 관람.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "걷는사람",
        "text": "호도 바람이 잦은 곳이라 겉옷 하나 챙기면 걷기 딱 좋습니다.",
        "date": "2026-05-16",
        "ratings": {
          "scenery": 4,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 267,
    "title": "장자도 대장봉 전망길",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "전북 군산",
    "duration": "3시간",
    "difficulty": "보통",
    "type": "섬 나들이",
    "patternClass": "bg-pattern1",
    "satisfaction": 97,
    "votesUp": 105,
    "votesDown": 5,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "장자도 진입로",
        "desc": "연륙교·진입로로 걸어서 입도, 나들이 시작.",
        "time": "09:30"
      },
      {
        "spot": "대장봉",
        "desc": "탁 트인 바다 조망점.",
        "time": "11:00"
      },
      {
        "spot": "고군산군도 전망점",
        "desc": "탁 트인 바다 조망점.",
        "time": "12:30"
      },
      {
        "spot": "유람선 선착장",
        "desc": "섬의 대표 명소 관람.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "주말산책",
        "text": "장자도 배 시간만 잘 맞추면 반나절로 충분합니다. 걷는 내내 바다가 따라와요.",
        "date": "2026-05-30",
        "ratings": {
          "scenery": 5,
          "path": 3,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 268,
    "title": "애도(쑥섬) 별정원",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "전남 고흥",
    "duration": "3시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern2",
    "satisfaction": 94,
    "votesUp": 118,
    "votesDown": 6,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "애도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "별정원·꽃정원",
        "desc": "섬의 대표 명소 관람.",
        "time": "11:00"
      },
      {
        "spot": "돌담길",
        "desc": "섬의 대표 명소 관람.",
        "time": "12:30"
      },
      {
        "spot": "갈매기 카페",
        "desc": "바다를 보며 커피 한 잔 쉼.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "나들이수첩",
        "text": "애도는 사진보다 실물이 낫습니다. 사람이 적어 조용히 걷기 좋아요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 269,
    "title": "생일도 금곡해수욕장",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "전남 완도",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern3",
    "satisfaction": 91,
    "votesUp": 39,
    "votesDown": 7,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "생일도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "금곡해수욕장",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "11:00"
      },
      {
        "spot": "너덜겅 쉼터",
        "desc": "섬의 대표 명소 관람.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "바닷바람",
        "text": "생일도 다녀왔는데 길이 잘 정비되어 있어 부모님 모시고 가도 무리 없었습니다.",
        "date": "2026-06-27",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 270,
    "title": "비진도 산호빛 해변",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "경남 통영",
    "duration": "5시간",
    "difficulty": "보통",
    "type": "섬 나들이",
    "patternClass": "bg-pattern4",
    "satisfaction": 88,
    "votesUp": 52,
    "votesDown": 2,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "비진도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "백사장·해송길",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "11:00"
      },
      {
        "spot": "선유대",
        "desc": "섬의 대표 명소 관람.",
        "time": "12:30"
      },
      {
        "spot": "등산로 전망대",
        "desc": "탁 트인 바다 조망점.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "섬나들이",
        "text": "비진도에서 한나절 보냈습니다. 매점이 적으니 물과 간식은 챙겨 가세요.",
        "date": "2026-04-18",
        "ratings": {
          "scenery": 4,
          "path": 3,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 271,
    "title": "연대도,만지도 출렁다리",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "경남 통영",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern1",
    "satisfaction": 95,
    "votesUp": 65,
    "votesDown": 3,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "연대도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "출렁다리",
        "desc": "바다 위를 걷는 명물 구간.",
        "time": "11:00"
      },
      {
        "spot": "만지도 몽돌해수욕장",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "12:30"
      },
      {
        "spot": "해안데크",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "느린여행",
        "text": "연대도는 성수기보다 평일이 좋습니다. 배편 예매를 서두르는 편이 안전해요.",
        "date": "2026-05-02",
        "ratings": {
          "scenery": 5,
          "path": 4,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 272,
    "title": "추자도 등대전망대길",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "제주 제주시",
    "duration": "5시간",
    "difficulty": "보통",
    "type": "섬 나들이",
    "patternClass": "bg-pattern2",
    "satisfaction": 92,
    "votesUp": 78,
    "votesDown": 4,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "상추자항 포토존",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "등대 전망대",
        "desc": "탁 트인 바다 조망점.",
        "time": "11:00"
      },
      {
        "spot": "해안 산책로",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "걷는사람",
        "text": "추자도 바람이 잦은 곳이라 겉옷 하나 챙기면 걷기 딱 좋습니다.",
        "date": "2026-05-16",
        "ratings": {
          "scenery": 4,
          "path": 5,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 273,
    "title": "교동도 대룡시장",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "인천 강화",
    "duration": "3시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern3",
    "satisfaction": 89,
    "votesUp": 91,
    "votesDown": 5,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "교동대교",
        "desc": "연륙교·진입로로 걸어서 입도, 나들이 시작.",
        "time": "09:30"
      },
      {
        "spot": "대룡시장",
        "desc": "섬의 이야기가 남은 명소 관람.",
        "time": "11:00"
      },
      {
        "spot": "교동향교",
        "desc": "섬의 이야기가 남은 명소 관람.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "주말산책",
        "text": "교동도 배 시간만 잘 맞추면 반나절로 충분합니다. 걷는 내내 바다가 따라와요.",
        "date": "2026-05-30",
        "ratings": {
          "scenery": 5,
          "path": 3,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 274,
    "title": "가사도 전설 둘레길",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "전남 진도",
    "duration": "4시간",
    "difficulty": "보통",
    "type": "섬 나들이",
    "patternClass": "bg-pattern4",
    "satisfaction": 96,
    "votesUp": 104,
    "votesDown": 6,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "가사도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "가사5도 조망점",
        "desc": "탁 트인 바다 조망점.",
        "time": "11:00"
      },
      {
        "spot": "섬 둘레길",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "나들이수첩",
        "text": "가사도는 사진보다 실물이 낫습니다. 사람이 적어 조용히 걷기 좋아요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 275,
    "title": "고대도 귀츨라프 기념길",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "충남 보령",
    "duration": "3시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern1",
    "satisfaction": 93,
    "votesUp": 117,
    "votesDown": 7,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "고대도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "고대도 교회",
        "desc": "섬의 이야기가 남은 명소 관람.",
        "time": "11:00"
      },
      {
        "spot": "해안 산책로",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "바닷바람",
        "text": "고대도 다녀왔는데 길이 잘 정비되어 있어 부모님 모시고 가도 무리 없었습니다.",
        "date": "2026-06-27",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 276,
    "title": "연화도 연화사,보덕암",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "경남 통영",
    "duration": "5시간",
    "difficulty": "보통",
    "type": "섬 나들이",
    "patternClass": "bg-pattern2",
    "satisfaction": 90,
    "votesUp": 38,
    "votesDown": 2,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "연화도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "연화사",
        "desc": "섬의 대표 명소 관람.",
        "time": "11:00"
      },
      {
        "spot": "보덕암",
        "desc": "섬의 대표 명소 관람.",
        "time": "12:30"
      },
      {
        "spot": "출렁다리·보도교",
        "desc": "바다 위를 걷는 명물 구간.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "섬나들이",
        "text": "연화도에서 한나절 보냈습니다. 매점이 적으니 물과 간식은 챙겨 가세요.",
        "date": "2026-04-18",
        "ratings": {
          "scenery": 4,
          "path": 3,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 277,
    "title": "지심도 동백섬 산책로",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "경남 거제",
    "duration": "3시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern3",
    "satisfaction": 97,
    "votesUp": 51,
    "votesDown": 3,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "지심도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "동백숲 산책로",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "11:00"
      },
      {
        "spot": "옛 포대 터",
        "desc": "섬의 이야기가 남은 명소 관람.",
        "time": "12:30"
      },
      {
        "spot": "적산가옥",
        "desc": "섬의 이야기가 남은 명소 관람.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "느린여행",
        "text": "지심도는 성수기보다 평일이 좋습니다. 배편 예매를 서두르는 편이 안전해요.",
        "date": "2026-05-02",
        "ratings": {
          "scenery": 5,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 278,
    "title": "국화도 바닷길 갯벌체험",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "경기 화성",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern4",
    "satisfaction": 94,
    "votesUp": 64,
    "votesDown": 4,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "국화도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "간조 바닷길",
        "desc": "바다 위를 걷는 명물 구간.",
        "time": "11:00"
      },
      {
        "spot": "갯벌체험장",
        "desc": "섬에서만 가능한 체험 거리.",
        "time": "12:30"
      },
      {
        "spot": "해넘이 조망점",
        "desc": "탁 트인 바다 조망점.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "걷는사람",
        "text": "국화도 바람이 잦은 곳이라 겉옷 하나 챙기면 걷기 딱 좋습니다.",
        "date": "2026-05-16",
        "ratings": {
          "scenery": 4,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 279,
    "title": "소도 부교 둘레길",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "충남 보령",
    "duration": "3시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern1",
    "satisfaction": 91,
    "votesUp": 77,
    "votesDown": 5,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "부교 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "소도 둘레길",
        "desc": "섬을 끼고 걷는 메인 코스.",
        "time": "11:00"
      },
      {
        "spot": "해안 쉼터",
        "desc": "섬의 대표 명소 관람.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "주말산책",
        "text": "소도 배 시간만 잘 맞추면 반나절로 충분합니다. 걷는 내내 바다가 따라와요.",
        "date": "2026-05-30",
        "ratings": {
          "scenery": 5,
          "path": 3,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 280,
    "title": "사도 공룡화석지 바닷길",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "전남 여수",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern2",
    "satisfaction": 88,
    "votesUp": 90,
    "votesDown": 6,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "사도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "공룡화석지",
        "desc": "섬의 대표 명소 관람.",
        "time": "11:00"
      },
      {
        "spot": "바닷길",
        "desc": "바다 위를 걷는 명물 구간.",
        "time": "12:30"
      },
      {
        "spot": "양면해수욕장",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "나들이수첩",
        "text": "사도는 사진보다 실물이 낫습니다. 사람이 적어 조용히 걷기 좋아요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 281,
    "title": "금당도 금당8경",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "전남 완도",
    "duration": "5시간",
    "difficulty": "보통",
    "type": "섬 나들이",
    "patternClass": "bg-pattern3",
    "satisfaction": 95,
    "votesUp": 103,
    "votesDown": 7,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "금당도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "교암청풍",
        "desc": "섬의 대표 명소 관람.",
        "time": "11:00"
      },
      {
        "spot": "코끼리바위",
        "desc": "섬의 대표 명소 관람.",
        "time": "12:30"
      },
      {
        "spot": "부채바위",
        "desc": "섬의 대표 명소 관람.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "바닷바람",
        "text": "금당도 다녀왔는데 길이 잘 정비되어 있어 부모님 모시고 가도 무리 없었습니다.",
        "date": "2026-06-27",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 282,
    "title": "우이도 돌담길",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "전남 신안",
    "duration": "5시간",
    "difficulty": "보통",
    "type": "섬 나들이",
    "patternClass": "bg-pattern4",
    "satisfaction": 92,
    "votesUp": 116,
    "votesDown": 2,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "우이도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "돌담길",
        "desc": "섬의 대표 명소 관람.",
        "time": "11:00"
      },
      {
        "spot": "해변바위",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "12:30"
      },
      {
        "spot": "염소방목 풍경길",
        "desc": "섬의 대표 명소 관람.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "섬나들이",
        "text": "우이도에서 한나절 보냈습니다. 매점이 적으니 물과 간식은 챙겨 가세요.",
        "date": "2026-04-18",
        "ratings": {
          "scenery": 4,
          "path": 3,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 283,
    "title": "선유도 해수욕장 산책",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "전북 군산",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern1",
    "satisfaction": 89,
    "votesUp": 129,
    "votesDown": 3,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "선유도 진입로",
        "desc": "연륙교·진입로로 걸어서 입도, 나들이 시작.",
        "time": "09:30"
      },
      {
        "spot": "선유도 해수욕장",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "11:00"
      },
      {
        "spot": "해변 산책로",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "느린여행",
        "text": "선유도는 성수기보다 평일이 좋습니다. 배편 예매를 서두르는 편이 안전해요.",
        "date": "2026-05-02",
        "ratings": {
          "scenery": 5,
          "path": 4,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 284,
    "title": "가우도 출렁다리,짚트랙",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "전남 강진",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern2",
    "satisfaction": 96,
    "votesUp": 50,
    "votesDown": 4,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "가우도 출렁다리",
        "desc": "연륙교·진입로로 걸어서 입도, 나들이 시작.",
        "time": "09:30"
      },
      {
        "spot": "생태탐방로",
        "desc": "섬의 대표 명소 관람.",
        "time": "11:00"
      },
      {
        "spot": "해상 짚트랙",
        "desc": "섬에서만 가능한 체험 거리.",
        "time": "12:30"
      },
      {
        "spot": "후박·편백 군락지",
        "desc": "섬의 대표 명소 관람.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "걷는사람",
        "text": "가우도 바람이 잦은 곳이라 겉옷 하나 챙기면 걷기 딱 좋습니다.",
        "date": "2026-05-16",
        "ratings": {
          "scenery": 4,
          "path": 5,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 285,
    "title": "석모도 온천,갯벌체험",
    "season": "winter",
    "seasonName": "겨울 추천",
    "location": "인천 강화",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern3",
    "satisfaction": 93,
    "votesUp": 63,
    "votesDown": 5,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "석모대교",
        "desc": "연륙교·진입로로 걸어서 입도, 나들이 시작.",
        "time": "09:30"
      },
      {
        "spot": "미네랄 온천",
        "desc": "섬에서만 가능한 체험 거리.",
        "time": "11:00"
      },
      {
        "spot": "갯벌체험장",
        "desc": "섬에서만 가능한 체험 거리.",
        "time": "12:30"
      },
      {
        "spot": "목공체험장",
        "desc": "섬에서만 가능한 체험 거리.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "주말산책",
        "text": "석모도 배 시간만 잘 맞추면 반나절로 충분합니다. 걷는 내내 바다가 따라와요.",
        "date": "2026-05-30",
        "ratings": {
          "scenery": 5,
          "path": 3,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 286,
    "title": "임자도 튤립축제,승마체험",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "전남 신안",
    "duration": "5시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern4",
    "satisfaction": 90,
    "votesUp": 76,
    "votesDown": 6,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "임자대교",
        "desc": "연륙교·진입로로 걸어서 입도, 나들이 시작.",
        "time": "09:30"
      },
      {
        "spot": "튤립축제장",
        "desc": "섬의 대표 명소 관람.",
        "time": "11:00"
      },
      {
        "spot": "승마체험장",
        "desc": "섬에서만 가능한 체험 거리.",
        "time": "12:30"
      },
      {
        "spot": "카약체험장",
        "desc": "섬에서만 가능한 체험 거리.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "나들이수첩",
        "text": "임자도는 사진보다 실물이 낫습니다. 사람이 적어 조용히 걷기 좋아요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 287,
    "title": "증도 갯벌체험 슬로길",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "전남 신안",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern1",
    "satisfaction": 97,
    "votesUp": 89,
    "votesDown": 7,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "증도대교",
        "desc": "연륙교·진입로로 걸어서 입도, 나들이 시작.",
        "time": "09:30"
      },
      {
        "spot": "갯벌체험장",
        "desc": "섬에서만 가능한 체험 거리.",
        "time": "11:00"
      },
      {
        "spot": "해변 산책로",
        "desc": "해변 산책과 물멍 쉼.",
        "time": "12:30"
      }
    ],
    "comments": [
      {
        "user": "바닷바람",
        "text": "증도 다녀왔는데 길이 잘 정비되어 있어 부모님 모시고 가도 무리 없었습니다.",
        "date": "2026-06-27",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 288,
    "title": "소쿠리섬 캠핑,바다체험",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "경남 창원",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "섬 나들이",
    "patternClass": "bg-pattern2",
    "satisfaction": 94,
    "votesUp": 102,
    "votesDown": 2,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "소쿠리섬 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "짚트랙",
        "desc": "섬에서만 가능한 체험 거리.",
        "time": "11:00"
      },
      {
        "spot": "캠핑장",
        "desc": "섬에서만 가능한 체험 거리.",
        "time": "12:30"
      },
      {
        "spot": "바다체험장",
        "desc": "섬에서만 가능한 체험 거리.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "섬나들이",
        "text": "소쿠리섬에서 한나절 보냈습니다. 매점이 적으니 물과 간식은 챙겨 가세요.",
        "date": "2026-04-18",
        "ratings": {
          "scenery": 4,
          "path": 3,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 289,
    "title": "욕지도 출렁다리,해상낚시",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "경남 통영",
    "duration": "5시간",
    "difficulty": "보통",
    "type": "섬 나들이",
    "patternClass": "bg-pattern3",
    "satisfaction": 91,
    "votesUp": 115,
    "votesDown": 3,
    "photoKey": "sea",
    "timeline": [
      {
        "spot": "욕지도 선착장",
        "desc": "배편으로 입도, 나들이 시작. 운항 시간·물때 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "출렁다리",
        "desc": "바다 위를 걷는 명물 구간.",
        "time": "11:00"
      },
      {
        "spot": "해상낚시체험장",
        "desc": "섬에서만 가능한 체험 거리.",
        "time": "12:30"
      },
      {
        "spot": "다이빙체험장",
        "desc": "섬에서만 가능한 체험 거리.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "느린여행",
        "text": "욕지도는 성수기보다 평일이 좋습니다. 배편 예매를 서두르는 편이 안전해요.",
        "date": "2026-05-02",
        "ratings": {
          "scenery": 5,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": []
  },
  {
    "id": 290,
    "title": "고려산 진달래길",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "인천 강화",
    "duration": "4시간",
    "difficulty": "보통",
    "type": "나들이 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 88,
    "votesUp": 128,
    "votesDown": 4,
    "photoKey": "spring",
    "timeline": [
      {
        "spot": "고려산 진달래길",
        "desc": "봄 진달래 군락과 정상 조망. 개화기 주차 통제 사전 확인.",
        "time": "09:30"
      },
      {
        "spot": "전등사",
        "desc": "창건 381년 전승의 천년 사찰 경내 관람.",
        "time": "11:00"
      },
      {
        "spot": "강화자연휴양림",
        "desc": "숲 산책과 산림휴양 쉼.",
        "time": "12:30"
      },
      {
        "spot": "조양방직 (카페)",
        "desc": "대형 문화카페에서 마무리 휴식.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "걷는사람",
        "text": "고려산 걷고 사찰과 수목원까지 하루에 묶기 좋은 동선입니다. 이동이 짧아요.",
        "date": "2026-05-16",
        "ratings": {
          "scenery": 4,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": [
      "조양방직"
    ]
  },
  {
    "id": 291,
    "title": "강천섬 둘레길",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "경기 여주",
    "duration": "3시간",
    "difficulty": "쉬움",
    "type": "나들이 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 95,
    "votesUp": 49,
    "votesDown": 5,
    "photoKey": "river",
    "timeline": [
      {
        "spot": "강천섬 둘레길",
        "desc": "남한강변 억새와 느티나무 길. 강수 후 보행로 상태 확인.",
        "time": "09:30"
      },
      {
        "spot": "신륵사",
        "desc": "남한강가 천년 사찰 관람.",
        "time": "11:00"
      },
      {
        "spot": "황학산수목원",
        "desc": "시립 수목원 테마정원 산책.",
        "time": "12:30"
      },
      {
        "spot": "천서리막국수 (식사)",
        "desc": "여주권 대표 막국수로 식사.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "주말산책",
        "text": "강천섬는 계절 맞춰 가면 만족도가 큽니다. 마무리 맛집도 검증된 곳이에요.",
        "date": "2026-05-30",
        "ratings": {
          "scenery": 5,
          "path": 3,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": [
      "천서리막국수"
    ]
  },
  {
    "id": 292,
    "title": "금광호수 수변길",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "경기 안성",
    "duration": "3시간",
    "difficulty": "쉬움",
    "type": "나들이 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 92,
    "votesUp": 62,
    "votesDown": 6,
    "photoKey": "lake",
    "timeline": [
      {
        "spot": "금광호수 수변길",
        "desc": "호수 조망 산책과 하늘전망대.",
        "time": "09:30"
      },
      {
        "spot": "칠장사",
        "desc": "창건 636년 전승의 고찰 관람.",
        "time": "11:00"
      },
      {
        "spot": "안성팜랜드",
        "desc": "가축 체험과 계절꽃 나들이. 운영시간 확인.",
        "time": "12:30"
      },
      {
        "spot": "안성국밥 (식사)",
        "desc": "안성권 로컬 한식으로 식사.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "나들이수첩",
        "text": "금광호수 코스 자체는 평탄해서 가족 나들이로 무난합니다. 주차만 미리 확인하세요.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "안성국밥"
    ]
  },
  {
    "id": 293,
    "title": "경포호수 산책로",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "강원 강릉",
    "duration": "3시간",
    "difficulty": "쉬움",
    "type": "나들이 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 89,
    "votesUp": 75,
    "votesDown": 7,
    "photoKey": "lake",
    "timeline": [
      {
        "spot": "경포호수 산책로",
        "desc": "호수·해변 연계 산책과 철새 관찰.",
        "time": "09:30"
      },
      {
        "spot": "등명낙가사",
        "desc": "바다를 앞에 둔 고찰 관람.",
        "time": "11:00"
      },
      {
        "spot": "강릉솔향수목원",
        "desc": "산림형 수목원 숲길 쉼. 휴관일 확인.",
        "time": "12:30"
      },
      {
        "spot": "벌집 (식사)",
        "desc": "강릉 장칼국수로 식사.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "바닷바람",
        "text": "경포호수 다녀온 뒤 근처 사찰까지 돌았는데 반나절이면 넉넉했습니다.",
        "date": "2026-06-27",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "벌집"
    ]
  },
  {
    "id": 294,
    "title": "상당산성 성곽길",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "충북 청주",
    "duration": "4시간",
    "difficulty": "보통",
    "type": "나들이 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 96,
    "votesUp": 88,
    "votesDown": 2,
    "photoKey": "mountain",
    "timeline": [
      {
        "spot": "상당산성 성곽길",
        "desc": "성곽 따라 숲길과 도심 조망. 주차 혼잡 확인.",
        "time": "09:30"
      },
      {
        "spot": "안심사",
        "desc": "창건 775년 전승의 고찰 관람.",
        "time": "11:00"
      },
      {
        "spot": "미동산수목원·청주동물원",
        "desc": "수목·동물 복합 나들이. 휴관일 확인.",
        "time": "12:30"
      },
      {
        "spot": "원조오성손만두 (식사)",
        "desc": "청주권 만두로 식사.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "섬나들이",
        "text": "상당산성는 오전에 걷고 오후에 수목원 쉼이 좋은 조합이었습니다.",
        "date": "2026-04-18",
        "ratings": {
          "scenery": 4,
          "path": 3,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": [
      "원조오성손만두"
    ]
  },
  {
    "id": 295,
    "title": "전월산 산책길",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "세종",
    "duration": "3시간",
    "difficulty": "쉬움",
    "type": "나들이 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 93,
    "votesUp": 101,
    "votesDown": 3,
    "photoKey": "mountain",
    "timeline": [
      {
        "spot": "전월산 산책길",
        "desc": "도심 숲길과 금강권 조망.",
        "time": "09:30"
      },
      {
        "spot": "비암사",
        "desc": "창건 647년 전승의 고찰 관람.",
        "time": "11:00"
      },
      {
        "spot": "베어트리파크",
        "desc": "수목원·동물 관람 나들이. 입장마감 확인.",
        "time": "12:30"
      },
      {
        "spot": "이도커피 세종 (카페)",
        "desc": "정원형 카페에서 휴식.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "느린여행",
        "text": "전월산 걷고 사찰과 수목원까지 하루에 묶기 좋은 동선입니다. 이동이 짧아요.",
        "date": "2026-05-02",
        "ratings": {
          "scenery": 5,
          "path": 4,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": [
      "이도커피 세종"
    ]
  },
  {
    "id": 296,
    "title": "기린봉,치명자산 산책길",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "전북 전주",
    "duration": "4시간",
    "difficulty": "보통",
    "type": "나들이 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 90,
    "votesUp": 114,
    "votesDown": 4,
    "photoKey": "mountain",
    "timeline": [
      {
        "spot": "기린봉,치명자산 산책길",
        "desc": "한옥마을 조망 도심 능선길.",
        "time": "09:30"
      },
      {
        "spot": "남고사",
        "desc": "창건 685년 전승의 고찰 관람.",
        "time": "11:00"
      },
      {
        "spot": "전주수목원·전주동물원",
        "desc": "수목·동물 가족 나들이.",
        "time": "12:30"
      },
      {
        "spot": "베테랑 칼국수 (식사)",
        "desc": "전주 한옥마을 칼국수로 식사.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "걷는사람",
        "text": "기린봉는 계절 맞춰 가면 만족도가 큽니다. 마무리 맛집도 검증된 곳이에요.",
        "date": "2026-05-16",
        "ratings": {
          "scenery": 4,
          "path": 5,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "베테랑 칼국수"
    ]
  },
  {
    "id": 297,
    "title": "순천만습지 갈대길",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "전남 순천",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "나들이 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 97,
    "votesUp": 127,
    "votesDown": 5,
    "photoKey": "lake",
    "timeline": [
      {
        "spot": "순천만습지 갈대길",
        "desc": "갯벌·갈대와 철새 관찰. 일몰 전 회귀 동선 확인.",
        "time": "09:30"
      },
      {
        "spot": "금둔사",
        "desc": "창건 627년 전승의 고찰 관람.",
        "time": "11:00"
      },
      {
        "spot": "순천만국가정원",
        "desc": "정원과 계절꽃 나들이.",
        "time": "12:30"
      },
      {
        "spot": "건봉국밥 (식사)",
        "desc": "순천권 국밥으로 식사.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "주말산책",
        "text": "순천만습지 코스 자체는 평탄해서 가족 나들이로 무난합니다. 주차만 미리 확인하세요.",
        "date": "2026-05-30",
        "ratings": {
          "scenery": 5,
          "path": 3,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "건봉국밥"
    ]
  },
  {
    "id": 298,
    "title": "반곡지 수변길",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "경북 경산",
    "duration": "2시간",
    "difficulty": "쉬움",
    "type": "나들이 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 94,
    "votesUp": 48,
    "votesDown": 6,
    "photoKey": "lake",
    "timeline": [
      {
        "spot": "반곡지 수변길",
        "desc": "왕버들과 저수지 반영 풍경. 농경지 인접 구간 예절 준수.",
        "time": "09:30"
      },
      {
        "spot": "환성사",
        "desc": "창건 835년 전승의 고찰 관람.",
        "time": "11:00"
      },
      {
        "spot": "대구수목원",
        "desc": "경산권 연계 수목 나들이.",
        "time": "12:30"
      },
      {
        "spot": "소호족발 (식사)",
        "desc": "경산권 족발로 식사.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "나들이수첩",
        "text": "반곡지 다녀온 뒤 근처 사찰까지 돌았는데 반나절이면 넉넉했습니다.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": [
      "소호족발"
    ]
  },
  {
    "id": 299,
    "title": "우포늪 생태탐방로",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "경남 창녕",
    "duration": "4시간",
    "difficulty": "쉬움",
    "type": "나들이 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 91,
    "votesUp": 61,
    "votesDown": 7,
    "photoKey": "lake",
    "timeline": [
      {
        "spot": "우포늪 생태탐방로",
        "desc": "국내 최대 내륙습지의 새·수생식물 관찰. 계절 통제구간 확인.",
        "time": "09:30"
      },
      {
        "spot": "관룡사",
        "desc": "창건 583년 전승의 고찰 관람.",
        "time": "11:00"
      },
      {
        "spot": "산토끼노래동산",
        "desc": "동물테마 가족 나들이.",
        "time": "12:30"
      },
      {
        "spot": "창녕 수구레국밥 (식사)",
        "desc": "전통 로컬식으로 식사.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "바닷바람",
        "text": "우포늪는 오전에 걷고 오후에 수목원 쉼이 좋은 조합이었습니다.",
        "date": "2026-06-27",
        "ratings": {
          "scenery": 5,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": [
      "창녕 수구레국밥"
    ]
  },
  {
    "id": 300,
    "title": "아홉산숲 숲길",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "부산 기장",
    "duration": "3시간",
    "difficulty": "쉬움",
    "type": "나들이 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 88,
    "votesUp": 74,
    "votesDown": 2,
    "photoKey": "forest",
    "timeline": [
      {
        "spot": "아홉산숲 숲길",
        "desc": "맹종죽·편백 사유림 탐방. 예약·입장시간 확인.",
        "time": "09:30"
      },
      {
        "spot": "장안사",
        "desc": "창건 673년 전승의 고찰 관람.",
        "time": "11:00"
      },
      {
        "spot": "정관생태공원",
        "desc": "하천·야생화 가족 산책.",
        "time": "12:30"
      },
      {
        "spot": "기장끝집 (식사)",
        "desc": "해산물·한식으로 식사.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "섬나들이",
        "text": "아홉산숲 걷고 사찰과 수목원까지 하루에 묶기 좋은 동선입니다. 이동이 짧아요.",
        "date": "2026-04-18",
        "ratings": {
          "scenery": 4,
          "path": 3,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "기장끝집"
    ]
  },
  {
    "id": 301,
    "title": "태화강국가정원 산책로",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "울산",
    "duration": "3시간",
    "difficulty": "쉬움",
    "type": "나들이 코스",
    "patternClass": "bg-pattern3",
    "satisfaction": 95,
    "votesUp": 87,
    "votesDown": 3,
    "photoKey": "river",
    "timeline": [
      {
        "spot": "태화강국가정원 산책로",
        "desc": "십리대숲과 수변 야간 산책. 행사 일정 확인.",
        "time": "09:30"
      },
      {
        "spot": "석남사",
        "desc": "창건 824년 전승의 고찰 관람.",
        "time": "11:00"
      },
      {
        "spot": "울산대공원",
        "desc": "장미원·어린이동물원 나들이.",
        "time": "12:30"
      },
      {
        "spot": "언양기와집불고기 (식사)",
        "desc": "언양불고기로 식사.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "느린여행",
        "text": "태화강국가정원는 계절 맞춰 가면 만족도가 큽니다. 마무리 맛집도 검증된 곳이에요.",
        "date": "2026-05-02",
        "ratings": {
          "scenery": 5,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "언양기와집불고기"
    ]
  },
  {
    "id": 302,
    "title": "수성못 둘레길",
    "season": "summer",
    "seasonName": "여름 추천",
    "location": "대구",
    "duration": "2시간",
    "difficulty": "쉬움",
    "type": "나들이 코스",
    "patternClass": "bg-pattern4",
    "satisfaction": 92,
    "votesUp": 100,
    "votesDown": 4,
    "photoKey": "lake",
    "timeline": [
      {
        "spot": "수성못 둘레길",
        "desc": "호수 따라 도심 야간 산책. 주말 주차 혼잡 확인.",
        "time": "09:30"
      },
      {
        "spot": "동화사",
        "desc": "창건 493년 전승의 고찰 관람.",
        "time": "11:00"
      },
      {
        "spot": "대구수목원",
        "desc": "계절식물·온실 산책.",
        "time": "12:30"
      },
      {
        "spot": "국일따로국밥 (식사)",
        "desc": "대구식 따로국밥으로 식사.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "걷는사람",
        "text": "수성못 코스 자체는 평탄해서 가족 나들이로 무난합니다. 주차만 미리 확인하세요.",
        "date": "2026-05-16",
        "ratings": {
          "scenery": 4,
          "path": 5,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": [
      "국일따로국밥"
    ]
  },
  {
    "id": 303,
    "title": "광주호 호수생태원 둘레길",
    "season": "autumn",
    "seasonName": "가을 추천",
    "location": "광주 북구",
    "duration": "3시간",
    "difficulty": "쉬움",
    "type": "나들이 코스",
    "patternClass": "bg-pattern1",
    "satisfaction": 89,
    "votesUp": 113,
    "votesDown": 5,
    "photoKey": "lake",
    "timeline": [
      {
        "spot": "광주호 호수생태원 둘레길",
        "desc": "수변·숲과 철새 관찰. 일몰 전 회귀.",
        "time": "09:30"
      },
      {
        "spot": "증심사",
        "desc": "창건 866년 전승의 고찰 관람.",
        "time": "11:00"
      },
      {
        "spot": "우치공원 동물원",
        "desc": "동물 관람 가족 나들이. 휴관 확인.",
        "time": "12:30"
      },
      {
        "spot": "영미오리탕 (식사)",
        "desc": "광주 오리탕으로 식사.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "주말산책",
        "text": "광주호 다녀온 뒤 근처 사찰까지 돌았는데 반나절이면 넉넉했습니다.",
        "date": "2026-05-30",
        "ratings": {
          "scenery": 5,
          "path": 3,
          "parking": 4
        }
      }
    ],
    "photos": [],
    "foods": [
      "영미오리탕"
    ]
  },
  {
    "id": 304,
    "title": "탑정호 수변데크길",
    "season": "spring",
    "seasonName": "봄 추천",
    "location": "충남 논산",
    "duration": "3시간",
    "difficulty": "쉬움",
    "type": "나들이 코스",
    "patternClass": "bg-pattern2",
    "satisfaction": 96,
    "votesUp": 126,
    "votesDown": 6,
    "photoKey": "lake",
    "timeline": [
      {
        "spot": "탑정호 수변데크길",
        "desc": "호수 데크길과 출렁다리 연계. 강풍 시 통제 확인.",
        "time": "09:30"
      },
      {
        "spot": "개태사",
        "desc": "창건 936년의 고려 개국 사찰 관람.",
        "time": "11:00"
      },
      {
        "spot": "양촌자연휴양림",
        "desc": "숲 치유형 나들이.",
        "time": "12:30"
      },
      {
        "spot": "강경젓갈시장 식당가 (식사)",
        "desc": "로컬 젓갈·한식으로 식사.",
        "time": "14:00"
      }
    ],
    "comments": [
      {
        "user": "나들이수첩",
        "text": "탑정호는 오전에 걷고 오후에 수목원 쉼이 좋은 조합이었습니다.",
        "date": "2026-06-13",
        "ratings": {
          "scenery": 4,
          "path": 4,
          "parking": 3
        }
      }
    ],
    "photos": [],
    "foods": [
      "강경젓갈시장 식당가"
    ]
  }
];


// =============================================================================
// 꽁아코스 - 모바일 네이티브 로직 (v2.0 전면 재구축)
// 화면 스택 라우터 · 추천 홈 · 칩 필터 탐색 · 실제 세로 타임라인 · 소통 피드
// =============================================================================

let courses = [];
let currentCourse = null;
let currentRoot = "home";
let currentScreen = "home";

// 탐색 필터 상태
let searchKeyword = "";
let currentRegionFilter = "all";
let currentSeasonFilter = "all";
let currentThemeFilters = []; // 취향 칩 다중선택(AND 교집합) — 빈 배열 = 전체 (P1)

// 후기 입력 상태
let activeRatings = { scenery: 0, path: 0, parking: 0 };
let uploadedPhotoBase64 = null;

// 저장(북마크)
let savedCourses = [];

// 소통: 사용자 자유 업로드 게시물 + 피드 정렬 상태
let communityPosts = [];
let commSort = "latest";   // latest | rating | popular(검색순=많이 찾은 키워드 순)
let commKeyword = "";       // 검색순에서 인기 키워드 칩 필터
let commPhotoBase64 = null;

// 검색어 빈도(많이 검색된 키워드 순 정렬용)
let searchCounts = {};
let searchBumpTimer = null;

// 방문자 맞춤 설정
let visitorSettings = {
  companion: "none",
  transport: "car",
  fontSize: "medium",
  highContrast: false,
  nick: "",      // 간편등록 필명 (미설정 시 기본 NICK)
  phone: "",     // 간편등록 휴대폰(로컬 저장만, 외부 전송 없음)
  avatar: ""     // 프로필 사진(dataURL)
};

const DEFAULT_NICK = "나들이 대장님";
let NICK = DEFAULT_NICK; // 필명(간편등록 시 visitorSettings.nick으로 갱신)

// -----------------------------------------------------------------------------
// 영속화
// -----------------------------------------------------------------------------
function saveToLocalStorage() {
  localStorage.setItem("gongacourse_data", JSON.stringify(courses));
}
function saveBookmarks() {
  localStorage.setItem("gongacourse_saved", JSON.stringify(savedCourses));
}
function loadBookmarks() {
  try {
    const s = localStorage.getItem("gongacourse_saved");
    if (s) savedCourses = JSON.parse(s);
  } catch (e) { savedCourses = []; }
}
function saveCommunityPosts() {
  localStorage.setItem("gongacourse_posts", JSON.stringify(communityPosts));
}
function loadCommunityPosts() {
  try {
    const s = localStorage.getItem("gongacourse_posts");
    if (s) communityPosts = JSON.parse(s);
  } catch (e) { communityPosts = []; }
}
function loadSearchCounts() {
  try {
    const s = localStorage.getItem("gongacourse_searchcounts");
    if (s) searchCounts = JSON.parse(s);
  } catch (e) { searchCounts = {}; }
}
function bumpSearch(kw) {
  kw = (kw || "").trim().toLowerCase();
  if (kw.length < 2) return;
  searchCounts[kw] = (searchCounts[kw] || 0) + 1;
  localStorage.setItem("gongacourse_searchcounts", JSON.stringify(searchCounts));
}
function topKeywords(n) {
  return Object.keys(searchCounts)
    .sort((a, b) => searchCounts[b] - searchCounts[a])
    .slice(0, n);
}

// -----------------------------------------------------------------------------
// 화면 스택 라우터 (뒤로가기 정상화의 핵심)
// -----------------------------------------------------------------------------
const ROOTS = ["home", "explore", "community", "saved", "mypage"];

function showScreen(id, state) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  const el = document.getElementById("screen-" + id);
  if (el) el.classList.add("active");
  currentScreen = id;
  if (ROOTS.includes(id)) currentRoot = id;

  if (id === "home") renderHome();
  else if (id === "explore") renderExplore();
  else if (id === "detail") renderDetail((state && state.id) || (currentCourse && currentCourse.id));
  else if (id === "community") renderCommunity();
  else if (id === "saved") renderSaved();
  else if (id === "mypage") renderMypage();
  else if (id === "collection") renderCollection((state && state.id) || currentCollection);
  else if (id === "collitem") renderCollItem((state && state.id) || currentCollItemRef);

  updateTabbar();
  const isRoot = ROOTS.includes(id);
  const backBtn = document.getElementById("appbar-back");
  if (backBtn) backBtn.style.display = isRoot ? "none" : "flex";
  // 검색창은 홈/탐색에서 로고 옆에 노출
  const showSearch = (id === "home" || id === "explore");
  const searchEl = document.getElementById("appbar-search");
  if (searchEl) searchEl.style.display = showSearch ? "flex" : "none";
  // 프로필(필명+사진)은 상단 우측 앱바에만 노출(본문 중복 스트립 없음, 등급줄 없음).
  const profEl = document.getElementById("appbar-profile");
  if (profEl) {
    const showProf = (id === "mypage" || id === "community" || id === "saved");
    profEl.style.display = showProf ? "flex" : "none";
    if (showProf) renderAppbarProfile();
  }
  window.scrollTo(0, 0);
  if (el) el.scrollTop = 0;
}

// 앱바 글로벌 검색 → 탐색 화면으로 라우팅 + 필터
function onGlobalSearch(v) {
  searchKeyword = v.trim();
  if (searchBumpTimer) clearTimeout(searchBumpTimer);
  if (searchKeyword) searchBumpTimer = setTimeout(() => bumpSearch(searchKeyword), 900);
  if (currentScreen !== "explore") {
    navigate("explore");
    const gs = document.getElementById("global-search");
    if (gs) { gs.value = v; gs.focus(); }
  } else {
    renderExploreList();
  }
}

// 새 화면으로 전진 (히스토리 push → 하드웨어 뒤로가기로 복귀 가능)
function navigate(id, opt) {
  opt = opt || {};
  const state = { screen: id, id: opt.id };
  if (opt.replace) history.replaceState(state, "");
  else history.pushState(state, "");
  showScreen(id, state);
}

// 탭바 클릭
function goTab(id) {
  if (id === currentScreen && ROOTS.includes(id)) return;
  navigate(id);
}

// 상세/하위 화면 진입
function openCourse(courseId) {
  currentCourse = courses.find(c => c.id === courseId) || currentCourse;
  navigate("detail", { id: courseId });
}

// 상단 뒤로가기 버튼
function goBack() {
  history.back();
}

function updateTabbar() {
  document.querySelectorAll(".tabbar .tab").forEach(tab => {
    const t = tab.getAttribute("data-tab");
    tab.classList.toggle("active", t === currentRoot);
  });
}

// -----------------------------------------------------------------------------
// 공통 유틸
// -----------------------------------------------------------------------------
function parseHours(d) {
  const h = parseFloat(d);
  return isNaN(h) ? 2.0 : h;
}
function isEasy(c) {
  return ["쉬움", "매우 쉬움", "매우쉬움"].includes(c.difficulty);
}
function hasFood(c) {
  return (c.foods && c.foods.length > 0) ||
    c.timeline.some(t => ["식사", "맛집", "카페", "커피", "식당", "푸드"].some(w => t.spot.includes(w)));
}
// 사찰 코스 판별 — 단독 '사/절/암'은 식사·행사·계절 등과 충돌하므로 사용 금지.
// 사찰 전용어 또는 '○○사/○○암'(2자+)으로 끝나는 토큰만 인정(흔한 비사찰어 제외).
const TEMPLE_BAD = /식사|행사|회사|신문사|역사|봉사|기사|의사|공사|검사|인사|농사|도사|관리사|박물관|미술관|기념|정문|휴게소|도서관|회관/;
const TEMPLE_WORD = /사찰|암자|사원|대웅전|일주문|범종|고찰|산사/;
function spotIsTemple(s) {
  if (!s) return false;
  if (TEMPLE_WORD.test(s)) return true;
  return s.split(/[,\s·~()]+/).some(tok =>
    tok && !TEMPLE_BAD.test(tok) && /[가-힣]{2,}(사|암)$/.test(tok));
}
function hasTemple(c) {
  if (spotIsTemple(c.title)) return true;
  return c.timeline.some(t => spotIsTemple(t.spot));
}

// 취향 태그 감지 5종 (docs/OPTIMIZE.md P1) — spotIsTemple 패턴 복제.
// 제목+동선(timeline spot) 텍스트가 태깅 원천(데이터 수작업 0). 토큰 단위로
// 전용어(WORD)를 매칭하되 상호명 등 오탐 토큰(BAD)은 배제한다.
function spotHasTag(s, word, bad) {
  if (!s) return false;
  return s.split(/[,\s·~()]+/).some(tok => tok && word.test(tok) && !(bad && bad.test(tok)));
}
function courseHasTag(c, word, bad) {
  if (spotHasTag(c.title, word, bad)) return true;
  return c.timeline.some(t => spotHasTag(t.spot, word, bad));
}
const WATERFALL_WORD = /폭포|瀑/;
const WATERFALL_BAD = /폭포수커피|폭포카페|폭포수식당|폭포식당|폭포가든/;
function hasWaterfall(c) { return courseHasTag(c, WATERFALL_WORD, WATERFALL_BAD); }
const VALLEY_WORD = /계곡|협곡/;
const VALLEY_BAD = /계곡가든|계곡식당|계곡카페/;
function hasValley(c) { return courseHasTag(c, VALLEY_WORD, VALLEY_BAD); }
// 바다: 전용어 + '○○섬(길)'·'○○항'(2자+) 접미 토큰.
// 섬진강(강)·무섬마을(내륙 강변)·공항·운항 등 오탐 배제.
const SEA_WORD = /바다|바닷|해변|해수욕|해안|갯벌|방파제|등대|포구|항구|해상|선착장|여객선|유람선/;
const SEA_ISLE_BAD = /섬진|무섬|섬유|섬세/;
const SEA_PORT_BAD = /공항|운항|입항|출항|밀항|저항|대항|반항/;
function hasSea(c) {
  if (c.photoKey === "sea") return true; // 섬 리소스는 데이터 지형키로 확정(연륙교 진입 섬 누락 방지, 2026-07-03)
  if (courseHasTag(c, SEA_WORD, null)) return true;
  return [c.title].concat(c.timeline.map(t => t.spot)).some(s =>
    s && s.split(/[,\s·~()]+/).some(tok => tok && (
      (!SEA_ISLE_BAD.test(tok) && /[가-힣]{2,}섬(길|투어|여행)?$/.test(tok)) ||
      (!SEA_PORT_BAD.test(tok) && /[가-힣]{2,}항$/.test(tok)))));
}
const LAKE_WORD = /호수|저수지|호반|댐/;
const LAKE_BAD = /호수식당|호수카페|호수가든/;
function hasLake(c) { return courseHasTag(c, LAKE_WORD, LAKE_BAD); }
const FOREST_WORD = /숲|수목원|휴양림|편백|삼림욕/;
const FOREST_BAD = /숲카페|숲속식당|숲가든/;
function hasForest(c) { return courseHasTag(c, FOREST_WORD, FOREST_BAD); }
function isPetFriendly(c) {
  return c.title.includes("숲길") || c.title.includes("공원") || c.location.includes("제주");
}
function stepIcon(node, idx, len) {
  if (idx === 0) return "🚩";
  if (idx === len - 1) return "🏁";
  if (node.spot.includes("식사") || node.spot.includes("맛집") || node.spot.includes("식당")) return "🍴";
  if (node.spot.includes("카페") || node.spot.includes("커피") || node.spot.includes("쉼터")) return "☕";
  if (spotIsTemple(node.spot)) return "⛩️";
  return "👣";
}
// 카카오맵 연동은 2026-07-04 사용자 지시로 완전 제거(불필요 기능). kakaoMapLink 폐기.
function isSaved(id) {
  return savedCourses.includes(id);
}

// 코스 실사 사진 (키워드 매칭 실사 · 지형/테마/계절별, id로 고정·분산). 실패 시 계절 그라데이션 폴백.
// ※ 추천 사유의 핵심(지형·맥락)에 맞는 사진을 고른다. 제목의 지형이 사찰보다 우선 →
//   "삼형제섬"처럼 동선에 법당이 끼어도 섬/바다 사진이 나오게 한다(§9 이미지 컨텍스트 매칭).
const PHOTO_KW = {
  spring: "spring,blossom,trail",
  summer: "forest,green,trail",
  autumn: "autumn,foliage,mountain",
  winter: "snow,mountain,winter",
  temple: "temple,korea,buddhist",
  sea: "sea,coast,island",
  lake: "lake,reservoir,nature",
  valley: "valley,stream,waterfall",
  forest: "forest,woods,trail",
  park: "park,garden,green",
  mountain: "mountain,ridge,hiking",
  river: "river,riverside,walk"
};
// 코스 정체성(제목 우선)에 맞는 사진 키워드. 지형이 사찰보다 우선.
function photoKeyForCourse(c) {
  if (c.photoKey) return c.photoKey; // 데이터에 지형키가 명시된 코스는 그대로(섬=sea 등, §4 이미지 컨텍스트)
  const t = c.title || "";
  if (/섬|해수욕|해변|바닷|바다|해안|포구|항구|등대|해상|갯벌|방파제/.test(t)) return "sea";
  if (/호수|저수지|댐|호반/.test(t)) return "lake";
  if (/계곡|폭포|약수|물놀이|소(沼)/.test(t)) return "valley";
  if (/강변|강가|천변|하천|강/.test(t)) return "river";
  if (/수목원|식물원|자연휴양림|치유의숲|숲길|숲|편백/.test(t)) return "forest";
  if (/공원|호반공원|생태공원|둘레|올레/.test(t)) return "park";
  // 제목 자체가 사찰일 때만 temple (동선상 사찰 경유는 제외 → 지형 정체성 보존)
  if (/사$|[가-힣]사 |[가-힣]사·|사찰|암자|[가-힣]암$|대웅전|법당|절/.test(t)) return "temple";
  if (/산|봉|능선|고개|재|령|岳|대(臺)/.test(t)) return "mountain";
  // 제목으로 안 잡히면 동선(타임라인) 지형 스캔 — 무관 이미지 방지(2026-07-04 전수 지시).
  // 사찰은 제외(§4: temple 키는 제목 자체가 사찰일 때만).
  const spots = (c.timeline || []).map(x => x.spot).join(",");
  if (/해수욕|해변|바닷|바다|해안|포구|항구|등대|해상|갯벌|방파제|선착장|몽돌/.test(spots)) return "sea";
  if (/호수|저수지|호반/.test(spots)) return "lake";
  if (/계곡|폭포/.test(spots)) return "valley";
  if (/수목원|휴양림|숲/.test(spots)) return "forest";
  if (/강변|하천/.test(spots)) return "river";
  if (/공원|정원/.test(spots)) return "park";
  if (/산성|봉|능선|고개/.test(spots)) return "mountain";
  return c.season; // 그래도 없으면 계절 기본
}
function coursePhoto(course, size) {
  // 관리자가 교체한 사진이 있으면 최우선(이 기기 localStorage에 저장)
  if (photoOverrides[course.id]) return photoOverrides[course.id];
  size = size || 220;
  const kw = PHOTO_KW[photoKeyForCourse(course)] || PHOTO_KW.summer;
  return `https://loremflickr.com/${size}/${size}/${kw}/all?lock=${course.id}`;
}

// 사진 터치 확대(라이트박스) — 갤러리/인증샷 사진을 탭하면 전체화면 확대, 다시 탭하면 닫힘.
function openPhotoZoom(el) {
  let src = "";
  if (el.tagName === "IMG") src = el.src;
  else {
    const m = (el.style.backgroundImage || "").match(/url\(["']?(.*?)["']?\)/);
    src = m ? m[1] : "";
  }
  if (!src) return;
  let ov = document.getElementById("photo-zoom");
  if (!ov) {
    ov = document.createElement("div");
    ov.id = "photo-zoom";
    ov.className = "photo-zoom";
    ov.addEventListener("click", () => ov.classList.remove("on"));
    document.body.appendChild(ov);
  }
  ov.innerHTML = `<span class="pz-close" aria-label="닫기"><i class="fa-solid fa-xmark"></i></span><img src="${src}" alt="확대 사진">`;
  ov.classList.add("on");
}

// -----------------------------------------------------------------------------
// 코스 카드 (탐색/저장/홈 공용)
// -----------------------------------------------------------------------------
// 코스 카드 취향 태그 뱃지 — 감지 순서대로 최대 2개 (P1). 기존 카드 레이아웃 유지.
const PREF_TAGS = [
  { k: "waterfall", n: "폭포", f: hasWaterfall },
  { k: "valley", n: "계곡", f: hasValley },
  { k: "sea", n: "바다", f: hasSea },
  { k: "lake", n: "호수", f: hasLake },
  { k: "forest", n: "숲", f: hasForest },
  { k: "temple", n: "사찰", f: hasTemple }
];
function coursePrefTags(c) {
  const out = [];
  for (const t of PREF_TAGS) {
    if (t.f(c)) { out.push(t); if (out.length === 2) break; }
  }
  return out;
}

function courseCardHtml(course) {
  const ratioClass = course.satisfaction >= 95 ? "high" : "";
  // 취향 뱃지는 상단 위치줄(우측)에 인라인 — 별도 줄 금지(카드 세로 규격 통일, 2026-07-04 캡쳐 지시)
  const prefs = coursePrefTags(course);
  const prefTag = prefs.length
    ? `<span class="cc-prefs">${prefs.map(p => `<span class="cc-pref pref-${p.k}">${p.n}</span>`).join("")}</span>`
    : "";
  let foodTag = "";
  if (course.foods && course.foods.length > 0) {
    foodTag = `<span class="cc-food"><i class="fa-solid fa-utensils"></i> ${course.foods.slice(0, 2).join(" · ")}</span>`;
  }
  let badge = "";
  if (visitorSettings.companion === "parent" && isEasy(course))
    badge = `<span class="cc-badge badge-parent">👴 효도추천</span>`;
  else if (visitorSettings.companion === "pet" && isPetFriendly(course))
    badge = `<span class="cc-badge badge-pet">🐕 반려견</span>`;
  else if (visitorSettings.companion === "child" && parseHours(course.duration) <= 2.0)
    badge = `<span class="cc-badge badge-child">👶 유아동반</span>`;

  return `
    <div class="course-card accent-${course.season}" onclick="openCourse(${course.id})">
      <div class="cc-visual sv-${course.season}">
        <img class="cc-photo" src="${coursePhoto(course, 200)}" alt="" loading="lazy" onerror="this.classList.add('img-failed')">
        <span class="cc-vseason">${course.seasonName}</span>
      </div>
      <div class="cc-main">
        <div class="cc-top">
          <span class="cc-loc"><i class="fa-solid fa-location-dot"></i> ${course.location}</span>
          ${prefTag}
          <button class="cc-save ${isSaved(course.id) ? "on" : ""}" onclick="event.stopPropagation();toggleSave(${course.id})" aria-label="저장">
            <i class="fa-${isSaved(course.id) ? "solid" : "regular"} fa-bookmark"></i>
          </button>
        </div>
        <h3 class="cc-title">${course.title} ${badge}</h3>
        ${foodTag}
        <div class="cc-foot">
          <span class="cc-stat"><i class="fa-solid fa-mountain"></i> ${course.difficulty}</span>
          <span class="cc-stat"><i class="fa-regular fa-clock"></i> ${course.duration}</span>
          <span class="cc-ratio ${ratioClass}"><i class="fa-solid fa-thumbs-up"></i> ${course.satisfaction}%</span>
        </div>
      </div>
    </div>`;
}

function toggleSave(id) {
  const i = savedCourses.indexOf(id);
  if (i >= 0) savedCourses.splice(i, 1);
  else savedCourses.unshift(id);
  saveBookmarks();
  // 현재 화면 갱신
  if (currentScreen === "detail") renderDetail(id);
  else if (currentScreen === "explore") renderExplore();
  else if (currentScreen === "saved") renderSaved();
  else if (currentScreen === "home") renderHome();
}

// -----------------------------------------------------------------------------
// 1) 홈 — 추천 메뉴판
// -----------------------------------------------------------------------------
// 현재 계절 (월 기준)
const SEASON_KO = { spring: "봄", summer: "여름", autumn: "가을", winter: "겨울" };
const SEASON_EMOJI = { spring: "🌸", summer: "🌿", autumn: "🍂", winter: "❄️" };
function getCurrentSeason() {
  const m = new Date().getMonth();
  if (m >= 2 && m <= 4) return "spring";
  if (m >= 5 && m <= 7) return "summer";
  if (m >= 8 && m <= 10) return "autumn";
  return "winter";
}

// 실시간 날씨 연동 (Open-Meteo · 무료/키 불필요, 위치 거부 시 계절만으로 폴백)
let weatherInfo = null;
let weatherFetching = false;

function describeWeather(code, temp) {
  let label = "맑음", emoji = "☀️", kind = "normal";
  if (code === 0) { label = "맑음"; emoji = "☀️"; }
  else if (code <= 3) { label = "구름"; emoji = "⛅"; }
  else if (code === 45 || code === 48) { label = "안개"; emoji = "🌫️"; }
  else if (code >= 51 && code <= 67) { label = "비"; emoji = "🌧️"; kind = "wet"; }
  else if (code >= 71 && code <= 77) { label = "눈"; emoji = "🌨️"; kind = "wet"; }
  else if (code >= 80 && code <= 82) { label = "소나기"; emoji = "🌦️"; kind = "wet"; }
  else if (code >= 85 && code <= 86) { label = "눈"; emoji = "❄️"; kind = "wet"; }
  else if (code >= 95) { label = "천둥번개"; emoji = "⛈️"; kind = "wet"; }
  if (kind === "normal" && temp >= 30) kind = "hot";
  else if (kind === "normal" && temp <= 0) kind = "cold";

  let advice = "나들이하기 좋은 날씨예요";
  if (kind === "wet") advice = "비·눈 예보 — 우산을 챙기고 짧은 코스를 추천해요";
  else if (kind === "hot") advice = "무더위 — 숲·계곡 그늘 코스를 추천해요";
  else if (kind === "cold") advice = "강추위 — 짧고 양지바른 코스를 추천해요";
  return { label, emoji, kind, advice };
}

function loadWeather(cb) {
  try {
    const c = JSON.parse(localStorage.getItem("gongacourse_weather"));
    if (c && (Date.now() - c.ts) < 3600000) { weatherInfo = c.data; if (cb) cb(); return; }
  } catch (e) {}
  if (!navigator.geolocation || weatherFetching) { if (cb) cb(); return; }
  weatherFetching = true;
  navigator.geolocation.getCurrentPosition(pos => {
    const { latitude, longitude } = pos.coords;
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code`)
      .then(r => r.json())
      .then(d => {
        const temp = Math.round(d.current.temperature_2m);
        const info = Object.assign({ temp }, describeWeather(d.current.weather_code, temp));
        weatherInfo = info;
        localStorage.setItem("gongacourse_weather", JSON.stringify({ ts: Date.now(), data: info }));
        weatherFetching = false;
        if (cb) cb();
      })
      .catch(() => { weatherFetching = false; if (cb) cb(); });
  }, () => { weatherFetching = false; if (cb) cb(); }, { timeout: 8000, maximumAge: 3600000 });
}

function pickTodayCourse() {
  const season = getCurrentSeason();
  let pool = courses.filter(c => c.season === season);
  if (!pool.length) pool = courses.slice();

  // 날씨 보정 (계절 풀 내에서)
  if (weatherInfo) {
    let biased = pool;
    if (weatherInfo.kind === "wet") biased = pool.filter(c => parseHours(c.duration) <= 2.5 && isEasy(c));
    else if (weatherInfo.kind === "hot") biased = pool.filter(c => /숲|계곡|폭포|호수|강|해변|바다|물/.test(c.title + c.timeline.map(t => t.spot).join("")));
    else if (weatherInfo.kind === "cold") biased = pool.filter(c => parseHours(c.duration) <= 2);
    if (biased.length) pool = biased;
  }

  const top = pool.filter(c => c.satisfaction >= 95);
  const base = top.length ? top : pool;
  const day = new Date().getDate();
  return base[day % base.length];
}

// 홈 계절/날씨 컨텍스트 문자열
function seasonWeatherContext() {
  const s = getCurrentSeason();
  let ctx = `${SEASON_EMOJI[s]} ${SEASON_KO[s]}`;
  if (weatherInfo) ctx += ` · ${weatherInfo.temp}° ${weatherInfo.emoji}`;
  return ctx;
}

const SITUATIONS = [
  { key: "easy", icon: "fa-person-walking", label: "가볍게 산책", cls: "sit-green" },
  { key: "food", icon: "fa-utensils", label: "맛집 코스", cls: "sit-amber" },
  { key: "temple", icon: "fa-torii-gate", label: "사찰 탐방", cls: "sit-purple" },
  { key: "long", icon: "fa-route", label: "먼길 트레킹", cls: "sit-blue" }, // "장거리 트레킹"→2줄 꺾임(옥에 티) 교정, 2026-07-04
  { key: "today", icon: "fa-star", label: "오늘 인기", cls: "sit-pink" },
  { key: "new", icon: "fa-seedling", label: "새로 등록", cls: "sit-teal" },
  // 모음집 바로가기 5종 (2026-07-04 지시 — 노란박스에 추가, 탭=해당 모음집 화면)
  { key: "coll:m100", icon: "fa-mountain-sun", label: "명산 100", cls: "sit-green" },
  { key: "coll:isl", icon: "fa-umbrella-beach", label: "가고싶은 섬", cls: "sit-blue" },
  { key: "coll:wtrail", icon: "fa-person-hiking", label: "세계 트레일", cls: "sit-teal" },
  { key: "coll:golf", icon: "fa-golf-ball-tee", label: "골프장 순위", cls: "sit-amber" },
  { key: "coll:wspot", icon: "fa-earth-americas", label: "세계 탐방지", cls: "sit-purple" }
];

function gotoSituation(key) {
  if (key.indexOf("coll:") === 0) { openCollection(key.slice(5)); return; }
  searchKeyword = "";
  currentRegionFilter = "all";
  currentSeasonFilter = "all";
  currentThemeFilters = [];
  if (key === "easy" || key === "food" || key === "temple" || key === "long") currentThemeFilters = [key];
  navigate("explore");
}

// 섹션 헤더: 제목 + 수평 라인(밴딩) + (선택)우측 요소 — 박스 단조로움 탈출용
function sectionLabel(title, right) {
  return `<div class="sec"><span class="sec-t">${title}</span><span class="sec-line"></span>${right || ""}</div>`;
}

function companionResult() {
  const c = visitorSettings.companion;
  if (c === "none") return null;
  let count = 0, label = "";
  if (c === "parent") { count = courses.filter(isEasy).length; label = "효도코스(완만)"; }
  else if (c === "pet") { count = courses.filter(isPetFriendly).length; label = "반려견 동반 가능"; }
  else if (c === "child") { count = courses.filter(c2 => parseHours(c2.duration) <= 2.0).length; label = "유아 동반(2시간 이내)"; }
  const map = { parent: "부모님 동반", pet: "반려동물 동반", child: "어린아이 동반" };
  return { text: `${map[c]} 설정 적용`, sub: `${label} <b>${count}개</b> 우선 정렬 중`, key: c };
}

function renderHome() {
  const root = document.getElementById("home-body");
  if (!root) return;
  const t = pickTodayCourse();
  const cr = companionResult();

  const sitHtml = SITUATIONS.map(s =>
    `<button class="sit-chip ${s.cls}" onclick="gotoSituation('${s.key}')">
      <i class="fa-solid ${s.icon}"></i><span>${s.label}</span>
    </button>`).join("");

  const comp = visitorSettings.companion;
  const compChip = (val, label) => `<button class="comp-chip ${comp === val ? "on" : ""}" onclick="setCompanionHome('${val}')">${label}</button>`;
  const bannerHtml = `
    <div class="match-card">
      <div class="mc-head"><i class="fa-solid fa-user-group"></i> 누구와 함께 가나요?</div>
      <div class="mc-chips">
        ${compChip("none", "혼자")}
        ${compChip("pet", "🐕 반려동물")}
        ${compChip("parent", "👴 부모님")}
        ${compChip("child", "👶 아이")}
      </div>
      ${cr ? `<div class="mc-result"><i class="fa-solid fa-circle-check"></i> ${cr.sub}</div>` : ""}
    </div>`;

  const foodChip = t.foods && t.foods.length ? ` · <i class="fa-solid fa-utensils"></i> 맛집 ${t.foods.length}` : "";
  const adviceHtml = (weatherInfo && weatherInfo.kind !== "normal")
    ? `<div class="weather-advice"><i class="fa-solid fa-circle-info"></i> ${weatherInfo.advice}</div>` : "";

  root.innerHTML = `
    ${sectionLabel("☀️ 오늘의 추천", `<span class="hl-ctx">${seasonWeatherContext()}</span>`)}
    <div class="today-card accent-${t.season}" onclick="openCourse(${t.id})">
      <div class="tc-row">
        <div class="tc-visual sv-${t.season}">
          <img class="tc-photo" src="${coursePhoto(t, 320)}" alt="" loading="lazy" onerror="this.classList.add('img-failed')">
          <span class="tc-ribbon">오늘의 추천</span>
        </div>
        <div class="tc-content">
          <i class="fa-solid fa-arrow-right tc-arrow"></i>
          <div class="tc-tags">
            <span class="tc-season">${t.seasonName}</span>
            <span class="tc-diff">${t.difficulty}</span>
          </div>
          <h2 class="tc-title">${t.title}</h2>
          <div class="tc-meta">
            <i class="fa-solid fa-location-dot"></i> ${t.location}<br>
            <i class="fa-regular fa-clock"></i> ${t.duration} ·
            <i class="fa-solid fa-thumbs-up"></i> ${t.satisfaction}%${foodChip}
          </div>
        </div>
      </div>
      ${adviceHtml}
    </div>

    ${bannerHtml}

    ${sectionLabel("🧭 지금 뭘 찾으세요?")}
    <div class="sit-scroll">${sitHtml}</div>

    ${sectionLabel("💬 방금 올라온 후기", `<a onclick="goTab('community')">더보기</a>`)}
    <div id="home-reviews"></div>
  `;

  renderRecentReviews("home-reviews", 3);

  // 날씨 미로드 시 1회 조회 후 홈 갱신 (위치 거부/오프라인이면 계절만으로 유지)
  if (!weatherInfo && !weatherFetching) {
    loadWeather(() => { if (currentScreen === "home") renderHome(); });
  }
}

// -----------------------------------------------------------------------------
// 2) 탐색 — 칩 필터 + 결과 리스트
// -----------------------------------------------------------------------------
// 지역 칩 → 실제 location 표기 매핑. 데이터는 충북/충남·경남/부산 등 약칭이라
// "충청"으로 includes 하면 0건이 된다(엑셀 오류 아님). 광역권으로 묶어 전 코스 도달 보장.
const REGION_MATCH = {
  "서울": ["서울"],
  "인천": ["인천"],
  "경기": ["경기"],
  "강원": ["강원"],
  "충청": ["충북", "충남", "대전", "세종", "충청"],
  "경북": ["경북", "대구"],
  "경남": ["경남", "부산", "울산"],
  "전라": ["전북", "전남", "광주", "전라"],
  "제주": ["제주"]
};
const REGIONS = Object.keys(REGION_MATCH);
function matchesRegion(c, region) {
  if (region === "all") return true;
  const keys = REGION_MATCH[region] || [region];
  return keys.some(k => c.location.includes(k));
}
const SEASONS = [
  { k: "spring", n: "봄" }, { k: "summer", n: "여름" },
  { k: "autumn", n: "가을" }, { k: "winter", n: "겨울" }
];
// 취향 칩 8종 (P1) — 기존 4종 + 폭포·계곡·바다·호수/숲. 다중선택 시 AND 교집합.
const THEMES = [
  { k: "easy", n: "쉬운산책" }, { k: "food", n: "맛집" },
  { k: "temple", n: "사찰" }, { k: "waterfall", n: "폭포" },
  { k: "valley", n: "계곡" }, { k: "sea", n: "바다" },
  { k: "lakeforest", n: "호수/숲" }, { k: "long", n: "장거리" }
];
function matchesTheme(c, k) {
  if (k === "easy") return isEasy(c) || parseHours(c.duration) <= 2;
  if (k === "food") return hasFood(c);
  if (k === "temple") return hasTemple(c);
  if (k === "waterfall") return hasWaterfall(c);
  if (k === "valley") return hasValley(c);
  if (k === "sea") return hasSea(c);
  if (k === "lakeforest") return hasLake(c) || hasForest(c);
  if (k === "long") return parseHours(c.duration) >= 3 || !isEasy(c);
  return true;
}

function chip(active, label, onclick) {
  return `<button class="chip ${active ? "on" : ""}" onclick="${onclick}">${label}</button>`;
}

// 어떤 필터 서랍(수납장)이 열려 있는지: null | 'region' | 'theme' | 'season'
let openDrawer = null;

function setRegion(r) { currentRegionFilter = r; openDrawer = null; renderExploreFilters(); renderExploreList(); }
function setSeason(s) { currentSeasonFilter = s; openDrawer = null; renderExploreFilters(); renderExploreList(); }
// 취향 칩은 다중선택(AND)이라 토글식 — 서랍을 닫지 않고 계속 고를 수 있게 유지
function setTheme(t) {
  if (t === "all") currentThemeFilters = [];
  else {
    const i = currentThemeFilters.indexOf(t);
    if (i >= 0) currentThemeFilters.splice(i, 1);
    else currentThemeFilters.push(t);
  }
  renderExploreFilters(); renderExploreList();
}
function toggleDrawer(g) { openDrawer = (openDrawer === g ? null : g); renderExploreFilters(); }
function clearFilters() {
  searchKeyword = ""; currentRegionFilter = "all"; currentSeasonFilter = "all"; currentThemeFilters = [];
  openDrawer = null;
  const gs = document.getElementById("global-search");
  if (gs) gs.value = "";
  renderExploreFilters(); renderExploreList();
}

// 검색어 동의어 → 테마 의미 매핑. "맛집"을 치면 literal 'manjip' 텍스트만 매칭돼 8개뿐이라
// 사용자가 기대하는 "맛집 있는 코스 전체"가 안 나옴 → 음식 동의어는 hasFood로 확장 매칭.
const FOOD_SYN = ["맛집", "맛집연계", "먹거리", "음식", "식당", "맛집투어", "맛집코스"];
// 취향 동의어 확장 (P1) — FOOD_SYN 패턴 재사용. "폭포"만 쳐도 감지 함수로 전체 매칭.
const WATERFALL_SYN = ["폭포", "폭포수", "폭포코스", "폭포투어"];
const VALLEY_SYN = ["계곡", "협곡", "물놀이", "계곡코스"];
const SEA_SYN = ["바다", "해변", "해수욕장", "해안", "섬", "섬여행", "섬투어", "바닷가"];
const LAKE_SYN = ["호수", "저수지", "호반", "댐"];
const FOREST_SYN = ["숲", "숲길", "수목원", "휴양림", "편백", "삼림욕", "치유의숲"];
const TEMPLE_SYN = ["사찰", "절", "암자", "사찰탐방", "산사"];
function getFilteredCourses() {
  const norm = searchKeyword.toLowerCase().replace(/\s+/g, "");
  return courses.filter(c => {
    let s = true;
    if (norm) {
      s = c.title.toLowerCase().replace(/\s+/g, "").includes(norm)
        || c.location.toLowerCase().replace(/\s+/g, "").includes(norm)
        || (c.type || "").toLowerCase().replace(/\s+/g, "").includes(norm)
        || (c.foods || []).some(f => f.toLowerCase().replace(/\s+/g, "").includes(norm))
        || c.timeline.some(t => t.spot.toLowerCase().replace(/\s+/g, "").includes(norm))
        || (FOOD_SYN.includes(norm) && hasFood(c)) // "맛집/먹거리" 검색 → 맛집 보유 코스 전체
        || (WATERFALL_SYN.includes(norm) && hasWaterfall(c))
        || (VALLEY_SYN.includes(norm) && hasValley(c))
        || (SEA_SYN.includes(norm) && hasSea(c))
        || (LAKE_SYN.includes(norm) && hasLake(c))
        || (FOREST_SYN.includes(norm) && hasForest(c))
        || (TEMPLE_SYN.includes(norm) && hasTemple(c));
    }
    let r = matchesRegion(c, currentRegionFilter);
    let se = currentSeasonFilter === "all" || c.season === currentSeasonFilter;
    let th = currentThemeFilters.every(k => matchesTheme(c, k)); // 다중선택 AND 교집합
    return s && r && se && th;
  });
}

function applyPersonalSort(list) {
  if (visitorSettings.companion === "none") return list;
  return list.slice().sort((a, b) => {
    const score = c => {
      if (visitorSettings.companion === "parent") return isEasy(c) ? 10 : 0;
      if (visitorSettings.companion === "pet") return isPetFriendly(c) ? 5 : 0;
      if (visitorSettings.companion === "child") return parseHours(c.duration) <= 2 ? 5 : 0;
      return 0;
    };
    return score(b) - score(a);
  });
}

function regionText() { return currentRegionFilter === "all" ? "전체" : currentRegionFilter; }
function themeText() {
  if (!currentThemeFilters.length) return "전체";
  const names = currentThemeFilters.map(k => (THEMES.find(x => x.k === k) || {}).n).filter(Boolean);
  if (!names.length) return "전체";
  return names.length > 1 ? `${names[0]} 외 ${names.length - 1}` : names[0];
}
function seasonText() { const s = SEASONS.find(x => x.k === currentSeasonFilter); return s ? s.n : "전체"; }

function drawerTab(group, label, valueText) {
  const open = openDrawer === group;
  const has = valueText !== "전체";
  return `<button class="ftab ${open ? "open" : ""} ${has ? "has" : ""}" onclick="toggleDrawer('${group}')">
    <span class="ftab-l">${label}</span>
    <span class="ftab-v">${valueText}</span>
    <i class="fa-solid fa-chevron-${open ? "up" : "down"} ftab-ic"></i>
  </button>`;
}

function renderExplore() {
  const root = document.getElementById("explore-body");
  if (!root) return;
  root.innerHTML = `
    <div class="filter-sticky" id="filter-sticky"></div>
    <div class="coll-strip">${Object.keys(COLLECTIONS).map(k =>
      `<button class="coll-chip" onclick="openCollection('${k}')"><i class="fa-solid ${COLLECTIONS[k].ic}"></i> ${COLLECTIONS[k].t}</button>`).join("")}</div>
    <div class="result-meta"><span id="explore-count"></span></div>
    <div id="explore-list" class="course-list"></div>
  `;
  renderExploreFilters();
  renderExploreList();
}

// 지역/테마/계절 3개 탭 + 탭 클릭 시 수납장(서랍)처럼 세부 항목 펼침
function renderExploreFilters() {
  const host = document.getElementById("filter-sticky");
  if (!host) return;
  const anyFilter = currentRegionFilter !== "all" || currentSeasonFilter !== "all" || currentThemeFilters.length > 0 || searchKeyword;

  let drawer = "";
  if (openDrawer === "region") {
    drawer = `<div class="filter-drawer">
      ${chip(currentRegionFilter === "all", "전체 지역", "setRegion('all')")}
      ${REGIONS.map(r => chip(currentRegionFilter === r, r, `setRegion('${r}')`)).join("")}
    </div>`;
  } else if (openDrawer === "theme") {
    drawer = `<div class="filter-drawer">
      ${chip(currentThemeFilters.length === 0, "전체 테마", "setTheme('all')")}
      ${THEMES.map(t => chip(currentThemeFilters.includes(t.k), t.n, `setTheme('${t.k}')`)).join("")}
      <span class="drawer-hint">여러 개 선택하면 모두 만족하는 코스만 보여요</span>
    </div>`;
  } else if (openDrawer === "season") {
    drawer = `<div class="filter-drawer">
      ${chip(currentSeasonFilter === "all", "사계절", "setSeason('all')")}
      ${SEASONS.map(s => chip(currentSeasonFilter === s.k, s.n, `setSeason('${s.k}')`)).join("")}
    </div>`;
  }

  host.innerHTML = `
    <div class="ftab-row">
      ${drawerTab("region", "지역", regionText())}
      ${drawerTab("theme", "테마", themeText())}
      ${drawerTab("season", "계절", seasonText())}
      ${anyFilter ? `<button class="ftab-clear" onclick="clearFilters()" aria-label="초기화"><i class="fa-solid fa-rotate-left"></i></button>` : ""}
    </div>
    ${drawer}
  `;
}

function renderExploreList() {
  const list = document.getElementById("explore-list");
  const countEl = document.getElementById("explore-count");
  if (!list) return;
  const filtered = applyPersonalSort(getFilteredCourses());
  if (countEl) countEl.textContent = `총 ${filtered.length}개 코스`;
  if (filtered.length === 0) {
    // 조건 완화 제안 (P1) — 취향 태그 중 해제 시 결과가 가장 많아지는 1개를 제안
    let relax = "";
    if (currentThemeFilters.length > 0) {
      let best = null;
      currentThemeFilters.forEach(k => {
        const saved = currentThemeFilters;
        currentThemeFilters = saved.filter(x => x !== k);
        const n = getFilteredCourses().length;
        currentThemeFilters = saved;
        if (n > 0 && (!best || n > best.n)) best = { k, n };
      });
      if (best) {
        const name = (THEMES.find(x => x.k === best.k) || { n: best.k }).n;
        relax = `<button class="relax-btn" onclick="setTheme('${best.k}')">'${name}' 태그를 풀면 코스 ${best.n}개</button>`;
      }
    }
    list.innerHTML = `<div class="empty"><i class="fa-solid fa-filter-circle-xmark"></i><p>조건에 맞는 코스가 없어요</p><span>필터를 바꾸거나 초기화해 보세요</span>${relax}</div>`;
    return;
  }
  list.innerHTML = filtered.map(courseCardHtml).join("");
}

// -----------------------------------------------------------------------------
// 3) 상세 — 실제 세로 타임라인
// -----------------------------------------------------------------------------
// 사전 준비물(가져갈 것) — 계절·난이도·소요시간·지형 맥락으로 자동 도출
function coursePrep(c) {
  const items = ["편한 운동화", "식수"];
  const hours = parseHours(c.duration);
  const key = photoKeyForCourse(c);
  if (c.season === "summer") items.push("모자", "자외선차단제", "벌레기피제");
  else if (c.season === "winter") items.push("방한복", "장갑", "핫팩");
  else if (c.season === "spring") items.push("꽃가루 마스크", "얇은 겉옷");
  else items.push("바람막이");
  if (hours >= 3) items.push("간식·도시락", "여벌 양말");
  if (!isEasy(c)) items.push("등산스틱", "무릎보호대");
  if (key === "sea") items.push("승선권·시간표");
  if (key === "valley" || key === "river") items.push("미끄럼 방지 신발");
  if (key === "temple") items.push("단정한 복장");
  return [...new Set(items)];
}
// 검토 변수(출발 전 확인) — 날씨·교통·안전 변수
function courseChecks(c) {
  const v = ["당일 날씨·강수", "주차장 혼잡도", "화장실 위치"];
  const hours = parseHours(c.duration);
  const key = photoKeyForCourse(c);
  if (key === "sea") v.push("여객선 운항·물때");
  if (hasTemple(c) || key === "temple") v.push("사찰 입장·예불 시간");
  if (c.season === "summer") v.push("폭염·온열질환");
  else if (c.season === "winter") v.push("결빙·일몰 시간");
  if (hours >= 3) v.push("체력·중간 탈출로");
  if (!isEasy(c)) v.push("등산로 통제 여부");
  return [...new Set(v)];
}
function chipList(arr, cls) {
  return arr.map(x => `<span class="pc-chip ${cls}">${x}</span>`).join("");
}

function renderDetail(courseId) {
  const c = courses.find(x => x.id === courseId);
  if (!c) return;
  currentCourse = c;
  const root = document.getElementById("detail-body");
  if (!root) return;

  const total = c.votesUp + c.votesDown;
  const ratio = total > 0 ? Math.round((c.votesUp / total) * 100) : 100;
  c.satisfaction = ratio;

  const timeline = c.timeline.map((n, i) => `
    <div class="tl-node">
      <div class="tl-rail"><span class="tl-dot">${stepIcon(n, i, c.timeline.length)}</span></div>
      <div class="tl-card">
        <div class="tl-head"><span class="tl-time">${n.time || ""}</span><span class="tl-spot">${n.spot}</span></div>
        <p class="tl-desc">${n.desc}</p>
      </div>
    </div>`).join("");

  const foods = (c.foods && c.foods.length)
    ? c.foods.map((f, i) => {
      const tag = ["방문자 극찬", "추천 다수", "찾아갈 만함"][i % 3];
      return `<div class="food-card">
        <div class="food-ic"><i class="fa-solid fa-store"></i></div>
        <div class="food-info"><h4>${f}</h4><span>${tag}</span></div>
      </div>`;
    }).join("")
    : `<p class="muted-note">주변 등록된 식당 정보가 없어요. 도시락을 준비하세요.</p>`;

  // 회원이 올린 코스 사진. 라벨로 정체를 명확히 하고, 깨진 이미지는 자동 제거해
  // 빈 회색 사각형이 남지 않게 한다(사진 0장이면 영역 자체를 숨김).
  const gallery = (c.photos && c.photos.length)
    ? `<div class="member-gallery" id="member-gallery">
         <div class="mg-head"><i class="fa-solid fa-camera-retro"></i> 회원 사진</div>
         <div class="photo-gallery">${c.photos.map(p =>
           `<img class="gphoto" src="${p}" alt="회원이 올린 코스 사진" loading="lazy" onclick="openPhotoZoom(this)" onerror="this.remove(); var g=document.getElementById('member-gallery'); if(g&&!g.querySelector('.gphoto'))g.remove();">`).join("")}</div>
       </div>`
    : "";

  const voted = localStorage.getItem(`voted_course_${c.id}`);

  root.innerHTML = `
    <div class="detail-hero accent-${c.season}">
      <div class="dh-tags">
        <span class="dh-season">${c.seasonName}</span>
        <button class="dh-save ${isSaved(c.id) ? "on" : ""}" onclick="toggleSave(${c.id})">
          <i class="fa-${isSaved(c.id) ? "solid" : "regular"} fa-bookmark"></i> ${isSaved(c.id) ? "저장됨" : "저장"}
        </button>
      </div>
      <h1 class="dh-title">${c.title}</h1>
      <div class="dh-loc"><i class="fa-solid fa-location-dot"></i> ${c.location}</div>
    </div>

    <div class="d-photo-strip">
      <img class="dp-img" src="${coursePhoto(c, 480)}" alt="코스 대표 사진" loading="lazy"
        onclick="openPhotoZoom(this)" onerror="this.closest('.d-photo-strip').classList.add('img-failed')">
      ${visitorSettings.admin ? `
      <div class="dp-admin">
        <button class="dp-btn" onclick="triggerCoursePhoto(${c.id})"><i class="fa-solid fa-camera"></i> 사진 교체</button>
        ${photoOverrides[c.id] ? `<button class="dp-btn ghost" onclick="resetCoursePhoto(${c.id})"><i class="fa-solid fa-rotate-left"></i> 기본 복원</button>` : ""}
      </div>` : ""}
    </div>

    <div class="stat-row">
      <div class="stat"><span class="s-l">난이도</span><span class="s-v">${c.difficulty}</span></div>
      <div class="stat"><span class="s-l">소요시간</span><span class="s-v">${c.duration}</span></div>
      <div class="stat"><span class="s-l">만족도</span><span class="s-v hl">${ratio}%</span></div>
    </div>

    <div class="d-card prep-card">
      <h4 class="d-card-title"><i class="fa-solid fa-clipboard-check"></i> 출발 전 체크</h4>
      <div class="pc-block">
        <span class="pc-head"><i class="fa-solid fa-backpack"></i> 사전 준비물</span>
        <div class="pc-wrap">${chipList(coursePrep(c), "prep")}</div>
      </div>
      <div class="pc-block">
        <span class="pc-head"><i class="fa-solid fa-triangle-exclamation"></i> 검토 변수</span>
        <div class="pc-wrap">${chipList(courseChecks(c), "check")}</div>
      </div>
    </div>

    <div class="d-card">
      <h4 class="d-card-title"><i class="fa-solid fa-route"></i> 추천 나들이 동선</h4>
      <div class="timeline">${timeline}</div>
    </div>

    <div class="d-card">
      <h4 class="d-card-title"><i class="fa-solid fa-utensils"></i> 코스 주변 맛집 · 카페</h4>
      <div class="food-list">${foods}</div>
    </div>

    <div class="d-card vote-card">
      <h4 class="d-card-title">이 코스 어땠나요?</h4>
      <div class="vote-row">
        <button class="vote up ${voted === "up" ? "on" : ""}" onclick="castVote('up')">
          <i class="fa-regular fa-thumbs-up"></i> 추천해요 <strong id="v-up">${c.votesUp}</strong>
        </button>
        <button class="vote down ${voted === "down" ? "on" : ""}" onclick="castVote('down')">
          <i class="fa-regular fa-thumbs-down"></i> 아쉬워요 <strong id="v-down">${c.votesDown}</strong>
        </button>
      </div>
    </div>

    <div class="d-card">
      <h4 class="d-card-title"><i class="fa-solid fa-comments"></i> 다녀온 회원마당</h4>
      ${gallery}
      <div class="review-form">
        <div class="rate-rows">
          ${rateRow("scenery", "⛰️ 경치")}
          ${rateRow("path", "🥾 편의")}
          ${rateRow("parking", "🚗 주차")}
        </div>
        <div class="upload-preview" id="upload-preview" style="display:none;">
          <span class="up-x" onclick="clearSelectedPhoto()">&times;</span>
          <img id="upload-img" src="" alt="">
        </div>
        <textarea id="comment-text" rows="3" placeholder="코스 상태, 주차 팁, 맛집 후기를 남겨주세요"></textarea>
        <div class="rf-actions">
          <button class="btn-ghost" onclick="triggerPhotoUpload()"><i class="fa-solid fa-camera"></i> 사진</button>
          <button class="btn-primary" onclick="submitComment()">후기 등록</button>
        </div>
        <input type="file" id="photo-input" accept="image/*" style="display:none" onchange="handlePhotoSelected(event)">
      </div>
      <div id="comment-list" class="comment-list"></div>
    </div>
  `;
  resetRatingStars();
  renderComments();
}

function rateRow(metric, label) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    stars += `<i class="fa-solid fa-star star" data-value="${i}" onclick="setRating('${metric}',${i})"></i>`;
  }
  return `<div class="rate-row"><span class="rate-label">${label}</span><div class="stars" data-metric="${metric}">${stars}</div></div>`;
}

function setRating(metric, value) {
  activeRatings[metric] = value;
  const g = document.querySelector(`.stars[data-metric="${metric}"]`);
  if (g) g.querySelectorAll(".star").forEach((s, i) => s.classList.toggle("on", i < value));
}
function resetRatingStars() {
  activeRatings = { scenery: 0, path: 0, parking: 0 };
  document.querySelectorAll(".stars .star").forEach(s => s.classList.remove("on"));
}

function renderComments() {
  const cont = document.getElementById("comment-list");
  if (!cont || !currentCourse) return;
  if (!currentCourse.comments || currentCourse.comments.length === 0) {
    cont.innerHTML = `<p class="muted-note">아직 후기가 없어요. 첫 후기를 남겨보세요!</p>`;
    return;
  }
  cont.innerHTML = currentCourse.comments.map(cm => {
    let rb = "";
    if (cm.ratings) rb = `<div class="cm-rates"><span>⛰️${cm.ratings.scenery}</span><span>🥾${cm.ratings.path}</span><span>🚗${cm.ratings.parking}</span></div>`;
    return `<div class="comment">
      ${avatarHtml(cm.user, "cm-av")}
      <div class="cm-body">
        <div class="cm-user">${cm.user}</div>${rb}
        <div class="cm-text">${cm.text}</div>
        <div class="cm-date">${cm.date}</div>
      </div>
    </div>`;
  }).join("");
}

function castVote(type) {
  if (!currentCourse) return;
  const key = `voted_course_${currentCourse.id}`;
  const prev = localStorage.getItem(key);
  if (prev) {
    if (prev === type) {
      if (type === "up") currentCourse.votesUp = Math.max(0, currentCourse.votesUp - 1);
      else currentCourse.votesDown = Math.max(0, currentCourse.votesDown - 1);
      localStorage.removeItem(key);
    } else {
      if (type === "up") { currentCourse.votesUp++; currentCourse.votesDown = Math.max(0, currentCourse.votesDown - 1); }
      else { currentCourse.votesDown++; currentCourse.votesUp = Math.max(0, currentCourse.votesUp - 1); }
      localStorage.setItem(key, type);
    }
  } else {
    if (type === "up") currentCourse.votesUp++; else currentCourse.votesDown++;
    localStorage.setItem(key, type);
  }
  saveToLocalStorage();
  renderDetail(currentCourse.id);
}

// 사진 업로드 (Canvas 리사이즈)
function triggerPhotoUpload() {
  const i = document.getElementById("photo-input");
  if (i) i.click();
}
function handlePhotoSelected(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const MAX = 600;
      let w = img.width, h = img.height;
      if (w > h && w > MAX) { h *= MAX / w; w = MAX; }
      else if (h > MAX) { w *= MAX / h; h = MAX; }
      canvas.width = w; canvas.height = h;
      canvas.getContext("2d").drawImage(img, 0, 0, w, h);
      uploadedPhotoBase64 = canvas.toDataURL("image/jpeg", 0.75);
      const box = document.getElementById("upload-preview");
      const pim = document.getElementById("upload-img");
      if (box && pim) { pim.src = uploadedPhotoBase64; box.style.display = "block"; }
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}
function clearSelectedPhoto() {
  uploadedPhotoBase64 = null;
  const box = document.getElementById("upload-preview");
  if (box) box.style.display = "none";
  const fi = document.getElementById("photo-input");
  if (fi) fi.value = "";
}

function submitComment() {
  const ta = document.getElementById("comment-text");
  if (!ta) return;
  const text = ta.value.trim();
  if (!text) { alert("후기 내용을 입력하세요."); return; }
  if (!activeRatings.scenery || !activeRatings.path || !activeRatings.parking) {
    alert("경치 · 편의 · 주차 별점을 모두 평가해 주세요!"); return;
  }
  const nc = { user: NICK, text, date: new Date().toISOString().split("T")[0], ratings: { ...activeRatings } };
  if (!currentCourse.comments) currentCourse.comments = [];
  currentCourse.comments.unshift(nc);
  if (uploadedPhotoBase64) {
    if (!currentCourse.photos) currentCourse.photos = [];
    currentCourse.photos.unshift(uploadedPhotoBase64);
  }
  saveToLocalStorage();
  clearSelectedPhoto();
  renderDetail(currentCourse.id);
  alert("소중한 후기가 등록되었어요!");
}

// -----------------------------------------------------------------------------
// 4) 소통 — 후기 피드 + 인증샷
// -----------------------------------------------------------------------------
function allReviews() {
  const arr = [];
  courses.forEach(c => {
    (c.comments || []).forEach(cm => arr.push({ ...cm, courseId: c.id, courseTitle: c.title, location: c.location }));
  });
  arr.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  return arr;
}

function renderRecentReviews(targetId, limit) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const rv = allReviews().slice(0, limit);
  if (!rv.length) { el.innerHTML = `<p class="muted-note">아직 후기가 없어요.</p>`; return; }
  el.innerHTML = rv.map(r => `
    <div class="feed-item" onclick="openCourse(${r.courseId})">
      <div class="fi-av"><i class="fa-solid fa-comment-dots"></i></div>
      <div class="fi-body">
        <div class="fi-text">"${r.text}"</div>
        <div class="fi-meta">${r.user} · ${r.courseTitle}${r.ratings ? ` · ⛰️${r.ratings.scenery} 🥾${r.ratings.path} 🚗${r.ratings.parking}` : ""}</div>
      </div>
    </div>`).join("");
}

function allPhotos() {
  const arr = [];
  courses.forEach(c => (c.photos || []).forEach(p => arr.push({ src: p, id: c.id, title: c.title })));
  return arr;
}

// 소통 피드 = 자유 게시물 + 코스 후기 통합 정규화
function communityFeed() {
  const items = [];
  communityPosts.forEach((p, i) => items.push({
    user: p.user || NICK, text: p.text || "", date: p.date || "", photo: p.photo || null,
    rating: (typeof p.rating === "number" && p.rating > 0) ? p.rating : null,
    courseTitle: p.courseName || null, courseId: p.courseId || null,
    kind: "post", postIndex: i
  }));
  courses.forEach(c => (c.comments || []).forEach(cm => {
    let rating = null;
    if (cm.ratings) rating = Math.round(((cm.ratings.scenery + cm.ratings.path + cm.ratings.parking) / 3) * 10) / 10;
    items.push({
      user: cm.user, text: cm.text, date: cm.date, photo: null, rating: rating,
      courseTitle: c.title, courseId: c.id, kind: "review", ratings: cm.ratings
    });
  }));
  return items;
}

// 검색 인기도 점수: 코스 참여도 + 검색어 빈도(많이 찾을수록 ↑)
function searchHits(text) {
  const t = (text || "").toLowerCase().replace(/\s+/g, "");
  let hits = 0;
  for (const kw in searchCounts) {
    if (t.includes(kw.replace(/\s+/g, ""))) hits += searchCounts[kw];
  }
  return hits;
}
function itemPopularity(it) {
  if (it.courseId) {
    const c = courses.find(x => x.id === it.courseId);
    if (c) {
      const base = (c.votesUp || 0) + (c.comments ? c.comments.length * 3 : 0) + (c.satisfaction || 0);
      return base + searchHits(c.title + c.location) * 20;
    }
  }
  return searchHits((it.text || "") + (it.courseTitle || "")) * 20;
}

function getCommFeed() {
  let list = communityFeed();
  if (commSort === "popular") {
    if (commKeyword) {
      const q = commKeyword.toLowerCase().replace(/\s+/g, "");
      list = list.filter(it =>
        ((it.text || "") + (it.courseTitle || "")).toLowerCase().replace(/\s+/g, "").includes(q));
    }
    list.sort((a, b) => itemPopularity(b) - itemPopularity(a) || (b.date || "").localeCompare(a.date || ""));
  } else if (commSort === "rating") {
    list.sort((a, b) => (b.rating || 0) - (a.rating || 0) || (b.date || "").localeCompare(a.date || ""));
  } else {
    list.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  }
  return list;
}

function commStars(r) {
  if (!r) return "";
  const full = Math.round(r);
  return "★".repeat(full) + "☆".repeat(Math.max(0, 5 - full));
}

function feedItemHtml(it) {
  const onClick = it.courseId ? `onclick="openCourse(${it.courseId})"` : "";
  const photo = it.photo ? `<div class="fc-photo" style="background-image:url('${it.photo}')" onclick="event.stopPropagation();openPhotoZoom(this)"></div>` : "";
  const ratingBadge = it.rating ? `<span class="fc-rate">${commStars(it.rating)} ${it.rating.toFixed(1)}</span>` : "";
  const courseTag = it.courseTitle
    ? `<span class="fc-course"><i class="fa-solid fa-location-dot"></i> ${it.courseTitle}</span>` : "";
  const mineDel = (it.kind === "post" && it.user === NICK)
    ? `<button class="fc-del" onclick="event.stopPropagation();deleteCommunityPost(${it.postIndex})" aria-label="삭제"><i class="fa-solid fa-trash-can"></i></button>` : "";
  return `
    <div class="feed-card" ${onClick}>
      <div class="fc-head">
        ${avatarHtml(it.user, "fc-av")}
        <div class="fc-who"><span class="fc-user">${it.user}</span><span class="fc-date">${it.date}</span></div>
        ${ratingBadge}${mineDel}
      </div>
      ${it.text ? `<div class="fc-text">${it.text}</div>` : ""}
      ${photo}
      ${courseTag ? `<div class="fc-foot">${courseTag}</div>` : ""}
    </div>`;
}

const SORT_TABS = [
  { k: "latest", n: "최신순", i: "fa-clock" },
  { k: "rating", n: "평점순", i: "fa-star" },
  { k: "popular", n: "인기순", i: "fa-fire" }
];

function renderCommunity() {
  const root = document.getElementById("community-body");
  if (!root) return;
  root.innerHTML = `
    <!-- 상단: 간소화 업로드 컴포저 (사진/갤러리 + 간단의견 + 올리기) -->
    <div class="composer">
      <input type="text" id="comm-post-text" class="composer-input" placeholder="간단한 의견을 남겨보세요">
      <div class="composer-photo" id="composer-photo" style="display:none;">
        <img id="composer-photo-img" src="" alt="">
        <span class="composer-photo-x" onclick="clearCommPhoto()">&times;</span>
      </div>
      <div class="composer-actions">
        <button class="composer-link" onclick="triggerCommPhoto('camera')"><i class="fa-solid fa-camera"></i> 사진</button>
        <button class="composer-link" onclick="triggerCommPhoto('gallery')"><i class="fa-solid fa-images"></i> 갤러리</button>
        <button class="composer-post" onclick="submitCommunityPost()"><i class="fa-solid fa-paper-plane"></i> 올리기</button>
      </div>
      <input type="file" id="comm-photo-input" accept="image/*" style="display:none" onchange="handleCommPhoto(event)">
    </div>

    <!-- 하단: 방문후기 정렬 탭 -->
    ${sectionLabel("💬 방문후기")}
    <div class="comm-sort-row" id="comm-sort-row">
      ${SORT_TABS.map(t => `<button class="sort-tab ${commSort === t.k ? "on" : ""}" onclick="setCommSort('${t.k}')"><i class="fa-solid ${t.i}"></i> ${t.n}</button>`).join("")}
    </div>
    <div id="comm-kw-wrap"></div>
    <div id="comm-feed"></div>
  `;
  renderCommKeywords();
  renderCommFeed();
}

// 인기순: 해시태그 키워드 칩 제거(사용자 요청). 인기순은 인기도 정렬만 하고
// 별도 칩 UI는 노출하지 않는다. (정렬 로직은 getCommFeed의 commSort==='popular'에서 처리)
function renderCommKeywords() {
  const wrap = document.getElementById("comm-kw-wrap");
  if (!wrap) return;
  wrap.innerHTML = "";
}
function filterByKeyword(k) {
  commKeyword = (commKeyword === k ? "" : k);
  renderCommFeed();
}

function renderCommFeed() {
  const el = document.getElementById("comm-feed");
  if (!el) return;
  const list = getCommFeed();
  if (!list.length) {
    el.innerHTML = `<p class="muted-note">아직 후기가 없어요. 첫 의견을 남겨보세요!</p>`;
    return;
  }
  el.innerHTML = list.map(feedItemHtml).join("");
}

function setCommSort(k) {
  commSort = k;
  commKeyword = "";
  document.querySelectorAll(".sort-tab").forEach(t => t.classList.remove("on"));
  const idx = SORT_TABS.findIndex(t => t.k === k);
  const tabs = document.querySelectorAll(".sort-tab");
  if (tabs[idx]) tabs[idx].classList.add("on");
  renderCommKeywords();
  renderCommFeed();
}

// 컴포저 사진 업로드 (카메라=직촬, 갤러리=앨범)
function triggerCommPhoto(mode) {
  const i = document.getElementById("comm-photo-input");
  if (!i) return;
  if (mode === "camera") i.setAttribute("capture", "environment");
  else i.removeAttribute("capture");
  i.click();
}
function handleCommPhoto(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const MAX = 800;
      let w = img.width, h = img.height;
      if (w > h && w > MAX) { h *= MAX / w; w = MAX; }
      else if (h > MAX) { w *= MAX / h; h = MAX; }
      canvas.width = w; canvas.height = h;
      canvas.getContext("2d").drawImage(img, 0, 0, w, h);
      commPhotoBase64 = canvas.toDataURL("image/jpeg", 0.75);
      const box = document.getElementById("composer-photo");
      const pim = document.getElementById("composer-photo-img");
      if (box && pim) { pim.src = commPhotoBase64; box.style.display = "block"; }
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}
function clearCommPhoto() {
  commPhotoBase64 = null;
  const box = document.getElementById("composer-photo");
  if (box) box.style.display = "none";
  const fi = document.getElementById("comm-photo-input");
  if (fi) fi.value = "";
}

function submitCommunityPost() {
  const ta = document.getElementById("comm-post-text");
  const text = ta ? ta.value.trim() : "";
  if (!text && !commPhotoBase64) {
    alert("사진을 올리거나 의견을 입력해 주세요.");
    return;
  }
  communityPosts.unshift({
    user: NICK,
    text: text,
    courseName: null,
    photo: commPhotoBase64 || null,
    rating: null,
    date: new Date().toISOString().split("T")[0]
  });
  saveCommunityPosts();
  commPhotoBase64 = null;
  // 최신글이 보이도록 정렬 초기화 후 재렌더
  commSort = "latest"; commKeyword = "";
  renderCommunity();
  alert("소통마당에 올라갔어요!");
}

function deleteCommunityPost(idx) {
  if (idx < 0 || idx >= communityPosts.length) return;
  if (!confirm("이 게시물을 삭제할까요?")) return;
  communityPosts.splice(idx, 1);
  saveCommunityPosts();
  renderCommunity();
}

// -----------------------------------------------------------------------------
// 5) 저장
// -----------------------------------------------------------------------------
// 예방건강 — 오늘의 건강 미션(걸음·맥락 연동)
function healthMissions(steps, goal) {
  const remain = Math.max(0, goal - steps);
  const minutes = Math.max(1, Math.ceil(remain / 100)); // ~100보/분
  return [
    { ic: "fa-shoe-prints", t: `오늘 ${goal.toLocaleString()}보 채우기`, d: steps >= goal ? "목표 달성! 훌륭해요 🎉" : `${remain.toLocaleString()}보 남음 · 약 ${minutes}분만 더!`, done: steps >= goal },
    { ic: "fa-person-walking", t: "30분 빠르게 걷기", d: "심박을 올리는 활기찬 걸음으로", done: steps >= 3000 },
    { ic: "fa-glass-water", t: "수분 1.5L 섭취", d: "걷는 틈틈이 한 모금씩", done: false },
    { ic: "fa-spa", t: "종아리·무릎 스트레칭", d: "운동 전후 5분이면 충분", done: false }
  ];
}
// 예방건강 — 계절·날씨 맥락 팁
function healthTip() {
  const s = getCurrentSeason();
  const k = weatherInfo && weatherInfo.kind;
  if (k === "hot" || s === "summer") return { ic: "fa-temperature-high", t: "온열질환 예방", d: "한낮(12~16시) 땡볕은 피하고 20분마다 수분을 보충하세요." };
  if (k === "cold" || s === "winter") return { ic: "fa-snowflake", t: "낙상·저체온 주의", d: "빙판길은 보폭을 줄이고, 보온 후 가볍게 관절을 풀어주세요." };
  if (s === "spring") return { ic: "fa-head-side-mask", t: "꽃가루·미세먼지", d: "알레르기가 있다면 마스크를 쓰고 귀가 후 손·얼굴을 씻으세요." };
  if (k === "wet") return { ic: "fa-umbrella", t: "미끄럼 주의", d: "바닥이 젖었어요. 밑창 깊은 신발로 무릎 부담을 줄이세요." };
  return { ic: "fa-heart-circle-check", t: "꾸준함이 보약", d: "하루 30분 빠르게 걷기는 심혈관 질환 위험을 낮춥니다." };
}

// 헬스 탭(구 '저장') — 만보기 + 트레킹 결과지표 + 예방건강 + 저장 코스
function renderSaved() {
  const root = document.getElementById("saved-body");
  if (!root) return;

  // 만보기 지표
  const steps = todaySteps();
  const goal = stepData.goal;
  const pct = Math.min(100, Math.round((steps / goal) * 100));
  const km = (steps * 0.0007).toFixed(2);
  const kcal = Math.round(steps * 0.04);
  const week = weekDays();
  const activeDays = week.filter(d => d.steps > 0).length;

  // 트레킹/산책 코스 지표 (저장 코스 기반 추정)
  const list = savedCourses.map(id => courses.find(c => c.id === id)).filter(Boolean);
  const planHours = list.reduce((s, c) => s + parseHours(c.duration), 0);
  const planKm = (planHours * 2.8).toFixed(1);          // 평균 보행 2.8km/h
  const planKcal = Math.round(planHours * 2.8 * 55);     // ~55kcal/km
  let myReviews = 0;
  courses.forEach(c => (c.comments || []).forEach(cm => { if (cm.user === NICK) myReviews++; }));

  const missions = healthMissions(steps, goal);
  const missionHtml = missions.map(m =>
    `<div class="mission ${m.done ? "done" : ""}">
      <span class="ms-ic"><i class="fa-solid ${m.ic}"></i></span>
      <span class="ms-body"><b>${m.t}</b><span>${m.d}</span></span>
      <span class="ms-chk"><i class="fa-solid ${m.done ? "fa-circle-check" : "fa-circle"}"></i></span>
    </div>`).join("");
  const tip = healthTip();
  const doneCount = missions.filter(m => m.done).length;

  // 일/주/월 통계
  const R = healthRange;                       // day | week | month
  const st = healthStats(R);
  const rTitle = R === "month" ? "이번 달 건강" : R === "week" ? "이번 주 건강" : "오늘의 건강";
  const rKm = (st.steps * 0.0007).toFixed(R === "day" ? 2 : 1);
  const rKcal = Math.round(st.steps * 0.04);
  const rStepLabel = R === "day" ? "걸음" : "총 걸음";
  const seg = ["day", "week", "month"].map(k =>
    `<button class="hh-seg-btn ${R === k ? "on" : ""}" onclick="setHealthRange('${k}')">${k === "day" ? "일" : k === "week" ? "주" : "월"}</button>`).join("");

  let hhBody;
  if (R === "day") {
    // 오늘: 목표 진행률 막대 + 지표
    hhBody = `
      <div class="hh-metrics">
        <div><b>${st.steps.toLocaleString()}</b><span>${rStepLabel}</span></div>
        <div><b>${rKm}</b><span>km</span></div>
        <div><b>${rKcal}</b><span>kcal</span></div>
        <div><b>${pct}%</b><span>목표</span></div>
      </div>
      <div class="hh-bar"><span style="width:${pct}%"></span></div>`;
  } else {
    // 주/월: 막대그래프 + 합계 지표
    const cmax = Math.max(goal, ...st.days.map(d => d.steps), 1);
    const todayK = dayKey();
    const bars = st.days.map((d, i) => {
      const h = Math.max(3, Math.round((d.steps / cmax) * 100));
      const isToday = d.key === todayK;
      // 월: 라벨 과밀 방지 → 매 7번째(주 시작)와 오늘만 노출(끝부분 겹침 방지)
      const showLbl = R === "week" || isToday || (i % 7 === 0 && i < st.n - 2);
      return `<div class="cb"><div class="cb-bar ${isToday ? "today" : ""} ${d.steps >= goal ? "hit" : ""}" style="height:${h}%"></div><span class="cb-l">${showLbl ? d.label : ""}</span></div>`;
    }).join("");
    hhBody = `
      <div class="hh-chart" role="img" aria-label="${R === "week" ? "최근 7일" : "최근 30일"} 일별 걸음 막대그래프">${bars}</div>
      <div class="hh-metrics">
        <div><b>${st.steps.toLocaleString()}</b><span>${rStepLabel}</span></div>
        <div><b>${rKm}</b><span>km</span></div>
        <div><b>${rKcal}</b><span>kcal</span></div>
        <div><b>${st.activeDays}/${st.n}</b><span>활동일</span></div>
      </div>`;
  }
  const hhBadge = R === "day"
    ? `<span class="hh-badge ${st.steps >= goal ? "done" : ""}">${pct}%</span>`
    : `<span class="hh-badge ${st.hitDays > 0 ? "done" : ""}">목표 ${st.hitDays}일</span>`;

  root.innerHTML = `
    <div class="health-hero">
      <div class="hh-top">
        <span class="hh-title"><i class="fa-solid fa-heart-pulse"></i> ${rTitle}</span>
        ${hhBadge}
      </div>
      <div class="hh-seg" role="tablist" aria-label="기간 선택">${seg}</div>
      ${hhBody}
      <button class="hh-cta" onclick="goTab('mypage')"><i class="fa-solid fa-shoe-prints"></i> 만보기 열어 측정 시작 <i class="fa-solid fa-chevron-right"></i></button>
    </div>

    ${sectionLabel("🥾 트레킹 활동", `<span class="sec-sub">저장 코스 완주 시 추정</span>`)}
    <div class="trek-stats">
      <div class="trek-card"><b>${list.length}</b><span>저장 코스</span></div>
      <div class="trek-card"><b>${planKm}</b><span>예상 km</span></div>
      <div class="trek-card"><b>${planKcal}</b><span>예상 kcal</span></div>
      <div class="trek-card"><b>${myReviews}</b><span>내 후기</span></div>
    </div>

    ${sectionLabel("🛡️ 예방건강 미션", `<span class="sec-sub">${doneCount}/${missions.length} 완료</span>`)}
    <div class="mission-list">${missionHtml}</div>
    <div class="health-tip">
      <div class="ht-ic"><i class="fa-solid ${tip.ic}"></i></div>
      <div class="ht-body"><b>${tip.t}</b><p>${tip.d}</p></div>
    </div>

    ${sectionLabel("📌 저장한 코스", list.length ? `<a onclick="goTab('explore')">더 찾기</a>` : "")}
    ${list.length
      ? `<div class="course-list">${list.map(courseCardHtml).join("")}</div>`
      : `<div class="empty-soft"><i class="fa-regular fa-bookmark"></i><p>저장한 코스가 없어요</p><span>코스 카드의 북마크를 눌러 모아두세요</span>
         <button class="btn-primary" style="margin-top:12px" onclick="goTab('explore')">코스 둘러보기</button></div>`}
  `;

  // 예방건강 팁 정확도용 날씨 1회 로드(미로드 시)
  if (!weatherInfo && !weatherFetching) {
    loadWeather(() => { if (currentScreen === "saved") renderSaved(); });
  }
}

// -----------------------------------------------------------------------------
// 6) 내 정보 — 맞춤설정 + 접근성
// -----------------------------------------------------------------------------
function renderMypage() {
  const root = document.getElementById("mypage-body");
  if (!root) return;
  let myCount = 0;
  courses.forEach(c => (c.comments || []).forEach(cm => { if (cm.user === NICK) myCount++; }));
  let grade = myCount >= 5 ? "산책 명인" : myCount >= 2 ? "나들이 매니아" : "초보 걷기꾼";

  const goal = stepData.goal;
  const avatar = visitorSettings.avatar || "";
  const key = pedDate || dayKey();
  const isToday = key === dayKey();
  const steps = stepData.days[key] || 0;
  const pct = Math.min(100, Math.round((steps / goal) * 100));
  const m = Math.round(steps * 0.7);
  const distTxt = m >= 1000 ? (m / 1000).toFixed(2) + " km" : m + " m";
  const kcal = Math.round(steps * 0.04);

  // 일/주/월 세그먼트
  const seg = ["day", "week", "month"].map(k =>
    `<button class="p2-seg-btn ${pedView === k ? "on" : ""}" onclick="setPedView('${k}')">${k === "day" ? "일" : k === "week" ? "주" : "월"}</button>`).join("");

  let body;
  if (pedView === "day") {
    const remainTxt = steps >= goal ? "목표 달성!" : `목표까지 ${Math.max(0, goal - steps).toLocaleString()}보`;
    const elapsed = (isToday && pedSession.startTs) ? fmtElapsed(sessionElapsedMs()) : "00:00:00";
    const speed = (isToday && pedSession.startTs) ? sessionSpeedKmh().toFixed(1) : "0.0";
    body = `
      <div class="p2-date">
        <button class="p2-nav" onclick="pedDateShift(-1)" aria-label="이전 날"><i class="fa-solid fa-chevron-left"></i></button>
        <span class="p2-dtxt">${fmtDateKo(key)}</span>
        <button class="p2-nav ${isToday ? "dim" : ""}" onclick="pedDateShift(1)" ${isToday ? "disabled" : ""} aria-label="다음 날"><i class="fa-solid fa-chevron-right"></i></button>
      </div>
      <div class="p2-hero">
        <i class="fa-solid fa-shoe-prints p2-foot" aria-hidden="true"></i>
        <b id="ped2-steps">${steps.toLocaleString()}</b>
      </div>
      <div class="p2-goalline">
        <div class="p2-goalbar"><span id="ped2-goalbar" style="width:${pct}%"></span></div>
        <span class="p2-goalmeta"><b id="ped2-goalpct">${pct}%</b> · <span id="ped2-remain">${remainTxt}</span></span>
      </div>
      <div class="p2-grid">
        <div class="p2-cell"><b id="ped2-kcal">${kcal}</b><span>칼로리 kcal</span></div>
        <div class="p2-cell"><b id="ped2-dist">${distTxt}</b><span>거리</span></div>
        <div class="p2-cell"><b id="ped2-time">${elapsed}</b><span>측정 시간</span></div>
        <div class="p2-cell"><b id="ped2-speed">${speed}</b><span>속도 km/h</span></div>
      </div>
      <div class="p2-graph" id="ped2-graph">${pedGraphSvg(key)}</div>
      ${isToday
        ? `<button class="p2-track ${motionActive ? "on" : ""}" onclick="toggleStepTracking()"><i class="fa-solid fa-${motionActive ? "stop" : "play"}"></i> ${motionActive ? "중지" : "측정 시작"}</button>`
        : `<div class="p2-pastnote">지난 기록 조회 중 · <button class="p2-today" onclick="pedDateShift(99)">오늘로</button></div>`}
    `;
  } else {
    const st = healthStats(pedView); // week | month 집계 재사용
    const cmax = Math.max(goal, ...st.days.map(d => d.steps), 1);
    const todayK = dayKey();
    const bars = st.days.map((d, i) => {
      const h = Math.max(3, Math.round((d.steps / cmax) * 100));
      const isT = d.key === todayK;
      const showLbl = pedView === "week" || isT || (i % 7 === 0 && i < st.n - 2);
      return `<div class="cb"><div class="cb-bar ${isT ? "today" : ""} ${d.steps >= goal ? "hit" : ""}" style="height:${h}%"></div><span class="cb-l">${showLbl ? d.label : ""}</span></div>`;
    }).join("");
    const tKm = (st.steps * 0.0007).toFixed(1), tKcal = Math.round(st.steps * 0.04);
    body = `
      <div class="p2-chart">${bars}</div>
      <div class="p2-grid">
        <div class="p2-cell"><b>${st.steps.toLocaleString()}</b><span>총 걸음</span></div>
        <div class="p2-cell"><b>${tKm}</b><span>km</span></div>
        <div class="p2-cell"><b>${tKcal}</b><span>kcal</span></div>
        <div class="p2-cell"><b>${st.activeDays}/${st.n}</b><span>활동일</span></div>
      </div>
    `;
  }

  root.innerHTML = `
    <!-- 만보기 카드 (초록 컨셉 · 일/주/월 + ⋮) -->
    <div class="ped2 ${motionActive ? "measuring" : ""} ${pedView === "day" ? "fill" : ""}">
      <div class="ped2-head">
        <div class="p2-seg">${seg}</div>
        <button class="p2-menu" onclick="togglePedMenu(event)" aria-label="메뉴(수정·공유·설정)"><i class="fa-solid fa-ellipsis-vertical"></i></button>
      </div>
      ${body}
    </div>

    <!-- ⋮ 시트: 수정 / 공유 / 설정 -->
    <div class="p2-sheet" id="p2-sheet" hidden>
      <div class="p2-sheet-sec">
        <div class="p2-sheet-t"><i class="fa-solid fa-pen-to-square"></i> 수정 · 수동 기록</div>
        <div class="ped-quick">
          <button class="q-chip" onclick="addSteps(1000)">+1,000</button>
          <button class="q-chip" onclick="addSteps(3000)">+3,000</button>
          <button class="q-chip" onclick="addSteps(5000)">+5,000</button>
          <button class="q-chip reset" onclick="setTodaySteps(0)">초기화</button>
        </div>
      </div>
      <div class="p2-sheet-sec">
        <div class="p2-sheet-t"><i class="fa-solid fa-share-nodes"></i> 공유</div>
        <button class="p2-share" onclick="sharePed()"><i class="fa-solid fa-share-nodes"></i> 오늘 걸음 공유하기</button>
      </div>
      <div class="p2-sheet-sec">
        <div class="p2-sheet-t"><i class="fa-solid fa-gear"></i> 설정</div>
        <div class="ped-sub">하루 목표</div>
        <div class="goal-row">${[6000, 8000, 10000, 12000].map(g => `<button class="goal-chip ${goal === g ? "on" : ""}" onclick="setStepGoal(${g})">${g / 1000}천</button>`).join("")}</div>
        <div class="set-row"><span>글자 크기</span>
          <div class="seg small">${fontBtn("medium", "보통")}${fontBtn("large", "크게")}${fontBtn("xlarge", "아주크게")}</div>
        </div>
        <div class="set-row toggle-row" onclick="toggleContrast()">
          <span><i class="fa-solid fa-circle-half-stroke"></i> 고대비 모드</span>
          <span class="switch ${visitorSettings.highContrast ? "on" : ""}"><span class="knob"></span></span>
        </div>
        <div class="set-row toggle-row" onclick="toggleAdmin()">
          <span><i class="fa-solid fa-user-gear"></i> 관리자 모드 (코스 사진 교체)</span>
          <span class="switch ${visitorSettings.admin ? "on" : ""}"><span class="knob"></span></span>
        </div>
      </div>
      <p class="p2-note"><i class="fa-solid fa-circle-info"></i> 폰을 들고 걸으면 자동 카운트돼요. 측정 중엔 화면을 켜두면 끊김 없이 측정되고, 앱을 다시 열면 이어서 측정해요. 걸음은 매일 자정에 0으로 리셋(지난 기록은 주·월 그래프에 보존).</p>
    </div>
  `;
  // 측정 중 세션 타이머 표시 보장(오늘 조회 시)
  if (motionActive && isToday && !pedSession.timer) {
    pedSession.timer = setInterval(updateSessionLive, 1000);
  }
}

function segBtn(group, val, label) {
  const active = visitorSettings[group] === val;
  return `<button class="seg-btn ${active ? "on" : ""}" onclick="setSetting('${group}','${val}')">${label}</button>`;
}
function fontBtn(val, label) {
  const active = visitorSettings.fontSize === val;
  return `<button class="seg-btn ${active ? "on" : ""}" onclick="setFontSize('${val}')">${label}</button>`;
}

function setSetting(group, val) {
  visitorSettings[group] = val;
  localStorage.setItem("gongacourse_visitor_settings", JSON.stringify(visitorSettings));
  renderMypage();
}
// 앱바 우측 프로필(필명 + 사진) — 보조 등급줄 제거(간결), 탭 시 간편등록 모달
function renderAppbarProfile() {
  const el = document.getElementById("appbar-profile");
  if (!el) return;
  const avatar = visitorSettings.avatar || "";
  el.innerHTML = `
    <button class="ap-name-btn" onclick="openProfileEdit()">${NICK}</button>
    <button class="ap-avatar ${avatar ? "has" : ""}" onclick="openProfileEdit()" aria-label="프로필 등록"
      style="${avatar ? `background-image:url('${avatar}')` : ""}">
      ${avatar ? "" : `<i class="fa-solid fa-user-astronaut"></i>`}
      <span class="ap-cam"><i class="fa-solid fa-camera"></i></span>
    </button>
  `;
}

// ── 만보기 상태/동작 ─────────────────────────────────────────────
let pedView = "day";   // day | week | month
let pedDate = null;    // null=오늘, 아니면 dayKey 문자열(과거 조회)
function setPedView(v) { if (pedView === v) return; pedView = v; closePedSheet(); renderMypage(); }
function pedDateShift(d) {
  if (d === 99) { pedDate = null; renderMypage(); return; }
  const base = pedDate ? new Date(pedDate + "T00:00:00") : new Date();
  base.setDate(base.getDate() + d);
  const todayK = dayKey();
  let k = dayKey(base);
  if (k > todayK) k = todayK;            // 미래 차단
  pedDate = (k === todayK) ? null : k;
  renderMypage();
}
function fmtDateKo(key) {
  const d = new Date(key + "T00:00:00");
  const dow = ["일", "월", "화", "수", "목", "금", "토"][d.getDay()];
  const tag = (key === dayKey()) ? "오늘 · " : "";
  return `${tag}${d.getMonth() + 1}월 ${d.getDate()}일(${dow})`;
}
function togglePedMenu(e) { if (e) e.stopPropagation(); const s = document.getElementById("p2-sheet"); if (s) s.hidden = !s.hidden; }
function closePedSheet() { const s = document.getElementById("p2-sheet"); if (s) s.hidden = true; }
function sharePed() {
  const steps = todaySteps();
  const km = (steps * 0.0007).toFixed(2);
  const txt = `오늘 ${NICK}님의 걸음: ${steps.toLocaleString()}보 (약 ${km}km) — 꽁아코스`;
  if (navigator.share) navigator.share({ title: "꽁아코스 만보기", text: txt }).catch(() => {});
  else if (navigator.clipboard) navigator.clipboard.writeText(txt).then(() => alert("공유 문구를 복사했어요!\n\n" + txt), () => alert(txt));
  else alert(txt);
}

// ── 프로필 간편등록(필명·휴대폰·사진) 모달 ───────────────────────
function openProfileEdit() {
  let ov = document.getElementById("prof-modal");
  if (!ov) { ov = document.createElement("div"); ov.id = "prof-modal"; ov.className = "prof-modal"; document.body.appendChild(ov); }
  const avatar = visitorSettings.avatar || "";
  const esc = s => (s || "").replace(/"/g, "&quot;");
  ov.innerHTML = `
    <div class="pm-card" role="dialog" aria-label="프로필 등록">
      <div class="pm-head"><b>프로필 등록</b><button class="pm-x" onclick="closeProfileEdit()" aria-label="닫기"><i class="fa-solid fa-xmark"></i></button></div>
      <div class="pm-avwrap">
        <button class="pm-av ${avatar ? "has" : ""}" onclick="triggerAvatar()" aria-label="프로필 사진 선택"
          style="${avatar ? `background-image:url('${avatar}')` : ""}">
          ${avatar ? "" : `<i class="fa-solid fa-user-astronaut"></i>`}<span class="pm-cam"><i class="fa-solid fa-camera"></i></span>
        </button>
        <span class="pm-avhint">사진 선택 (선택)</span>
        <input type="file" id="avatar-input" accept="image/*" style="display:none" onchange="handleAvatar(event)">
      </div>
      <label class="pm-field"><span>필명</span>
        <input type="text" id="pm-nick" maxlength="16" placeholder="예: 나들이 대장님" value="${esc(visitorSettings.nick)}">
      </label>
      <label class="pm-field"><span>휴대폰 번호 (선택)</span>
        <input type="tel" id="pm-phone" inputmode="numeric" maxlength="13" placeholder="010-0000-0000" value="${esc(visitorSettings.phone)}">
      </label>
      <p class="pm-priv"><i class="fa-solid fa-lock"></i> 입력 정보는 이 기기에만 저장되며 외부로 전송되지 않아요.</p>
      <button class="pm-save" onclick="saveProfile()">간편 등록</button>
    </div>`;
  ov.classList.add("on");
  ov.onclick = ev => { if (ev.target === ov) closeProfileEdit(); };
  setTimeout(() => { const n = document.getElementById("pm-nick"); if (n) n.focus(); }, 50);
}
function closeProfileEdit() { const ov = document.getElementById("prof-modal"); if (ov) ov.classList.remove("on"); }
function saveProfile() {
  const nick = (document.getElementById("pm-nick").value || "").trim();
  const phone = (document.getElementById("pm-phone").value || "").trim();
  visitorSettings.nick = nick;
  visitorSettings.phone = phone;
  NICK = nick || DEFAULT_NICK;
  localStorage.setItem("gongacourse_visitor_settings", JSON.stringify(visitorSettings));
  closeProfileEdit();
  renderAppbarProfile();
  if (currentScreen === "mypage") renderMypage();
  else if (currentScreen === "community") renderCommunity();
  else if (currentScreen === "saved") renderSaved();
}

// 작성자 아바타(본인=내 사진, 그 외=기본 아이콘)
function avatarHtml(user, cls) {
  const av = visitorSettings.avatar || "";
  if (user === NICK && av) return `<div class="${cls} has" style="background-image:url('${av}')"></div>`;
  return `<div class="${cls}"><i class="fa-solid fa-user"></i></div>`;
}

// 프로필 사진 등록 (로컬 저장, Canvas 리사이즈)
function triggerAvatar() {
  const i = document.getElementById("avatar-input");
  if (i) i.click();
}
function handleAvatar(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const SIZE = 200;
      canvas.width = SIZE; canvas.height = SIZE;
      // 정사각 크롭(중앙)
      const side = Math.min(img.width, img.height);
      const sx = (img.width - side) / 2, sy = (img.height - side) / 2;
      canvas.getContext("2d").drawImage(img, sx, sy, side, side, 0, 0, SIZE, SIZE);
      visitorSettings.avatar = canvas.toDataURL("image/jpeg", 0.8);
      localStorage.setItem("gongacourse_visitor_settings", JSON.stringify(visitorSettings));
      renderAppbarProfile();
      // 프로필 모달이 열려 있으면 미리보기 갱신(입력값은 보존)
      const pmav = document.querySelector("#prof-modal .pm-av");
      if (pmav) { pmav.classList.add("has"); pmav.style.backgroundImage = `url('${visitorSettings.avatar}')`; pmav.innerHTML = `<span class="pm-cam"><i class="fa-solid fa-camera"></i></span>`; }
      if (currentScreen === "mypage") { const a = document.querySelector(".my-prof .mp-av"); if (a) { a.classList.add("has"); a.style.backgroundImage = `url('${visitorSettings.avatar}')`; a.innerHTML = ""; } }
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

// 홈 배너에서 동반자 선택 (맞춤 결과 즉시 반영)
function setCompanionHome(val) {
  visitorSettings.companion = val;
  localStorage.setItem("gongacourse_visitor_settings", JSON.stringify(visitorSettings));
  renderHome();
}
function setFontSize(size) {
  visitorSettings.fontSize = size;
  localStorage.setItem("gongacourse_visitor_settings", JSON.stringify(visitorSettings));
  applyFontSize();
  renderMypage();
}
function applyFontSize() {
  document.body.classList.remove("font-large", "font-xlarge");
  if (visitorSettings.fontSize === "large") document.body.classList.add("font-large");
  else if (visitorSettings.fontSize === "xlarge") document.body.classList.add("font-xlarge");
}
function toggleContrast() {
  visitorSettings.highContrast = !visitorSettings.highContrast;
  localStorage.setItem("gongacourse_visitor_settings", JSON.stringify(visitorSettings));
  document.body.classList.toggle("contrast-high", visitorSettings.highContrast);
  renderMypage();
}
function loadVisitorSettings() {
  try {
    const s = localStorage.getItem("gongacourse_visitor_settings");
    if (s) visitorSettings = Object.assign(visitorSettings, JSON.parse(s));
  } catch (e) {}
  if (visitorSettings.nick) NICK = visitorSettings.nick;
  applyFontSize();
  document.body.classList.toggle("contrast-high", visitorSettings.highContrast);
}

// -----------------------------------------------------------------------------
// 만보기 (걸음 기록·계기판) — 로컬 저장 기반 기록형
// -----------------------------------------------------------------------------
// tracking: 측정 ON 의도를 영속화 → 앱을 다시 열면 자동 재개. days는 날짜별이라 자정에 자동 0 리셋.
let stepData = { goal: 8000, days: {}, hours: {}, tracking: false };
function loadSteps() {
  try {
    const s = localStorage.getItem("gongacourse_steps");
    if (s) stepData = Object.assign({ goal: 8000, days: {}, hours: {}, tracking: false }, JSON.parse(s));
  } catch (e) { stepData = { goal: 8000, days: {}, hours: {}, tracking: false }; }
  if (!stepData.hours) stepData.hours = {};
}
// 시간대별 걸음(0~23시) — 시간대 그래프 & 누적선 생성용
function dayHours(k) {
  k = k || dayKey();
  if (!stepData.hours) stepData.hours = {};
  if (!stepData.hours[k]) stepData.hours[k] = new Array(24).fill(0);
  return stepData.hours[k];
}
function addHourSteps(n, k, hour) {
  const arr = dayHours(k);
  const h = (hour == null) ? new Date().getHours() : hour;
  arr[Math.max(0, Math.min(23, h))] += n;
}
function cumulativeHours(k) {
  const arr = dayHours(k), out = []; let s = 0;
  for (let i = 0; i < 24; i++) { s += arr[i]; out.push(s); }
  return out;
}

// 측정 세션(시간·속도 산출) — 측정 시작~정지 기준
let pedSession = { startTs: 0, startSteps: 0, timer: null };
function sessionElapsedMs() { return pedSession.startTs ? Date.now() - pedSession.startTs : 0; }
function fmtElapsed(ms) {
  const t = Math.floor(ms / 1000);
  const h = Math.floor(t / 3600), m = Math.floor((t % 3600) / 60), s = t % 60;
  return [h, m, s].map(x => String(x).padStart(2, "0")).join(":");
}
function sessionStepDelta() { return Math.max(0, todaySteps() - pedSession.startSteps); }
function sessionSpeedKmh() {
  const hrs = sessionElapsedMs() / 3600000;
  if (hrs <= 0) return 0;
  return (sessionStepDelta() * 0.0007) / hrs;
}
function saveSteps() { localStorage.setItem("gongacourse_steps", JSON.stringify(stepData)); }
function dayKey(d) {
  const x = d || new Date();
  return x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0") + "-" + String(x.getDate()).padStart(2, "0");
}
function todaySteps() { return stepData.days[dayKey()] || 0; }
function setTodaySteps(v) {
  const k = dayKey();
  const val = Math.max(0, parseInt(v, 10) || 0);
  stepData.days[k] = val;
  if (val === 0) stepData.hours[k] = new Array(24).fill(0); // 초기화 시 시간대도 리셋
  saveSteps(); renderMypage();
}
function addSteps(delta) {
  const k = dayKey();
  stepData.days[k] = Math.max(0, (stepData.days[k] || 0) + delta);
  addHourSteps(delta, k);            // 수동 기록도 현재 시간대에 누적
  saveSteps(); renderMypage();
}
function setStepGoal(v) {
  stepData.goal = Math.max(1000, parseInt(v, 10) || 8000);
  saveSteps(); renderMypage();
}
function weekDays() {
  const arr = [], now = new Date();
  const dow = ["일", "월", "화", "수", "목", "금", "토"];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
    const k = dayKey(d);
    arr.push({ key: k, label: dow[d.getDay()], steps: stepData.days[k] || 0 });
  }
  return arr;
}
// 최근 30일 (헬스 '월' 통계용) — 라벨은 일자(매주 시작점만 노출)
function monthDays() {
  const arr = [], now = new Date();
  for (let i = 29; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i);
    const k = dayKey(d);
    arr.push({ key: k, label: String(d.getDate()), steps: stepData.days[k] || 0 });
  }
  return arr;
}
// 헬스 일/주/월 통계 — 기간별 집계
let healthRange = "day"; // day | week | month
function setHealthRange(r) {
  if (healthRange === r) return;
  healthRange = r;
  if (currentScreen === "saved") renderSaved();
}
function healthStats(range) {
  const goal = stepData.goal;
  if (range === "day") {
    const s = todaySteps();
    return { steps: s, days: [{ label: "오늘", steps: s, key: dayKey() }], n: 1, hitDays: s >= goal ? 1 : 0, activeDays: s > 0 ? 1 : 0 };
  }
  const days = range === "month" ? monthDays() : weekDays();
  const steps = days.reduce((a, d) => a + d.steps, 0);
  return {
    steps, days, n: days.length,
    hitDays: days.filter(d => d.steps >= goal).length,
    activeDays: days.filter(d => d.steps > 0).length
  };
}

// --- 실시간 걸음 측정 (DeviceMotion 가속도계 피크 검출) ---
let motionActive = false;
let motionHandler = null;
let motionState = { smoothed: 9.8, peaked: false, lastStepAt: 0, sinceSave: 0 };

// 화면 꺼짐 방지(Screen Wake Lock) — 만보기 측정 중 화면이 자동으로 꺼지면
// 센서 이벤트가 멈춰 카운트가 중단된다. 측정 중엔 화면을 켜둬 끊김 없이 카운트.
let wakeLock = null;
async function requestWakeLock() {
  if (!("wakeLock" in navigator)) return; // 미지원 브라우저: graceful 무시
  try {
    wakeLock = await navigator.wakeLock.request("screen");
    wakeLock.addEventListener("release", () => { wakeLock = null; });
  } catch (e) { wakeLock = null; } // 권한·정책 거부 시 조용히 폴백
}
async function releaseWakeLock() {
  try { if (wakeLock) await wakeLock.release(); } catch (e) {}
  wakeLock = null;
}

async function toggleStepTracking() {
  if (motionActive) { stopStepTracking(); return; }
  if (typeof DeviceMotionEvent === "undefined") {
    alert("이 기기/브라우저는 동작 센서를 지원하지 않아요. (PC 미리보기에선 작동 안 함 — 실제 휴대폰 + HTTPS 필요)");
    return;
  }
  // iOS 13+ 권한 요청 (사용자 제스처 필요)
  if (typeof DeviceMotionEvent.requestPermission === "function") {
    try {
      const res = await DeviceMotionEvent.requestPermission();
      if (res !== "granted") { alert("동작 센서 권한이 거부되었어요."); return; }
    } catch (e) {
      alert("동작 센서를 시작할 수 없어요: " + e.message);
      return;
    }
  }
  startStepTracking();
}

function startStepTracking() {
  motionState = { smoothed: 9.8, peaked: false, lastStepAt: 0, sinceSave: 0 };
  motionHandler = onDeviceMotion;
  window.addEventListener("devicemotion", motionHandler);
  motionActive = true;
  stepData.tracking = true; // 측정 ON 의도 영속화 → 앱 재시작/재방문 시 자동 재개
  // 측정 세션 시작(시간·속도 산출 기준점)
  pedSession.startTs = Date.now();
  pedSession.startSteps = todaySteps();
  if (pedSession.timer) clearInterval(pedSession.timer);
  pedSession.timer = setInterval(updateSessionLive, 1000); // 시간·속도 1초마다 갱신
  saveSteps();
  requestWakeLock(); // 측정 중 화면 꺼짐 방지 → 센서 끊김 없이 카운트 지속
  renderMypage();
}

function stopStepTracking() {
  if (motionHandler) window.removeEventListener("devicemotion", motionHandler);
  motionHandler = null;
  motionActive = false;
  stepData.tracking = false; // 사용자가 명시적으로 정지 → 자동 재개 안 함
  if (pedSession.timer) { clearInterval(pedSession.timer); pedSession.timer = null; }
  pedSession.startTs = 0;
  releaseWakeLock();
  saveSteps();
  renderMypage();
}
// 세션 시간·속도만 1초마다 갱신(전체 재렌더 없이)
function updateSessionLive() {
  const t = document.getElementById("ped2-time");
  const sp = document.getElementById("ped2-speed");
  if (t) t.textContent = fmtElapsed(sessionElapsedMs());
  if (sp) sp.textContent = sessionSpeedKmh().toFixed(1);
}

// 앱을 다시 열었을 때(콜드 로드/탭 복귀) 측정 ON 의도가 남아있으면 자동 재개.
// Android Chrome 등 권한 불필요 환경은 즉시 카운트 재개. iOS는 권한이 사용자 제스처로만
// 부여되므로(재로드 시 소멸) 이벤트가 오기 전까지 대기 → '측정 시작'을 다시 한 번 탭하면 됨.
function resumeTrackingIfWanted() {
  if (!stepData.tracking || motionActive) return;
  if (typeof DeviceMotionEvent === "undefined") return;
  startStepTracking();
}

// 자정 자동 리셋 — days[]가 날짜별이라 새 날은 자연히 0부터. 앱이 열린 채 자정을 넘으면
// 표시만 갱신해 주면 됨(과거 기록은 주간 막대에 보존). 측정은 끊기지 않고 새 날에 누적.
let _lastDayKey = null;
function checkDayRollover() {
  const k = dayKey();
  if (_lastDayKey === null) { _lastDayKey = k; return; }
  if (k !== _lastDayKey) {
    _lastDayKey = k;
    // 측정 중이면 새 날의 세션(시간·속도·시간대 그래프)을 자동으로 새로 시작
    // → "시작" 한 번이면 자정을 넘겨 매일 24시간 자동 작동(일단위 리셋).
    if (motionActive) { pedSession.startTs = Date.now(); pedSession.startSteps = 0; }
    if (currentScreen === "mypage") { pedDate = null; renderMypage(); }
    else if (currentScreen === "saved") renderSaved();
  }
}
function startMidnightWatcher() {
  _lastDayKey = dayKey();
  setInterval(checkDayRollover, 30000); // 30초마다 날짜 변경 확인(부담 없음)
}

function onDeviceMotion(e) {
  const a = e.accelerationIncludingGravity || e.acceleration;
  if (!a || (a.x == null && a.y == null && a.z == null)) return;
  const mag = Math.sqrt((a.x || 0) ** 2 + (a.y || 0) ** 2 + (a.z || 0) ** 2);
  // 저주파(중력) 분리 → 동적 성분
  motionState.smoothed = motionState.smoothed * 0.9 + mag * 0.1;
  const dyn = mag - motionState.smoothed;
  const now = Date.now();
  const THRESH = 1.2, MIN_INTERVAL = 280;
  if (dyn > THRESH && !motionState.peaked && (now - motionState.lastStepAt) > MIN_INTERVAL) {
    motionState.peaked = true;
    motionState.lastStepAt = now;
    countOneStep();
  } else if (dyn < THRESH * 0.4) {
    motionState.peaked = false;
  }
}

// 한 걸음 카운트: 전체 재렌더 없이 게이지/숫자만 즉시 갱신, 저장은 10보마다
function countOneStep() {
  const k = dayKey();
  stepData.days[k] = (stepData.days[k] || 0) + 1;
  addHourSteps(1, k);
  motionState.sinceSave++;
  if (motionState.sinceSave >= 10) { saveSteps(); motionState.sinceSave = 0; redrawPedGraph(); }
  updateGaugeLive();
}

// 측정 중 숫자(걸음·칼로리·거리·목표)를 전체 재렌더 없이 즉시 갱신
function updateGaugeLive() {
  // 오늘(측정 중)만 라이브 갱신 — 과거 날짜 조회 중이면 무시
  if (pedDate && pedDate !== dayKey()) return;
  const steps = todaySteps();
  const goal = stepData.goal;
  const pct = Math.min(100, Math.round((steps / goal) * 100));
  const m = Math.round(steps * 0.7);
  const set = (id, txt) => { const e = document.getElementById(id); if (e) e.textContent = txt; };
  set("ped2-steps", steps.toLocaleString());
  set("ped2-kcal", Math.round(steps * 0.04));
  set("ped2-dist", m >= 1000 ? (m / 1000).toFixed(2) + " km" : m + " m");
  set("ped2-goalpct", pct + "%");
  const bar = document.getElementById("ped2-goalbar");
  if (bar) bar.style.width = pct + "%";
  const rem = document.getElementById("ped2-remain");
  if (rem) rem.textContent = steps >= goal ? "목표 달성!" : `목표까지 ${Math.max(0, goal - steps).toLocaleString()}보`;
}
// 시간대 누적 그래프만 다시 그림(10보마다)
function redrawPedGraph() {
  const g = document.getElementById("ped2-graph");
  if (!g) return;
  const key = pedDate || dayKey();
  if (key !== dayKey()) return; // 오늘 조회 중일 때만 라이브 갱신
  g.innerHTML = pedGraphSvg(key);
}
// 시간대(0~24시) 누적 걸음 Area 차트 — Y축 K(천보) 눈금·가로 그리드 + X축 시(時)
function pedGraphSvg(key) {
  const cum = cumulativeHours(key);
  const goal = stepData.goal;
  const rawMax = Math.max(goal, cum[23], 1);
  const niceMax = Math.max(4000, Math.ceil(rawMax / 4000) * 4000); // 4구간 K 눈금
  const W = 335, H = 140, PAD_L = 30, PAD_R = 8, PAD_T = 10, PAD_B = 20;
  const plotW = W - PAD_L - PAD_R, plotH = H - PAD_T - PAD_B;
  const xAt = i => PAD_L + (Math.min(i, 24) / 24) * plotW;
  const yAt = v => PAD_T + plotH - (v / niceMax) * plotH;
  const nowH = (key === dayKey()) ? new Date().getHours() : 23;
  // Y 그리드 + K 라벨 (0, 1/4, 1/2, 3/4, max)
  let grid = "";
  for (let g = 0; g <= 4; g++) {
    const v = (niceMax / 4) * g, y = yAt(v).toFixed(1);
    grid += `<line x1="${PAD_L}" y1="${y}" x2="${W - PAD_R}" y2="${y}" class="pg-grid"/>`;
    grid += `<text x="${PAD_L - 5}" y="${(+y + 3).toFixed(1)}" class="pg-yl" text-anchor="end">${v === 0 ? "0" : (v / 1000) + "K"}</text>`;
  }
  // 누적 선/면 (현재 시각까지)
  let pts = [];
  for (let i = 0; i <= nowH; i++) pts.push(`${xAt(i).toFixed(1)},${yAt(cum[i]).toFixed(1)}`);
  if (!pts.length) pts.push(`${xAt(0).toFixed(1)},${yAt(0).toFixed(1)}`);
  const line = pts.join(" ");
  const lastX = xAt(nowH), lastY = yAt(cum[Math.max(0, nowH)] || 0);
  const baseY = (PAD_T + plotH).toFixed(1);
  const area = `${PAD_L},${baseY} ${line} ${lastX.toFixed(1)},${baseY}`;
  // 목표선(점선) + X 시간 라벨
  const goalLine = goal <= niceMax ? `<line x1="${PAD_L}" y1="${yAt(goal).toFixed(1)}" x2="${W - PAD_R}" y2="${yAt(goal).toFixed(1)}" class="pg-goal"/>` : "";
  const xlabels = [0, 6, 12, 18, 24].map(h =>
    `<text x="${xAt(h).toFixed(1)}" y="${H - 5}" class="pg-xl" text-anchor="${h === 0 ? "start" : h === 24 ? "end" : "middle"}">${h}시</text>`).join("");
  const dot = `<circle cx="${lastX.toFixed(1)}" cy="${lastY.toFixed(1)}" r="3.5" class="pg-dot"/>`;
  return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid meet" class="pg-svg" role="img" aria-label="시간대별 누적 걸음(세로축 K=천보, 가로축 시)">
    ${grid}${goalLine}
    <polygon points="${area}" class="pg-area"/>
    <polyline points="${line}" class="pg-line"/>
    ${dot}${xlabels}
  </svg>`;
}


// -----------------------------------------------------------------------------
// 모음집(컬렉션) 5종 — 명산100·가고싶은 섬·세계 트레일·골프장 순위·세계 탐방지
// (가고픈곳_리서치추가 엑셀 시트 원본, 2026-07-04 지시)
// 홈 노란박스 칩 + 탐색 상단 스트립에서 진입. tap: search=탐색 검색, island=코스 연결.
// -----------------------------------------------------------------------------
const COLLECTIONS = {"m100":{"t":"국내 명산 100","ic":"fa-mountain-sun","desc":"블랙야크 명산100 탐방지와 인증 봉우리 100곳. 탭하면 등록된 코스를 검색합니다.","tap":"search","groups":[{"g":"명산 100 전체","items":[{"r":1,"n":"마니산","s":"인천 강화도","m":"472m","d":"인증 정상"},{"r":2,"n":"청계산","s":"서울 서초구","m":"582m","d":"인증 매봉"},{"r":3,"n":"수락산","s":"서울 노원구","m":"637m","d":"인증 주봉"},{"r":4,"n":"도봉산","s":"서울 강북구","m":"730m","d":"인증 신선대"},{"r":5,"n":"북한산","s":"경기 고양","m":"837m","d":"인증 백운대"},{"r":6,"n":"명지산","s":"경기 가평","m":"1267m","d":"인증 정상"},{"r":7,"n":"연인산","s":"경기 가평","m":"1068m","d":"인증 정상"},{"r":8,"n":"유명산","s":"경기 가평","m":"862m","d":"인증 정상"},{"r":9,"n":"용문산","s":"경기 양평","m":"1157m","d":"인증 정상"},{"r":10,"n":"화악산","s":"경기 가평","m":"1423m","d":"인증 중봉"},{"r":11,"n":"소요산","s":"경기 동두천","m":"587m","d":"인증 의상대"},{"r":12,"n":"관악산","s":"경기 과천","m":"629m","d":"인증 연주대"},{"r":13,"n":"운악산","s":"경기 가평","m":"937m","d":"인증 동봉/서봉"},{"r":14,"n":"감악산(파주)","s":"경기 파주","m":"675m","d":"인증 정상"},{"r":15,"n":"명성산","s":"경기 포천","m":"923m","d":"인증 정상"},{"r":16,"n":"가리산(홍천)","s":"강원 홍천","m":"1051m","d":"인증 정상"},{"r":17,"n":"계방산","s":"강원 평창","m":"1577m","d":"인증 정상"},{"r":18,"n":"오대산","s":"강원 강릉","m":"1338m","d":"인증 노인봉 오대산 - 노인봉"},{"r":19,"n":"오대산","s":"강원 강릉","m":"1563m","d":"인증 비로봉"},{"r":20,"n":"두타산","s":"강원 동해","m":"1353m","d":"인증 정상"},{"r":21,"n":"방태산","s":"강원 인제","m":"1444m","d":"인증 주억봉"},{"r":22,"n":"백덕산","s":"강원 영월","m":"1350m","d":"인증 정상"},{"r":23,"n":"백운산(동강)","s":"강원 정선","m":"882m","d":"인증 정상"},{"r":24,"n":"설악산","s":"강원 인제","m":"1708m","d":"인증 대청봉"},{"r":25,"n":"응봉산","s":"강원 삼척","m":"998m","d":"인증 정상"},{"r":26,"n":"치악산","s":"강원 원주","m":"1288m","d":"인증 비로봉"},{"r":27,"n":"태백산","s":"강원 정선","m":"1567m","d":"인증 천제단/장군봉"},{"r":28,"n":"함백산","s":"강원 태백","m":"1573m","d":"인증 정상"},{"r":29,"n":"태화산","s":"강원 영월","m":"1027m","d":"인증 정상"},{"r":30,"n":"가리왕산","s":"강원 정선","m":"1561m","d":"인증 정상"},{"r":31,"n":"감악산(원주)","s":"강원 원주","m":"930m","d":"인증 정상"},{"r":32,"n":"덕항산","s":"강원 삼척","m":"1071m","d":"인증 정상 (현재 정상석 없어짐)"},{"r":33,"n":"삼악산","s":"강원 춘천","m":"654m","d":"인증 용화봉"},{"r":34,"n":"용화산","s":"강원 화천","m":"878m","d":"인증 정상"},{"r":35,"n":"오봉산(춘천)","s":"강원 춘천","m":"779m","d":"인증 정상(5봉)"},{"r":36,"n":"팔봉산(홍천)","s":"강원 홍천","m":"327m","d":"인증 2봉"},{"r":37,"n":"가야산","s":"경남 합천","m":"1430m","d":"인증 우두봉"},{"r":38,"n":"가지산","s":"경남 영남알프스","m":"1240m","d":"인증 정상"},{"r":39,"n":"재약산","s":"경남 영남알프스","m":"1189m","d":"인증 재약산 수미봉"},{"r":40,"n":"신불산","s":"경남 영남알프스","m":"1209m","d":"인증 정상"},{"r":41,"n":"천성산","s":"경남 양산","m":"812m","d":"인증 1봉/2봉"},{"r":42,"n":"황매산","s":"경남 산청","m":"1108m","d":"인증 정상"},{"r":43,"n":"황석산","s":"경남 함양","m":"1192m","d":"인증 정상"},{"r":44,"n":"화왕산","s":"경남 창녕","m":"756m","d":"인증 정상"},{"r":45,"n":"대야산","s":"경북 문경","m":"930m","d":"인증 정상"},{"r":46,"n":"청화산","s":"경북 문경","m":"970m","d":"인증 정상"},{"r":47,"n":"금정산","s":"경남 양산","m":"801m","d":"인증 고당봉"},{"r":48,"n":"내연산","s":"경북 포항","m":"711m","d":"인증 삼지봉"},{"r":49,"n":"소백산","s":"경북 영주","m":"1439m","d":"인증 비로봉"},{"r":50,"n":"조령산","s":"경북 문경","m":"1026m","d":"인증 정상"},{"r":51,"n":"주흘산","s":"경북 문경","m":"1106m","d":"인증 영봉/주봉"},{"r":52,"n":"주왕산","s":"경북 청송","m":"722m","d":"인증 정상"},{"r":53,"n":"주흘산","s":"경북 봉화","m":"870m","d":"인증 정상"},{"r":54,"n":"황악산","s":"경북 김천","m":"1111m","d":"인증 비로봉"},{"r":55,"n":"칠보산","s":"경북 괴산","m":"778m","d":"인증 속리산"},{"r":56,"n":"금오산","s":"경북 구미","m":"976m","d":"인증 현월봉"},{"r":57,"n":"팔공산","s":"경북 군위","m":"1193m","d":"인증 비로봉"},{"r":58,"n":"남산(경주)","s":"경북 경주","m":"468m","d":"인증 금오봉"},{"r":59,"n":"비슬산","s":"대구","m":"1083m","d":"인증 천왕봉"},{"r":60,"n":"덕룡산","s":"전남 강진","m":"432m","d":"인증 동봉/서봉"},{"r":61,"n":"동악산(곡성)","s":"전남 곡성","m":"735m","d":"인증 정상"},{"r":62,"n":"무등산","s":"전남 화순","m":"1100m","d":"인증 서석대"},{"r":63,"n":"방장산","s":"전남 장성","m":"743m","d":"인증 정상"},{"r":64,"n":"백운산","s":"전남 광양","m":"1228m","d":"인증 상봉"},{"r":65,"n":"불갑산(영광)","s":"전남 영광","m":"516m","d":"인증 연실봉"},{"r":66,"n":"월출산","s":"전남 영암","m":"809m","d":"인증 천황봉"},{"r":67,"n":"조계산","s":"전남 순천","m":"884m","d":"인증 장군봉"},{"r":68,"n":"천관산","s":"전남 장흥","m":"723m","d":"인증 연대봉"},{"r":69,"n":"축령산(장성)","s":"전남 장성","m":"621m","d":"인증 정상"},{"r":70,"n":"팔영산","s":"전남 고흥","m":"608m","d":"인증 깃대봉"},{"r":71,"n":"반야봉(지리산)","s":"전남 지리산","m":"1732m","d":"인증 정상"},{"r":72,"n":"지리산","s":"전남 지리산","m":"1915m","d":"인증 천왕봉"},{"r":73,"n":"달마산","s":"전남 해남","m":"489m","d":"인증 달마봉"},{"r":74,"n":"두륜산","s":"전남 해남","m":"703m","d":"인증 가련봉"},{"r":75,"n":"바래봉","s":"전남 지리산","m":"1165m","d":"인증 정상"},{"r":76,"n":"백암산","s":"전남 장성","m":"741m","d":"인증 상왕봉"},{"r":77,"n":"내장산","s":"전북 장성","m":"763m","d":"인증 신선봉"},{"r":78,"n":"마이산","s":"전북 진안","m":"527m","d":"인증 암마이봉(동계 비룡대)"},{"r":79,"n":"변산","s":"전북 부안","m":"424m","d":"인증 관음봉"},{"r":80,"n":"구봉산","s":"전북 진안","m":"1002m","d":"인증 천황봉"},{"r":81,"n":"운장산","s":"전북 진안","m":"1122m","d":"인증 운장대"},{"r":82,"n":"장안산","s":"전북 장수","m":"1237m","d":"인증 정상"},{"r":83,"n":"모악산","s":"전북 완주","m":"793m","d":"인증 정상"},{"r":84,"n":"대둔산","s":"전북 완주","m":"878m","d":"인증 마천대"},{"r":85,"n":"덕유산","s":"전북 무주","m":"1614m","d":"인증 향적봉"},{"r":86,"n":"선운산","s":"정북 고창","m":"336m","d":"인증 수리봉"},{"r":87,"n":"가야산(충남)","s":"충남 서산","m":"678m","d":"인증 정상"},{"r":88,"n":"계룡산","s":"충남 공주","m":"816m","d":"인증 관음봉"},{"r":89,"n":"광덕산","s":"충남 천안","m":"699m","d":"인증 정상"},{"r":90,"n":"오서산","s":"충남 보령","m":"791m","d":"인증 정상"},{"r":91,"n":"용봉산","s":"충남 홍성","m":"381m","d":"인증 정상"},{"r":92,"n":"칠갑산","s":"충남 청양","m":"561m","d":"인증 정상"},{"r":93,"n":"민주지산","s":"충북 영동","m":"1241m","d":"인증 정상"},{"r":94,"n":"속리산","s":"충북 보은","m":"1058m","d":"인증 천왕봉"},{"r":95,"n":"월악산","s":"충북 제천","m":"1097m","d":"인증 영봉"},{"r":96,"n":"구병산","s":"충북 보은","m":"877m","d":"인증 정상"},{"r":97,"n":"천태산","s":"충북 영동","m":"714m","d":"인증 정상"},{"r":98,"n":"금수산","s":"충북 단양","m":"1016m","d":"인증 정상"},{"r":99,"n":"도락산","s":"충북 단양","m":"964m","d":"인증 정상"},{"r":100,"n":"한라산","s":"제주","m":"1950m","d":"인증 백록담"}]}]},"isl":{"t":"가고싶은 섬","ic":"fa-umbrella-beach","desc":"행정안전부 「찾아가고 싶은 섬」 테마별 59곳. 탭하면 섬 코스로 이동하거나 검색합니다.","tap":"island","groups":[{"g":"걷기 좋은 섬","items":[{"r":1,"n":"외달도","s":"목포시","m":"","d":"해안데크, 산책로, 해수풀장, 해수욕장"},{"r":2,"n":"연홍도","s":"고흥군","m":"","d":"마을벽화길, 해변포토존, 해안전망대, 마을미술관"},{"r":3,"n":"청산도","s":"완도군","m":"","d":"슬로우길(42.19km), 돌담길, 구들장논"},{"r":4,"n":"반월,박지도","s":"신안군","m":"","d":"퍼플교(안좌도‧반월도‧박지도 연결), 갯벌"},{"r":5,"n":"한산,추봉도","s":"통영시","m":"","d":"한산역사길, 일주도로변 꽃길, 등산길"},{"r":6,"n":"신수도","s":"사천시","m":"","d":"소나무 오솔길, 몽돌해수욕장, 캠핑장"},{"r":7,"n":"내도","s":"거제시","m":"","d":"동백나무 숲길, 몽돌해수욕장, 바람의 언덕"},{"r":8,"n":"이수도","s":"거제시","m":"","d":"산책로 및 전망대, 출렁다리, 관광‧숙박서비스(1식3찬)"},{"r":9,"n":"풍도","s":"안산","m":"","d":"풍도 둘레길"},{"r":10,"n":"삽시도","s":"보령시","m":"","d":"둘레길"},{"r":11,"n":"방축도","s":"군산시","m":"","d":"트래킹코스"},{"r":12,"n":"연홍도","s":"고흥군","m":"","d":"둘레길"},{"r":13,"n":"장도","s":"보성군","m":"","d":"뻘배길"},{"r":14,"n":"모도","s":"진도군","m":"","d":"신비의 바닷길"},{"r":15,"n":"소악도","s":"신안군","m":"","d":"12사도 예배당 순례길"},{"r":16,"n":"박지도","s":"신안군","m":"","d":"퍼플교(안좌도‧반월도‧박지도 연결), 갯벌"},{"r":17,"n":"사량도","s":"통영시","m":"","d":"지리산 옥녀봉 등산코스 고동산 둘레코스"}]},{"g":"풍경 좋은 섬","items":[{"r":18,"n":"위도","s":"부안","m":"","d":"위도상사화,해수욕장"},{"r":19,"n":"송이도","s":"영광","m":"","d":"몽돌해변,왕소사나무 군락지"},{"r":20,"n":"소안도","s":"완도군","m":"","d":"마라리 해수욕장,이목해양 생태공원"},{"r":21,"n":"임하도","s":"해남","m":"","d":"임하교,임하도 일몰"},{"r":22,"n":"자은도","s":"신안군","m":"","d":"무한의 다리,1004뮤지섬 파크"},{"r":23,"n":"병풍도","s":"신안군","m":"","d":"맨드라미 정원"},{"r":24,"n":"울릉도","s":"울릉군","m":"","d":"관음도 보행연도교,삼선암"},{"r":25,"n":"장사도","s":"통영시","m":"","d":"해상공원"},{"r":26,"n":"후도","s":"제주시","m":"","d":"우도8경"},{"r":27,"n":"덕적도","s":"옹진군","m":"","d":"서포리 해수욕장, 비조봉, 때뿌루 해변"},{"r":28,"n":"호도","s":"보령시","m":"","d":"호도 해수욕장, 바다 전망대, 청파초교 호도분교"},{"r":29,"n":"장자도","s":"군산시","m":"","d":"고군산군도 전망, 대장봉, 고군산군도 유람선 관광"},{"r":30,"n":"애도","s":"고흥군","m":"","d":"별정원, 꽃정원, 돌담길, 갈매기 카페"},{"r":31,"n":"생일도","s":"완도군","m":"","d":"금곡해수욕장, 멍때리기 좋은곳(너덜경)"},{"r":32,"n":"관매도","s":"진도군","m":"","d":"관매8경(관매해수욕장, 방아섬, 돌묘와 꽁돌 등)"},{"r":33,"n":"비진도","s":"통영시","m":"","d":"백사장 및 해송, 선유대, 등산로 및 전망대,몽돌해변"},{"r":34,"n":"연대,만지도","s":"통영시","m":"","d":"출렁다리, 몽돌해수욕장, 해안데크"},{"r":35,"n":"추자도","s":"제주시","m":"","d":"상추자항 포토존, 추자초교, 등대전망대"}]},{"g":"이야기 섬","items":[{"r":36,"n":"교동도","s":"강화군","m":"","d":"대흥시잔,교동향교"},{"r":37,"n":"가사도","s":"진도군","m":"","d":"가사5도 전설"},{"r":38,"n":"한산도","s":"통영시","m":"","d":"제승당,한산대첩 축제"},{"r":39,"n":"고대도","s":"보령시","m":"","d":"고대도 교회(최초 선교사 귀즐라프 기념)"},{"r":40,"n":"연화도","s":"통영시","m":"","d":"연화사, 보덕암, 출렁다리, 보도교"},{"r":41,"n":"지심도","s":"거제시","m":"","d":"일본군 포대, 산책로, 적산가옥"}]},{"g":"쉬기 좋은 섬","items":[{"r":42,"n":"죽도","s":"홍성","m":"","d":"대나무 숲 탐방로"},{"r":43,"n":"연화도","s":"통영시","m":"","d":"연화사 템플 스테이"},{"r":44,"n":"이수도","s":"거제시","m":"","d":"1박3식 숙박서비스,사슴 생태 둘레길"}]},{"g":"신비의 섬","items":[{"r":45,"n":"국화도","s":"화성시","m":"","d":"바닷길, 갯벌체험, 해돋이와 해넘이 조망"},{"r":46,"n":"소도","s":"보령시","m":"","d":"부교 선착장, 둘레길"},{"r":47,"n":"사도","s":"여수시","m":"","d":"바닷길, 공룡화석지, 양면해수욕장"},{"r":48,"n":"금당도","s":"완도군","m":"","d":"금당8경(교암청풍, 코끼리바위, 부채바위 등)"},{"r":49,"n":"우이도","s":"신안군","m":"","d":"돌담길, 해변바위, 염소방목 풍경"},{"r":50,"n":"울릉도","s":"울릉군","m":"","d":"일출전망대, 봉래폭포, 약수공원, 나리분지"}]},{"g":"체험의 섬","items":[{"r":51,"n":"선유도","s":"군산시","m":"","d":"해수욕장"},{"r":52,"n":"가우도","s":"강진군","m":"","d":"해상 짚트랙,제트보트"},{"r":53,"n":"석모도","s":"강화군","m":"","d":"미네랄 온천체험, 갯벌체험, 목공체험"},{"r":54,"n":"장도","s":"보성군","m":"","d":"갯벌탐방, 해상낚시"},{"r":55,"n":"가우도","s":"강진군","m":"","d":"짚트랙, 제트보트, 생태탐방로, 후박‧편백나무 군락지"},{"r":56,"n":"임자도","s":"신안군","m":"","d":"승마체험, 카약체험, 튤립축제"},{"r":57,"n":"증도","s":"신안군","m":"","d":"보물찾기 행사, 갯벌체험, 청소년 진로캠프"},{"r":58,"n":"소쿠리섬","s":"창원시","m":"","d":"짚트랙, 캠핑, 낚시, 바다체험"},{"r":59,"n":"욕지도","s":"통영시","m":"","d":"해상낚시체험, 다이빙체험, 출렁다리"}]}]},"wtrail":{"t":"세계의 트레일 명소","ic":"fa-person-hiking","desc":"세계 장거리 트레일 11곳 (원본 시트 기재분).","tap":null,"groups":[{"g":"트레일","items":[{"r":1,"n":"Copper Canyon Trail","s":"멕시코","m":"11월~3월 · 80km · 5~6일","d":"장엄한 캐넌","dd":"멕시코 치와와주 시에라마드레 옥시덴탈 산맥에 자리한 코퍼캐니언(바랑카스 델 코브레)은 여러 협곡이 이어진 거대한 협곡군으로, 전체 규모가 그랜드캐니언보다 크다. 장거리 달리기로 유명한 원주민 타라우마라(라라무리)족의 터전이며, 협곡을 가로지르는 엘 체페(El Chepe) 관광열차로도 잘 알려져 있다. 협곡 안팎을 잇는 트레일을 따라 원주민 마을과 계곡 풍경을 만난다.","tips":["건기인 11월~3월이 걷기에 적합하다. 여름은 우기이고 협곡 바닥은 매우 덥다.","협곡 안은 길 찾기가 어려워 현지 가이드 동행이 권장된다.","엘 체페 열차로 접근하며 크릴(Creel)이 주요 거점 마을이다."],"stats":[{"l":"거리","v":"약 80km"},{"l":"기간","v":"5~6일"},{"l":"추천 시기","v":"11월~3월"}],"ik":"copper canyon,mexico,sierra"},{"r":2,"n":"안나푸르나 서킷(Annapurna Circuit)","s":"","m":"","d":"","dd":"네팔 안나푸르나 산군을 한 바퀴 도는 히말라야 대표 장거리 트레킹이다. 아열대 계곡에서 고산 건조지대까지 고도에 따라 풍경이 계속 바뀌며, 최고점인 토롱라 패스(5,416m)를 넘는다. 시작·종료 지점과 우회 코스 선택에 따라 거리와 일정이 크게 달라진다.","tips":["ACAP 허가증과 TIMS 카드가 필요하다.","토롱라 통과 전 마낭 등지에서 고소적응일을 반드시 확보해야 한다.","10~11월과 3~4월이 날씨가 가장 안정적이다."],"stats":[{"l":"거리","v":"약 160~230km"},{"l":"기간","v":"12~18일"},{"l":"최고도","v":"5,416m(토롱라)"}],"ik":"annapurna,himalaya,nepal"},{"r":3,"n":"산티아고 순례길(Camino de Santiago)","s":"","m":"","d":"","dd":"스페인 산티아고 데 콤포스텔라 대성당으로 향하는 중세 순례길이다. 대표 루트인 프랑스길은 프랑스 생장피에드포르에서 출발해 피레네 산맥, 리오하 포도밭, 메세타 평원, 갈리시아 구릉을 차례로 지난다. 유네스코 세계유산으로 등재된 길 위에서 전 세계 순례자들과 함께 걷는다.","tips":["크레덴시알(순례자 여권)에 도장을 받으며 걷고, 마지막 100km 이상을 걸으면 완주증(콤포스텔라)을 받을 수 있다.","5~6월과 9월이 날씨와 혼잡도 면에서 무난하다.","알베르게(순례자 숙소)를 이용하면 숙박비 부담을 줄일 수 있다."],"stats":[{"l":"거리","v":"약 780km(프랑스길)"},{"l":"기간","v":"33~35일"},{"l":"추천 시기","v":"5~6월·9월"}],"ik":"camino de santiago,spain,pilgrimage"},{"r":4,"n":"밀포드 트랙(Milford Track)","s":"","m":"","d":"","dd":"뉴질랜드 피오르드랜드 국립공원의 대표 트레킹으로, 뉴질랜드 그레이트 워크 중 예약 경쟁이 가장 치열한 코스다. 클린턴 계곡을 거슬러 매키넌 패스를 넘어 밀포드 사운드까지 이어지며, 빙하가 깎은 U자 계곡과 폭포, 피오르 풍경이 이어진다. 하루 이동 구간과 산장이 정해져 있어 일정 전체가 통제된 형태로 운영된다.","tips":["성수기 시즌(10월 말~4월)의 DOC 산장은 예약 오픈 직후 매진되므로 오픈 일정을 미리 확인해야 한다.","연 강수량이 매우 많은 지역이라 방수 장비가 필수다.","역방향 진행이나 일정 변경이 불가능한 원웨이 코스다."],"stats":[{"l":"거리","v":"53.5km"},{"l":"기간","v":"4일"},{"l":"시즌","v":"10월 말~4월"}],"ik":"milford track,fiordland,new zealand"},{"r":5,"n":"규슈 올레(九州オルレ)","s":"","m":"","d":"","dd":"제주올레와 자매결연을 맺고 2012년 일본 규슈에 조성된 걷기길이다. 제주올레의 간세·리본 표식 체계를 그대로 사용하며, 온천 마을·해안·숲길 등 규슈 각지에 코스가 흩어져 있다. 코스당 10km 안팎이라 종주형 트레일이 아닌 하루 단위 걷기 여행에 적합하다.","tips":["한 코스가 4~5시간 정도라 대부분 당일에 완주할 수 있다.","벚꽃 피는 봄과 단풍 드는 가을이 걷기 좋다.","우레시노·벳푸 등 온천 지역 코스는 걷기 후 온천을 함께 즐길 수 있다."],"stats":[{"l":"코스당 거리","v":"약 10~12km"},{"l":"소요","v":"코스당 4~5시간"},{"l":"추천 시기","v":"봄·가을"}],"ik":"kyushu,japan,onsen"},{"r":6,"n":"영국 횡단(CTC Coast to Coast Walk)","s":"","m":"","d":"","dd":"알프레드 웨인라이트가 1973년 고안한 잉글랜드 횡단 도보길로, 서해안 세인트 비스에서 동해안 로빈 후즈 베이까지 약 309km(192마일)를 걷는다. 레이크 디스트릭트·요크셔 데일스·노스 요크 무어스 3개 국립공원을 관통하며, 국립 트레일(National Trail) 승격이 확정되어 정비가 진행 중이다.","tips":["12~14일 일정이 일반적이며, 편서풍을 등지는 서→동 방향 진행이 정석이다.","5~9월이 적기이나 레이크 디스트릭트 구간은 날씨 변덕에 대비해야 한다.","구간별 짐 이송 서비스를 이용하면 가벼운 배낭으로 걸을 수 있다."],"stats":[{"l":"거리","v":"약 309km"},{"l":"기간","v":"12~14일"},{"l":"추천 시기","v":"5~9월"}],"ik":"lake district,england,moorland"},{"r":7,"n":"파타고니아 트레일(Patagonia Trail","s":"","m":"","d":"","dd":"남미 대륙 남단 파타고니아의 대표 트레킹은 칠레 토레스 델 파이네 국립공원의 W트레킹이다. 화강암 첨봉 토레스, 프란세스 계곡, 그레이 빙하를 잇는 W자 형태의 길을 4~5일에 걷는다. 강풍으로 유명한 지역이라 한여름에도 날씨 대비가 관건이다.","tips":["트레킹 시즌은 10월~4월이며, 12~2월 성수기는 산장·캠프장 예약이 일찍 마감된다.","하루에 사계절 날씨가 모두 나타날 수 있어 방풍·방수 레이어가 필수다."],"stats":[{"l":"거리","v":"약 75~80km(W코스)"},{"l":"기간","v":"4~5일"},{"l":"시즌","v":"10월~4월"}],"ik":"torres del paine,patagonia,glacier"},{"r":8,"n":"잉카 트레일(Inca Trail)","s":"","m":"","d":"","dd":"페루 쿠스코 인근에서 마추픽추까지 잉카 제국의 옛 돌길을 따라 걷는 트레킹이다. 안데스 고개와 운무림, 여러 잉카 유적지를 차례로 지나 마지막 날 태양의 문(인티푼쿠)을 통해 마추픽추로 들어선다. 하루 입장 인원이 엄격히 제한되어 세계에서 가장 예약이 어려운 트레일 중 하나다.","tips":["퍼밋은 1일 500명(실제 트레커는 약 200명)으로 제한되어 수개월 전 예약이 필수다.","매년 2월은 정비를 위해 전면 폐쇄된다.","최고점 '죽은 여인의 고개'(약 4,215m)에 대비해 쿠스코에서 고소적응을 하는 것이 좋다."],"stats":[{"l":"거리","v":"약 43km"},{"l":"기간","v":"4일"},{"l":"퍼밋","v":"1일 500명 제한"}],"ik":"machu picchu,inca,andes"},{"r":9,"n":"몽블랑 둘레길(Tour de Mont Blanc)","s":"","m":"","d":"","dd":"몽블랑 산군을 프랑스·이탈리아·스위스 3개국에 걸쳐 한 바퀴 도는 알프스 대표 트레킹이다. 누적 오르막이 약 10,000m에 달해 매일 고개를 오르내리며, 샤모니·쿠르마예 같은 산악 마을과 산장(리퓨지)을 이어 걷는다. 알프스 산장 문화와 빙하 전망을 함께 누리는 코스다.","tips":["산장이 운영되는 6월 중순~9월 중순이 적기이며, 성수기 산장은 수개월 전 예약이 필요하다.","샤모니 인근에서 출발하는 반시계 방향이 전통적인 진행 방향이다.","매일 700~1,000m 수준의 오르내림이 반복되므로 체력 배분이 중요하다."],"stats":[{"l":"거리","v":"약 170km"},{"l":"기간","v":"10~12일"},{"l":"누적 오르막","v":"약 10,000m"}],"ik":"mont blanc,alps,chamonix"},{"r":10,"n":"위클로 웨이(Wicklow Way)","s":"","m":"","d":"","dd":"아일랜드에서 가장 오래된 장거리 도보길로, 더블린 남부 말레이 파크에서 위클로 산지를 지나 칼로우주 클로네갈까지 이어진다. '기네스 호수'로 불리는 러프 테이와 초기 기독교 수도원 유적지 글렌달록이 대표 볼거리다. 완만한 산지와 목초지, 숲길이 이어져 난이도는 중급 수준이다.","tips":["날씨와 숙소 운영을 고려하면 4~9월이 적기다.","구간에 따라 숙소가 드물어 B&B 사전 예약이나 짐 이송 서비스 활용이 좋다."],"stats":[{"l":"거리","v":"약 127km"},{"l":"기간","v":"6~8일"},{"l":"추천 시기","v":"4~9월"}],"ik":"wicklow,ireland,glendalough"},{"r":11,"n":"차마고도 호도협(茶馬古道 虎跳峽)","s":"","m":"","d":"","dd":"중국 윈난성에서 진사강이 위룽설산과 하바설산 사이를 깎아 만든 세계적 깊이의 협곡으로, 옛 차마고도 교역로의 일부다. 협곡 위쪽 능선을 따라가는 하이트레일을 1박 2일에 걷는 코스가 일반적이며, 28밴드(28굽이) 오르막과 설산·협곡 전망이 핵심이다. 리장에서 차로 2시간 거리라 접근성이 좋다.","tips":["첫날 28밴드 구간에서 약 800m를 올려야 하므로 오전에 출발하는 것이 좋다.","우기(여름)는 낙석·산사태 위험이 있어 10~11월과 4~5월 건기가 낫다.","구간마다 게스트하우스가 있어 숙박과 식사를 해결하기 편하다."],"stats":[{"l":"거리","v":"약 20~22km(하이트레일)"},{"l":"기간","v":"1박 2일"},{"l":"추천 시기","v":"10~11월·4~5월"}],"ik":"tiger leaping gorge,yunnan,china"}]}]},"golf":{"t":"세계·한국 골프장 순위","ic":"fa-golf-ball-tee","desc":"세계 골프장 100 + 한국 TOP 50.","tap":null,"groups":[{"g":"세계 골프장 100","items":[{"r":1,"n":"파인밸리Pine Valley","s":"미국 뉴저지","m":"","d":"","dd":"아마추어 골퍼 조지 크럼프가 해리 콜트 등 당대 설계가들의 자문을 받아 뉴저지 소나무 숲 모래땅에 만든 코스다. 홀마다 페어웨이가 섬처럼 떠 있고 그 사이를 거대한 모래 황무지가 가르는 구성으로, 세계에서 가장 어려운 코스로 자주 꼽힌다. 골프매거진·골프다이제스트 세계 랭킹 1위에 가장 오래 머문 코스이며, 매년 아마추어 대회인 크럼프컵이 열린다.","tips":["극도로 폐쇄적인 프라이빗 클럽으로 회원 동반 없이는 라운드가 불가능하다.","크럼프컵 등 클럽 대회 기간에 한해 외부 관람이 허용된 사례가 있다."],"stats":[{"l":"설계","v":"조지 크럼프·해리 콜트"},{"l":"코스유형","v":"샌디 파인랜드(숲·황무지)"},{"l":"대표대회","v":"크럼프컵(아마추어)"}],"ik":"pine valley,golf course,forest"},{"r":2,"n":"사이프러스포인트Cypress Poin","s":"미국 캘리포니아","m":"","d":"","dd":"앨리스터 매켄지가 1928년 몬터레이 반도 끝자락에 완성한 코스로, 숲·모래언덕·태평양 절벽이 18홀 안에 모두 담겨 있다. 바다를 가로질러 치는 파3 16번홀은 세계에서 가장 유명한 홀 중 하나로 꼽힌다. 1990년까지 AT&T 페블비치 프로암 로테이션에 포함됐던 초프라이빗 클럽이다.","tips":["회원 수가 매우 적은 프라이빗 클럽으로 회원 초청 없이는 플레이할 수 없다.","인접한 17마일 드라이브에서 코스 일부 풍경을 볼 수 있다."],"stats":[{"l":"설계","v":"앨리스터 매켄지"},{"l":"개장","v":"1928년"},{"l":"코스유형","v":"해안 절벽·듄스"}],"ik":"cypress point,monterey,ocean golf"},{"r":3,"n":"세인트앤드루스St. Andrews(올드 코스)","s":"스코틀랜드","m":"","d":"","dd":"'골프의 고향'으로 불리는 세계에서 가장 오래된 골프 코스다. 특정 설계자 없이 수백 년에 걸쳐 자연스럽게 형성된 링크스로, 더블 그린과 스윌컨 브리지, 헬 벙커 등 골프사의 상징이 모여 있다. 디오픈을 통산 30회 개최해 최다 기록을 갖고 있으며 2027년 31번째 개최가 예정돼 있다.","tips":["퍼블릭 코스로 누구나 플레이할 수 있으며, 티타임은 발롯(추첨) 신청이 일반적이다.","일요일에는 코스를 닫고 마을 산책로로 개방한다."],"stats":[{"l":"코스유형","v":"링크스"},{"l":"대표대회","v":"디오픈 30회(최다)"},{"l":"운영","v":"퍼블릭(발롯 추첨)"}],"ik":"st andrews,old course,links"},{"r":4,"n":"시네콕힐스Shinnecock Hills, 미국 뉴욕","s":"미국 뉴욕","m":"","d":"","dd":"1891년 설립된 미국에서 가장 오래된 정식 골프클럽 중 하나로, 롱아일랜드 사우샘프턴의 바람 부는 구릉에 자리한다. 현재 코스는 윌리엄 플린이 1931년 재설계한 것으로 링크스 성격이 강하다. US오픈을 1896년부터 2026년까지 여섯 차례 개최했으며, 2026년 대회에서는 윈덤 클라크가 우승했다.","tips":["프라이빗 클럽으로 회원 동반 없이는 라운드가 불가능하다."],"stats":[{"l":"설계","v":"윌리엄 플린(1931 재설계)"},{"l":"코스유형","v":"링크스 스타일"},{"l":"대표대회","v":"US오픈 6회(최근 2026)"}],"ik":"shinnecock hills,golf,links"},{"r":5,"n":"내셔널골프링크스오브아메리카National Golf Links of America","s":"미국 뉴욕","m":"","d":"","dd":"'미국 골프코스 설계의 아버지' 찰스 블레어 맥도널드가 영국 명홀들을 연구해 1911년 완성한 코스다. 레단·비아리츠 등 이른바 템플릿 홀 개념을 미국에 이식한 원형으로 평가된다. 1922년 제1회 워커컵이 열렸고 2013년에도 워커컵을 개최했다.","tips":["프라이빗 클럽으로 회원 초청이 있어야 플레이할 수 있다."],"stats":[{"l":"설계","v":"C.B. 맥도널드"},{"l":"개장","v":"1911년"},{"l":"대표대회","v":"워커컵(1922 초대·2013)"}],"ik":"national golf links,southampton,links"},{"r":6,"n":"로열카운티다운Royal County Down","s":"북아일랜드 뉴캐슬","m":"","d":"","dd":"1889년 창립된 북아일랜드의 링크스로, 슬리브 도나드 산과 던드럼 만을 배경으로 한 경관으로 유명하다. 초기 레이아웃에 올드 톰 모리스가 관여했고, 수염처럼 풀이 자란 벙커와 블라인드 샷이 코스의 성격을 규정한다. 아이리시 오픈 등 유러피언투어 대회를 여러 차례 개최했다.","tips":["회원제 클럽이지만 요일별로 방문객 라운드를 받는다. 사전 예약이 필수다."],"stats":[{"l":"창립","v":"1889년"},{"l":"코스유형","v":"링크스"},{"l":"대표대회","v":"아이리시 오픈"}],"ik":"royal county down,links,mourne mountains"},{"r":7,"n":"로열멜버른Royal Melbourne(웨스트)","s":"호주 블랙록","m":"","d":"","dd":"앨리스터 매켄지가 1926년 설계한 호주 샌드벨트의 대표 코스로, 남반구 최고 코스로 꼽힌다. 그린과 벙커가 한 몸처럼 붙은 과감한 벙커링과 빠르고 단단한 그린이 특징이다. 웨스트와 이스트를 조합한 컴포지트 코스로 프레지던츠컵을 1998·2011·2019년 세 차례 개최했다.","tips":["회원제 클럽으로, 해외 골퍼는 소속 클럽 소개장 등 절차를 거쳐 제한적으로 방문 라운드가 가능하다."],"stats":[{"l":"설계","v":"앨리스터 매켄지"},{"l":"코스유형","v":"샌드벨트"},{"l":"대표대회","v":"프레지던츠컵 3회"}],"ik":"royal melbourne,sandbelt,golf"},{"r":8,"n":"오크몬트Oakmont","s":"미국 펜실베이니아","m":"","d":"","dd":"헨리 파운스가 1903년 만든 이후 큰 틀이 유지된 미국의 대표적 챔피언십 코스다. '처치 퓨'로 불리는 이랑형 벙커와 세계에서 가장 빠르다고 평가받는 그린으로 악명이 높다. US오픈을 최다인 10회 개최했으며, 2025년 대회에서 J.J. 스폰이 우승했다. USGA 앵커 사이트로 2033년 이후에도 개최가 예정돼 있다.","tips":["프라이빗 클럽으로 회원 동반 없이는 라운드가 불가능하다."],"stats":[{"l":"설계","v":"헨리 파운스"},{"l":"개장","v":"1903년"},{"l":"대표대회","v":"US오픈 10회(최다)"}],"ik":"oakmont,church pews,golf"},{"r":9,"n":"오거스타내셔널Augusta National,","s":"미국 조지아","m":"","d":"","dd":"보비 존스와 앨리스터 매켄지가 조지아의 옛 묘목장 부지에 만들어 1933년 개장한 코스다. 1934년부터 매년 마스터스 토너먼트가 열리는 유일한 메이저 고정 개최지로, 아멘 코너(11~13번홀)와 유리알 그린으로 유명하다. 아젤리아 등 홀마다 꽃 이름이 붙어 있다.","tips":["초청 기반의 극소수 회원제 클럽으로 일반 라운드는 불가능하다.","관람은 마스터스 입장권 추첨(패트론 신청)을 통해서만 가능하다."],"stats":[{"l":"설계","v":"매켄지·보비 존스"},{"l":"개장","v":"1933년"},{"l":"대표대회","v":"마스터스(1934~ 매년)"}],"ik":"augusta national,masters,azalea"},{"r":10,"n":"샌드힐스Sand Hills","s":"미국 네바다","m":"","d":"","dd":"빌 쿠어와 벤 크렌쇼가 네브래스카 대초원의 광대한 모래언덕 지대에 1995년 완성한 코스다. 땅을 거의 깎지 않고 자연 지형에서 홀을 '발견'해내는 미니멀리즘 설계의 출발점으로 평가되며, 이후 밴던 듄스 등 데스티네이션 골프 붐에 큰 영향을 줬다.","tips":["프라이빗 클럽이며 대도시에서 멀리 떨어진 오지에 있어 회원 초청 없이는 접근이 어렵다."],"stats":[{"l":"설계","v":"쿠어&크렌쇼"},{"l":"개장","v":"1995년"},{"l":"코스유형","v":"내륙 듄스(미니멀리즘)"}],"ik":"sand hills,nebraska,dunes golf"},{"r":11,"n":"뮤어필드Muirfield","s":"스코틀랜드 이스트로디언","m":"","d":"","dd":"1744년 창립돼 세계에서 가장 오래된 골프클럽으로 꼽히는 '디 아너러블 컴퍼니 오브 에든버러 골퍼스'의 홈 코스다. 현재 코스는 1891년 올드 톰 모리스가 설계했으며, 전반 9홀과 후반 9홀이 서로 반대 방향으로 도는 이중 루프 구조로 바람 방향이 계속 바뀐다. 디오픈을 16회 개최했고 2013년 필 미컬슨이 이곳에서 우승했다.","tips":["회원제 클럽이지만 지정 요일(화·목 중심)에 방문객 라운드를 받는다. 사전 예약 필수."],"stats":[{"l":"설계","v":"올드 톰 모리스(1891)"},{"l":"코스유형","v":"링크스"},{"l":"대표대회","v":"디오픈 16회"}],"ik":"muirfield,scotland,links"},{"r":12,"n":"로열도노크Royal Dornoch","s":"스코틀랜드 도노크","m":"","d":"","dd":"스코틀랜드 하이랜드 북부의 외딴 해안에 자리한 링크스로, 클럽은 1877년 창립됐고 올드 톰 모리스가 코스 확장에 관여했다. 파인허스트를 만든 도널드 로스가 이곳 출신으로, 그의 설계 철학의 뿌리로 불린다. 접근성이 낮아 큰 대회는 드물지만 세계 랭킹 상위에 꾸준히 오른다.","tips":["방문객을 환영하는 회원제 클럽으로 예약하면 누구나 라운드할 수 있다.","인버네스에서 차로 약 1시간 거리로, 백야에 가까운 여름 저녁 라운드가 인기다."],"stats":[{"l":"창립","v":"1877년"},{"l":"코스유형","v":"링크스"}],"ik":"royal dornoch,highland,links"},{"r":13,"n":"메리온Merion(이스트)","s":"미국 펜실베이니아","m":"","d":"","dd":"휴 윌슨이 설계해 1912년 개장한 필라델피아 교외의 코스로, 깃발 대신 버드나무 바구니(위커 바스켓)를 핀 꼭대기에 다는 전통으로 유명하다. 1930년 보비 존스가 이곳 US아마추어에서 우승하며 그랜드슬램을 완성했다. US오픈을 다섯 차례 개최했고(2013년 저스틴 로즈 우승) 2030년 개최가 예정돼 있다.","tips":["프라이빗 클럽으로 회원 동반 없이는 라운드가 불가능하다."],"stats":[{"l":"설계","v":"휴 윌슨"},{"l":"개장","v":"1912년"},{"l":"대표대회","v":"US오픈 5회(2030 예정)"}],"ik":"merion golf,wicker basket,fairway"},{"r":14,"n":"페블비치Pebble Beach","s":"미국 캘리포니아","m":"","d":"","dd":"잭 네빌과 더글러스 그랜트가 설계해 1919년 개장한 몬터레이 반도의 해안 코스로, 누구나 플레이할 수 있는 퍼블릭 코스 중 세계 최고로 꼽힌다. 태평양 절벽 위 7번·8번·18번홀이 상징이다. US오픈을 여섯 차례 개최했고 매년 PGA투어 AT&T 페블비치 프로암이 열린다.","tips":["퍼블릭 리조트 코스지만 그린피가 매우 높고, 리조트 투숙객에게 예약 우선권이 있다."],"stats":[{"l":"설계","v":"잭 네빌·더글러스 그랜트"},{"l":"개장","v":"1919년"},{"l":"대표대회","v":"US오픈 6회·AT&T 프로암"}],"ik":"pebble beach,ocean,california golf"},{"r":15,"n":"로열포트러시Royal Portrush(던루스)","s":"북아일랜드 포트러시","m":"","d":"","dd":"북아일랜드 북해안 절벽 위의 링크스로, 현재의 던루스 코스는 해리 콜트가 1929년 완성했다. 1951년 브리튼 섬 밖에서 처음으로 디오픈을 개최했고, 2019년 68년 만에 디오픈이 돌아온 데 이어 2025년 대회에서는 스코티 셰플러가 우승했다. '캘러미티 코너'로 불리는 파3 16번홀이 유명하다.","tips":["회원제 클럽이지만 방문객 라운드를 받는다. 디오픈 이후 수요가 많아 조기 예약이 필요하다."],"stats":[{"l":"설계","v":"해리 콜트(1929)"},{"l":"코스유형","v":"링크스"},{"l":"대표대회","v":"디오픈(1951·2019·2025)"}],"ik":"royal portrush,dunluce,links"},{"r":16,"n":"피셔스아일랜드Fishers Island","s":"미국 뉴욕","m":"","d":"","dd":"롱아일랜드 해협의 작은 섬에 세스 레이너가 설계해 1926년 개장한 코스다. 레단·비아리츠 등 템플릿 홀이 바다 전망과 결합된 레이너 설계의 정수로 평가된다. 대회 개최가 거의 없는 은둔형 클럽이지만 미국 코스 랭킹 상위권에 꾸준히 이름을 올린다.","tips":["극도로 프라이빗한 클럽으로, 섬 자체가 페리로만 접근 가능해 외부인 방문이 어렵다."],"stats":[{"l":"설계","v":"세스 레이너"},{"l":"개장","v":"1926년"},{"l":"코스유형","v":"시사이드(템플릿 홀)"}],"ik":"fishers island,seaside golf,new england"},{"r":17,"n":"파인허스트Pinehurst(No.2),","s":"미국 노스캐롤라이나","m":"","d":"","dd":"도널드 로스가 1907년 완성하고 평생 다듬은 대표작으로, 노스캐롤라이나 샌드힐스의 리조트 코스다. 가장자리가 바깥으로 흘러내리는 돔형(거북등) 그린이 상징이며, 2011년 쿠어&크렌쇼가 모래 황무지를 되살리는 복원을 했다. US오픈 앵커 사이트로 2014년과 2024년(브라이슨 드셰임보 우승) 대회를 열었다.","tips":["파인허스트 리조트 소속의 퍼블릭 코스로 누구나 예약해 플레이할 수 있다. 리조트 투숙 패키지가 일반적이다."],"stats":[{"l":"설계","v":"도널드 로스"},{"l":"개장","v":"1907년"},{"l":"대표대회","v":"US오픈(2014·2024 등)"}],"ik":"pinehurst,north carolina,golf resort"},{"r":18,"n":"트럼프턴베리Trump Turnberry(아일사)","s":"스코틀랜드 턴베리","m":"","d":"","dd":"스코틀랜드 서해안 등대와 아일사 크레이그 바위섬을 배경으로 한 링크스 리조트 코스다. 1977년 톰 왓슨과 잭 니클라우스가 마지막 날까지 맞붙은 '듀얼 인 더 선'의 무대로, 디오픈을 네 차례(1977·1986·1994·2009) 개최했다. 2014년 트럼프 그룹이 인수한 뒤 마틴 이버트의 리노베이션을 거쳤다.","tips":["리조트 퍼블릭 코스로 예약하면 누구나 플레이할 수 있다. 그린피는 성수기에 매우 높다."],"stats":[{"l":"코스유형","v":"링크스"},{"l":"대표대회","v":"디오픈 4회"},{"l":"운영","v":"리조트 퍼블릭"}],"ik":"turnberry,lighthouse,scotland links"},{"r":19,"n":"시카고Chicago","s":"미국 일리노이","m":"","d":"","dd":"C.B. 맥도널드가 만든 미국 최초의 18홀 코스를 기원으로 하는 클럽으로, 1894년 USGA를 창립한 5개 클럽 중 하나다. 현재 코스는 세스 레이너가 1923년 재설계한 것으로 템플릿 홀 설계의 교과서로 꼽힌다. US오픈 3회, 워커컵 등을 개최했다.","tips":["회원 수가 적은 초프라이빗 클럽으로 회원 초청 없이는 플레이할 수 없다."],"stats":[{"l":"설계","v":"C.B. 맥도널드·세스 레이너(1923)"},{"l":"대표대회","v":"US오픈 3회·워커컵"},{"l":"특징","v":"미국 최초 18홀 코스"}],"ik":"chicago golf club,prairie,classic golf"},{"r":20,"n":"로스앤젤레스Los Angeles(노스)","s":"미국 캘리포니아","m":"","d":"","dd":"조지 C. 토머스가 1928년 완성한 코스로, 베벌리힐스 인근 도심 한복판의 협곡 지형을 활용했다. 오랫동안 대회를 열지 않다가 길 핸스의 복원(2010) 이후 2017년 워커컵, 2023년 US오픈(윈덤 클라크 우승)을 개최했다. 전략적 벙커 배치와 바랑카(건천)가 특징이다.","tips":["프라이빗 클럽으로 회원 동반 없이는 라운드가 불가능하다."],"stats":[{"l":"설계","v":"조지 C. 토머스"},{"l":"개장","v":"1928년"},{"l":"대표대회","v":"US오픈 2023"}],"ik":"los angeles country club,golf,canyon"},{"r":21,"n":"프라이어스헤드Friar's Head","s":"미국 뉴욕","m":"","d":"","dd":"빌 쿠어와 벤 크렌쇼가 롱아일랜드 북쪽 해안의 모래언덕과 감자밭 지형을 엮어 2000년대 초 완성한 코스다. 거대한 듄스 위 홀과 평지 홀이 자연스럽게 이어지도록 1년 넘게 루팅을 고민한 것으로 알려져 있으며, 현대 미국 코스 중 최상위권으로 평가받는다.","tips":["프라이빗 클럽으로 회원 초청이 필요하며, 라운드 시 캐디 동반이 원칙이다."],"stats":[{"l":"설계","v":"쿠어&크렌쇼"},{"l":"코스유형","v":"듄스·파크랜드 혼합"}],"ik":"friars head,long island,dunes"},{"r":22,"n":"킹스턴히스Kingston Heath","s":"호주 첼트넘","m":"","d":"","dd":"댄 수타가 설계해 1925년 개장한 멜버른 샌드벨트의 코스로, 1926년 방문한 앨리스터 매켄지가 벙커링 계획과 명물 파3 15번홀을 남겼다. 좁은 부지를 정교한 루팅으로 풀어낸 설계로 로열멜버른과 함께 샌드벨트 양대 코스로 꼽힌다. 호주오픈을 일곱 차례 개최했다.","tips":["회원제 클럽이며, 해외 골퍼는 소속 클럽 증빙 등을 갖춰 제한적으로 방문 라운드를 신청할 수 있다."],"stats":[{"l":"설계","v":"댄 수타(벙커링 매켄지)"},{"l":"개장","v":"1925년"},{"l":"대표대회","v":"호주오픈 7회"}],"ik":"kingston heath,sandbelt,bunker"},{"r":23,"n":"타라이티Tara Iti","s":"뉴질랜드 테아라이","m":"","d":"","dd":"톰 도크가 뉴질랜드 북섬 테아라이 해변의 옛 소나무 조림지를 걷어내고 2015년 완성한 링크스다. 전 홀에서 바다가 보이고 티부터 그린까지 페스큐 잔디로 덮여 있으며, 정식 벙커 없이 자연 모래 지대가 그 역할을 한다. 개장 직후 세계 100대 코스 상위권에 진입했다.","tips":["회원제 프라이빗 클럽으로 현재 외부 플레이를 받지 않는다.","인근에 같은 개발진이 만든 퍼블릭 코스 테아라이 링크스(Te Arai Links)가 있다."],"stats":[{"l":"설계","v":"톰 도크"},{"l":"개장","v":"2015년"},{"l":"코스유형","v":"링크스"}],"ik":"tara iti,new zealand,links beach"},{"r":24,"n":"밸리뷰니언Ballybunion(올드)","s":"아일랜드 밸리뷰니언","m":"","d":"","dd":"아일랜드 케리주 대서양 연안의 거대한 모래언덕 사이에 놓인 링크스로, 클럽은 1893년 창립됐고 1930년대 톰 심프슨의 개보수를 거쳤다. 톰 왓슨이 세계 최고 링크스 중 하나로 꼽으며 국제적 명성을 얻었다. 절벽과 듄스를 넘나드는 후반 홀들이 백미로 평가된다.","tips":["방문객 라운드가 가능한 회원제 클럽이다. 여름 성수기에는 수개월 전 예약이 필요하다."],"stats":[{"l":"창립","v":"1893년"},{"l":"코스유형","v":"링크스"}],"ik":"ballybunion,ireland,links dunes"},{"r":25,"n":"윙드풋Winged Foot(웨스트)","s":"미국 뉴욕","m":"","d":"","dd":"A.W. 틸링허스트가 설계해 1923년 개장한 뉴욕 교외의 파크랜드 코스로, 깊은 벙커에 둘러싸인 어렵고 경사진 그린이 특징이다. US오픈을 여섯 차례 개최했으며 1974년 대회는 '매서커(대학살)'로 불릴 만큼 어려웠다. 2020년 US오픈에서는 브라이슨 드셰임보가 우승했다.","tips":["프라이빗 클럽으로 회원 동반 없이는 라운드가 불가능하다."],"stats":[{"l":"설계","v":"A.W. 틸링허스트"},{"l":"개장","v":"1923년"},{"l":"대표대회","v":"US오픈 6회"}],"ik":"winged foot,golf,parkland"},{"r":26,"n":"프레리듄스Prairie Dunes","s":"미국 캔자스","m":"","d":"","dd":"페리 맥스웰이 캔자스 내륙의 모래언덕 지대에 1937년 9홀로 개장했고, 아들 프레스 맥스웰이 1957년 18홀로 완성했다. 바다 없이도 스코틀랜드 링크스의 성격을 재현했다는 평가를 받으며, US여자오픈(2002)과 US시니어오픈 등 USGA 대회를 여러 차례 개최했다.","tips":["프라이빗 클럽으로 회원 초청이 필요하다."],"stats":[{"l":"설계","v":"페리·프레스 맥스웰"},{"l":"개장","v":"1937년(1957 완성)"},{"l":"코스유형","v":"내륙 링크스"}],"ik":"prairie dunes,kansas,inland links"},{"r":27,"n":"리비에라Riviera","s":"미국 캘리포니아","m":"","d":"","dd":"조지 C. 토머스가 1926년 완성한 로스앤젤레스 퍼시픽 팰리세이즈의 코스로, 그린 한가운데 벙커가 있는 파3 6번홀 등 전략적 설계로 유명하다. 벤 호건이 1947·1948년 LA오픈과 1948년 US오픈을 연달아 우승해 '호건스 앨리'로 불린다. 매년 PGA투어 제네시스 인비테이셔널이 열리며 2028년 LA올림픽 골프 개최지로 지정됐다.","tips":["프라이빗 클럽으로 일반 라운드는 불가능하다. 제네시스 인비테이셔널 기간에 관람할 수 있다."],"stats":[{"l":"설계","v":"조지 C. 토머스"},{"l":"개장","v":"1926년"},{"l":"대표대회","v":"제네시스 인비테이셔널"}],"ik":"riviera country club,los angeles,eucalyptus"},{"r":28,"n":"퍼시픽듄스Pacific Dunes","s":"미국 오리건","m":"","d":"","dd":"톰 도크가 오리건 해안 절벽과 듄스에 2001년 완성한 밴던 듄스 리조트의 두 번째 코스다. 파3가 연속되는 비정형 루팅과 자연 그대로의 블로우아웃 벙커로 개장 직후부터 미국 퍼블릭 코스 랭킹 최상위에 올랐다. 걸어서만 플레이하는 리조트 원칙이 적용된다.","tips":["퍼블릭 리조트 코스로 누구나 예약할 수 있다. 카트 없이 도보 플레이가 원칙이며 캐디를 고용할 수 있다."],"stats":[{"l":"설계","v":"톰 도크"},{"l":"개장","v":"2001년"},{"l":"코스유형","v":"링크스(해안 절벽)"}],"ik":"pacific dunes,bandon,oregon coast"},{"r":29,"n":"크리스털다운스Crystal Downs","s":"미국 미시간","m":"","d":"","dd":"앨리스터 매켄지와 페리 맥스웰이 미시간호와 크리스털호 사이 구릉지에 1929년 설계한 코스다. 짧은 전장에도 굴곡이 심한 그린과 페스큐 러프로 난도를 만드는 설계로, 매켄지의 미국 내 숨은 걸작으로 평가된다. 대회 개최가 드물어 오랫동안 외부에 덜 알려져 있었다.","tips":["프라이빗 클럽으로 회원 초청이 필요하다."],"stats":[{"l":"설계","v":"매켄지·페리 맥스웰"},{"l":"개장","v":"1929년"},{"l":"코스유형","v":"내륙 구릉(호반)"}],"ik":"crystal downs,michigan,golf hills"},{"r":30,"n":"서닝데일Sunningdale(올드)","s":"잉글랜드 서닝데일","m":"","d":"","dd":"윌리 파크 주니어가 설계해 1901년 개장한 런던 근교 히스랜드 코스의 원조 격이다. 헤더와 소나무·자작나무 숲 사이로 홀이 이어지며, 이후 해리 콜트가 코스를 다듬었다. 시니어 오픈과 위민스 브리티시 오픈 등 프로 대회를 여러 차례 개최했다.","tips":["회원제 클럽이지만 주중 지정 요일에 방문객 라운드를 받는다. 사전 예약과 핸디캡 증빙이 필요하다."],"stats":[{"l":"설계","v":"윌리 파크 주니어"},{"l":"개장","v":"1901년"},{"l":"코스유형","v":"히스랜드"}],"ik":"sunningdale,heathland,england golf"},{"r":31,"n":"오클랜드힐스Oakland Hills(사우스)","s":"미국 미시간","m":"","d":"","dd":"도널드 로스가 설계해 1918년 개장한 디트로이트 교외의 챔피언십 코스다. 1951년 US오픈에서 벤 호건이 우승 후 '몬스터를 굴복시켰다'고 말해 '몬스터'라는 별명을 얻었다. US오픈 6회, PGA챔피언십 3회, 2004년 라이더컵을 개최했고, 길 핸스의 복원(2021)을 거쳐 2034·2051년 US오픈 개최가 예정돼 있다.","tips":["프라이빗 클럽으로 회원 동반 없이는 라운드가 불가능하다."],"stats":[{"l":"설계","v":"도널드 로스"},{"l":"개장","v":"1918년"},{"l":"대표대회","v":"US오픈 6회·라이더컵 2004"}],"ik":"oakland hills,monster,golf"},{"r":32,"n":"세미뇰Seminole","s":"미국 플로리다","m":"","d":"","dd":"도널드 로스가 플로리다 주노비치 해안의 두 모래 능선 사이에 1929년 완성한 코스다. 대서양 해풍이 매일 방향을 바꿔 같은 코스가 다르게 플레이되며, 벤 호건이 마스터스를 앞두고 이곳에서 훈련한 일화로 유명하다. 2021년 워커컵을 개최했다.","tips":["극도로 프라이빗한 클럽으로 회원 초청 없이는 플레이할 수 없다."],"stats":[{"l":"설계","v":"도널드 로스"},{"l":"개장","v":"1929년"},{"l":"대표대회","v":"워커컵 2021"}],"ik":"seminole golf,florida,palm"},{"r":33,"n":"로열세인트조지스Royal St. George's,","s":"잉글랜드 샌드위치","m":"","d":"","dd":"레이드로 퍼브스가 1887년 켄트 샌드위치 해안의 듄스에 만든 링크스다. 1894년 잉글랜드 코스로는 처음으로 디오픈을 개최했고, 통산 15회 개최로 잉글랜드 최다 기록을 갖고 있다. 2021년 대회에서는 콜린 모리카와가 우승했다. 영국에서 가장 깊은 벙커로 알려진 4번홀 벙커가 명물이다.","tips":["회원제 클럽이지만 주중에 방문객 라운드를 받는다. 핸디캡 증빙과 사전 예약이 필요하다."],"stats":[{"l":"설계","v":"레이드로 퍼브스"},{"l":"개장","v":"1887년"},{"l":"대표대회","v":"디오픈 15회"}],"ik":"royal st georges,sandwich,links"},{"r":34,"n":"샌프란시스코San Francisco","s":"미국 캘리포니아","m":"","d":"","dd":"A.W. 틸링허스트가 설계한 코스로 1918년경 현재 모습을 갖췄으며, 삼나무 숲 사이의 우아한 벙커링으로 틸링허스트의 대표작 중 하나로 꼽힌다. 코스 안에는 1859년 미국의 마지막 공식 결투(브로더릭-테리)가 벌어진 장소 기념비가 있다. 대회를 거의 열지 않는 은둔형 클럽이다.","tips":["초프라이빗 클럽으로 회원 초청 없이는 플레이할 수 없다."],"stats":[{"l":"설계","v":"A.W. 틸링허스트"},{"l":"코스유형","v":"파크랜드"}],"ik":"san francisco golf club,cypress,parkland"},{"r":35,"n":"노스버윅North Berwick(웨스트)","s":"스코틀랜드","m":"","d":"","dd":"스코틀랜드 이스트로디언 해안에서 1832년부터 골프가 이어져 온 세계에서 가장 오래된 코스 중 하나다. 세계 각지에서 복제된 파3 템플릿 홀 '리단(Redan)'의 원형인 15번 홀이 있는 곳이다. 돌담을 넘겨 치는 13번 홀 등 고전 링크스의 개성이 그대로 남아 있으며, 마을과 바다 사이를 오가는 전형적인 아웃-인 루팅을 따른다.","tips":["방문객 라운드가 가능한 링크스로, 온라인 사전 예약이 필요하다."],"stats":[{"l":"개장연도","v":"1832년(플레이 시작)"},{"l":"코스유형","v":"링크스"}],"ik":"north berwick links, scotland coast, seaside golf"},{"r":36,"n":"라힌치Lahinch(올드)","s":"잉글랜드 라힌치","m":"","d":"","dd":"아일랜드 클레어주 대서양 연안의 링크스로, 1892년 올드 톰 모리스가 설계하고 1927년 앨리스터 매켄지가 재설계했다. 사구를 넘겨 치는 블라인드 파5 '클론다이크'와 파3 '델' 등 고전 블라인드 홀이 그대로 보존되어 있다. 2019년 아이리시 오픈을 개최했다.","tips":["방문객에게 개방된 링크스로 사전 티타임 예약이 필요하다."],"stats":[{"l":"설계자","v":"올드 톰 모리스·앨리스터 매켄지"},{"l":"개장연도","v":"1892년"},{"l":"코스유형","v":"링크스"}],"ik":"lahinch links, ireland golf, atlantic dunes"},{"r":37,"n":"히로노Hirono","s":"일본 미키시","m":"","d":"","dd":"1932년 영국 설계가 C.H. 앨리슨이 효고현 미키시의 소나무 숲 구릉지에 설계한 코스로, 일본 랭킹 1위로 꼽혀 온 명문이다. 계곡을 가로지르는 캐리 벙커 등 과감한 벙커링으로 '일본의 파인밸리'로 불렸다. 2019년 매켄지&이버트가 앨리슨 원설계의 스케일을 되살리는 전면 복원을 마쳤으며, 일본 오픈 등 주요 대회를 개최해 왔다.","tips":["회원 동반이 원칙인 프라이빗 클럽으로 일반 방문 라운드는 어렵다."],"stats":[{"l":"설계자","v":"C.H. 앨리슨"},{"l":"개장연도","v":"1932년"},{"l":"코스유형","v":"임간 파크랜드"}],"ik":"hirono golf japan, pine forest course, dramatic bunkers"},{"r":38,"n":"반부글듄스Barnbougle Dunes","s":"호주 브리드포트","m":"","d":"","dd":"2004년 톰 도크와 마이클 클레이턴이 태즈메이니아 브리드포트의 해안 사구에 설계한 링크스다. 감자 농장이던 땅의 자연 지형을 그대로 살린 레이아웃으로 개장 직후 세계 랭킹에 진입했으며, 호주 데스티네이션 골프 붐을 이끈 코스로 평가된다.","tips":["리조트 소속 퍼블릭 코스로 숙박과 함께 라운드 예약이 가능하다.","바람이 강한 날이 많아 낮은 탄도의 링크스식 플레이가 유리하다."],"stats":[{"l":"설계자","v":"톰 도크·마이클 클레이턴"},{"l":"개장연도","v":"2004년"},{"l":"코스유형","v":"링크스"}],"ik":"barnbougle dunes, tasmania links, coastal dunes golf"},{"r":39,"n":"카누스티Carnoustie(챔피언십)","s":"스코틀랜드 카누스티","m":"","d":"","dd":"스코틀랜드 앵거스 해안의 챔피언십 링크스로, 앨런 로버트슨과 올드 톰 모리스를 거쳐 1926년 제임스 브레이드가 현재의 골격을 다듬었다. 디 오픈을 8차례 개최했으며 1999년 장 방 드 벨드의 마지막 홀 붕괴, 2018년 프란체스코 몰리나리 우승의 무대다. 배리 번 개울이 굽이치는 마지막 3개 홀은 메이저 최난도 피니시로 꼽힌다.","tips":["퍼블릭 링크스로 방문객 예약 라운드가 가능하다."],"stats":[{"l":"설계자","v":"제임스 브레이드(1926 개조)"},{"l":"코스유형","v":"링크스"},{"l":"대표대회","v":"디 오픈(8회)"}],"ik":"carnoustie links, scotland golf, open championship"},{"r":40,"n":"더 컨트리클럽","s":"미국 매사추세츠","m":"","d":"","dd":"1882년 창립한 미국에서 가장 오래된 컨트리클럽 중 하나로, USGA 창립 5개 클럽에 속한다. 1913년 US 오픈에서 20세 아마추어 프랜시스 위메이가 우승하며 미국 골프 대중화의 전환점이 됐다. 1999년 라이더컵의 '브루클라인 대역전'과 2022년 US 오픈(매트 피츠패트릭 우승)의 무대다.","tips":["회원제 프라이빗 클럽으로 일반 방문 라운드는 불가하다."],"stats":[{"l":"개장연도","v":"1882년(창립)"},{"l":"대표대회","v":"US 오픈(1913·2022)·라이더컵(1999)"},{"l":"코스유형","v":"파크랜드"}],"ik":"brookline country club, classic american golf, new england course"},{"r":41,"n":"모퐁텐","s":"프랑스 모퐁텐","m":"","d":"","dd":"1927년 톰 심슨이 파리 북쪽 샹티이 인근의 숲과 히스 지대에 설계한 프랑스 최고 평가 코스다. 회원 수가 적고 대회 개최도 드문 은둔형 클럽으로, 심슨 특유의 자연스러운 그린 콤플렉스와 히스랜드 경관이 원형에 가깝게 보존되어 있다.","tips":["유럽에서 가장 폐쇄적인 프라이빗 클럽 중 하나로 회원 동반 없이는 방문이 불가하다."],"stats":[{"l":"설계자","v":"톰 심슨"},{"l":"개장연도","v":"1927년"},{"l":"코스유형","v":"히스랜드"}],"ik":"morfontaine golf, heathland france, pine heather course"},{"r":42,"n":"로열 버크데일","s":"잉글랜드 사우스포트","m":"","d":"","dd":"잉글랜드 사우스포트의 링크스로 1889년 창립했고, 1930년대 호트리와 J.H. 테일러의 재설계로 현재 모습을 갖췄다. 높은 사구 사이에 비교적 평탄한 페어웨이가 놓여 공정한 챔피언십 링크스로 평가받는다. 디 오픈을 10차례 개최했으며 2017년 조던 스피스가 우승했고 2026년 대회 개최지다.","tips":["방문객 라운드가 가능하나 사전 예약이 필요하다."],"stats":[{"l":"설계자","v":"호트리·J.H. 테일러(재설계)"},{"l":"코스유형","v":"링크스"},{"l":"대표대회","v":"디 오픈(10회)"}],"ik":"royal birkdale, england links, dune fairway"},{"r":43,"n":"서머셋힐스","s":"미국 뉴저지","m":"","d":"","dd":"1918년 A.W. 틸링허스트가 뉴저지 버나즈빌에 설계한 코스로, 개장 이후 원형이 거의 그대로 유지되어 왔다. 리단을 재해석한 파3 2번 홀은 틸링허스트의 파3 중에서도 수작으로 꼽힌다. 전반의 개방된 옛 경마장 부지와 후반의 숲·개울 지형이 대비를 이룬다.","tips":["회원제 프라이빗 클럽으로 일반 방문 라운드는 불가하다."],"stats":[{"l":"설계자","v":"A.W. 틸링허스트"},{"l":"개장연도","v":"1918년"},{"l":"코스유형","v":"파크랜드"}],"ik":"somerset hills golf, classic parkland, redan par three"},{"r":44,"n":"캐벗클리프스","s":"캐나다 노바스토샤","m":"","d":"","dd":"빌 쿠어와 벤 크렌쇼가 노바스코샤 케이프브레턴섬의 해안 절벽 위에 설계해 2015년 문을 연 코스로, 개장 직후 세계 랭킹 상위권에 올랐다. 세인트로렌스만을 내려다보는 절벽 위 파3 16번 홀이 대표 홀이며, 파3·파4·파5가 각 6개씩인 독특한 구성이다.","tips":["캐벗 케이프브레턴 리조트의 퍼블릭 코스로 방문객 라운드 예약이 가능하다."],"stats":[{"l":"설계자","v":"빌 쿠어·벤 크렌쇼"},{"l":"개장연도","v":"2015년"},{"l":"코스유형","v":"절벽 해안 코스"}],"ik":"cabot cliffs, nova scotia golf, ocean cliff course"},{"r":45,"n":"가든 시티","s":"미국 뉴욕","m":"","d":"","dd":"1897년 데브루 에멧이 설계한 9홀에서 출발해 1899년 클럽으로 창립했으며, 창립 멤버였던 월터 트래비스가 이후 벙커와 그린을 대폭 개조했다. 1902년 US 오픈을 개최했다. 뉴욕 롱아일랜드의 평탄한 내륙 지형에 링크스 감각을 구현한 고전 코스로 평가된다.","tips":["남성 회원제 전통을 유지해 온 프라이빗 클럽으로 일반 방문은 불가하다."],"stats":[{"l":"설계자","v":"데브루 에멧(월터 트래비스 개조)"},{"l":"개장연도","v":"1897년"},{"l":"대표대회","v":"US 오픈(1902)"}],"ik":"garden city golf, classic american course, inland links"},{"r":46,"n":"서던힐스","s":"미국 오클라호마","m":"","d":"","dd":"1936년 페리 맥스웰이 오클라호마 털사의 완만한 구릉지에 설계했으며, 굴곡이 강한 '맥스웰 롤' 그린으로 유명하다. 2019년 길 핸스의 복원으로 원설계의 개성을 되찾았다. PGA 챔피언십을 5차례(2022년 저스틴 토머스 우승 포함), US 오픈을 3차례 개최한 메이저 단골 개최지다.","tips":["회원제 프라이빗 클럽으로 일반 방문 라운드는 불가하다."],"stats":[{"l":"설계자","v":"페리 맥스웰"},{"l":"개장연도","v":"1936년"},{"l":"대표대회","v":"PGA 챔피언십 5회·US 오픈 3회"}],"ik":"southern hills tulsa, parkland golf, championship course"},{"r":47,"n":"뉴사우스 웨일스","s":"호주 라페루즈","m":"","d":"","dd":"시드니 라페루즈의 보터니만 곶에 자리한 해안 코스로, 1926년 앨리스터 매켄지의 설계안을 바탕으로 1928년 개장했다. 바다를 향해 내리막으로 흐르는 5번 홀과 바위 해안 위의 파3 6번 홀이 대표 홀이다. 극적인 곶 지형을 살린 루팅으로 호주를 대표하는 코스 중 하나로 꼽힌다.","tips":["회원제 클럽이지만 요일에 따라 해외 방문객 라운드가 허용된다."],"stats":[{"l":"설계자","v":"앨리스터 매켄지"},{"l":"개장연도","v":"1928년"},{"l":"코스유형","v":"해안 코스"}],"ik":"new south wales golf, botany bay, clifftop ocean course"},{"r":48,"n":"캘리포니아클럽오브 샌프란시스코","s":"미국 캘리포니아","m":"","d":"","dd":"1918년 창립해 1926년 현재 부지에 코스를 열었으며, 윌리 로크와 A.V. 매캔의 원설계에 1927년 앨리스터 매켄지가 벙커 전체를 재설계했다. 2007~2008년 카일 필립스의 대규모 리노베이션으로 골든 에이지 시절의 폭넓은 페어웨이와 벙커 스타일을 되살렸다. 샌프란시스코 베이 지역의 명문 코스로 꼽힌다.","tips":["회원제 프라이빗 클럽으로 일반 방문 라운드는 불가하다."],"stats":[{"l":"설계자","v":"로크·매캔(매켄지 벙커 재설계)"},{"l":"개장연도","v":"1926년(현 부지)"},{"l":"코스유형","v":"파크랜드"}],"ik":"california golf club, san francisco course, golden age bunkers"},{"r":49,"n":"쇼어에이커스","s":"미국 일리노이","m":"","d":"","dd":"1921년 세스 레이너가 시카고 북쪽 레이크블러프의 협곡 지형에 설계한 코스다. 리단·비아리츠 등 템플릿 홀을 자연 계곡과 결합한 루팅으로 레이너의 대표작 중 하나로 평가된다. 짧은 전장에도 전략성이 높아 클래식 설계 애호가들의 순례지로 꼽힌다.","tips":["회원제 프라이빗 클럽으로 일반 방문 라운드는 불가하다."],"stats":[{"l":"설계자","v":"세스 레이너"},{"l":"개장연도","v":"1921년"},{"l":"코스유형","v":"파크랜드"}],"ik":"shoreacres golf, ravine course, classic golf design"},{"r":50,"n":"스윈리포레스트","s":"잉글랜드 사우스애스콧","m":"","d":"","dd":"1910년경 해리 콜트가 애스콧 인근 소나무 숲 히스 지대에 설계했으며, 콜트 스스로 가장 아끼는 작품으로 언급한 것으로 전해진다. 짧은 전장에도 다섯 개의 파3가 모두 수준급이라는 평가를 받는다. 대회 개최 없이 조용히 운영되어 온 은둔형 클럽이다.","tips":["극도로 프라이빗한 회원제 클럽으로 회원 초청 없이는 방문이 어렵다."],"stats":[{"l":"설계자","v":"해리 콜트"},{"l":"코스유형","v":"히스랜드"}],"ik":"swinley forest, heathland golf, pine heather england"},{"r":51,"n":"케이프키드내퍼스","s":"뉴질랜드 테아왕가","m":"","d":"","dd":"2004년 톰 도크가 뉴질랜드 호크스베이의 높은 해안 절벽 능선 위에 설계한 코스다. 바다를 향해 손가락처럼 뻗은 능선을 따라 홀이 배치되어 절벽 끝 그린과 태평양 전망이 이어진다. 개장 직후 세계 100대 코스에 진입했다.","tips":["리조트 소속 코스로 일반 방문객도 그린피를 내고 라운드할 수 있다."],"stats":[{"l":"설계자","v":"톰 도크"},{"l":"개장연도","v":"2004년"},{"l":"코스유형","v":"절벽 해안 코스"}],"ik":"cape kidnappers, new zealand golf, clifftop pacific"},{"r":52,"n":"베스페이지","s":"미국 뉴욕","m":"","d":"","dd":"1936년 A.W. 틸링허스트 설계로 문을 연 뉴욕 주립공원 소속 퍼블릭 코스(블랙 코스)다. 2002년 퍼블릭 코스 최초로 US 오픈을 개최해 타이거 우즈가 우승했고, 2009년 US 오픈, 2019년 PGA 챔피언십, 2025년 라이더컵을 치렀다. 1번 티 옆의 고난도 경고판으로 상징되는 미국에서 가장 어려운 퍼블릭 코스 중 하나다.","tips":["누구나 예약 가능한 주립 퍼블릭 코스이나 티타임 경쟁이 치열하고 뉴욕 주민이 우선권을 가진다.","블랙 코스는 카트 없이 걷는 라운드만 허용된다."],"stats":[{"l":"설계자","v":"A.W. 틸링허스트"},{"l":"개장연도","v":"1936년"},{"l":"대표대회","v":"US 오픈(2002·2009)·라이더컵(2025)"}],"ik":"bethpage black, public golf new york, championship rough"},{"r":53,"n":"포트마녹","s":"아일랜드 포트마녹","m":"","d":"","dd":"1894년 창립한 더블린 인근 반도 지형의 링크스로, 삼면이 바다에 둘러싸여 있다. 아이리시 오픈을 가장 많이 개최한 코스 중 하나이며 1991년 워커컵 개최지다. 인위적 조형이 적은 자연스러운 루팅으로 브리티시 제도 최고 링크스 중 하나로 꼽히며, R&A가 디 오픈 개최 후보지로 검토해 왔다.","tips":["방문객 라운드가 가능한 링크스로 사전 예약이 필요하다."],"stats":[{"l":"개장연도","v":"1894년"},{"l":"코스유형","v":"링크스"},{"l":"대표대회","v":"아이리시 오픈·워커컵(1991)"}],"ik":"portmarnock links, dublin golf, irish seaside course"},{"r":54,"n":"밸리닐","s":"미국 콜로라도","m":"","d":"","dd":"2006년 톰 도크가 콜로라도 동부 홀리요크의 '찹힐스' 모래 구릉지에 설계한 내륙 링크스다. 티마커와 정해진 티타임 없이 걷는 라운드만 허용하는 자유로운 운영 방식으로 유명하다. 페스큐 잔디 위 자연 지형을 그대로 살린 설계로 도크의 대표작 중 하나로 평가된다.","tips":["회원 중심 프라이빗 클럽으로 회원 동반 또는 초청이 필요하다."],"stats":[{"l":"설계자","v":"톰 도크"},{"l":"개장연도","v":"2006년"},{"l":"코스유형","v":"내륙 링크스"}],"ik":"ballyneal golf, sand hills colorado, fescue links"},{"r":55,"n":"세인트 패트릭스 링크스","s":"아일랜드 로사페나","m":"","d":"","dd":"2021년 톰 도크가 아일랜드 도니골 로사페나의 대규모 사구 지대에 설계해 개장한 링크스다. 기존 두 개 코스 부지를 통합해 새로 지은 코스로, 개장 직후 세계 랭킹에 진입하며 현대 링크스 설계의 수작으로 평가받는다.","tips":["로사페나 호텔&골프 리조트 소속으로 방문객 라운드가 가능하다."],"stats":[{"l":"설계자","v":"톰 도크"},{"l":"개장연도","v":"2021년"},{"l":"코스유형","v":"링크스"}],"ik":"st patricks links, donegal dunes, ireland links"},{"r":56,"n":"메이드스톤","s":"미국 뉴욕","m":"","d":"","dd":"1891년 창립한 이스트햄프턴의 해안 클럽으로, 1920년대 윌리 파크 주니어가 설계한 18홀이 1924년 완성됐다. 대서양과 호수 사이 사구 지대를 지나는 8~9번 홀 구간이 백미로 꼽힌다. 미국에서 가장 링크스에 가까운 코스 중 하나로 평가된다.","tips":["햄프턴스의 대표적 프라이빗 클럽으로 일반 방문은 불가하다."],"stats":[{"l":"설계자","v":"윌리 파크 주니어"},{"l":"개장연도","v":"1924년(18홀 완성)"},{"l":"코스유형","v":"시사이드 링크스"}],"ik":"maidstone club, east hampton dunes, seaside golf"},{"r":57,"n":"발투스롤","s":"미국 뉴저지","m":"","d":"","dd":"1922년 A.W. 틸링허스트가 뉴저지 스프링필드에 로어·어퍼 두 코스를 설계했다. 로어 코스는 1967년과 1980년 잭 니클라우스가 US 오픈을 두 차례 우승한 무대이며, 2005년과 2016년 PGA 챔피언십도 개최했다. 이후 길 핸스가 틸링허스트 원설계를 되살리는 복원 작업을 진행했다.","tips":["회원제 프라이빗 클럽으로 일반 방문 라운드는 불가하다."],"stats":[{"l":"설계자","v":"A.W. 틸링허스트"},{"l":"개장연도","v":"1922년"},{"l":"대표대회","v":"US 오픈·PGA 챔피언십"}],"ik":"baltusrol golf, new jersey parkland, major venue"},{"r":58,"n":"카마고","s":"미국 오하이오","m":"","d":"","dd":"1925년 창립한 신시내티 인디언힐의 클럽으로, 세스 레이너가 설계했고 1926년 그의 사망 이후 완성됐다. 리단·에덴·비아리츠·쇼트로 이어지는 파3 세트가 레이너 작품 중에서도 최고 수준으로 꼽힌다. 개장 이후 큰 변형 없이 원형이 보존되어 있다.","tips":["회원제 프라이빗 클럽으로 일반 방문 라운드는 불가하다."],"stats":[{"l":"설계자","v":"세스 레이너"},{"l":"개장연도","v":"1925년(창립)"},{"l":"코스유형","v":"파크랜드"}],"ik":"camargo club, template par three, classic golf ohio"},{"r":59,"n":"로열트룬","s":"스코틀랜드 트룬","m":"","d":"","dd":"1878년 창립한 스코틀랜드 에어셔 해안의 링크스로, 디 오픈을 10차례 개최했다. 123야드의 파3 8번 홀 '포스티지 스탬프'는 세계에서 가장 유명한 쇼트홀 중 하나다. 2016년 헨리크 스텐손과 필 미컬슨의 명승부, 2024년 잰더 쇼플리 우승의 무대다.","tips":["회원제 클럽이지만 지정 요일에 방문객 라운드가 허용된다."],"stats":[{"l":"개장연도","v":"1878년(창립)"},{"l":"코스유형","v":"링크스"},{"l":"대표대회","v":"디 오픈(10회)"}],"ik":"royal troon, postage stamp hole, ayrshire links"},{"r":60,"n":"키아와 아일랜드","s":"미국 사우스캐롤라이나","m":"","d":"","dd":"1991년 피트 다이가 사우스캐롤라이나 키아와섬 해안에 설계한 오션 코스로, 개장 직후 '해안의 전쟁'으로 불린 1991년 라이더컵을 개최했다. 2012년 로리 매킬로이, 2021년 필 미컬슨이 우승한 PGA 챔피언십의 무대다. 전 홀에서 바다가 보이고 바람의 영향이 커 미국 최고 난도 리조트 코스 중 하나로 꼽힌다.","tips":["키아와 아일랜드 골프 리조트의 퍼블릭 코스로 누구나 예약 가능하다."],"stats":[{"l":"설계자","v":"피트 다이"},{"l":"개장연도","v":"1991년"},{"l":"대표대회","v":"라이더컵(1991)·PGA 챔피언십(2012·2021)"}],"ik":"kiawah ocean course, seaside golf, south carolina dunes"},{"r":61,"n":"우드홀스파","s":"잉글랜드 우드홀스파","m":"","d":"","dd":"잉글랜드 링컨셔 내륙의 히스랜드 코스(호치킨 코스)로, 해리 바든의 원설계와 해리 콜트의 손질을 거쳐 1920년대 부지 소유주 S.V. 호치킨 대령이 현재 모습으로 완성했다. 영국에서 가장 깊고 위협적인 벙커들로 유명하며, 잉글랜드골프협회(England Golf)의 본부 코스다.","tips":["방문객 예약 라운드가 가능하다."],"stats":[{"l":"설계자","v":"바든·콜트·호치킨"},{"l":"개장연도","v":"1905년"},{"l":"코스유형","v":"히스랜드"}],"ik":"woodhall spa, heathland bunkers, england inland golf"},{"r":62,"n":"카와나","s":"일본 이토시","m":"","d":"","dd":"1936년 C.H. 앨리슨이 이즈반도 이토시의 해안 절벽 지형에 설계한 후지 코스로, '일본의 페블비치'로 불린다. 태평양과 후지산 전망 속에 절벽을 따라 흐르는 15번 홀 등이 대표적이며, 일본 투어 후지산케이 클래식의 오랜 개최지였다.","tips":["가와나 호텔 소속 리조트 코스로 투숙객 중심으로 라운드가 가능하다."],"stats":[{"l":"설계자","v":"C.H. 앨리슨"},{"l":"개장연도","v":"1936년"},{"l":"코스유형","v":"시사이드 리조트"}],"ik":"kawana fuji course, japan ocean golf, mount fuji view"},{"r":63,"n":"크루덴베이","s":"스코틀랜드 크루덴베이","m":"","d":"","dd":"1899년 올드 톰 모리스와 아치 심슨의 설계로 개장했고 1926년 톰 심슨이 개조한 스코틀랜드 애버딘셔의 링크스다. 거대한 사구 사이 계곡을 누비는 루팅과 블라인드 홀 등 기교 넘치는 구성으로 자연 지형을 그대로 살린 링크스라는 평가를 받는다.","tips":["방문객 라운드가 가능한 링크스로 사전 예약이 필요하다."],"stats":[{"l":"설계자","v":"올드 톰 모리스·아치 심슨(톰 심슨 개조)"},{"l":"개장연도","v":"1899년"},{"l":"코스유형","v":"링크스"}],"ik":"cruden bay, scotland dunes, dramatic links"},{"r":64,"n":"서닝데일","s":"잉글랜드 서닝데일","m":"","d":"","dd":"1901년 윌리 파크 주니어가 설계하고 이후 해리 콜트가 다듬은 런던 근교 히스랜드의 원조 격 올드 코스다. 히스와 소나무·자작나무 숲이 어우러진 내륙 코스의 전범으로 꼽히며, 시니어 오픈과 위민스 브리티시 오픈 등 주요 대회를 개최해 왔다.","tips":["회원제 클럽이지만 평일 지정 요일에 방문객 라운드가 허용된다."],"stats":[{"l":"설계자","v":"윌리 파크 주니어(콜트 개조)"},{"l":"개장연도","v":"1901년"},{"l":"코스유형","v":"히스랜드"}],"ik":"sunningdale old course, heathland london, pine heather fairway"},{"r":65,"n":"인버네스","s":"미국 오하이오","m":"","d":"","dd":"오하이오 털리도의 클럽으로, 1919년 도널드 로스의 재설계로 챔피언십 코스의 골격을 갖췄다. US 오픈 4회, PGA 챔피언십 2회를 개최했으며 2021년 솔하임컵의 무대였다. 이후 앤드루 그린의 복원으로 로스 설계의 그린 콤플렉스를 되살렸다.","tips":["회원제 프라이빗 클럽으로 일반 방문 라운드는 불가하다."],"stats":[{"l":"설계자","v":"도널드 로스"},{"l":"대표대회","v":"US 오픈 4회·PGA 챔피언십 2회"},{"l":"코스유형","v":"파크랜드"}],"ik":"inverness club, donald ross greens, toledo golf"},{"r":66,"n":"라이 (올드)","s":"잉글랜드 캠버","m":"","d":"","dd":"1894년 해리 콜트가 경력 초기에 설계한 잉글랜드 남부 캠버의 링크스로, 이후 여러 차례 다듬어졌다. 옥스퍼드·케임브리지 골프 소사이어티의 겨울 대회 '프레지던츠 퍼터'가 매년 1월 열리는 곳으로 유명하다. 짧은 전장이지만 사구 지형과 바람 탓에 스코어가 쉽게 나오지 않는 코스로 꼽힌다.","tips":["프라이빗 클럽으로 방문하려면 사무국에 사전 문의와 소개가 필요하다."],"stats":[{"l":"설계자","v":"해리 콜트"},{"l":"개장연도","v":"1894년"},{"l":"코스유형","v":"링크스"}],"ik":"rye golf links, camber dunes, winter links england"},{"r":67,"n":"로열리담/세인트앤스","s":"잉글랜드 리담 세인트앤스","m":"","d":"","dd":"1886년 창립한 잉글랜드 북서부의 링크스로, 해안에서 한 블록 안쪽에 주택가와 철길로 둘러싸여 있다. 200개가 넘는 벙커가 배치된 전략형 코스이며, 디 오픈을 11차례 개최했다. 1926년 보비 존스, 1979년과 1988년 세베 바예스테로스, 2012년 어니 엘스 우승의 무대다.","tips":["방문객 라운드가 가능하며 사전 예약이 필요하다."],"stats":[{"l":"개장연도","v":"1886년(창립)"},{"l":"코스유형","v":"링크스"},{"l":"대표대회","v":"디 오픈(11회)"}],"ik":"royal lytham, england links, pot bunkers"},{"r":68,"n":"윙드풋Winged Foot(이스트)","s":"미국 뉴욕","m":"","d":"","dd":"A.W. 틸링허스트가 설계해 1923년 웨스트 코스와 함께 개장한 뉴욕 머매러넥의 명문 코스다. US오픈 무대인 웨스트 코스보다 짧지만 좁은 페어웨이와 까다로운 그린으로 결코 쉽지 않은 코스로 평가된다. 1957년과 1972년 US여자오픈, 1980년 초대 US시니어오픈을 개최했다.","tips":["프라이빗 회원제 클럽으로 회원 동반 없이는 라운드가 어렵다.","같은 부지의 웨스트 코스는 2020년 US오픈 개최지다."],"stats":[{"l":"설계자","v":"A.W. 틸링허스트"},{"l":"개장","v":"1923년"},{"l":"대표대회","v":"US여자오픈 1957·1972"}],"ik":"golf course, parkland, fairway"},{"r":69,"n":"프레스트윅","s":"스코들랜드 프레스트윅","m":"","d":"","dd":"1860년 제1회 디 오픈(브리티시 오픈)이 열린 대회 발상지다. 1851년 창립 당시 올드 톰 모리스가 초기 12홀을 조성했으며, 1925년까지 총 24차례 디 오픈을 개최했다. 블라인드 홀과 깊은 벙커 등 고전 링크스의 원형이 그대로 남아 있다.","tips":["회원제 클럽이지만 방문객 티타임 예약을 받는 링크스다.","글래스고에서 기차로 접근 가능하며 3번 홀 카든루 벙커 등 역사적 홀이 많다."],"stats":[{"l":"창립","v":"1851년"},{"l":"코스유형","v":"링크스"},{"l":"대표대회","v":"제1회 디 오픈(1860)"}],"ik":"links golf, scotland coast, dunes"},{"r":70,"n":"케이프 위컴","s":"호주 킹아일랜드","m":"","d":"","dd":"호주 태즈메이니아 킹아일랜드 북단 곶에 조성된 링크스로 2015년 10월 개장했다. 마이크 드브리스와 다리우스 올리버가 공동 설계했으며, 배스 해협의 바다와 케이프 위컴 등대를 배경으로 여러 홀이 해안선을 따라 이어진다. 개장 직후부터 세계 랭킹에 진입하며 호주 링크스 붐을 이끌었다.","tips":["퍼블릭 코스로 예약 후 누구나 라운드할 수 있다.","킹아일랜드는 경비행기로 접근하며 바람이 강해 시즌·기상 확인이 필요하다."],"stats":[{"l":"설계자","v":"마이크 드브리스·다리우스 올리버"},{"l":"개장","v":"2015년"},{"l":"코스유형","v":"링크스"}],"ik":"coastal links, lighthouse, ocean cliffs"},{"r":71,"n":"슬리피홀로","s":"미국 뉴욕","m":"","d":"","dd":"1911년 C.B. 맥도널드와 세스 레이너가 설계한 뉴욕 허드슨강변의 클래식 코스다. 1920년대 A.W. 틸링허스트가 일부 홀을 추가해 두 설계 스타일이 섞여 있었으나, 길 핸스의 복원 작업으로 맥도널드·레이너 스타일로 통일됐다. 허드슨강이 내려다보이는 고지대에 자리해 전망이 뛰어나다.","tips":["프라이빗 회원제 클럽이다.","클럽하우스는 밴더빌트 가문의 대저택 우드레아를 사용한다."],"stats":[{"l":"설계자","v":"C.B. 맥도널드·세스 레이너"},{"l":"개장","v":"1911년 설계"},{"l":"복원","v":"길 핸스"}],"ik":"golf course, hudson river, parkland"},{"r":72,"n":"미오피아헌트클럽","s":"","m":"","d":"","dd":"미국 매사추세츠 사우스해밀턴에 있는 여우사냥 전통의 컨트리클럽으로, 허버트 리즈가 1894년부터 코스를 설계·조성했다. 1898·1901·1905·1908년 네 차례 US오픈을 개최한 초기 미국 골프의 성지다. 1901년 윌리 앤더슨의 우승 스코어 331타는 지금도 US오픈 최고타수 기록으로 남아 있다.","tips":["프라이빗 회원제 클럽으로 일반 방문 라운드는 불가능하다."],"stats":[{"l":"설계자","v":"허버트 리즈"},{"l":"조성","v":"1894년"},{"l":"대표대회","v":"US오픈 4회(1898~1908)"}],"ik":"classic golf course, new england, fescue rough"},{"r":73,"n":"오후피 매치 클럽","s":"미국 조지아","m":"","d":"","dd":"길 핸스와 짐 와그너가 설계해 2018년 개장한 미국 조지아 코브타운의 매치플레이 전용 클럽이다. 스트로크 플레이가 아닌 매치플레이를 전제로 설계된 22개 홀이 오후피강 인근 사질 토양의 옛 수렵지 위에 펼쳐진다. 테크 투자자 마이클 월래스가 설립했다.","tips":["프라이빗 회원제 클럽으로 회원과 게스트만 이용할 수 있다.","정규 18홀 외 보너스 홀을 포함해 매치 상황에 맞춰 코스를 구성한다."],"stats":[{"l":"설계자","v":"길 핸스·짐 와그너"},{"l":"개장","v":"2018년"},{"l":"특징","v":"매치플레이 전용 22홀"}],"ik":"sandy golf course, pine trees, georgia"},{"r":74,"n":"아드핀","s":"스코틀랜드 주라섬","m":"","d":"","dd":"스코틀랜드 서해 주라섬 남쪽 해안 절벽 위에 조성된 코스로, 호주 설계가 밥 해리슨이 6년에 걸쳐 완성해 2017년 개장했다. 헤지펀드 매니저 그렉 코피의 아드핀 영지 안에 있으며, 골프에 부적합하다던 지반 위에 북아일랜드에서 배로 실어온 2만4천 톤의 흙과 모래로 플레이 면을 만들었다. 주라 해협을 내려다보는 극적인 클리프탑 홀이 이어진다.","tips":["일반 개방 없이 영지 숙박(에스테이트 렌털) 게스트만 라운드할 수 있는 초프라이빗 코스다."],"stats":[{"l":"설계자","v":"밥 해리슨"},{"l":"개장","v":"2017년"},{"l":"코스유형","v":"클리프탑 코스"}],"ik":"cliff golf, scottish island, sea"},{"r":75,"n":"카사데캄포(티스오브더독)","s":"도미니카공화국 라로마나","m":"","d":"","dd":"피트 다이가 설계해 1971년 개장한 카리브해 대표 코스로, 도미니카공화국 라로마나의 카사데캄포 리조트 안에 있다. 18홀 중 7개 홀이 카리브해 바닷가에 바짝 붙어 있어 '개의 이빨'이라는 이름처럼 날카로운 해안 암초 지형을 넘나든다. 중남미·카리브 지역 1위 코스로 꾸준히 꼽힌다.","tips":["리조트 코스로 투숙객과 방문객 모두 예약 후 라운드할 수 있다."],"stats":[{"l":"설계자","v":"피트 다이"},{"l":"개장","v":"1971년"},{"l":"특징","v":"바닷가 홀 7개"}],"ik":"caribbean golf, ocean holes, teeth of the dog"},{"r":76,"n":"오크힐(이스트)","s":"미국 뉴욕","m":"","d":"","dd":"도널드 로스가 설계해 1926년 완성된 뉴욕 로체스터의 챔피언십 코스다. US오픈 3회(1956·1968·1989), PGA챔피언십 4회(1980·2003·2013·2023), 1995년 라이더컵까지 미국 메이저 대회를 두루 개최했다. 2019~2020년 앤드루 그린의 복원으로 로스 원안의 그린과 벙커가 되살아났다.","tips":["프라이빗 회원제 클럽이다."],"stats":[{"l":"설계자","v":"도널드 로스"},{"l":"개장","v":"1926년"},{"l":"대표대회","v":"PGA챔피언십 2023 등"}],"ik":"championship golf, oak trees, parkland"},{"r":77,"n":"캐슬 스튜어트","s":"스코틀랜드 인버네스","m":"","d":"","dd":"길 핸스와 마크 파시넨이 설계해 2009년 개장한 스코틀랜드 하이랜드의 모던 링크스다. 머리만(Moray Firth)을 내려다보는 넓은 페어웨이와 전망 좋은 티잉 구역이 특징이다. 2011~2013년과 2016년 스코티시 오픈을 개최했고, 2022년 캐나다 캐벗 그룹에 인수되며 캐벗 하이랜즈로 이름이 바뀌었다.","tips":["퍼블릭 예약이 가능한 리조트 링크스로 인버네스 공항에서 가깝다.","같은 부지에 톰 도크 설계의 두 번째 코스 올드 페티가 조성됐다."],"stats":[{"l":"설계자","v":"길 핸스·마크 파시넨"},{"l":"개장","v":"2009년"},{"l":"대표대회","v":"스코티시 오픈 4회"}],"ik":"modern links, moray firth, scotland highlands"},{"r":78,"n":"캐벗링크스","s":"캐나다 노바스토샤","m":"","d":"","dd":"캐나다 노바스코샤 케이프브레튼섬 인버네스의 옛 탄광 부지에 로드 휘트먼이 설계해 2012년 개장한 캐나다 최초의 정통 링크스다. 세인트로렌스만 해안을 따라 단단한 페어웨이와 사질 토양의 링크스 골프를 구현했다. 밴든듄스를 만든 마이크 카이저의 투자와 벤 코완-듀어의 기획으로 탄생했으며 캐벗 리조트의 출발점이 됐다.","tips":["퍼블릭 리조트 코스로 투숙객이 아니어도 예약 라운드가 가능하다.","인접한 캐벗 클리프스와 함께 36홀 여정으로 방문하는 경우가 많다."],"stats":[{"l":"설계자","v":"로드 휘트먼"},{"l":"개장","v":"2012년"},{"l":"코스유형","v":"링크스"}],"ik":"seaside links, nova scotia, dunes"},{"r":79,"n":"로열 리버풀","s":"잉글랜드 호이레이크","m":"","d":"","dd":"1869년 창립된 잉글랜드에서 가장 오래된 해안 링크스 중 하나로, 소재지 이름을 따 호이레이크로 불린다. 디 오픈을 여러 차례 개최한 로타 코스로 2006년 타이거 우즈, 2014년 로리 매킬로이, 2023년 브라이언 하먼이 이곳에서 클라레 저그를 들었다. 평평해 보이지만 바람과 내부 OB 등 전략적 난관이 많은 코스다.","tips":["회원제 클럽이지만 지정된 요일에 방문객 라운드를 받는다."],"stats":[{"l":"창립","v":"1869년"},{"l":"코스유형","v":"링크스"},{"l":"대표대회","v":"디 오픈(2023 등)"}],"ik":"links golf, england coast, open championship"},{"r":80,"n":"밴든듄스","s":"미국 오리건","m":"","d":"","dd":"데이비드 맥레이 키드가 설계해 1999년 개장한 미국 오리건 해안의 링크스로, 밴든듄스 리조트의 첫 번째 코스다. 태평양 절벽과 사구 위에 스코틀랜드식 링크스 골프를 미국에 구현하며 데스티네이션 골프 리조트 붐의 출발점이 됐다. 이후 퍼시픽듄스 등 자매 코스들이 더해져 세계적 골프 목적지로 성장했다.","tips":["퍼블릭 리조트 코스이며 카트 없이 걸어서만 라운드한다.","여름 성수기는 예약 경쟁이 치열해 수개월 전 예약이 필요하다."],"stats":[{"l":"설계자","v":"데이비드 맥레이 키드"},{"l":"개장","v":"1999년"},{"l":"코스유형","v":"링크스"}],"ik":"pacific coast links, dunes, oregon"},{"r":81,"n":"킹스반스","s":"스코틀랜드 세인트앤드루스","m":"","d":"","dd":"카일 필립스가 설계해 2000년 개장한 세인트앤드루스 인근의 모던 링크스다. 노스해 해안을 따라 거의 모든 홀에서 바다가 보이도록 지형을 재조성했으며, 신설 코스임에도 개장 직후 세계 랭킹에 올랐다. 매년 10월 올드 코스, 카누스티와 함께 알프레드 던힐 링크스 챔피언십을 공동 개최한다.","tips":["퍼블릭 예약이 가능한 링크스로 세인트앤드루스에서 차로 15분 거리다."],"stats":[{"l":"설계자","v":"카일 필립스"},{"l":"개장","v":"2000년"},{"l":"대표대회","v":"던힐 링크스 챔피언십"}],"ik":"seaside links, st andrews, north sea"},{"r":82,"n":"휘슬링 스트레이츠","s":"미국 위스콘신","m":"","d":"","dd":"피트 다이가 미시간호 호안 3km를 따라 설계해 1998년 개장한 위스콘신 콜러의 챔피언십 코스다. 평탄한 호숫가 부지를 대규모 성토로 아일랜드 링크스처럼 바꿨고 벙커가 약 1천 개에 이르는 것으로 알려져 있다. PGA챔피언십 3회(2004·2010·2015)와 2021년 라이더컵을 개최했다.","tips":["퍼블릭 리조트 코스로 누구나 예약 가능하며 캐디 동반 도보 라운드가 원칙이다."],"stats":[{"l":"설계자","v":"피트 다이"},{"l":"개장","v":"1998년"},{"l":"대표대회","v":"라이더컵 2021"}],"ik":"lakeside golf, bunkers, lake michigan"},{"r":83,"n":"엘러스턴","s":"호주 헌터밸리","m":"","d":"","dd":"호주 언론재벌 케리 패커의 사유지에 밥 해리슨 설계·그렉 노먼 회사 시공으로 2001년 완성된 코스다. 패커는 '좋은 샷만 보상하는 가장 어려운 코스'를 주문했고, 그 결과 헌터밸리 오지 계곡을 관통하는 극히 도전적인 레이아웃이 탄생했다. 호주에서 가장 배타적인 코스로 꼽힌다.","tips":["패커 가문의 초청 게스트만 라운드할 수 있는 초프라이빗 코스다."],"stats":[{"l":"설계","v":"밥 해리슨(그렉 노먼 팀)"},{"l":"개장","v":"2001년"},{"l":"특징","v":"사유지 초프라이빗"}],"ik":"valley golf course, australia bush, creek"},{"r":84,"n":"록크린캐틀 컴퍼니","s":"미국 몬태나","m":"","d":"","dd":"톰 도크가 설계해 2008년 개장한 미국 몬태나 디어로지의 목장 코스다. 플린트크릭 산맥을 배경으로 바위가 흩어진 350에이커의 거친 지형에 최소한의 토목으로 홀을 앉혔다. 실제 운영 중인 대형 목장 커뮤니티 안에 있으며 도보 라운드가 가능하도록 정교하게 루팅됐다.","tips":["프라이빗 커뮤니티 클럽으로 회원·게스트만 이용할 수 있다."],"stats":[{"l":"설계자","v":"톰 도크"},{"l":"개장","v":"2008년"},{"l":"코스유형","v":"마운틴·랜치 코스"}],"ik":"montana ranch, mountain golf, rugged terrain"},{"r":85,"n":"뮤어필드 빌리지","s":"미국 오하이오","m":"","d":"","dd":"잭 니클라우스가 고향 오하이오 콜럼버스 인근에 만든 코스로 1974년 개장했다. 스코틀랜드 뮤어필드에서 이름을 따왔으며, 니클라우스가 주최하는 PGA투어 메모리얼 토너먼트가 1976년부터 매년 열린다. 1987년 라이더컵 개최지로 미국이 홈에서 처음 패한 무대이기도 하다.","tips":["프라이빗 회원제 클럽이다.","메모리얼 토너먼트 기간에는 갤러리로 코스를 볼 수 있다."],"stats":[{"l":"설계자","v":"잭 니클라우스"},{"l":"개장","v":"1974년"},{"l":"대표대회","v":"메모리얼 토너먼트"}],"ik":"parkland golf, ohio, tournament course"},{"r":86,"n":"로열헤이그","s":"네덜란드 바세나르","m":"","d":"","dd":"1893년 창립돼 '올드 레이디'로 불리는 네덜란드의 유서 깊은 클럽으로, 현재 코스는 해리 콜트와 찰스 앨리슨 설계로 1938년 바세나르 사구지대에 완성됐다. 북해 뒤편 모래언덕의 자연 기복을 그대로 살려 유럽 대륙 최고 수준의 듄스 코스로 평가된다. 케네머르, 노르드베이크와 함께 네덜란드 해안 사구 3대 코스로 묶인다.","tips":["회원제 클럽이지만 핸디캡 증명을 갖춘 방문객의 예약 라운드를 받는다."],"stats":[{"l":"설계자","v":"해리 콜트·찰스 앨리슨"},{"l":"코스 완성","v":"1938년"},{"l":"코스유형","v":"듄스(사구) 코스"}],"ik":"dunes golf, netherlands, coastal grassland"},{"r":87,"n":"퀘이커리지","s":"미국 뉴욕","m":"","d":"","dd":"A.W. 틸링허스트가 설계한 뉴욕 스카스데일의 클래식 파크랜드 코스로, 윙드풋과 길 하나를 사이에 두고 마주 보고 있다. 틸링허스트 코스 중에서도 완성도 높은 숨은 걸작으로 꼽히며 1997년 워커컵을 개최했다. 길 핸스의 복원 작업으로 원설계의 특징이 유지되고 있다.","tips":["프라이빗 회원제 클럽이다."],"stats":[{"l":"설계자","v":"A.W. 틸링허스트"},{"l":"대표대회","v":"워커컵 1997"}],"ik":"classic parkland, tree lined fairway, new york"},{"r":88,"n":"세인트조지스힐","s":"잉글랜드 웨이브리지","m":"","d":"","dd":"해리 콜트가 1913년 설계한 잉글랜드 서리 히스랜드의 대표작이다. 소나무와 헤더, 자작나무 숲 사이의 큰 지형 기복을 활용한 과감한 루팅으로 콜트 설계의 정점으로 평가된다. 영국 최초의 골프장 중심 주거 단지 개발로도 알려져 있다.","tips":["회원제 클럽이지만 평일에 방문객 예약 라운드가 가능하다."],"stats":[{"l":"설계자","v":"해리 콜트"},{"l":"개장","v":"1913년"},{"l":"코스유형","v":"히스랜드"}],"ik":"heathland golf, heather, pine forest"},{"r":89,"n":"예먼스홀","s":"미국 사우스캐롤라이나","m":"","d":"","dd":"세스 레이너가 설계해 1925년 완성된 사우스캐롤라이나 찰스턴 근교의 클럽이다. 뉴욕 부유층의 겨울 휴양지로 만들어졌으며, 로컨트리 습지와 참나무 숲 속 900에이커 부지에 레이너 특유의 템플릿 홀들이 배치돼 있다. 6번 리댄 홀이 특히 유명하고 1956년 US여자아마추어 챔피언십을 개최했다.","tips":["프라이빗 회원제 클럽으로 회원 동반이 필요하다."],"stats":[{"l":"설계자","v":"세스 레이너"},{"l":"개장","v":"1925년"},{"l":"특징","v":"템플릿 홀·리댄 6번"}],"ik":"lowcountry golf, live oaks, marsh"},{"r":90,"n":"피치트리","s":"미국 조지아","m":"","d":"","dd":"보비 존스가 설립하고 로버트 트렌트 존스와 공동 설계해 1948년 개장한 애틀랜타의 명문 클럽이다. 오거스타 내셔널에 필적하는 코스를 목표로 옛 묘목장 부지에 만들어졌으며, 거대한 그린과 긴 활주로형 티는 트렌트 존스 설계 철학의 시작점이 됐다. 1989년 워커컵 개최지다.","tips":["프라이빗 회원제 클럽으로 회원과 게스트만 이용할 수 있다."],"stats":[{"l":"설계자","v":"R.T. 존스·보비 존스"},{"l":"개장","v":"1948년"},{"l":"대표대회","v":"워커컵 1989"}],"ik":"parkland golf, azalea, atlanta"},{"r":91,"n":"밴든트레일스","s":"미국 오리건","m":"","d":"","dd":"빌 쿠어와 벤 크렌쇼가 설계해 2005년 개장한 밴든듄스 리조트의 세 번째 코스다. 해안 사구에서 출발해 초원과 해안 숲을 통과해 다시 사구로 돌아오는 내륙형 루팅이 특징으로, 리조트 내 다른 해안 코스들과 뚜렷이 다른 개성을 지닌다. 자연 지형을 따라가는 도보 전용 코스다.","tips":["퍼블릭 리조트 코스이며 걸어서만 라운드한다."],"stats":[{"l":"설계자","v":"쿠어·크렌쇼"},{"l":"개장","v":"2005년"},{"l":"코스유형","v":"듄스·포레스트"}],"ik":"forest golf, dunes, oregon coast"},{"r":92,"n":"올드타운클럽","s":"미국 노스캐롤라이나","m":"","d":"","dd":"페리 맥스웰이 R.J. 레이놀즈 담배 가문 영지에 설계해 1939년 개장한 노스캐롤라이나 윈스턴세일럼의 코스로, 골든 에이지 설계의 마지막 걸작 중 하나로 꼽힌다. 2013년 쿠어·크렌쇼의 복원으로 물결치는 그린과 넓은 전략적 페어웨이 등 맥스웰의 원안이 되살아나며 랭킹이 급상승했다. 8번과 17번이 공유하는 대형 더블 그린이 상징이다.","tips":["프라이빗 회원제 클럽이며 웨이크포레스트대 골프팀의 홈 코스다."],"stats":[{"l":"설계자","v":"페리 맥스웰"},{"l":"개장","v":"1939년"},{"l":"복원","v":"쿠어·크렌쇼(2013)"}],"ik":"rolling fairway, classic golf, carolina"},{"r":93,"n":"나인 브릿지","s":"한국 제주도","m":"","d":"","dd":"골프플랜의 로널드 프림과 데이비드 데일이 설계해 2001년 제주 한라산 중산간에 개장한 한국 대표 코스다. 화산 지형과 제주 억새, 크리크를 활용한 조형으로 개장 후 꾸준히 세계 100대 코스에 이름을 올렸다. 2017~2019년 한국 최초의 PGA투어 정규 대회인 더 CJ컵을 개최했다.","tips":["회원제 클럽으로 회원 동반 또는 클럽 규정에 따른 제한적 이용만 가능하다."],"stats":[{"l":"설계","v":"로널드 프림·데이비드 데일"},{"l":"개장","v":"2001년"},{"l":"대표대회","v":"더 CJ컵 2017~2019"}],"ik":"jeju golf, volcanic landscape, creek"},{"r":94,"n":"로열멜버른Royal Melbourne(이스트)","s":"호주 블랙록","m":"","d":"","dd":"알렉스 러셀이 설계해 1932년 개장한 멜버른 샌드벨트의 코스로, 알리스터 매켄지가 설계한 웨스트 코스와 짝을 이룬다. 샌드벨트 특유의 날카로운 벙커 에지와 단단하고 빠른 그린을 공유하며 웨스트 못지않은 완성도로 평가된다. 프레지던츠컵 등 국제 대회 때는 웨스트와 이스트의 홀을 조합한 컴포지트 코스가 사용된다.","tips":["회원제 클럽이지만 해외 명문 클럽 회원 등 조건을 갖춘 방문객 예약을 받는다."],"stats":[{"l":"설계자","v":"알렉스 러셀"},{"l":"개장","v":"1932년"},{"l":"코스유형","v":"샌드벨트"}],"ik":"sandbelt golf, melbourne, bunkers"},{"r":95,"n":"데판(위트레흐체)","s":"네덜란드 위트레흐트","m":"","d":"","dd":"1894년 창립된 네덜란드에서 두 번째로 오래된 골프 클럽으로, 현재 코스는 해리 콜트가 1929년 설계했다. 소나무·참나무 숲과 헤더 사이를 도는 잉글랜드식 히스랜드 스타일로, 힘보다 전략을 요구하는 레이아웃이다. 더치 오픈을 세 차례 개최했으며 프랑크 폰트의 장기 복원 작업으로 콜트 원안이 관리되고 있다.","tips":["회원제 클럽이지만 방문객 예약 라운드가 가능하다."],"stats":[{"l":"설계자","v":"해리 콜트"},{"l":"코스 개장","v":"1929년"},{"l":"코스유형","v":"히스랜드"}],"ik":"heathland, pine forest, netherlands"},{"r":96,"n":"올림픽 (레이크)","s":"미국 캘리포니아","m":"","d":"","dd":"샌프란시스코 태평양 연안 언덕에 자리한 올림픽클럽의 대표 코스로, 윌리 왓슨과 샘 화이팅이 조성했고 1927년 화이팅의 재설계로 현재 골격이 완성됐다. US오픈을 다섯 차례(1955·1966·1987·1998·2012) 개최했으며 매번 우승 후보들이 무너진 '이변의 코스'로 불린다. 삼나무와 사이프러스 숲 사이로 페어웨이가 기울어 정교한 티샷이 요구된다.","tips":["프라이빗 회원제 클럽이다.","2021년 US여자오픈도 레이크 코스에서 열렸다."],"stats":[{"l":"재설계","v":"샘 화이팅(1927)"},{"l":"대표대회","v":"US오픈 5회"},{"l":"코스유형","v":"파크랜드"}],"ik":"cypress trees, san francisco, fog golf"},{"r":97,"n":"레보르드","s":"프랑스 생로랑누앙","m":"","d":"","dd":"빅(BIC) 볼펜 창업자 마르셀 비크 남작의 사냥 영지에 로버트 폰 헤이기가 설계해 1987년 개장한 프랑스 루아르 지방의 코스다. 숲과 호수를 넘나드는 과감한 설계로 폰 헤이기의 대표작이자 유럽 최고 수준 코스로 꼽혀 왔다. 2018년부터 완전 회원제로 전환됐고, 2021년 길 핸스 설계의 뉴 코스가 더해졌다.","tips":["회원과 게스트만 이용 가능한 프라이빗 에스테이트다."],"stats":[{"l":"설계자","v":"로버트 폰 헤이기"},{"l":"개장","v":"1987년"},{"l":"특징","v":"루아르 사냥 영지 코스"}],"ik":"forest golf, lake, france countryside"},{"r":98,"n":"디아만테","s":"멕시코 카보산루카스","m":"","d":"","dd":"데이비스 러브 3세가 설계해 2009년 개장한 멕시코 카보산루카스의 듄스 코스다. 태평양을 따라 펼쳐진 거대한 백사 사구 위에 조성돼 멕시코 1위 코스로 꾸준히 꼽힌다. 같은 리조트 단지에는 타이거 우즈가 설계한 엘 카르도날 코스도 있다.","tips":["프라이빗 리조트 커뮤니티 코스로 회원·투숙 게스트 중심으로 운영된다."],"stats":[{"l":"설계자","v":"데이비스 러브 3세"},{"l":"개장","v":"2009년"},{"l":"코스유형","v":"듄스 코스"}],"ik":"desert dunes, pacific ocean, cabo"},{"r":99,"n":"세인트 조지스","s":"캐나다 온타리오","m":"","d":"","dd":"캐나다 골프 설계의 거장 스탠리 톰프슨이 설계해 1929년 토론토 서부에 개장한 코스다. 계곡과 숲의 자연 굴곡을 살린 루팅으로 캐나다 최고 코스로 자주 꼽힌다. 캐나디안 오픈을 여섯 차례(1933~2022) 개최했다.","tips":["프라이빗 회원제 클럽이다."],"stats":[{"l":"설계자","v":"스탠리 톰프슨"},{"l":"개장","v":"1929년"},{"l":"대표대회","v":"캐나디안 오픈 6회"}],"ik":"wooded valley, parkland golf, toronto"},{"r":100,"n":"더 골프클럽","s":"미국 오하이오","m":"","d":"","dd":"피트 다이 초기 대표작으로 1967년 미국 오하이오 뉴올버니에 개장했다. 설계 당시 지역 출신의 젊은 잭 니클라우스가 샷 검증을 도우며 이후 다이-니클라우스 협업의 계기가 됐다. 침목 벙커 등 다이 특유의 조형이 원형대로 남아 있으며, 2013~2014년 P.B. 다이의 복원으로 원설계 의도가 유지되고 있다.","tips":["골프만을 위한 조용한 초프라이빗 클럽으로 회원 동반 없이는 방문할 수 없다."],"stats":[{"l":"설계자","v":"피트 다이"},{"l":"개장","v":"1967년"},{"l":"특징","v":"침목 벙커·미니멀 조성"}],"ik":"classic golf, railroad tie bunker, ohio"}]},{"g":"한국 골프장 TOP 50","items":[{"r":1,"n":"남해 사우스케이프 오너스클럽","s":"","m":"","d":"","dd":"경남 남해군 창선면의 해안 절벽 지형에 조성된 18홀 골프 리조트다. 미국 설계가 카일 필립스가 설계해 2013년 11월 개장했다. 18개 홀 중 16개 홀에서 남해 바다가 보이며, 바다를 건너 샷을 해야 하는 홀이 4개 있다. 국내외 코스 랭킹에서 한국 최상위권으로 꼽힌다.","tips":["회원권 없이 이용 가능한 고급 퍼블릭 리조트로, 그린피는 국내 최고 수준이다","호텔·스파를 갖춘 리조트형이라 숙박 연계 패키지 예약이 일반적이다"],"stats":[{"l":"소재지","v":"경남 남해군 창선면"},{"l":"설계자","v":"카일 필립스"},{"l":"개장","v":"2013년"}],"ik":"south cape,golf,ocean cliff"},{"r":2,"n":"제주 나인브릿지C.C","s":"","m":"","d":"","dd":"제주 서귀포시 안덕면 한라산 중산간에 자리한 18홀 회원제 클럽으로, CJ그룹이 운영한다. 로널드 프림과 데이비드 데일이 설계해 2001년 개장했다. 국내 최초로 세계 100대 코스에 선정됐고, 국내 최초의 PGA투어 정규 대회(더 CJ컵)를 개최했다. 클럽명은 코스 안의 9개 다리에서 따왔다.","tips":["회원제 클럽으로 회원 동반 또는 소개 없이는 라운드가 어렵다"],"stats":[{"l":"소재지","v":"제주 서귀포시 안덕면"},{"l":"설계자","v":"로널드 프림·데이비드 데일"},{"l":"개장","v":"2001년"}],"ik":"nine bridges,golf,jeju"},{"r":3,"n":"안양베네스트C.C","s":"","m":"","d":"","dd":"1968년 6월 개장한 경기 군포시 소재 18홀(파72) 회원제 골프장으로, 현재 명칭은 안양컨트리클럽이다. 개장 당시 일본 설계가 미야자와 조헤이가 설계했고, 1997년 로버트 트렌트 존스 2세의 수정 설계로 원 그린 체제로 리모델링됐다. 삼성물산 리조트부문이 운영하며 조경과 잔디 관리 수준으로 오랜 명성을 유지한다.","tips":["국내 대표 초명문 회원제로 비회원 단독 예약은 사실상 불가능하다"],"stats":[{"l":"소재지","v":"경기 군포시"},{"l":"개장","v":"1968년"},{"l":"홀수","v":"18홀(파72)"}],"ik":"anyang,golf,pine trees"},{"r":4,"n":"잭니클라우스C.C","s":"","m":"","d":"","dd":"인천 송도국제도시 매립지에 잭 니클라우스가 설계한 18홀 회원제 클럽으로 2010년 개장했다. 2015년 아시아 최초로 프레지던츠컵을 개최했다. 골프다이제스트 선정 2025-2026 대한민국 베스트 코스 1위에 올랐다.","tips":["회원제 클럽으로 회원 동반 없이는 이용이 어렵다"],"stats":[{"l":"소재지","v":"인천 연수구 송도"},{"l":"설계자","v":"잭 니클라우스"},{"l":"개장","v":"2010년"}],"ik":"jack nicklaus,golf,songdo"},{"r":5,"n":"우정힐스C.C","s":"","m":"","d":"","dd":"충남 천안에 있는 코오롱그룹 소유의 18홀 회원제 골프장으로 1993년 개장했다. 페리 오 다이(Perry O. Dye)가 설계했으며, 2003년부터 20년 넘게 내셔널 타이틀 대회인 코오롱 한국오픈의 개최 코스였다. 토너먼트 코스답게 벙커와 워터해저드 배치가 전략적이다.","tips":["회원제 골프장으로 비회원 단독 예약은 제한적이다"],"stats":[{"l":"소재지","v":"충남 천안시"},{"l":"설계자","v":"페리 오 다이"},{"l":"개장","v":"1993년"}],"ik":"woo jeong hills,golf,tournament"},{"r":6,"n":"웰링턴C.C (그린핀, 와이번코스)","s":"","m":"","d":"","dd":"경기 이천시 모가면에 있는 27홀 프라이빗 골프장이다. 2013년 10월 피닉스·그리핀 코스로 개장했고 2015년 9월 와이번 코스를 더해 27홀이 됐다. 루트 플랜은 송호가 잡았고 이후 노준택이 세부 리노베이션과 와이번 9홀을 설계했다. 코스명은 그리핀·피닉스·와이번 등 전설 속 동물에서 따왔다.","tips":["회원 중심의 프라이빗 클럽으로 외부 예약 문턱이 높다"],"stats":[{"l":"소재지","v":"경기 이천시 모가면"},{"l":"홀수","v":"27홀"},{"l":"개장","v":"2013년"}],"ik":"wellington,golf,garden"},{"r":7,"n":"휘슬링락C.C (템프르, 코쿤코스)","s":"","m":"","d":"","dd":"강원 춘천시 남산면에 2011년 9월 개장한 27홀(코쿤·템플·클라우드) 회원제 골프장이다. 코스는 테드 로빈슨 주니어가 설계했고, 클럽하우스와 그늘집은 네덜란드 건축그룹 메카누가 맡았다. 산을 크게 깎지 않고 지형을 살렸으며 약 2.5km의 계류와 7개의 폭포가 코스를 관통한다.","tips":["회원제 클럽으로 회원 동반 예약이 기본이다"],"stats":[{"l":"소재지","v":"강원 춘천시 남산면"},{"l":"설계자","v":"테드 로빈슨 주니어"},{"l":"개장","v":"2011년"}],"ik":"whistling rock,golf,mountain"},{"r":8,"n":"제이드팰리스C.C","s":"","m":"","d":"","dd":"강원 춘천시 남산면에 2004년 개장한 18홀 회원제 골프장으로, 한화호텔앤드리조트가 운영한다. 그렉 노먼이 설계했으며 71개의 샌드 페이스드 벙커와 6개의 연못이 배치돼 있다. KLPGA 메이저 대회인 한화클래식의 개최 코스로 쓰여 왔다.","tips":["소수 회원 중심의 프라이빗 클럽으로 일반 예약은 어렵다"],"stats":[{"l":"소재지","v":"강원 춘천시 남산면"},{"l":"설계자","v":"그렉 노먼"},{"l":"개장","v":"2004년"}],"ik":"jade palace,golf,forest"},{"r":9,"n":"해슬리 나인브릿지C.C","s":"","m":"","d":"","dd":"경기 여주시에 2009년 개장한 18홀(파72) 회원제 클럽으로, 제주 나인브릿지의 자매 클럽이다. 코스는 데이비드 데일이 설계했고, 목조 그리드 구조의 클럽하우스는 건축가 반 시게루와 KACI 윤경식이 공동 설계했다. 2013년 한국 최초로 '플래티넘 클럽스 오브 더 월드'에 선정됐다.","tips":["완전 회원제로 운영돼 회원 동반 없이는 입장이 어렵다"],"stats":[{"l":"소재지","v":"경기 여주시"},{"l":"설계자","v":"데이비드 데일"},{"l":"개장","v":"2009년"}],"ik":"haesley,golf,clubhouse"},{"r":10,"n":"해남 파인비치CC (파인, 비치코스)","s":"","m":"","d":"","dd":"전남 해남군 화원면의 리아스식 해안 절벽을 따라 조성된 골프장으로 2010년 9월 정식 개장했다. 게리 로저 베어드와 데이비드 데일이 함께 설계했다. 회원제 18홀(파인비치 골프링크스)과 퍼블릭 9홀(오시아노)로 구성되며, 18홀 중 9개 홀이 바다와 맞닿아 있다.","tips":["본 코스는 회원제, 오시아노 9홀은 퍼블릭으로 운영된다","남도 골프여행 수요가 많아 숙박 연계 패키지 상품이 활성화돼 있다"],"stats":[{"l":"소재지","v":"전남 해남군 화원면"},{"l":"설계자","v":"게리 로저 베어드·데이비드 데일"},{"l":"개장","v":"2010년"}],"ik":"pine beach,golf,sea cliff"},{"r":11,"n":"트리니티CC","s":"","m":"","d":"","dd":"경기 여주시에 2012년 개장한 18홀 회원제 클럽이다. 톰 파지오 2세가 코스를 설계했고, 클럽하우스에는 로버트 알트버스 등 해외 전문가가 참여했다. 극소수 회원만 받는 국내 대표적 초프라이빗 클럽으로 꼽힌다.","tips":["철저한 회원 중심 운영으로 외부인 예약은 사실상 불가능하다"],"stats":[{"l":"소재지","v":"경기 여주시"},{"l":"설계자","v":"톰 파지오 2세"},{"l":"개장","v":"2012년"}],"ik":"trinity club,golf,exclusive"},{"r":12,"n":"라비에벨CC (올드코스)","s":"","m":"","d":"","dd":"강원 춘천시 남쪽에 자리한 골프 리조트로, 회원제 골프장 산요수CC를 코오롱그룹이 인수해 2015년 4월 라비에벨로 재개장하며 퍼블릭으로 전환했다. 올드코스는 파71, 7,148야드 규모다. 클럽명은 '인생은 아름다워'라는 뜻의 프랑스어다.","tips":["대중제로 전환돼 비회원도 온라인 예약으로 이용 가능하다"],"stats":[{"l":"소재지","v":"강원 춘천시"},{"l":"개장","v":"2015년(재개장)"},{"l":"회원제 여부","v":"대중제"}],"ik":"la vie est belle,golf,valley"},{"r":13,"n":"제주 핀크스CC (east, west 코스)","s":"","m":"","d":"","dd":"제주 서귀포시 안덕면 중산간에 1999년 개장한 27홀 골프장으로, SK네트웍스 계열이다. 코스는 시어도어 로빈슨의 생애 마지막 작품이며, 클럽하우스와 포도호텔은 건축가 이타미 준이 설계했다. 세계 100대 골프장에 선정된 바 있고 월드골프어워드 '한국 최고 코스'에 여러 차례 뽑혔다.","tips":["회원제 중심이나 리조트(포도호텔) 숙박 연계 이용 경로가 있다"],"stats":[{"l":"소재지","v":"제주 서귀포시 안덕면"},{"l":"설계자","v":"시어도어 로빈슨"},{"l":"개장","v":"1999년"}],"ik":"pinx,golf,jeju hallasan"},{"r":14,"n":"이천 블랙스톤C.C (north, west 코스)","s":"","m":"","d":"","dd":"경기 이천시에 2010년 개장한 27홀 골프장이다. JMP 골프디자인그룹의 브라이언 코스텔로가 설계했으며, 회원제인 북·동코스와 비회원제인 서코스로 나뉜다. 2011년부터 2013년까지 유러피언투어 발렌타인 챔피언십을 개최했다.","tips":["북·동코스는 회원제, 서코스는 비회원제로 운영된다"],"stats":[{"l":"소재지","v":"경기 이천시"},{"l":"설계자","v":"브라이언 코스텔로(JMP)"},{"l":"개장","v":"2010년"}],"ik":"blackstone,golf,icheon"},{"r":15,"n":"세이지우드 여수 경도CC (금오도, 돌산도코스)","s":"","m":"","d":"","dd":"전남 여수 앞바다의 섬 경도에 조성된 27홀 대중제 골프장으로 2014년 4월 개장했다. 코스는 돌산도·금오도·오동도의 섬 이름을 땄으며 한려수도 바다 전망이 코스 전반에 펼쳐진다. 2020년 미래에셋이 사업 시행권을 넘겨받아 세이지우드 브랜드로 운영하고 있다.","tips":["대중제로 비회원 예약이 가능하다","섬에 위치해 여수 시내에서 배편으로 이동하는 구조다"],"stats":[{"l":"소재지","v":"전남 여수시 경도"},{"l":"홀수","v":"27홀"},{"l":"개장","v":"2014년"}],"ik":"yeosu,golf,island sea"},{"r":16,"n":"제주 블랙스톤C.C (East, South 코스)","s":"","m":"","d":"","dd":"제주시 한림읍 중산간에 자리한 27홀 회원제 골프 리조트다. JMP 골프디자인그룹이 설계했으며 곶자왈 원시림과 화산 지형을 살린 코스로 알려져 있다. 리조트 숙박 시설을 함께 갖추고 있다.","tips":["프리미엄 회원제 골프 리조트로 운영된다"],"stats":[{"l":"소재지","v":"제주시 한림읍"},{"l":"설계자","v":"JMP 골프디자인그룹"},{"l":"홀수","v":"27홀"}],"ik":"blackstone jeju,golf,volcanic"},{"r":17,"n":"스카이72CC (오션코스)","s":"","m":"","d":"","dd":"인천 중구 영종도에 2005년 개장한 국내 최대급 72홀 대중제 골프장의 대표 코스다. 오션코스는 니클라우스 디자인이 설계했으며 LPGA투어 대회를 장기간 개최했다. 2023년 운영사가 바뀌면서 명칭이 '클럽72'로 변경돼 현재는 클럽72 오션코스로 운영된다.","tips":["대중제 골프장으로 온라인 회원 가입 후 누구나 예약 가능하다","인천공항 인근이라 접근성이 좋고 주말 티타임 경쟁이 치열하다"],"stats":[{"l":"소재지","v":"인천 중구 영종도"},{"l":"설계자","v":"니클라우스 디자인(오션코스)"},{"l":"개장","v":"2005년"}],"ik":"sky72,golf,ocean links"},{"r":18,"n":"홍천세이지우드 (드림, 비전코스)","s":"","m":"","d":"","dd":"강원 홍천의 해발 700m대 고지대에 자리한 27홀 골프장으로 2013년 5월 블루마운틴CC로 개장했고 2019년 세이지우드 홍천으로 이름을 바꿨다. 잭 니클라우스 디자인이 코스를 만들었으며 드림·비전·챌린지 3개 코스로 구성된다. 미래에셋 계열의 골프·호텔 복합 리조트다.","tips":["호텔을 갖춘 리조트형으로 숙박 연계 패키지 이용이 많다"],"stats":[{"l":"소재지","v":"강원 홍천군"},{"l":"설계자","v":"잭 니클라우스 디자인"},{"l":"홀수","v":"27홀"}],"ik":"sagewood,golf,highland"},{"r":19,"n":"롯데스카이힐제주CC (오션, 스카이코스)","s":"","m":"","d":"","dd":"제주 서귀포시 중문관광단지 인근에 자리한 총 36홀 골프장으로 롯데그룹이 운영한다. 회원제 18홀은 스카이·오션 코스, 대중제 18홀은 힐·포레스트 코스로 구성된다. 한라산과 바다를 함께 조망하는 입지이며 대중제 코스는 제주 자연림을 살려 조성됐다.","tips":["스카이·오션 코스는 회원제, 힐·포레스트 코스는 대중제로 비회원 예약이 가능하다"],"stats":[{"l":"소재지","v":"제주 서귀포시"},{"l":"홀수","v":"36홀"},{"l":"회원제 여부","v":"회원제 18홀+대중제 18홀"}],"ik":"lotte skyhill,golf,jeju ocean"},{"r":20,"n":"사우스스프링스CC","s":"","m":"","d":"","dd":"경기 이천시 모가면에 있는 18홀(파72) 골프장이다. 짐 파지오가 설계해 2009년 휘닉스스프링스CC로 개장했고, 2016년 BGF그룹이 인수하면서 사우스스프링스로 이름을 바꾸고 퍼블릭으로 전환했다. 회원제 수준의 코스 관리로 고급 퍼블릭으로 분류된다.","tips":["비회원제(퍼블릭)로 운영돼 온라인 예약으로 이용 가능하다"],"stats":[{"l":"소재지","v":"경기 이천시 모가면"},{"l":"설계자","v":"짐 파지오"},{"l":"개장","v":"2009년"}],"ik":"south springs,golf,parkland"},{"r":21,"n":"더스타휴CC","s":"","m":"","d":"","dd":"경기 양평군 양동면에 있는 18홀(파72) 회원제 골프장으로 스타코스와 휴코스로 구성된다. 각 홀이 독립적으로 배치돼 옆 홀의 방해가 적고 전 홀에 양잔디를 식재했다. KLPGA투어 SH수협은행 MBN 여자오픈의 개최 코스로 쓰였다.","tips":["회원 예약제 중심의 프라이빗 골프장이다"],"stats":[{"l":"소재지","v":"경기 양평군 양동면"},{"l":"홀수","v":"18홀(파72)"},{"l":"회원제 여부","v":"회원제"}],"ik":"star hue,golf,private"},{"r":22,"n":"화산CC","s":"","m":"","d":"","dd":"경기 용인시 처인구에 1996년 개장한 18홀(파72) 회원제 골프장이다. 국내 설계가 임상하가 설계했으며 인위적 장애물을 배제하고 자연 지형에 순응하는 코스로 만들어졌다. 개장 이래 회원 중심의 정통 프라이빗 체제를 유지하고 있다.","tips":["정통 프라이빗 회원제로 비회원 단독 예약은 어렵다"],"stats":[{"l":"소재지","v":"경기 용인시 처인구"},{"l":"설계자","v":"임상하"},{"l":"개장","v":"1996년"}],"ik":"hwasan,golf,traditional"},{"r":23,"n":"서원밸리 (서원,밸리코스)","s":"","m":"","d":"","dd":"경기 파주시 금병산 자락에 2000년 6월 개장한 대보그룹 계열 골프장이다. 회원제 18홀은 정교한 샷이 필요한 서원코스와 그린 언듈레이션이 까다로운 밸리코스로 나뉘며, 인접한 퍼블릭 서원힐스를 합치면 총 45홀 규모다. 2000년부터 매년 무료 자선 그린콘서트를 여는 것으로 유명하다.","tips":["서원밸리는 회원제, 인접 서원힐스는 퍼블릭으로 운영된다"],"stats":[{"l":"소재지","v":"경기 파주시"},{"l":"개장","v":"2000년"},{"l":"회원제 여부","v":"회원제(서원힐스는 퍼블릭)"}],"ik":"seowon valley,golf,green concert"},{"r":24,"n":"가평 베네스트CC (메이플, 파인코스)","s":"","m":"","d":"","dd":"경기 가평군에 2004년 9월 개장한 27홀 회원제 골프장으로 삼성 계열이 운영한다. 잭 니클라우스가 설계했으며 메이플·파인·버치 3개 코스로 구성된다. 산악 지형 속에서도 코스 관리 수준이 높아 수도권 명문으로 꼽힌다.","tips":["회원제 골프장으로 비회원 단독 예약은 제한적이다"],"stats":[{"l":"소재지","v":"경기 가평군"},{"l":"설계자","v":"잭 니클라우스"},{"l":"개장","v":"2004년"}],"ik":"gapyeong benest,golf,forest"},{"r":25,"n":"양양 설해원CC (샐몬,씨뷰코스)","s":"","m":"","d":"","dd":"강원 양양군 손양면에 자리한 골프 리조트로 동해 바다에 인접해 있다. 씨뷰코스는 동해가 한눈에 들어오는 전망형 코스이고, 샐몬코스는 업다운이 섞여 전략적 플레이가 필요하다. 이 밖에 파인코스와 프로 대회가 열리는 더 레전드 코스를 함께 운영한다.","tips":["회원제 중심이지만 비회원 예약이 가능한 오픈 타임을 운영한다","리조트 숙박 연계 골프 패키지 이용이 많다"],"stats":[{"l":"소재지","v":"강원 양양군 손양면"},{"l":"회원제 여부","v":"회원제"}],"ik":"seolhaeone,golf,east sea"},{"r":26,"n":"거제 드비치CC","s":"","m":"","d":"","dd":"경남 거제시 장목면 바닷가에 자리한 18홀 골프장이다. 3면이 바다로 둘러싸인 시사이드 링크스 스타일 코스로, 홀 대부분에서 바다 조망이 열린다. 페어웨이 잔디를 난지형 중지로 전면 교체하는 등 리노베이션을 거쳤다.","tips":["회원제 골프장으로 정회원에게 그린피 면제·주말 부킹 권한 등이 주어진다","거제 여행과 묶은 1박 2일 골프 패키지 상품이 다수 운영된다"],"stats":[{"l":"소재지","v":"경남 거제시 장목면"},{"l":"홀수","v":"18홀"},{"l":"회원제여부","v":"회원제"}],"ik":"seaside links golf, ocean fairway, geoje coast"},{"r":27,"n":"몽베르CC (브렝땅,에떼코스)","s":"","m":"","d":"","dd":"경기 포천시 영북면에 자리한 36홀 골프장이다. 1990년 18홀로 개장한 뒤 2002년 36홀로 확장했으며, 국내 1세대 설계가 임상하와 미국 설계가 데스몬드 뮤어헤드가 설계에 참여했다. 코스에는 브렝땅·에떼 등 프랑스어 계절 이름이 붙어 있고, 산악 지형의 풍광이 뚜렷하다.","tips":["회원제 코스와 대중형 코스를 함께 운영하는 36홀 체제다"],"stats":[{"l":"소재지","v":"경기 포천시 영북면"},{"l":"설계자","v":"임상하·데스몬드 뮤어헤드"},{"l":"홀수","v":"36홀"}],"ik":"mountain golf course, korea fairway, autumn golf"},{"r":28,"n":"레인보우힐스CC (South, East 코스)","s":"","m":"","d":"","dd":"충북 음성군의 87만평 부지에 27홀만 앉힌 저밀도 골프장이다. 세계적 설계가 로버트 트렌트 존스 주니어가 설계해 2008년 개장했으며, 코스 안에서 인공 구조물이 거의 보이지 않는 숲속 정원형 레이아웃이 특징이다. DB그룹 한국여자오픈 개최지로도 쓰였다.","tips":["소수 회원제로 운영되다 2017년 2월 퍼블릭으로 전환해 일반 예약이 가능하다"],"stats":[{"l":"소재지","v":"충북 음성군"},{"l":"설계자","v":"로버트 트렌트 존스 주니어"},{"l":"개장연도","v":"2008년"}],"ik":"forest golf course, championship green, rolling hills golf"},{"r":29,"n":"강릉 샌드파인CC","s":"","m":"","d":"","dd":"강릉시 저동의 동해안 송림 지대에 조성된 18홀 골프장이다. 2007년 5월 개장했으며, 이름처럼 모래 지반과 소나무 숲을 살린 코스 사이로 홀이 이어진다. 강릉 시내·경포 권역과 가까워 동해안 골프 여행 코스로 묶이는 경우가 많다.","tips":["회원제 골프장으로 개장했으며, 인근 리조트와 연계한 골프 패키지가 운영된다"],"stats":[{"l":"소재지","v":"강원 강릉시 저동"},{"l":"개장연도","v":"2007년"},{"l":"홀수","v":"18홀"}],"ik":"pine forest golf, east coast korea, sandy fairway"},{"r":30,"n":"블루원상주CC","s":"","m":"","d":"","dd":"경북 상주시의 33만평 부지에 조성된 18홀 퍼블릭 골프 리조트다. 2008년 4월 개장했으며 2010년 태영그룹이 인수해 블루원 브랜드로 운영해 왔다. 2010년 한국 10대 퍼블릭 코스 평가에서 2위에 오르는 등 퍼블릭 코스 중 상위권 평가를 받아 왔다.","tips":["대중제(퍼블릭) 골프장으로 리조트 숙박과 묶은 1박 2일 패키지 예약이 활발하다"],"stats":[{"l":"소재지","v":"경북 상주시"},{"l":"개장연도","v":"2008년"},{"l":"회원제여부","v":"대중제(퍼블릭)"}],"ik":"golf resort korea, green fairway, lake golf hole"},{"r":31,"n":"남촌CC","s":"","m":"","d":"","dd":"경기 광주시 곤지암읍의 약 32만평 부지에 조성된 18홀 회원제 골프장이다. 2003년 김명길·송호 설계로 개장했고, 2016년 세계적 설계가 카일 필립스의 리뉴얼을 거쳐 코스가 재정비됐다. 자연 지형의 굴곡을 살린 레이아웃으로 수도권 명문 코스로 꼽힌다.","tips":["회원제 골프장으로 소수 회원 중심으로 운영되며 비회원 접근이 제한적이다"],"stats":[{"l":"소재지","v":"경기 광주시 곤지암읍"},{"l":"개장연도","v":"2003년"},{"l":"회원제여부","v":"회원제"}],"ik":"private golf club, manicured fairway, korea countryside golf"},{"r":32,"n":"평창 휘닉스CC","s":"","m":"","d":"","dd":"강원 평창의 휘닉스 파크 리조트 단지에 있는 18홀 회원제 골프장이다. 잭 니클라우스가 설계했으며 총 연장 6,338m로 1~9홀은 마운틴 코스, 10~18홀은 레이크 코스로 구성된다. 고원 지대의 서늘한 기후와 자연 지형을 살린 코스로 여름 라운드 수요가 많다.","tips":["회원제 기반으로 운영돼 예약은 정회원·가족회원 중심으로 진행된다","리조트 객실과 골프를 결합한 시즌 패키지가 판매된다"],"stats":[{"l":"소재지","v":"강원 평창군"},{"l":"설계자","v":"잭 니클라우스"},{"l":"홀수","v":"18홀"}],"ik":"highland golf course, mountain resort golf, morning fairway"},{"r":33,"n":"힐드로사이CC","s":"","m":"","d":"","dd":"강원 홍천군 남면에 자리한 18홀 골프장이다. 2011년 회원제로 개장했으며, 원시림 지형을 크게 훼손하지 않고 인공의 흔적을 줄인 자연형 코스 설계를 내세운다. 숲과 계곡 지형을 그대로 통과하는 홀 구성이 특징이다.","tips":["2016년 대중제로 전환해 일반 예약이 가능하다"],"stats":[{"l":"소재지","v":"강원 홍천군 남면"},{"l":"개장연도","v":"2011년"},{"l":"홀수","v":"18홀"}],"ik":"forest valley golf, natural golf course, misty fairway"},{"r":34,"n":"제주 세인트포CC (시엘로,보스코코스)","s":"","m":"","d":"","dd":"제주의 해발 80~130m 천연 상록 수림대에 조성된 골프장으로, 2004년 10월 27홀 회원제로 개장했다. 곶자왈 숲 지형을 살린 코스가 특징이며, 이후 한라그룹 계열에서 퍼블릭으로 전환됐다. 현재는 아난티가 인수해 '아난티 클럽 제주'로 운영되고 있다.","tips":["퍼블릭 전환 이후 일반 예약이 가능하며, 현재 명칭은 아난티 클럽 제주다"],"stats":[{"l":"소재지","v":"제주특별자치도"},{"l":"개장연도","v":"2004년"}],"ik":"jeju golf course, evergreen forest golf, volcanic island fairway"},{"r":35,"n":"페럼CC","s":"","m":"","d":"","dd":"경기 여주시 점동면에 있는 18홀 대중제 골프장으로 2014년 개장했다. 동국제강그룹이 조성했으며 미국 다이 디자인 그룹의 신시아 다이 맥그레이가 설계했다. 동·서 두 개 코스 18홀로, 프리미엄 퍼블릭을 표방하며 KLPGA E1 채리티 오픈 개최지로도 쓰였다.","tips":["회원권 없이 예약 가능한 프리미엄 퍼블릭 코스다"],"stats":[{"l":"소재지","v":"경기 여주시 점동면"},{"l":"설계자","v":"신시아 다이 맥그레이"},{"l":"개장연도","v":"2014년"}],"ik":"premium golf club, wide fairway, bunker green golf"},{"r":36,"n":"곤지암CC","s":"","m":"","d":"","dd":"경기 광주시 도척면 정광산 자락, 32만평 부지에 조성된 18홀 골프장이다. 도전적인 마운틴 코스와 세련된 레이크 코스로 구성되며, LG 계열의 비즈니스 명문 클럽으로 알려져 있다. 곤지암리조트와 같은 권역에 있어 접근성이 좋다.","tips":["회원 중심으로 운영되는 명문 회원제 클럽으로 비회원 부킹이 제한적이다"],"stats":[{"l":"소재지","v":"경기 광주시 도척면"},{"l":"홀수","v":"18홀"},{"l":"회원제여부","v":"회원제"}],"ik":"prestige golf club, lake course golf, tree lined fairway"},{"r":37,"n":"이스트밸리CC (South, East 코스)","s":"","m":"","d":"","dd":"경기 광주시 곤지암읍에 자리한 27홀 회원제 골프장이다. 동·남·서 세 개 코스가 각기 다른 개성으로 설계돼 조합에 따라 다른 라운드 경험을 준다. 국내 코스 랭킹 상위권에 꾸준히 오르는 수도권 대표 명문 클럽으로 꼽힌다.","tips":["회원제 명문 클럽으로 회원 동반 없이는 라운드가 어렵다"],"stats":[{"l":"소재지","v":"경기 광주시 곤지암읍"},{"l":"홀수","v":"27홀"},{"l":"회원제여부","v":"회원제"}],"ik":"valley golf course, elite country club, green hills golf"},{"r":38,"n":"블루헤런CC","s":"","m":"","d":"","dd":"경기 여주시 대신면에 있는 18홀 골프장이다. 1992년 '클럽700'이라는 이름으로 출발해 2002년 하이트진로그룹이 인수하면서 블루헤런으로 재개장했다. 데이비드 레인빌이 코스를 설계했으며, 남한강 인근의 완만한 구릉 지형에 홀이 배치돼 있다.","tips":["하이트진로그룹 계열에서 운영하는 18홀 골프장이다"],"stats":[{"l":"소재지","v":"경기 여주시 대신면"},{"l":"설계자","v":"데이비드 레인빌"},{"l":"홀수","v":"18홀"}],"ik":"heron lake golf, classic golf course, riverside fairway"},{"r":39,"n":"베어크리크CC (크리크코스)","s":"","m":"","d":"","dd":"경기 포천시에 2003년 개장한 36홀 골프장으로, 베어 코스와 크리크 코스 각 18홀로 구성된다. 크리크 코스는 2008년 노준택의 리노베이션을 거쳐 전홀 양잔디의 도전적인 코스로 탈바꿈했다. 산악 지형과 계류를 살린 레이아웃으로 국내 코스 평가에서 상위권에 오른다.","tips":["크리크 코스는 양잔디 페어웨이라 시즌·잔디 상태에 따라 그린피 편차가 있어 예약 시 확인이 필요하다"],"stats":[{"l":"소재지","v":"경기 포천시"},{"l":"개장연도","v":"2003년"},{"l":"홀수","v":"36홀(베어·크리크)"}],"ik":"creek golf course, bentgrass fairway, mountain golf korea"},{"r":40,"n":"고성 파인리즈CC (파인, 리즈코스)","s":"","m":"","d":"","dd":"강원 고성군 토성면 설악산 자락에 자리한 27홀 골프 리조트다. 2006년 18홀로 정식 개장한 뒤 9홀을 증설해 27홀 체제를 갖췄다. 울산바위와 동해가 함께 보이는 입지에 최장 630m 파5홀, 1.1km가 넘는 비치벙커, 직경 800m급 대형 호수 등 스케일이 큰 설계가 특징이다.","tips":["비회원제(대중형)로 운영되며 타워콘도·스파와 묶은 숙박 패키지가 많다"],"stats":[{"l":"소재지","v":"강원 고성군 토성면"},{"l":"개장연도","v":"2006년"},{"l":"홀수","v":"27홀"}],"ik":"seorak mountain golf, ocean view golf, long beach bunker"},{"r":41,"n":"스카이72CC (하늘코스)","s":"","m":"","d":"","dd":"인천국제공항 유휴부지 121만평에 조성된 국내 최대급 퍼블릭 골프장으로 2005년 개장했다. 하늘코스는 본단지와 별도의 클럽하우스를 둔 코스로, 대중 골퍼가 접근하기 쉬운 퍼블릭 코스로 인기를 끌었다. 2023년 운영사 변경으로 골프장 명칭이 '클럽72'로 바뀌었다.","tips":["퍼블릭 골프장으로 온라인 예약이 가능하며, 현재는 클럽72라는 이름으로 운영된다"],"stats":[{"l":"소재지","v":"인천 중구(영종도)"},{"l":"개장연도","v":"2005년"},{"l":"회원제여부","v":"퍼블릭"}],"ik":"links style golf, airport golf course, sky fairway"},{"r":42,"n":"일동레이크CC","s":"","m":"","d":"","dd":"경기 포천시 일동면에 1995년 개장한 18홀 골프장이다. 김학영이 전 KPGA 회장 김승학과 함께 설계·조성했으며, 남성적인 마운틴 코스와 여성적인 힐 코스로 구성된다. 코스 관리와 서비스 수준으로 경기 북부의 명문 코스로 꼽혀 왔다.","tips":["회원제 골프장으로 개장한 곳이라 예약 조건은 이용 전 확인이 필요하다"],"stats":[{"l":"소재지","v":"경기 포천시 일동면"},{"l":"개장연도","v":"1995년"},{"l":"홀수","v":"18홀"}],"ik":"lake golf club, reflection water golf, korea green course"},{"r":43,"n":"소노펠리체CC","s":"","m":"","d":"","dd":"강원 홍천군 서면 비발디파크 리조트 단지 안에 있는 골프장이다. 대명소노그룹(소노인터내셔널)이 운영하며, 단지 내에 웨스트·이스트 등 복수의 18홀 정규 코스를 갖추고 있다. 스키장·호텔과 한 단지에 있어 사계절 리조트형 골프가 가능하다.","tips":["회원(멤버십) 중심 혜택 체계가 있으며 공식 홈페이지에서 골프 예약을 받는다"],"stats":[{"l":"소재지","v":"강원 홍천군 서면"}],"ik":"resort golf course, alpine golf korea, luxury country club"},{"r":44,"n":"청평마이다스CC","s":"","m":"","d":"","dd":"경기 가평군에 있는 18홀 파72 회원제 골프장으로, 대교그룹이 조성해 2002년 '마이다스밸리'라는 이름으로 개장했다. 전반은 자연 지형을 살린 밸리 코스, 후반은 그리스풍 조형을 입힌 마이다스 코스로 구성된다. 친환경 인증을 받은 클럽하우스 등 시설 완성도가 높다.","tips":["대교그룹이 운영하는 회원제 클럽으로 비회원 예약이 제한적이다"],"stats":[{"l":"소재지","v":"경기 가평군"},{"l":"개장연도","v":"2002년"},{"l":"회원제여부","v":"회원제"}],"ik":"valley golf club, elegant clubhouse golf, gapyeong nature"},{"r":45,"n":"롯데스카이힐제주CC (힐, 포레스트코스)","s":"","m":"","d":"","dd":"제주 서귀포시 상예로에 있는 36홀 골프장으로 2005년 개장했다. 로버트 트렌트 존스 주니어가 설계했으며 회원제 18홀(스카이·오션)과 대중제 18홀(힐·포레스트)로 나뉜다. 한라산과 바다를 함께 조망하는 입지로 한국 10대 퍼블릭 코스 평가에 이름을 올렸다.","tips":["힐·포레스트 코스는 대중제라 비회원도 예약해 이용할 수 있다"],"stats":[{"l":"소재지","v":"제주 서귀포시"},{"l":"설계자","v":"로버트 트렌트 존스 주니어"},{"l":"개장연도","v":"2005년"}],"ik":"jeju ocean golf, hallasan view fairway, palm tree golf"},{"r":46,"n":"웰리힐리CC (South 코스)","s":"","m":"","d":"","dd":"강원 횡성군 둔내면 웰리힐리파크 리조트에 딸린 36홀 골프장이다. 로버트 트렌트 존스 주니어가 설계했으며, 산자락에 둘러싸인 분지형 남코스와 루프식으로 설계된 북코스로 구성된다. 고원 지대라 여름에도 비교적 서늘한 라운드가 가능하다.","tips":["웰리힐리파크 리조트 숙박과 연계한 골프 패키지가 운영된다"],"stats":[{"l":"소재지","v":"강원 횡성군 둔내면"},{"l":"설계자","v":"로버트 트렌트 존스 주니어"},{"l":"홀수","v":"36홀"}],"ik":"highland resort golf, basin golf course, green mountain korea"},{"r":47,"n":"베어즈베스트청라CC (오스트랄아시아, 아메리칸코스)","s":"","m":"","d":"","dd":"인천 서구 청라에 2012년 5월 개장한 27홀 골프장이다. 잭 니클라우스가 직접 디자인한 세계 290여 개 골프장 중 베스트 홀만 골라 그대로 재현한 레플리카 홀 구성이 특징이다. 오스트랄아시아·유럽·아메리카 세 개 9홀 코스로 나뉘며 총 길이 9,525m, 파 108이다.","tips":["홀마다 원본이 된 해외 코스가 명시돼 있어 코스 조합을 바꿔 즐기는 재미가 있다"],"stats":[{"l":"소재지","v":"인천 서구 청라"},{"l":"설계자","v":"잭 니클라우스"},{"l":"개장연도","v":"2012년"}],"ik":"signature golf holes, replica golf course, waterfront golf"},{"r":48,"n":"용평 버치힐CC","s":"","m":"","d":"","dd":"강원 평창군 모나용평 리조트 권역에 2004년 7월 개장한 18홀 회원제 골프장이다. 세계적 코스 디자이너 로널드 프림이 '자연을 그대로 담아낸다'는 콘셉트로 설계했다. 전 코스가 남향으로 배치돼 고지대임에도 플레이 가능 기간이 비교적 길다.","tips":["회원제 18홀이며 용평리조트 숙박과 묶은 36홀 골프 패키지가 판매된다"],"stats":[{"l":"소재지","v":"강원 평창군"},{"l":"설계자","v":"로널드 프림"},{"l":"개장연도","v":"2004년"}],"ik":"birch tree golf, alpine fairway, pyeongchang resort golf"},{"r":49,"n":"마에스트로CC","s":"","m":"","d":"","dd":"경기 안성시 양성면에 있는 골프장으로 2009년 회원제로 개장했다. 이후 2016년 대중제로 전환했으며, 현재 부영그룹 계열에서 운영한다. 7만 1천평 규모의 잔디를 전면 교체하는 리뉴얼을 거쳐 재개장하는 등 코스 관리에 투자를 이어 왔다.","tips":["2016년 대중제 전환 이후 비회원도 예약해 이용할 수 있다"],"stats":[{"l":"소재지","v":"경기 안성시 양성면"},{"l":"개장연도","v":"2009년"},{"l":"회원제여부","v":"대중제(전환)"}],"ik":"renovated golf course, fresh turf fairway, korea golf green"},{"r":50,"n":"남서울CC","s":"","m":"","d":"","dd":"경기 성남시에 있는 18홀 회원제 골프장으로 1971년 10월 개장했다. 허정구 삼양 회장이 주도해 설립한 한국 골프사의 산증인 격 코스로, 1986년부터 매경오픈을 꾸준히 개최해 온 대회 코스다. 서울 강남에서 20분 거리라는 입지에 홀과 홀 사이가 울창한 숲으로 분리된 정통 레이아웃을 갖췄다.","tips":["전통 명문 회원제 클럽으로 비회원 단독 부킹은 사실상 어렵다"],"stats":[{"l":"소재지","v":"경기 성남시"},{"l":"개장연도","v":"1971년"},{"l":"회원제여부","v":"회원제"}],"ik":"classic golf club, tournament golf course, old pine golf"}]}]},"wspot":{"t":"세계의 탐방지","ic":"fa-earth-americas","desc":"세계의 트레킹·산책 명소 110 + 아름다운 풍경 82.","tap":null,"groups":[{"g":"트레킹 · 산책 명소","items":[{"r":1,"n":"캐나다 클리어호","s":"","m":"","d":"아름다운 드라이브 코스와 등산로","dd":"매니토바주 라이딩마운틴 국립공원의 중심에 자리한 호수다. 호반 리조트 마을 와사가밍을 기점으로 남안·북안 호숫가 트레일이 이어지며, 침엽수림과 초원이 섞인 공원에서 무스와 엘크 등 야생동물을 관찰할 수 있다. 드라이브와 하이킹, 자전거를 함께 즐기는 여행지로 알려져 있다.","tips":["트레킹 적기는 5~10월이다","국립공원 차량 퍼밋(입장권)을 공원 게이트에서 구입해야 한다","남안 트레일은 왕복 26km 수준의 장거리 코스이므로 체력 안배가 필요하다"],"stats":[{"l":"국가","v":"캐나다"},{"l":"유형","v":"호수·국립공원"},{"l":"추천시기","v":"5~10월"}],"ik":"clear lake,riding mountain,manitoba"},{"r":2,"n":"스위스 제알프제호","s":"","m":"","d":"가장 아름다운 고산 호수로 손꼽힙","dd":"아펜첼 알프슈타인 산군의 해발 1,143m에 있는 고산 호수로, 스위스에서 가장 아름다운 고산 호수 중 하나로 꼽힌다. 잔잔한 수면에 젠티스 봉우리가 비치는 반영 풍경이 유명하다. 호수 옆 산장에서 식사를 하며 쉬어 갈 수 있다.","tips":["바서라우엔 기차역에서 도보 약 1시간의 오르막길로 접근한다","반영 사진은 바람이 없는 이른 아침이 가장 좋다"],"stats":[{"l":"국가","v":"스위스"},{"l":"유형","v":"고산 호수"},{"l":"해발","v":"1,143m"}],"ik":"seealpsee,appenzell,alps"},{"r":3,"n":"아르헨티나 라구나 델 카미난테","s":"","m":"","d":"캠핑과 하이킹으로 유명","dd":"티에라델푸에고의 우수아이아에서 약 25km 떨어진 산중 호수로, 캠핑을 겸한 1박 2일 트레킹 코스로 유명하다. 안도라 계곡을 따라 빙하가 깎은 골짜기와 늪지 숲, 바람 부는 고개를 넘어 편도 약 5시간을 걸어야 닿는다. 호숫가에 야영이 가능해 파타고니아 오지 분위기를 온전히 느낄 수 있다.","tips":["적기는 남반구 여름인 11~4월이다","출발 전 사전 등록이 의무이며 호숫가에서 불 피우기는 금지다","화장실·대피소가 없으므로 장비와 쓰레기 되가져오기를 철저히 준비한다"],"stats":[{"l":"국가","v":"아르헨티나"},{"l":"유형","v":"호수·트레킹"},{"l":"추천시기","v":"11~4월"}],"ik":"laguna del caminante,ushuaia,patagonia"},{"r":4,"n":"미국 텍사스주 가너 주립공원의 프리오강","s":"","m":"","d":"프리오강 주변의 오두막과 개인 주택은 그림 같은","dd":"텍사스 힐컨트리를 흐르는 맑고 차가운 프리오강을 낀 주립공원이다. 여름철 강에서 즐기는 튜빙과 수영이 대표 활동이며, 강변의 오두막과 사이프러스 나무가 그림 같은 풍경을 이룬다. 올드 발디 언덕에 오르면 강과 계곡이 한눈에 내려다보인다.","tips":["여름 성수기에는 매우 붐비므로 입장 예약을 미리 확인한다","튜빙은 수량이 안정적인 늦봄~여름이 적기다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"강·주립공원"},{"l":"추천시기","v":"늦봄~여름"}],"ik":"frio river,garner state park,texas"},{"r":5,"n":"콜롬비아 카보 데 라 벨라","s":"","m":"","d":"과히라 반도에서 가장 인기 있는 관광 명소","dd":"과히라 반도 사막 해안의 곶으로, 반도에서 가장 인기 있는 관광지로 꼽힌다. 와유족 원주민의 터전이자 카이트서핑 명소이며, 필론 데 아수카르 언덕과 등대에서 보는 일몰이 유명하다. 사막과 카리브해가 맞닿는 이색적인 풍경을 걸어서 둘러볼 수 있다.","tips":["포장도로가 없어 우리비아에서 4륜구동 차량으로 접근한다","숙소는 와유족 전통 해먹 숙소가 일반적이며 물과 현금을 넉넉히 준비한다"],"stats":[{"l":"국가","v":"콜롬비아"},{"l":"유형","v":"해안·사막"}],"ik":"cabo de la vela,la guajira,colombia"},{"r":6,"n":"이탈리아 레시아호","s":"","m":"","d":"호수의 최고 명소는 14세기에 물에 잠긴 교회의 종탑","dd":"남티롤의 인공 호수로, 1950년 댐 건설로 수몰된 쿠론 마을의 14세기 교회 종탑이 수면 위로 솟아 있는 풍경으로 유명하다. 호수 둘레를 따라 산책로와 자전거길이 정비되어 있다. 알프스 산자락과 종탑이 어우러진 사진 명소다.","tips":["겨울에 호수가 얼면 종탑 가까이까지 걸어갈 수 있다","호수 둘레 자전거 일주는 여름철에 인기가 많다"],"stats":[{"l":"국가","v":"이탈리아"},{"l":"유형","v":"호수"},{"l":"명물","v":"수몰 교회 종탑"}],"ik":"lake resia,bell tower,south tyrol"},{"r":7,"n":"미국 웨스트버지니아주 블랙워터 폭포","s":"","m":"","d":"이 폭포는 가장 많이 촬영된 장소로 손꼽힙","dd":"블랙워터강이 협곡으로 떨어지는 높이 약 19m(57~62피트)의 폭포로, 웨스트버지니아주에서 가장 많이 촬영되는 명소로 꼽힌다. 침엽수 잎에서 우러난 타닌 때문에 물빛이 짙은 호박색을 띠는 것이 이름의 유래다. 보드워크 계단을 따라 전망대까지 쉽게 내려갈 수 있다.","tips":["보드워크 계단 트레일은 짧지만 되돌아오는 오르막이 있다","단풍이 드는 가을과 얼어붙는 겨울 풍경이 특히 사진가에게 인기다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"폭포"},{"l":"낙차","v":"약 19m"}],"ik":"blackwater falls,west virginia,waterfall"},{"r":8,"n":"페루 우만따이 호수","s":"","m":"","d":"하이킹은 도중의 경치도 즐길 수 있다는 장점","dd":"쿠스코 근교 해발 약 4,200m에 있는 터키석 빛 빙하 호수다. 소라이팜파에서 왕복 트레킹으로 오르며, 오르는 내내 살칸타이 설산과 안데스 계곡의 경치를 함께 즐길 수 있다. 설산 아래 에메랄드빛 수면이 어우러진 풍경으로 인기가 높다.","tips":["고도가 높으므로 쿠스코에서 1~2일 고소 적응 후 오르는 것이 안전하다","건기인 5~9월이 트레킹 적기다","쿠스코발 당일 투어로 다녀올 수 있다"],"stats":[{"l":"국가","v":"페루"},{"l":"유형","v":"빙하 호수"},{"l":"해발","v":"약 4,200m"}],"ik":"humantay lake,peru,andes"},{"r":9,"n":"미국 텍사스 리오그란데강","s":"","m":"","d":"래프팅 및 협곡 하이킹을 즐기거나, 희귀한 야생 생물을 관찰","dd":"미국과 멕시코의 국경을 이루며 빅벤드 국립공원을 흐르는 강이다. 산타엘레나 협곡의 수직 절벽 사이로 래프팅과 카누를 즐기거나 협곡 하이킹 트레일을 걸을 수 있다. 사막과 강이 만나는 지대라 희귀한 야생 동식물 관찰지로도 알려져 있다.","tips":["한여름은 폭염이 심해 래프팅·하이킹 모두 늦가을~봄이 적기다","수량에 따라 래프팅 가능 구간이 달라지므로 현지 아웃피터에 사전 확인한다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"강·협곡"},{"l":"추천시기","v":"10~4월"}],"ik":"rio grande,big bend,santa elena canyon"},{"r":10,"n":"일본 미샤카이케 연못","s":"","m":"","d":"1년 내내 포토그래퍼들이 즐겨 찾는 최고의 촬영지","dd":"나가노현 치노시 야츠가타케 산기슭에 있는 농업용 저수지로, 잔잔한 수면에 낙엽송 숲이 비치는 반영 풍경으로 유명하다. 일본 화가 히가시야마 가이이의 명화의 모티프가 된 곳으로 알려지며 사계절 내내 사진가들이 찾는다. 신록·단풍·설경 등 계절마다 다른 색을 보여준다.","tips":["바람 없는 이른 아침에 가장 선명한 반영을 볼 수 있다","연못 안 출입과 낚시는 금지이며 도로변 주차장에서 바로 접근한다"],"stats":[{"l":"국가","v":"일본"},{"l":"유형","v":"연못(저수지)"},{"l":"명물","v":"숲 반영 풍경"}],"ik":"mishaka pond,nagano,reflection"},{"r":11,"n":"스코틀랜드 에티브호","s":"","m":"","d":"이 나라에서 가장 매력적인 곳 중 하나","dd":"글렌코 인근에서 바다로 이어지는 길이 약 30km의 좁고 긴 호수로, 스코틀랜드에서 가장 매력적인 경관지 중 하나로 꼽힌다. 글렌 에티브 계곡을 따라 내려가는 외길 드라이브와 호반 산책이 유명하다. 영화 007 스카이폴의 촬영지로 알려지며 더 많은 여행자가 찾게 되었다.","tips":["글렌 에티브 도로는 좁은 외길이므로 교행 지점(passing place)을 활용해 운전한다","여름철에는 흡혈 날파리(미지)가 많아 방충 대비가 필요하다"],"stats":[{"l":"국가","v":"영국(스코틀랜드)"},{"l":"유형","v":"호수(해수호)"}],"ik":"loch etive,glen etive,scotland"},{"r":12,"n":"잉글랜드 스테이시스","s":"","m":"","d":"이 마을은 이제 관광지로 더 유명","dd":"노스요크무어스 국립공원 해안의 옛 어촌 마을로, 지금은 어업보다 관광지로 더 유명하다. 소년 시절의 제임스 쿡 선장이 상점 견습으로 일했던 곳이며, 20세기 초에는 인상파 화가들의 모임인 스테이시스 그룹이 머물며 그림을 그렸다. 좁은 골목과 절벽 사이 항구, 클리블랜드 웨이 해안 산책로가 볼거리다.","tips":["마을 안은 차량 진입이 제한되어 언덕 위 주차장에 세우고 걸어 내려간다","썰물 때 해변에서 화석 찾기가 인기 활동이다"],"stats":[{"l":"국가","v":"영국(잉글랜드)"},{"l":"유형","v":"해안 마을"}],"ik":"staithes,yorkshire,fishing village"},{"r":13,"n":"키프로스 아야나파 해식동굴","s":"","m":"","d":"지하 80미터 이상 뻗어 있어 모험가들에게 인기","dd":"아야나파 동쪽 케이프 그레코 국립산림공원 초입의 석회암 해안에 파도가 깎아 만든 해식동굴 지대다. 동굴은 지하로 80m 이상 뻗어 있어 모험을 즐기는 이들에게 인기가 높다. 기암 해안과 투명한 바다, 일몰 풍경으로 유명하며 수영과 스노클링을 즐길 수 있다.","tips":["절벽 다이빙은 금지 표지가 있고 매년 사고가 발생하므로 삼간다","그늘과 편의시설이 없어 물·모자·선크림을 챙겨야 한다"],"stats":[{"l":"국가","v":"키프로스"},{"l":"유형","v":"해식동굴 해안"}],"ik":"sea caves,ayia napa,cyprus"},{"r":14,"n":"오스트리아 포어데러 호수","s":"","m":"","d":"호수 뒤편으로 다흐슈타인 글래시어의 아름다운 풍경","dd":"잘츠카머구트 고자우 계곡에 있는 호수(포어데러 고자우제)로, 호수 뒤편으로 다흐슈타인 빙하가 병풍처럼 펼쳐지는 전망으로 유명하다. 호수를 한 바퀴 도는 평탄한 산책로가 정비되어 있어 가족 단위로 걷기 좋다. 더 올라가면 힌터러 고자우제까지 이어지는 트레일도 있다.","tips":["호수 일주 산책은 1시간 남짓 걸리는 완만한 코스다","빙하 반영은 오전의 잔잔한 수면에서 잘 보인다"],"stats":[{"l":"국가","v":"오스트리아"},{"l":"유형","v":"산악 호수"},{"l":"전망","v":"다흐슈타인 빙하"}],"ik":"gosausee,dachstein,austria"},{"r":15,"n":"미국 안드로스코긴 강","s":"","m":"","d":"미국의 메인주와 뉴햄프셔주를 관통해 흐르는","dd":"뉴햄프셔주와 메인주를 관통해 약 286km(178마일)를 흐르는 강이다. 카누·카약과 플라이 낚시의 명소로, 강변을 따라 화이트마운틴 자락의 숲 경치가 이어진다. 한때 제지공장으로 심하게 오염되었다가 수질이 회복된 강으로도 알려져 있다.","tips":["여름~초가을이 패들링 적기다","구간별로 급류 난이도가 다르므로 초보자는 잔잔한 구간을 선택한다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"강"},{"l":"길이","v":"약 286km"}],"ik":"androscoggin river,maine,canoe"},{"r":16,"n":"아이슬란드 베스트마나에이야르 제도","s":"","m":"","d":"섬 대부분이 바위 투성이로 척박하며 가파른 절벽이","dd":"아이슬란드 남부 앞바다의 화산 군도로, 섬 대부분이 바위투성이의 척박한 지형과 가파른 절벽으로 이루어져 있다. 유일한 유인도 헤이마에이섬에서는 1973년 분화한 엘드페들 화산에 오를 수 있다. 세계 최대급 퍼핀(바다오리) 번식지로 여름철 조류 관찰이 대표 볼거리다.","tips":["본토 란데이야회픈 항에서 페리로 약 35~40분 걸린다","퍼핀 관찰 적기는 5~8월이다","날씨가 급변하므로 방풍 의류를 준비한다"],"stats":[{"l":"국가","v":"아이슬란드"},{"l":"유형","v":"화산 섬"},{"l":"추천시기","v":"5~8월"}],"ik":"westman islands,iceland,puffin"},{"r":17,"n":"프랑스 몽생미셸 섬","s":"","m":"","d":"매년 방문객이 300만 명 이상일 정도로 인기 있는 관광지","dd":"노르망디 앞바다 갯벌 위에 솟은 바위섬으로, 정상의 중세 수도원과 섬 전체가 1979년 유네스코 세계유산에 등재되었다. 연간 방문객이 300만 명에 이르는 프랑스 대표 관광지다. 조수 간만의 차가 큰 만을 배경으로 섬을 잇는 다리를 걷거나 가이드와 함께 갯벌을 횡단하는 산책이 인기다.","tips":["갯벌 걷기는 유사(빠지는 모래)와 밀물 위험 때문에 반드시 공인 가이드와 동행한다","성수기 낮 시간은 매우 혼잡하므로 이른 아침이나 저녁 방문이 좋다"],"stats":[{"l":"국가","v":"프랑스"},{"l":"유형","v":"조수 섬·수도원"},{"l":"세계유산","v":"1979년 등재"}],"ik":"mont saint michel,normandy,abbey"},{"r":18,"n":"알바니아-몬테네그로 접경지 슈코더르 호","s":"","m":"","d":"유럽 최고의 조류 서식지 중 하나인 습지","dd":"발칸반도 최대의 호수로 몬테네그로와 알바니아에 걸쳐 있다. 호수와 주변 습지는 유럽 최고 수준의 조류 서식지로, 희귀종인 달마시안 펠리컨을 비롯한 수많은 물새를 볼 수 있다. 몬테네그로 쪽은 국립공원으로 지정되어 보트 투어와 호반 마을 산책, 와이너리 방문이 인기다.","tips":["조류 관찰은 봄과 초여름이 적기다","비라지르(몬테네그로) 등에서 출발하는 보트 투어로 수련 군락과 습지를 둘러볼 수 있다"],"stats":[{"l":"국가","v":"몬테네그로·알바니아"},{"l":"유형","v":"호수·습지"},{"l":"명물","v":"달마시안 펠리컨"}],"ik":"lake skadar,montenegro,wetland"},{"r":19,"n":"포르투갈 남서부 알렌테조 비센틴 해안 자연공원","s":"","m":"","d":"아름다운 해안선을 감상하며 긴 산책을 하기에 알맞은","dd":"포르투갈 남서부 대서양 연안을 따라 약 100km 이어지는 해안 보호구역이다. 절벽 위로 난 장거리 트레일 로타 비센티나의 '어부의 길'을 걸으며 야생 해안선을 감상하는 긴 산책에 알맞다. 절벽에 둥지를 트는 황새 등 야생 조류와 한적한 해변이 볼거리다.","tips":["트레킹 적기는 봄(3~6월)과 가을(9~10월)로 한여름은 그늘이 없어 덥다","어부의 길은 모래길 구간이 많아 하루 도보 거리를 여유 있게 잡는다"],"stats":[{"l":"국가","v":"포르투갈"},{"l":"유형","v":"해안 자연공원"},{"l":"추천시기","v":"봄·가을"}],"ik":"rota vicentina,alentejo coast,portugal"},{"r":20,"n":"불가리아 흑해 해안","s":"","m":"","d":"여행객들에게 인기 있는 여름 관광지","dd":"불가리아 동쪽으로 약 378km 이어지는 흑해 연안으로, 여름철 유럽 여행객에게 인기 있는 휴양지다. 써니비치·골든샌즈 같은 대형 리조트 해변과 유네스코 세계유산 고도 네세바르의 옛 시가지가 공존한다. 해변 산책과 물놀이, 고대 유적 탐방을 함께 즐길 수 있다.","tips":["해수욕 적기는 6~9월이다","네세바르 구시가는 반나절 도보 관광에 알맞다"],"stats":[{"l":"국가","v":"불가리아"},{"l":"유형","v":"해안"},{"l":"추천시기","v":"6~9월"}],"ik":"black sea coast,bulgaria,nessebar"},{"r":21,"n":"뉴질랜드 트와이젤 에메랄드그린 풀","s":"","m":"","d":"그림같이 아름다운 녹색 에메랄드빛 호수가 산을 배경","dd":"남섬 매켄지 분지의 트와이젤 인근, 푸카키호 주변에서 볼 수 있는 에메랄드빛 물웅덩이다. 빙하가 갈아낸 미세한 암분이 물에 섞여 산을 배경으로 그림 같은 녹색 물빛을 만든다. 마운트쿡으로 가는 길목이라 호수 드라이브와 함께 들르기 좋다.","tips":["푸카키호·마운트쿡 드라이브와 묶어 방문하면 효율적이다","인근 오마라마의 클레이 클리프(점토 절벽) 트랙도 함께 걷기 좋다"],"stats":[{"l":"국가","v":"뉴질랜드"},{"l":"유형","v":"빙하수 풀·호수"}],"ik":"emerald pools,twizel,lake pukaki"},{"r":22,"n":"스페인 부포네스 데 쁘리아","s":"","m":"","d":"아름다운 자연 현상으로 유명","dd":"아스투리아스 야네스 인근 해안 절벽에 발달한 천연 분기공(블로홀) 지대다. 파도가 거칠 때 바닷물과 공기가 바위틈으로 솟구쳐 20m가 넘는 물기둥과 우렁찬 굉음을 만드는 자연 현상으로 유명하다. 2001년 아스투리아스 자연기념물로 지정되었으며 절벽 위 초지를 따라 걸으며 관람한다.","tips":["물기둥은 파도가 거센 10~3월 만조 때 가장 장관이다","분기공 구멍 가까이 접근하면 위험하므로 거리를 유지한다","입장과 주차 모두 무료다"],"stats":[{"l":"국가","v":"스페인"},{"l":"유형","v":"해안 분기공"},{"l":"추천시기","v":"10~3월"}],"ik":"bufones de pria,asturias,blowhole"},{"r":23,"n":"잉글랜드 레이크 디스트릭트 더웬트호","s":"","m":"","d":"숲과 언덕의 오솔길을 지나는 자연 산책로는 관광객들에게 인기","dd":"레이크 디스트릭트 국립공원의 케즈윅 마을 옆에 있는 호수다. 숲과 언덕의 오솔길을 지나 호수를 한 바퀴 도는 약 16km의 자연 산책로가 관광객에게 인기다. 유람선이 호숫가 선착장들을 오가므로 걷기와 배 타기를 조합할 수 있고, 캣벨스 언덕에 오르면 호수 전경이 내려다보인다.","tips":["호수 일주가 길다면 유람선으로 구간을 건너뛰며 걸을 수 있다","비가 잦은 지역이므로 방수 재킷과 방수 신발을 준비한다"],"stats":[{"l":"국가","v":"영국(잉글랜드)"},{"l":"유형","v":"호수"},{"l":"일주 산책로","v":"약 16km"}],"ik":"derwentwater,keswick,lake district"},{"r":24,"n":"독일 쾨니제 호수","s":"","m":"","d":"맑은 물로 유명하며 독일에서 가장 깨끗한 호수","dd":"바이에른 베르히테스가덴 국립공원에 있는 빙하 협곡 호수로, 독일에서 가장 깨끗한 호수로 꼽힌다. 1909년부터 전기 유람선만 운항해 물이 맑게 유지되며, 뱃길로만 닿는 성 바르톨로메 순례교회가 대표 풍경이다. 유람선이 절벽 앞에서 멈춰 트럼펫 메아리를 들려주는 것으로도 유명하다.","tips":["성수기에는 유람선 대기 줄이 길므로 아침 일찍 승선한다","성 바르톨로메에서 내려 빙벽 아래 예배당(아이스카펠레) 방면 트레일을 걸을 수 있다"],"stats":[{"l":"국가","v":"독일"},{"l":"유형","v":"호수"},{"l":"명물","v":"전기 유람선·성 바르톨로메"}],"ik":"konigssee,bavaria,st bartholomew"},{"r":25,"n":"폴란드 모르스키에 오코","s":"","m":"","d":"혼잡함을 피하려면 이른 아침 오솔길에 오르는 여행","dd":"타트라 산맥 최대의 호수로 폴란드에서 가장 유명한 산악 명소 중 하나다. 팔레니차 비아우찬스카 주차장에서 포장된 숲길을 편도 약 9km 걸어 오르며, 호숫가 산장에서 쉬어 갈 수 있다. 험준한 봉우리에 둘러싸인 짙은 물빛이 볼거리이며, 더 위쪽의 차르니 스타브 호수까지 이어 걸을 수 있다.","tips":["혼잡을 피하려면 이른 아침에 오솔길에 오른다","여름 성수기·주말에는 주차장이 일찍 만차가 되므로 예약 또는 셔틀을 이용한다"],"stats":[{"l":"국가","v":"폴란드"},{"l":"유형","v":"산악 호수"},{"l":"도보 접근","v":"편도 약 9km"}],"ik":"morskie oko,tatra mountains,poland"},{"r":26,"n":"스위스 에게리 호수","s":"","m":"","d":"호수 주변 등산로는 산책하기에 정말 훌륭","dd":"추크주의 완만한 구릉 지대에 자리한 면적 7.2km²의 호수다. 호수 주변으로 정비된 호반 산책로와 등산로가 걷기에 훌륭하고, 유람선과 수상 스포츠도 즐길 수 있다. 호수 남쪽 기슭은 1315년 스위스 건국사에 남은 모르가르텐 전투의 현장으로, 기념비와 테마 트레일이 있다.","tips":["오버에게리에서 모르가르텐을 지나 호수를 도는 순환 코스가 대표 산책로다","가족 여행이라면 5km의 모르가르텐 테마 트레일이 걷기 쉽다"],"stats":[{"l":"국가","v":"스위스"},{"l":"유형","v":"호수"},{"l":"면적","v":"7.2km²"}],"ik":"aegerisee,zug,switzerland"},{"r":27,"n":"독일 모젤","s":"","m":"","d":"굽이굽이 흐르는 모젤강의 잊지 못할 경치","dd":"포도밭 언덕 사이를 굽이굽이 흐르는 모젤강 계곡으로, 독일 대표 화이트와인 산지이자 강변 드라이브 명소다. 유럽에서 가장 가파른 포도밭으로 알려진 칼몬트 절벽과 코헴·베른카스텔쿠에스 같은 고성 와인 마을이 이어진다. 강을 따라 장거리 하이킹 트레일 모젤슈타이크가 정비되어 있다.","tips":["포도 수확기인 9~10월에는 마을마다 와인 축제가 열린다","칼몬트 클라이밍 트레일은 급경사 구간이 있어 등산화가 필요하다"],"stats":[{"l":"국가","v":"독일"},{"l":"유형","v":"강·와인 계곡"},{"l":"추천시기","v":"5~10월"}],"ik":"moselle river,vineyards,cochem"},{"r":28,"n":"일본 이케마 오하시 다리(드라이브만)","s":"","m":"","d":"푸른 하늘, 하얀 구름, 에메랄드 그린 바다의 아름다운 태피스트리","dd":"오키나와 미야코섬과 이케마섬을 잇는 길이 1,425m의 해상 대교로 1992년 개통했다. 푸른 하늘과 에메랄드그린 산호초 바다 위를 달리는 드라이브 코스로 유명하다. 다리 양끝 전망 포인트에서 바다 빛깔이 층층이 변하는 풍경을 감상할 수 있다.","tips":["바다 빛이 가장 선명한 맑은 날 낮 시간에 건너는 것이 좋다","다리 위는 정차 금지이므로 사진은 양끝 주차 공간에서 찍는다"],"stats":[{"l":"국가","v":"일본"},{"l":"유형","v":"해상 대교·드라이브"},{"l":"길이","v":"1,425m"}],"ik":"ikema bridge,miyako island,okinawa"},{"r":29,"n":"태국 아오누이 베이 해변","s":"","m":"","d":"아름다운 U자 모양과 멋진 바다 전망으로 유명","dd":"피피돈섬 서해안에 숨어 있는 작은 만으로, 석회암 절벽과 정글에 둘러싸인 반원형(U자형) 지형과 바다 전망으로 유명하다. 길이 60m 남짓의 아담한 백사장은 호텔이나 편의시설이 없어 한적하다. 만 양쪽으로 산호초가 발달해 스노클링 명소로 꼽히며, 썰물 때는 해변 옆 동굴도 둘러볼 수 있다.","tips":["로달럼 해변에서 롱테일 보트로 약 10분, 카약으로는 편도 35~45분 걸린다","매점이 없으므로 물과 간식을 챙겨 간다"],"stats":[{"l":"국가","v":"태국"},{"l":"유형","v":"해변"},{"l":"활동","v":"스노클링·카약"}],"ik":"nui bay,phi phi island,thailand"},{"r":30,"n":"잉글랜드 게이츠가스데일 강","s":"","m":"","d":"컴브리아에 시냇물은  따라 멋진 드라이브 경치","dd":"컴브리아 레이크 디스트릭트의 호니스터 고개를 따라 흘러 버터미어 호수로 들어가는 길이 3km 남짓의 계류다. 시냇물을 따라 넘는 호니스터 패스는 정상 고도 약 356m로 컴브리아에서 가장 높은 고갯길 중 하나이며, 멋진 드라이브 경치로 유명하다. 고개 정상의 슬레이트 광산에서 그레이트 게이블 방면 등산로가 시작된다.","tips":["고갯길은 경사 1:4의 급구간이 있어 저단 기어로 천천히 운전한다","케즈윅~보로데일~버터미어를 잇는 순환 드라이브 코스로 묶어 돌기 좋다"],"stats":[{"l":"국가","v":"영국(잉글랜드)"},{"l":"유형","v":"계류·고갯길"},{"l":"고개 정상","v":"약 356m"}],"ik":"honister pass,buttermere,lake district"},{"r":31,"n":"네덜란드 큐켄호프 공원 (정원)","s":"","m":"","d":"세계 최대 꽃 정원 중 하나로 추정","dd":"암스테르담 근교 리세에 있는 세계 최대급 꽃 정원으로, 32ha 부지에 매년 약 700만 개의 구근 꽃이 심긴다. 튤립을 중심으로 수선화·히아신스가 만발한 화단 사이 산책로를 걷는 봄 한정 명소다. 정원 주변 구근 재배 단지의 색색 꽃밭 풍경도 볼거리다.","tips":["개장 기간이 3월 하순~5월 중순으로 짧으므로 일정을 먼저 확인한다","튤립 절정은 통상 4월 중순이며 주말보다 평일 오전이 한산하다"],"stats":[{"l":"국가","v":"네덜란드"},{"l":"유형","v":"정원"},{"l":"개장","v":"3월 하순~5월 중순"}],"ik":"keukenhof,tulips,netherlands"},{"r":32,"n":"스코틀랜드 우주적 사색의 정원","s":"","m":"","d":"경관 예술가이자 문화 이론가인 찰스 젱스가 설계","dd":"덤프리스 인근 포트랙 하우스에 경관 예술가이자 문화 이론가인 찰스 젱크스가 설계한 사유 정원이다. 프랙털·블랙홀·DNA 등 과학과 우주의 개념을 나선형 둔덕과 연못, 조형물로 표현한 독특한 경관으로 유명하다. 평소에는 비공개이며 자선 개방 행사 때만 관람할 수 있다.","tips":["연중 극히 제한된 날(통상 5월경 자선 개방일)에만 입장할 수 있으므로 공개 일정을 미리 확인한다"],"stats":[{"l":"국가","v":"영국(스코틀랜드)"},{"l":"유형","v":"정원"},{"l":"설계","v":"찰스 젱크스"}],"ik":"garden of cosmic speculation,scotland,landform"},{"r":33,"n":"영국 큐 왕립식물원","s":"","m":"","d":"엑스트라타 트리톱 워크웨이를 따라 산책","dd":"런던 남서부에 있는 왕립식물원으로 2003년 유네스코 세계유산에 등재되었다. 지상 18m 높이에서 숲 위를 걷는 길이 200m의 트리톱 워크웨이 산책이 대표 체험이다. 빅토리아 시대의 팜 하우스 온실과 방대한 살아 있는 식물 컬렉션, 넓은 수목원 산책로가 볼거리다.","tips":["부지가 넓어 반나절 이상 잡고 도는 것이 좋다","봄 구근 개화기와 가을 단풍철이 산책하기 좋은 시기다"],"stats":[{"l":"국가","v":"영국"},{"l":"유형","v":"식물원"},{"l":"세계유산","v":"2003년 등재"}],"ik":"kew gardens,london,treetop walkway"},{"r":34,"n":"파키스탄 살리마르 정원","s":"","m":"","d":"이 정원에는 총 410개의 분수와 5개의 작은 물폭포가","dd":"라호르에 있는 무굴 제국의 정원으로, 1641~1642년 샤자한 황제 때 조성되었다. 3단 테라스 구조에 총 410개의 분수와 작은 물폭포 5개가 배치된 물의 정원으로 유명하다. 라호르 성과 함께 1981년 유네스코 세계유산에 등재되었으며, 대리석 정자와 수로를 따라 걷는 정원 산책이 볼거리다.","tips":["한낮 더위를 피해 아침이나 늦은 오후에 방문하는 것이 좋다","라호르 성·바드샤히 모스크와 묶어 하루 코스로 돌기 좋다"],"stats":[{"l":"국가","v":"파키스탄"},{"l":"유형","v":"정원(무굴)"},{"l":"세계유산","v":"1981년 등재"}],"ik":"shalimar gardens,lahore,mughal"},{"r":35,"n":"오스트리아 크림믈 폭포","s":"","m":"","d":"폭포뿐 아니라 그 부근 전체가 세계적인 절경","dd":"호에타우에른 국립공원에 있는 총 낙차 380m의 오스트리아 최고(最高) 폭포다. 3단으로 떨어지는 폭포를 따라 지그재그로 오르는 약 4km의 관람로에서 단마다 다른 각도의 물보라 풍경을 볼 수 있다. 폭포뿐 아니라 주변 계곡 전체가 알프스의 절경 지대로 꼽힌다.","tips":["관람로는 왕복 2~3시간의 오르막이므로 편한 신발이 필요하다","물보라가 많아 방수 겉옷이 유용하며 개장 기간은 대체로 봄~가을이다"],"stats":[{"l":"국가","v":"오스트리아"},{"l":"유형","v":"폭포"},{"l":"총 낙차","v":"380m"}],"ik":"krimml waterfalls,austria,alps"},{"r":36,"n":"캐나다 리어가드 폭포","s":"","m":"","d":"웅장한 숲, 동굴, 모래 해변을 따라 펼쳐진 등산","dd":"브리티시컬럼비아주 프레이저강 상류의 폭포로, 주립공원으로 보호된다. 바다에서 약 1,260km를 거슬러 오른 치누크 연어가 도달하는 프레이저강 소상의 사실상 마지막 지점으로 유명하다. 숲길 보드워크를 따라 전망대까지 짧게 걸어 내려가 폭포와 연어의 도약을 관찰할 수 있다.","tips":["연어 관찰 적기는 8월 중순~9월 중순이다","전망대 주변은 강가 바위가 미끄러우므로 난간 안에서 관람한다"],"stats":[{"l":"국가","v":"캐나다"},{"l":"유형","v":"폭포"},{"l":"연어 관찰","v":"8월 중순~9월 중순"}],"ik":"rearguard falls,fraser river,salmon"},{"r":37,"n":"미국 알래스카주 레저렉션만","s":"","m":"","d":"모험을 즐기려면 카약이나 요트를 타고 탐험","dd":"알래스카 수어드 앞에 펼쳐진 피오르 만으로, 키나이 피오르 국립공원의 관문이다. 카약이나 요트·크루즈를 타고 빙하와 절벽 해안을 탐험하며 범고래·혹등고래·해달·바다사자 등 해양 야생동물을 관찰할 수 있다. 만을 둘러싼 산에는 수어드에서 오르는 트레일도 있다.","tips":["야생동물 크루즈와 카약 투어 적기는 5~9월이다","여름에도 해상 날씨가 쌀쌀하므로 방풍·방수 의류를 준비한다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"피오르 만"},{"l":"추천시기","v":"5~9월"}],"ik":"resurrection bay,seward,alaska"},{"r":38,"n":"미국 애리조나주 포메로이 탱크","s":"","m":"","d":"등산로는 등산객, 암벽 등반가 및 자연 애호가","dd":"애리조나주 윌리엄스 인근 카이바브 국유림에 있는 천연 암반 물웅덩이 지대다. 연중 마르지 않는 웅덩이에 토종 물고기가 서식하고 야생동물이 물을 마시러 모여든다. 약 18km의 시커모어 림 순환 트레일 구간에 포함되어 등산객과 인근 시커모어 폭포의 암벽 등반가들이 함께 찾는다.","tips":["I-40 도로 167번 출구(갈랜드 프레리 로드)에서 임도 FR141·FR56을 따라 트레일헤드에 도착한다","고원지대라 봄~가을이 걷기에 적당하고, 여름 오후에는 뇌우가 잦다","시커모어 림 순환 전체는 약 18km·4~5시간이 걸리므로 물을 넉넉히 준비한다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"암반 못·트레일"},{"l":"추천시기","v":"봄~가을"}],"ik":"sycamore canyon arizona, forest pond, hiking trail"},{"r":39,"n":"폴란드 모르스키에 오코","s":"","m":"","d":"타트라스 산에서 가장 큰 호수는 해발 1,395미터, 8킬로 등산","dd":"타트라 산맥에서 가장 큰 호수로 해발 1,395m의 타트라 국립공원 안에 있다. 리시(Rysy) 등 침봉들이 호수를 병풍처럼 둘러싸 폴란드를 대표하는 산악 풍경으로 꼽힌다. 팔레니차 비아우찬스카 주차장에서 포장된 산길을 따라 편도 약 8km를 걸어 올라간다.","tips":["차량 진입이 금지되어 왕복 약 16km를 걷거나 마차를 이용한다","여름 성수기에는 매우 붐비므로 이른 아침 출발이 유리하다","겨울~초봄에는 결빙과 눈사태 위험 구간이 있어 장비와 정보 확인이 필요하다"],"stats":[{"l":"국가","v":"폴란드"},{"l":"유형","v":"산정호수"},{"l":"해발","v":"1,395m"}],"ik":"morskie oko, tatra mountains, mountain lake"},{"r":40,"n":"스위스 에게리 호수","s":"","m":"","d":"추크 주에 위치한 이 호수 주변 등산로","dd":"스위스 추크주 해발 724m에 자리한 호수로, 물빛이 맑고 호반을 따라 평탄한 산책로가 이어진다. 호수 남쪽 끝 모르가르텐은 1315년 스위스 연방군이 합스부르크군을 물리친 전투의 현장으로 기념비가 서 있다. 능선을 따라 호수를 내려다보는 약 18km의 에게리탈 파노라마 트레일도 조성되어 있다.","tips":["취리히·추크에서 기차와 버스로 운터에게리·오버에게리까지 접근한다","호반 산책로는 경사가 거의 없어 유모차·휠체어로도 다닐 수 있다","모르가르텐 기념비와 호수를 묶은 순환 코스가 대표 하이킹 루트다"],"stats":[{"l":"국가","v":"스위스"},{"l":"유형","v":"호수"},{"l":"해발","v":"724m"}],"ik":"aegerisee, switzerland lake, alps hiking"},{"r":41,"n":"독일 모젤","s":"","m":"","d":"바일슈타인에는 흐르는 모젤강 메테르니히 성터","dd":"모젤강은 독일 서부를 굽이쳐 흐르는 라인강의 지류로, 강변 급경사면에 포도밭이 펼쳐진 화이트와인 산지다. 강가의 소읍 바일슈타인은 '모젤의 잠자는 미녀'로 불리는 옛 마을로, 언덕 위 메테르니히 성터에 오르면 강과 마을이 한눈에 내려다보인다. 강을 따라 장거리 트레일 모젤슈타이크가 이어져 도보 여행지로도 알려져 있다.","tips":["인근 코헴에서 유람선이나 버스로 바일슈타인에 닿을 수 있다","5~10월 와인 시즌에 방문하면 포도밭 풍경과 와이너리 시음을 함께 즐길 수 있다"],"stats":[{"l":"국가","v":"독일"},{"l":"유형","v":"강·와인 계곡"},{"l":"추천시기","v":"5~10월"}],"ik":"moselle river, beilstein germany, vineyard valley"},{"r":42,"n":"일본 이케마 오하시 다리","s":"","m":"","d":"미야코지마와 이케마 섬을 이어주는","dd":"오키나와 미야코지마와 이케마섬을 잇는 전장 1,425m의 해상 대교로 1992년 개통했다. 선박 통행을 위해 중앙부가 솟은 곡선 구조이며, 다리 아래로 '미야코 블루'로 불리는 에메랄드빛 바다가 펼쳐진다. 다리 너머로 니시헨나곶과 오가미섬 전망이 이어진다.","tips":["다리 위 정차는 금지이므로 양쪽 끝 전망대와 휴게소에서 경치를 감상한다","맑은 날 오전~한낮에 바다 빛깔이 가장 선명하다","렌터카나 자전거로 건너며 왕복하는 코스가 일반적이다"],"stats":[{"l":"국가","v":"일본"},{"l":"유형","v":"해상 대교"},{"l":"길이","v":"1,425m"}],"ik":"ikema bridge, miyakojima, emerald sea"},{"r":43,"n":"태국 아오누이 베이 해변","s":"","m":"","d":"끄라비에 위치한 한적한 해변은 아름다운 U자 모양과 멋진 바다 전망으로 유명","dd":"태국 끄라비 지역의 작고 한적한 후미 해변으로, 석회암 곶이 만을 감싸 U자형의 아늑한 지형을 이룬다. 접근이 쉽지 않아 찾는 사람이 적고, 주변 바다는 물이 맑아 스노클링 장소로 알려져 있다. 개발이 거의 되지 않아 조용한 해변 풍경이 그대로 남아 있다.","tips":["보트나 카약, 또는 산길 도보로만 접근할 수 있어 사전에 이동 수단을 정해 둔다","편의시설이 거의 없으므로 식수와 간식을 챙겨 간다","건기인 11~4월이 바다가 잔잔해 방문하기 좋다"],"stats":[{"l":"국가","v":"태국"},{"l":"유형","v":"해변"},{"l":"추천시기","v":"11~4월(건기)"}],"ik":"krabi hidden beach, thailand cove, limestone cliffs"},{"r":44,"n":"잉글랜드 게이츠가스데일 강","s":"","m":"","d":"컴브리아에 위치한 그림같은 시냇물은 호니스터 패스를 따라","dd":"잉글랜드 컴브리아 레이크 디스트릭트의 호니스터 패스 정상부에서 발원해 서쪽으로 흘러 버터미어 호수로 들어가는 길이 약 3km의 산간 시냇물이다. 자갈 바닥과 큰 바위들 사이를 흐르는 물줄기 양쪽으로 가파른 바위 비탈이 솟아 있다. 고갯길 B5289 도로가 물길을 따라 나 있어 드라이브와 도보 모두로 풍경을 즐길 수 있다.","tips":["호니스터 패스는 컴브리아에서 손꼽히게 높고 가파른 고개이므로 운전 시 주의한다","고개 정상의 호니스터 슬레이트 광산 투어와 연계해 둘러볼 수 있다","산악 날씨가 변덕스러워 방수 의류를 준비하는 편이 안전하다"],"stats":[{"l":"국가","v":"영국(잉글랜드)"},{"l":"유형","v":"산간 하천"},{"l":"길이","v":"약 3km"}],"ik":"honister pass, buttermere, lake district stream"},{"r":45,"n":"영국 스코틀랜드 로흐레벤","s":"","m":"","d":"스코틀랜드의 호수들 중 수심이 가장 얕은 편","dd":"스코틀랜드 킨로스에 있는 저지대 호수로 수심이 얕아 물새가 많이 모이는 국가 자연보호구역이다. 호수 안 섬의 로흐레벤 성은 1567년 스코틀랜드 여왕 메리가 유폐되었다가 이듬해 탈출한 역사의 현장이다. 호수를 한 바퀴 도는 21km의 헤리티지 트레일이 평탄하게 조성되어 걷기와 자전거에 모두 알맞다.","tips":["여름철에는 킨로스 선착장에서 로흐레벤 성으로 가는 페리가 운항한다","둘레길이 평탄하고 장애물이 없어 자전거·휠체어로도 이용할 수 있다","가을~겨울에는 기러기 등 철새 수만 마리가 모여 탐조 명소가 된다"],"stats":[{"l":"국가","v":"영국(스코틀랜드)"},{"l":"유형","v":"호수"},{"l":"둘레길","v":"21km"}],"ik":"loch leven castle, scotland lake, island castle"},{"r":46,"n":"캘리포니아주 치프호","s":"","m":"","d":"존뮤어 야생보호지역에 있으며","dd":"시에라네바다 존 뮤어 야생보호구역의 해발 약 3,200m에 있는 고산 호수다. 실버 디바이드의 뾰족한 바위 봉우리들이 호수를 둘러싼 분지 지형으로, 존 뮤어 트레일(JMT) 인근에 있어 종주 백패커들이 지나는 길목이다. 화강암과 맑은 물이 어우러진 전형적인 하이 시에라 풍경을 보여준다.","tips":["눈이 녹는 7~9월이 사실상 유일한 접근 시기다","숙박 산행에는 윌더니스 퍼밋이 필요하고 곰통(음식 보관통) 휴대가 요구된다","실버 패스 또는 굿데일 패스를 넘는 다일 백패킹 코스로 접근한다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"고산 호수"},{"l":"해발","v":"약 3,200m"}],"ik":"sierra nevada alpine lake, john muir wilderness, granite peaks"},{"r":47,"n":"아르헨티나 멘도자 라구나 델 디아만테","s":"","m":"","d":"마이포 화산이 라구나 델 디아만테의 일출을","dd":"안데스 산맥 해발 약 3,300m에 자리한 빙하성 호수로 멘도사주의 자연보호구역이다. 호수 건너 우뚝 선 마이포 화산(5,323m)이 수면에 마름모꼴로 비치는 데서 '다이아몬드 호수'라는 이름이 붙었다. 바람이 잦아드는 이른 아침에는 화산이 물에 그대로 반사되는 풍경을 볼 수 있다.","tips":["보호구역은 여름철(대략 12~3월)에만 개방되고 겨울에는 폐쇄된다","비포장 산악 도로 구간이 길어 4륜구동 차량이나 현지 투어 이용이 안전하다","고도가 높아 방풍 의류와 고산 적응, 자외선 차단이 필요하다"],"stats":[{"l":"국가","v":"아르헨티나"},{"l":"유형","v":"고산 호수"},{"l":"해발","v":"약 3,300m"}],"ik":"laguna del diamante, maipo volcano, andes lake reflection"},{"r":48,"n":"아르헨티나 아투엘 캐니언","s":"","m":"","d":"안데스 산맥의 풍광과 포도밭으로 유명한 멘도사 지방에 위치","dd":"안데스 풍광과 포도밭으로 유명한 멘도사주 남부 산라파엘 인근의 협곡으로, 아투엘강이 붉은 사암 지대를 깎아 만든 기암 지형이 이어진다. 협곡 하류의 바예 그란데 저수지 일대는 래프팅과 카약 등 수상 액티비티 중심지다. 침식으로 빚어진 독특한 바위들이 도로변에 늘어서 드라이브 코스로도 인기가 있다.","tips":["산라파엘에서 바예 그란데까지 이동한 뒤 협곡 구간을 둘러보는 동선이 일반적이다","협곡 상류 구간은 비포장 도로이므로 차량 상태와 시간을 여유 있게 잡는다","래프팅은 수량이 풍부한 여름철에 활발하다"],"stats":[{"l":"국가","v":"아르헨티나"},{"l":"유형","v":"협곡"},{"l":"추천 활동","v":"래프팅"}],"ik":"atuel canyon, argentina rafting, red rock canyon"},{"r":49,"n":"영국 레이크 디스트릭트 국립공원 코니스턴 워터","s":"","m":"","d":"국립공원의 코니스턴 워터 일출 장면","dd":"잉글랜드 레이크 디스트릭트 국립공원에 있는 길이 약 8.7km의 호수로, 잔잔한 수면에 주변 산이 비치는 새벽·일출 풍경으로 알려져 있다. 도널드 캠벨이 수상 속도 기록에 도전했던 무대이며, 호수 위로는 증기 요트 곤돌라가 운항한다. 호수 서쪽의 올드 맨 오브 코니스턴(803m) 등산과 묶어 찾는 이가 많다.","tips":["빅토리아 시대 증기 요트 '곤돌라' 유람선으로 호수를 둘러볼 수 있다","올드 맨 오브 코니스턴 왕복 등산은 반나절 코스로 인기가 있다","이른 아침 물안개와 반영 사진을 노린다면 호수 동쪽 기슭이 접근하기 쉽다"],"stats":[{"l":"국가","v":"영국(잉글랜드)"},{"l":"유형","v":"호수"},{"l":"길이","v":"약 8.7km"}],"ik":"coniston water, lake district, england lake sunrise"},{"r":50,"n":"남아프리카 스톰스리버 마우스","s":"","m":"","d":"남아프리카 이스트케이프에서 인기 있는 명소","dd":"남아프리카 이스턴케이프의 가든 루트 국립공원 치치카마 구역에서 스톰스강이 바다와 만나는 하구다. 협곡을 가로지르는 길이 77m의 현수교가 대표 볼거리로, 숲길을 걸어 다리까지 다녀오는 산책로가 정비되어 있다. 협곡 안쪽으로는 카약·릴로(에어매트) 투어가 운영되고, 남아공의 대표 종주길 오터 트레일이 이곳에서 시작된다.","tips":["현수교까지는 왕복 약 1km의 데크 산책로로 누구나 걸을 수 있다","협곡 카약·릴로 투어는 현장 사정에 따라 결빙·풍랑 시 취소될 수 있어 예약 확인이 필요하다","5일짜리 오터 트레일은 인원 제한이 있어 수개월 전 예약해야 한다"],"stats":[{"l":"국가","v":"남아프리카공화국"},{"l":"유형","v":"강 하구·해안 협곡"},{"l":"명물","v":"현수교 77m"}],"ik":"storms river mouth, tsitsikamma, suspension bridge"},{"r":51,"n":"이탈리아 가르다 호","s":"","m":"","d":"빙하로 인해 깎아지른 듯한 산맥이 이어지는 알프스의 경관","dd":"면적 약 370km²로 이탈리아에서 가장 큰 호수이며, 빙하가 깎아낸 알프스 남쪽 자락에 자리해 북부 호안은 깎아지른 산벽으로 둘러싸여 있다. 온화한 기후 덕에 호숫가에 레몬과 올리브가 자라고, 시르미오네 반도의 온천과 성채 마을이 대표 명소다. 몬테 발도 케이블카 전망과 리바 델 가르다의 윈드서핑 등 산과 물의 활동이 함께 가능하다.","tips":["7~8월 성수기는 매우 붐비므로 5~6월이나 9월 방문이 쾌적하다","말체시네에서 몬테 발도 케이블카를 타면 호수 전경을 한눈에 볼 수 있다","북부 호안은 바람이 일정해 윈드서핑·세일링 중심지다"],"stats":[{"l":"국가","v":"이탈리아"},{"l":"유형","v":"호수"},{"l":"면적","v":"약 370km²"}],"ik":"lake garda, sirmione, italy alps lake"},{"r":52,"n":"독일 로이자흐 강","s":"","m":"","d":"바바리안 알프스의 레크리에이션 명소","dd":"오스트리아 티롤에서 발원해 바이에른 알프스 기슭의 가르미슈파르텐키르헨을 지나 코헬 호수로 흘러드는 강이다. 알프스를 배경으로 초지와 습원 사이를 흐르는 물길을 따라 걷기·자전거·카누 등 야외활동이 활발하다. 하류의 무르나우어 모스 습원은 독일에서 손꼽히는 규모의 자연 습지다.","tips":["뮌헨에서 기차로 가르미슈파르텐키르헨까지 이동해 강변 산책로에 접근할 수 있다","여름철에는 일부 구간에서 카누·래프팅이 운영된다","무르나우어 모스 습원 순환 산책로와 묶어 걷기 좋다"],"stats":[{"l":"국가","v":"독일·오스트리아"},{"l":"유형","v":"강"},{"l":"길이","v":"약 113km"}],"ik":"loisach river, bavarian alps, garmisch river"},{"r":53,"n":"독일 악마의 다리","s":"","m":"","d":"물이 잔잔한 낮 시간에는 다리가 물에 반사되어 완벽한 원을","dd":"독일 작센주 크롬라우 셔쿨렌공원에 있는 19세기(1860년대) 석조 아치교 라코츠 다리로, '악마의 다리'라는 별칭으로 불린다. 반원형 아치가 잔잔한 수면에 비치면 물 위아래가 이어져 하나의 원을 이루도록 설계되었다. 현무암 첨탑 장식과 어우러진 반영 풍경으로 사진 명소가 되었다.","tips":["다리 보호를 위해 통행이 금지되어 있으므로 호숫가에서 감상한다","바람이 없는 낮이나 이른 아침에 원형 반영이 가장 뚜렷하다","봄 철쭉 개화기와 가을 단풍철에 공원 풍경이 화려하다"],"stats":[{"l":"국가","v":"독일"},{"l":"유형","v":"석조 아치교"},{"l":"건설","v":"1860년대"}],"ik":"rakotzbruecke, devils bridge kromlau, circle reflection"},{"r":54,"n":"말레이시아 툰 사카란 해상공원","s":"","m":"","d":"해상공원은 다이버들이 즐겨 찾는 곳","dd":"말레이시아 사바주 셈포르나 앞바다의 8개 섬으로 이루어진 해상공원으로, 셈포르나 제도 공원으로도 불린다. 산호초와 맑은 바다 덕에 다이버와 스노클러가 즐겨 찾는다. 보헤이 둘랑섬 전망대에 오르면 화산성 섬들이 감싼 초록빛 석호가 한눈에 내려다보인다.","tips":["셈포르나 항에서 보트 데이 투어로 방문하며 공원 입장 허가가 필요하다","보헤이 둘랑 전망대 트레킹은 지정 시간에 레인저 동행으로 진행된다","바다가 잔잔한 오전에 전망과 스노클링 조건이 좋다"],"stats":[{"l":"국가","v":"말레이시아"},{"l":"유형","v":"해상공원"},{"l":"구성","v":"섬 8개"}],"ik":"bohey dulang, tun sakaran marine park, semporna lagoon"},{"r":55,"n":"미국 캘리포니아주 머세드 강","s":"","m":"","d":"요세미티 국립공원을 관통하여 흐르며","dd":"시에라네바다에서 발원해 요세미티 국립공원 밸리를 관통해 흐르는 강으로, 미국의 야생·경관 하천(Wild and Scenic River)으로 지정되어 있다. 엘캐피탄과 하프돔이 강물에 비치는 반영 풍경이 요세미티를 대표하는 장면으로 꼽힌다. 상류의 미스트 트레일을 따라 오르면 강이 만든 버널 폭포와 네바다 폭포를 차례로 만난다.","tips":["봄철 눈 녹은 물로 수량이 가장 풍부해 폭포 경관이 극대화된다","여름에는 밸리 구간에서 래프팅·튜빙이 허용 수위일 때 운영된다","미스트 트레일은 물보라로 미끄러우니 방수 재킷과 접지력 좋은 신발이 필요하다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"강"},{"l":"지정","v":"야생·경관 하천"}],"ik":"merced river, yosemite valley, el capitan reflection"},{"r":56,"n":"볼리비아 라구나 콜로라도","s":"","m":"","d":"수천 마리의 홍학을 품는 고향이며","dd":"볼리비아 남서부 에두아르도 아바로아 안데스 동물군 국립보호구역에 있는 해발 약 4,278m의 얕은 소금 호수다. 조류(藻類)와 광물 성분 때문에 물이 붉게 물들고, 흰 붕사 퇴적층이 섬처럼 떠 있어 강렬한 색 대비를 이룬다. 희귀종인 제임스플라밍고를 비롯한 홍학 수천 마리가 모여드는 서식지로 유명하다.","tips":["우유니 소금사막 2~3일 지프 투어의 경유지로 방문하는 것이 일반적이다","해발 4,000m가 넘어 고산병 예방과 보온 대책이 필수다","낮에도 바람이 강하고 일교차가 크므로 방풍 의류를 준비한다"],"stats":[{"l":"국가","v":"볼리비아"},{"l":"유형","v":"소금 호수"},{"l":"해발","v":"약 4,278m"}],"ik":"laguna colorada, flamingos bolivia, red lake altiplano"},{"r":57,"n":"미국 캘리포니아주 카슨강","s":"","m":"","d":"카슨 강은 낚시를 즐기기에 더없이 좋은 곳","dd":"시에라네바다 동쪽 사면에서 발원해 캘리포니아 알파인 카운티를 거쳐 네바다로 흘러가는 강으로, 이스트 포크와 웨스트 포크 두 물줄기가 있다. 송어 낚시터로 이름나 플라이낚시 애호가들이 즐겨 찾는다. 상류의 호프 밸리 일대는 가을이면 사시나무(아스펜) 단풍이 노랗게 물드는 경관지다.","tips":["낚시에는 캘리포니아 낚시 면허가 필요하며 구간별 규정을 확인한다","봄~초여름에는 눈 녹은 물로 유량이 많아 물가 접근에 주의한다","9월 말~10월 호프 밸리의 아스펜 단풍 시즌이 드라이브 적기다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"강"},{"l":"추천 활동","v":"송어 낚시"}],"ik":"carson river, sierra nevada stream, fly fishing"},{"r":58,"n":"미국 알래스카주 턴어게인 암","s":"","m":"","d":"드라이브를 앵커리지부터 거드우드까지 그림 같은 풍경들","dd":"앵커리지에서 거드우드까지 이어지는 수어드 하이웨이가 해안을 따라 달리는 쿡만의 좁고 긴 만이다. 조수 간만의 차가 커서 밀물이 파도 벽처럼 밀려드는 보어 타이드 현상을 볼 수 있다. 벨루가 포인트에서는 흰고래 벨루가를, 도로변 절벽에서는 돌산양(달 쉽)을 관찰할 수 있는 경관 드라이브 코스다.","tips":["보어 타이드는 간조 시각표를 확인해 예측 지점에서 기다리면 볼 수 있다","갯벌은 빠지면 나오기 어려운 진흙층이라 절대 걸어 들어가지 않는다","여름철 오후 벨루가 포인트 일대에서 고래 관찰 확률이 높아진다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"만(해안 드라이브)"},{"l":"명물","v":"보어 타이드"}],"ik":"turnagain arm, seward highway alaska, bore tide"},{"r":59,"n":"미국 몬타나주 세인트 메리 호수","s":"","m":"","d":"이 호수는 연중 내내 변치 않는 아름다움을 뽑냅니다","dd":"몬태나주 글레이셔 국립공원 동쪽에 있는 빙하호로 공원에서 두 번째로 큰 호수다. 호수 한가운데 떠 있는 작은 와일드구스섬과 배경의 침봉들이 어우러진 풍경이 공원을 대표하는 장면으로 꼽힌다. 명물 도로 고잉투더선 로드가 북쪽 호안을 따라 지나 전망대에서 쉽게 조망할 수 있다.","tips":["고잉투더선 로드는 보통 6월 말~7월 초에야 전 구간이 개통된다","성수기에는 차량 예약제가 적용될 수 있어 공원 공지를 미리 확인한다","와일드구스섬 전망대는 일출 무렵 빛이 가장 좋다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"빙하호"},{"l":"위치","v":"글레이셔 국립공원"}],"ik":"saint mary lake, wild goose island, glacier national park"},{"r":60,"n":"독일 콘스턴스 호수","s":"","m":"","d":"낚시 활동도 즐길 수 있어 더없이 완벽한 휴양지로","dd":"독일·오스트리아·스위스 3국에 걸친 면적 약 536km²의 호수로 보덴제라고도 불리며, 라인강이 호수를 통과해 흐른다. 꽃섬 마이나우, 호수 위 옛 도시 린다우, 콘스탄츠 구시가 등 호반 명소가 많다. 유람선이 3국의 도시를 잇고, 호수를 한 바퀴 도는 약 260km의 자전거길이 정비되어 낚시·수영 등 물놀이와 함께 즐길 수 있다.","tips":["호수 일주 자전거길(보덴제 라트베크)은 구간을 나눠 며칠에 걸쳐 도는 것이 일반적이다","유람선 네트워크로 독일·스위스·오스트리아 호반 도시를 배로 오갈 수 있다","봄~초가을이 꽃섬 마이나우와 수상 활동의 적기다"],"stats":[{"l":"소재","v":"독일·오스트리아·스위스"},{"l":"유형","v":"호수"},{"l":"면적","v":"약 536km²"}],"ik":"lake constance, bodensee, lindau harbor"},{"r":61,"n":"인도 자이푸르 만 사가르 호수","s":"","m":"","d":"호수의 주요 볼거리는 바로 \"물 궁전\"이라는 뜻의 잘 마할","dd":"인도 라자스탄주 자이푸르 시내 북쪽의 인공 호수로, 한가운데 떠 있는 잘 마할('물 궁전') 덕에 유명하다. 라지푸트와 무굴 양식이 섞인 이 궁전은 수위가 오르면 하층부가 물에 잠겨 물 위에 떠 있는 듯 보인다. 궁전 내부는 개방되지 않아 호반 산책로에서 조망하는 방식으로 관람한다.","tips":["일출·일몰 무렵 호반 산책로에서 보는 궁전 풍경이 가장 아름답다","궁전 내부 입장은 불가하므로 호숫가 조망 중심으로 일정을 짠다","더위가 꺾이는 10~3월이 자이푸르 여행 적기이며 겨울에는 철새도 모인다"],"stats":[{"l":"국가","v":"인도"},{"l":"유형","v":"인공 호수"},{"l":"명물","v":"잘 마할 궁전"}],"ik":"jal mahal, man sagar lake, jaipur water palace"},{"r":62,"n":"미국 워싱턴 인챈트먼트 봉우리","s":"","m":"","d":"해발 2,597미터의 화강암 봉우리","dd":"워싱턴주 앨파인 레이크스 야생지대 스튜어트 산군에 속한 해발 약 2,600m의 화강암 봉우리로, 고산 호수들이 흩어진 인챈트먼트 분지를 굽어본다. 매끈한 화강암과 맑은 호수, 산양이 어우러진 이 일대는 미국 북서부에서 손꼽히는 알파인 트레킹지다. 10월 초에는 낙엽송(라치)이 황금빛으로 물들어 절정을 이룬다.","tips":["야영은 추첨식 퍼밋제(매년 초 신청)로 운영되어 당첨 없이는 숙박이 불가하다","당일 종주(스루하이크)는 약 30km에 누적 고도가 커서 체력과 이른 출발이 필요하다","기점 마을은 리븐워스이며 아스가드 패스 구간은 급경사 너덜지대다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"화강암 봉우리"},{"l":"해발","v":"약 2,600m"}],"ik":"enchantments washington, alpine lakes wilderness, golden larches"},{"r":63,"n":"이탈리아 롬바르디아 라고 디 피안 팔루","s":"","m":"","d":"낚시와 스키 등 굉장히 다양한 활동을 즐길 수","dd":"이탈리아 알프스 스텔비오 국립공원 권역 발 디 페이오에 있는 인공 저수지로, 1950년대에 수력발전용으로 건설되었다. 높이 52m의 댐이 노체강 물을 가두어 에메랄드빛 호수를 이루며, 호반을 따라 걷는 산책로가 정비되어 있다. 겨울에는 인근 페요 스키장과 묶어 사계절 활동이 가능한 산악 휴양지다.","tips":["폰타니노 디 첼렌티노 주차장에서 도보 약 20분이면 호수에 닿는다","여름철 호반 트레킹과 상류 라고스텔 호수 연계 코스가 인기다","고지대라 한여름에도 아침저녁 기온이 낮아 겉옷이 필요하다"],"stats":[{"l":"국가","v":"이탈리아"},{"l":"유형","v":"인공 호수"},{"l":"댐 높이","v":"52m"}],"ik":"pian palu lake, stelvio national park, alpine reservoir"},{"r":64,"n":"일본 후지산 가와구치 호수","s":"","m":"","d":"북쪽 호숫가에 도착하면 후지산의 가장 아름다운 절경을 감상할 수","dd":"후지산 북쪽 기슭 후지 5호 가운데 하나로, 후지산 조망의 대표 명소다. 북쪽 호안에 서면 후지산 전경이 정면으로 펼쳐지고, 바람 없는 날에는 수면에 비치는 '역전 후지'를 볼 수 있다. 봄 벚꽃과 11월 단풍 회랑이 후지산과 겹치는 시기에 특히 많은 사람이 찾는다.","tips":["역전 후지 반영은 바람이 잦아드는 이른 아침에 확률이 높다","도쿄에서 고속버스·후지급행 열차로 가와구치코역까지 직행할 수 있다","4월 벚꽃, 11월 모미지(단풍) 축제 기간이 사진 촬영 적기다"],"stats":[{"l":"국가","v":"일본"},{"l":"유형","v":"호수"},{"l":"소속","v":"후지 5호"}],"ik":"lake kawaguchi, mount fuji reflection, fuji five lakes"},{"r":65,"n":"호주 뉴사우스웨일즈주 일라와라 호수","s":"","m":"","d":"낚시, 새우 잡기, 수상 스포츠 등 다양한 활동으로 사랑받는 곳","dd":"호주 뉴사우스웨일스주 울런공 남쪽에 있는 넓은 해안 석호로, 바다와 좁은 수로로 이어져 있다. 낚시와 새우잡이, 세일링·카약 등 수상 스포츠로 지역 주민의 사랑을 받는 생활형 호수다. 호반을 따라 산책로와 자전거길, 피크닉 구역이 이어져 가족 나들이에 알맞다.","tips":["호반 공유 산책로·자전거길이 잘 정비되어 가볍게 걷기 좋다","낚시·새우잡이는 뉴사우스웨일스주 면허와 어획 규정을 따라야 한다","시드니에서 기차로 접근 가능한 일라와라 지역 해안 여행과 묶기 좋다"],"stats":[{"l":"국가","v":"호주"},{"l":"유형","v":"석호"},{"l":"추천 활동","v":"낚시·수상 스포츠"}],"ik":"lake illawarra, australia lagoon, sailing lake"},{"r":66,"n":"세인트 루시아","s":"","m":"","d":"카리브 해의 섬인 세인트 루시아 프티 피턴","dd":"카리브해의 화산섬 세인트루시아를 상징하는 것은 바다에서 솟아오른 두 개의 화산 첨봉 피톤이다. 프티 피톤(743m)과 그로 피톤(771m)은 주변 해역과 함께 2004년 유네스코 세계유산으로 지정되었다. 수프리에르 마을을 기점으로 봉우리 트레킹, 온천, 스노클링을 함께 즐길 수 있다.","tips":["그로 피톤 등반은 가이드 동반이 원칙이며 왕복 4~6시간이 걸린다","프티 피톤은 경사가 더 가팔라 암릉 경험자에게만 권장된다","더위를 피해 이른 아침에 출발하고 물을 충분히 챙긴다"],"stats":[{"l":"국가","v":"세인트루시아"},{"l":"유형","v":"화산 봉우리"},{"l":"유네스코","v":"세계유산(2004년)"}],"ik":"pitons st lucia, petit piton, caribbean volcanic peaks"},{"r":67,"n":"스위스 롱게른","s":"","m":"","d":"롱게른 자치구는 3면이 스위스의 알프스 산맥으로","dd":"스위스 옵발덴주의 산간 마을로, 삼면이 알프스 산줄기에 둘러싸인 청록빛 룽게른 호수(룽게러제)를 품고 있다. 루체른과 인터라켄을 잇는 브뤼니크 고개 철도 노선이 마을을 지나 차창 풍경으로도 유명하다. 호수에서는 수영·낚시·보트를, 주변 능선에서는 호수를 내려다보는 하이킹을 즐길 수 있다.","tips":["루체른~인터라켄 구간 열차(브뤼니크 노선)로 접근하기 편리하다","브뤼니크 고개 쪽 전망 포인트에서 호수 전경 사진을 찍을 수 있다","여름철에는 호수 수영장과 보트 대여가 운영된다"],"stats":[{"l":"국가","v":"스위스"},{"l":"유형","v":"호수 마을"},{"l":"추천시기","v":"여름"}],"ik":"lungerersee, lungern switzerland, turquoise alpine lake"},{"r":68,"n":"하와이 카우아이 와이메아 캐니언","s":"","m":"","d":"길이는 16킬로미터에 달하고 깊이는 914미터","dd":"하와이 카우아이섬 서부에 있는 길이 약 16km, 깊이 약 900m의 대협곡으로 '태평양의 그랜드캐니언'이라 불린다. 붉은 화산토 절벽과 초록 식생, 협곡 안으로 떨어지는 와이포오 폭포가 어우러진 색채 대비가 특징이다. 협곡 도로를 따라 전망대가 이어지고 코케에 주립공원 트레일과 연결된다.","tips":["오후에는 구름이 끼기 쉬워 오전 관람이 유리하다","주요 전망대는 비거주자에게 입장·주차 요금이 부과된다","캐니언 트레일을 걸으면 와이포오 폭포 상단까지 다녀올 수 있다"],"stats":[{"l":"국가","v":"미국(하와이)"},{"l":"유형","v":"협곡"},{"l":"규모","v":"길이 약 16km·깊이 약 900m"}],"ik":"waimea canyon, kauai, red canyon waterfall"},{"r":69,"n":"애리조나주 페트리파이드 포레스트 국립공원","s":"","m":"","d":"고생물이 잠들어 있는 빙산의 끝에 이 석화림","dd":"약 2억 2,500만 년 전 트라이아스기 후기의 나무들이 광물화된 규화목(석화림)이 대규모로 흩어져 있는 국립공원이다. 무지개색 결정으로 변한 통나무들과 줄무늬 황무지 페인티드 데저트가 함께 펼쳐진다. 공룡 이전 시대의 파충류·양서류 화석이 다수 발굴된 고생물학의 보고이기도 하다.","tips":["규화목 조각 반출은 법으로 금지되어 있다","블루 메사 순환로(약 1.6km)가 줄무늬 황무지 사이를 걷는 대표 코스다","여름 한낮은 매우 더우므로 봄·가을 방문이 걷기에 알맞다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"국립공원(석화림)"},{"l":"연대","v":"약 2억 2,500만 년 전"}],"ik":"petrified forest, painted desert, petrified logs"},{"r":70,"n":"스페인 란사로테 섬","s":"","m":"","d":"터널 데 아틀란티다는 세계에서 가장 긴 수중 용암 동굴","dd":"카나리아 제도의 화산섬으로, 코로나 화산 분화 때 흘러내린 용암이 만든 거대한 용암 동굴계가 명물이다. 그 바다쪽 연장부인 아틀란티다 터널은 세계에서 가장 긴 수중 용암 터널로 알려져 있다. 육상 구간인 쿠에바 데 로스 베르데스와 동굴 속 호수에 눈먼 흰 게가 사는 하메오스 델 아구아를 관람할 수 있다.","tips":["쿠에바 데 로스 베르데스는 가이드 투어로만 입장할 수 있다","티만파야 국립공원의 화산 지형과 묶어 하루 코스로 돌기 좋다","연중 온화한 기후라 계절 제약이 적다"],"stats":[{"l":"국가","v":"스페인(카나리아 제도)"},{"l":"유형","v":"화산섬·용암 동굴"},{"l":"명물","v":"아틀란티다 수중 용암 터널"}],"ik":"lanzarote, cueva de los verdes, volcanic lava cave"},{"r":71,"n":"포르투갈 라고아","s":"","m":"","d":"거대한 동굴의 천연 채광창","dd":"포르투갈 알가르브 해안의 라고아 지역은 파도가 깎아낸 해식동굴 지대로, 천장에 천연 채광창이 뚫린 베나길 동굴이 대표 명소다. 둥근 돔형 천장의 구멍으로 햇빛이 쏟아져 동굴 안 모래사장을 비추는 풍경으로 유명하다. 절벽 위로는 '세븐 행잉 밸리스' 트레일이 이어져 바다와 동굴 지형을 위에서 조망할 수 있다.","tips":["동굴은 바다쪽에서만 접근 가능하며 보트·카약 투어로 방문한다","출입·정박 규정이 수시로 바뀌므로 최신 현지 규정을 확인한다","절벽 트레일(왕복 약 12km)은 그늘이 적어 모자와 물이 필수다"],"stats":[{"l":"국가","v":"포르투갈"},{"l":"유형","v":"해식동굴 해안"},{"l":"지역","v":"알가르브"}],"ik":"benagil cave, algarve, sea cave skylight"},{"r":72,"n":"중국 화이러우","s":"","m":"","d":"나무가 무성한 산과 깨끗한 물로도 유명","dd":"베이징 북부 외곽의 화이러우구는 숲이 우거진 산과 맑은 물줄기로 알려진 수도권 자연 휴양지다. 만리장성 가운데 보존과 정비가 잘된 무톈위 구간이 이곳에 있어 성벽 트레킹의 거점이 된다. 옌치호 호수 일대의 호반 산책과 산촌 마을 나들이도 함께 즐길 수 있다.","tips":["무톈위 장성은 셔틀버스와 케이블카·리프트로 성벽까지 오를 수 있다","성수기 주말보다 평일 이른 시간이 한산하다","봄·가을이 걷기와 조망 모두에 가장 좋다"],"stats":[{"l":"국가","v":"중국"},{"l":"유형","v":"산악 근교 지역"},{"l":"명소","v":"무톈위 장성"}],"ik":"mutianyu great wall, huairou, beijing mountains"},{"r":73,"n":"에콰도르 쿠이코차","s":"","m":"","d":"칼데라와 크레이터 호수의 물은 시리도록 맑고","dd":"에콰도르 북부 코타카치 화산 기슭 해발 약 3,246m에 있는 칼데라 호수로, 물이 매우 맑고 푸르다. 호수 가운데에는 분화로 솟은 두 개의 돔형 섬이 떠 있어 독특한 경관을 이룬다. 칼데라 능선을 한 바퀴 도는 둘레길에서 호수와 안데스 화산들을 조망하며 걷는 트레킹이 대표 활동이다.","tips":["칼데라 둘레길은 약 13km, 4~5시간이 걸리며 오르내림이 있다","고도 3,000m 이상이라 자외선 차단과 고산 적응이 필요하다","오타발로 토요시장 방문과 묶어 당일 일정으로 다녀오기 좋다"],"stats":[{"l":"국가","v":"에콰도르"},{"l":"유형","v":"칼데라 호수"},{"l":"해발","v":"약 3,246m"}],"ik":"cuicocha lake, ecuador crater lake, andes caldera"},{"r":74,"n":"중국 다자이 마을","s":"","m":"","d":"가장 큰 산간 경작지 중 하나로 유명한 계단식 논","dd":"중국 광시좡족자치구 룽성의 룽지(용의 등뼈) 계단식 논 가운데 진컹 구역의 기점이 되는 야오족 산촌 마을이다. 산비탈을 겹겹이 깎아 만든 대규모 계단식 논이 마을을 둘러싸고, 능선 전망대까지 논둑길 트레킹이나 케이블카로 오를 수 있다. 계절마다 물 댄 논의 반영, 초록 벼, 황금 들녘, 눈 덮인 논으로 풍경이 바뀐다.","tips":["구이린에서 버스로 약 2~3시간 거리이며 마을부터는 도보 이동이 기본이다","5~6월 모내기철의 물 반영과 9월 말~10월 황금 벼 시기가 촬영 적기다","전망대까지 도보 1~2시간이 걸리므로 케이블카 병용을 고려한다"],"stats":[{"l":"국가","v":"중국"},{"l":"유형","v":"계단식 논"},{"l":"추천시기","v":"5~6월·9~10월"}],"ik":"longji rice terraces, dazhai village, guangxi terraces"},{"r":75,"n":"말레이시아 카메론하일랜즈","s":"","m":"","d":"차밭과 딸기 농장 가운데에 있는 리조트에서 쉬기 위해","dd":"해발 1,100~1,600m 고원에 자리한 말레이시아 대표 피서지로, 연중 서늘한 기후 덕에 차밭과 딸기 농장이 발달했다. 1929년 문을 연 BOH 티 플랜테이션의 계단식 차밭 풍경과 이끼로 덮인 모시 포레스트 트레킹이 대표 볼거리다. 딸기 따기 체험, 차 공장 견학, 재래시장 구경을 하며 느긋하게 머물기 좋다.","tips":["쿠알라룸푸르에서 버스로 약 4시간, 산길 커브가 많아 멀미약을 준비하면 좋다","고원 지대라 아침저녁으로 쌀쌀하므로 얇은 겉옷 필수","주말·공휴일은 현지 관광객으로 혼잡하니 평일 방문이 여유롭다"],"stats":[{"l":"국가","v":"말레이시아"},{"l":"유형","v":"고원 차밭"},{"l":"해발","v":"약 1,100~1,600m"}],"ik":"cameron highlands, tea plantation, malaysia"},{"r":76,"n":"스페인 팔라모스","s":"","m":"","d":"멋진 해변, 고급 호텔, 최고의 해산물로 유명","dd":"카탈루냐 코스타 브라바 해안의 어촌 도시로, 지중해에서도 손꼽히는 붉은새우 '감바 데 팔라모스'의 산지로 유명하다. 플라차 그란을 비롯한 해변과 소나무 숲 사이로 이어지는 해안 산책로 '카미 데 론다'를 따라 걷기 좋다. 항구의 어시장과 어업박물관에서 어촌 문화를 접하고 신선한 해산물 요리를 맛보는 것이 이곳 여행의 핵심이다.","tips":["6~9월이 해수욕 적기이며, 성수기 8월은 숙소 예약을 서둘러야 한다","바르셀로나에서 차로 약 1시간 30분, 헤로나 공항이 가장 가깝다","카미 데 론다 해안길은 라 포스카 해변 방면 구간이 걷기 좋다"],"stats":[{"l":"국가","v":"스페인"},{"l":"유형","v":"해변 어촌"},{"l":"추천시기","v":"6~9월"}],"ik":"palamos, costa brava, mediterranean coast"},{"r":77,"n":"터키 카파도키아","s":"","m":"","d":"동화처럼 귀여운 굴뚝, 능선 그리고 열기구를 탈 수 있는 계곡","dd":"화산재가 굳은 응회암이 침식돼 만들어진 '요정의 굴뚝' 기암과 동굴 교회, 지하도시가 펼쳐진 지역으로, 괴레메 국립공원 일대는 1985년 유네스코 세계유산에 등재됐다. 해 뜰 무렵 수백 개의 열기구가 계곡 위로 떠오르는 풍경이 대표 장면이다. 로즈밸리·러브밸리 등 계곡 트레킹과 데린쿠유 지하도시 탐방, 동굴 호텔 숙박이 주요 활동이다.","tips":["열기구는 기상에 따라 결항이 잦으므로 2박 이상 머물며 여유를 두는 것이 안전하다","봄(4~6월)과 가을(9~10월)이 기후와 열기구 운항 모두 안정적이다","계곡 트레킹은 표지판이 부족한 구간이 있어 오프라인 지도를 준비한다"],"stats":[{"l":"국가","v":"튀르키예"},{"l":"유형","v":"기암 계곡"},{"l":"추천시기","v":"4~6월·9~10월"}],"ik":"cappadocia, hot air balloon, fairy chimney"},{"r":78,"n":"미국 워싱턴주 올림픽 국립공원","s":"","m":"","d":"연 강수량 3,556밀리미터에 달하는 온화한 기후의 우림인 호","dd":"빙하를 인 산맥, 태평양 해안, 온대우림을 한 공원에서 만나는 곳으로 유네스코 세계유산이다. 호(Hoh) 우림은 연 강수량이 약 3,500mm(140인치)에 달해 나무마다 이끼가 늘어진 원시림 풍경을 이루며, '이끼의 전당(Hall of Mosses)' 트레일이 대표 산책로다. 허리케인 리지 전망대와 유목이 쌓인 루비 비치도 함께 둘러보기 좋다.","tips":["7~9월이 맑은 날이 많아 트레킹 적기이며, 우림 지역은 연중 방수 재킷이 필요하다","공원이 매우 넓어 우림·해안·산악 지역을 하루에 다 보기 어려우니 권역별로 일정을 나눈다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"온대우림 국립공원"},{"l":"추천시기","v":"7~9월"}],"ik":"hoh rainforest, olympic national park, moss forest"},{"r":79,"n":"뉴질랜드 와이토모 동굴","s":"","m":"","d":"개똥벌레는 천장을 별이 빛나는 밤하늘로 만드는 발광 곤충","dd":"석회동굴 천장에 뉴질랜드 고유종 발광 곤충 '글로웜'(Arachnocampa luminosa) 유충 수만 마리가 붙어 빛을 내며, 그 모습이 별이 가득한 밤하늘처럼 보이는 것으로 유명하다. 1887년 처음 탐사된 이후 관광지로 개방됐으며, 어두운 지하 강을 보트로 조용히 이동하며 천장의 푸른 불빛을 감상한다. 인근 루아쿠리 동굴에서는 도보 투어와 블랙워터 래프팅도 운영된다.","tips":["동굴 내부는 사진 촬영이 제한되는 투어가 많으니 사전에 확인한다","오클랜드에서 차로 약 2시간 30분, 인기 시간대는 온라인 예약이 안전하다"],"stats":[{"l":"국가","v":"뉴질랜드"},{"l":"유형","v":"석회동굴"}],"ik":"waitomo caves, glowworm, cave boat"},{"r":80,"n":"베트남 무이네 레드캐니언","s":"","m":"","d":"","dd":"판티엣 무이네 인근의 붉은 사암·점토 지대가 빗물에 깎여 만들어진 소형 협곡으로, 미니 그랜드캐니언이라 불린다. 바로 옆 '요정의 시내(수오이 띠엔)'는 발목 깊이의 얕은 개울을 맨발로 약 1.8km 거슬러 걷는 코스로, 한쪽은 붉고 흰 모래 절벽, 다른 쪽은 야자수 숲이 이어진다. 무이네의 붉은 모래언덕·화이트 사막과 묶어 반나절 코스로 돌기 좋다.","tips":["한낮은 매우 더우므로 오전 9시 이전이나 오후 3시 이후 방문이 낫다","개울 바닥이 부드러운 모래라 맨발 이동이 일반적이며, 신발을 담을 봉투를 챙긴다"],"stats":[{"l":"국가","v":"베트남"},{"l":"유형","v":"붉은 협곡"},{"l":"소요","v":"왕복 약 1~2시간"}],"ik":"mui ne, fairy stream, red canyon vietnam"},{"r":81,"n":"오스트레일리아 호바트 웰링턴 산","s":"","m":"","d":"","dd":"태즈메이니아 주도 호바트를 굽어보는 해발 1,271m의 산으로, 원주민어 이름 '쿠나니(kunanyi)'로도 불린다. 정상까지 도로가 나 있어 차로 오를 수 있으며, 호바트 시가지와 더웬트 강, 남빙양 방면까지 펼쳐지는 전망이 대표 볼거리다. 주상절리 절벽 '오르간 파이프' 아래를 지나는 트레킹 코스와 야생화 산책로가 잘 정비돼 있다.","tips":["정상은 여름에도 춥고 바람이 강하며 연중 눈이 내릴 수 있어 방풍 의류가 필수다","호바트 시내에서 정상까지 차로 약 30분, 구름이 끼면 전망이 막히니 맑은 날 오전에 오른다"],"stats":[{"l":"국가","v":"호주"},{"l":"유형","v":"전망 산"},{"l":"해발","v":"1,271m"}],"ik":"mount wellington, hobart, tasmania summit"},{"r":82,"n":"독일 카셀 빌헬름회헤","s":"","m":"","d":"산악 공원인 베르크파크 빌헬름회헤에 있는 파빌리온","dd":"카셀 서쪽 언덕에 조성된 유럽 최대급 산악 정원 '베르크파크 빌헬름회헤'로, 2013년 유네스코 세계유산에 등재됐다. 언덕 꼭대기 헤라클레스 동상에서 빌헬름회헤 궁전까지 계단식 수로를 따라 물이 쏟아져 내리는 물놀이 공연 '바서슈필레'가 대표 볼거리다. 숲길 산책로와 뢰벤부르크 성, 궁전 미술관까지 갖춰 한나절 걷기 코스로 알맞다.","tips":["물놀이 공연은 5월 1일~10월 3일 수·일요일과 공휴일에 열리므로 일정에 맞춰 방문한다","공원 경사가 크므로 위쪽 헤라클레스 동상에서 내려오는 방향으로 걷는 편이 수월하다"],"stats":[{"l":"국가","v":"독일"},{"l":"유형","v":"산악 정원"},{"l":"등재","v":"유네스코 세계유산(2013)"}],"ik":"bergpark wilhelmshoehe, kassel, hercules monument"},{"r":83,"n":"태국 일월담","s":"","m":"","d":"한쪽은 태양처럼 보이고 다른 쪽은 초승달처럼 보이는 지형적 특성","dd":"일월담(르웨탄)은 대만 난터우현 해발 748m에 자리한 대만 최대의 담수호로, 호수 동쪽이 해처럼 둥글고 서쪽이 초승달처럼 휘어 보인다 하여 이름 붙었다. 호숫가를 따라 자전거길과 산책로가 잘 정비돼 있고, 유람선과 케이블카(르웨탄 로프웨이)로 호수 전경을 감상한다. 원주민 사오족 마을 이타 사오와 문무묘, 현광사 등 볼거리가 호수를 둘러싸고 있다.","tips":["타이중에서 버스로 약 1시간 30분이며, 아침 물안개가 끼는 이른 시간 풍경이 좋다","호수 순환 자전거길 일부 구간이 대표 코스로 꼽히니 수이서 선착장 주변에서 자전거를 빌려 달린다"],"stats":[{"l":"국가","v":"대만"},{"l":"유형","v":"호수"},{"l":"해발","v":"748m"}],"ik":"sun moon lake, taiwan lake, lakeside cycling"},{"r":84,"n":"가나 엄브렐라 록","s":"","m":"","d":"거대한 암벽 구조물은 보티 폭포 주변에서 발견","dd":"가나 동부주 일로 크로보 지역, 보티 폭포에서 약 7km 떨어진 숲속에 있는 우산 모양의 거대 바위다. 좁은 받침 기둥 위에 넓은 판 모양 암반이 얹혀 있어 아래 그늘에 10여 명이 들어갈 수 있고, 바위 위에 오르면 주변 계곡이 한눈에 내려다보인다. 보티 폭포에서 숲길을 따라 45분~1시간가량 걷는 트레킹과 묶어 방문하는 것이 일반적이다.","tips":["숲길이 가파르고 노면이 고르지 않으므로 트레킹화와 물을 준비한다","현지 가이드 투어를 이용하면 보티 폭포·세 갈래 야자수까지 함께 돌 수 있다"],"stats":[{"l":"국가","v":"가나"},{"l":"유형","v":"기암"},{"l":"접근","v":"보티 폭포에서 도보 45~60분"}],"ik":"umbrella rock, boti falls, ghana rock"},{"r":85,"n":"태국 팡아만","s":"","m":"","d":"007 황금 총을 가진 사나이\"에서 영화 속 한 장소","dd":"푸껫 북동쪽에 펼쳐진 만으로, 에메랄드빛 바다 위에 석회암 카르스트 섬들이 솟아 있는 아오 팡아 국립공원 지역이다. 1974년 007 영화 '황금총을 가진 사나이'의 촬영지가 된 카오 핑칸 섬(제임스 본드 섬)과 바다에서 수직으로 솟은 코 타푸 바위가 대표 볼거리다. 카약을 타고 석회암 동굴과 섬 안쪽 라군(홍)을 탐험하거나 수상가옥 마을 코 판이를 방문한다.","tips":["건기인 11~4월이 바다가 잔잔해 보트 투어 적기다","제임스 본드 섬은 오전 이른 투어가 상대적으로 한산하다"],"stats":[{"l":"국가","v":"태국"},{"l":"유형","v":"카르스트 만"},{"l":"추천시기","v":"11~4월"}],"ik":"phang nga bay, james bond island, limestone karst"},{"r":86,"n":"스리랑카 나인아치 브릿지","s":"","m":"","d":"교각은 시멘트와 석조 블록으로만 지어졌습니다","dd":"스리랑카 고산 마을 엘라 인근 데모다라에 있는 9개 아치의 철도 교량으로, 영국 식민지 시절인 1921년 완공됐다. 철골 없이 돌·벽돌·시멘트만으로 지어진 것으로 유명하며, 길이 약 91m, 높이 약 24m 규모다. 차밭과 정글 사이 곡선 교량 위로 파란 열차가 지나가는 장면이 대표 풍경이라, 열차 시간에 맞춰 인근 전망 카페나 다리 위에서 기다리는 여행자가 많다.","tips":["엘라 시내에서 도보 30~45분 또는 툭툭 이용, 열차 통과 시각을 미리 확인하고 간다","다리 위 보행 시 열차 접근에 주의하고 선로 가장자리로 비켜선다"],"stats":[{"l":"국가","v":"스리랑카"},{"l":"유형","v":"철도 교량"},{"l":"완공","v":"1921년"}],"ik":"nine arch bridge, ella sri lanka, train viaduct"},{"r":87,"n":"잉글랜드 데번","s":"","m":"","d":"아름다운 이곳에는 두 개의 해안선, 두 개의 국립공원","dd":"잉글랜드 남서부 데번주는 영국해협과 브리스틀해협, 남북 두 개의 서로 다른 해안선을 가진 잉글랜드 유일의 주다. 내륙에는 다트무어와 엑스무어 두 국립공원의 황야 지대가 펼쳐지고, 해안은 사우스웨스트 코스트 패스 장거리 트레일이 지난다. 토키 일대의 '잉글리시 리비에라' 해변 휴양과 황야 트레킹, 크림티로 대표되는 전원 문화를 함께 즐긴다.","tips":["5~9월이 해안 걷기와 황야 트레킹 모두 적기다","다트무어는 안개가 잦으므로 지도·방수 장비를 갖추고 걷는다"],"stats":[{"l":"국가","v":"영국"},{"l":"유형","v":"해안·황야 지역"},{"l":"추천시기","v":"5~9월"}],"ik":"devon coast, dartmoor, english countryside"},{"r":88,"n":"일본 닛코","s":"","m":"","d":"옻칠이 된 신쿄 다리는 1636년에 건설","dd":"도쿄 북쪽 도치기현의 산악 사찰 도시로, 도쿠가와 이에야스를 모신 화려한 도쇼구를 비롯한 사찰·신사군이 1999년 유네스코 세계유산에 등재됐다. 다이야강 위에 걸린 붉은 옻칠 다리 신쿄는 1636년에 지금의 형태로 건립된 것으로 전해지는 닛코의 상징이다. 높이 97m의 게곤 폭포와 주젠지 호수, 이로하자카 단풍길 등 자연 명소가 사찰군과 함께 어우러진다.","tips":["10월 중순~11월 초 단풍철이 절정이나 도로 정체가 극심하니 이른 아침 이동이 낫다","도쿄 아사쿠사에서 도부선 특급으로 약 2시간, 세계유산 순환버스로 주요 지점을 돈다"],"stats":[{"l":"국가","v":"일본"},{"l":"유형","v":"사찰·자연 명소"},{"l":"추천시기","v":"10~11월 단풍철"}],"ik":"nikko, shinkyo bridge, toshogu shrine"},{"r":89,"n":"스페인 콘수에그라","s":"","m":"","d":"12개의 풍차로 유명 작가 세르반테스의  \"돈키호테\"","dd":"라만차 평원의 칼데리코 언덕 능선을 따라 12기의 하얀 풍차가 늘어선 마을로, 세르반테스의 소설 '돈키호테'에서 주인공이 풍차를 거인으로 착각해 돌진하는 장면을 떠올리게 하는 풍경으로 유명하다. 풍차 옆에는 12세기에 기원을 둔 무엘라 성이 함께 서 있어 능선 산책로에서 평원 전망과 함께 둘러보기 좋다. 10월 말에는 특산품 사프란 수확 축제가 열린다.","tips":["마드리드에서 차로 약 1시간 30분, 톨레도와 묶어 당일 코스로 적합하다","해 질 무렵 능선에서 보는 풍차 실루엣이 사진 명소로 꼽힌다"],"stats":[{"l":"국가","v":"스페인"},{"l":"유형","v":"풍차 언덕"},{"l":"풍차","v":"12기"}],"ik":"consuegra windmills, la mancha, don quixote"},{"r":90,"n":"영국 노스 콘월주 베드루산 스텝스","s":"","m":"","d":"긴 산책로와 신선한 바다 내음을 즐기고 싶은 사람들에게","dd":"콘월 북부 파드스토와 뉴키 사이 해안에 늘어선 거대한 시스택(바다 기둥 바위) 군락으로, 전설 속 거인 베드루산이 징검다리로 썼다는 이야기에서 이름이 유래했다. 내셔널트러스트가 관리하는 카네와스 절벽 위 산책로에서 바위들이 줄지어 선 해안을 내려다보며, 사우스웨스트 코스트 패스를 따라 긴 해안 걷기를 즐긴다. 신선한 바닷바람과 절벽 전망을 원하는 도보 여행자에게 알맞은 곳이다.","tips":["해변으로 내려가는 계단은 침식으로 폐쇄되는 경우가 있으니 현장 안내를 따른다","이곳 해변은 조류가 위험해 수영은 권장되지 않으며, 밀물 때 고립에 주의한다"],"stats":[{"l":"국가","v":"영국"},{"l":"유형","v":"해안 절벽·시스택"}],"ik":"bedruthan steps, cornwall coast, sea stacks"},{"r":91,"n":"아일랜드 캐릭 어 리드","s":"","m":"","d":"아름다운 풍경을 감상하며 행복한 산책을","dd":"북아일랜드 앤트림 해안의 작은 섬 캐릭어리드와 본토 절벽을 잇는 밧줄 다리로, 연어잡이 어부들이 350여 년 전부다리를 놓아 건너던 데서 유래했다. 바다 위 약 30m 높이에 걸린 출렁이는 다리를 건너며 발아래 푸른 바다와 해안 절벽, 맑은 날에는 스코틀랜드 방면 전망까지 감상한다. 내셔널트러스트가 관리하며, 자이언츠 코즈웨이와 함께 앤트림 해안 도로의 대표 코스로 묶인다.","tips":["입장 인원이 시간대별로 제한되므로 성수기에는 온라인 사전 예약이 필요하다","강풍 시 다리가 폐쇄될 수 있으니 방문 전 운영 여부를 확인한다"],"stats":[{"l":"국가","v":"영국(북아일랜드)"},{"l":"유형","v":"해안 밧줄 다리"}],"ik":"carrick a rede, rope bridge, antrim coast"},{"r":92,"n":"잉글랜드 도싯 더들 도어","s":"","m":"","d":"캠핑, 바위 웅덩이 탐험, 자연 산책로, 코스티어링, 사진 촬영","dd":"도싯 쥐라기 해안(유네스코 세계자연유산)의 상징인 석회암 자연 아치로, 바다 쪽으로 뻗은 암벽에 파도가 뚫어낸 문 모양 구멍이 특징이다. 절벽 위 사우스웨스트 코스트 패스에서 아치와 자갈 해변을 내려다보고, 계단으로 해변까지 내려가 바위 웅덩이 탐험과 사진 촬영을 즐긴다. 인근 룰워스 코브까지 이어지는 절벽 산책로가 대표 코스이며, 일대에서 캠핑과 코스티어링도 이뤄진다.","tips":["룰워스 코브 주차장에서 도보 약 30~40분, 언덕 경사가 있어 편한 신발이 필요하다","해변 절벽은 낙석 위험이 있으므로 절벽 아래 가까이 머물지 않는다"],"stats":[{"l":"국가","v":"영국"},{"l":"유형","v":"해안 자연 아치"},{"l":"등재","v":"쥐라기 해안 세계유산"}],"ik":"durdle door, jurassic coast, limestone arch"},{"r":93,"n":"중국 광시 카르스트 산","s":"","m":"","d":"","dd":"광시좡족자치구 구이린(계림)~양숴 일대에 원뿔형 석회암 봉우리 수천 개가 솟아 있는 카르스트 지형으로, 중국 남방 카르스트의 일부로 유네스코 세계자연유산에 등재됐다. 리강 유람선을 타면 강 양안으로 이어지는 봉우리 풍경을 감상하며, 싱핑 마을 구간은 중국 20위안 지폐 도안의 배경으로 유명하다. 양숴에서는 자전거로 논밭 사이 봉우리 사이를 달리거나 강변 산책을 즐긴다.","tips":["4~10월이 유람 적기이며, 비 온 뒤 물안개 낀 풍경도 볼 만하다","리강 유람은 구이린~양숴 전 구간 크루즈와 싱핑 뗏목 단거리 코스 중 선택한다"],"stats":[{"l":"국가","v":"중국"},{"l":"유형","v":"카르스트 산"},{"l":"등재","v":"유네스코 세계자연유산"}],"ik":"guangxi karst, li river, yangshuo peaks"},{"r":94,"n":"칠레 이스터섬","s":"","m":"","d":"화산암으로 만들어진 약 900개에 달하는 거대한 석상들","dd":"남태평양 한가운데, 칠레 본토에서 약 3,500km 떨어진 화산섬으로 원주민어로 라파누이라 불린다. 화산암을 깎아 만든 거대 석상 모아이가 약 900기 남아 있으며, 섬 전체가 라파누이 국립공원으로 1995년 유네스코 세계유산에 등재됐다. 15기의 모아이가 일렬로 선 아후 통가리키, 석상 채석장이던 라노 라라쿠 화산, 야자수 해변 아나케나가 대표 볼거리다.","tips":["산티아고에서 항공으로 약 5시간 30분, 국립공원 입장권은 사전 구매가 필요하다","모아이와 제단(아후)은 접촉·등반이 금지되며 지정 탐방로만 이용한다"],"stats":[{"l":"국가","v":"칠레"},{"l":"유형","v":"화산섬 유적"},{"l":"모아이","v":"약 900기"}],"ik":"easter island, moai statues, rapa nui"},{"r":95,"n":"캘리포니아 세쿼이아 국립공원 모로 록","s":"","m":"","d":"400개의 계단을 오르면 이 공원의 정상에 도달할 수","dd":"세쿼이아 국립공원 자이언트 포레스트 가장자리에 솟은 화강암 돔으로, 1931년 바위에 새겨 만든 350여 개의 돌계단을 오르면 해발 약 2,050m 정상에 닿는다. 정상에서는 그레이트 웨스턴 디바이드의 설산 능선과 카웨아강 계곡이 파노라마로 펼쳐진다. 왕복 거리는 짧지만 고도감이 커서 공원의 대표 전망 포인트로 꼽히며, 거대 세쿼이아 숲 탐방과 묶어 방문한다.","tips":["계단 구간은 낙뢰 위험이 있어 뇌우 예보 시 오르지 않는다","여름 성수기에는 주차장이 협소해 공원 셔틀 이용이 편하다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"화강암 돔 전망대"},{"l":"해발","v":"약 2,050m"}],"ik":"moro rock, sequoia national park, granite dome"},{"r":96,"n":"스코틀랜드 퀴랭","s":"","m":"","d":"전통 초막이 모여 있는 작은 농촌","dd":"스카이섬 트로터니시 반도 북단의 대규모 산사태 지형으로, 뾰족 바위 '니들', 요새처럼 보이는 '프리즌', 꼭대기가 평평한 '테이블' 등 기묘한 바위 지형이 초원 능선에 이어진다. 지금도 조금씩 움직이는 활성 지반이라 아래 도로가 수시로 보수될 만큼 지질학적으로도 특이한 곳이다. 주차장에서 능선을 도는 6~7km 순환 트레킹이 대표 코스로, 스카이섬에서 손꼽히는 절경 걷기 길이다.","tips":["날씨 변화가 심하고 바람이 강하므로 방수·방풍 장비를 갖춘다","성수기 주차장이 금세 차니 이른 아침 도착이 유리하다"],"stats":[{"l":"국가","v":"영국(스코틀랜드)"},{"l":"유형","v":"산사태 지형 트레일"},{"l":"코스","v":"순환 약 6~7km"}],"ik":"quiraing, isle of skye, scotland ridge"},{"r":97,"n":"아리조나주 하이로글리픽 캐년 트레일","s":"","m":"","d":"호노캄 인디언들이 1,500년 전부터 정착해 살아 온","dd":"피닉스 동쪽 수퍼스티션 산맥 자락 골드캐니언에서 출발하는 왕복 약 4.5km의 사막 트레일로, 협곡 끝 바위에 호호캄(Hohokam) 원주민이 새긴 암각화 수백 점이 남아 있다. 암각화는 최대 1,500년 전으로 거슬러 올라가는 것으로 알려져 있으며, 비가 온 뒤에는 협곡 바위 사이에 물웅덩이가 고여 사막 풍경과 대비를 이룬다. 사와로 선인장 사이를 걷는 완만한 길이라 초보자도 걷기 무난하다.","tips":["여름 한낮은 매우 더우므로 10~4월 또는 이른 아침에 걷는다","암각화는 문화재이므로 만지거나 낙서하지 않는다","그늘이 거의 없어 물과 모자, 자외선 차단제가 필수다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"사막 암각화 트레일"},{"l":"코스","v":"왕복 약 4.5km"}],"ik":"hieroglyphic trail, petroglyphs, superstition mountains"},{"r":98,"n":"유타주 캐피틀 리프 국립공원","s":"","m":"","d":"절벽, 곳곳에 숨겨진 아치, 깊은 협곡, 무수히 많은 돔","dd":"지층이 한쪽으로 접혀 올라간 길이 약 160km의 습곡 지형 '워터포켓 폴드'를 품은 국립공원으로 1971년 지정됐다. 붉은 절벽과 흰 사암 돔, 숨은 자연 아치, 깊은 슬롯캐니언이 이어지며, 히크먼 브리지 트레일과 캐피틀 협곡 드라이브가 대표 코스다. 공원 안 옛 개척민 마을 프루이타에는 과수원이 남아 있어 철에 따라 과일 따기가 열린다.","tips":["봄(4~6월)과 가을(9~10월)이 더위를 피해 걷기 좋다","폭우 시 슬롯캐니언은 돌발 홍수 위험이 크므로 기상을 확인하고 진입한다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"사암 협곡 국립공원"},{"l":"추천시기","v":"4~6월·9~10월"}],"ik":"capitol reef, waterpocket fold, utah desert"},{"r":99,"n":"네바다주 훔볼트 카운티","s":"","m":"","d":"","dd":"네바다 북부의 고원 사막 지대로, 중심 도시 위네무카 뒤편 소노마 산맥의 워터캐니언 레크리에이션 지역이 대표 야외 활동지다. 마을에서 2,000피트가량 솟은 협곡 상부의 바위 지대와 계곡 바닥의 미루나무·사시나무 숲이 대비를 이루며, 하이킹·캠핑·자전거를 무료로 즐긴다. 워터캐니언 트레일(왕복 약 12km)과 산타로사 산맥 방면 드라이브가 주요 코스다.","tips":["3~11월이 트레킹 적기이며, 사막 기후라 일교차와 식수 준비에 유의한다","위네무카 시내에서 워터캐니언까지 차로 약 10분 거리라 접근이 쉽다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"고원 사막·협곡"},{"l":"추천시기","v":"3~11월"}],"ik":"nevada high desert, water canyon, winnemucca"},{"r":100,"n":"중국 계림 가장 아름다운 곳 중 하나","s":"","m":"","d":"맑은 강물, 그림 같은 외곽 풍경, 계단식 논의 절경을 자랑","dd":"'계림 산수는 천하제일'이라는 말로 알려진 중국 대표 산수 명승지로, 맑은 리강이 카르스트 봉우리 사이를 굽이쳐 흐른다. 구이린에서 양숴까지 이어지는 리강 유람과 룽성(룽지) 계단식 논의 절경, 코끼리 코 모양의 상비산, 종유석 동굴 루디옌(갈대피리 동굴)이 대표 볼거리다. 양숴 일대에서는 자전거·대나무 뗏목으로 강촌 풍경 속을 천천히 둘러본다.","tips":["룽지 계단식 논은 물을 댄 5~6월과 황금빛 벼가 익는 9~10월이 절경이다","리강 유람은 이른 아침 출발 편이 물안개 풍경을 보기 좋다"],"stats":[{"l":"국가","v":"중국"},{"l":"유형","v":"강·카르스트 명승"},{"l":"추천시기","v":"4~10월"}],"ik":"guilin, li river cruise, rice terraces"},{"r":101,"n":"뉴햄프셔주 스위프트 강","s":"","m":"","d":"카누, 카약, 수영, 관광, 낚시, 캠핑","dd":"화이트마운틴 국유림의 경관 도로 캉카마구스 하이웨이를 따라 나란히 흐르는 강으로, 화강암 바위 사이를 흐르는 맑은 물과 단풍숲이 어우러진다. 로키 고지(Rocky Gorge)와 로어 폴스 등 도로변 명소에서 물놀이·바위 웅덩이 구경을 즐기고, 카누·카약·낚시·캠핑 등 활동이 활발하다. 특히 10월 초 단풍철에는 미국 동부에서 손꼽히는 드라이브·산책 코스가 된다.","tips":["단풍 절정기(9월 말~10월 중순)는 도로와 주차장이 혼잡하니 평일 이른 시간이 낫다","로키 고지 구간은 물살이 빨라 수영이 금지돼 있으니 안내판을 따른다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"계류·단풍 명소"},{"l":"추천시기","v":"9월 말~10월 중순"}],"ik":"swift river, kancamagus highway, new england foliage"},{"r":102,"n":"인도네시아 카와이젠","s":"","m":"","d":"카와이젠의 물빛은 놀랄 만큼 청록색을 띱","dd":"자바섬 동부의 이젠 화산 분화구에 있는 세계 최대급 강산성 칼데라 호수로, 물빛이 놀랄 만큼 짙은 청록색을 띤다. 새벽에는 유황 가스가 타며 내는 푸른 불꽃 '블루 파이어'를 볼 수 있어 야간 산행으로 유명하며, 분화구에서는 지금도 광부들이 유황을 캐어 나른다. 해발 2,799m 화산의 등산로 입구 팔투딩에서 분화구 능선까지 약 3km를 오른다.","tips":["블루 파이어는 새벽 2~4시경 어둠 속에서만 보이므로 야간 출발 투어를 이용한다","유황 가스가 독하므로 방독 마스크를 대여·지참하고 풍향에 따라 접근을 조절한다"],"stats":[{"l":"국가","v":"인도네시아"},{"l":"유형","v":"화산 분화구 호수"},{"l":"해발","v":"2,799m"}],"ik":"kawah ijen, blue fire, crater lake"},{"r":103,"n":"뉴질랜드 코에코헤 해변","s":"","m":"","d":"거대한 둥근 바위가 해안에 흩어져 있는 것으로 유명","dd":"남섬 오타고 해안의 해변으로, 지름 최대 2m가 넘는 거대한 공 모양 바위 '모에라키 볼더스'가 모래사장에 흩어져 있는 것으로 유명하다. 이 바위들은 수천만 년에 걸쳐 해저 퇴적층 속에서 광물이 뭉쳐 자란 구형 결핵체(콘크리션)가 파도 침식으로 드러난 것이다. 해변 산책과 함께 일출 무렵 바위 사이로 비치는 빛을 담는 사진 촬영지로 인기가 높다.","tips":["썰물 때 바위가 온전히 드러나므로 물때를 확인하고 방문한다","더니든에서 차로 약 1시간, 일출 시간대가 사진 촬영에 가장 좋다"],"stats":[{"l":"국가","v":"뉴질랜드"},{"l":"유형","v":"해변 기암"},{"l":"바위 지름","v":"최대 2m 이상"}],"ik":"moeraki boulders, koekohe beach, new zealand coast"},{"r":104,"n":"아이슬란드 셀랴란드스 폭포","s":"","m":"","d":"가장 인기 있는 자연 경관 중 하나","dd":"아이슬란드 남부 링로드 변에 있는 낙차 약 60m의 폭포로, 폭포수 뒤편 절벽에 산책로가 나 있어 물줄기 안쪽에서 밖을 바라볼 수 있는 것으로 유명하다. 해 질 무렵 폭포 뒤에서 보는 역광 풍경이 대표 장면으로 꼽힌다. 도보 몇 분 거리에 바위틈에 숨은 폭포 글류프라부이가 있어 함께 둘러보기 좋다.","tips":["폭포 뒤 산책로는 물보라가 심하므로 방수 재킷과 미끄럼 방지 신발이 필요하다","겨울에는 결빙으로 뒤편 통로가 폐쇄되는 경우가 많으니 여름철 방문이 무난하다"],"stats":[{"l":"국가","v":"아이슬란드"},{"l":"유형","v":"폭포"},{"l":"낙차","v":"약 60m"}],"ik":"seljalandsfoss, iceland waterfall, behind waterfall"},{"r":105,"n":"오스트리아 잘츠부르크 카프룬 댐","s":"","m":"","d":"최고 관광 명소 중 하나로 놀라운 전망을","dd":"잘츠부르크주 카프룬 마을 위 호에타우에른 산악지대에 조성된 고산 저수지군으로, 무저보덴(해발 약 2,040m)과 바서팔보덴 두 저수지를 거대한 댐 벽이 막고 있다. 에메랄드빛 저수지와 3,000m급 설산이 어우러진 전망이 대표 볼거리이며, 댐 내부를 둘러보는 가이드 투어와 댐 위 산책로, 주변 하이킹 코스가 운영된다. 셔틀버스와 유럽 최대급 개방형 경사 리프트를 갈아타고 오르는 접근 과정 자체도 볼거리다.","tips":["저수지 개방 기간은 대략 5월 말~10월 중순으로 겨울에는 접근이 불가하다","고지대라 여름에도 쌀쌀하므로 겉옷을 준비한다"],"stats":[{"l":"국가","v":"오스트리아"},{"l":"유형","v":"고산 저수지·댐"},{"l":"해발","v":"약 2,040m(무저보덴)"}],"ik":"kaprun reservoir, mooserboden dam, austrian alps"},{"r":106,"n":"캘리포니아주 피너클즈 국립공원","s":"","m":"","d":"수백만 년 전 강력한 폭발, 용암 분출","dd":"약 2,300만 년 전 화산 폭발과 용암 분출로 생긴 고대 화산의 잔해가 샌앤드리어스 단층을 따라 수백 km 이동해 지금의 자리에 남은 독특한 지형으로, 2013년 국립공원으로 승격됐다. 뾰족한 화산암 첨탑들과 거대한 바위가 쌓여 만들어진 탈루스 동굴(베어 걸치·발코니스)이 대표 볼거리다. 멸종 위기에서 복원 중인 캘리포니아 콘도르의 방사지이기도 해서 능선 트레킹 중 대형 조류를 관찰할 기회가 있다.","tips":["여름은 매우 더우므로 봄(3~5월) 야생화 철이 트레킹 적기다","동굴 구간은 손전등이 필수이며, 박쥐 보호를 위해 폐쇄되는 시기가 있으니 사전 확인한다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"화산암 국립공원"},{"l":"추천시기","v":"3~5월"}],"ik":"pinnacles national park, talus cave, california condor"},{"r":107,"n":"브라질 렌소이스 마라넨시스 국립공원","s":"","m":"","d":"아름다운 풍경과 지역의 생물 다양성","dd":"브라질 북동부 마라냥주 해안에 펼쳐진 광대한 백사 사구 지대로, 우기에 내린 빗물이 사구 사이 움푹한 곳에 고여 에메랄드빛 담수 라군 수천 개가 생겨난다. 하얀 모래 언덕과 푸른 라군이 끝없이 반복되는 풍경은 '마라냥의 침대보'라는 이름 그대로이며, 2024년 유네스코 세계자연유산에 등재됐다. 사구 트레킹과 라군 수영, 4륜구동 투어가 주요 활동이다.","tips":["라군에 물이 가득 차는 6~9월이 최적기이며, 연말로 갈수록 물이 마른다","관문 도시 바헤이리냐스에서 투어 차량으로 진입하며, 모래 위 이동이 많아 맨발·샌들이 편하다"],"stats":[{"l":"국가","v":"브라질"},{"l":"유형","v":"사구·라군"},{"l":"추천시기","v":"6~9월"}],"ik":"lencois maranhenses, sand dunes lagoon, brazil desert"},{"r":108,"n":"스코틀랜드 칸니치 글랜 아프릭","s":"","m":"","d":"호수, 산, 소나무, 자작나무 및 오크나무 혼합림이 특징","dd":"인버네스 남서쪽 칸니치 마을 안쪽으로 이어지는 계곡으로, 스코틀랜드에서 가장 아름다운 글렌으로 자주 꼽힌다. 빙하가 깎은 호수와 산자락에 고대 칼레도니아 소나무숲의 대규모 잔존림이 남아 있고, 자작나무·오크가 섞인 혼합림이 국가자연보호구역으로 관리된다. 아프릭 호수를 도는 순환 트레킹과 도그 폭포·플로다 폭포 산책로가 대표 코스이며, 가을 단풍철 풍경이 뛰어나다.","tips":["5~6월 신록과 10월 단풍철이 걷기 좋고, 여름철에는 흡혈 날파리(미지) 대비가 필요하다","대중교통이 드물어 렌터카 이용이 사실상 필수다"],"stats":[{"l":"국가","v":"영국(스코틀랜드)"},{"l":"유형","v":"호수·원시림 계곡"},{"l":"추천시기","v":"5~6월·10월"}],"ik":"glen affric, caledonian pine forest, scottish highlands"},{"r":109,"n":"인도 스피티밸리","s":"","m":"","d":"자연과 모험을 사랑하는 사진작가들에게 인기","dd":"히마찰프라데시주 히말라야 고지대의 한랭 사막 계곡으로, 평균 고도가 3,000m를 훌쩍 넘는 황량한 산악 풍경과 티베트 불교 문화가 어우러진다. 절벽 위에 층층이 쌓인 11세기 키 곰파(사원)와 고지대 마을 키버, 스피티강이 굽이치는 협곡 전망이 대표 볼거리로, 자연과 모험을 즐기는 사진가·트레커에게 인기가 높다. 중심 마을 카자(해발 약 3,650m)를 거점으로 마을 간 트레킹과 오지 드라이브가 이뤄진다.","tips":["도로가 완전히 열리는 6~10월이 방문 적기이며, 겨울에는 고개가 눈으로 막힌다","고도가 높아 고산증 예방을 위해 하루 이상 고도 적응 일정을 둔다"],"stats":[{"l":"국가","v":"인도"},{"l":"유형","v":"고산 사막 계곡"},{"l":"추천시기","v":"6~10월"}],"ik":"spiti valley, key monastery, himalaya desert"},{"r":110,"n":"터키 넴루트 산","s":"","m":"","d":"안티오코스 1세가 세운 그리스와 페르시아 신들의 동상","dd":"튀르키예 남동부 해발 2,134m의 산으로, 기원전 1세기 콤마게네 왕국의 안티오코스 1세가 정상에 자신의 무덤 봉분과 그리스·페르시아 신들의 거대 석상을 세웠다. 세월이 지나며 떨어져 나온 지름 수 미터의 석상 머리들이 테라스에 늘어선 풍경이 상징이며, 1987년 유네스코 세계유산에 등재됐다. 동·서 테라스에서 맞는 일출·일몰이 대표 장면으로, 주차장에서 정상까지는 20~30분가량 걸어 오른다.","tips":["적설로 도로가 닫히는 겨울을 피해 대략 5~10월에 방문한다","일출 관람은 새벽 산행이라 한여름에도 방한 의류가 필요하다"],"stats":[{"l":"국가","v":"튀르키예"},{"l":"유형","v":"고대 유적 산"},{"l":"해발","v":"2,134m"}],"ik":"mount nemrut, stone heads, commagene"}]},{"g":"아름다운 풍경","items":[{"r":1,"n":"페로 제도 에이디","s":"","m":"","d":"산과 바다가 아름다운 전경을  인구가 700명","dd":"덴마크령 페로 제도 에스투로이섬 북서쪽 끝에 자리한 인구 약 700명의 해안 마을이다. 마을 양쪽으로 바다가 열리는 지협 지형 위에 집들이 모여 있고, 뒤로는 초록 산비탈이 이어진다. 앞바다에는 '거인과 마녀'라 불리는 높이 71m·69m의 해식 기둥 리신과 켈링인이 솟아 있어 마을과 함께 페로 제도를 대표하는 풍경을 이룬다.","tips":["리신과 켈링인 해식 기둥은 마을 북서쪽 절벽 방향에서 잘 보인다","날씨가 비교적 안정적인 6~8월이 방문 적기다","수도 토르스하운에서 자동차로 이동하며, 인근에 페로 최고봉 슬라이타라틴두르가 있다"],"stats":[{"l":"국가","v":"덴마크령 페로 제도"},{"l":"유형","v":"해안 마을"},{"l":"추천시기","v":"6~8월"}],"ik":"faroe islands village, eidi coast, sea stacks"},{"r":2,"n":"중국 양수오 벼 수확한 후 논","s":"","m":"","d":"광시좡족 자치구의 웅장한 카르스트 봉우리에 에워싸여","dd":"광시좡족 자치구 구이린 인근의 양수오는 우뚝 솟은 카르스트 석회암 봉우리들이 들판과 강을 에워싼 풍경으로 유명하다. 벼 수확기가 지난 논은 황금빛과 갈색이 어우러진 농촌 풍경을 보여주며, 봉우리 사이로 리강과 위룽강이 흐른다. 대나무 뗏목과 자전거로 논과 봉우리 사이를 둘러보는 여행 방식이 자리 잡았다.","tips":["벼가 익는 9~10월이 황금빛 논 풍경의 적기다","위룽강 대나무 뗏목이나 자전거로 시골길을 돌아보는 방법이 일반적이다"],"stats":[{"l":"국가","v":"중국"},{"l":"유형","v":"카르스트 농촌 풍경"},{"l":"추천시기","v":"9~10월"}],"ik":"yangshuo karst, guangxi rice fields, li river"},{"r":3,"n":"스리랑카 차밭","s":"","m":"","d":"캔디, 엘라, 누와라 엘리야의 차 농장에 꼭 들려","dd":"스리랑카 중앙 고원의 캔디, 누와라 엘리야, 엘라 일대는 산비탈을 뒤덮은 실론티 차밭으로 유명하다. 19세기 영국 식민지 시대에 시작된 차 재배가 지금까지 이어지며, 안개 낀 초록 언덕과 찻잎 따는 풍경을 볼 수 있다. 차 공장 견학과 시음, 고원 기차 여행이 대표적인 즐길 거리다.","tips":["캔디에서 엘라까지 가는 고원 열차는 차밭을 관통하는 명물 구간이다","엘라의 나인 아치 브리지, 누와라 엘리야의 차 공장 견학을 함께 묶으면 좋다","고원 지대는 대체로 1~4월이 비가 적어 여행하기 낫다"],"stats":[{"l":"국가","v":"스리랑카"},{"l":"유형","v":"고원 차 농장"},{"l":"추천시기","v":"1~4월"}],"ik":"sri lanka tea plantation, nuwara eliya hills, ella train"},{"r":4,"n":"영국 콘월주 글렌더건 가든","s":"","m":"","d":"180년 전 심은 체리 월계수 나무로 이루어진 미로","dd":"콘월 남부 헬퍼드강 계곡에 자리한 내셔널 트러스트 소유의 정원이다. 1833년 알프레드 폭스가 자녀들을 위해 심은 체리 월계수 미로가 상징으로, 곡선형 산울타리가 중앙의 초가 정자까지 이어진다. 아열대 식물과 목련, 동백이 자라는 계곡 정원이 바다 쪽 마을 더건까지 이어진다.","tips":["목련과 동백이 피는 봄이 가장 화려한 시기다","정원 아래쪽 더건 마을의 작은 해변까지 걸어 내려갈 수 있다"],"stats":[{"l":"국가","v":"영국"},{"l":"유형","v":"정원(내셔널 트러스트)"},{"l":"추천시기","v":"봄"}],"ik":"glendurgan garden maze, cornwall garden, laurel hedge"},{"r":5,"n":"일본 홋카이도 꽃밭","s":"","m":"","d":"홋카이도 섬의 들판엔 매년 여름 향긋한 꽃이","dd":"홋카이도 후라노와 비에이 일대의 들판은 여름마다 라벤더를 비롯한 꽃들로 물든다. 후라노의 팜 도미타는 보랏빛 라벤더밭으로, 비에이의 시키사이 언덕은 여러 색 꽃이 띠를 이룬 구릉 풍경으로 알려져 있다. 완만한 언덕과 밭이 이어지는 전원 풍경 자체가 볼거리다.","tips":["라벤더는 7월 중순 무렵이 절정이다","후라노 팜 도미타와 비에이 시키사이 언덕을 함께 도는 동선이 일반적이다"],"stats":[{"l":"국가","v":"일본"},{"l":"유형","v":"꽃밭·전원 풍경"},{"l":"추천시기","v":"7월"}],"ik":"hokkaido lavender field, furano flowers, biei hills"},{"r":6,"n":"네바다주 레드 록 캐니언 국립보존지구","s":"","m":"","d":"암벽등반, 등산, 산악자전거 그리고 승마와 같은","dd":"라스베이거스 서쪽 근교에 있는 붉은 사암 협곡 지대다. 줄무늬가 선명한 붉은 바위 절벽과 사막 식생이 어우러지며, 13마일(약 21km) 시닉 드라이브를 따라 전망대와 트레일 입구가 이어진다. 암벽등반, 하이킹, 산악자전거, 승마 등 야외활동 명소로 꼽힌다.","tips":["여름 낮은 폭염이 심하므로 가을~봄 또는 이른 아침 방문이 낫다","성수기에는 시닉 드라이브 시간제 입장 예약이 필요할 수 있으니 사전 확인이 필요하다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"사막 협곡 보존지구"},{"l":"추천시기","v":"10~4월"}],"ik":"red rock canyon nevada, desert sandstone, mojave cliffs"},{"r":7,"n":"이탈리아 마나롤라","s":"","m":"","d":"리오마조레 마을과 비아 델라모레라는 낭만 길로 유명","dd":"친퀘테레 다섯 마을 중 하나로, 절벽에 파스텔색 집들이 층층이 붙어 있는 어촌이다. 이웃 마을 리오마조레와는 절벽 산책로 '비아 델라모레(사랑의 길)'로 연결되며, 마을 주변 비탈에는 계단식 포도밭이 펼쳐진다. 친퀘테레 일대는 유네스코 세계유산으로 등재되어 있다.","tips":["항구 반대편 산책로에서 바라보는 마을 전경과 일몰이 대표 촬영 포인트다","마을 간 이동은 기차가 가장 편리하다"],"stats":[{"l":"국가","v":"이탈리아"},{"l":"유형","v":"해안 절벽 마을"},{"l":"추천시기","v":"4~6월, 9~10월"}],"ik":"manarola cinque terre, colorful cliff village, italian riviera"},{"r":8,"n":"프랑스 귀장 메스트라스","s":"","m":"","d":"굴 양식 수도로 알려진 귀장 메스트라스에는 항구","dd":"프랑스 남서부 아르카숑만에 접한 마을로, '굴 양식의 수도'로 불린다. 굴 양식 오두막이 늘어선 여러 개의 작은 굴 항구가 마을을 따라 이어지며, 항구에서 갓 딴 굴을 바로 맛볼 수 있다. 나무 오두막과 정박한 배들이 만드는 소박한 항구 풍경이 볼거리다.","tips":["항구의 굴 오두막에서 화이트와인과 함께 굴 시식이 가능하다","인근 아르카숑과 유럽 최대 모래언덕인 뒨 뒤 필라와 묶어 여행하기 좋다"],"stats":[{"l":"국가","v":"프랑스"},{"l":"유형","v":"굴 양식 항구 마을"}],"ik":"gujan mestras oyster port, arcachon bay, oyster huts"},{"r":9,"n":"필리핀 엘니도","s":"","m":"","d":"필리핀에서 꼭 가봐야 할 여행지","dd":"팔라완섬 북단의 해양 휴양지로, 필리핀을 대표하는 여행지 중 하나다. 바쿠이트만에 흩어진 석회암 카르스트 섬들과 청록색 라군, 백사장이 어우러진 풍경으로 알려져 있다. 빅 라군·스몰 라군 등을 도는 아일랜드 호핑 투어가 대표적인 즐길 거리다.","tips":["건기인 12~5월이 방문 적기다","라군 중심의 아일랜드 호핑 투어 A코스가 가장 인기가 많다"],"stats":[{"l":"국가","v":"필리핀"},{"l":"유형","v":"해양 카르스트 군도"},{"l":"추천시기","v":"12~5월"}],"ik":"el nido palawan, lagoon limestone cliffs, island hopping"},{"r":10,"n":"벨기에 거인의 무덤","s":"","m":"","d":"부용에서 가장 사진 찍기 좋은 장소","dd":"벨기에 아르덴 지방 부용 인근에 있는 전망 명소로, 스무아강이 크게 굽이치는 물줄기 안에 숲으로 덮인 언덕이 섬처럼 솟아 있다. 언덕의 생김새가 거대한 무덤을 닮았다 하여 '거인의 무덤(Tombeau du Géant)'이라 불린다. 강 굽이와 언덕을 한눈에 내려다보는 구도가 부용 일대에서 손꼽히는 촬영 포인트다.","tips":["보타사르(Botassart) 마을 쪽 전망대에서 전체 구도가 가장 잘 잡힌다","이른 아침 강 안개가 낄 때 분위기 있는 사진을 찍을 수 있다"],"stats":[{"l":"국가","v":"벨기에"},{"l":"유형","v":"강 굽이 전망지"}],"ik":"tombeau du geant, semois river bend, ardennes forest"},{"r":11,"n":"독일 포르겐제호","s":"","m":"","d":"항해, 서핑, 수영, 보트 타기 등 레저활동","dd":"바이에른주 퓌센 북쪽에 있는 호수로, 면적 기준 독일 최대의 저수지다. 1950년대 레히강에 댐을 지으면서 생긴 인공호로, 여름철에는 요트, 서핑, 수영, 보트 등 수상 레저의 무대가 된다. 유람선을 타면 알프스 산자락과 노이슈반슈타인성을 물 위에서 조망할 수 있다.","tips":["만수위가 되는 6월~10월 중순에만 유람선이 운항한다","호수 둘레를 따라 자전거 일주 코스가 정비되어 있다"],"stats":[{"l":"국가","v":"독일"},{"l":"유형","v":"호수(저수지)"},{"l":"추천시기","v":"6~10월"}],"ik":"forggensee lake, bavaria alps lake, fuessen"},{"r":12,"n":"뉴질랜드 펀힐","s":"","m":"","d":"이 지역에서 풍경이 가장 좋기로 유명","dd":"퀸스타운 서쪽, 벤 로몬드산 아래 경사면에 자리한 마을이다. 와카티푸 호수와 리마커블스 산맥, 퀸스타운 시가지를 한 화면에 담을 수 있는 전망으로 이 지역에서 풍경이 좋기로 알려져 있다. 마을 위쪽으로는 호수를 내려다보는 펀힐 루프 트랙이 이어진다.","tips":["펀힐 루프 트랙을 오르면 와카티푸 호수 전망 포인트에 닿는다","펀힐 로드의 작은 전망 공원에서도 호수와 산맥이 잘 보인다"],"stats":[{"l":"국가","v":"뉴질랜드"},{"l":"유형","v":"호수 전망 마을"}],"ik":"lake wakatipu queenstown, remarkables mountains, new zealand lake view"},{"r":13,"n":"캘리포니아주 안자-보레고 사막 주립공원","s":"","m":"","d":"예술가 리카르도 브레세다가 조각품을 100점","dd":"캘리포니아 최대 규모의 주립공원으로, 남부 사막 지대에 넓게 펼쳐져 있다. 비가 충분한 해 봄이면 사막이 야생화로 뒤덮이는 '슈퍼블룸'이 일어나고, 공원 관문 마을 보레고 스프링스 주변 들판에는 조각가 리카르도 브레세다가 만든 공룡·동물 형상의 대형 금속 조각 130여 점이 흩어져 있다.","tips":["야생화는 강수량에 따라 다르지만 대체로 2~4월에 핀다","금속 조각상은 보레고 스프링스 주변 갈레타 메도스 일대에 모여 있다","여름은 혹서기이므로 피하는 것이 좋다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"사막 주립공원"},{"l":"추천시기","v":"2~4월"}],"ik":"anza borrego desert, metal sculptures desert, california wildflowers"},{"r":14,"n":"브라질 포르탈레자 협곡","s":"","m":"","d":"하이킹 코스는 주로 페드라 도 세그레도와 미란테","dd":"브라질 남부 세하 제랄 국립공원에 있는 대형 협곡으로, 캄바라 두 술 마을에서 약 23km 떨어져 있다. 길이 약 7.5km에 절벽 높이가 최대 900m에 이르며, 절벽 가장자리를 따라 걷는 전망 트레일에서 협곡 전체와 초원 지대가 내려다보인다. 주요 코스는 미란테(전망대) 트레일, 치그리 프레투 폭포 트레일, 페드라 두 세그레두 트레일이다.","tips":["오전에는 안개가 적어 시야가 좋으므로 이른 방문이 유리하다","화요일은 휴장일이므로 일정에서 피해야 한다"],"stats":[{"l":"국가","v":"브라질"},{"l":"유형","v":"협곡(국립공원)"}],"ik":"fortaleza canyon brazil, serra geral cliffs, canyon rim"},{"r":15,"n":"스코틀랜드 페어리 글렌","s":"","m":"","d":"이곳은 천연 암석, 연못 그리고 폭포가 특징","dd":"스카이섬 우이그 마을 인근의 작은 계곡으로, 산사태 지형이 만든 원뿔 모양의 풀 덮인 언덕들이 미니어처 산맥처럼 늘어서 있다. 언덕 사이에 천연 암석과 작은 연못, 폭포가 숨어 있으며, 바위 꼭대기가 성곽처럼 보이는 '캐슬 유언' 바위가 상징이다. 요정이 산다는 전설에서 이름이 붙었다.","tips":["우이그 마을에서 좁은 길로 진입하며 주차 공간이 제한적이므로 이른 시간이 낫다","캐슬 유언 바위 위에 오르면 계곡 전체가 내려다보인다"],"stats":[{"l":"국가","v":"영국(스코틀랜드)"},{"l":"유형","v":"기암 언덕 계곡"}],"ik":"fairy glen skye, grassy cone hills, scotland highlands"},{"r":16,"n":"오클라호마주 노먼의 야생화","s":"","m":"","d":"인디언 페인트 브러시라는 야생화","dd":"오클라호마주 노먼 일대의 들판과 초원은 봄이면 야생화로 물든다. 특히 붓에 주홍 물감을 묻힌 듯한 인디언 페인트브러시가 무리 지어 피어 초원을 붉게 물들이는 풍경으로 알려져 있다. 대평원 특유의 낮은 지평선과 야생화 군락이 어우러진다.","tips":["야생화는 대체로 4~5월 봄철에 절정을 이룬다","해 질 녘 역광에서 붉은 꽃밭의 색이 잘 살아난다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"야생화 초원"},{"l":"추천시기","v":"4~5월"}],"ik":"indian paintbrush wildflowers, oklahoma prairie, red wildflower field"},{"r":17,"n":"콜롬비아 왁스 야자나무","s":"","m":"","d":"세계에서 가장 키가 큰 야자나무 품종","dd":"콜롬비아 킨디오주 코코라 계곡은 세계에서 가장 키가 큰 야자나무 품종인 킨디오 왁스 야자의 서식지다. 이 나무는 최대 45m 이상까지 자라며 콜롬비아의 국목으로 지정되어 있다. 안개 낀 초록 계곡 위로 가늘고 긴 야자나무들이 띄엄띄엄 솟은 풍경이 독특하다.","tips":["거점 마을 살렌토에서 지프(윌리스)를 타고 계곡 입구로 이동한다","코코라 계곡 루프 트레킹으로 야자 군락과 운무림을 함께 볼 수 있다","오전에 안개가 걷히는 시간대가 촬영에 유리하다"],"stats":[{"l":"국가","v":"콜롬비아"},{"l":"유형","v":"계곡·야자 군락"}],"ik":"cocora valley wax palm, colombia palm trees, quindio valley"},{"r":18,"n":"일본 야마가타현","s":"","m":"","d":"탄성이 절로 나오는 산악 풍경, 온천, 오래된 절","dd":"일본 도호쿠 지방의 산악 현으로, 산과 온천, 오래된 절이 어우러진 풍경으로 알려져 있다. 절벽 위에 법당이 얹힌 야마데라(릿샤쿠지), 겨울 수빙(스노 몬스터)으로 유명한 자오 온천, 대정 시대 목조 여관이 늘어선 긴잔 온천이 대표 명소다. 사계절 풍경 변화가 뚜렷하다.","tips":["야마데라는 1,000여 개의 돌계단을 올라야 전망대에 닿는다","자오의 수빙은 12~3월, 절정은 2월 무렵이다","긴잔 온천은 눈 내리는 저녁 가스등 풍경이 유명하다"],"stats":[{"l":"국가","v":"일본"},{"l":"유형","v":"산악·온천 지역"}],"ik":"yamadera temple, ginzan onsen snow, yamagata mountains"},{"r":19,"n":"웨일즈 스노도니아 국립공원","s":"","m":"","d":"맑은 호수와 하이킹 트레일이 많아 자연 애호가들의 낙원","dd":"웨일스 북서부의 국립공원으로, 웨일스 최고봉인 스노든산(어 위더바, 1,085m)을 중심으로 산악 지형과 빙하호, 계곡이 펼쳐진다. 맑은 호수와 다양한 난이도의 하이킹 트레일이 많아 자연 애호가와 등산객이 즐겨 찾는다. 정상까지는 걷는 길 외에 산악열차로도 오를 수 있다.","tips":["스노든 정상은 란베리스 패스 등 여러 등산로와 산악열차로 접근할 수 있다","날씨 변화가 심하므로 방수 장비를 준비해야 한다"],"stats":[{"l":"국가","v":"영국(웨일스)"},{"l":"유형","v":"국립공원"},{"l":"추천시기","v":"5~9월"}],"ik":"snowdonia mountains, wales lake, snowdon peak"},{"r":20,"n":"이탈리아 부델리 섬","s":"","m":"","d":"스피아지아 로사라고 알려진 핑크 비치로 유명","dd":"사르데냐 북부 라 마달레나 군도에 속한 작은 섬으로, '스피아지아 로사'라 불리는 핑크 비치로 유명하다. 산호와 미세 유기물 조각이 섞여 모래가 분홍빛을 띤다. 생태 보호를 위해 해변 출입이 금지되어 있어, 보트를 타고 바다 위에서 감상하는 방식으로만 볼 수 있다.","tips":["라 마달레나나 팔라우에서 출발하는 보트 투어로 둘러본다","핑크 비치는 상륙이 금지되어 있으므로 해상 관람만 가능하다"],"stats":[{"l":"국가","v":"이탈리아"},{"l":"유형","v":"섬·핑크 비치"},{"l":"추천시기","v":"5~9월"}],"ik":"budelli pink beach, la maddalena archipelago, sardinia sea"},{"r":21,"n":"프랑스 에스칼르","s":"","m":"","d":"아름다운 모래와 자갈 해변으로 포토그래퍼에게 인기","dd":"프랑스 북부 오팔 해안의 작은 마을로, 프랑스 본토 최북단 백악 절벽인 캅 블랑네(최고 134m) 바로 아래에 있다. 조수에 따라 자갈 해변과 넓은 모래사장으로 모습이 바뀌는 해변과 하얀 절벽이 어우러져 사진가들에게 인기가 있다. 일대는 '그랑 시트 데 되 캅'으로 지정된 보호 경관이다.","tips":["간조 때 넓은 모래사장이 드러나 절벽을 배경으로 한 촬영에 유리하다","캅 블랑네 절벽 위 산책로에서 도버 해협 건너 영국 해안이 보이는 날도 있다"],"stats":[{"l":"국가","v":"프랑스"},{"l":"유형","v":"백악 절벽 해안"}],"ik":"cap blanc nez cliffs, opal coast france, chalk cliffs beach"},{"r":22,"n":"독일 에센","s":"","m":"","d":"걸어다니며 즐기기 좋은 곳","dd":"루르 공업지대의 중심 도시로, 산업유산과 녹지가 공존해 걸어서 둘러보기 좋다. 유네스코 세계유산인 촐페라인 탄광 산업단지가 대표 명소이며, 도심 남쪽에는 발데나이 호수와 대형 도시공원 그루가파크가 있다. 2017년 유럽 녹색 수도로 선정된 이력이 있다.","tips":["촐페라인 탄광 단지는 박물관과 산책로가 정비되어 반나절 코스로 적당하다","발데나이 호수 둘레길은 산책과 자전거에 좋다"],"stats":[{"l":"국가","v":"독일"},{"l":"유형","v":"도시(산업유산·공원)"}],"ik":"zollverein essen, ruhr industrial heritage, baldeney lake"},{"r":23,"n":"파타고니아 피츠로이","s":"","m":"","d":"등산과 트레킹 애호가들에게 인기 있는 곳","dd":"아르헨티나 파타고니아 로스 글라시아레스 국립공원에 솟은 해발 3,405m의 화강암 봉우리로, 등산과 트레킹 애호가들에게 널리 알려져 있다. 산 아래 마을 엘 찰텐이 트레킹 기점이며, 빙하호 라구나 데 로스 트레스까지 오르면 봉우리를 정면으로 마주한다. 새벽빛에 암벽이 붉게 물드는 장면이 대표 풍경이다.","tips":["남반구 여름인 11~3월이 트레킹 적기다","라구나 데 로스 트레스 왕복 트레킹은 하루가 걸리는 코스이므로 이른 출발이 필요하다","일출 직후 봉우리가 붉게 물드는 순간이 촬영 포인트다"],"stats":[{"l":"국가","v":"아르헨티나"},{"l":"유형","v":"산봉우리·트레킹"},{"l":"추천시기","v":"11~3월"}],"ik":"fitz roy patagonia, el chalten peak, laguna de los tres"},{"r":24,"n":"아르헨티나 산카를로스데바릴로체","s":"","m":"","d":"트레킹, 보트 타기, 스키 등의 활동으로도 유명","dd":"안데스 호수 지구의 중심 도시로, 나우엘 우아피 호수와 국립공원에 둘러싸여 있다. 호수와 설산이 어우러진 풍경 속에서 트레킹, 보트, 스키 등 사계절 야외활동이 활발하다. 알프스풍 건축과 초콜릿 가게가 많아 '남미의 스위스'로도 불린다.","tips":["호수 전망 드라이브 코스인 시르쿠이토 치코가 대표 관광 루트다","스키는 남반구 겨울인 6~9월에 세로 카테드랄 리조트에서 즐긴다"],"stats":[{"l":"국가","v":"아르헨티나"},{"l":"유형","v":"호수 도시"}],"ik":"bariloche lake, nahuel huapi, patagonia lake district"},{"r":25,"n":"이탈리아 푼타 몰렌티스","s":"","m":"","d":"해변의 한편에는 청록색 물과 백사장","dd":"사르데냐 남동부 빌라시미우스 인근의 작은 해변으로, 화강암 곶 한편에 청록색 바다와 백사장이 붙어 있는 지형이 특징이다. 바위 언덕이 바람을 막아 물이 잔잔하고 투명해 스노클링에 적합하다. 보호구역으로 관리되어 성수기에는 입장 인원과 차량이 제한된다.","tips":["여름 성수기에는 입장 제한이 있으므로 사전 예약 여부를 확인하고 이른 시간에 도착하는 것이 좋다","곶 위 바위 언덕에 오르면 해변 전체가 내려다보인다"],"stats":[{"l":"국가","v":"이탈리아"},{"l":"유형","v":"해변"},{"l":"추천시기","v":"5~9월"}],"ik":"punta molentis beach, sardinia turquoise sea, villasimius"},{"r":26,"n":"스위스 폰테 데이 살티","s":"","m":"","d":"중세 시대에 돌로 만든 이 이중 아치형 다리","dd":"티치노주 베르차스카 계곡의 라베르테초 마을에 있는 이중 아치형 돌다리로, 17세기에 세워진 것으로 전해진다. 다리 아래로 에메랄드빛 베르차스카강이 흐르고 물속 바위가 훤히 비칠 만큼 물이 맑다. 오래된 석조 다리와 투명한 강물이 어우러진 장면이 계곡의 대표 풍경이다.","tips":["여름에는 다리 주변이 수영과 다이빙 명소가 되지만 수온이 낮고 물살이 있어 주의가 필요하다","성수기 낮에는 붐비므로 이른 아침 방문이 촬영에 유리하다"],"stats":[{"l":"국가","v":"스위스"},{"l":"유형","v":"석조 다리·계곡"},{"l":"추천시기","v":"5~9월"}],"ik":"ponte dei salti, verzasca valley, stone arch bridge river"},{"r":27,"n":"마다가스카르 바오밥 나무","s":"","m":"","d":"800년 넘게 살기도 하는 바오밥 나무","dd":"마다가스카르 서부 모론다바 인근의 '바오밥 거리'는 비포장 도로 양쪽에 그랑디디에 바오밥 거목들이 줄지어 선 길이다. 이 바오밥은 높이 약 30m까지 자라는 마다가스카르 고유종으로, 수백 년을 사는 나무들이며 일부는 800년이 넘은 것으로 추정된다. 굵은 원통형 줄기와 우산처럼 퍼진 수관이 만드는 실루엣이 상징적이다.","tips":["일몰과 일출 시간대의 실루엣이 대표 촬영 포인트다","모론다바 시내에서 차로 접근하며 건기(4~11월)가 이동에 유리하다"],"stats":[{"l":"국가","v":"마다가스카르"},{"l":"유형","v":"바오밥 가로수길"},{"l":"추천시기","v":"4~11월(건기)"}],"ik":"avenue of baobabs, madagascar baobab sunset, morondava"},{"r":28,"n":"가나자와에 위치한 켄로쿠엔 정원","s":"","m":"","d":"일본 3대 정원\" 중 하나","dd":"이시카와현 가나자와에 있는 일본 3대 정원 중 하나로, 에도 시대 가가번 마에다 가문이 대를 이어 조성했다. 연못과 다리, 찻집, 노송이 어우러진 회유식 정원이며, 두 다리로 선 고토지 석등롱이 상징물이다. 겨울에는 눈 무게로부터 소나무를 지키는 밧줄 지지대 '유키츠리'가 설치되어 계절 풍물이 된다.","tips":["겨울 유키츠리와 설경, 봄 벚꽃 등 계절마다 다른 풍경을 볼 수 있다","개장 직후 이른 아침이 한적해 관람과 촬영에 좋다"],"stats":[{"l":"국가","v":"일본"},{"l":"유형","v":"일본 정원"}],"ik":"kenrokuen garden kanazawa, japanese garden lantern, yukitsuri pine"},{"r":29,"n":"프랑스 베르사유 정원","s":"","m":"","d":"관광객은 연간 6백만 명이 넘고","dd":"베르사유 궁전에 딸린 대규모 프랑스식 정원으로, 루이 14세 시대에 조경가 앙드레 르 노트르가 설계했다. 기하학적으로 다듬은 화단과 가로수길, 대운하, 수많은 분수와 조각이 약 800헥타르 부지에 배치되어 있다. 궁전과 함께 유네스코 세계유산으로 등재되어 있으며 연간 수백만 명이 찾는다.","tips":["봄~가을 주말에는 분수를 음악과 함께 가동하는 '그랑 조 뮈지코' 행사가 열리므로 일정을 확인하고 가면 좋다","부지가 넓어 정원 내 미니 열차나 자전거 대여를 활용할 만하다"],"stats":[{"l":"국가","v":"프랑스"},{"l":"유형","v":"궁전 정원"},{"l":"추천시기","v":"4~10월"}],"ik":"versailles gardens, french formal garden, palace fountains"},{"r":30,"n":"캐나다 부차트 가든","s":"","m":"","d":"매년 백만 명 이상의 관광객을 매료","dd":"브리티시컬럼비아주 밴쿠버섬 빅토리아 인근의 정원으로, 1904년 제니 부차트가 폐석회암 채석장 터를 가꾸기 시작하면서 만들어졌다. 채석장 바닥을 꽃밭으로 바꾼 선큰 가든이 대표 공간이며, 장미 정원과 일본 정원 등이 이어진다. 캐나다 국가사적지로 지정되어 있고 매년 백만 명 이상이 방문한다.","tips":["봄 튤립과 여름 화단이 절정이며, 여름 토요일 저녁에는 불꽃놀이가 열린다","빅토리아 시내에서 차나 버스로 약 30분 거리다"],"stats":[{"l":"국가","v":"캐나다"},{"l":"유형","v":"정원"},{"l":"추천시기","v":"봄~여름"}],"ik":"butchart gardens victoria, sunken garden, flower garden canada"},{"r":31,"n":"포르투갈 아제나스 두 마르","s":"","m":"","d":"해안선과 웅장한 전망 덕분에 유럽 내 여행지 중 인기","dd":"리스본 근교 신트라 지역의 해안 마을로, 대서양 절벽 가장자리에 하얀 집들이 층층이 얹혀 있다. 절벽과 파도, 마을이 한 화면에 담기는 해안선 전망 덕분에 유럽의 해안 마을 중에서도 사진 명소로 꼽힌다. 절벽 아래에는 바닷물을 끌어들인 천연 해수 풀이 있다.","tips":["마을 진입 도로변 전망 포인트에서 절벽과 마을 전경이 가장 잘 잡힌다","일몰 무렵 흰 벽이 노을빛으로 물드는 시간대가 촬영 적기다"],"stats":[{"l":"국가","v":"포르투갈"},{"l":"유형","v":"해안 절벽 마을"}],"ik":"azenhas do mar, portugal clifftop village, atlantic coast houses"},{"r":32,"n":"필리핀 카들라오섬","s":"","m":"","d":"자연경관과 섬의 서부에 펼쳐진 청록색 석호로 유명","dd":"엘니도 바쿠이트만에서 가장 큰 섬으로, 석회암 봉우리가 바다에서 수직으로 솟아 있다. 섬 서쪽에 펼쳐진 청록색 석호(카들라오 라군)와 백사장, 산호 지대가 주요 볼거리다. 엘니도 시내 해변에서 정면으로 보이는 섬이기도 하다.","tips":["아일랜드 호핑 투어나 카약으로 석호에 들어갈 수 있다","건기인 12~5월이 바다 상태가 안정적이다"],"stats":[{"l":"국가","v":"필리핀"},{"l":"유형","v":"섬·석호"},{"l":"추천시기","v":"12~5월"}],"ik":"cadlao island el nido, turquoise lagoon, palawan limestone island"},{"r":33,"n":"벨기에 다머","s":"","m":"","d":"책 애호가들에겐 지상낙원","dd":"브뤼헤 근교 운하변의 작은 중세 마을로, 헌책방과 책 관련 상점이 모여 있는 '책 마을'로 알려져 책 애호가들이 즐겨 찾는다. 고딕 양식 시청사와 성모교회 등 오래된 건물이 보존되어 있고, 브뤼헤에서 가로수 운하를 따라 이어지는 길 자체가 풍경 명소다.","tips":["브뤼헤에서 운하변 자전거길로 접근하는 경로가 인기다","정기적으로 책 시장이 열리므로 일정을 확인하면 좋다"],"stats":[{"l":"국가","v":"벨기에"},{"l":"유형","v":"운하 책 마을"}],"ik":"damme belgium canal, flemish village, bruges countryside"},{"r":34,"n":"노르웨이 크발비카 해변","s":"","m":"","d":"요한 해변에 가기 위해선 경치를 즐기며 가벼운 등산","dd":"로포텐 제도 모스케네스섬에 있는 해변으로, 도로가 닿지 않아 산길을 걸어야만 닿을 수 있다. 가파른 산봉우리 사이에 백사장과 청록색 바다가 숨어 있는 지형이며, 프레드방 마을에서 고개를 넘는 하이킹으로 접근한다. 인접한 뤼텐산 정상에서 해변을 내려다보는 조망이 유명하다.","tips":["프레드방에서 출발하는 트레일로 편도 1시간 안팎을 걷는다","뤼텐산(543m)까지 오르면 해변 전체를 내려다보는 촬영 포인트가 나온다","여름(6~8월)에는 백야로 늦은 시간에도 밝다"],"stats":[{"l":"국가","v":"노르웨이"},{"l":"유형","v":"해변(로포텐)"},{"l":"추천시기","v":"6~8월"}],"ik":"kvalvika beach lofoten, ryten viewpoint, norway hidden beach"},{"r":35,"n":"잉글랜드 도싯 맨 오워 코브","s":"","m":"","d":"옥빛의 바다는 낚시, 패들링, 다이빙, 수영 및 스노클링","dd":"잉글랜드 남부 도싯의 쥐라기 해안(유네스코 세계자연유산)에 있는 만으로, 유명한 바위 아치 더들 도어 바로 옆에 있다. 바위 능선이 방파제처럼 만을 감싸 물이 잔잔하고 옥빛을 띠며, 수영, 패들링, 스노클링, 낚시 등을 즐기기에 알맞다.","tips":["룰워스 코브 주차장에서 해안 언덕길을 걸어 접근하며, 해변까지는 계단을 내려간다","더들 도어와 붙어 있어 두 곳을 함께 둘러보는 동선이 일반적이다"],"stats":[{"l":"국가","v":"영국"},{"l":"유형","v":"해안 만(쥐라기 해안)"},{"l":"추천시기","v":"5~9월"}],"ik":"man o war cove dorset, jurassic coast, durdle door bay"},{"r":36,"n":"캐나다 크로우 헤드","s":"","m":"","d":"캐나다에서 가장 좋은 하이킹하기 좋은 장소","dd":"뉴펀들랜드 트윌링게이트 옆의 작은 곶 마을로, 1876년 세워진 롱 포인트 등대가 서 있다. 해발 300피트(약 90m)가 넘는 절벽 전망대에서 대서양이 펼쳐지며, 이 일대는 '아이스버그 앨리'로 불려 봄~초여름에 떠내려오는 빙산과 고래, 바닷새를 볼 수 있다. 해안 절벽을 따라 하이킹 트레일이 이어진다.","tips":["빙산은 대체로 4월~7월 초, 고래는 여름철에 관찰 확률이 높다","롱 포인트 등대 전망대가 대표 조망 포인트다"],"stats":[{"l":"국가","v":"캐나다"},{"l":"유형","v":"해안 곶·등대"},{"l":"추천시기","v":"5~7월"}],"ik":"long point lighthouse twillingate, newfoundland iceberg, atlantic cliffs"},{"r":37,"n":"일본 지조산","s":"","m":"","d":"곤돌라, 스키, 등반, 케이블카 등 다양한 방법","dd":"야마가타현 자오 연봉에 속한 산으로, 자오 로프웨이 두 구간을 갈아타고 산정역까지 오를 수 있다. 겨울에는 시베리아 한기가 만든 수빙 '주효'가 침엽수림을 뒤덮어 '스노 몬스터'라 불리는 설원 풍경이 펼쳐진다. 산정역 부근에는 높이 2.34m의 자오 지조존 석불이 있는데, 한겨울에는 눈에 파묻혀 머리만 보인다. 스키와 등산, 케이블카 관광 등 계절별로 다양한 방식으로 즐길 수 있다.","tips":["수빙은 12~3월에 볼 수 있으며 2월 중순~3월 중순이 절정이다","겨울 야간에는 수빙 라이트업 운행이 있어 색다른 풍경을 볼 수 있다"],"stats":[{"l":"국가","v":"일본"},{"l":"유형","v":"산·스키 리조트"},{"l":"추천시기","v":"12~3월(수빙)"}],"ik":"zao snow monsters, juhyo frost trees, zao ropeway winter"},{"r":38,"n":"미국 오리건주 노스 폭포","s":"","m":"","d":"수많은 절경과 다양한 등산로로도 유명","dd":"오리건주 실버 폴스 주립공원에 있는 폭포로, 절벽에서 약 41m 높이로 쏟아진다. 폭포 뒤편 암벽이 깊게 파여 있어 트레일이 폭포 물줄기 뒤쪽 공간을 통과하는 것이 특징이다. 공원의 대표 코스인 '트레일 오브 텐 폴스'를 걸으면 노스 폭포를 포함해 폭포 10개를 차례로 볼 수 있다.","tips":["폭포 뒤쪽 동굴형 공간에서 물줄기 너머를 바라보는 구도가 대표 촬영 포인트다","수량이 많은 봄이 폭포 감상에 가장 좋다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"폭포·주립공원"},{"l":"추천시기","v":"봄"}],"ik":"north falls oregon, silver falls state park, waterfall behind trail"},{"r":39,"n":"과테말라 페텐이차호","s":"","m":"","d":"마야 유적지를 방문하는 관광객들로 북적","dd":"과테말라 북부 페텐 저지대에 있는 큰 호수로, 마야 유적 티칼로 가는 관문 역할을 해 유적지를 찾는 여행자들로 붐빈다. 호수 남쪽의 섬 마을 플로레스는 다리로 뭍과 연결되어 있으며, 파스텔색 건물과 호숫가 골목이 어우러진 거점 마을이다. 호수 위 보트 투어와 일몰 감상이 대표적인 즐길 거리다.","tips":["플로레스 호숫가에서 보는 일몰이 유명하다","티칼 유적 새벽 투어의 출발 거점으로 삼기 좋다"],"stats":[{"l":"국가","v":"과테말라"},{"l":"유형","v":"호수"}],"ik":"lake peten itza, flores guatemala island town, tikal region"},{"r":40,"n":"독일 유이스트섬","s":"","m":"","d":"마법의 땅'을 의미하는 '터발란트'로 부릅","dd":"독일 북해의 동프리지아 제도에 속한 길이 약 17km의 가늘고 긴 섬으로, 자동차가 다니지 않아 마차와 자전거, 도보로만 이동한다. 현지에서는 저지 독일어로 '마법의 땅'을 뜻하는 '퇴버란트'라 부른다. 긴 백사장과 모래언덕, 유네스코 세계자연유산인 바덴해 갯벌이 섬을 둘러싼다.","tips":["본토 노르트다이히에서 페리로 들어가며, 조수에 따라 운항 시간이 달라지므로 사전 확인이 필요하다","섬 안 이동은 마차와 자전거가 기본이다"],"stats":[{"l":"국가","v":"독일"},{"l":"유형","v":"북해 갯벌 섬"},{"l":"추천시기","v":"5~9월"}],"ik":"juist island north sea, wadden sea beach, car free island"},{"r":41,"n":"체코 공화국 모라비아의 들판","s":"","m":"","d":"노란 유채밭은 풍경이 가장 아름다운 농경지","dd":"체코 남모라비아 키요프 일대의 구릉 농경지는 부드럽게 물결치는 밭이랑 풍경으로 '모라비아의 토스카나'라 불린다. 봄이면 노란 유채밭과 초록 밀밭이 언덕을 따라 색 띠를 이루어, 풍경 사진가들이 즐겨 찾는 농경지 풍경으로 꼽힌다. 계절과 빛에 따라 밭의 색과 곡선이 달라지는 것이 매력이다.","tips":["유채가 피는 4~5월과 초록 물결이 이는 초여름이 촬영 적기다","이른 아침과 해 질 녘의 사광이 밭이랑의 곡선을 잘 살려준다"],"stats":[{"l":"국가","v":"체코"},{"l":"유형","v":"전원 농경지"},{"l":"추천시기","v":"4~6월"}],"ik":"moravian fields, rolling hills czech, rapeseed field waves"},{"r":42,"n":"미국 사우스다코타주 키스톤","s":"","m":"","d":"낚시, 등산, 자전거 타기, 암벽 등반 등","dd":"블랙힐스 산지에 자리한 작은 마을로, 러시모어산 국립기념지의 관문으로 알려져 있다. 금광 개척 시대에 형성된 마을이며, 화강암 산지를 배경으로 등산, 암벽 등반, 낚시, 자전거 등 야외 활동의 거점 역할을 한다. 여름철에는 관광 열차와 기념품 상점이 늘어선 중심가가 활기를 띤다.","tips":["러시모어산 조각까지 차로 약 10분 거리라 숙박 거점으로 적합하다","5~9월이 성수기이며 여름 저녁에는 러시모어산 점등 행사가 열린다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"산악 마을"},{"l":"추천시기","v":"5~9월"}],"ik":"keystone south dakota, mount rushmore, black hills"},{"r":43,"n":"페루 살칸타이산","s":"","m":"","d":"잉카 트레일의 대안으로서 마추픽추에","dd":"쿠스코 인근 빌카밤바 산맥의 최고봉으로 해발 6,271m에 이르는 설산이다. 잉카 트레일의 대안으로 꼽히는 살칸타이 트렉의 중심 봉우리로, 4~5일간 걸어 마추픽추에 도착하는 코스가 유명하다. 트레킹 도중 에메랄드빛 우만타이 호수와 해발 약 4,600m의 살칸타이 고개에서 설산 파노라마를 볼 수 있다.","tips":["건기인 5~9월이 트레킹 적기다","고개 통과 전 쿠스코(3,400m)에서 고도 적응 기간을 두는 것이 안전하다"],"stats":[{"l":"국가","v":"페루"},{"l":"유형","v":"산·트레킹"},{"l":"추천시기","v":"5~9월"}],"ik":"salkantay mountain peru, andes snow peak, machu picchu trek"},{"r":44,"n":"미국 텍사스주 로스트 메이플스 주립공원","s":"","m":"","d":"자연경관은 숨 막히게 아름다운 단풍으로 관광객","dd":"샌안토니오 서쪽 사비날강 협곡에 있는 주립 자연보호구역으로, 텍사스에서 보기 드문 빅투스 단풍나무(bigtooth maple) 군락이 남아 있는 곳이다. 가을이면 협곡 전체가 붉고 노란 단풍으로 물들어 텍사스 최고의 단풍 명소로 꼽힌다. 석회암 절벽과 맑은 계곡을 따라 걷는 트레일이 정비되어 있다.","tips":["단풍 절정은 대개 10월 말~11월 중순이다","단풍철 주말은 입장 인원이 제한되므로 사전 예약이 필요하다","이스트 트레일이 대표 단풍 코스다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"주립 자연보호구역"},{"l":"추천시기","v":"10월말~11월중순"}],"ik":"lost maples texas, autumn maple foliage, canyon river"},{"r":45,"n":"미국 몬태나주 구스섬","s":"","m":"","d":"엽서, 여행 가이드, 달력, 책 및 기타 출판물에 등장","dd":"글레이셔 국립공원의 세인트메리 호수 한가운데 떠 있는 작은 바위섬(와일드구스 아일랜드)이다. 고잉투더선 도로의 전망대에서 빙하 봉우리들을 배경으로 내려다보는 구도가 미국에서 가장 많이 촬영되는 풍경 중 하나로, 엽서와 달력, 여행 가이드에 자주 등장한다. 영화 '샤이닝' 오프닝 장면의 배경으로도 알려져 있다.","tips":["도로변 와일드구스 아일랜드 전망대에서 촬영하며, 일출 직후 빛이 가장 좋다","고잉투더선 도로 전 구간은 보통 6월 말~9월에만 개통된다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"호수 섬"},{"l":"추천시기","v":"6~9월"}],"ik":"wild goose island, saint mary lake, glacier national park"},{"r":46,"n":"중국 우룽 카르스트 국립지질공원","s":"","m":"","d":"천생삼교라는 석회암 다리 3개가 있는 곳","dd":"충칭시 우룽구에 있는 카르스트 지형 지질공원으로, 유네스코 세계자연유산 '중국 남방 카르스트'에 포함되어 있다. 하이라이트는 천룡교·청룡교·흑룡교로 이루어진 천생삼교(天生三橋)로, 세계 최대급 천연 석회암 다리 3개가 협곡 위에 연이어 걸쳐 있다. 영화 '트랜스포머 4'의 촬영지로 알려지면서 더 유명해졌다.","tips":["협곡 바닥까지 엘리베이터로 내려가 다리 아래를 걷는 코스가 핵심이다","무더운 한여름보다 봄·가을이 걷기에 좋다"],"stats":[{"l":"국가","v":"중국"},{"l":"유형","v":"카르스트 지형"},{"l":"추천시기","v":"봄·가을"}],"ik":"wulong karst, three natural bridges china, limestone gorge"},{"r":47,"n":"독일 힌터제 호수","s":"","m":"","d":"숨막히게 아름다운 경치를 보기 위해","dd":"바이에른주 베르히테스가덴 알프스의 람자우 마을에 있는 작은 산중 호수다. 호크칼터 등 험준한 봉우리가 수면에 비치고, 호숫가에는 이끼 낀 바위와 침엽수가 뒤섞인 '차우버발트(마법의 숲)'가 이어져 19세기부터 화가들이 즐겨 그린 풍경으로 알려져 있다. 호수 둘레를 도는 완만한 산책로가 정비되어 있다.","tips":["바람이 잦아드는 이른 아침에 반영 사진을 찍기 좋다","호수 한 바퀴 산책은 1시간 안팎이면 충분하다"],"stats":[{"l":"국가","v":"독일"},{"l":"유형","v":"산중 호수"},{"l":"추천시기","v":"여름~가을"}],"ik":"hintersee ramsau, bavarian alps lake, zauberwald forest"},{"r":48,"n":"이탈리아 카프리치올리 해변","s":"","m":"","d":"모든 파란색 빛깔을 뿜어냅니다.","dd":"사르데냐섬 북동부 코스타 스메랄다에 있는 대표 해변으로, 매끈한 화강암 바위와 향나무 덤불 사이로 옅은 하늘색부터 짙은 청록까지 다양한 파란빛의 얕은 바다가 펼쳐진다. 곶을 사이에 두고 두 개의 만으로 나뉘어 있어 바람 방향에 따라 잔잔한 쪽을 골라 즐길 수 있다.","tips":["성수기인 7~8월보다 6월과 9월이 한산하다","얕고 투명한 바다라 스노클링에 적합하다"],"stats":[{"l":"국가","v":"이탈리아"},{"l":"유형","v":"해변"},{"l":"추천시기","v":"5~9월"}],"ik":"capriccioli beach sardinia, costa smeralda, turquoise sea granite"},{"r":49,"n":"스페인 칼라나클라라 해변","s":"","m":"","d":"모험을 사랑하는 사람들이 탐험할 수 있는 바위, 절벽, 삼림","dd":"마요르카섬 북동부 아르타 지역, 베틀렘 마을 인근에 있는 작은 자연 그대로의 후미다. 자갈과 바위로 이루어진 해안 뒤로 절벽과 숲이 이어져 개발되지 않은 원시적 풍경을 간직하고 있으며, 물이 매우 맑아 스노클링으로 물고기와 불가사리를 관찰하기 좋다. 매점·화장실 등 편의시설은 전혀 없다.","tips":["베틀렘 쪽에서 차를 세우고 오솔길을 10~15분 걸어 들어간다","그늘과 시설이 없으므로 물과 먹을거리를 챙겨야 한다"],"stats":[{"l":"국가","v":"스페인"},{"l":"유형","v":"자연 후미"},{"l":"추천시기","v":"6~9월"}],"ik":"cala na clara mallorca, rocky cove, crystal clear water"},{"r":50,"n":"미국 하와이주 하나","s":"","m":"","d":"서퍼들의 천국이라고 알려진 한적한 해변이 많이","dd":"마우이섬 동쪽 끝의 한적한 해안 마을로, 약 600개의 커브와 50여 개의 좁은 다리를 지나는 '하나로 가는 길(Road to Hana)' 드라이브의 종착지다. 검은 모래의 와이아나파나파 해변, 회색 모래의 하모아 해변 등 저마다 색이 다른 해변과 폭포, 열대 우림이 이어지며, 개발이 억제되어 옛 하와이의 분위기가 남아 있다.","tips":["드라이브는 이른 아침에 출발해 하루를 통째로 쓰는 일정이 좋다","와이아나파나파 주립공원은 사전 예약제로 운영된다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"해안 마을"}],"ik":"road to hana maui, black sand beach hawaii, tropical coast"},{"r":51,"n":"영국 웨어베스 해변","s":"","m":"","d":"호이 언덕의 멋진 풍경을 볼 수 있습니다.","dd":"스코틀랜드 오크니 제도의 항구 도시 스트롬니스 인근에 있는 해변이다. 호이 사운드 해협 건너로 오크니에서 가장 높은 호이섬의 언덕들이 정면으로 보이는 전망이 특징이며, 해협으로 지는 일몰 풍경이 아름답기로 알려져 있다. 파도가 좋을 때는 서퍼들도 찾는다.","tips":["스트롬니스에서 해안 산책로를 따라 걸어서 접근할 수 있다","일몰 시간대에 호이섬 실루엣을 배경으로 촬영하기 좋다"],"stats":[{"l":"국가","v":"영국"},{"l":"유형","v":"해변"},{"l":"추천시기","v":"여름"}],"ik":"warebeth beach orkney, hoy hills scotland, sunset coast"},{"r":52,"n":"프랑스 뽀흑뜨 다발","s":"","m":"","d":"사진가와 자연을 사랑하는 사람들에게 인기","dd":"노르망디 에트르타 해안에 있는 새하얀 백악 절벽의 천연 아치(포르트 다발)로, 알바트르 해안을 대표하는 풍경이다. 아치 옆에 솟은 약 50m 높이의 뾰족한 바위 '레귀유(바늘 바위)'와 어우러진 모습이 유명하며, 모네를 비롯한 인상파 화가들이 반복해서 그린 소재로 사진가와 자연 애호가들에게 꾸준히 사랑받는다.","tips":["절벽 위 산책로와 자갈 해변 양쪽에서 서로 다른 구도를 잡을 수 있다","썰물 시간에 맞추면 해변에서 아치에 더 가까이 접근할 수 있다"],"stats":[{"l":"국가","v":"프랑스"},{"l":"유형","v":"해안 절벽·아치"},{"l":"추천시기","v":"봄~가을"}],"ik":"etretat cliffs, porte d'aval arch, normandy chalk coast"},{"r":53,"n":"인도네시아 왈라키리 해변","s":"","m":"","d":"맹그로브 나무의 실루엣이 전 세계의 사진사","dd":"숨바섬 동부, 와잉아푸 인근에 있는 해변으로 얕은 갯벌 위에 서 있는 맹그로브 나무들로 유명하다. 가지가 춤추듯 뻗은 나무들이 '춤추는 맹그로브'라 불리며, 해질 무렵 붉은 하늘을 배경으로 한 실루엣이 전 세계 사진가들을 불러 모은다. 수심이 얕고 물이 잔잔해 걸어서 나무 가까이 다가갈 수 있다.","tips":["일몰 1시간 전에 도착해 물빠짐과 빛을 함께 노리는 것이 좋다","건기인 5~10월이 방문 적기다"],"stats":[{"l":"국가","v":"인도네시아"},{"l":"유형","v":"해변"},{"l":"추천시기","v":"5~10월"}],"ik":"walakiri beach sumba, dancing mangrove trees, sunset silhouette"},{"r":54,"n":"오스트레일리아 바모 해변","s":"","m":"","d":"해변은 서핑을 즐기기에 좋은 곳","dd":"뉴사우스웨일스주 남해안 키아마의 봄보(Bombo) 해변으로, 약 1.2km의 백사장에 꾸준한 파도가 들어와 서핑 해변으로 잘 알려져 있다. 곶 너머의 옛 채석장 터에는 육각형 현무암 기둥이 늘어선 '본야드' 해안이 있어 사진가들이 즐겨 찾는다. 해변 바로 옆에 기차역이 있어 시드니에서 대중교통으로 접근할 수 있다.","tips":["서핑 파도는 겨울철이 가장 안정적이다","이안류가 강한 서핑 위주 해변이므로 수영은 감시 구역에서만 하는 것이 안전하다","본야드의 현무암 기둥은 일출 촬영 명소다"],"stats":[{"l":"국가","v":"오스트레일리아"},{"l":"유형","v":"서핑 해변"}],"ik":"bombo beach kiama, basalt columns coast, australia surf"},{"r":55,"n":"말라위 멈보 섬","s":"","m":"","d":"사람이 살지 않아 원시의 모습이 그대로 남아","dd":"유네스코 세계유산인 말라위호 국립공원 안, 케이프 매클리어 앞바다에 떠 있는 무인도다. 사람이 산 적이 없어 원시림과 화강암 해안이 그대로 남아 있으며, 소규모 친환경 캠프 하나만 운영된다. 투명한 호수에서 형형색색의 시클리드 열대어를 보며 스노클링과 카약을 즐길 수 있다.","tips":["케이프 매클리어에서 카약이나 보트로 들어간다","건기인 5~10월이 물이 맑고 날씨가 안정적이다"],"stats":[{"l":"국가","v":"말라위"},{"l":"유형","v":"호수 무인도"},{"l":"추천시기","v":"5~10월"}],"ik":"mumbo island lake malawi, uninhabited island, kayak clear water"},{"r":56,"n":"브라질 프라이아 다 포르탈레자","s":"","m":"","d":"이 해변은 평화로운 분위기와 깨끗한 바다","dd":"상파울루주 우바투바 남부에 있는 해변으로, 파도가 거의 없는 잔잔하고 깨끗한 바다와 평화로운 분위기가 특징이다. 해변 끝자락에는 바위로 둘러싸인 천연 수영장이 형성되어 있고, 인근 해변 7곳을 잇는 '7개 해변 트레일'의 출발점이기도 하다. 수심이 완만해 아이를 동반한 가족 여행객에게 적합하다.","tips":["천연 수영장과 트레일은 해변 오른쪽 끝에서 시작된다","브라질 여름(12~3월)이 해수욕 적기이며 연말 성수기에는 붐빈다"],"stats":[{"l":"국가","v":"브라질"},{"l":"유형","v":"해변"},{"l":"추천시기","v":"12~3월"}],"ik":"praia da fortaleza ubatuba, calm bay brazil, natural pool beach"},{"r":57,"n":"오스트레일리아 베이 오브 파이어즈","s":"","m":"","d":"주황색 바위와 깨끗한 백사장, 터키석처럼 빛나는 바다가 특징","dd":"태즈메이니아 북동 해안, 비날롱 베이에서 에디스톤 포인트까지 약 50km에 걸친 해안이다. 주황색 지의류가 뒤덮은 화강암 바위, 눈부신 백사장, 터키석빛 바다가 대비를 이루는 풍경으로 유명하다. 이름은 1773년 영국 항해사 토바이어스 퍼노가 해안에서 원주민들의 모닥불을 보고 붙인 것이다.","tips":["비날롱 베이와 더 가든스 구간이 접근하기 쉬운 대표 포인트다","주황색 바위는 이른 아침이나 늦은 오후의 빛에서 색이 가장 살아난다"],"stats":[{"l":"국가","v":"오스트레일리아"},{"l":"유형","v":"해안"},{"l":"추천시기","v":"12~4월"}],"ik":"bay of fires tasmania, orange lichen granite, white sand turquoise"},{"r":58,"n":"버뮤다 호스슈 베이","s":"","m":"","d":"가족들이 많이 찾는 얕은 수영장입니다.","dd":"버뮤다 사우샘프턴 패리시에 있는 말굽 모양의 만으로, 버뮤다에서 가장 유명한 해변이다. 붉은 유공충 껍질이 섞여 분홍빛이 도는 모래가 특징이며, 해변 한쪽의 바위로 둘러싸인 얕은 후미(호스슈 베이 코브)는 아이들이 놀기 좋아 가족 단위 방문객이 많다. 성수기에는 안전요원이 상주한다.","tips":["5~9월이 해수욕 적기이며 크루즈 기항일에는 매우 붐빈다","아이와 함께라면 본 해변 서쪽의 얕은 코브를 이용하면 좋다"],"stats":[{"l":"국가","v":"버뮤다(영국령)"},{"l":"유형","v":"해변"},{"l":"추천시기","v":"5~9월"}],"ik":"horseshoe bay bermuda, pink sand beach, turquoise cove"},{"r":59,"n":"인도 네일섬","s":"","m":"","d":"호라 네추럴 브릿지(사진)를 비롯하여 화려한 볼거리도 많이","dd":"인도 안다만 제도의 작은 섬으로 공식 명칭은 샤히드 드위프다. 산호 바다가 파도에 깎아 만든 천연 바위 다리 '하우라 브리지(내추럴 브리지)'가 대표 볼거리이며, 바라트푸르·락스만푸르 등 한적한 해변에서 스노클링과 유리배 투어로 산호초를 볼 수 있다. 논밭이 펼쳐진 소박한 섬 풍경 덕에 '안다만의 채소밭'으로도 불린다.","tips":["내추럴 브리지는 썰물 때만 걸어서 접근할 수 있다","포트블레어에서 페리로 약 1~2시간 걸린다","건기인 11~4월이 방문 적기다"],"stats":[{"l":"국가","v":"인도"},{"l":"유형","v":"섬"},{"l":"추천시기","v":"11~4월"}],"ik":"neil island andaman, natural rock bridge, coral shallow sea"},{"r":60,"n":"이스라엘 사해","s":"","m":"","d":"염분 농도가 대단히 높아 호숫물에 쉽게 떠 있을 수 있는 것이","dd":"이스라엘과 요르단 국경에 걸친 염호로, 호숫가가 해수면보다 약 430m 낮아 지표상 가장 낮은 땅이다. 염분 농도가 약 34%로 일반 바다의 10배 가까이 되어 몸이 저절로 떠오르며, 미네랄이 풍부한 진흙은 피부 관리용으로 이용된다. 유입량 감소로 수위가 매년 약 1m씩 낮아지고 있다.","tips":["한여름은 매우 더우므로 봄·가을 방문이 쾌적하다","고농도 염수이므로 눈에 물이 들어가지 않게 하고 부유 시간은 짧게 끊는 것이 좋다","에인 보케크 등 공공 해변에 샤워 시설이 갖춰져 있다"],"stats":[{"l":"국가","v":"이스라엘·요르단"},{"l":"유형","v":"염호"},{"l":"추천시기","v":"봄·가을"}],"ik":"dead sea floating, salt formations, lowest point earth"},{"r":61,"n":"몽골 홉스골호수","s":"","m":"","d":"맑은 물과 양떼구름","dd":"몽골 최북단 러시아 국경 가까이에 있는 담수호로, '몽골의 푸른 진주'라 불린다. 수심이 최대 약 262m에 이르는 몽골 최대의 담수호이며, 몽골 담수의 약 70%를 담고 있을 만큼 물이 많고 맑다. 낙엽송 숲과 초원에 둘러싸인 호숫가에서 유목민 게르 체험과 승마를 즐길 수 있다.","tips":["여행 적기는 6~9월이며 한여름에도 밤에는 쌀쌀하다","겨울에는 호수가 통째로 얼어 3월 초 얼음 축제가 열린다"],"stats":[{"l":"국가","v":"몽골"},{"l":"유형","v":"담수호"},{"l":"추천시기","v":"6~9월"}],"ik":"lake khovsgol mongolia, blue lake steppe, ger camp shore"},{"r":62,"n":"베트남 반지옥폭포","s":"","m":"","d":"","dd":"베트남 북부 까오방성, 중국과의 국경을 이루는 꾸이선강에 걸쳐 있는 반죽(Bản Giốc) 폭포다. 높이 약 30m, 너비 약 300m에 이르는 아시아 최대급 국경 폭포로, 석회암 카르스트 봉우리와 논이 어우러진 배경 속에 여러 단으로 물이 쏟아진다. 대나무 뗏목을 타고 폭포 가까이 다가가는 투어가 운영된다.","tips":["우기 직후인 9~10월에 수량이 풍부하고 주변 논이 황금빛으로 물든다","하노이에서 까오방까지 이동 후 폭포까지 다시 차로 이동하는 1박 이상 일정이 일반적이다"],"stats":[{"l":"국가","v":"베트남"},{"l":"유형","v":"폭포"},{"l":"추천시기","v":"9~10월"}],"ik":"ban gioc waterfall, vietnam china border falls, karst river"},{"r":63,"n":"일본 야마나카호","s":"","m":"","d":"멋진 전망과 온천탕 외에도 낚시, 수상 서핑","dd":"후지산 기슭 후지5호 가운데 가장 크고 가장 높은 곳(해발 약 980m)에 있는 호수다. 후지산 전망과 호반 온천 시설 외에도 낚시, 수상스키, 카누 등 수상 레저가 활발하며, 겨울에는 백조가 찾아와 '백조의 호수'라는 별칭이 있다. 가을부터 겨울 사이에는 후지산 정상에 해가 걸리는 '다이아몬드 후지'를 볼 수 있다.","tips":["다이아몬드 후지는 대체로 10월 중순~2월 말 사이에 관측된다","공기가 맑은 겨울 아침이 후지산 전망이 가장 또렷하다"],"stats":[{"l":"국가","v":"일본"},{"l":"유형","v":"호수"},{"l":"추천시기","v":"10~2월(후지 전망)"}],"ik":"lake yamanaka fuji, mount fuji reflection, swan lake japan"},{"r":64,"n":"슬로베니아 블레드 호수","s":"","m":"","d":"호수 한 가운데에는 아름다운 교회가 있는 작은 섬","dd":"율리안 알프스 기슭의 빙하호로, 호수 한가운데 떠 있는 블레드섬과 그 위의 성모승천 성당이 상징적인 풍경을 이룬다. 전통 나룻배 '플레트나'를 타고 섬에 들어가 99개의 계단을 올라 '소원의 종'을 울리는 풍습이 있으며, 호수 위 약 130m 절벽에는 중세 블레드성이 서 있다. 크림케이크 '크렘슈니타'도 이 지역 명물이다.","tips":["오이스트리차 전망대에 오르면 섬과 호수 전체를 내려다보는 대표 구도를 얻을 수 있다","호수 둘레 산책로(약 6km)는 2시간 안팎이면 완주한다"],"stats":[{"l":"국가","v":"슬로베니아"},{"l":"유형","v":"빙하호"},{"l":"추천시기","v":"5~9월"}],"ik":"lake bled island church, slovenia alps lake, bled castle cliff"},{"r":65,"n":"독일 바이에른 쾨니히 호수","s":"","m":"","d":"바이에른주 전역에서 가장 아름다운 곳","dd":"베르히테스가덴 국립공원 안에 피오르처럼 좁고 길게 뻗은 빙하호로, 독일에서 가장 깨끗한 호수 중 하나로 꼽힌다. 1909년부터 전기 유람선만 운항해 정적이 유지되며, 배가 절벽 앞에 멈추면 트럼펫 소리가 벽에 메아리치는 명물 연출이 있다. 호수 중간의 장크트 바르톨로메 순례 성당과 붉은 양파형 지붕이 대표 풍경이다.","tips":["유람선 종점 잘레트에서 20분 걸으면 더 깊숙한 오버제 호수가 나온다","성수기 오전에는 선착장 대기가 길어 이른 배를 타는 것이 좋다"],"stats":[{"l":"국가","v":"독일"},{"l":"유형","v":"빙하호"},{"l":"추천시기","v":"5~10월"}],"ik":"konigssee bavaria, st bartholoma church, fjord like lake"},{"r":66,"n":"이탈리아 브라이에스 호수","s":"","m":"","d":"사우스 티롤에서 가장 아름다운 알프스 호수","dd":"돌로미티 산군의 해발 1,496m에 있는 알프스 호수로 '돌로미티의 진주'라 불린다. 크로다 델 베코 봉우리를 배경으로 에메랄드빛 수면 위에 나무 보트들이 떠 있는 풍경이 남티롤을 대표하는 이미지가 되었다. 호수 둘레를 도는 산책로와 전통 목조 보트하우스가 잘 보존되어 있다.","tips":["나무 노 젓는 보트 대여가 대표 체험이다","여름 성수기 낮 시간에는 진입 도로가 통제되므로 사전 예약이나 이른 아침 방문이 필요하다"],"stats":[{"l":"국가","v":"이탈리아"},{"l":"유형","v":"알프스 호수"},{"l":"추천시기","v":"6~9월"}],"ik":"lago di braies, dolomites lake boats, pragser wildsee"},{"r":67,"n":"오스트리아 포어데러 호수","s":"","m":"","d":"바람 없는 날 호수 수면에 또렷이 비치는 빙하는","dd":"잘츠카머구트 고자우 계곡에 있는 포어더러 고자우제 호수로, 바람 없는 날이면 다흐슈타인 산군과 빙하가 수면에 거울처럼 또렷이 비친다. 호수 둘레를 도는 평탄한 산책로가 있어 가족 단위로도 걷기 좋고, 인근 케이블카를 타면 고자우캄 암봉 전망대에 오를 수 있다.","tips":["반영 사진은 바람이 잔잔한 이른 아침이 최적이다","호수 한 바퀴는 약 1시간이면 돌 수 있다"],"stats":[{"l":"국가","v":"오스트리아"},{"l":"유형","v":"알프스 호수"},{"l":"추천시기","v":"여름~초가을"}],"ik":"gosausee dachstein reflection, austria alpine lake, mirror water mountains"},{"r":68,"n":"프랑스 쉐세리호","s":"","m":"","d":"몽블랑 산군이 수정처럼 맑은 물에 비치면서","dd":"샤모니 계곡 위 에귀유 루즈 자연보호구역에 있는 산정 호수군(락 데 셰세리)이다. 수정처럼 맑은 물에 몽블랑 산군과 에귀유 베르트가 비치는 반영으로 알프스 사진가들에게 이름난 포인트이며, 유명한 락 블랑 호수로 가는 트레킹 길목에 있다. 가을에는 주변 낙엽송이 황금빛으로 물든다.","tips":["플레제르 케이블카를 타고 올라 1시간 30분 안팎 걸으면 도착한다","산행 적기는 눈이 녹는 6월 말~9월이다"],"stats":[{"l":"국가","v":"프랑스"},{"l":"유형","v":"산정 호수"},{"l":"추천시기","v":"6월말~9월"}],"ik":"lacs des cheserys, mont blanc reflection, chamonix alpine lake"},{"r":69,"n":"우간다 니아비케레호","s":"","m":"","d":"호수를 중심으로 정글 사파리를 즐기기","dd":"우간다 서부 포트포털 인근, 키발레 국립공원으로 가는 길목에 있는 화산 분화구 호수다. 이름은 현지어로 '개구리의 호수'라는 뜻이며, 약 8천~1만 년 전 화산 폭발로 형성된 60여 개 분화구 호수군의 하나다. 호수 주변에서 원숭이와 다양한 새를 관찰할 수 있고, 침팬지 트레킹으로 유명한 키발레 숲 탐방의 거점으로 이용된다.","tips":["건기인 12~2월과 6~8월이 사파리·트레킹 적기다","호숫가 롯지에 머물며 키발레 침팬지 트레킹과 묶어 일정을 짜는 것이 일반적이다"],"stats":[{"l":"국가","v":"우간다"},{"l":"유형","v":"분화구 호수"},{"l":"추천시기","v":"12~2월·6~8월"}],"ik":"crater lake uganda, kibale forest, africa jungle lake"},{"r":70,"n":"과테말라 아티틀란호","s":"","m":"","d":"아티틀란, 똘리만, 산페드로라는 화산 3개가","dd":"과테말라 고원 해발 약 1,560m에 있는 칼데라 호수로, 거대한 화산 분화로 생긴 함몰지에 물이 고여 형성되었다. 호수 남쪽에 아티틀란·톨리만·산페드로 세 화산이 나란히 솟아 있으며, 중앙아메리카에서 가장 깊은 호수(최대 약 340m)로 알려져 있다. 호반에는 마야 원주민 마을들이 흩어져 있어 보트로 오가며 둘러볼 수 있다.","tips":["관문 도시 파나하첼에서 보트로 산후안 라라구나 등 호반 마을을 여행한다","건기인 11~4월, 특히 바람이 잔잔한 오전이 호수가 아름답다"],"stats":[{"l":"국가","v":"과테말라"},{"l":"유형","v":"칼데라 호수"},{"l":"추천시기","v":"11~4월"}],"ik":"lake atitlan volcanoes, guatemala highland lake, mayan village shore"},{"r":71,"n":"일본 비와호","s":"","m":"","d":"물새 구경뿐만 아니라 카누와 플라이보드","dd":"시가현에 있는 일본 최대의 호수로 면적이 약 670km²에 이르며, 400만 년 이상의 역사를 지닌 세계적으로 오래된 고대호로 꼽힌다. 겨울 철새 등 물새 관찰뿐 아니라 카누, 수상 레저를 즐길 수 있고, 호수 안에 붉은 도리이가 서 있는 시라히게 신사가 대표 촬영 포인트다. 호수를 한 바퀴 도는 약 200km의 자전거 코스 '비와이치'도 인기다.","tips":["시라히게 신사의 수중 도리이는 일출 시간대가 가장 아름답다","교토에서 전철로 쉽게 접근할 수 있어 당일 여행도 가능하다"],"stats":[{"l":"국가","v":"일본"},{"l":"유형","v":"호수"},{"l":"추천시기","v":"봄·가을"}],"ik":"lake biwa japan, torii gate water, shiga lakeside"},{"r":72,"n":"이탈리아 롬바르디아 라고 디 피안 팔루","s":"","m":"","d":"낚시와 스키 등 굉장히 다양한 활동","dd":"롬바르디아주 손드리오현 발말렌코 계곡, 해발 약 2,000m 분지에 있는 알프스 호수(라고 팔루)다. 여름에는 침엽수림에 둘러싸인 맑은 호수에서 허가증을 받아 낚시를 즐기고 주변 트레일을 걷는 사람들이 찾으며, 겨울에는 60km 이상의 슬로프를 갖춘 알페 팔루 스키장의 중심이 된다. 대형 케이블카로 접근할 수 있어 사계절 활동지로 인기가 있다.","tips":["여름에는 산주세페 마을에서 1시간 안팎 걸어 올라갈 수 있다","겨울 크로스컨트리와 스노슈잉 코스도 호수 주변에 정비되어 있다"],"stats":[{"l":"국가","v":"이탈리아"},{"l":"유형","v":"알프스 호수"},{"l":"추천시기","v":"여름·겨울"}],"ik":"lago palu valmalenco, italian alps lake, mountain ski lake"},{"r":73,"n":"미국 오리건주 크레이터호","s":"","m":"","d":"7,000여 년 전 격렬한 분화 활동으로 화산이 무너지면서","dd":"약 7,700년 전 마자마 화산이 대분화 후 무너져 내리며 생긴 칼데라에 눈과 비가 고여 형성된 호수다. 수심 약 594m로 미국에서 가장 깊고, 유입 하천이 없어 세계에서 손꼽히게 맑고 짙푸른 물빛을 띤다. 호수 안에는 분화구가 남은 위저드 아일랜드가 솟아 있으며, 칼데라 가장자리를 도는 림 드라이브에서 전망을 즐길 수 있다.","tips":["림 드라이브 전 구간은 보통 7~9월에만 개통된다","겨울에는 적설량이 많아 도로 대부분이 폐쇄되지만 설경 전망은 가능하다"],"stats":[{"l":"국가","v":"미국"},{"l":"유형","v":"칼데라 호수"},{"l":"추천시기","v":"7~9월"}],"ik":"crater lake oregon, wizard island, deep blue caldera"},{"r":74,"n":"일본 후지산 가와구치 호수","s":"","m":"","d":"북쪽 호숫가에 도착하면 후지산의 가장 아름다운 절경","dd":"후지5호 가운데 교통이 가장 편리해 후지산 전망 여행의 중심이 되는 호수다. 북쪽 호숫가의 오이시 공원 일대에서는 계절 꽃밭 너머로 후지산을 정면에 두는 대표 구도를 얻을 수 있고, 잔잔한 날에는 수면에 비치는 '거꾸로 후지'도 볼 수 있다. 11월에는 호반의 단풍 터널 '모미지 회랑'에서 단풍 축제가 열린다.","tips":["후지산은 구름이 끼기 전인 이른 아침에 보일 확률이 높다","4월 벚꽃, 6~7월 라벤더, 11월 단풍이 촬영 적기다"],"stats":[{"l":"국가","v":"일본"},{"l":"유형","v":"호수"},{"l":"추천시기","v":"4월·11월"}],"ik":"lake kawaguchiko fuji, mount fuji autumn, fuji reflection lake"},{"r":75,"n":"호주 뉴사우스웨일즈주 일라와라 호수","s":"","m":"","d":"지리적 위치 덕분에 신선한 바닷물이 흘러들어오며","dd":"울런공 남쪽에 있는 큰 해안 석호로, 좁은 수로를 통해 태즈먼해와 연결되어 바닷물이 드나든다. 잔잔하고 얕은 수면 덕분에 세일링, 카약, 패들보드 등 수상 활동과 낚시·새우잡이가 활발하며, 호숫가를 따라 산책로와 피크닉 공원이 정비되어 있다. 물새가 많아 탐조지로도 알려져 있다.","tips":["바람이 안정적인 오전이 카약·패들보드에 좋다","호수 서쪽에서 일라와라 절벽을 배경으로 한 일몰을 볼 수 있다"],"stats":[{"l":"국가","v":"오스트레일리아"},{"l":"유형","v":"해안 석호"}],"ik":"lake illawarra australia, coastal lagoon sunset, kayak calm water"},{"r":76,"n":"캐나다 앨버타 모레인호","s":"","m":"","d":"물속에 있는 암석 입자가 빛을 반사하며 내는 짙푸른 쪽빛이 멋집","dd":"밴프 국립공원의 '텐 피크스 계곡'에 있는 해발 약 1,884m의 빙하호다. 빙하가 갈아낸 미세한 암석 가루가 물속에서 빛을 산란시켜 내는 청록빛이 특징이며, 열 개의 봉우리를 배경으로 한 풍경은 과거 캐나다 20달러 지폐에 실렸을 만큼 상징적이다. 호숫가 바위 언덕 '록파일'에 오르면 대표 전망을 볼 수 있다.","tips":["2023년부터 개인 차량 진입이 금지되어 파크스캐나다 셔틀이나 버스로만 접근한다","빙하 융해수가 차는 6월 중순 이후에 물빛이 가장 짙어진다","개방 기간은 대략 6~10월 초다"],"stats":[{"l":"국가","v":"캐나다"},{"l":"유형","v":"빙하호"},{"l":"추천시기","v":"6~9월"}],"ik":"moraine lake banff, valley of ten peaks, turquoise glacial lake"},{"r":77,"n":"캐나다 앨버타 아브라함호","s":"","m":"","d":"메탄 거품이 얼어붙는 기이한 현상이","dd":"1972년 빅혼 댐 건설로 노스서스캐처원강에 생긴 인공 호수로, 앨버타에서 가장 큰 저수지 중 하나다. 겨울이면 호수 바닥에서 올라온 메탄 가스 거품이 얼음 속에 층층이 갇히는 기이한 '아이스 버블' 현상이 나타나 전 세계 사진가들이 몰려든다. 로키 산맥 동쪽 기슭의 데이비드 톰프슨 컨트리 도로변에 있다.","tips":["아이스 버블은 눈이 적고 얼음이 투명한 1~2월이 절정이다","프리처스 포인트가 대표 촬영 포인트다","강풍이 잦고 얼음이 미끄러우므로 아이젠 착용이 안전하다"],"stats":[{"l":"국가","v":"캐나다"},{"l":"유형","v":"인공 호수"},{"l":"추천시기","v":"1~2월"}],"ik":"abraham lake ice bubbles, frozen methane lake, alberta winter"},{"r":78,"n":"오스트레일리아 타즈매니아 도브호","s":"","m":"","d":"6킬로미터(3.7마일) 길이의 산책로는 태즈메이니아에서 가장 멋진 산책로","dd":"크레이들마운틴-레이크세인트클레어 국립공원(태즈메이니아 원시 자연 세계유산 지역)에 있는 빙하호다. 크레이들마운틴의 톱니 능선을 정면에 둔 약 6km의 호수 순환 산책로는 태즈메이니아를 대표하는 걷기 코스로 꼽히며, 1940년대에 지어진 호숫가 보트 창고가 명물 촬영 포인트다. 도중에 이끼 낀 온대 우림 '볼룸 포레스트'를 지난다.","tips":["순환 코스는 평탄해 2시간 안팎이면 완주한다","공원 입구 방문자센터에서 셔틀버스로 호수까지 이동한다","날씨가 변덕스러우므로 여름에도 방풍·방수 의류가 필요하다"],"stats":[{"l":"국가","v":"오스트레일리아"},{"l":"유형","v":"빙하호"},{"l":"추천시기","v":"12~4월"}],"ik":"dove lake cradle mountain, boat shed tasmania, glacial lake circuit"},{"r":79,"n":"잉글랜드 컴브리아주 레이크 디스트릭트","s":"","m":"","d":"1,500만 명의 방문객이 다녀가는 관광 명소","dd":"잉글랜드 북서부 컴브리아주에 펼쳐진 잉글랜드 최대 국립공원으로, 2017년 유네스코 세계유산에 등재되었다. 빙하가 깎아낸 U자곡과 윈더미어(잉글랜드 최대 자연호), 잉글랜드 최고봉 스카펠파이크(978m) 등 호수와 산이 어우러진 풍경으로 연간 1,500만 명 이상이 찾는다. 시인 워즈워스와 동화작가 베아트릭스 포터가 사랑한 고장으로도 유명하다.","tips":["윈더미어·앰블사이드·케즈윅이 대표 거점 마을이다","성수기 여름보다 늦봄과 초가을이 한산하고 걷기 좋다"],"stats":[{"l":"국가","v":"영국"},{"l":"유형","v":"국립공원"},{"l":"추천시기","v":"5~9월"}],"ik":"lake district england, windermere hills, cumbria countryside"},{"r":80,"n":"프랑스 오트사부아주 안시호","s":"","m":"","d":"이 호수의 물은 놀라울 정도로 맑고 투명","dd":"알프스 기슭에 있는 호수로, 1960년대부터 이어진 엄격한 환경 규제 덕분에 유럽에서 가장 깨끗한 호수 중 하나로 꼽힐 만큼 물이 맑고 투명하다. 운하가 흐르는 구시가 안시는 '알프스의 베네치아'라 불리며, 호수 둘레 자전거길과 수영, 패들보드, 인근 고개에서의 패러글라이딩까지 즐길 거리가 다양하다.","tips":["호수 동쪽 탈루아르 방면에서 산과 호수가 어우러진 전망이 좋다","6~9월이 수영과 수상 활동 적기다","호반 자전거길은 평탄해 반나절 코스로 알맞다"],"stats":[{"l":"국가","v":"프랑스"},{"l":"유형","v":"호수"},{"l":"추천시기","v":"6~9월"}],"ik":"lake annecy france, clear alpine lake, annecy old town canal"},{"r":81,"n":"스코틀랜드 라녹 무어 바호","s":"","m":"","d":"특히 독특한 개미가 많이 발견된다고","dd":"스코틀랜드 하일랜드의 광활한 습원 라녹 무어 한가운데 있는 호수(로흐 바)다. 글렌코로 이어지는 A82 도로변에 있어 황량한 습원과 물웅덩이, 눈 덮인 산이 어우러진 풍경을 담으려는 사진가들이 즐겨 찾는다. 라녹 무어 일대는 넓은 담요이탄 습지로 희귀 동식물이 서식해 과학적 특별관심지역으로 보호된다.","tips":["A82 도로변에서 바로 촬영할 수 있어 접근이 쉽다","안개 낀 새벽이나 늦여름 히스가 붉게 필 때 분위기가 좋다","날씨 변화가 심하므로 방수 복장이 필요하다"],"stats":[{"l":"국가","v":"영국"},{"l":"유형","v":"호수·습원"},{"l":"추천시기","v":"늦여름~가을"}],"ik":"rannoch moor loch ba, scottish highlands moor, moody mountain lake"},{"r":82,"n":"독일 바이에른 게롤시호","s":"","m":"","d":"하이킹 코스와 아웃도어 여행지로도 인기","dd":"가르미슈파르텐키르헨과 미텐발트 사이 크륀 마을 인근에 있는 작은 습원 호수(게롤트제, 공식명 바겐브뤼흐제)다. 호숫가의 오래된 건초 헛간과 그 뒤로 솟은 카르벤델 산맥이 어우러진 구도가 바이에른 알프스를 대표하는 사진 명소로 꼽힌다. 주변으로 완만한 하이킹 코스가 이어져 아웃도어 여행지로도 인기가 있다.","tips":["새벽 물안개와 일출 시간대가 촬영 적기다","게롤트 기차역에서 걸어서 접근할 수 있다"],"stats":[{"l":"국가","v":"독일"},{"l":"유형","v":"습원 호수"},{"l":"추천시기","v":"여름~가을"}],"ik":"geroldsee bavaria, karwendel mountains hut, alpine meadow lake"}]}]}};

let currentCollection = null;
let collFilter = "";

function openCollection(key) { collFilter = ""; navigate("collection", { id: key }); }

function collListHtml(key) {
  const col = COLLECTIONS[key];
  const f = collFilter.toLowerCase();
  return col.groups.map((g, gi) => {
    const rows = g.items
      .map((it, ii) => ({ it, ii }))
      .filter(x => !f || (x.it.n + " " + (x.it.s || "") + " " + (x.it.d || "") + " " + (x.it.m || "")).toLowerCase().includes(f))
      .map(x => {
        const it = x.it;
        const sub = [it.s, it.d].filter(Boolean).join(" · ");
        return `<div class="coll-row tappable" onclick="collTap('${key}',${gi},${x.ii})">
          <span class="coll-rank">${it.r != null ? it.r : ""}</span>
          <div class="coll-mid">
            <div class="coll-name">${it.n}${it.m ? `<span class="coll-meta">${it.m}</span>` : ""}</div>
            ${sub ? `<div class="coll-sub">${sub}</div>` : ""}
          </div>
          <i class="fa-solid fa-chevron-right coll-go"></i>
        </div>`;
      }).join("");
    if (!rows) return "";
    return `<div class="coll-group">${g.g}</div>${rows}`;
  }).join("") || '<p class="muted-note">검색 결과가 없어요.</p>';
}

function renderCollection(key) {
  const col = COLLECTIONS[key];
  if (!col) return;
  currentCollection = key;
  const root = document.getElementById("collection-body");
  if (!root) return;
  const total = col.groups.reduce((a, g) => a + g.items.length, 0);
  root.innerHTML = `
    ${sectionLabel(`<i class="fa-solid ${col.ic}"></i> ${col.t}`, `<span class="coll-total">${total}곳</span>`)}
    <p class="coll-desc">${col.desc}</p>
    <input class="coll-search" type="search" placeholder="이 목록에서 찾기" value="${collFilter}" oninput="onCollFilter(this.value)" aria-label="목록 내 검색">
    <div id="coll-list">${collListHtml(key)}</div>`;
}

function onCollFilter(v) {
  collFilter = (v || "").trim();
  const el = document.getElementById("coll-list");
  if (el && currentCollection) el.innerHTML = collListHtml(currentCollection);
}

// 목록 행 탭 — 국내 자료는 등록 코스와 연결(섬=상세 직행, 명산=탐색 정확 검색),
// 세계 3종(트레일·골프·탐방지)은 컬렉션 상세 페이지로 (2026-07-04 지시)
function collTap(key, gi, ii) {
  const col = COLLECTIONS[key];
  if (!col) return;
  const it = col.groups[gi] && col.groups[gi].items[ii];
  if (!it) return;
  if (col.tap === "island") {
    const m = courses.find(c => c.title.indexOf(it.n) >= 0);
    if (m) { navigate("detail", { id: m.id }); return; }
  }
  if (!col.tap) { navigate("collitem", { id: key + ":" + gi + ":" + ii }); return; }
  searchKeyword = it.n;
  currentRegionFilter = "all"; currentSeasonFilter = "all"; currentThemeFilters = [];
  navigate("explore");
  const gs = document.getElementById("global-search");
  if (gs) gs.value = it.n;
}

// ----- 컬렉션 상세 페이지 (코스 상세와 같은 시각 템플릿) -----
let currentCollItemRef = null;
const COLL_ACCENT = { wtrail: "summer", golf: "spring", wspot: "autumn", m100: "autumn", isl: "summer" };
const COLL_FALLBACK_IK = { wtrail: "hiking,trail,mountain", golf: "golf,course,green", wspot: "landscape,scenic,nature", m100: "mountain,korea", isl: "island,sea,korea" };
function collItemPhoto(key, gi, ii, it) {
  const ref = key + ":" + gi + ":" + ii;
  if (photoOverrides[ref]) return photoOverrides[ref];
  const kw = it.ik || COLL_FALLBACK_IK[key] || "landscape,nature";
  const lock = 500 + gi * 200 + ii; // 항목별 고정 실사(§4)
  return "https://loremflickr.com/480/480/" + encodeURIComponent(kw) + "/all?lock=" + lock;
}
function renderCollItem(ref) {
  if (!ref) return;
  currentCollItemRef = ref;
  const p = ref.split(":");
  const key = p[0], gi = +p[1], ii = +p[2];
  const col = COLLECTIONS[key];
  const it = col && col.groups[gi] && col.groups[gi].items[ii];
  const root = document.getElementById("collitem-body");
  if (!it || !root) return;

  // 스탯 3칸: 리서치 stats 우선, 부족하면 순위·지역으로 채움
  let stats = (it.stats || []).slice(0, 3);
  if (stats.length < 3 && it.r != null) stats.unshift({ l: "순위", v: it.r + "위" });
  if (stats.length < 3 && it.s) stats.push({ l: "지역", v: it.s });
  stats = stats.slice(0, 3);

  const tips = (it.tips || []).map(t => `<span class="pc-chip prep">${t}</span>`).join("");
  const desc = it.dd || it.d || "상세 정보가 준비 중입니다. 원본 목록의 명칭·지역 정보를 참고하세요.";
  const refArg = "'" + ref + "'";

  root.innerHTML = `
    <div class="detail-hero accent-${COLL_ACCENT[key] || "spring"}">
      <div class="dh-tags"><span class="dh-season">${col.t}</span></div>
      <h1 class="dh-title">${it.n}</h1>
      ${it.s ? `<div class="dh-loc"><i class="fa-solid fa-location-dot"></i> ${it.s}</div>` : ""}
    </div>

    <div class="d-photo-strip">
      <img class="dp-img" src="${collItemPhoto(key, gi, ii, it)}" alt="${it.n} 사진" loading="lazy"
        onclick="openPhotoZoom(this)" onerror="this.closest('.d-photo-strip').classList.add('img-failed')">
      ${visitorSettings.admin ? `
      <div class="dp-admin">
        <button class="dp-btn" onclick="triggerCoursePhoto(${refArg})"><i class="fa-solid fa-camera"></i> 사진 교체</button>
        ${photoOverrides[ref] ? `<button class="dp-btn ghost" onclick="resetCoursePhoto(${refArg})"><i class="fa-solid fa-rotate-left"></i> 기본 복원</button>` : ""}
      </div>` : ""}
    </div>

    ${stats.length ? `<div class="stat-row">${stats.map(s =>
      `<div class="stat"><span class="s-l">${s.l}</span><span class="s-v">${s.v}</span></div>`).join("")}</div>` : ""}

    <div class="d-card">
      <h4 class="d-card-title"><i class="fa-solid fa-book-open"></i> 상세 소개</h4>
      <p class="ci-desc">${desc}</p>
    </div>

    ${tips ? `<div class="d-card">
      <h4 class="d-card-title"><i class="fa-solid fa-lightbulb"></i> 방문 팁</h4>
      <div class="pc-wrap">${tips}</div>
    </div>` : ""}
  `;
}

// -----------------------------------------------------------------------------
// 관리자 모드 — 코스 대표 사진 교체(사진만, 이 기기 localStorage에 저장)
// -----------------------------------------------------------------------------
let photoOverrides = {};
function loadPhotoOverrides() {
  try { photoOverrides = JSON.parse(localStorage.getItem("gongacourse_photo_overrides") || "{}"); }
  catch (e) { photoOverrides = {}; }
}
function savePhotoOverrides() {
  localStorage.setItem("gongacourse_photo_overrides", JSON.stringify(photoOverrides));
}
function toggleAdmin() {
  visitorSettings.admin = !visitorSettings.admin;
  localStorage.setItem("gongacourse_visitor_settings", JSON.stringify(visitorSettings));
  renderMypage();
}
function triggerCoursePhoto(id) {
  let inp = document.getElementById("course-photo-input");
  if (!inp) {
    inp = document.createElement("input");
    inp.type = "file"; inp.accept = "image/*"; inp.id = "course-photo-input"; inp.hidden = true;
    document.body.appendChild(inp);
  }
  inp.onchange = e => handleCoursePhoto(e, id);
  inp.value = "";
  inp.click();
}
function handleCoursePhoto(e, id) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const img = new Image();
    img.onload = () => {
      // 가로 640 기준 축소 저장(용량 절약) — 비율 유지
      const W = 640, ratio = Math.min(1, W / img.width);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(img.width * ratio);
      canvas.height = Math.round(img.height * ratio);
      canvas.getContext("2d").drawImage(img, 0, 0, canvas.width, canvas.height);
      try {
        photoOverrides[id] = canvas.toDataURL("image/jpeg", 0.78);
        savePhotoOverrides();
      } catch (err) {
        alert("사진 저장 공간이 부족합니다. 다른 사진의 교체를 해제한 뒤 다시 시도하세요.");
        return;
      }
      if (currentScreen === "detail") renderDetail(id);
      else if (currentScreen === "collitem") renderCollItem(id);
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}
function resetCoursePhoto(id) {
  delete photoOverrides[id];
  savePhotoOverrides();
  if (currentScreen === "detail") renderDetail(id);
  else if (currentScreen === "collitem") renderCollItem(id);
}

// -----------------------------------------------------------------------------
// 부팅
// -----------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("gongacourse_data");
  let needReset = false;
  if (saved) {
    try {
      courses = JSON.parse(saved);
      if (courses.length !== defaultCourses.length) needReset = true;
    } catch (e) { needReset = true; }
  } else needReset = true;
  if (needReset) { courses = [...defaultCourses]; saveToLocalStorage(); }

  loadPhotoOverrides();
  loadBookmarks();
  loadCommunityPosts();
  loadSearchCounts();
  loadSteps();
  loadVisitorSettings();

  history.replaceState({ screen: "home" }, "");
  showScreen("home");

  // 측정 ON 상태로 종료했다면 앱 재시작 시 자동 재개(매번 시작 버튼 누를 필요 없음)
  resumeTrackingIfWanted();

  // 자정 자동 리셋: 날짜가 바뀌면 표시를 새 날(0)로 갱신. 측정은 끊김 없이 새 날에 누적.
  startMidnightWatcher();

  window.addEventListener("popstate", (e) => {
    const s = e.state && e.state.screen;
    if (s) {
      showScreen(s, e.state);
    } else {
      if (confirm("꽁아코스를 나갈까요?")) history.back();
      else history.pushState({ screen: currentScreen }, "");
    }
  });

  // 백그라운드/화면꺼짐 전환 시 걸음 기록 즉시 저장(유실 방지)
  // 복귀 시: ①측정 중이면 Wake Lock 재획득(앱 전환 시 자동 해제 대응) ②측정 의도가 남았는데
  // (플립/화면꺼짐으로) 끊겼다면 자동 재개 ③날짜 바뀌었으면 새 날로 갱신.
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { saveSteps(); return; }
    checkDayRollover();
    if (motionActive && !wakeLock) requestWakeLock();
    else if (!motionActive) resumeTrackingIfWanted();
  });
  window.addEventListener("pagehide", saveSteps);
});
