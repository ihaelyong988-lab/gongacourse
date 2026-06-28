#!/usr/bin/env node
// UserPromptSubmit 훅: AGENTS.md의 실제 규칙(§0 핵심·§4 절대규칙·§6 라우팅·§9 최근결정)을
// 매 턴 컨텍스트에 "강제 주입"한다. (고정 문구만 넣으면 규칙이 컨텍스트에 없어 우회됨 → 근본 해결)
import fs from "node:fs";
import path from "node:path";

let md = "";
try {
  md = fs.readFileSync(path.join(process.cwd(), "AGENTS.md"), "utf8");
} catch (e) {
  md = "";
}

function slice(startMark, endMark) {
  const s = md.indexOf(startMark);
  if (s < 0) return "";
  let e = endMark ? md.indexOf(endMark, s + startMark.length) : md.length;
  if (e < 0) e = md.length;
  return md.slice(s, e).trim();
}

const s4 = slice("## 4.", "## 5.");          // 절대 규칙(DON'T)
const s6 = slice("## 6.", "## 7.");          // 스킬·도구 라우팅
const s8 = slice("## 8.", "## 9.");          // 마감 루틴(Closeout) — "마감처리" 트리거
const s9block = slice("## 9.", null);        // 결정 로그
const s9heads = s9block
  .split("\n")
  .filter((l) => l.startsWith("### "))
  .slice(-7)
  .join("\n");

const ctx = [
  "[하네스 강제주입 — 이번 턴 작업 전 반드시 적용. 아래는 AGENTS.md의 확정 규칙이며 우회 금지. 같은 지시를 다시 묻게 만들면 자기개선 §0 위반.]",
  "자기개선 §0: 사용자가 한 번 설명한 지시·방식·선호는 두 번 묻지 않는다. 새 작업 전 아래 규칙을 먼저 적용한다.",
  s4,
  s6,
  s8,
  s9heads ? "## 9. 최근 확정 결정(제목 — 상세는 AGENTS.md)\n" + s9heads : "",
]
  .filter(Boolean)
  .join("\n\n");

const out = {
  hookSpecificOutput: {
    hookEventName: "UserPromptSubmit",
    additionalContext: ctx,
  },
};

process.stdout.write(JSON.stringify(out));
