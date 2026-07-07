import { BaseColorData } from '@royalfig/color-palette-pro'

export function LandingPageMockup({ palette }: { palette: BaseColorData[] }) {
  return (
    <div className="landing-mockup">
      {/* Navigation */}
      <div className="landing-nav">
        <div className="landing-nav-logo">
          <div className="landing-nav-logo-icon" />
          AcmeCorp
        </div>
        <div className="landing-nav-links">
          <span>Products</span>
          <span>Solutions</span>
          <span>Pricing</span>
          <span>Resources</span>
        </div>
        <div className="landing-nav-actions">
          <span className="landing-nav-link-dim">Log In</span>
          <button className="landing-btn small">Get Started</button>
        </div>
      </div>

      {/* Hero */}
      <div className="landing-hero">
        <div className="landing-hero-badge">✨ Now with AI-Powered Analytics</div>
        <h1>Transform Your Workflow</h1>
        <p>
          The ultimate tool to boost your productivity, streamline your design
          process, and help your team ship faster than ever before.
        </p>
        <div className="landing-hero-actions">
          <button className="landing-btn">Start for free →</button>
          <button className="landing-btn secondary">Request Demo</button>
        </div>
        <div className="landing-social-proof">
          <div className="landing-avatar-stack">
            <span className="landing-avatar" style={{ background: 'var(--primary)' }}>J</span>
            <span className="landing-avatar" style={{ background: 'var(--secondary)' }}>A</span>
            <span className="landing-avatar" style={{ background: 'var(--tertiary)' }}>M</span>
            <span className="landing-avatar" style={{ background: 'var(--error)' }}>K</span>
          </div>
          <span className="landing-social-text">
            Trusted by <strong>2,400+</strong> teams worldwide
          </span>
        </div>
      </div>

      {/* Feature cards */}
      <div className="landing-features-wrapper">
        <div className="landing-features">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Lightning Fast</h3>
            <p>
              Our optimized architecture ensures your data loads in
              milliseconds, keeping you in the flow.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛡️</div>
            <h3>Enterprise Security</h3>
            <p>
              Your data is protected with military-grade encryption and SOC2
              compliance out of the box.
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📈</div>
            <h3>Reliable Uptime</h3>
            <p>
              99.99% uptime guaranteed. We handle the infrastructure so you can
              focus on your business.
            </p>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="landing-stats-strip">
        <div className="landing-stat">
          <span className="landing-stat-value">99.9%</span>
          <span className="landing-stat-label">Uptime SLA</span>
        </div>
        <div className="landing-stat-divider" />
        <div className="landing-stat">
          <span className="landing-stat-value">2.4k+</span>
          <span className="landing-stat-label">Active Teams</span>
        </div>
        <div className="landing-stat-divider" />
        <div className="landing-stat">
          <span className="landing-stat-value">50M+</span>
          <span className="landing-stat-label">Tasks Completed</span>
        </div>
        <div className="landing-stat-divider" />
        <div className="landing-stat">
          <span className="landing-stat-value">4.9★</span>
          <span className="landing-stat-label">User Rating</span>
        </div>
      </div>
    </div>
  )
}
