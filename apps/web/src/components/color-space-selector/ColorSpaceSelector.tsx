import { ColorSpace, ColorFormat } from 'primer'
import Button from '../button/Button'
import './color-space-selector.css'

type ColorSpaceOption = {
  label: string
  space: ColorSpace
  format: ColorFormat
  tooltip: string
}

const COLOR_SPACE_OPTIONS: ColorSpaceOption[] = [
  { label: 'OKLCH', space: 'oklch', format: 'oklch', tooltip: 'Perceptually uniform lightness, chroma, hue — best for design' },
  { label: 'LCH', space: 'lch', format: 'lch', tooltip: 'CIE Lightness, Chroma, Hue — wide gamut perceptual space' },
  { label: 'OKLAB', space: 'oklab', format: 'oklab', tooltip: 'Perceptually uniform lightness, green-red, blue-yellow' },
  { label: 'LAB', space: 'lab', format: 'lab', tooltip: 'CIE L*a*b* — device-independent color representation' },
  { label: 'P3', space: 'p3', format: 'p3', tooltip: 'Display P3 — wider gamut used on Apple devices' },
  { label: 'HSL', space: 'hsl', format: 'hsl', tooltip: 'Hue, Saturation, Lightness — intuitive but not perceptually uniform' },
  { label: 'RGB', space: 'srgb', format: 'rgb', tooltip: 'Red, Green, Blue — standard web color model' },
  { label: 'HEX', space: 'srgb', format: 'hex', tooltip: 'Hexadecimal notation (#rrggbb) — most common on the web' },
]

export function ColorSpaceSelector({
  colorSpace,
  setColorSpace,
}: {
  colorSpace: { space: ColorSpace; format: ColorFormat }
  setColorSpace: (colorSpace: { space: ColorSpace; format: ColorFormat }) => void
}) {
  return (
    <div className="color-space-selector">
      <div className="color-space-selector-header">
        <div className="divider"></div>
        <p>Color Space</p>
        <div className="divider"></div>
      </div>
      <div className="color-space-selector-buttons">
        {COLOR_SPACE_OPTIONS.map(option => (
          <Button
            key={option.label}
            handler={() => setColorSpace({ space: option.space, format: option.format })}
            active={colorSpace.space === option.space && colorSpace.format === option.format}
            tooltip={option.tooltip}
          >
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
