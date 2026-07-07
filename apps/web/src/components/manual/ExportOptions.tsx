import { ManualHeader } from './ManualHeader'
import { Page } from './Page'

const id = 'export-options'
const title = 'Export & Utilities'

export function ExportOptionsHeader() {
  return ManualHeader(id, title)
}

export function ExportOptions() {
  return (
    <Page id={id} title={title}>
      <p>
        The export section contains six actions in a unified grid, covering both export workflows and
        utility functions.
      </p>

      <h3>1. Image Export (PNG)</h3>
      <p>
        Generates a high-quality 1920px PNG image of your palette:
      </p>
      <ul>
        <li>Includes palette name, base color, and timestamp</li>
        <li>Shows color names and values on each swatch</li>
        <li>In UI Tokens mode, shows semantic variable names</li>
        <li>In Mockups mode, exports the code theme key colors</li>
      </ul>
      <p>Ideal for sharing in design tools like Figma, or for documentation.</p>

      <h3>2. File Download (CSS / JSON)</h3>
      <p>
        Downloads your palette as a production-ready file:
      </p>
      <ul>
        <li><strong>Palette mode:</strong> A <code>.css</code> file with CSS custom properties using sequential naming (--ana-1, --ana-2)</li>
        <li><strong>UI Tokens mode:</strong> A <code>.css</code> file with the full semantic token system (--primary, --on-primary, --surface, --error, etc.) wrapped in <code>:root</code></li>
        <li><strong>Mockups mode:</strong> A <code>.json</code> file with a complete VS Code–compatible code editor theme</li>
      </ul>

      <h3>3. Copy to Clipboard</h3>
      <p>
        Copies the same output as file download, but directly to your clipboard. Ready to paste into
        your stylesheet or theme file.
      </p>

      <h3>4. Share Link</h3>
      <p>
        Copies a shareable URL that encodes your entire palette state: base color, palette type, style,
        effects values, and active mode. Anyone opening the link sees the exact same palette.
      </p>

      <h3>5. Shuffle (Random)</h3>
      <p>
        Generates a random base color from a curated selection of aesthetically pleasing colors,
        instantly updating the entire palette. Great for exploration and inspiration.
      </p>

      <h3>6. Help (Manual)</h3>
      <p>
        Opens this manual in a new window. But you probably already knew that.
      </p>
    </Page>
  )
}
