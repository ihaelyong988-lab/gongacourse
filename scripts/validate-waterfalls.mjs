import crypto from "node:crypto";
import fs from "node:fs";
import vm from "node:vm";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
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
assert(items.every(item => /^2026-07-(17|19)$/.test(item.wf.checked)), "확인일이 허용 범위와 일치하지 않습니다.");

const seasonCounts = Object.fromEntries(collection.groups.map(group => [group.g.split(" ")[0], group.items.length]));
assert(JSON.stringify(seasonCounts) === JSON.stringify({ 봄: 8, 여름: 45, 가을: 43, 겨울: 4 }), `계절 분포가 일치하지 않습니다: ${JSON.stringify(seasonCounts)}`);

const ledger = JSON.parse(fs.readFileSync("data/waterfall-visual-ledger.json", "utf8"));
assert(ledger.researchedAt === "2026-07-19", "시각자료 원장 조사일이 일치하지 않습니다.");
assert(ledger.items?.length === 100, "시각자료 원장이 100곳이 아닙니다.");
assert(ledger.counts?.total === 100 && ledger.counts?.real === 20 && ledger.counts?.ai === 80, `실사/AI 집계가 20/80이 아닙니다: ${JSON.stringify(ledger.counts)}`);
assert(new Set(ledger.items.map(item => Number(item.rank))).size === 100, "시각자료 원장 순위가 중복되었습니다.");

const ledgerByRank = new Map(ledger.items.map(item => [Number(item.rank), item]));
const photoPaths = new Set();
for (const item of items) {
  const visual = ledgerByRank.get(item.r);
  assert(visual, `${item.r}위 시각자료 원장이 없습니다.`);
  assert(item.n === visual.name, `${item.r}위 폭포명과 원장이 다릅니다: ${item.n} / ${visual.name}`);
  assert(item.photoType === visual.kind, `${item.r}위 photoType과 원장 kind가 다릅니다.`);
  assert(item.photo === visual.localPath, `${item.r}위 사진 경로와 원장이 다릅니다.`);
  assert(/^assets\/waterfalls\/(real|generated)\/\d{3}-[a-z0-9-]+\.webp$/.test(item.photo), `${item.r}위 사진이 승인된 로컬 WebP 경로가 아닙니다.`);
  assert(!photoPaths.has(item.photo), `${item.r}위 사진 경로가 중복되었습니다: ${item.photo}`);
  photoPaths.add(item.photo);
  assert(fs.existsSync(item.photo), `${item.r}위 사진 파일이 없습니다: ${item.photo}`);
  const bytes = fs.readFileSync(item.photo);
  assert(bytes.length >= 40000, `${item.r}위 사진 파일이 비정상적으로 작습니다: ${bytes.length}`);
  assert(bytes.subarray(0, 4).toString("ascii") === "RIFF" && bytes.subarray(8, 12).toString("ascii") === "WEBP", `${item.r}위 파일이 WebP가 아닙니다.`);
  assert(sha256(item.photo) === visual.assetSha256, `${item.r}위 사진 SHA-256이 원장과 다릅니다.`);
  assert(visual.status === "asset-ready" && visual.width >= 400 && visual.height >= 400, `${item.r}위 자산 상태/크기가 승인 기준에 미달합니다.`);
  assert(visual.identityEvidence && visual.visualCues, `${item.r}위 장소 식별 근거가 없습니다.`);
  assert(visual.primaryReviewer && visual.crossReview?.reviewer && visual.crossReview?.status === "pass" && visual.crossReview?.notes, `${item.r}위 1·2차 검수 기록이 없습니다.`);
  assert(visual.primaryReviewer !== visual.crossReview.reviewer, `${item.r}위 조사자와 교차검수자가 같습니다.`);

  if (visual.kind === "real") {
    assert(/^https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(visual.sourcePage), `${item.r}위 실사 원문이 Commons 개별 파일이 아닙니다.`);
    assert(/^https:\/\/(upload\.wikimedia\.org\/|commons\.wikimedia\.org\/wiki\/Special:Redirect\/file\/)/.test(visual.directUrl), `${item.r}위 실사 다운로드 주소가 Wikimedia가 아닙니다.`);
    assert(visual.author && visual.license && /^https:\/\//.test(visual.licenseUrl), `${item.r}위 실사 저작자/라이선스가 누락되었습니다.`);
    assert(/^[a-f0-9]{64}$/.test(visual.sourceSha256 || ""), `${item.r}위 실사 원본 SHA-256이 없습니다.`);
    assert(item.pc && item.psrc === visual.sourcePage && item.photoLicense === visual.license, `${item.r}위 실사 화면 출처와 원장이 다릅니다.`);
    assert(!item.photoBasis, `${item.r}위 실사에 AI 근거 필드가 섞였습니다.`);
  } else {
    assert(visual.kind === "ai", `${item.r}위 자산 유형이 real/ai가 아닙니다.`);
    assert(visual.prompt?.length >= 100 && /^https:\/\//.test(visual.factUrl), `${item.r}위 AI 프롬프트/사실 근거가 누락되었습니다.`);
    assert(visual.disclosure === "AI 생성 재현 이미지 · 실제 촬영 사진 아님", `${item.r}위 AI 고지 문구가 일치하지 않습니다.`);
    assert(item.photoBasis === visual.factUrl || item.photoBasis === item.wf.url, `${item.r}위 AI 근거 링크와 원장이 다릅니다.`);
    assert(!item.pc && !item.psrc, `${item.r}위 AI 자산이 실사 출처처럼 표시됩니다.`);
  }
}

const reviews = [1, 2, 3].flatMap(part => {
  const review = JSON.parse(fs.readFileSync(`data/waterfall-visual-crossreview-part${part}.json`, "utf8"));
  return review.items;
});
assert(reviews.length === 100 && new Set(reviews.map(item => Number(item.rank))).size === 100, "교차검수 결과가 100곳·고유 순위가 아닙니다.");
assert(reviews.every(item => item.status === "pass" && item.notes), "교차검수 미통과 또는 검수 메모 누락 항목이 있습니다.");

const item97 = items.find(item => item.r === 97);
assert(/화순/.test(item97.s) && /geopark\.gwangju\.go\.kr/.test(item97.wf.url), "97위 시무지기폭포 위치/공식 출처 정정이 반영되지 않았습니다.");
const item100 = items.find(item => item.r === 100);
assert(/무주/.test(item100.s) && /data\.visitkorea\.or\.kr/.test(item100.wf.url) && item100.wf.access === "제한", "100위 천일폭포 위치/출입 제한 정정이 반영되지 않았습니다.");

const app = fs.readFileSync("app.js", "utf8");
const foodAt = app.indexOf('{ key: "food"');
const waterfallAt = app.indexOf('{ key: "coll:wfall"');
const templeAt = app.indexOf('{ key: "temple"');
assert(foodAt >= 0 && foodAt < waterfallAt && waterfallAt < templeAt, "국내 폭포 탭이 맛집 코스 바로 오른쪽이 아닙니다.");
assert(app.includes("orderedHomeShortcuts().map"), "개인화된 바로가기 순서가 홈 렌더링에 연결되지 않았습니다.");
assert(app.includes('if (key === "wfall") return "";'), "국내 폭포의 범용 사진 폴백 차단이 없습니다.");
assert(app.includes("AI 생성 재현 이미지 · 실제 촬영 사진 아님"), "AI 재현 이미지 고지 문구가 화면에 없습니다.");
assert(!items.some(item => /loremflickr/i.test(item.photo)), "국내 폭포에 범용 LoremFlickr 사진이 남았습니다.");

const index = fs.readFileSync("index.html", "utf8");
assert(index.indexOf('src="data/waterfalls-part1.js"') < index.indexOf('src="data/waterfalls.js"'), "폭포 원본 데이터가 컬렉션 구성보다 먼저 로드되지 않습니다.");
assert(index.indexOf('src="data/waterfalls.js"') < index.indexOf('src="app.js"'), "폭포 컬렉션이 app.js보다 먼저 로드되지 않습니다.");

console.log("PASS waterfall data: 100곳 / 이름·순위 고유 / 계절 8·45·43·4 / HTTPS 출처 100");
console.log("PASS waterfall visuals: 실사 20 · AI 재현 80 / WebP·SHA-256·권리·고지·근거 100/100");
console.log("PASS waterfall cross-review: 독립 교차검수 100/100");
console.log("PASS home shortcut: 맛집 코스 → 국내 폭포 → 사찰 탐방 / 순서 설정 연결");
