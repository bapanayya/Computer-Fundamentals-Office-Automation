/**
 * Computer-Fund-OfficeAutomat-SVAGDC: Interactive Executive KPI Dashboard
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function(window) {
  'use strict';

  // Institutional Multi-Department Dataset
  const DASHBOARD_DATA = {
    'All': {
      enrolled: 1240,
      passPct: 92.4,
      distinction: 740,
      placement: 88.6,
      depts: [
        { name: 'Physics (MPC/MPE)', pass: 95.2, enrolled: 180, avgMarks: 84.5 },
        { name: 'Computer Science', pass: 96.8, enrolled: 240, avgMarks: 86.2 },
        { name: 'Electronics', pass: 91.5, enrolled: 120, avgMarks: 79.4 },
        { name: 'Mathematics', pass: 89.4, enrolled: 200, avgMarks: 78.1 },
        { name: 'Chemistry', pass: 90.0, enrolled: 190, avgMarks: 80.3 },
        { name: 'Commerce & Arts', pass: 88.5, enrolled: 310, avgMarks: 75.8 }
      ],
      grades: [
        { label: 'Distinction (≥75%)', count: 740, pct: 59.7, color: '#10b981' },
        { label: 'First Class (60-74%)', count: 320, pct: 25.8, color: '#3b82f6' },
        { label: 'Second Class (50-59%)', count: 86, pct: 6.9, color: '#f59e0b' },
        { label: 'Reappear / Backlog', count: 94, pct: 7.6, color: '#ef4444' }
      ]
    },
    'Science': {
      enrolled: 730,
      passPct: 93.6,
      distinction: 480,
      placement: 91.2,
      depts: [
        { name: 'Physics (MPC/MPE)', pass: 95.2, enrolled: 180, avgMarks: 84.5 },
        { name: 'Computer Science', pass: 96.8, enrolled: 240, avgMarks: 86.2 },
        { name: 'Electronics', pass: 91.5, enrolled: 120, avgMarks: 79.4 },
        { name: 'Chemistry', pass: 90.0, enrolled: 190, avgMarks: 80.3 }
      ],
      grades: [
        { label: 'Distinction (≥75%)', count: 480, pct: 65.8, color: '#10b981' },
        { label: 'First Class (60-74%)', count: 180, pct: 24.7, color: '#3b82f6' },
        { label: 'Second Class (50-59%)', count: 42, pct: 5.7, color: '#f59e0b' },
        { label: 'Reappear / Backlog', count: 28, pct: 3.8, color: '#ef4444' }
      ]
    },
    'ArtsComm': {
      enrolled: 510,
      passPct: 88.5,
      distinction: 260,
      placement: 84.0,
      depts: [
        { name: 'B.Com (General)', pass: 89.2, enrolled: 160, avgMarks: 77.2 },
        { name: 'B.Com (Comp Apps)', pass: 91.0, enrolled: 150, avgMarks: 80.4 },
        { name: 'B.A. (History & Pol)', pass: 86.0, enrolled: 110, avgMarks: 72.5 },
        { name: 'B.A. (Economics)', pass: 87.8, enrolled: 90, avgMarks: 73.8 }
      ],
      grades: [
        { label: 'Distinction (≥75%)', count: 260, pct: 51.0, color: '#10b981' },
        { label: 'First Class (60-74%)', count: 140, pct: 27.5, color: '#3b82f6' },
        { label: 'Second Class (50-59%)', count: 44, pct: 8.6, color: '#f59e0b' },
        { label: 'Reappear / Backlog', count: 66, pct: 12.9, color: '#ef4444' }
      ]
    }
  };

  class ExecutiveDashboard {
    constructor(mountEl, options = {}) {
      this.container = typeof mountEl === 'string' ? document.getElementById(mountEl) : mountEl;
      this.currentStream = 'All';
      this.currentYear = '2025-26';
      this.init();
    }

    init() {
      if (!this.container) return;
      this.render();
      this.bindEvents();
      this.updateVisuals();
    }

    render() {
      this.container.innerHTML = `
        <div class="interactive-tool-section dashboard-tool-container">
          <!-- Header Bar -->
          <div class="tool-card-header">
            <div class="tool-title-group">
              <span class="tool-badge"><i class="fa-solid fa-gauge-high"></i> Executive Dashboard</span>
              <span class="tool-title-text">Academic Institutional Performance KPI Sandbox (Lab 14 &amp; Unit 5)</span>
            </div>
            <div class="tool-actions-group">
              <span class="pivot-dataset-pill"><i class="fa-solid fa-arrows-rotate"></i> Real-Time Slicer Driven</span>
              <button type="button" class="btn-tool-action" id="dash_btn_print" title="Print Executive Scorecard"><i class="fa-solid fa-print"></i> Export</button>
            </div>
          </div>

          <!-- Multi-Dimensional Slicer Bar -->
          <div class="dash-slicers-bar">
            <div class="dash-slicer-group">
              <span class="dash-slicer-label"><i class="fa-solid fa-layer-group"></i> Academic Stream:</span>
              <div class="dash-slicer-pills">
                <button type="button" class="dash-pill-btn active" data-stream="All">All Faculty Streams</button>
                <button type="button" class="dash-pill-btn" data-stream="Science">Science (Physics/CS/Maths)</button>
                <button type="button" class="dash-pill-btn" data-stream="ArtsComm">Commerce &amp; Arts</button>
              </div>
            </div>
            <div class="dash-slicer-group">
              <span class="dash-slicer-label"><i class="fa-solid fa-calendar-days"></i> Academic Cycle:</span>
              <select class="dash-year-select" id="dash_year_select">
                <option value="2025-26" selected>2025 - 2026 (Current Academic Year)</option>
                <option value="2024-25">2024 - 2025 (Previous Audit)</option>
              </select>
            </div>
          </div>

          <!-- 4 Scorecard KPI Metrics Row -->
          <div class="dash-kpi-grid">
            <div class="kpi-card" style="border-top: 4px solid #3b82f6;">
              <div class="kpi-icon-badge" style="background: rgba(59, 130, 246, 0.12); color: #2563eb;">
                <i class="fa-solid fa-user-graduate"></i>
              </div>
              <div class="kpi-info">
                <div class="kpi-value" id="kpi_val_enrolled">1,240</div>
                <div class="kpi-label">Total Scholars Enrolled</div>
                <div class="kpi-delta positive"><i class="fa-solid fa-arrow-trend-up"></i> +8.5% YoY Growth</div>
              </div>
            </div>

            <div class="kpi-card" style="border-top: 4px solid #10b981;">
              <div class="kpi-icon-badge" style="background: rgba(16, 185, 129, 0.12); color: #059669;">
                <i class="fa-solid fa-award"></i>
              </div>
              <div class="kpi-info">
                <div class="kpi-value" id="kpi_val_pass">92.4%</div>
                <div class="kpi-label">Institutional Pass Rate</div>
                <div class="kpi-delta positive"><i class="fa-solid fa-check"></i> Exceeds 90% Target</div>
              </div>
            </div>

            <div class="kpi-card" style="border-top: 4px solid #8b5cf6;">
              <div class="kpi-icon-badge" style="background: rgba(139, 92, 246, 0.12); color: #7c3aed;">
                <i class="fa-solid fa-star"></i>
              </div>
              <div class="kpi-info">
                <div class="kpi-value" id="kpi_val_distinction">740</div>
                <div class="kpi-label">Distinctions Awarded (≥75%)</div>
                <div class="kpi-delta positive"><i class="fa-solid fa-arrow-up"></i> +14.2% vs Last Sem</div>
              </div>
            </div>

            <div class="kpi-card" style="border-top: 4px solid #f59e0b;">
              <div class="kpi-icon-badge" style="background: rgba(245, 158, 11, 0.12); color: #d97706;">
                <i class="fa-solid fa-briefcase"></i>
              </div>
              <div class="kpi-info">
                <div class="kpi-value" id="kpi_val_placement">88.6%</div>
                <div class="kpi-label">Higher Ed / Placement Index</div>
                <div class="kpi-delta positive"><i class="fa-solid fa-medal"></i> Top Grade in District</div>
              </div>
            </div>
          </div>

          <!-- Charts Row -->
          <div class="dash-charts-grid">
            <!-- Left Chart: Department Pass Rates -->
            <div class="dash-chart-card">
              <div class="chart-card-title">
                <i class="fa-solid fa-chart-simple"></i> Department-wise Pass Rates &amp; Academic Benchmark (90%)
              </div>
              <div class="dash-svg-container" id="dash_chart_bar"></div>
            </div>

            <!-- Right Chart: Grade Distribution Donut/Stacked -->
            <div class="dash-chart-card">
              <div class="chart-card-title">
                <i class="fa-solid fa-chart-pie"></i> Student Grade Bracket Distribution
              </div>
              <div class="dash-svg-container" id="dash_chart_grade"></div>
            </div>
          </div>

          <!-- Bottom: Department Detailed Audit Table with Sparklines -->
          <div class="dash-table-card">
            <div class="chart-card-title">
              <i class="fa-solid fa-table-list"></i> Departmental Scorecard with 6-Semester Sparklines
            </div>
            <div class="table-responsive">
              <table class="dash-audit-table">
                <thead>
                  <tr>
                    <th>Department / Programme</th>
                    <th>Enrolled</th>
                    <th>Average Score</th>
                    <th>Pass Rate</th>
                    <th>6-Semester Progress Trend (Sparkline)</th>
                    <th>Audit Status</th>
                  </tr>
                </thead>
                <tbody id="dash_table_body">
                  <!-- Filled via JS -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    }

    bindEvents() {
      // Slicer Stream Pills
      this.container.querySelectorAll('.dash-pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          this.container.querySelectorAll('.dash-pill-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.currentStream = btn.getAttribute('data-stream');
          this.updateVisuals();
        });
      });

      // Year Select
      const yearSel = this.container.querySelector('#dash_year_select');
      if (yearSel) {
        yearSel.addEventListener('change', () => {
          this.currentYear = yearSel.value;
          this.updateVisuals();
        });
      }

      // Print Button
      const printBtn = this.container.querySelector('#dash_btn_print');
      if (printBtn) {
        printBtn.addEventListener('click', () => {
          window.print();
        });
      }
    }

    updateVisuals() {
      const data = DASHBOARD_DATA[this.currentStream] || DASHBOARD_DATA['All'];

      // 1. Update KPI Cards
      const enrEl = this.container.querySelector('#kpi_val_enrolled');
      const passEl = this.container.querySelector('#kpi_val_pass');
      const distEl = this.container.querySelector('#kpi_val_distinction');
      const plEl = this.container.querySelector('#kpi_val_placement');

      if (enrEl) enrEl.textContent = data.enrolled.toLocaleString();
      if (passEl) passEl.textContent = `${data.passPct}%`;
      if (distEl) distEl.textContent = data.distinction.toLocaleString();
      if (plEl) plEl.textContent = `${data.placement}%`;

      // 2. Render Bar Chart (Department Pass Rates)
      this.renderBarChart(data.depts);

      // 3. Render Grade Distribution Donut/Bar Chart
      this.renderGradeChart(data.grades);

      // 4. Render Table with Sparklines
      this.renderAuditTable(data.depts);
    }

    renderBarChart(depts) {
      const box = this.container.querySelector('#dash_chart_bar');
      if (!box) return;

      const w = 550;
      const h = 220;
      const padLeft = 140;
      const padRight = 30;
      const padTop = 15;
      const padBottom = 25;

      const chartW = w - padLeft - padRight;
      const chartH = h - padTop - padBottom;
      const barH = Math.min(22, (chartH / depts.length) - 8);

      let barsHtml = '';
      depts.forEach((d, i) => {
        const y = padTop + i * (chartH / depts.length) + 4;
        const barW = (d.pass / 100) * chartW;
        const color = d.pass >= 95 ? '#10b981' : (d.pass >= 90 ? '#3b82f6' : '#f59e0b');

        barsHtml += `
          <text x="${padLeft - 10}" y="${y + barH/2 + 4}" font-size="11" text-anchor="end" fill="var(--text-secondary)">${d.name}</text>
          <rect x="${padLeft}" y="${y}" width="${barW}" height="${barH}" fill="${color}" rx="3">
            <title>${d.name}: ${d.pass}%</title>
          </rect>
          <text x="${padLeft + barW + 6}" y="${y + barH/2 + 4}" font-size="11" font-weight="700" fill="var(--text-primary)">${d.pass}%</text>
        `;
      });

      // Benchmark Target Line at 90%
      const targetX = padLeft + (0.90 * chartW);
      const targetLine = `
        <line x1="${targetX}" y1="${padTop - 5}" x2="${targetX}" y2="${padTop + chartH + 5}" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="4,4" />
        <text x="${targetX}" y="${padTop + chartH + 18}" font-size="10" text-anchor="middle" fill="#ef4444" font-weight="600">Target (90%)</text>
      `;

      box.innerHTML = `
        <svg viewBox="0 0 ${w} ${h}" class="dash-svg-chart">
          ${barsHtml}
          ${targetLine}
        </svg>
      `;
    }

    renderGradeChart(grades) {
      const box = this.container.querySelector('#dash_chart_grade');
      if (!box) return;

      const total = grades.reduce((acc, g) => acc + g.count, 0);
      let cumulativePercent = 0;

      // SVG Stacked horizontal bar
      const w = 480;
      const h = 200;

      let barsHtml = '';
      let legendHtml = '<div class="dash-grade-legend-grid">';

      let currX = 20;
      const barY = 30;
      const barH = 34;
      const maxW = w - 40;

      grades.forEach(g => {
        const segW = (g.count / total) * maxW;
        barsHtml += `
          <rect x="${currX}" y="${barY}" width="${segW}" height="${barH}" fill="${g.color}" rx="2">
            <title>${g.label}: ${g.count} (${g.pct}%)</title>
          </rect>
        `;
        currX += segW;

        legendHtml += `
          <div class="grade-legend-row">
            <span class="grade-dot" style="background: ${g.color};"></span>
            <span class="grade-legend-label">${g.label}</span>
            <span class="grade-legend-val"><strong>${g.count}</strong> (${g.pct}%)</span>
          </div>
        `;
      });
      legendHtml += '</div>';

      box.innerHTML = `
        <svg viewBox="0 0 ${w} 75" style="width: 100%; height: 75px; display: block;">
          ${barsHtml}
        </svg>
        ${legendHtml}
      `;
    }

    renderAuditTable(depts) {
      const tbody = this.container.querySelector('#dash_table_body');
      if (!tbody) return;

      const sparklines = [
        'M 0 16 L 15 14 L 30 11 L 45 8 L 60 4 L 75 2',
        'M 0 18 L 15 15 L 30 12 L 45 7 L 60 5 L 75 1',
        'M 0 15 L 15 16 L 30 13 L 45 10 L 60 8 L 75 6',
        'M 0 19 L 15 17 L 30 15 L 45 12 L 60 10 L 75 9',
        'M 0 16 L 15 14 L 30 13 L 45 11 L 60 9 L 75 7',
        'M 0 20 L 15 18 L 30 16 L 45 14 L 60 12 L 75 11'
      ];

      let html = '';
      depts.forEach((d, idx) => {
        const isDistinction = d.avgMarks >= 80;
        const spark = sparklines[idx % sparklines.length];

        html += `
          <tr>
            <td><strong>${d.name}</strong></td>
            <td>${d.enrolled}</td>
            <td><strong>${d.avgMarks}</strong> / 100</td>
            <td><span class="badge-pct ${d.pass >= 90 ? 'pct-high' : 'pct-mid'}">${d.pass}%</span></td>
            <td>
              <svg width="75" height="22" class="sparkline-svg">
                <path d="${spark}" fill="none" stroke="${d.pass >= 90 ? '#10b981' : '#3b82f6'}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </td>
            <td>
              <span class="audit-badge ${isDistinction ? 'audit-pass' : 'audit-review'}">
                <i class="fa-solid ${isDistinction ? 'fa-circle-check' : 'fa-triangle-exclamation'}"></i> 
                ${isDistinction ? 'A++ Accredited' : 'Satisfactory'}
              </span>
            </td>
          </tr>
        `;
      });

      tbody.innerHTML = html;
    }
  }

  // Global Engine Mount
  window.DashboardEngine = {
    create: (containerId, options) => new ExecutiveDashboard(containerId, options)
  };

})(window);
