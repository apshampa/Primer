import { motion } from 'motion/react'
import { memo, useContext } from 'react'
import { ColorContext } from '../ColorContext'
import './section-header.css'

const VibrancyModule = memo(function VibrancyModule() {
  const context = useContext(ColorContext)
  if (!context) return null

  const { originalColor, palette } = context
  const baseColor = originalColor

  const colors = palette.map(color => color.string)
  const linearGradient = `linear-gradient(to right in ${baseColor?.colorSpace}, ${colors.join(', ')})`

  return (
    <div className="vibrancy-module">
      <motion.div className="vibrancy-module-inner" animate={{ background: linearGradient }}></motion.div>
      <motion.div className="vibrancy-module-blur" animate={{ background: linearGradient }}></motion.div>
    </div>
  )
})

export function SectionHeader() {
  return (
    <div className="synth-brand">
      <h1 className="brand">
        Primer
      </h1>
      <a href="https://revanth.design" target="_blank" rel="noreferrer" className="author-link">
        by Revanth
      </a>
    </div>
  )
}

export function VibrancyBar() {
  return <VibrancyModule />
}
