// Generates images/preview.svg — a VS Code window mockup rendered with the
// exact Clowk palette. Run: node scripts/generate-preview.mjs
// Then rasterize: rsvg-convert -w 1280 images/preview.svg -o images/preview.png

import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

const C = {
  winBg: '#0f0e17',
  chrome: '#0a0914',
  panel: '#0c0b14',
  border: '#1e1b3a',
  accent: '#c2a6e2',
  purple: '#7c3aed',
  kw: '#c2a6e2',
  str: '#6ec89e',
  com: '#4a4680',
  type: '#22d3ee',
  fn: '#a78bfa',
  op: '#22d3ee',
  punc: '#6e6a86',
  num: '#fbbf24',
  cnst: '#e0a5c5',
  fg: '#e0def4',
  mod: '#7aafe0',
  yellow: '#fbbf24',
  red: '#f87171',
  green: '#6ec89e',
  ln: '#393552',
  lnA: '#a78bfa',
  muted: '#908caa',
  dim: '#6e6a86',
}

const s = (t, c, i = false) => ({ t, c, i })

const code = [
  [s('import', C.kw, true), s(' ', C.fg), s('{ ', C.punc), s('useMemo', C.fg), s(' }', C.punc), s(' ', C.fg), s('from', C.kw, true), s(' ', C.fg), s("'react'", C.str)],
  [],
  [s('// Clowk — a cosmic dark theme for VS Code & Cursor', C.com, true)],
  [s('interface', C.kw, true), s(' ', C.fg), s('Star', C.type), s(' ', C.fg), s('{', C.punc)],
  [s('  name', C.fg), s(': ', C.punc), s('string', C.type)],
  [s('  magnitude', C.fg), s(': ', C.punc), s('number', C.type)],
  [s('  visible', C.fg), s(': ', C.punc), s('boolean', C.type)],
  [s('}', C.punc)],
  [],
  [s('export', C.kw, true), s(' ', C.fg), s('function', C.kw, true), s(' ', C.fg), s('brightest', C.fn), s('(', C.punc), s('stars', C.fg, true), s(': ', C.punc), s('Star', C.type), s('[]', C.punc), s(')', C.punc), s(': ', C.punc), s('Star', C.type), s(' ', C.fg), s('{', C.punc)],
  [s('  return', C.kw), s(' ', C.fg), s('stars', C.fg)],
  [s('    .', C.punc), s('filter', C.fn), s('(', C.punc), s('(', C.punc), s('s', C.fg, true), s(') ', C.punc), s('=>', C.kw), s(' ', C.fg), s('s', C.fg, true), s('.', C.punc), s('visible', C.fg), s(')', C.punc)],
  [s('    .', C.punc), s('sort', C.fn), s('(', C.punc), s('(', C.punc), s('a', C.fg, true), s(', ', C.punc), s('b', C.fg, true), s(') ', C.punc), s('=>', C.kw), s(' ', C.fg), s('a', C.fg, true), s('.', C.punc), s('magnitude', C.fg), s(' ', C.fg), s('-', C.op), s(' ', C.fg), s('b', C.fg, true), s('.', C.punc), s('magnitude', C.fg), s(')', C.punc), s('[', C.punc), s('0', C.num), s(']', C.punc)],
  [s('}', C.punc)],
  [],
  [s('const', C.kw, true), s(' ', C.fg), s('galaxy', C.fg), s(': ', C.punc), s('Star', C.type), s('[]', C.punc), s(' ', C.fg), s('=', C.op), s(' ', C.fg), s('[', C.punc)],
  [s('  { ', C.punc), s('name', C.fg), s(': ', C.punc), s("'Vega'", C.str), s(', ', C.punc), s('magnitude', C.fg), s(': ', C.punc), s('0.03', C.num), s(', ', C.punc), s('visible', C.fg), s(': ', C.punc), s('true', C.cnst), s(' }', C.punc), s(',', C.punc)],
  [s('  { ', C.punc), s('name', C.fg), s(': ', C.punc), s("'Sirius'", C.str), s(', ', C.punc), s('magnitude', C.fg), s(': ', C.punc), s('-1.46', C.num), s(', ', C.punc), s('visible', C.fg), s(': ', C.punc), s('true', C.cnst), s(' }', C.punc), s(',', C.punc)],
  [s(']', C.punc)],
  [],
  [s('console', C.fg), s('.', C.punc), s('log', C.fn), s('(', C.punc), s('`✨ ', C.str), s('${', C.kw), s('brightest', C.fn), s('(', C.punc), s('galaxy', C.fg), s(')', C.punc), s('.', C.punc), s('name', C.fg), s('}', C.kw), s('`', C.str), s(')', C.punc)],
]

const tree = [
  { label: 'CLOWK', indent: 0, color: '#ffffffe6', folder: 'open', bold: true },
  { label: '.github', indent: 1, color: C.dim, folder: 'closed' },
  { label: 'src', indent: 1, color: C.muted, folder: 'open' },
  { label: 'brightest.ts', indent: 2, color: C.fg, icon: C.mod, active: true },
  { label: 'themes', indent: 1, color: C.muted, folder: 'open' },
  { label: 'clowk-night-color-theme.json', indent: 2, color: C.muted, icon: C.yellow },
  { label: 'CHANGELOG.md', indent: 1, color: C.muted, icon: C.accent },
  { label: 'LICENSE', indent: 1, color: C.muted, icon: C.dim },
  { label: 'package.json', indent: 1, color: C.yellow, icon: C.yellow },
  { label: 'README.md', indent: 1, color: C.muted, icon: C.accent },
]

const esc = (t) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const W = 1280
const H = 820
const win = { x: 24, y: 24, w: 1232, h: 772, r: 12 }
const titleH = 38
const statusH = 28
const actW = 48
const sideW = 220
const tabH = 36

const contentTop = win.y + titleH
const contentBottom = win.y + win.h - statusH
const actX = win.x
const sideX = actX + actW
const edX = sideX + sideW
const edRight = win.x + win.w

const out = []
const p = (line) => out.push(line)

p(`<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" font-family="'SF Mono','Menlo','Monaco','DejaVu Sans Mono',monospace">`)
p('<defs>')
p('<filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="18" stdDeviation="28" flood-color="#000000" flood-opacity="0.55"/></filter>')
p(`<clipPath id="win"><rect x="${win.x}" y="${win.y}" width="${win.w}" height="${win.h}" rx="${win.r}"/></clipPath>`)
p(`<linearGradient id="page" x1="0" y1="0" x2="${W}" y2="${H}" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#15102b"/><stop offset="1" stop-color="#080611"/></linearGradient>`)
p('</defs>')

p(`<rect width="${W}" height="${H}" fill="url(#page)"/>`)

p(`<g filter="url(#shadow)"><rect x="${win.x}" y="${win.y}" width="${win.w}" height="${win.h}" rx="${win.r}" fill="${C.winBg}"/></g>`)
p(`<g clip-path="url(#win)">`)

p(`<rect x="${win.x}" y="${win.y}" width="${win.w}" height="${titleH}" fill="${C.chrome}"/>`)
const ty = win.y + titleH / 2 + 1
p(`<circle cx="${win.x + 22}" cy="${ty}" r="6" fill="#f87171"/>`)
p(`<circle cx="${win.x + 42}" cy="${ty}" r="6" fill="#fbbf24"/>`)
p(`<circle cx="${win.x + 62}" cy="${ty}" r="6" fill="#6ec89e"/>`)
p(`<text x="${win.x + win.w / 2}" y="${ty + 4}" font-size="12.5" fill="${C.muted}" text-anchor="middle">brightest.ts — Clowk</text>`)

p(`<rect x="${actX}" y="${contentTop}" width="${actW}" height="${contentBottom - contentTop}" fill="${C.chrome}"/>`)
const icons = [
  'M0 0h14v18H0z M0 4h14',
  'M2 2a5 5 0 1 0 7 7 5 5 0 0 0-7-7z M9 9l5 5',
  'M3 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z M3 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4z M12 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z M5 4h5a2 2 0 0 1 2 2v0 M3 6v6',
  'M3 2l11 7-11 7z',
  'M1 1h6v6H1z M9 1h6v6H9z M1 9h6v6H1z M9 9h6v6H9z',
]
icons.forEach((d, i) => {
  const cy = contentTop + 28 + i * 44
  const active = i === 0
  if (active) p(`<rect x="${actX}" y="${cy - 14}" width="2" height="28" fill="${C.accent}"/>`)
  p(`<g transform="translate(${actX + actW / 2 - 8}, ${cy - 9})" fill="none" stroke="${active ? C.accent : '#4a4662'}" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"><path d="${d}"/></g>`)
})

p(`<rect x="${sideX}" y="${contentTop}" width="${sideW}" height="${contentBottom - contentTop}" fill="${C.winBg}"/>`)
p(`<rect x="${sideX}" y="${contentTop}" width="${sideW}" height="26" fill="${C.chrome}"/>`)
p(`<text x="${sideX + 16}" y="${contentTop + 17}" font-size="10.5" letter-spacing="1.2" fill="#ffffffe6">EXPLORER</text>`)
const treeTop = contentTop + 26
tree.forEach((it, i) => {
  const rowY = treeTop + i * 24
  const tx = sideX + 14 + it.indent * 14
  if (it.active) p(`<rect x="${sideX}" y="${rowY}" width="${sideW}" height="24" fill="#7c3aed33"/>`)
  const baseY = rowY + 16
  if (it.folder) {
    p(`<path d="M${tx} ${baseY - 6} l4 3 -4 3z" fill="${C.dim}" transform="${it.folder === 'open' ? `rotate(90 ${tx + 2} ${baseY - 3})` : ''}"/>`)
    p(`<text x="${tx + 12}" y="${baseY}" font-size="12.5" fill="${it.color}"${it.bold ? ' font-weight="600" letter-spacing="0.4"' : ''}>${esc(it.label)}</text>`)
  } else {
    p(`<rect x="${tx + 1}" y="${baseY - 9}" width="9" height="11" rx="1.5" fill="none" stroke="${it.icon}" stroke-width="1.3"/>`)
    p(`<text x="${tx + 16}" y="${baseY}" font-size="12.5" fill="${it.color}">${esc(it.label)}</text>`)
  }
})

p(`<rect x="${edX}" y="${contentTop}" width="${edRight - edX}" height="${contentBottom - contentTop}" fill="${C.winBg}"/>`)
p(`<rect x="${edX}" y="${contentTop}" width="${edRight - edX}" height="${tabH}" fill="${C.panel}"/>`)
p(`<rect x="${edX}" y="${contentTop}" width="170" height="${tabH}" fill="${C.winBg}"/>`)
p(`<rect x="${edX}" y="${contentTop}" width="170" height="2" fill="${C.accent}"/>`)
p(`<rect x="${edX + 16}" y="${contentTop + tabH / 2 - 5}" width="9" height="11" rx="1.5" fill="none" stroke="${C.mod}" stroke-width="1.3"/>`)
p(`<text x="${edX + 34}" y="${contentTop + tabH / 2 + 4}" font-size="12.5" fill="${C.fg}">brightest.ts</text>`)
p(`<text x="${edX + 142}" y="${contentTop + tabH / 2 + 4}" font-size="13" fill="${C.muted}">×</text>`)
p(`<text x="${edX + 196}" y="${contentTop + tabH / 2 + 4}" font-size="12.5" fill="${C.dim}">package.json</text>`)

const codeTop = contentTop + tabH
const gutterW = 52
const lineH = 26
const fontSize = 14.5
const codeX = edX + gutterW + 16
let y = codeTop + 26
code.forEach((segs, i) => {
  const num = i + 1
  const isActive = num === 21
  if (isActive) p(`<rect x="${edX}" y="${y - 18}" width="${edRight - edX}" height="${lineH}" fill="none" stroke="${C.border}" stroke-width="1"/>`)
  p(`<text x="${edX + gutterW - 10}" y="${y}" font-size="${fontSize}" fill="${isActive ? C.lnA : C.ln}" text-anchor="end">${num}</text>`)
  if (segs.length) {
    const spans = segs.map((seg) => `<tspan fill="${seg.c}"${seg.i ? ' font-style="italic"' : ''}>${esc(seg.t)}</tspan>`).join('')
    p(`<text x="${codeX}" y="${y}" font-size="${fontSize}" xml:space="preserve">${spans}</text>`)
  }

  y += lineH
})

p(`<rect x="${win.x}" y="${contentBottom}" width="${win.w}" height="${statusH}" fill="${C.chrome}"/>`)
const sy = contentBottom + statusH / 2 + 4
p(`<rect x="${win.x}" y="${contentBottom}" width="118" height="${statusH}" fill="${C.purple}"/>`)
p(`<text x="${win.x + 16}" y="${sy}" font-size="11.5" fill="#ffffff">⎇ main</text>`)
p(`<text x="${win.x + 76}" y="${sy}" font-size="11.5" fill="#ffffff">✦</text>`)
p(`<text x="${edRight - 360}" y="${sy}" font-size="11.5" fill="${C.muted}">Ln 21, Col 30</text>`)
p(`<text x="${edRight - 250}" y="${sy}" font-size="11.5" fill="${C.muted}">UTF-8</text>`)
p(`<text x="${edRight - 195}" y="${sy}" font-size="11.5" fill="${C.muted}">TypeScript</text>`)
p(`<text x="${edRight - 16}" y="${sy}" font-size="11.5" fill="${C.accent}" text-anchor="end">✦ Clowk Night</text>`)

p('</g>')
p('</svg>')

writeFileSync(join(root, 'images', 'preview.svg'), out.join('\n'))
console.error('wrote images/preview.svg')
