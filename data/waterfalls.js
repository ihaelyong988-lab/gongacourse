// 국내 꼭 가봐야 할 100대 폭포 — 홈 '지금 뭘 찾으세요' 전용 컬렉션
// 원본: 국내_꼭가봐야할_100대폭포_계절별_리서치.xlsx / Top100_전체 / 확인일 2026-07-17
(function buildWaterfallCollection() {
  const items = (window.WATERFALL_ITEMS || []).slice().sort((a, b) => a.r - b.r);
  const seasons = ["봄", "여름", "가을", "겨울"];
  window.WATERFALL_COLLECTION = {
    t: "국내 폭포",
    ic: "fa-water",
    desc: "공개 공공자료를 동일한 평가식으로 재구성한 연구형 100곳입니다. 정부가 공인한 단일 목록은 아닙니다.",
    homeOnly: true,
    groups: seasons.map(season => {
      const seasonItems = items.filter(item => item.wf.season === season);
      return { g: `${season} 추천 · ${seasonItems.length}곳`, items: seasonItems };
    })
  };
})();
