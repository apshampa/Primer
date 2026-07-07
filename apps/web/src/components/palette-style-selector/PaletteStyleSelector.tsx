import './palette-style-selector.css'
import Button from '../button/Button'
import { Dispatch, SetStateAction } from 'react'

import { CircleIcon } from '@phosphor-icons/react/dist/csr/Circle'
import { SquareIcon } from '@phosphor-icons/react/dist/csr/Square'
import { TriangleIcon } from '@phosphor-icons/react/dist/csr/Triangle'
import { DiamondIcon } from '@phosphor-icons/react/dist/csr/Diamond'
import { LinearGradientSVG } from '../LinearGradientSVG'

const paletteStyleOptions = [
  { key: 'square' as const, icon: SquareIcon, tooltip: 'Square — evenly distributed color relationships' },
  { key: 'triangle' as const, icon: TriangleIcon, tooltip: 'Triangle — triangular color harmony' },
  { key: 'circle' as const, icon: CircleIcon, tooltip: 'Circle — smooth circular blending' },
  { key: 'diamond' as const, icon: DiamondIcon, tooltip: 'Diamond — diamond-shaped color distribution' },
]

export function PaletteStyleSelector({
  paletteStyle,
  setPaletteStyle,
}: {
  paletteStyle: 'square' | 'triangle' | 'circle' | 'diamond'
  setPaletteStyle: Dispatch<SetStateAction<'square' | 'triangle' | 'circle' | 'diamond'>>
}) {
  return (
    <div className="palette-style-container">
      {paletteStyleOptions.map(style => {
        const Icon = style.icon
        return (
          <Button
            key={style.key}
            handler={() => setPaletteStyle(style.key)}
            active={paletteStyle === style.key}
            className="inverse"
            tooltip={style.tooltip}
          >
            <Icon size={18} weight="bold" fill={`url(#${style.key}-gradient)`}>
              <LinearGradientSVG id={`${style.key}-gradient`} />
            </Icon>
          </Button>
        )
      })}
    </div>
  )
}
