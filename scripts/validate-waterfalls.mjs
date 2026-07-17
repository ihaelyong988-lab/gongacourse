import fs from "node:fs";
import vm from "node:vm";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const context = { window: {} };
for (const file of [
  "data/waterfalls-part1.js",
  "data/waterfalls-part2.js",
  "data/waterfalls-part3.js",
  "data/waterfalls-part4.js",
  "data/waterfalls-part5.js",
  "data/waterfalls.js"
]) {
  vm.runInNewContext(fs.readFileSync(file, "utf8"), context, { filename: file });
}

const collection = context.window.WATERFALL_COLLECTION;
assert(collection?.t === "국내 폭포", "컬렉션 제목이 국내 폭포가 아닙니다.");
assert(collection?.homeOnly === true, "국내 폭포가 홈 전용 컬렉션으로 표시되지 않았습니다.");

const items = collection.groups.flatMap(group => group.items);
assert(items.length === 100, `폭포 데이터가 100곳이 아닙니다: ${items.length}`);
assert(new Set(items.map(item => item.r)).size === 100, "순위가 중복되었습니다.");
assert(Math.min(...items.map(item => item.r)) === 1 && Math.max(...items.map(item => item.r)) === 100, "순위 범위가 1~100이 아닙니다.");
assert(new Set(items.map(item => item.n)).size === 100, "폭포명이 중복되었습니다.");
assert(items.every(item => item.n && item.s && item.dd && item.wf), "필수 상세 데이터가 누락되었습니다.");
assert(items.every(item => /^https:\/\//.test(item.wf.url)), "HTTPS가 아닌 출처 URL이 있습니다.");
assert(items.every(item => item.wf.checked === "2026-07-17"), "확인일이 일치하지 않습니다.");

const seasonCounts = Object.fromEntries(collection.groups.map(group => [group.g.split(" ")[0], group.items.length]));
assert(JSON.stringify(seasonCounts) === JSON.stringify({ 봄: 8, 여름: 45, 가을: 43, 겨울: 4 }), `계절 분포가 일치하지 않습니다: ${JSON.stringify(seasonCounts)}`);

const app = fs.readFileSync("app.js", "utf8");
const foodAt = app.indexOf('{ key: "food"');
const waterfallAt = app.indexOf('{ key: "coll:wfall"');
const templeAt = app.indexOf('{ key: "temple"');
assert(foodAt >= 0 && foodAt < waterfallAt && waterfallAt < templeAt, "국내 폭포 탭이 맛집 코스 바로 오른쪽이 아닙니다.");
assert(app.includes("orderedHomeShortcuts().map"), "개인화된 바로가기 순서가 홈 렌더링에 연결되지 않았습니다.");

const index = fs.readFileSync("index.html", "utf8");
assert(index.indexOf('src="data/waterfalls-part1.js"') < index.indexOf('src="data/waterfalls.js"'), "폭포 원본 데이터가 컬렉션 구성보다 먼저 로드되지 않습니다.");
assert(index.indexOf('src="data/waterfalls.js"') < index.indexOf('src="app.js"'), "폭포 컬렉션이 app.js보다 먼저 로드되지 않습니다.");

console.log("PASS waterfall data: 100곳 / 이름·순위 고유 / 계절 8·45·43·4 / HTTPS 출처 100");
console.log("PASS home shortcut: 맛집 코스 → 국내 폭포 → 사찰 탐방 / 순서 설정 연결");
