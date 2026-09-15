/**
 * Computer-Fund-OfficeAutomat-SVAGDC: Live Interactive In-Browser Spreadsheet Engine
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function(window) {
  'use strict';

  // Spreadsheet Engine Model
  class MiniSpreadsheet {
    constructor(containerId, options = {}) {
      this.container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
      this.rows = options.rows || 10;
      this.cols = options.cols || 6;
      this.data = {}; // key: 'A1', val: { raw: '', computed: '' }
      this.activeCell = 'A1';
      this.colNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

      if (options.initialData) {
        this.loadData(options.initialData);
      } else {
        this.loadSampleData('marks');
      }

      this.render();
    }

    loadData(dataObj) {
      this.data = {};
      for (const [k, v] of Object.entries(dataObj)) {
        this.data[k.toUpperCase()] = { raw: String(v), computed: '' };
      }
      this.recalculateAll();
    }

    loadSampleData(presetName) {
      if (presetName === 'marks') {
        this.data = {
          'A1': { raw: 'Student Name', computed: '' },
          'B1': { raw: 'Physics', computed: '' },
          'C1': { raw: 'Comp Sci', computed: '' },
          'D1': { raw: 'Total', computed: '' },
          'E1': { raw: 'Average', computed: '' },
          'F1': { raw: 'Result', computed: '' },

          'A2': { raw: 'Ramesh', computed: '' },
          'B2': { raw: '85', computed: '' },
          'C2': { raw: '90', computed: '' },
          'D2': { raw: '=SUM(B2:C2)', computed: '' },
          'E2': { raw: '=AVERAGE(B2:C2)', computed: '' },
          'F2': { raw: '=IF(E2>=50,"Pass","Fail")', computed: '' },

          'A3': { raw: 'Sita', computed: '' },
          'B3': { raw: '78', computed: '' },
          'C3': { raw: '82', computed: '' },
          'D3': { raw: '=SUM(B3:C3)', computed: '' },
          'E3': { raw: '=AVERAGE(B3:C3)', computed: '' },
          'F3': { raw: '=IF(E3>=50,"Pass","Fail")', computed: '' },

          'A4': { raw: 'Kiran', computed: '' },
          'B4': { raw: '42', computed: '' },
          'C4': { raw: '38', computed: '' },
          'D4': { raw: '=SUM(B4:C4)', computed: '' },
          'E4': { raw: '=AVERAGE(B4:C4)', computed: '' },
          'F4': { raw: '=IF(E4>=50,"Pass","Fail")', computed: '' },

          'A5': { raw: 'Highest', computed: '' },
          'B5': { raw: '=MAX(B2:B4)', computed: '' },
          'C5': { raw: '=MAX(C2:C4)', computed: '' },
          'D5': { raw: '=MAX(D2:D4)', computed: '' },
          'E5': { raw: '=AVERAGE(E2:E4)', computed: '' },
          'F5': { raw: 'COUNT: =COUNT(B2:B4)', computed: '' }
        };
      } else if (presetName === 'payroll') {
        this.data = {
          'A1': { raw: 'Emp Name', computed: '' },
          'B1': { raw: 'Basic Pay', computed: '' },
          'C1': { raw: 'DA (30%)', computed: '' },
          'D1': { raw: 'HRA (16%)', computed: '' },
          'E1': { raw: 'Gross Pay', computed: '' },
          'F1': { raw: 'PF (12%)', computed: '' },

          'A2': { raw: 'Bapanayya', computed: '' },
          'B2': { raw: '50000', computed: '' },
          'C2': { raw: '=B2*0.30', computed: '' },
          'D2': { raw: '=B2*0.16', computed: '' },
          'E2': { raw: '=SUM(B2:D2)', computed: '' },
          'F2': { raw: '=B2*0.12', computed: '' },

          'A3': { raw: 'Suresh', computed: '' },
          'B3': { raw: '42000', computed: '' },
          'C3': { raw: '=B3*0.30', computed: '' },
          'D3': { raw: '=B3*0.16', computed: '' },
          'E3': { raw: '=SUM(B3:D3)', computed: '' },
          'F3': { raw: '=B3*0.12', computed: '' },

          'A4': { raw: 'Anitha', computed: '' },
          'B4': { raw: '48000', computed: '' },
          'C4': { raw: '=B4*0.30', computed: '' },
          'D4': { raw: '=B4*0.16', computed: '' },
          'E4': { raw: '=SUM(B4:D4)', computed: '' },
          'F4': { raw: '=B4*0.12', computed: '' }
        };
      } else if (presetName === 'lookups') {
        this.data = {
          'A1': { raw: 'Emp ID', computed: '' },
          'B1': { raw: 'Name', computed: '' },
          'C1': { raw: 'Dept', computed: '' },
          'D1': { raw: 'Salary', computed: '' },
          'E1': { raw: 'Search ID', computed: '' },
          'F1': { raw: 'Lookup Result', computed: '' },

          'A2': { raw: '101', computed: '' },
          'B2': { raw: 'Dr. Rao', computed: '' },
          'C2': { raw: 'Physics', computed: '' },
          'D2': { raw: '75000', computed: '' },
          'E2': { raw: '102', computed: '' },
          'F2': { raw: '=VLOOKUP(E2, A2:D4, 2, FALSE)', computed: '' },

          'A3': { raw: '102', computed: '' },
          'B3': { raw: 'Priya', computed: '' },
          'C3': { raw: 'Computers', computed: '' },
          'D3': { raw: '62000', computed: '' },
          'E3': { raw: 'Salary Lookup', computed: '' },
          'F3': { raw: '=XLOOKUP(E2, A2:A4, D2:D4)', computed: '' },

          'A4': { raw: '103', computed: '' },
          'B4': { raw: 'Kavitha', computed: '' },
          'C4': { raw: 'Electronics', computed: '' },
          'D4': { raw: '58000', computed: '' },
          'E4': { raw: 'Index Match', computed: '' },
          'F4': { raw: '=INDEX(C2:C4, MATCH(E2, A2:A4, 0))', computed: '' }
        };
      }
      this.recalculateAll();
    }

    getCellValue(ref) {
      ref = ref.toUpperCase().replace(/\$/g, '');
      const cell = this.data[ref];
      if (!cell) return 0;
      const num = parseFloat(cell.computed);
      return isNaN(num) ? cell.computed : num;
    }

    getRawValue(ref) {
      ref = ref.toUpperCase().replace(/\$/g, '');
      return this.data[ref] ? this.data[ref].raw : '';
    }

    setCellValue(ref, val) {
      ref = ref.toUpperCase().replace(/\$/g, '');
      this.data[ref] = { raw: String(val), computed: '' };
      this.recalculateAll();
      this.updateDOM();
    }

    expandRange(rangeStr) {
      const parts = rangeStr.toUpperCase().replace(/\$/g, '').split(':');
      if (parts.length === 1) return [parts[0]];
      const start = parts[0];
      const end = parts[1];
      const startCol = start.charCodeAt(0);
      const startRow = parseInt(start.substring(1), 10);
      const endCol = end.charCodeAt(0);
      const endRow = parseInt(end.substring(1), 10);

      const cells = [];
      const minCol = Math.min(startCol, endCol);
      const maxCol = Math.max(startCol, endCol);
      const minRow = Math.min(startRow, endRow);
      const maxRow = Math.max(startRow, endRow);

      for (let r = minRow; r <= maxRow; r++) {
        for (let c = minCol; c <= maxCol; c++) {
          cells.push(`${String.fromCharCode(c)}${r}`);
        }
      }
      return cells;
    }

    evaluateFormula(formula) {
      if (!formula.startsWith('=')) return formula;
      const clean = formula.substring(1).trim();

      try {
        // --- 1. SUM(range) ---
        const sumMatch = clean.match(/^SUM\((.+)\)$/i);
        if (sumMatch) {
          const cells = this.expandRange(sumMatch[1]);
          let sum = 0;
          for (const c of cells) {
            const val = parseFloat(this.getCellValue(c));
            if (!isNaN(val)) sum += val;
          }
          return Math.round(sum * 100) / 100;
        }

        // --- 2. AVERAGE(range) ---
        const avgMatch = clean.match(/^AVERAGE\((.+)\)$/i);
        if (avgMatch) {
          const cells = this.expandRange(avgMatch[1]);
          let sum = 0, count = 0;
          for (const c of cells) {
            const val = parseFloat(this.getCellValue(c));
            if (!isNaN(val)) { sum += val; count++; }
          }
          return count > 0 ? Math.round((sum / count) * 100) / 100 : 0;
        }

        // --- 3. COUNT(range) ---
        const countMatch = clean.match(/^COUNT\((.+)\)$/i);
        if (countMatch) {
          const cells = this.expandRange(countMatch[1]);
          return cells.filter(c => typeof this.getCellValue(c) === 'number').length;
        }

        // --- 4. MAX(range) / MIN(range) ---
        const maxMatch = clean.match(/^MAX\((.+)\)$/i);
        if (maxMatch) {
          const cells = this.expandRange(maxMatch[1]);
          const nums = cells.map(c => parseFloat(this.getCellValue(c))).filter(n => !isNaN(n));
          return nums.length ? Math.max(...nums) : 0;
        }

        const minMatch = clean.match(/^MIN\((.+)\)$/i);
        if (minMatch) {
          const cells = this.expandRange(minMatch[1]);
          const nums = cells.map(c => parseFloat(this.getCellValue(c))).filter(n => !isNaN(n));
          return nums.length ? Math.min(...nums) : 0;
        }

        // --- 5. IF(cond, trueVal, falseVal) ---
        const ifMatch = clean.match(/^IF\(([^,]+),([^,]+),([^)]+)\)$/i);
        if (ifMatch) {
          const cond = ifMatch[1].trim();
          const trueVal = ifMatch[2].trim().replace(/^"|"$/g, '');
          const falseVal = ifMatch[3].trim().replace(/^"|"$/g, '');
          const condResult = this.evaluateCondition(cond);
          return condResult ? trueVal : falseVal;
        }

        // --- 6. TEXT Functions: LEFT, RIGHT, MID, LEN, TRIM, CONCAT, TEXTJOIN ---
        const leftMatch = clean.match(/^LEFT\(([^,]+),(\d+)\)$/i);
        if (leftMatch) {
          const str = String(this.resolveOperand(leftMatch[1]));
          return str.substring(0, parseInt(leftMatch[2], 10));
        }

        const rightMatch = clean.match(/^RIGHT\(([^,]+),(\d+)\)$/i);
        if (rightMatch) {
          const str = String(this.resolveOperand(rightMatch[1]));
          const num = parseInt(rightMatch[2], 10);
          return str.substring(Math.max(0, str.length - num));
        }

        const midMatch = clean.match(/^MID\(([^,]+),(\d+),(\d+)\)$/i);
        if (midMatch) {
          const str = String(this.resolveOperand(midMatch[1]));
          const start = parseInt(midMatch[2], 10) - 1;
          const length = parseInt(midMatch[3], 10);
          return str.substring(start, start + length);
        }

        const lenMatch = clean.match(/^LEN\((.+)\)$/i);
        if (lenMatch) {
          return String(this.resolveOperand(lenMatch[1])).length;
        }

        const trimMatch = clean.match(/^TRIM\((.+)\)$/i);
        if (trimMatch) {
          return String(this.resolveOperand(trimMatch[1])).trim();
        }

        // --- 7. VLOOKUP(val, range, col_index, [exact]) ---
        const vlookupMatch = clean.match(/^VLOOKUP\(([^,]+),\s*([A-Z0-9]+:[A-Z0-9]+),\s*(\d+)(?:,\s*([^)]+))?\)$/i);
        if (vlookupMatch) {
          const searchVal = String(this.resolveOperand(vlookupMatch[1])).trim().toLowerCase();
          const rangeCells = this.expandRange(vlookupMatch[2]);
          const colIdx = parseInt(vlookupMatch[3], 10);

          // Find start and end cols
          const [startCell, endCell] = vlookupMatch[2].split(':');
          const startColChar = startCell[0];
          const targetColChar = String.fromCharCode(startColChar.charCodeAt(0) + colIdx - 1);

          // Get unique rows in range
          const rows = [...new Set(rangeCells.map(c => c.substring(1)))];
          for (const r of rows) {
            const firstCellVal = String(this.getCellValue(`${startColChar}${r}`)).trim().toLowerCase();
            if (firstCellVal === searchVal) {
              return this.getCellValue(`${targetColChar}${r}`);
            }
          }
          return '#N/A';
        }

        // --- 8. XLOOKUP(searchVal, lookupArray, returnArray) ---
        const xlookupMatch = clean.match(/^XLOOKUP\(([^,]+),\s*([A-Z0-9]+:[A-Z0-9]+),\s*([A-Z0-9]+:[A-Z0-9]+)\)$/i);
        if (xlookupMatch) {
          const searchVal = String(this.resolveOperand(xlookupMatch[1])).trim().toLowerCase();
          const lookupCells = this.expandRange(xlookupMatch[2]);
          const returnCells = this.expandRange(xlookupMatch[3]);

          for (let i = 0; i < lookupCells.length; i++) {
            if (String(this.getCellValue(lookupCells[i])).trim().toLowerCase() === searchVal) {
              return this.getCellValue(returnCells[i]);
            }
          }
          return '#N/A';
        }

        // --- 9. INDEX(array, row, [col]) & MATCH(val, array, [type]) ---
        const indexMatch = clean.match(/^INDEX\(([^,]+),\s*(\d+)(?:,\s*(\d+))?\)$/i);
        if (indexMatch) {
          const cells = this.expandRange(indexMatch[1]);
          const row = parseInt(indexMatch[2], 10) - 1;
          return cells[row] ? this.getCellValue(cells[row]) : '#REF!';
        }

        const matchMatch = clean.match(/^MATCH\(([^,]+),\s*([A-Z0-9]+:[A-Z0-9]+)(?:,\s*(\d+))?\)$/i);
        if (matchMatch) {
          const searchVal = String(this.resolveOperand(matchMatch[1])).trim().toLowerCase();
          const cells = this.expandRange(matchMatch[2]);
          for (let i = 0; i < cells.length; i++) {
            if (String(this.getCellValue(cells[i])).trim().toLowerCase() === searchVal) {
              return i + 1;
            }
          }
          return '#N/A';
        }

        // --- 10. General Arithmetic Expressions: B2*0.3, B2+C2, etc. ---
        let expr = clean.replace(/([A-Z][0-9]+)/gi, (m) => {
          const v = this.getCellValue(m);
          return typeof v === 'number' ? v : `"${v}"`;
        });

        // Basic safe evaluator for math operators +, -, *, /, %
        if (/^[0-9+\-*/().\s%]+$/.test(expr)) {
          // eslint-disable-next-line no-eval
          const res = Function(`"use strict"; return (${expr});`)();
          return typeof res === 'number' ? Math.round(res * 100) / 100 : res;
        }

        return formula;
      } catch (err) {
        return '#ERROR!';
      }
    }

    resolveOperand(op) {
      op = op.trim().replace(/^"|"$/g, '');
      if (/^[A-Z][0-9]+$/i.test(op)) {
        return this.getCellValue(op);
      }
      return op;
    }

    evaluateCondition(cond) {
      const match = cond.match(/^(.+?)(>=|<=|==|=|!=|>|<)(.+)$/);
      if (!match) return false;
      const left = parseFloat(this.resolveOperand(match[1]));
      const op = match[2] === '=' ? '==' : match[2];
      const right = parseFloat(this.resolveOperand(match[3]));

      switch (op) {
        case '>=': return left >= right;
        case '<=': return left <= right;
        case '==': return left === right;
        case '!=': return left !== right;
        case '>': return left > right;
        case '<': return left < right;
        default: return false;
      }
    }

    recalculateAll() {
      // 2-pass topological recalculation
      for (let pass = 0; pass < 3; pass++) {
        for (const [ref, cell] of Object.entries(this.data)) {
          if (cell.raw.startsWith('=')) {
            cell.computed = this.evaluateFormula(cell.raw);
          } else {
            cell.computed = cell.raw;
          }
        }
      }
    }

    render() {
      if (!this.container) return;

      this.container.innerHTML = `
        <div class="spreadsheet-container">
          <div class="spreadsheet-formula-bar">
            <span class="formula-label-fx">fx</span>
            <span class="formula-cell-ref" id="active_cell_badge">${this.activeCell}</span>
            <input type="text" class="formula-input-field" id="formula_input_field" value="${this.getRawValue(this.activeCell)}" placeholder="Enter value or formula like =SUM(B2:C2) or =IF(...)">
          </div>

          <div class="spreadsheet-table-wrapper">
            <table class="spreadsheet-table">
              <thead>
                <tr>
                  <th class="row-header">#</th>
                  ${this.colNames.slice(0, this.cols).map(c => `<th>${c}</th>`).join('')}
                </tr>
              </thead>
              <tbody>
                ${Array.from({ length: this.rows }, (_, r) => {
                  const rowNum = r + 1;
                  return `
                    <tr>
                      <th class="row-header">${rowNum}</th>
                      ${this.colNames.slice(0, this.cols).map(c => {
                        const cellRef = `${c}${rowNum}`;
                        const cell = this.data[cellRef] || { raw: '', computed: '' };
                        const isFormula = cell.raw.startsWith('=');
                        return `
                          <td class="cell-input ${cellRef === this.activeCell ? 'cell-active' : ''}" 
                              data-ref="${cellRef}" 
                              title="${isFormula ? cell.raw : cellRef}">
                            <input type="text" class="cell-editor" value="${cell.computed}" data-ref="${cellRef}">
                          </td>
                        `;
                      }).join('')}
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>

          <div class="spreadsheet-sample-presets">
            <strong><i class="fa-solid fa-folder-open"></i> Practice Presets:</strong>
            <button type="button" class="preset-chip" data-preset="marks">📊 Student Marks & Grading (Ex 8 & 9)</button>
            <button type="button" class="preset-chip" data-preset="payroll">💼 Employee Payroll (Ex 7)</button>
            <button type="button" class="preset-chip" data-preset="lookups">🔍 VLOOKUP & XLOOKUP (Ex 10)</button>
          </div>
        </div>
      `;

      this.attachEvents();
    }

    attachEvents() {
      const formulaInput = this.container.querySelector('#formula_input_field');
      const badge = this.container.querySelector('#active_cell_badge');

      // Cell selection & editing
      this.container.querySelectorAll('.cell-input').forEach(td => {
        const input = td.querySelector('.cell-editor');
        const ref = td.getAttribute('data-ref');

        td.addEventListener('click', () => {
          this.setActiveCell(ref);
        });

        input.addEventListener('focus', () => {
          this.setActiveCell(ref);
          input.value = this.getRawValue(ref);
        });

        input.addEventListener('blur', () => {
          this.setCellValue(ref, input.value);
        });

        input.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            input.blur();
          }
        });
      });

      // Formula bar events
      if (formulaInput) {
        formulaInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            this.setCellValue(this.activeCell, formulaInput.value);
          }
        });
        formulaInput.addEventListener('blur', () => {
          this.setCellValue(this.activeCell, formulaInput.value);
        });
      }

      // Presets
      this.container.querySelectorAll('.preset-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const preset = chip.getAttribute('data-preset');
          this.loadSampleData(preset);
          this.updateDOM();
        });
      });
    }

    setActiveCell(ref) {
      this.activeCell = ref;
      const badge = this.container.querySelector('#active_cell_badge');
      const formulaInput = this.container.querySelector('#formula_input_field');

      if (badge) badge.textContent = ref;
      if (formulaInput) formulaInput.value = this.getRawValue(ref);

      this.container.querySelectorAll('.cell-input').forEach(td => {
        td.classList.toggle('cell-active', td.getAttribute('data-ref') === ref);
      });
    }

    updateDOM() {
      this.container.querySelectorAll('.cell-input').forEach(td => {
        const ref = td.getAttribute('data-ref');
        const input = td.querySelector('.cell-editor');
        const cell = this.data[ref] || { raw: '', computed: '' };
        if (input && document.activeElement !== input) {
          input.value = cell.computed;
          td.title = cell.raw.startsWith('=') ? cell.raw : ref;
        }
      });

      const formulaInput = this.container.querySelector('#formula_input_field');
      if (formulaInput && document.activeElement !== formulaInput) {
        formulaInput.value = this.getRawValue(this.activeCell);
      }
    }
  }

  // Global mounting helper
  window.SpreadsheetEngine = {
    create: (containerId, options) => new MiniSpreadsheet(containerId, options)
  };

})(window);
