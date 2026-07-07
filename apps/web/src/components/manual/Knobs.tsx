import { ManualHeader } from './ManualHeader'
import { Page } from './Page'

const id = 'knobs'
const title = 'Effects'

export function KnobsHeader() {
  return ManualHeader(id, title)
}

export function Knobs() {
  return (
    <Page id={id} title={title}>
      <p>
        The Effects panel provides four post-processing adjustments that modify the entire palette after generation.
        Toggle the panel on with the switch, then adjust each effect from 0 to 100 using the sliders.
      </p>

      <h3>Effect Controls</h3>
      <p>Each effect slider supports multiple interaction methods:</p>
      <ul>
        <li><strong>Drag the slider</strong> — Fluid adjustment across the full 0–100 range</li>
        <li><strong>Edit the value</strong> — Click the numeric input field and type an exact value</li>
        <li><strong>Increment/Decrement</strong> — Use the ▲▼ caret buttons for single-step adjustments</li>
        <li><strong>Double-click the slider</strong> — Reset to 0 (default)</li>
      </ul>

      <h3>The Four Effects</h3>

      <h4>1. Vibrance</h4>
      <p>
        Increases saturation of muted colors while preserving already-vivid ones. Unlike a flat saturation
        boost, Vibrance targets the least saturated colors in the palette, bringing them closer to the
        rest without oversaturating highlights.
      </p>

      <h4>2. Warmth</h4>
      <p>
        Shifts the palette hue toward warmer (amber) or cooler (blue) tones. Useful for giving a palette
        an overall warm or cool feeling without changing the underlying color relationships.
      </p>

      <h4>3. Contrast</h4>
      <p>
        Expands the lightness range between the lightest and darkest colors in the palette. Higher values
        push lights lighter and darks darker, increasing the overall dynamic range.
      </p>

      <h4>4. Blend</h4>
      <p>
        Mixes palette colors toward a common midpoint for more harmonious results. At higher values,
        colors converge toward a unified tone, reducing variety but increasing cohesion.
      </p>

      <h3>Status Indicator</h3>
      <p>
        When any effect value is above 0, a small green dot appears next to the "Effects" label in the sidebar,
        and the status chip in the hero section updates to "Effects On." This communicates active effects
        at a glance without opening the panel.
      </p>
    </Page>
  )
}
