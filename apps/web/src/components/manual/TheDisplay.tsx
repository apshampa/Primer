import { ManualHeader } from './ManualHeader'
import { Page } from './Page'

const id = 'the-display'
const title = 'The Display'

export function TheDisplayHeader() {
  return ManualHeader(id, title)
}

export function TheDisplay() {
  return (
    <Page id={id} title={title}>
      <p>
        The main canvas operates in three modes, controlled by the segmented switcher at the top. Each mode
        serves a different stage of the design workflow.
      </p>

      <h3>1. Palette Mode</h3>
      <p>
        The exploratory stage. Your base color is decomposed into a harmonious palette and visualized with
        four components:
      </p>
      <ul>
        <li><strong>Color Name & Palette Title</strong> — The base color's name (fetched from the Color Name API) and the generated palette title, animated with fade transitions.</li>
        <li><strong>Color Formats Grid</strong> — A compact 3×3 grid showing the base color in all eight formats (OKLCH, LCH, OKLAB, LAB, P3, HSL, RGB, HEX). Click any row to copy that format's value.</li>
        <li><strong>Color Wheel</strong> — An SVG polar plot where palette colors are positioned by hue angle and saturation radius. Colors animate smoothly between positions.</li>
        <li><strong>Vibrancy Bar</strong> — A full-width gradient interpolated across all palette colors in the active color space.</li>
        <li><strong>Status Chips</strong> — Pill badges showing the active palette type, variant, and effects state.</li>
      </ul>
      <p>
        The palette swatches below are interactive — click any swatch to copy its color value. Toggle "Details" in Tools
        to overlay color names and values on each swatch.
      </p>

      <h3>2. UI Tokens Mode</h3>
      <p>
        The systems stage. The palette is automatically expanded into ~40 semantic design tokens following
        Material Design 3 conventions:
      </p>
      <ul>
        <li><strong>Surface tokens</strong> — surface, on-surface, on-surface-variant</li>
        <li><strong>Container tokens</strong> — container, container-sunken, container-overlay</li>
        <li><strong>Accent families</strong> — primary, on-primary, primary-container, on-primary-container (repeated for secondary and tertiary)</li>
        <li><strong>Status families</strong> — error, success, warning (each with on-/container/on-container variants)</li>
        <li><strong>Structural tokens</strong> — outline, outline-variant, inverse-surface, on-inverse-surface</li>
      </ul>
      <p>
        Tokens are displayed in a weighted grid where surface tokens span wider columns to communicate their
        semantic dominance. Click any token to copy its CSS value.
      </p>

      <h3>3. Mockups Mode</h3>
      <p>
        The validation stage. All generated tokens are injected as live CSS custom properties into three
        interactive mockup templates:
      </p>
      <ul>
        <li><strong>Landing Page</strong> — Navigation bar, hero section with CTAs, feature cards, social proof avatars, and a stats strip. Tests high-contrast, marketing layouts.</li>
        <li><strong>Dashboard</strong> — Sidebar navigation, stat cards with trend indicators, bar charts, and a data table with status pills. Tests information-dense, utility layouts.</li>
        <li><strong>Mobile App</strong> — iOS-style interface with Dynamic Island, status bar, message list, avatars, floating action button, and tab bar. Tests compact, touch-oriented layouts.</li>
      </ul>
      <p>
        All mockups respond in real-time to color changes, effect adjustments, font selections, and typography tuning.
        Typography settings (heading font, body font, letter spacing, line height, kerning, ligatures) are applied
        directly to the mockup templates.
      </p>
    </Page>
  )
}
