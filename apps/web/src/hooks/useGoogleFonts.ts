import { useCallback } from 'react'
import { FONT_DATABASE, FONT_CATEGORIES, FONT_MAP, type FontEntry } from '../data/fontDatabase'

export type FontData = FontEntry

/**
 * Returns the full local font database (no network request) and a function
 * to dynamically load a font from the Google Fonts CDN when needed.
 *
 * To refresh the font list, run:  node scripts/generate-font-db.mjs
 */
export function useGoogleFonts() {
  // Font data is always available synchronously from the static database
  const fonts = FONT_DATABASE
  const loading = false
  const error = null

  // Function to dynamically load a font via Google Fonts CDN
  const loadFont = useCallback((familyName: string, weights?: number[]) => {
    if (!familyName) return

    const fontId = `google-font-${familyName.replace(/\s+/g, '-').toLowerCase()}`

    // Check if it's already loaded
    if (document.getElementById(fontId)) return

    const link = document.createElement('link')
    link.id = fontId
    link.rel = 'stylesheet'

    // Load specified weights or default common weights
    const weightList = weights && weights.length > 0
      ? weights.join(';')
      : '400;500;600;700'

    link.href = `https://fonts.googleapis.com/css2?family=${familyName.replace(/\s+/g, '+')}:wght@${weightList}&display=swap`

    document.head.appendChild(link)
  }, [])

  return { fonts, loading, error, loadFont, categories: FONT_CATEGORIES, fontMap: FONT_MAP }
}
