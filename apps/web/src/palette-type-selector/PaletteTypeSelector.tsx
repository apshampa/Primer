import './palette-type-selector.css'
import { PaletteKinds } from '@royalfig/color-palette-pro'
import Button from '../components/button/Button'

const paletteTypeOptions = [
  { key: 'ana' as const, label: 'ANA', tooltip: 'Analogous — colors adjacent on the color wheel for harmony' },
  { key: 'com' as const, label: 'COM', tooltip: 'Complementary — opposite colors on the wheel for high contrast' },
  { key: 'spl' as const, label: 'SPL', tooltip: 'Split Complementary — a color plus two adjacent to its complement' },
  { key: 'tri' as const, label: 'TRI', tooltip: 'Triadic — three evenly spaced colors on the wheel' },
  { key: 'tet' as const, label: 'TET', tooltip: 'Tetradic — four colors forming a rectangle on the wheel' },
  { key: 'tas' as const, label: 'TAS', tooltip: 'Tints & Shades — lighter and darker variations of one color' },
]

export function PaletteTypeSelector({
  paletteType,
  setPaletteType,
}: {
  paletteType: PaletteKinds
  setPaletteType: Function
}) {
  return (
    <div className="palette-type-container">
      <div className="color-space-selector-header">
        <div className="divider"></div>
        <p>Palette Type</p>
        <div className="divider"></div>
      </div>
      <div className="palette-type-buttons">
        {paletteTypeOptions.map(option => (
          <Button
            key={option.key}
            handler={() => setPaletteType(option.key)}
            active={paletteType === option.key}
            tooltip={option.tooltip}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
