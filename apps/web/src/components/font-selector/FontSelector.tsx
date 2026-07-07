import { useContext, useState, useMemo, useRef, useEffect, useCallback } from 'react'
import { FixedSizeList as List } from 'react-window'
import { ColorContext, type TypographySettings } from '../ColorContext'
import { useGoogleFonts } from '../../hooks/useGoogleFonts'
import type { FontEntry } from '../../data/fontDatabase'
import { CaretUpIcon } from '@phosphor-icons/react/dist/csr/CaretUp'
import { CaretDownIcon } from '@phosphor-icons/react/dist/csr/CaretDown'
import './FontSelector.css'
import '../hue-slider/slider.css'

const CATEGORY_LABELS: Record<string, string> = {
  'sans-serif': 'Sans',
  serif: 'Serif',
  display: 'Display',
  handwriting: 'Script',
  monospace: 'Mono',
}

/**
 * A single font item row for the virtualized list.
 */
function FontRow({ index, style, data }: {
  index: number
  style: React.CSSProperties
  data: {
    fonts: FontEntry[]
    selectedFont: string
    onSelect: (family: string) => void
    loadFont: (name: string, weights?: number[]) => void
  }
}) {
  const font = data.fonts[index]
  const isActive = font.family === data.selectedFont

  // loadFont handles caching and injecting the CSS link if not already loaded
  useEffect(() => {
    data.loadFont(font.family, [400])
  }, [font.family, data])

  return (
    <li
      style={{ ...style, fontFamily: `"${font.family}", ${font.category}` }}
      onClick={() => data.onSelect(font.family)}
      className={isActive ? 'active' : ''}
    >
      <span className="font-item-name">{font.family}</span>
      <span className="font-item-category">{font.category}</span>
    </li>
  )
}

function FontDropdown({
  label,
  selectedFont,
  onFontChange,
  loadFont,
  fonts,
}: {
  label: string
  selectedFont: string
  onFontChange: (family: string) => void
  loadFont: (name: string, weights?: number[]) => void
  fonts: FontEntry[]
}) {
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const [category, setCategory] = useState<string | null>(null)
  const listRef = useRef<HTMLUListElement>(null)

  const filtered = useMemo(() => {
    let list = fonts
    if (category) {
      list = list.filter((f) => f.category === category)
    }
    if (search) {
      const q = search.toLowerCase()
      list = list.filter((f) => f.family.toLowerCase().includes(q))
    }
    return list
  }, [fonts, category, search])

  // Scroll to top when filters change
  useEffect(() => {
    // In a virtualized list, we could use a ref to the List and call scrollToItem(0)
    // but resetting search/category already naturally re-renders from the top.
  }, [category, search])

  return (
    <div className="font-selector-group">
      <label className="sidebar-section-label" style={{ border: 'none' }}>
        {label}
      </label>
      <div className="font-dropdown">
        <input
          type="text"
          className="font-search-input"
          placeholder="Search fonts…"
          value={open ? search : selectedFont}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => {
            setOpen(true)
            setSearch('')
          }}
          onBlur={() => setTimeout(() => setOpen(false), 200)}
        />
        {open && (
          <div className="font-dropdown-panel">
            {/* Category filter pills */}
            <div className="font-category-filters">
              <button
                className={`font-category-pill${category === null ? ' active' : ''}`}
                onMouseDown={(e) => {
                  e.preventDefault()
                  setCategory(null)
                }}
              >
                All
              </button>
              {Object.entries(CATEGORY_LABELS).map(([key, label]) => (
                <button
                  key={key}
                  className={`font-category-pill${category === key ? ' active' : ''}`}
                  onMouseDown={(e) => {
                    e.preventDefault()
                    setCategory(key)
                  }}
                >
                  {label}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="font-no-results">No fonts found</div>
            ) : (
              <List
                height={Math.min(280, filtered.length * 35)}
                itemCount={filtered.length}
                itemSize={35}
                width="100%"
                itemData={{
                  fonts: filtered,
                  selectedFont,
                  onSelect: (family: string) => {
                    onFontChange(family)
                    setOpen(false)
                  },
                  loadFont
                }}
                className="font-dropdown-list"
                innerElementType="ul"
              >
                {FontRow}
              </List>
            )}

            <div className="font-dropdown-count">
              {filtered.length} fonts
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function TypographySlider({
  label,
  value,
  min,
  max,
  step,
  unit,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  unit: string
  onChange: (v: number) => void
}) {
  return (
    <div className="slider plain-slider">
      <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'flex-end', width: '100%', marginBottom: '4px' }}>
        <label htmlFor={`typo-slider-${label.replace(/\s+/g, '-')}`} style={{ marginBottom: 0 }}>{label}</label>
        <div className="slider-inputs">
          <button onClick={() => onChange(Math.min(max, value + step))}>
            <CaretUpIcon weight="fill" size={16} />
          </button>
          <input
            id={`typo-input-${label.replace(/\s+/g, '-')}`}
            type="text"
            value={Number(value.toFixed(step < 1 ? 2 : 1))}
            onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          />
          <button onClick={() => onChange(Math.max(min, value - step))}>
            <CaretDownIcon weight="fill" size={16} />
          </button>
        </div>
      </div>
      <input
        id={`typo-slider-${label.replace(/\s+/g, '-')}`}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
      />
    </div>
  )
}

export function FontSelector() {
  const {
    primaryFont,
    setPrimaryFont,
    secondaryFont,
    setSecondaryFont,
    typography,
    setTypography,
  } = useContext(ColorContext)

  const { fonts, loadFont } = useGoogleFonts()

  const updateTypography = useCallback(
    (patch: Partial<TypographySettings>) => {
      setTypography({ ...typography, ...patch })
    },
    [typography, setTypography],
  )

  return (
    <div className="font-selector-container">
      {/* Font pickers */}
      <FontDropdown
        label="Headings Font"
        selectedFont={primaryFont}
        onFontChange={setPrimaryFont}
        loadFont={loadFont}
        fonts={fonts}
      />

      <FontDropdown
        label="Body Font"
        selectedFont={secondaryFont}
        onFontChange={setSecondaryFont}
        loadFont={loadFont}
        fonts={fonts}
      />

      {/* Typography settings */}
      <div className="typo-settings">
        <div className="sidebar-section-label" style={{ border: 'none', marginTop: '0.75rem' }}>
          Typography Settings
        </div>

        <TypographySlider
          label="Letter Spacing"
          value={typography.letterSpacing}
          min={-0.1}
          max={0.3}
          step={0.01}
          unit="em"
          onChange={(v) => updateTypography({ letterSpacing: v })}
        />

        <TypographySlider
          label="Line Height"
          value={typography.lineHeight}
          min={1.0}
          max={2.5}
          step={0.05}
          unit="×"
          onChange={(v) => updateTypography({ lineHeight: v })}
        />

        <div className="typo-toggle-row">
          <label className="typo-slider-label">Kerning</label>
          <select
            className="typo-select"
            value={typography.fontKerning}
            onChange={(e) =>
              updateTypography({ fontKerning: e.target.value as 'auto' | 'normal' | 'none' })
            }
          >
            <option value="auto">Auto</option>
            <option value="normal">Normal</option>
            <option value="none">None</option>
          </select>
        </div>

        <div className="typo-toggle-row">
          <label className="typo-slider-label">Ligatures</label>
          <button
            className={`typo-toggle-btn${typography.fontFeatureLigatures ? ' active' : ''}`}
            onClick={() => updateTypography({ fontFeatureLigatures: !typography.fontFeatureLigatures })}
          >
            {typography.fontFeatureLigatures ? 'On' : 'Off'}
          </button>
        </div>
      </div>

      {/* Live preview */}
      <div className="font-preview-panel">
        <div
          className="font-preview-heading"
          style={{
            fontFamily: `"${primaryFont}", sans-serif`,
            letterSpacing: `${typography.letterSpacing}em`,
            lineHeight: typography.lineHeight,
            fontKerning: typography.fontKerning,
            fontFeatureSettings: typography.fontFeatureLigatures ? '"liga" 1, "calt" 1' : '"liga" 0, "calt" 0',
          }}
        >
          The quick brown fox
        </div>
        <div
          className="font-preview-body"
          style={{
            fontFamily: `"${secondaryFont}", sans-serif`,
            letterSpacing: `${typography.letterSpacing}em`,
            lineHeight: typography.lineHeight,
            fontKerning: typography.fontKerning,
            fontFeatureSettings: typography.fontFeatureLigatures ? '"liga" 1, "calt" 1' : '"liga" 0, "calt" 0',
          }}
        >
          jumps over the lazy dog. Typography is the art and technique of arranging type to make written language legible.
        </div>
      </div>
    </div>
  )
}
