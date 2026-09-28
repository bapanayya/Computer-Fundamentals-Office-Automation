/**
 * Computer-Fund-OfficeAutomat-SVAGDC: Interactive What-If Analysis Engine (Goal Seek & Scenario Manager)
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function(window) {
  'use strict';

  class WhatIfStudio {
    constructor(mountEl, options = {}) {
      this.container = typeof mountEl === 'string' ? document.getElementById(mountEl) : mountEl;
      this.mode = options.mode || 'goalseek'; // 'goalseek' or 'scenario'
      this.goalTarget = 82;
      this.practicalScore = 32;
      this.init();
    }

    init() {
      if (!this.container) return;
      this.render();
      this.bindEvents();
    }

    render() {
      this.container.innerHTML = `
        <div class="interactive-tool-section whatif-tool-container">
          <div class="tool-card-header">
            <div class="tool-title-group">
              <span class="tool-badge"><i class="fa-solid fa-calculator"></i> What-If Analysis Studio</span>
              <span class="tool-title-text">${this.mode === 'scenario' ? 'Scenario Manager: Multi-Condition Comparative Models' : 'Goal Seek: Backwards Convergence Iterative Solver'}</span>
            </div>
            <div class="tool-actions-group">
              <div class="whatif-mode-toggle">
                <button type="button" class="btn-mode-pill ${this.mode === 'goalseek' ? 'active' : ''}" id="whatif_tab_goalseek">
                  <i class="fa-solid fa-bullseye"></i> Goal Seek
                </button>
                <button type="button" class="btn-mode-pill ${this.mode === 'scenario' ? 'active' : ''}" id="whatif_tab_scenario">
                  <i class="fa-solid fa-layer-group"></i> Scenario Manager
                </button>
              </div>
            </div>
          </div>

          <div class="whatif-body" id="whatif_content_mount">
            ${this.mode === 'scenario' ? this.buildScenarioHtml() : this.buildGoalSeekHtml()}
          </div>
        </div>
      `;
    }

    buildGoalSeekHtml() {
      const theory1 = 78;
      const comp1 = 85;
      const maths1 = 72;
      const totalMarks = theory1 + comp1 + maths1 + this.practicalScore;
      const maxMarks = 350;
      const currentPct = ((totalMarks / maxMarks) * 100).toFixed(1);

      return `
        <div class="goalseek-container">
          <div class="whatif-intro-banner">
            <i class="fa-solid fa-circle-question"></i>
            <div>
              <strong>Problem Scenario (Reverse Calculation):</strong> A student needs to achieve a target overall average of 
              <strong style="color: #2563eb;">82.0% (First Class Distinction)</strong> across 350 marks. Three theory papers are fixed. 
              How many marks must the candidate secure in the upcoming <strong>Physics Practical (Max 50)</strong>?
            </div>
          </div>

          <div class="goalseek-grid">
            <!-- Left: Current Grade Table -->
            <div class="goalseek-sheet-card">
              <div class="sheet-card-title"><i class="fa-solid fa-table"></i> Student Marks Model Sheet</div>
              <table class="goalseek-data-table">
                <thead>
                  <tr>
                    <th>Cell</th>
                    <th>Component Name</th>
                    <th>Max Marks</th>
                    <th>Scored Marks</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>B2</code></td>
                    <td>Physics Theory</td>
                    <td>100</td>
                    <td><strong>${theory1}</strong></td>
                    <td><span class="badge-fixed">Fixed</span></td>
                  </tr>
                  <tr>
                    <td><code>B3</code></td>
                    <td>Computer Fundamentals</td>
                    <td>100</td>
                    <td><strong>${comp1}</strong></td>
                    <td><span class="badge-fixed">Fixed</span></td>
                  </tr>
                  <tr>
                    <td><code>B4</code></td>
                    <td>Mathematics Paper III</td>
                    <td>100</td>
                    <td><strong>${maths1}</strong></td>
                    <td><span class="badge-fixed">Fixed</span></td>
                  </tr>
                  <tr class="changing-row">
                    <td><code>B5</code></td>
                    <td><strong>Physics Practical (Changing Cell)</strong></td>
                    <td>50</td>
                    <td id="gs_cell_b5" class="cell-highlight"><strong>${this.practicalScore.toFixed(1)}</strong></td>
                    <td><span class="badge-variable">Variable</span></td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr class="result-row">
                    <td><code>B6</code></td>
                    <td colspan="2"><strong>Total Percentage = (SUM(B2:B5)/350)*100</strong></td>
                    <td colspan="2" id="gs_cell_b6" class="pct-highlight"><strong>${currentPct}%</strong></td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <!-- Right: Interactive Goal Seek Dialog -->
            <div class="goalseek-dialog-card">
              <div class="dialog-title">
                <i class="fa-solid fa-sliders"></i> Excel Goal Seek Parameters
              </div>
              <div class="dialog-form">
                <div class="dialog-field">
                  <label>Set cell:</label>
                  <input type="text" class="dialog-input" value="B6 (Total Percentage)" readonly>
                </div>
                <div class="dialog-field">
                  <label>To value (Target %):</label>
                  <input type="number" class="dialog-input" id="gs_input_target" value="${this.goalTarget}" min="65" max="95" step="0.5">
                </div>
                <div class="dialog-field">
                  <label>By changing cell:</label>
                  <input type="text" class="dialog-input" value="B5 (Physics Practical)" readonly>
                </div>

                <div class="dialog-actions">
                  <button type="button" class="btn-dialog-run" id="gs_btn_solve">
                    <i class="fa-solid fa-gear fa-spin-hover"></i> Run Goal Seek Solver
                  </button>
                  <button type="button" class="btn-dialog-reset" id="gs_btn_reset">Reset</button>
                </div>
              </div>

              <!-- Iteration Convergence Monitor -->
              <div class="dialog-iteration-box" id="gs_iteration_log" style="display: none;">
                <!-- Filled via animation -->
              </div>
            </div>
          </div>
        </div>
      `;
    }

    buildScenarioHtml() {
      return `
        <div class="scenario-container">
          <div class="whatif-intro-banner">
            <i class="fa-solid fa-diagram-project"></i>
            <div>
              <strong>Scenario Manager Model:</strong> Annual College National Science Day Exhibition Budget. 
              Compare three operational cases (Realistic, Best-Case Sponsorship, Conservative/Rain-Plan) to project Net Surplus or Deficit.
            </div>
          </div>

          <div class="scenario-table-wrapper">
            <div class="scenario-card-header">
              <div class="scenario-header-title">
                <i class="fa-solid fa-table-columns"></i> Side-by-Side Scenario Summary Matrix
              </div>
              <div class="scenario-actions">
                <button type="button" class="btn-scenario-pill active" data-scenario="all">Compare All 3 Cases</button>
              </div>
            </div>

            <table class="scenario-summary-table">
              <thead>
                <tr>
                  <th style="width: 32%;">Scenario Parameters &amp; Metric Keys</th>
                  <th style="width: 22%; background: #eff6ff;">Current Values</th>
                  <th style="width: 23%; background: #ecfdf5;">Best-Case (High Sponsor)</th>
                  <th style="width: 23%; background: #fff1f2;">Conservative (Low Turnout)</th>
                </tr>
              </thead>
              <tbody>
                <tr class="section-divider">
                  <td colspan="4"><strong>Changing Cells (Input Variables)</strong></td>
                </tr>
                <tr>
                  <td><code>$B$2</code> Registered Scholars (Count)</td>
                  <td>250</td>
                  <td style="color: #059669; font-weight: 700;">400</td>
                  <td style="color: #e11d48; font-weight: 700;">140</td>
                </tr>
                <tr>
                  <td><code>$B$3</code> Registration Fee per Head (₹)</td>
                  <td>₹100</td>
                  <td>₹100</td>
                  <td>₹80</td>
                </tr>
                <tr>
                  <td><code>$B$4</code> External Sponsorship Grant (₹)</td>
                  <td>₹15,000</td>
                  <td style="color: #059669; font-weight: 700;">₹28,000</td>
                  <td style="color: #e11d48; font-weight: 700;">₹6,000</td>
                </tr>
                <tr>
                  <td><code>$B$5</code> Kit &amp; Lunch Cost per Head (₹)</td>
                  <td>₹65</td>
                  <td>₹60 (Bulk discount)</td>
                  <td>₹70</td>
                </tr>
                <tr>
                  <td><code>$B$6</code> Speaker Honorarium &amp; Venue (₹)</td>
                  <td>₹12,000</td>
                  <td>₹14,000</td>
                  <td>₹9,000</td>
                </tr>

                <tr class="section-divider">
                  <td colspan="4"><strong>Result Cells (Calculated Financial Outcomes)</strong></td>
                </tr>
                <tr>
                  <td><code>$B$8</code> <strong>Total Revenue (Fees + Grant)</strong></td>
                  <td>₹40,000</td>
                  <td style="color: #059669; font-weight: 700;">₹68,000</td>
                  <td style="color: #e11d48; font-weight: 700;">₹17,200</td>
                </tr>
                <tr>
                  <td><code>$B$9</code> <strong>Total Expenditure</strong></td>
                  <td>₹28,250</td>
                  <td>₹38,000</td>
                  <td>₹18,800</td>
                </tr>
                <tr class="scenario-net-row">
                  <td><code>$B$10</code> <strong>NET SURPLUS / (DEFICIT)</strong></td>
                  <td style="color: #0284c7; font-weight: 800; font-size: 1.05rem;">+ ₹11,750</td>
                  <td style="color: #059669; font-weight: 800; font-size: 1.05rem; background: #dcfce7;">+ ₹30,000 (Surplus)</td>
                  <td style="color: #e11d48; font-weight: 800; font-size: 1.05rem; background: #ffe4e6;">- ₹1,600 (Deficit!)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      `;
    }

    bindEvents() {
      // Tab switcher
      const tabGS = this.container.querySelector('#whatif_tab_goalseek');
      const tabScen = this.container.querySelector('#whatif_tab_scenario');

      if (tabGS) {
        tabGS.addEventListener('click', () => {
          this.mode = 'goalseek';
          this.render();
          this.bindEvents();
        });
      }

      if (tabScen) {
        tabScen.addEventListener('click', () => {
          this.mode = 'scenario';
          this.render();
          this.bindEvents();
        });
      }

      // Goal Seek solver button
      const solveBtn = this.container.querySelector('#gs_btn_solve');
      const resetBtn = this.container.querySelector('#gs_btn_reset');
      const targetInput = this.container.querySelector('#gs_input_target');

      if (solveBtn) {
        solveBtn.addEventListener('click', () => {
          const target = parseFloat(targetInput.value) || 82;
          this.goalTarget = target;
          this.runGoalSeekSolver(target);
        });
      }

      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.practicalScore = 32;
          this.goalTarget = 82;
          this.render();
          this.bindEvents();
        });
      }
    }

    runGoalSeekSolver(targetPct) {
      const logBox = this.container.querySelector('#gs_iteration_log');
      const b5Cell = this.container.querySelector('#gs_cell_b5');
      const b6Cell = this.container.querySelector('#gs_cell_b6');

      if (!logBox) return;

      logBox.style.display = 'block';
      logBox.innerHTML = `
        <div class="iteration-header">
          <i class="fa-solid fa-spinner fa-spin"></i> Goal Seek Solver executing iterative approximations...
        </div>
      `;

      const theorySum = 78 + 85 + 72; // 235
      const maxMarks = 350;

      // Formula: (235 + P) / 350 * 100 = targetPct
      // P = (targetPct * 350 / 100) - 235
      const exactSolution = (targetPct * maxMarks / 100) - theorySum;

      const steps = [
        { trial: 20, pct: (((theorySum + 20) / maxMarks) * 100).toFixed(1) },
        { trial: 35, pct: (((theorySum + 35) / maxMarks) * 100).toFixed(1) },
        { trial: 45, pct: (((theorySum + 45) / maxMarks) * 100).toFixed(1) },
        { trial: Math.min(50, Math.max(0, exactSolution)), pct: targetPct.toFixed(1) }
      ];

      let idx = 0;
      const interval = setInterval(() => {
        if (idx < steps.length) {
          const s = steps[idx];
          logBox.innerHTML += `
            <div class="iter-row">
              <span class="iter-num">Step ${idx + 1}:</span>
              <span>Trial Score: <strong>${s.trial.toFixed(1)}</strong></span>
              <span>&rarr; Total %: <strong>${s.pct}%</strong></span>
            </div>
          `;
          if (b5Cell) b5Cell.innerHTML = `<strong>${s.trial.toFixed(1)}</strong>`;
          if (b6Cell) b6Cell.innerHTML = `<strong>${s.pct}%</strong>`;
          idx++;
        } else {
          clearInterval(interval);
          this.practicalScore = Math.min(50, Math.max(0, exactSolution));
          const isPossible = exactSolution <= 50 && exactSolution >= 0;

          logBox.innerHTML += `
            <div class="iter-summary ${isPossible ? 'success' : 'warning'}">
              <i class="fa-solid ${isPossible ? 'fa-circle-check' : 'fa-triangle-exclamation'}"></i>
              ${isPossible 
                ? `<strong>Goal Seek Converged!</strong> Target of <strong>${targetPct}%</strong> requires a Practical score of <strong>${exactSolution.toFixed(1)} / 50</strong>.`
                : `<strong>Boundary Notice:</strong> To achieve ${targetPct}%, student needs ${exactSolution.toFixed(1)} marks, which exceeds practical ceiling (50 marks).`
              }
            </div>
          `;
        }
      }, 350);
    }
  }

  // Global Engine Mount
  window.WhatIfEngine = {
    create: (containerId, options) => new WhatIfStudio(containerId, options)
  };

})(window);
