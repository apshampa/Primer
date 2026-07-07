/**
 * BrowserChrome — a macOS-style browser window frame.
 * Wraps children in a realistic chrome with traffic-light dots and a URL bar.
 */
export function BrowserChrome({
  url = 'https://acmecorp.com',
  children,
}: {
  url?: string
  children: React.ReactNode
}) {
  return (
    <div className="browser-chrome">
      <div className="browser-titlebar">
        <div className="browser-dots">
          <span className="dot dot-close" />
          <span className="dot dot-minimize" />
          <span className="dot dot-maximize" />
        </div>
        <div className="browser-url-bar">
          <svg className="browser-lock-icon" viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
            <path d="M8 1a4 4 0 0 0-4 4v2H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-1V5a4 4 0 0 0-4-4zm2.5 6H5.5V5a2.5 2.5 0 1 1 5 0v2z" />
          </svg>
          <span className="browser-url-text">{url}</span>
        </div>
        <div className="browser-titlebar-actions">
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" opacity="0.4">
            <path d="M3.5 2h9a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 12.5v-9A1.5 1.5 0 0 1 3.5 2zm0 1a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-9z"/>
          </svg>
        </div>
      </div>
      <div className="browser-content">{children}</div>
    </div>
  )
}
