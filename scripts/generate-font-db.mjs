#!/usr/bin/env node
/**
 * generate-font-db.mjs
 * 
 * Fetches the full Google Fonts list from the Fontsource API and writes
 * a static TypeScript file that the web app imports directly — no runtime
 * API calls needed.
 *
 * Usage:
 *   node scripts/generate-font-db.mjs
 *
 * Re-run this script whenever you want to refresh the font catalogue with
 * newly added Google Fonts.
 */

const API_URL = 'https://api.fontsource.org/v1/fonts'
const OUTPUT_PATH = new URL(
  '../apps/web/src/data/fontDatabase.ts',
  import.meta.url,
)

// Curated list of the most popular fonts to push to the top
const POPULAR_FONTS = [
  'Roboto',
  'Open Sans',
  'Inter',
  'Montserrat',
  'Lato',
  'Poppins',
  'Oswald',
  'Source Sans Pro',
  'Slabo 27px',
  'Raleway',
  'PT Sans',
  'Merriweather',
  'Noto Sans',
  'Nunito',
  'Playfair Display',
  'Ubuntu',
  'Rubik',
  'Lora',
  'Work Sans',
  'Fira Sans',
  'Quicksand',
  'Barlow',
  'Mulish',
  'Titillium Web',
  'PT Serif',
  'Heebo',
  'Noto Serif',
  'Libre Franklin',
  'Arimo',
  'Karla',
  'Josefin Sans',
  'Inconsolata',
  'Cabin',
  'DM Sans',
  'Dancing Script',
  'Source Code Pro',
  'Manrope',
  'Bitter',
  'Dosis',
  'Space Grotesk'
]

async function main() {
  console.log('⏳  Fetching fonts from Fontsource API…')
  const res = await fetch(API_URL)
  if (!res.ok) throw new Error(`API returned ${res.status}`)
  const raw = await res.json()

  // Filter to only Google Fonts (exclude icon fonts, non-latin, etc.)
  let fonts = raw
    .filter((f) => f.type === 'google' || !f.type) // fontsource marks type
    .map((f, index) => {
      // Find index in popular list, or assign a high number
      let popIndex = POPULAR_FONTS.indexOf(f.family)
      if (popIndex === -1) {
        popIndex = 1000 + index // non-popular keep their original relative sorting
      }
      return {
        family: f.family,
        id: f.id,
        category: f.category || 'sans-serif',
        weights: Array.isArray(f.weights) ? f.weights : [400],
        subsets: Array.isArray(f.subsets) ? f.subsets : ['latin'],
        popularity: popIndex,
      }
    })

  // Sort by popularity
  fonts.sort((a, b) => a.popularity - b.popularity)

  console.log(`✅  Fetched ${fonts.length} fonts`)

  // Build the TypeScript source
  const ts = `// AUTO-GENERATED — do not edit by hand.
// Re-generate with:  node scripts/generate-font-db.mjs
// Last updated: ${new Date().toISOString()}

export interface FontEntry {
  /** Font family name, e.g. "Inter" */
  family: string
  /** Fontsource ID, e.g. "inter" */
  id: string
  /** CSS generic family: sans-serif | serif | display | handwriting | monospace */
  category: string
  /** Available numeric weights, e.g. [100, 300, 400, 700] */
  weights: number[]
  /** Available subsets, e.g. ["latin", "latin-ext", "cyrillic"] */
  subsets: string[]
  /** Popularity rank (0 = most popular) */
  popularity: number
}

export const FONT_DATABASE: FontEntry[] = ${JSON.stringify(fonts, null, 2)} as const

/** All unique categories present in the database */
export const FONT_CATEGORIES = [...new Set(FONT_DATABASE.map(f => f.category))].sort() as string[]

/** Quick lookup map: family name → FontEntry */
export const FONT_MAP = new Map<string, FontEntry>(FONT_DATABASE.map(f => [f.family, f]))
`

  const { writeFileSync, mkdirSync } = await import('node:fs')
  const { dirname } = await import('node:path')
  const { fileURLToPath } = await import('node:url')

  const outPath = fileURLToPath(OUTPUT_PATH)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, ts, 'utf-8')

  console.log(`📦  Wrote ${fonts.length} fonts to ${outPath}`)
  console.log('🎉  Done!')
}

main().catch((err) => {
  console.error('❌  Failed:', err.message)
  process.exit(1)
})
