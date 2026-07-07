import { RewindIcon } from '@phosphor-icons/react/dist/csr/Rewind'
import { InfoIcon } from '@phosphor-icons/react/dist/csr/Info'
import { MoonStarsIcon } from '@phosphor-icons/react/dist/csr/MoonStars'
import { SunIcon } from '@phosphor-icons/react/dist/csr/Sun'
import Button from '../button/Button'
import './palette-tool-selector.css'
import { LinearGradientSVG } from '../LinearGradientSVG'

export function PaletteToolSelector({
  showPaletteColors,
  setShowPaletteColors,
  isDarkMode,
  toggleDarkMode,
  showColorHistory,
  setShowColorHistory,
}: {
  showPaletteColors: boolean
  setShowPaletteColors: React.Dispatch<React.SetStateAction<boolean>>
  isDarkMode: boolean
  toggleDarkMode: () => void
  showColorHistory: boolean
  setShowColorHistory: React.Dispatch<React.SetStateAction<boolean>>
}) {

  return (
    <div className="palette-tool-container">
      <Button
        handler={() => {
          setShowPaletteColors(!showPaletteColors)
          setShowColorHistory(false)
        }}
        active={showPaletteColors}
        tooltip="Show detailed color information for each swatch"
      >
        <span className="flex gap-02 align-center">
          <InfoIcon size={16} /> Details
        </span>
      </Button>
      <Button
        handler={() => {
          setShowPaletteColors(false)
          setShowColorHistory(!showColorHistory)
        }}
        active={showColorHistory}
        tooltip="Browse your recently used colors"
      >
        <span className="flex gap-02 align-center">
          <RewindIcon size={16} /> History
        </span>
      </Button>
      <Button
        handler={toggleDarkMode}
        active={isDarkMode}
        tooltip={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
      >
        <span className="flex gap-02 align-center">
          {isDarkMode ? <SunIcon size={16} /> : <MoonStarsIcon size={16} />}
          Theme
        </span>
      </Button>
    </div>
  )
}
