import { ColorSpaceSelector, ColorSpaceSelectorHeader } from './ColorSpaceSelector'
import { Introduction, IntroductionHeader } from './Introduction'
import './manual.css'
import { Page } from './Page'
import { TheDisplay, TheDisplayHeader } from './TheDisplay'
import { PaletteStyleSelector, PaletteStyleSelectorHeader } from './PaletteStyleSelector'
import { PaletteTypeSelector, PaletteTypeSelectorHeader } from './PaletteTypeSelector'
import { ColorInputModule, ColorInputModuleHeader } from './ColorInputModule'
import { SliderModule, SliderModuleHeader } from './SliderModule'
import { DisplayInfoPanel, DisplayInfoPanelHeader } from './DisplayInfoPanel'
import { Knobs, KnobsHeader } from './Knobs'
import { PaletteTools, PaletteToolsHeader } from './PaletteTools'
import { ExportOptions, ExportOptionsHeader } from './ExportOptions'

export default function Manual() {
  return (
    <div className="manual-container">
      <div className="page-container">
        <header>
          <h1 className="brand" style={{ fontFamily: "'Fraunces', serif", fontStyle: 'italic', fontWeight: 500, letterSpacing: '-0.02em', fontSize: '1.6rem' }}>
            Primer
          </h1>
          <p style={{ marginTop: '0.25rem', fontSize: '0.85rem', opacity: 0.6 }}>Design Token Synthesizer & Mockup Engine</p>
          <div className="manual-divider"></div>
        </header>

        <p>
          Primer generates production-ready color systems from a single base color. It creates harmonious palettes
          using perceptual color science (OKLCH), maps them to semantic design tokens, pairs them with typography,
          and previews everything in live UI mockups — landing pages, dashboards, and mobile apps.
        </p>

        <p>
          6 palette algorithms · 4 geometric variants · 8 color spaces · 4 post-processing effects · ~40 semantic tokens · 3 live mockup templates · full typography controls.
        </p>
      </div>

      <Page id="table-of-contents" title="Table of Contents">
        <ol>
          <IntroductionHeader />
          <TheDisplayHeader />
          <ColorSpaceSelectorHeader />
          <PaletteTypeSelectorHeader />
          <PaletteStyleSelectorHeader />
          <ColorInputModuleHeader />
          <SliderModuleHeader />
          <KnobsHeader />
          <PaletteToolsHeader />
          <ExportOptionsHeader />
          <DisplayInfoPanelHeader />
        </ol>
      </Page>

      <Introduction />
      <TheDisplay />
      <ColorSpaceSelector />
      <PaletteTypeSelector />
      <PaletteStyleSelector />
      <ColorInputModule />
      <SliderModule />
      <Knobs />
      <PaletteTools />
      <ExportOptions />
      <DisplayInfoPanel />
    </div>
  )
}
