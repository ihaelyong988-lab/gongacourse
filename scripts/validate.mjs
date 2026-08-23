#!/usr/bin/env node
/**
 * validate.mjs — 범용 무비용 정적 검증 (서버·API 불필요, 항상 exit 0).
 * 새 프로젝트에 맞게 아래 CONFIG만 수정. 검사 대상이 없으면 조용히 통과.
 * 코드 프로젝트가 아니면 이 파일과 관련 훅을 삭제해도 된다.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

// ── CONFIG ─────────────────────────────────────────────
const CONFIG = {
  FILE: 'index.html',                 // 검사할 주 파일 (없으면 통과)
  CHECK_TAG_BALANCE: true,            // <div>/<section> 등 여닫기 균형
  TAGS: ['div', 'section'],           // 균형 검사할 태그
  CHECK_INLINE_JS: true,             // <script> 인라인 JS 문법(node --check)
  DEP_ALLOWLIST: [                    // 허용 외부 의존성(이 외 감지 시 경고)
    /fonts\.googleapis\.com/i, /fonts\.gstatic\.com/i,
    /cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome/i, // 아이콘 고정 스택(AGENTS §2) — 2026-07-02 allowlist 누락 교정
    // 자기 자신의 배포 주소는 의존성이 아니다 — canonical·og:url 은 절대 URL 이어야 해서 여기 뜬다.
    // 2026-08-23: 검색등록 메타를 넣고 이 게이트를 돌리지 않아 위반 상태로 머지됐다(원장 참조).
    /ihaelyong988-lab\.github\.io\/gongacourse/i,
  ],
  FORBID_NETWORK: false,             // fetch/XHR 금지(정적·localStorage 전용 프로젝트면 true)
};
// ───────────────────────────────────────────────────────

const problems = [];
if (!existsSync(CONFIG.FILE)) { console.log(`[validate] PASS — 검사 대상(${CONFIG.FILE}) 없음, 통과`); process.exit(0); }
const src = readFileSync(CONFIG.FILE, 'utf8');
const cnt = (s, re) => (s.match(re) || []).length;

// 정적 골격만 검사(인라인 JS의 템플릿 문자열 제외)
const skeleton = src.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<!--[\s\S]*?-->/g, '');

if (CONFIG.CHECK_TAG_BALANCE) {
  for (const t of CONFIG.TAGS) {
    const o = cnt(skeleton, new RegExp(`<${t}\\b`, 'gi'));
    const c = cnt(skeleton, new RegExp(`</${t}>`, 'gi'));
    if (o !== c) problems.push(`정적 <${t}> 불균형: ${o} vs ${c} (차이 ${o - c})`);
  }
}

if (CONFIG.DEP_ALLOWLIST.length) {
  const externals = [...src.matchAll(/<(?:script|link)\b[^>]*\b(?:src|href)\s*=\s*["'](https?:[^"']+)["']/gi)].map(m => m[1]);
  for (const url of externals) if (!CONFIG.DEP_ALLOWLIST.some(re => re.test(url))) problems.push(`허용되지 않은 외부 의존성: ${url}`);
}

if (CONFIG.FORBID_NETWORK && /\bfetch\s*\(|new\s+XMLHttpRequest|\.ajax\s*\(/.test(src)) {
  problems.push('네트워크 호출(fetch/XHR) 감지 — 정적 전용 원칙 점검');
}

if (CONFIG.CHECK_INLINE_JS) {
  try {
    const blocks = [...src.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/gi)].map(m => m[1]).filter(s => s.trim().length > 200);
    const js = blocks.sort((a, b) => b.length - a.length)[0] || '';
    if (js) { const tmp = join(tmpdir(), 'harness_validate_check.js'); writeFileSync(tmp, js, 'utf8'); execSync(`node --check "${tmp}"`, { stdio: 'pipe' }); }
  } catch (e) {
    problems.push(`JS 문법 오류: ${(e.stderr || e.stdout || e.message || '').toString().split('\n').slice(0, 3).join(' ')}`);
  }
}

console.log(problems.length ? '[validate] FAIL —\n  • ' + problems.join('\n  • ') : '[validate] PASS — 검증 통과');
process.exit(0); // 항상 0: 게이트는 막지 않고 알려만 준다
