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
let currentThemeFilter = "all";

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
  highContrast: false
};

const NICK = "나들이 대장님";

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

  updateTabbar();
  const isRoot = ROOTS.includes(id);
  const backBtn = document.getElementById("appbar-back");
  if (backBtn) backBtn.style.display = isRoot ? "none" : "flex";
  // 검색창은 홈/탐색에서 로고 옆에 노출
  const showSearch = (id === "home" || id === "explore");
  const searchEl = document.getElementById("appbar-search");
  if (searchEl) searchEl.style.display = showSearch ? "flex" : "none";
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
function hasTemple(c) {
  if (["사", "절", "암"].some(w => c.title.includes(w))) return true;
  return c.timeline.some(t => ["사", "절", "암", "사찰", "암자"].some(w => t.spot.includes(w)));
}
function isPetFriendly(c) {
  return c.title.includes("숲길") || c.title.includes("공원") || c.location.includes("제주");
}
function stepIcon(node, idx, len) {
  if (idx === 0) return "🚩";
  if (idx === len - 1) return "🏁";
  if (node.spot.includes("식사") || node.spot.includes("맛집") || node.spot.includes("식당")) return "🍴";
  if (node.spot.includes("카페") || node.spot.includes("커피") || node.spot.includes("쉼터")) return "☕";
  if (node.spot.includes("사찰") || node.spot.includes("사") || node.spot.includes("암")) return "⛩️";
  return "👣";
}
function kakaoMapLink(query) {
  return "https://map.kakao.com/?q=" + encodeURIComponent(query);
}
function isSaved(id) {
  return savedCourses.includes(id);
}

// 코스 실사 사진 (키워드 매칭 실사 · 테마/계절별, id로 고정·분산). 실패 시 계절 그라데이션 폴백.
const PHOTO_KW = {
  spring: "spring,blossom,trail",
  summer: "forest,green,trail",
  autumn: "autumn,mountain,foliage",
  winter: "snow,mountain,winter",
  temple: "temple,korea",
  sea: "sea,coast,beach"
};
function coursePhoto(course, size) {
  size = size || 220;
  let key = course.season;
  if (hasTemple(course)) key = "temple";
  else if (/섬|해변|바다|해수욕|포구|항|등대|해안|호수|강변|계곡|폭포/.test(course.title)) key = "sea";
  const kw = PHOTO_KW[key] || PHOTO_KW.summer;
  return `https://loremflickr.com/${size}/${size}/${kw}/all?lock=${course.id}`;
}

// -----------------------------------------------------------------------------
// 코스 카드 (탐색/저장/홈 공용)
// -----------------------------------------------------------------------------
function courseCardHtml(course) {
  const ratioClass = course.satisfaction >= 95 ? "high" : "";
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
  { key: "long", icon: "fa-route", label: "장거리 트레킹", cls: "sit-blue" },
  { key: "today", icon: "fa-star", label: "오늘 인기", cls: "sit-pink" },
  { key: "new", icon: "fa-seedling", label: "새로 등록", cls: "sit-teal" }
];

function gotoSituation(key) {
  searchKeyword = "";
  currentRegionFilter = "all";
  currentSeasonFilter = "all";
  currentThemeFilter = "all";
  if (key === "easy" || key === "food" || key === "temple" || key === "long") currentThemeFilter = key;
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
const REGIONS = ["서울", "인천", "경기", "강원", "충청", "경북", "전남", "제주"];
const SEASONS = [
  { k: "spring", n: "봄" }, { k: "summer", n: "여름" },
  { k: "autumn", n: "가을" }, { k: "winter", n: "겨울" }
];
const THEMES = [
  { k: "easy", n: "쉬운산책" }, { k: "food", n: "맛집연계" },
  { k: "temple", n: "사찰탐방" }, { k: "long", n: "장거리" }
];

function chip(active, label, onclick) {
  return `<button class="chip ${active ? "on" : ""}" onclick="${onclick}">${label}</button>`;
}

// 어떤 필터 서랍(수납장)이 열려 있는지: null | 'region' | 'theme' | 'season'
let openDrawer = null;

function setRegion(r) { currentRegionFilter = r; openDrawer = null; renderExploreFilters(); renderExploreList(); }
function setSeason(s) { currentSeasonFilter = s; openDrawer = null; renderExploreFilters(); renderExploreList(); }
function setTheme(t) { currentThemeFilter = t; openDrawer = null; renderExploreFilters(); renderExploreList(); }
function toggleDrawer(g) { openDrawer = (openDrawer === g ? null : g); renderExploreFilters(); }
function clearFilters() {
  searchKeyword = ""; currentRegionFilter = "all"; currentSeasonFilter = "all"; currentThemeFilter = "all";
  openDrawer = null;
  const gs = document.getElementById("global-search");
  if (gs) gs.value = "";
  renderExploreFilters(); renderExploreList();
}

function getFilteredCourses() {
  const norm = searchKeyword.toLowerCase().replace(/\s+/g, "");
  return courses.filter(c => {
    let s = true;
    if (norm) {
      s = c.title.toLowerCase().replace(/\s+/g, "").includes(norm)
        || c.location.toLowerCase().replace(/\s+/g, "").includes(norm)
        || (c.type || "").toLowerCase().replace(/\s+/g, "").includes(norm)
        || (c.foods || []).some(f => f.toLowerCase().replace(/\s+/g, "").includes(norm))
        || c.timeline.some(t => t.spot.toLowerCase().replace(/\s+/g, "").includes(norm));
    }
    let r = currentRegionFilter === "all" || c.location.includes(currentRegionFilter);
    let se = currentSeasonFilter === "all" || c.season === currentSeasonFilter;
    let th = true;
    if (currentThemeFilter === "easy") th = isEasy(c) || parseHours(c.duration) <= 2;
    else if (currentThemeFilter === "food") th = hasFood(c);
    else if (currentThemeFilter === "temple") th = hasTemple(c);
    else if (currentThemeFilter === "long") th = parseHours(c.duration) >= 3 || !isEasy(c);
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
function themeText() { const t = THEMES.find(x => x.k === currentThemeFilter); return t ? t.n : "전체"; }
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
  const anyFilter = currentRegionFilter !== "all" || currentSeasonFilter !== "all" || currentThemeFilter !== "all" || searchKeyword;

  let drawer = "";
  if (openDrawer === "region") {
    drawer = `<div class="filter-drawer">
      ${chip(currentRegionFilter === "all", "전체 지역", "setRegion('all')")}
      ${REGIONS.map(r => chip(currentRegionFilter === r, r, `setRegion('${r}')`)).join("")}
    </div>`;
  } else if (openDrawer === "theme") {
    drawer = `<div class="filter-drawer">
      ${chip(currentThemeFilter === "all", "전체 테마", "setTheme('all')")}
      ${THEMES.map(t => chip(currentThemeFilter === t.k, t.n, `setTheme('${t.k}')`)).join("")}
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
    list.innerHTML = `<div class="empty"><i class="fa-solid fa-filter-circle-xmark"></i><p>조건에 맞는 코스가 없어요</p><span>필터를 바꾸거나 초기화해 보세요</span></div>`;
    return;
  }
  list.innerHTML = filtered.map(courseCardHtml).join("");
}

// -----------------------------------------------------------------------------
// 3) 상세 — 실제 세로 타임라인
// -----------------------------------------------------------------------------
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
      return `<a class="food-card" href="${kakaoMapLink(f + " " + c.location)}" target="_blank" rel="noopener">
        <div class="food-ic"><i class="fa-solid fa-store"></i></div>
        <div class="food-info"><h4>${f}</h4><span>${tag}</span></div>
        <i class="fa-solid fa-map-location-dot food-map"></i>
      </a>`;
    }).join("")
    : `<p class="muted-note">주변 등록된 식당 정보가 없어요. 도시락을 준비하세요.</p>`;

  const gallery = (c.photos && c.photos.length)
    ? `<div class="photo-gallery">${c.photos.map(p => `<div class="gphoto" style="background-image:url('${p}')"></div>`).join("")}</div>`
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

    <div class="stat-row">
      <div class="stat"><i class="fa-solid fa-mountain"></i><span class="s-l">난이도</span><span class="s-v">${c.difficulty}</span></div>
      <div class="stat"><i class="fa-solid fa-clock"></i><span class="s-l">소요시간</span><span class="s-v">${c.duration}</span></div>
      <div class="stat"><i class="fa-solid fa-thumbs-up"></i><span class="s-l">만족도</span><span class="s-v hl">${ratio}%</span></div>
    </div>

    <a class="map-btn" href="${kakaoMapLink(c.title + " " + c.location)}" target="_blank" rel="noopener">
      <i class="fa-solid fa-map-location-dot"></i> 카카오맵에서 길찾기 · 위치보기
    </a>

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
      <div class="cm-av"><i class="fa-solid fa-comment-dots"></i></div>
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
  const photo = it.photo ? `<div class="fc-photo" style="background-image:url('${it.photo}')"></div>` : "";
  const ratingBadge = it.rating ? `<span class="fc-rate">${commStars(it.rating)} ${it.rating.toFixed(1)}</span>` : "";
  const courseTag = it.courseTitle
    ? `<span class="fc-course"><i class="fa-solid fa-location-dot"></i> ${it.courseTitle}</span>` : "";
  const mineDel = (it.kind === "post" && it.user === NICK)
    ? `<button class="fc-del" onclick="event.stopPropagation();deleteCommunityPost(${it.postIndex})" aria-label="삭제"><i class="fa-solid fa-trash-can"></i></button>` : "";
  return `
    <div class="feed-card" ${onClick}>
      <div class="fc-head">
        <div class="fc-av"><i class="fa-solid fa-user"></i></div>
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

// 검색순: 많이 찾은 키워드 칩 (탭하면 그 키워드 후기만)
function renderCommKeywords() {
  const wrap = document.getElementById("comm-kw-wrap");
  if (!wrap) return;
  if (commSort !== "popular") { wrap.innerHTML = ""; return; }
  const kws = topKeywords(8);
  if (!kws.length) {
    wrap.innerHTML = `<p class="kw-hint"><i class="fa-solid fa-fire"></i> 상단 검색창에서 코스를 찾을수록 인기 키워드가 모여요</p>`;
    return;
  }
  wrap.innerHTML = `<div class="kw-row">
    <button class="kw-chip ${commKeyword === "" ? "on" : ""}" onclick="filterByKeyword('')">전체</button>
    ${kws.map(k => `<button class="kw-chip ${commKeyword === k ? "on" : ""}" onclick="filterByKeyword('${k}')">#${k} <b>${searchCounts[k]}</b></button>`).join("")}
  </div>`;
}
function filterByKeyword(k) {
  commKeyword = (commKeyword === k ? "" : k);
  renderCommKeywords();
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
function renderSaved() {
  const root = document.getElementById("saved-body");
  if (!root) return;
  const list = savedCourses.map(id => courses.find(c => c.id === id)).filter(Boolean);
  if (!list.length) {
    root.innerHTML = `<div class="empty"><i class="fa-regular fa-bookmark"></i><p>저장한 코스가 없어요</p><span>코스 카드의 북마크를 눌러 모아두세요</span>
      <button class="btn-primary" style="margin-top:14px" onclick="goTab('explore')">코스 둘러보기</button></div>`;
    return;
  }
  root.innerHTML = `<div class="result-meta"><span>저장한 코스 ${list.length}개</span></div><div class="course-list">${list.map(courseCardHtml).join("")}</div>`;
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

  const steps = todaySteps();
  const goal = stepData.goal;
  const pct = Math.min(100, Math.round((steps / goal) * 100));
  const km = (steps * 0.0007).toFixed(2);
  const kcal = Math.round(steps * 0.04);
  const C = 326.7; // 2πr, r=52
  const offset = (C * (1 - pct / 100)).toFixed(1);
  const week = weekDays();
  const weekMax = Math.max(goal, ...week.map(d => d.steps), 1);
  const goalChips = [6000, 8000, 10000, 12000].map(g =>
    `<button class="goal-chip ${goal === g ? "on" : ""}" onclick="setStepGoal(${g})">${g / 1000}천</button>`).join("");
  const weekBars = week.map((d, i) => {
    const h = Math.max(4, Math.round((d.steps / weekMax) * 100));
    const isToday = i === week.length - 1;
    return `<div class="wk"><div class="wk-bar ${isToday ? "today" : ""} ${d.steps >= goal ? "hit" : ""}" style="height:${h}%"></div><span class="wk-l ${isToday ? "on" : ""}">${d.label}</span></div>`;
  }).join("");

  root.innerHTML = `
    <div class="profile-row">
      <div class="avatar-sm"><i class="fa-solid fa-user-astronaut"></i></div>
      <div class="pr-meta">
        <h3>${NICK}</h3>
        <span class="grade">${grade} · 후기 ${myCount}개</span>
      </div>
    </div>
    <div class="profile-stats">
      <div class="ps" onclick="goTab('saved')"><strong>${savedCourses.length}</strong><span>저장 코스</span></div>
      <div class="ps" onclick="goTab('community')"><strong>${myCount}</strong><span>내 후기</span></div>
      <div class="ps"><strong>${courses.length}</strong><span>전체 코스</span></div>
    </div>

    <div class="set-card ped-dash">
      <div class="set-title"><i class="fa-solid fa-shoe-prints"></i> 만보기 ${motionActive ? `<span class="ped-live">● 측정중</span>` : ""}</div>
      <div class="ped-main">
        <div class="ped-gauge">
          <svg viewBox="0 0 120 120" class="ped-svg">
            <circle cx="60" cy="60" r="52" class="ped-track"/>
            <circle cx="60" cy="60" r="52" class="ped-prog ${steps >= goal ? "done" : ""}"
              stroke-dasharray="${C}" stroke-dashoffset="${offset}" transform="rotate(-90 60 60)"/>
          </svg>
          <div class="ped-center">
            <strong id="ped-steps">${steps.toLocaleString()}</strong>
            <span>걸음</span>
            <em id="ped-pct">목표 ${pct}%</em>
          </div>
        </div>
        <div class="ped-side">
          <button class="track-btn ${motionActive ? "on" : ""}" onclick="toggleStepTracking()">
            <i class="fa-solid fa-${motionActive ? "stop" : "play"}"></i> ${motionActive ? "측정 정지" : "측정 시작"}
          </button>
          <div class="ped-mini">
            <div><strong id="ped-km">${km}</strong><span>km</span></div>
            <div><strong id="ped-kcal">${kcal}</strong><span>kcal</span></div>
          </div>
          <div class="goal-row">${goalChips}</div>
        </div>
      </div>
      <div class="ped-week">${weekBars}</div>
      <div class="ped-quick">
        <button class="q-chip" onclick="addSteps(1000)">+1,000</button>
        <button class="q-chip" onclick="addSteps(3000)">+3,000</button>
        <button class="q-chip" onclick="addSteps(5000)">+5,000</button>
        <button class="q-chip reset" onclick="setTodaySteps(0)">초기화</button>
      </div>
      <p class="ped-note"><i class="fa-solid fa-circle-info"></i> 휴대폰에서 “측정 시작” 후 들고 걸으면 가속도 센서로 자동 카운트돼요(HTTPS·동작 권한 필요). 수동 기록은 위 버튼.</p>
    </div>

    <div class="set-card">
      <div class="set-title"><i class="fa-solid fa-universal-access"></i> 화면 접근성</div>
      <div class="set-row"><span>글자 크기</span>
        <div class="seg small">
          ${fontBtn("medium", "보통")}${fontBtn("large", "크게")}${fontBtn("xlarge", "아주크게")}
        </div>
      </div>
      <div class="set-row toggle-row" onclick="toggleContrast()">
        <span>🕶️ 고대비 모드</span>
        <span class="switch ${visitorSettings.highContrast ? "on" : ""}"><span class="knob"></span></span>
      </div>
    </div>
  `;
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
  applyFontSize();
  document.body.classList.toggle("contrast-high", visitorSettings.highContrast);
}

// -----------------------------------------------------------------------------
// 만보기 (걸음 기록·계기판) — 로컬 저장 기반 기록형
// -----------------------------------------------------------------------------
let stepData = { goal: 8000, days: {} };
function loadSteps() {
  try {
    const s = localStorage.getItem("gongacourse_steps");
    if (s) stepData = Object.assign({ goal: 8000, days: {} }, JSON.parse(s));
  } catch (e) { stepData = { goal: 8000, days: {} }; }
}
function saveSteps() { localStorage.setItem("gongacourse_steps", JSON.stringify(stepData)); }
function dayKey(d) {
  const x = d || new Date();
  return x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0") + "-" + String(x.getDate()).padStart(2, "0");
}
function todaySteps() { return stepData.days[dayKey()] || 0; }
function setTodaySteps(v) {
  stepData.days[dayKey()] = Math.max(0, parseInt(v, 10) || 0);
  saveSteps(); renderMypage();
}
function addSteps(delta) { setTodaySteps(todaySteps() + delta); }
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

// --- 실시간 걸음 측정 (DeviceMotion 가속도계 피크 검출) ---
let motionActive = false;
let motionHandler = null;
let motionState = { smoothed: 9.8, peaked: false, lastStepAt: 0, sinceSave: 0 };

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
  renderMypage();
}

function stopStepTracking() {
  if (motionHandler) window.removeEventListener("devicemotion", motionHandler);
  motionHandler = null;
  motionActive = false;
  saveSteps();
  renderMypage();
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
  motionState.sinceSave++;
  if (motionState.sinceSave >= 10) { saveSteps(); motionState.sinceSave = 0; }
  updateGaugeLive();
}

function updateGaugeLive() {
  const steps = todaySteps();
  const goal = stepData.goal;
  const pct = Math.min(100, Math.round((steps / goal) * 100));
  const offset = (326.7 * (1 - pct / 100)).toFixed(1);
  const elSteps = document.getElementById("ped-steps");
  const elPct = document.getElementById("ped-pct");
  const elKm = document.getElementById("ped-km");
  const elKcal = document.getElementById("ped-kcal");
  const prog = document.querySelector(".ped-prog");
  if (elSteps) elSteps.textContent = steps.toLocaleString();
  if (elPct) elPct.textContent = "목표 " + pct + "%";
  if (elKm) elKm.textContent = (steps * 0.0007).toFixed(2);
  if (elKcal) elKcal.textContent = Math.round(steps * 0.04);
  if (prog) {
    prog.setAttribute("stroke-dashoffset", offset);
    if (steps >= goal) prog.classList.add("done");
  }
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

  loadBookmarks();
  loadCommunityPosts();
  loadSearchCounts();
  loadSteps();
  loadVisitorSettings();

  history.replaceState({ screen: "home" }, "");
  showScreen("home");

  window.addEventListener("popstate", (e) => {
    const s = e.state && e.state.screen;
    if (s) {
      showScreen(s, e.state);
    } else {
      if (confirm("꽁아코스를 나갈까요?")) history.back();
      else history.pushState({ screen: currentScreen }, "");
    }
  });
});
