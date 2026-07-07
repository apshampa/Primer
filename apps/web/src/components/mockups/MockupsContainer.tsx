import { useState, useContext } from 'react'
import { BaseColorData } from '@royalfig/color-palette-pro'
import { ColorContext } from '../ColorContext'
import { BrowserChrome } from './BrowserChrome'
import { LandingPageMockup } from './LandingPageMockup'
import { DashboardMockup } from './DashboardMockup'
import { MobileAppMockup } from './MobileAppMockup'
import './Mockups.css'

export function MockupsContainer({ palette }: { palette: BaseColorData[] }) {
  const { primaryFont, secondaryFont, typography } = useContext(ColorContext)
  const [activeTab, setActiveTab] = useState<'landing' | 'dashboard' | 'mobile'>('landing')

  const cssVars = {
    '--font-heading': `"${primaryFont}", sans-serif`,
    '--font-body': `"${secondaryFont}", sans-serif`,
    '--typo-letter-spacing': `${typography.letterSpacing}em`,
    '--typo-line-height': `${typography.lineHeight}`,
    '--typo-kerning': typography.fontKerning,
    '--typo-features': typography.fontFeatureLigatures ? '"liga" 1, "calt" 1' : '"liga" 0, "calt" 0',
  } as React.CSSProperties

  palette.forEach(c => {
    // Map each token code (e.g. 'surface') to a CSS variable (e.g. '--surface')
    (cssVars as any)[`--${c.code}`] = c.cssValue;
    // Map text colors
    (cssVars as any)[`--on-${c.code}`] = c.contrast;
  })

  return (
    <div className="mockups-container" style={cssVars}>
      <div className="mockups-tabs">
        <button className={activeTab === 'landing' ? 'active' : ''} onClick={() => setActiveTab('landing')}>Landing Page</button>
        <button className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>Dashboard</button>
        <button className={activeTab === 'mobile' ? 'active' : ''} onClick={() => setActiveTab('mobile')}>Mobile App</button>
      </div>

      <div className="mockups-content">
        {activeTab === 'landing' && (
          <BrowserChrome url="https://acmecorp.com">
            <LandingPageMockup palette={palette} />
          </BrowserChrome>
        )}
        {activeTab === 'dashboard' && (
          <BrowserChrome url="https://app.platformos.io/dashboard">
            <DashboardMockup palette={palette} />
          </BrowserChrome>
        )}
        {activeTab === 'mobile' && <MobileAppMockup palette={palette} />}
      </div>
    </div>
  )
}
