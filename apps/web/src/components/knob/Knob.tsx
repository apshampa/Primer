import { useState, useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { CaretUpIcon } from '@phosphor-icons/react/dist/csr/CaretUp'
import { CaretDownIcon } from '@phosphor-icons/react/dist/csr/CaretDown'
import './knob.css'
import '../hue-slider/slider.css'

const effectConfigs = [
  {
    name: 'Vibrance',
    tooltip: 'Increases saturation of muted colors while preserving already-vivid ones',
    defaultValue: 0,
  },
  {
    name: 'Warmth',
    tooltip: 'Shifts the palette hue toward warmer (amber) or cooler (blue) tones',
    defaultValue: 0,
  },
  {
    name: 'Contrast',
    tooltip: 'Expands the lightness range between the lightest and darkest colors',
    defaultValue: 0,
  },
  {
    name: 'Blend',
    tooltip: 'Mixes palette colors toward a common midpoint for more harmonious results',
    defaultValue: 0,
  },
]

type KnobProps = {
  initialValues: number[]
  onChange: (values: number[]) => void
}

export function Knob({ initialValues, onChange }: KnobProps) {
  const [values, setValues] = useState(initialValues)
  const [isExpanded, setIsExpanded] = useState(false)

  const debouncedOnChange = useDebouncedCallback((vals: number[]) => {
    onChange(vals)
  }, 100)

  useEffect(() => {
    debouncedOnChange(values)
  }, [values, debouncedOnChange])

  const handleChange = (idx: number, newValue: number) => {
    setValues(prev => prev.map((v, i) => (i === idx ? newValue : v)))
  }

  const handleDoubleClick = (idx: number) => {
    setValues(prev => prev.map((v, i) => (i === idx ? effectConfigs[idx].defaultValue : v)))
  }

  const hasEffects = values.some(v => v > 0)

  return (
    <div className="effects-section-wrapper">
      <div 
        className="effects-header"
        onClick={() => setIsExpanded(!isExpanded)}
        title={hasEffects ? 'Effects are currently active' : 'Click to enable or adjust effects'}
      >
        <label className="toggle-switch" onClick={(e) => e.stopPropagation()}>
          <input
            type="checkbox"
            checked={isExpanded}
            onChange={(e) => setIsExpanded(e.target.checked)}
          />
          <span className="toggle-slider"></span>
        </label>
        <span className="effects-toggle-label flex align-center gap-02">
          {hasEffects && <span className="effects-active-dot" style={{ position: 'relative', top: '1px' }} />}
          Effects
        </span>
      </div>

      {isExpanded && (
        <div className="effects-list">
          {effectConfigs.map((effect, idx) => {
            const value = values[idx]
            return (
              <div className="slider plain-slider" key={idx}>
                <div className="flex" style={{ justifyContent: 'space-between', alignItems: 'flex-end', width: '100%', marginBottom: '4px' }}>
                  <label htmlFor={`effect-slider-${idx}`} title={effect.tooltip} style={{ marginBottom: 0 }}>
                    {effect.name} <span className="effect-tooltip-icon">?</span>
                  </label>
                  <div className="slider-inputs">
                    <button onClick={() => handleChange(idx, Math.min(100, value + 1))}>
                      <CaretUpIcon weight="fill" size={16} />
                    </button>
                    <input
                      id={`effect-input-${idx}`}
                      type="text"
                      value={value}
                      onChange={e => handleChange(idx, parseInt(e.target.value) || 0)}
                    />
                    <button onClick={() => handleChange(idx, Math.max(0, value - 1))}>
                      <CaretDownIcon weight="fill" size={16} />
                    </button>
                  </div>
                </div>
                <input
                  id={`effect-slider-${idx}`}
                  type="range"
                  min={0}
                  max={100}
                  value={value}
                  onChange={e => handleChange(idx, parseInt(e.target.value) || 0)}
                  onDoubleClick={() => handleDoubleClick(idx)}
                />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
