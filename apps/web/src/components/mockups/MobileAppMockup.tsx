import { BaseColorData } from '@royalfig/color-palette-pro'

/** Realistic iOS-style status bar icons */
function StatusBarIcons() {
  return (
    <div className="mobile-status-icons">
      {/* Signal bars */}
      <svg viewBox="0 0 20 12" width="16" height="10" fill="currentColor">
        <rect x="0" y="8" width="3" height="4" rx="0.5" />
        <rect x="4.5" y="5" width="3" height="7" rx="0.5" />
        <rect x="9" y="2.5" width="3" height="9.5" rx="0.5" />
        <rect x="13.5" y="0" width="3" height="12" rx="0.5" />
      </svg>
      {/* 5G label */}
      <span className="mobile-network-label">5G</span>
      {/* WiFi */}
      <svg viewBox="0 0 16 12" width="14" height="10" fill="currentColor">
        <path d="M8 10.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zM8 7c1.8 0 3.4.8 4.5 2l-1.4 1.4A4.5 4.5 0 0 0 8 9c-1.2 0-2.4.5-3.2 1.4L3.5 9A6.5 6.5 0 0 1 8 7zM8 3c3 0 5.6 1.2 7.5 3.2L14 7.5A8 8 0 0 0 8 5a8 8 0 0 0-6 2.5L.5 6.2A10.5 10.5 0 0 1 8 3z" />
      </svg>
      {/* Battery */}
      <svg viewBox="0 0 28 13" width="22" height="10" fill="currentColor">
        <rect x="0" y="0.5" width="23" height="12" rx="2.5" stroke="currentColor" strokeWidth="1" fill="none" />
        <rect x="24" y="3.5" width="3" height="5.5" rx="1" opacity="0.4" />
        <rect x="2" y="2.5" width="17" height="8" rx="1" />
      </svg>
    </div>
  )
}

export function MobileAppMockup({ palette }: { palette: BaseColorData[] }) {
  return (
    <div className="mobile-mockup-wrapper">
      <div className="mobile-app">
        {/* Dynamic Island / Notch */}
        <div className="mobile-dynamic-island" />

        {/* Status bar */}
        <div className="mobile-statusbar">
          <span className="mobile-time">9:41</span>
          <StatusBarIcons />
        </div>

        {/* Header */}
        <div className="mobile-header">
          <span className="mobile-header-title">Messages</span>
          <span className="mobile-header-action">
            <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor">
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5l-3.5 3v-3H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
            </svg>
          </span>
        </div>

        {/* Search */}
        <div className="mobile-search">
          <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor" opacity="0.4">
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.242.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
          </svg>
          <span>Search chats…</span>
        </div>

        {/* Message list */}
        <div className="mobile-body">
          <div className="mobile-list-item">
            <div className="mobile-avatar" style={{ background: 'var(--primary)' }}>A</div>
            <div className="mobile-text">
              <h4>Alice Smith</h4>
              <p>Are we still on for tomorrow's meeting?</p>
            </div>
            <div className="mobile-meta">
              <span className="mobile-time-label">10:42 AM</span>
              <span className="mobile-badge">2</span>
            </div>
          </div>
          <div className="mobile-list-item">
            <div className="mobile-avatar" style={{ background: 'var(--secondary)' }}>B</div>
            <div className="mobile-text">
              <h4>Bob Jones</h4>
              <p>Just sent over the design files. Let me know!</p>
            </div>
            <div className="mobile-meta">
              <span className="mobile-time-label">Yesterday</span>
            </div>
          </div>
          <div className="mobile-list-item">
            <div className="mobile-avatar" style={{ background: 'var(--tertiary)' }}>C</div>
            <div className="mobile-text">
              <h4>Charlie Brown</h4>
              <p>Thanks for the quick update!</p>
            </div>
            <div className="mobile-meta">
              <span className="mobile-time-label">Tuesday</span>
            </div>
          </div>
          <div className="mobile-list-item">
            <div className="mobile-avatar" style={{ background: 'var(--error)' }}>D</div>
            <div className="mobile-text">
              <h4>Diana Ross</h4>
              <p>Can you review the Q3 report when you get a chance?</p>
            </div>
            <div className="mobile-meta">
              <span className="mobile-time-label">Monday</span>
              <span className="mobile-badge">1</span>
            </div>
          </div>
        </div>

        {/* FAB */}
        <div className="mobile-fab">
          <svg viewBox="0 0 16 16" width="22" height="22" fill="currentColor">
            <path d="M12.146.854a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708L5.854 13.146a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.61-.61l1-4a.5.5 0 0 1 .131-.232L12.146.854z"/>
          </svg>
        </div>

        {/* Tab bar */}
        <div className="mobile-tabbar">
          <div className="mobile-tab active">
            <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5l-3.5 3v-3H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
            </svg>
            <div className="mobile-tab-label">Chats</div>
          </div>
          <div className="mobile-tab">
            <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
              <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z"/>
            </svg>
            <div className="mobile-tab-label">Calls</div>
          </div>
          <div className="mobile-tab">
            <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor">
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.858 2.929 2.929 0 0 1 0 5.858z"/>
            </svg>
            <div className="mobile-tab-label">Settings</div>
          </div>
        </div>

        {/* Home indicator */}
        <div className="mobile-home-indicator" />
      </div>
    </div>
  )
}
