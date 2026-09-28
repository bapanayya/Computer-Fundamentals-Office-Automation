/**
 * Computer-Fund-OfficeAutomat-SVAGDC: Interactive Pivot Table & Pivot Chart Builder
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function(window) {
  'use strict';

  // Sample Dataset: Multi-Department Performance & Fee Revenue (Aligned with Unit 5 & Lab 11)
  const RAW_DATA = [
    { id: 1, year: '2025', dept: 'Physics', course: 'B.Sc.', category: 'Science', enrolled: 60, passed: 54, fees: 180000 },
    { id: 2, year: '2025', dept: 'Physics', course: 'M.Sc.', category: 'Science', enrolled: 30, passed: 29, fees: 210000 },
    { id: 3, year: '2025', dept: 'Comp Sci', course: 'B.Sc.', category: 'Science', enrolled: 80, passed: 72, fees: 320000 },
    { id: 4, year: '2025', dept: 'Comp Sci', course: 'M.Sc.', category: 'Science', enrolled: 40, passed: 38, fees: 360000 },
    { id: 5, year: '2025', dept: 'Chemistry', course: 'B.Sc.', category: 'Science', enrolled: 55, passed: 48, fees: 165000 },
    { id: 6, year: '2025', dept: 'Maths', course: 'B.Sc.', category: 'Science', enrolled: 50, passed: 45, fees: 150000 },
    { id: 7, year: '2025', dept: 'Commerce', course: 'B.Com', category: 'Commerce', enrolled: 120, passed: 105, fees: 360000 },
    { id: 8, year: '2025', dept: 'Economics', course: 'B.A.', category: 'Arts', enrolled: 45, passed: 39, fees: 90000 },
    { id: 9, year: '2026', dept: 'Physics', course: 'B.Sc.', category: 'Science', enrolled: 65, passed: 61, fees: 195000 },
    { id: 10, year: '2026', dept: 'Physics', course: 'M.Sc.', category: 'Science', enrolled: 35, passed: 34, fees: 245000 },
    { id: 11, year: '2026', dept: 'Comp Sci', course: 'B.Sc.', category: 'Science', enrolled: 90, passed: 85, fees: 360000 },
    { id: 12, year: '2026', dept: 'Comp Sci', course: 'M.Sc.', category: 'Science', enrolled: 45, passed: 43, fees: 405000 },
    { id: 13, year: '2026', dept: 'Chemistry', course: 'B.Sc.', category: 'Science', enrolled: 60, passed: 55, fees: 180000 },
    { id: 14, year: '2026', dept: 'Maths', course: 'B.Sc.', category: 'Science', enrolled: 55, passed: 51, fees: 165000 },
    { id: 15, year: '2026', dept: 'Commerce', course: 'B.Com', category: 'Commerce', enrolled: 130, passed: 118, fees: 390000 },
    { id: 16, year: '2026', dept: 'Economics', course: 'B.A.', category: 'Arts', enrolled: 50, passed: 46, fees: 100000 }
  ];

  const AVAILABLE_FIELDS = [
    { id: 'dept', label: 'Department', type: 'category' },
    { id: 'year', label: 'Academic Year', type: 'category' },
    { id: 'course', label: 'Course Level', type: 'category' },
    { id: 'category', label: 'Faculty Stream', type: 'category' },
    { id: 'enrolled', label: 'Enrolled Students', type: 'number' },
    { id: 'passed', label: 'Passed Students', type: 'number' },
    { id: 'fees', label: 'Fee Revenue (₹)', type: 'number' }
  ];

  class PivotEngine {
    constructor(mountEl, options = {}) {
      this.container = typeof mountEl === 'string' ? document.getElementById(mountEl) : mountEl;
      this.activeSlicerFilter = 'All'; // Filter by stream or year
      this.rowField = 'dept';
      this.colField = 'year';
      this.valField = 'passed';
      this.valAgg = 'SUM';
      this.init();
    }

    init() {
      if (!this.container) return;
      this.render();
      this.bindEvents();
      this.recalculate();
    }

    render() {
      this.container.innerHTML = `
        <div class="interactive-tool-section pivot-tool-container">
          <div class="tool-card-header">
            <div class="tool-title-group">
              <span class="tool-badge"><i class="fa-solid fa-table-cells"></i> Pivot Table &amp; Slicer Lab</span>
              <span class="tool-title-text">Interactive Multi-Dimensional Cross-Tabulation &amp; Dynamic Charts</span>
            </div>
            <div class="tool-actions-group">
              <span class="pivot-dataset-pill"><i class="fa-solid fa-database"></i> Source: 16 Institutional Records</span>
              <button type="button" class="btn-tool-action" id="pivot_btn_reset" title="Reset Field Layout"><i class="fa-solid fa-arrow-rotate-left"></i> Reset</button>
            </div>
          </div>

          <!-- Interactive Slicer Panel -->
          <div class="pivot-slicers-bar">
            <div class="pivot-slicer-group">
              <span class="pivot-slicer-label"><i class="fa-solid fa-filter"></i> Stream Slicer:</span>
              <div class="pivot-slicer-chips" id="pivot_stream_slicers">
                <button type="button" class="slicer-chip active" data-filter="All">All Streams</button>
                <button type="button" class="slicer-chip" data-filter="Science">Science</button>
                <button type="button" class="slicer-chip" data-filter="Commerce">Commerce</button>
                <button type="button" class="slicer-chip" data-filter="Arts">Arts</button>
              </div>
            </div>
          </div>

          <div class="pivot-body-grid">
            <!-- Left: 4-Quadrant Field Selection Matrix -->
            <div class="pivot-field-matrix">
              <div class="pivot-matrix-title">
                <i class="fa-solid fa-diagram-project"></i> PivotTable Field Quadrants
              </div>

              <!-- Field Selector Rows -->
              <div class="pivot-quadrant-block">
                <div class="quadrant-label"><i class="fa-solid fa-arrows-up-down"></i> <strong>ROWS</strong> (Row Labels):</div>
                <select class="pivot-field-select" id="pivot_row_select">
                  <option value="dept" selected>Department</option>
                  <option value="course">Course Level</option>
                  <option value="category">Faculty Stream</option>
                  <option value="year">Academic Year</option>
                </select>
              </div>

              <div class="pivot-quadrant-block">
                <div class="quadrant-label"><i class="fa-solid fa-arrows-left-right"></i> <strong>COLUMNS</strong> (Column Labels):</div>
                <select class="pivot-field-select" id="pivot_col_select">
                  <option value="year" selected>Academic Year</option>
                  <option value="course">Course Level</option>
                  <option value="category">Faculty Stream</option>
                  <option value="dept">Department</option>
                </select>
              </div>

              <div class="pivot-quadrant-block">
                <div class="quadrant-label"><i class="fa-solid fa-calculator"></i> <strong>VALUES</strong> (Summary Data):</div>
                <div class="pivot-values-dual-row">
                  <select class="pivot-field-select" id="pivot_val_select">
                    <option value="passed" selected>Passed Students</option>
                    <option value="enrolled">Enrolled Students</option>
                    <option value="fees">Fee Revenue (₹)</option>
                  </select>
                  <select class="pivot-field-select pivot-agg-select" id="pivot_agg_select">
                    <option value="SUM" selected>SUM</option>
                    <option value="AVERAGE">AVERAGE</option>
                    <option value="COUNT">COUNT</option>
                    <option value="MAX">MAX</option>
                    <option value="MIN">MIN</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Right: Dynamic Output (Table + Chart) -->
            <div class="pivot-display-area">
              <!-- Cross Tabulation Grid -->
              <div class="pivot-table-wrapper" id="pivot_table_wrapper">
                <!-- Dynamically generated table -->
              </div>

              <!-- Dynamic Chart Section -->
              <div class="pivot-chart-container">
                <div class="pivot-chart-header">
                  <div class="pivot-chart-title" id="pivot_chart_title">
                    <i class="fa-solid fa-chart-column"></i> Linked Dynamic Pivot Chart
                  </div>
                  <div class="pivot-chart-legend" id="pivot_chart_legend"></div>
                </div>
                <div class="pivot-chart-svg-box" id="pivot_chart_box">
                  <!-- SVG Bar Chart Generated Here -->
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    bindEvents() {
      // Slicer Chips
      this.container.querySelectorAll('.slicer-chip').forEach(btn => {
        btn.addEventListener('click', () => {
          this.container.querySelectorAll('.slicer-chip').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          this.activeSlicerFilter = btn.getAttribute('data-filter');
          this.recalculate();
        });
      });

      // Quadrant Selectors
      const rowSel = this.container.querySelector('#pivot_row_select');
      const colSel = this.container.querySelector('#pivot_col_select');
      const valSel = this.container.querySelector('#pivot_val_select');
      const aggSel = this.container.querySelector('#pivot_agg_select');
      const resetBtn = this.container.querySelector('#pivot_btn_reset');

      if (rowSel) {
        rowSel.addEventListener('change', () => {
          this.rowField = rowSel.value;
          this.recalculate();
        });
      }

      if (colSel) {
        colSel.addEventListener('change', () => {
          this.colField = colSel.value;
          this.recalculate();
        });
      }

      if (valSel) {
        valSel.addEventListener('change', () => {
          this.valField = valSel.value;
          this.recalculate();
        });
      }

      if (aggSel) {
        aggSel.addEventListener('change', () => {
          this.valAgg = aggSel.value;
          this.recalculate();
        });
      }

      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.rowField = 'dept';
          this.colField = 'year';
          this.valField = 'passed';
          this.valAgg = 'SUM';
          this.activeSlicerFilter = 'All';

          if (rowSel) rowSel.value = 'dept';
          if (colSel) colSel.value = 'year';
          if (valSel) valSel.value = 'passed';
          if (aggSel) aggSel.value = 'SUM';

          this.container.querySelectorAll('.slicer-chip').forEach(b => {
            b.classList.toggle('active', b.getAttribute('data-filter') === 'All');
          });

          this.recalculate();
        });
      }
    }

    recalculate() {
      // 1. Filter dataset by slicer
      let dataset = RAW_DATA;
      if (this.activeSlicerFilter !== 'All') {
        dataset = RAW_DATA.filter(d => d.category === this.activeSlicerFilter);
      }

      // 2. Extract distinct Row & Column values
      const distinctRows = Array.from(new Set(dataset.map(d => d[this.rowField]))).sort();
      const distinctCols = Array.from(new Set(dataset.map(d => d[this.colField]))).sort();

      // 3. Compute cross-tabulation cells
      const matrix = {}; // row -> { col: [numbers] }
      distinctRows.forEach(r => {
        matrix[r] = {};
        distinctCols.forEach(c => {
          matrix[r][c] = [];
        });
      });

      dataset.forEach(d => {
        const rVal = d[this.rowField];
        const cVal = d[this.colField];
        const num = d[this.valField] || 0;
        if (matrix[rVal] && matrix[rVal][cVal]) {
          matrix[rVal][cVal].push(num);
        }
      });

      // Aggregate helper
      const calcAgg = (arr) => {
        if (!arr || arr.length === 0) return 0;
        if (this.valAgg === 'SUM') return arr.reduce((a, b) => a + b, 0);
        if (this.valAgg === 'AVERAGE') return Math.round(arr.reduce((a, b) => a + b, 0) / arr.length);
        if (this.valAgg === 'COUNT') return arr.length;
        if (this.valAgg === 'MAX') return Math.max(...arr);
        if (this.valAgg === 'MIN') return Math.min(...arr);
        return 0;
      };

      // 4. Render Cross-tabulation HTML Table
      this.renderTable(distinctRows, distinctCols, matrix, calcAgg);

      // 5. Render Linked Dynamic SVG Bar Chart
      this.renderChart(distinctRows, distinctCols, matrix, calcAgg);
    }

    renderTable(rows, cols, matrix, calcAgg) {
      const wrapper = this.container.querySelector('#pivot_table_wrapper');
      if (!wrapper) return;

      const formatVal = (v) => {
        if (this.valField === 'fees') return '₹' + Number(v).toLocaleString('en-IN');
        return Number(v).toLocaleString();
      };

      let html = `
        <table class="pivot-result-table">
          <thead>
            <tr>
              <th class="pivot-corner-header">${this.valAgg} of ${this.valField.toUpperCase()}</th>
              <th colspan="${cols.length}" class="pivot-col-header-group">Column Labels: ${this.colField.toUpperCase()}</th>
              <th class="pivot-grand-header" rowspan="2">Grand Total</th>
            </tr>
            <tr>
              <th class="pivot-row-header-label">Row Labels: ${this.rowField.toUpperCase()}</th>
              ${cols.map(c => `<th>${c}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
      `;

      const colTotals = {};
      cols.forEach(c => colTotals[c] = []);
      let allGrandVals = [];

      rows.forEach(r => {
        let rowVals = [];
        html += `<tr><td class="pivot-row-title"><strong>${r}</strong></td>`;
        cols.forEach(c => {
          const rawArr = matrix[r][c] || [];
          const val = calcAgg(rawArr);
          rowVals.push(...rawArr);
          colTotals[c].push(...rawArr);
          allGrandVals.push(...rawArr);
          html += `<td>${val > 0 ? formatVal(val) : '-'}</td>`;
        });
        const rowGrand = calcAgg(rowVals);
        html += `<td class="pivot-row-grand"><strong>${formatVal(rowGrand)}</strong></td></tr>`;
      });

      // Bottom Grand Total Row
      html += `
          </tbody>
          <tfoot>
            <tr class="pivot-total-row">
              <td><strong>Grand Total</strong></td>
              ${cols.map(c => `<td><strong>${formatVal(calcAgg(colTotals[c]))}</strong></td>`).join('')}
              <td class="pivot-grand-total"><strong>${formatVal(calcAgg(allGrandVals))}</strong></td>
            </tr>
          </tfoot>
        </table>
      `;

      wrapper.innerHTML = html;
    }

    renderChart(rows, cols, matrix, calcAgg) {
      const box = this.container.querySelector('#pivot_chart_box');
      const legend = this.container.querySelector('#pivot_chart_legend');
      const chartTitle = this.container.querySelector('#pivot_chart_title');

      if (!box) return;

      if (chartTitle) {
        chartTitle.innerHTML = `<i class="fa-solid fa-chart-column"></i> ${this.valAgg} of ${this.valField.toUpperCase()} by ${this.rowField.toUpperCase()}`;
      }

      const COLORS = ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899'];

      if (legend) {
        legend.innerHTML = cols.map((c, i) => `
          <span class="pivot-legend-item">
            <span class="legend-color-dot" style="background: ${COLORS[i % COLORS.length]};"></span>
            ${c}
          </span>
        `).join('');
      }

      // Find max value across all cells for scaling
      let maxVal = 0;
      rows.forEach(r => {
        cols.forEach(c => {
          const v = calcAgg(matrix[r][c]);
          if (v > maxVal) maxVal = v;
        });
      });
      if (maxVal === 0) maxVal = 100;

      const svgWidth = 650;
      const svgHeight = 220;
      const padLeft = 90;
      const padRight = 20;
      const padBottom = 35;
      const padTop = 15;

      const chartW = svgWidth - padLeft - padRight;
      const chartH = svgHeight - padTop - padBottom;

      const groupWidth = chartW / rows.length;
      const barWidth = Math.max(6, Math.min(26, (groupWidth - 14) / cols.length));

      let svgBars = '';
      let svgLabels = '';

      rows.forEach((r, rIdx) => {
        const groupX = padLeft + rIdx * groupWidth + (groupWidth - (barWidth * cols.length)) / 2;

        cols.forEach((c, cIdx) => {
          const val = calcAgg(matrix[r][c]);
          const h = (val / maxVal) * chartH;
          const x = groupX + cIdx * barWidth;
          const y = padTop + chartH - h;
          const color = COLORS[cIdx % COLORS.length];

          svgBars += `
            <rect x="${x}" y="${y}" width="${barWidth - 2}" height="${Math.max(2, h)}" fill="${color}" rx="3">
              <title>${r} - ${c}: ${val}</title>
            </rect>
          `;
        });

        // X-axis label
        const labelX = groupX + (barWidth * cols.length) / 2;
        svgLabels += `
          <text x="${labelX}" y="${padTop + chartH + 20}" font-size="11" text-anchor="middle" fill="var(--text-secondary)">
            ${r.length > 9 ? r.slice(0, 8) + '…' : r}
          </text>
        `;
      });

      // Axis lines
      const axisLine = `
        <line x1="${padLeft}" y1="${padTop + chartH}" x2="${svgWidth - padRight}" y2="${padTop + chartH}" stroke="var(--border-medium)" stroke-width="1.5" />
      `;

      box.innerHTML = `
        <svg viewBox="0 0 ${svgWidth} ${svgHeight}" class="pivot-svg-chart">
          ${axisLine}
          ${svgBars}
          ${svgLabels}
        </svg>
      `;
    }
  }

  // Global Engine Mount
  window.PivotEngine = {
    create: (containerId, options) => new PivotEngine(containerId, options)
  };

})(window);
