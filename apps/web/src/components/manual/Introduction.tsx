import { ManualHeader } from './ManualHeader'
import { Page } from './Page'

const id = 'introduction'
const title = 'Introduction'

export function IntroductionHeader() {
  return ManualHeader(id, title)
}

export function Introduction() {
  return (
    <Page id={id} title="Introduction">
      <p>
        Primer is a design token synthesizer. It takes a single base color and generates an entire visual
        system — harmonious palettes, semantic tokens, and contextual mockups — using perceptual color science.
      </p>
      <p>
        The tool is built on OKLCH, a perceptually uniform color space where equal numerical changes produce
        equal perceived changes. This means a palette generated in Primer will look balanced and intentional,
        not mathematically rigid.
      </p>
      <p>
        But no tool replaces a trained eye. Primer gives you the raw material — palettes, tokens, mockup
        previews — and the controls to refine them. The aesthetic judgement is yours.
      </p>
      <p>
        The interface is split into two zones: the <strong>Sidebar</strong> (where you control everything)
        and the <strong>Canvas</strong> (where you see the results). The sidebar has two tabs — Color and
        Typography — so you can shape both pillars of visual identity from one place.
      </p>
    </Page>
  )
}
