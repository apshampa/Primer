import { BaseColorData } from 'primer'

/** Simple SVG sparkline bar chart */
function MiniBarChart() {
  const bars = [35, 58, 42, 70, 55, 80, 65, 90, 72, 85, 60, 78]
  const max = Math.max(...bars)
  return (
    <svg className="mini-chart" viewBox="0 0 180 60" fill="none">
      {bars.map((h, i) => (
        <rect
          key={i}
          x={i * 15}
          y={60 - (h / max) * 55}
          width="10"
          rx="2"
          height={(h / max) * 55}
          fill="var(--primary)"
          opacity={0.3 + (h / max) * 0.7}
        />
      ))}
    </svg>
  )
}

export function DashboardMockup({ palette }: { palette: BaseColorData[] }) {
  return (
    <div className="dashboard-mockup">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <div className="dashboard-brand">
          <div className="dashboard-brand-icon" />
          PlatformOS
        </div>
        <div className="dashboard-nav">
          <div className="dashboard-nav-item active">
            <span className="dashboard-nav-icon">📊</span> Overview
          </div>
          <div className="dashboard-nav-item">
            <span className="dashboard-nav-icon">📈</span> Analytics
          </div>
          <div className="dashboard-nav-item">
            <span className="dashboard-nav-icon">📋</span> Reports
          </div>
          <div className="dashboard-nav-item">
            <span className="dashboard-nav-icon">👥</span> Team
          </div>
          <div className="dashboard-nav-item">
            <span className="dashboard-nav-icon">⚙️</span> Settings
          </div>
        </div>
        <div className="dashboard-sidebar-user">
          <div className="dashboard-sidebar-avatar">JS</div>
          <div className="dashboard-sidebar-user-info">
            <span className="dashboard-sidebar-name">John Smith</span>
            <span className="dashboard-sidebar-role">Admin</span>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="dashboard-main">
        <div className="dashboard-header">
          <div className="dashboard-header-left">
            <h2 className="dashboard-page-title">Overview</h2>
            <span className="dashboard-breadcrumb">Dashboard / Overview</span>
          </div>
          <div className="dashboard-header-right">
            <div className="dashboard-search">
              <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor" opacity="0.5">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85zm-5.242.156a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/>
              </svg>
              <span>Search…</span>
            </div>
            <div className="dashboard-notification-bell">
              <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" opacity="0.5">
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
              </svg>
              <span className="dashboard-notification-dot" />
            </div>
            <div className="dashboard-profile">JS</div>
          </div>
        </div>

        <div className="dashboard-content">
          {/* Stats cards */}
          <div className="dashboard-stats">
            <div className="stat-card">
              <div className="stat-card-header">
                <div className="stat-card-title">Total Revenue</div>
                <span className="stat-card-icon">💰</span>
              </div>
              <div className="stat-card-value">$24,500</div>
              <div className="stat-card-trend">↑ 14% vs last week</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-header">
                <div className="stat-card-title">Active Users</div>
                <span className="stat-card-icon">👤</span>
              </div>
              <div className="stat-card-value">1,432</div>
              <div className="stat-card-trend negative">↓ 2% vs last week</div>
            </div>
            <div className="stat-card">
              <div className="stat-card-header">
                <div className="stat-card-title">Conversion</div>
                <span className="stat-card-icon">🎯</span>
              </div>
              <div className="stat-card-value">4.8%</div>
              <div className="stat-card-trend">↑ 0.5% vs last week</div>
            </div>
          </div>

          {/* Chart card */}
          <div className="dashboard-chart-card">
            <div className="dashboard-chart-header">
              <h3>Revenue Trend</h3>
              <div className="dashboard-chart-pills">
                <span className="chart-pill">7D</span>
                <span className="chart-pill active">30D</span>
                <span className="chart-pill">90D</span>
              </div>
            </div>
            <MiniBarChart />
          </div>

          {/* Table */}
          <div className="dashboard-table-card">
            <h3>Recent Transactions</h3>
            <table className="mock-table">
              <thead>
                <tr>
                  <th>Transaction</th>
                  <th>Customer</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="mock-table-id">#TRX-9012</td>
                  <td>Alice Freeman</td>
                  <td>Oct 24, 2026</td>
                  <td className="mock-table-amount">$129.00</td>
                  <td><span className="status-pill success">Completed</span></td>
                </tr>
                <tr>
                  <td className="mock-table-id">#TRX-9013</td>
                  <td>Globex Inc</td>
                  <td>Oct 24, 2026</td>
                  <td className="mock-table-amount">$4,500.00</td>
                  <td><span className="status-pill warning">Pending</span></td>
                </tr>
                <tr>
                  <td className="mock-table-id">#TRX-9014</td>
                  <td>Sarah Jenkins</td>
                  <td>Oct 23, 2026</td>
                  <td className="mock-table-amount">$49.99</td>
                  <td><span className="status-pill success">Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
