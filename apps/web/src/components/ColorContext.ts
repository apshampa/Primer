import { createContext } from 'react'
import { colorFactory, type BaseColorData } from '@royalfig/color-palette-pro'
import type { CodeThemeOutput } from '@royalfig/color-palette-pro'

export type TypographySettings = {
  letterSpacing: number    // em units, e.g. 0, 0.02, -0.01
  lineHeight: number       // multiplier, e.g. 1.5
  fontKerning: 'auto' | 'normal' | 'none'
  fontFeatureLigatures: boolean
}

export const DEFAULT_TYPOGRAPHY: TypographySettings = {
  letterSpacing: 0,
  lineHeight: 1.5,
  fontKerning: 'auto',
  fontFeatureLigatures: true,
}

type ColorContextType = {
  originalColor: BaseColorData
  palette: BaseColorData[]
  mode: 'palette' | 'ui' | 'mockups'
  codeTheme?: CodeThemeOutput
  isDarkMode: boolean
  primaryFont: string
  secondaryFont: string
  setPrimaryFont: (font: string) => void
  setSecondaryFont: (font: string) => void
  typography: TypographySettings
  setTypography: (settings: TypographySettings) => void
}

export const ColorContext = createContext<ColorContextType>({
  originalColor: colorFactory('red', 'base', 0, 'hex'), // dummy, will never be used
  palette: [],
  mode: 'palette',
  isDarkMode: false,
  primaryFont: 'Inter',
  secondaryFont: 'Roboto',
  setPrimaryFont: () => {},
  setSecondaryFont: () => {},
  typography: DEFAULT_TYPOGRAPHY,
  setTypography: () => {},
})
