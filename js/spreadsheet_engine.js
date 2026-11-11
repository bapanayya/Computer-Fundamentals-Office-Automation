/**
 * Computer-Fund-OfficeAutomat-SVAGDC: Live Interactive In-Browser Spreadsheet Engine
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 *
 * Full-featured Excel-compatible spreadsheet engine with:
 * - Text Functions: TEXTJOIN, CONCAT, CONCATENATE, LEFT, RIGHT, MID, LEN, TRIM, UPPER, LOWER, PROPER, REPT, FIND, SEARCH, SUBSTITUTE
 * - Math & Stats: SUM, AVERAGE, COUNT, COUNTA, COUNTBLANK, COUNTIF, SUMIF, AVERAGEIF, MIN, MAX, LARGE, SMALL, ROUND, ROUNDUP, ROUNDDOWN, INT, ABS, MOD, POWER, SQRT, PRODUCT
 * - Logical: IF (nested), AND, OR, NOT, IFERROR, TRUE, FALSE
 * - Lookups: VLOOKUP, HLOOKUP, XLOOKUP, INDEX, MATCH
 * - Date & Info: TODAY, NOW, YEAR, MONTH, DAY, ISBLANK, ISNUMBER, ISTEXT
 * - Operators: +, -, *, /, %, ^, &, =, <>, !=, <, >, <=, >=
 * - Cell Formatting: Fill color, Text color, Bold, Italic, Alignment (Left, Center, Right)
 * - Dynamic Grid: Add/Remove Rows and Columns, Clear Sheet, Rich Practice Presets
 */

(function(window) {
  'use strict';

  class MiniSpreadsheet {
    constructor(containerId, options = {}) {
      this.container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
      this.rows = options.rows || 18;
      this.cols = options.cols || 10;
      this.data = {}; // key: 'A1', val: { raw: '', computed: '', bgColor: '', textColor: '', bold: false, italic: false, align: 'left', wrapText: false }
      this.merges = {}; // masterRef -> { startCol, startRow, endCol, endRow, colspan, rowspan, rangeStr, cells }
      this.mergedCells = {}; // secondaryRef -> masterRef
      this.colWidths = options.colWidths || {};
      this.rowHeights = options.rowHeights || {};
      this.defaultColWidth = 110;
      this.defaultRowHeight = 28;
      this.activeCell = 'A1';
      this.selectionStart = null;
      this.selectionEnd = null;
      this.isSelecting = false;
      this.currentPreset = options.initialPreset || 'marks';
      this.colNames = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
      ];

      if (options.initialData) {
        this.loadData(options.initialData);
      } else {
        this.loadSampleData(this.currentPreset);
      }

      this.render();
    }

    // --- Column & Row Dimension Helpers ---
    getColWidth(col) {
      return this.colWidths[col] || this.defaultColWidth;
    }

    setColWidth(col, width) {
      const w = Math.max(50, Math.min(650, Math.round(width)));
      this.colWidths[col] = w;
      this.applyColWidthDOM(col, w);
    }

    getRowHeight(row) {
      return this.rowHeights[row] || (row === 1 ? 32 : this.defaultRowHeight);
    }

    setRowHeight(row, height) {
      const h = Math.max(22, Math.min(300, Math.round(height)));
      this.rowHeights[row] = h;
      this.applyRowHeightDOM(row, h);
    }

    applyColWidthDOM(col, width) {
      if (!this.container) return;
      const colElem = this.container.querySelector(`col[data-col="${col}"]`);
      if (colElem) {
        colElem.style.width = `${width}px`;
        colElem.style.minWidth = `${width}px`;
      }
      const thElem = this.container.querySelector(`th.col-header[data-col="${col}"]`);
      if (thElem) {
        thElem.style.width = `${width}px`;
        thElem.style.minWidth = `${width}px`;
      }
    }

    applyRowHeightDOM(row, height) {
      if (!this.container) return;
      const trElem = this.container.querySelector(`tr[data-row="${row}"]`);
      if (trElem) {
        trElem.style.height = `${height}px`;
      }
      const thElem = this.container.querySelector(`th.row-header[data-row="${row}"]`);
      if (thElem) {
        thElem.style.height = `${height}px`;
      }
    }

    autoFitColumn(col) {
      let maxLen = col.length;
      for (let r = 1; r <= this.rows; r++) {
        const ref = `${col}${r}`;
        const cell = this.data[ref];
        if (cell) {
          const val = cell.computed !== undefined && cell.computed !== '' ? String(cell.computed) : (cell.raw || '');
          if (!this.mergedCells[ref]) {
            const lines = val.split('\n');
            for (const line of lines) {
              if (line.length > maxLen) maxLen = line.length;
            }
          }
        }
      }
      const neededWidth = Math.max(95, Math.min(480, Math.round(maxLen * 8.8 + 34)));
      this.colWidths[col] = neededWidth;
      this.applyColWidthDOM(col, neededWidth);
      return neededWidth;
    }

    autoFitColumnsSilent() {
      for (let c = 1; c <= this.cols; c++) {
        const colName = this.indexToColName(c);
        let maxLen = colName.length;
        for (let r = 1; r <= this.rows; r++) {
          const ref = `${colName}${r}`;
          const cell = this.data[ref];
          if (cell) {
            const val = cell.computed !== undefined && cell.computed !== '' ? String(cell.computed) : (cell.raw || '');
            if (!this.mergedCells[ref]) {
              const lines = val.split('\n');
              for (const line of lines) {
                if (line.length > maxLen) maxLen = line.length;
              }
            }
          }
        }
        const neededWidth = Math.max(95, Math.min(480, Math.round(maxLen * 8.8 + 34)));
        this.colWidths[colName] = neededWidth;
      }
    }

    autoFitColumns() {
      this.autoFitColumnsSilent();
      this.render();
    }

    // --- Column Coordinate Helpers ---
    colNameToIndex(col) {
      let idx = 0;
      for (let i = 0; i < col.length; i++) {
        idx = idx * 26 + (col.charCodeAt(i) - 64);
      }
      return idx; // 1-based: A=1, B=2 ... Z=26
    }

    indexToColName(idx) {
      let name = '';
      while (idx > 0) {
        const rem = (idx - 1) % 26;
        name = String.fromCharCode(65 + rem) + name;
        idx = Math.floor((idx - 1) / 26);
      }
      return name;
    }

    // --- Cell Merge & Split Operations ---
    parseRange(rangeStr) {
      if (!rangeStr || !rangeStr.includes(':')) return null;
      const parts = rangeStr.split(':').map(s => s.trim().toUpperCase());
      if (parts.length !== 2) return null;
      const m1 = parts[0].match(/^([A-Z]+)(\d+)$/);
      const m2 = parts[1].match(/^([A-Z]+)(\d+)$/);
      if (!m1 || !m2) return null;

      const col1 = this.colNameToIndex(m1[1]);
      const row1 = parseInt(m1[2], 10);
      const col2 = this.colNameToIndex(m2[1]);
      const row2 = parseInt(m2[2], 10);

      const minCol = Math.min(col1, col2);
      const maxCol = Math.max(col1, col2);
      const minRow = Math.min(row1, row2);
      const maxRow = Math.max(row1, row2);

      return {
        minCol, maxCol, minRow, maxRow,
        startRef: `${this.indexToColName(minCol)}${minRow}`,
        endRef: `${this.indexToColName(maxCol)}${maxRow}`,
        colspan: maxCol - minCol + 1,
        rowspan: maxRow - minRow + 1
      };
    }

    mergeRange(rangeStr, silent = false) {
      const parsed = this.parseRange(rangeStr);
      if (!parsed) return false;
      const { minCol, maxCol, minRow, maxRow, startRef, endRef, colspan, rowspan } = parsed;
      if (colspan === 1 && rowspan === 1) return false;

      // Expand dimensions if needed
      if (maxRow > this.rows) this.rows = maxRow;
      if (maxCol > this.cols) this.cols = Math.min(this.colNames.length, maxCol);

      // Collect all cells in rectangle
      const cells = [];
      for (let r = minRow; r <= maxRow; r++) {
        for (let c = minCol; c <= maxCol; c++) {
          cells.push(`${this.indexToColName(c)}${r}`);
        }
      }

      // Remove overlapping merges
      for (const master of Object.keys(this.merges)) {
        const m = this.merges[master];
        if (m && m.cells.some(c => cells.includes(c))) {
          m.cells.forEach(c => delete this.mergedCells[c]);
          delete this.merges[master];
        }
      }

      const masterRef = startRef;
      cells.forEach(c => {
        if (c !== masterRef) {
          this.mergedCells[c] = masterRef;
        }
      });

      this.merges[masterRef] = {
        startCol: minCol,
        endCol: maxCol,
        startRow: minRow,
        endRow: maxRow,
        colspan,
        rowspan,
        rangeStr: `${startRef}:${endRef}`,
        cells
      };

      if (!this.data[masterRef]) {
        this.data[masterRef] = { raw: '', computed: '', bgColor: '', textColor: '', bold: false, italic: false, align: 'center' };
      }
      this.data[masterRef].align = 'center';

      if (!silent) {
        this.recalculateAll();
        this.render();
        this.setActiveCell(masterRef);
      }
      return true;
    }

    splitCell(ref) {
      const target = ref || this.activeCell;
      let masterRef = null;
      if (this.merges[target]) {
        masterRef = target;
      } else if (this.mergedCells[target]) {
        masterRef = this.mergedCells[target];
      }

      if (!masterRef || !this.merges[masterRef]) {
        return false;
      }

      const merge = this.merges[masterRef];
      merge.cells.forEach(c => {
        delete this.mergedCells[c];
      });
      delete this.merges[masterRef];

      this.recalculateAll();
      this.render();
      this.setActiveCell(masterRef);
      return true;
    }

    isCellMerged(ref) {
      return !!(this.merges[ref] || this.mergedCells[ref]);
    }

    getMergeInfo(ref) {
      if (this.merges[ref]) return this.merges[ref];
      if (this.mergedCells[ref]) return this.merges[this.mergedCells[ref]];
      return null;
    }

    highlightSelection() {
      if (!this.container) return;
      const allCells = this.container.querySelectorAll('.cell-input');
      allCells.forEach(td => td.classList.remove('cell-in-selection'));

      const badge = this.container.querySelector('#active_cell_badge');

      if (!this.selectionStart || !this.selectionEnd || this.selectionStart === this.selectionEnd) {
        if (badge) {
          const mInfo = this.getMergeInfo(this.activeCell);
          badge.textContent = mInfo ? `${this.activeCell} (Merged: ${mInfo.rangeStr})` : this.activeCell;
        }
        return;
      }

      const m1 = this.selectionStart.match(/^([A-Z]+)(\d+)$/);
      const m2 = this.selectionEnd.match(/^([A-Z]+)(\d+)$/);
      if (!m1 || !m2) return;

      const c1 = this.colNameToIndex(m1[1]);
      const r1 = parseInt(m1[2], 10);
      const c2 = this.colNameToIndex(m2[1]);
      const r2 = parseInt(m2[2], 10);

      const minCol = Math.min(c1, c2);
      const maxCol = Math.max(c1, c2);
      const minRow = Math.min(r1, r2);
      const maxRow = Math.max(r1, r2);

      allCells.forEach(td => {
        const ref = td.getAttribute('data-ref');
        if (ref) {
          const m = ref.match(/^([A-Z]+)(\d+)$/);
          if (m) {
            const col = this.colNameToIndex(m[1]);
            const row = parseInt(m[2], 10);
            if (col >= minCol && col <= maxCol && row >= minRow && row <= maxRow) {
              td.classList.add('cell-in-selection');
            }
          }
        }
      });

      if (badge) {
        badge.textContent = `${this.indexToColName(minCol)}${minRow}:${this.indexToColName(maxCol)}${maxRow} (Selected)`;
      }
    }

    // --- Download / Export Methods ---
    exportToExcel() {
      const preset = this.currentPreset || 'practiced';
      const dateStr = new Date().toISOString().slice(0, 10);
      const filename = `${preset}_spreadsheet_${dateStr}.xls`;

      let maxR = 1, maxC = 1;
      for (let r = 1; r <= this.rows; r++) {
        for (let c = 1; c <= this.cols; c++) {
          const ref = `${this.indexToColName(c)}${r}`;
          const cell = this.data[ref];
          const isMerge = this.isCellMerged(ref);
          if (cell && (cell.raw || cell.computed || cell.bgColor || cell.bold || cell.italic || isMerge)) {
            if (r > maxR) maxR = r;
            if (c > maxC) maxC = c;
          }
        }
      }
      maxR = Math.min(this.rows, Math.max(maxR + 2, 8));
      maxC = Math.min(this.cols, Math.max(maxC + 1, 6));

      let thHtml = `<th style="background:#f1f5f9; color:#475569; font-weight:bold; border:0.5pt solid #cbd5e1; width:36px; text-align:center;">#</th>`;
      for (let c = 1; c <= maxC; c++) {
        thHtml += `<th style="background:#f1f5f9; color:#334155; font-weight:bold; border:0.5pt solid #cbd5e1; text-align:center; min-width:85px; padding:6px 10px;">${this.indexToColName(c)}</th>`;
      }

      let trHtml = '';
      for (let r = 1; r <= maxR; r++) {
        let tds = `<th style="background:#f1f5f9; color:#475569; font-weight:bold; border:0.5pt solid #cbd5e1; text-align:center; padding:4px 6px;">${r}</th>`;
        for (let c = 1; c <= maxC; c++) {
          const ref = `${this.indexToColName(c)}${r}`;
          if (this.mergedCells && this.mergedCells[ref]) {
            continue; // Skip secondary merged cell
          }

          const merge = this.merges && this.merges[ref];
          const colspanAttr = merge && merge.colspan > 1 ? ` colspan="${merge.colspan}"` : '';
          const rowspanAttr = merge && merge.rowspan > 1 ? ` rowspan="${merge.rowspan}"` : '';

          const cell = this.data[ref] || {};
          const raw = cell.raw || '';
          const val = cell.computed !== undefined ? cell.computed : '';
          const isFormula = raw.startsWith('=');
          const fmlaAttr = isFormula ? ` x:fmla="${raw.replace(/"/g, '&quot;')}"` : '';

          const styleRules = [
            `border: 0.5pt solid #cbd5e1;`,
            `padding: 4px 8px;`,
            `vertical-align: middle;`,
            cell.bgColor ? `background-color: ${cell.bgColor};` : `background-color: #ffffff;`,
            cell.textColor ? `color: ${cell.textColor};` : `color: #1e293b;`,
            cell.bold ? `font-weight: bold;` : ``,
            cell.italic ? `font-style: italic;` : ``,
            cell.align ? `text-align: ${cell.align};` : `text-align: left;`
          ].filter(Boolean).join(' ');

          tds += `<td style="${styleRules}"${colspanAttr}${rowspanAttr}${fmlaAttr}>${val}</td>`;
        }
        trHtml += `<tr>${tds}</tr>\n`;
      }

      const content = `
        <html xmlns:o="urn:schemas-microsoft-com:office:office"
              xmlns:x="urn:schemas-microsoft-com:office:excel"
              xmlns="http://www.w3.org/TR/REC-html40">
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <!--[if gte mso 9]>
          <xml>
            <x:ExcelWorkbook>
              <x:ExcelWorksheets>
                <x:ExcelWorksheet>
                  <x:Name>Practiced Sheet</x:Name>
                  <x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions>
                </x:ExcelWorksheet>
              </x:ExcelWorksheets>
            </x:ExcelWorkbook>
          </xml>
          <![endif]-->
          <style>
            table { border-collapse: collapse; font-family: Calibri, 'Segoe UI', Arial, sans-serif; font-size: 11pt; }
          </style>
        </head>
        <body>
          <table border="1">
            <thead><tr>${thHtml}</tr></thead>
            <tbody>${trHtml}</tbody>
          </table>
        </body>
        </html>
      `.trim();

      const blob = new Blob([content], { type: 'application/vnd.ms-excel;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    exportToCSV(includeFormulas = false) {
      const preset = this.currentPreset || 'practiced';
      const dateStr = new Date().toISOString().slice(0, 10);
      const modeStr = includeFormulas ? 'formulas' : 'values';
      const filename = `${preset}_spreadsheet_${modeStr}_${dateStr}.csv`;

      let maxR = 1, maxC = 1;
      for (let r = 1; r <= this.rows; r++) {
        for (let c = 1; c <= this.cols; c++) {
          const ref = `${this.indexToColName(c)}${r}`;
          const cell = this.data[ref];
          const isMerge = this.isCellMerged(ref);
          if (cell && (cell.raw || cell.computed || isMerge)) {
            if (r > maxR) maxR = r;
            if (c > maxC) maxC = c;
          }
        }
      }
      maxR = Math.min(this.rows, Math.max(maxR + 1, 6));
      maxC = Math.min(this.cols, Math.max(maxC + 1, 5));

      const rows = [];
      const header = ['#'];
      for (let c = 1; c <= maxC; c++) {
        header.push(this.indexToColName(c));
      }
      rows.push(header.join(','));

      for (let r = 1; r <= maxR; r++) {
        const rowData = [r.toString()];
        for (let c = 1; c <= maxC; c++) {
          const ref = `${this.indexToColName(c)}${r}`;
          if (this.mergedCells && this.mergedCells[ref]) {
            rowData.push('""');
            continue;
          }
          const cell = this.data[ref] || {};
          let val = includeFormulas && cell.raw && cell.raw.startsWith('=')
            ? cell.raw
            : (cell.computed !== undefined ? String(cell.computed) : '');
          val = val.replace(/"/g, '""');
          if (val.includes(',') || val.includes('"') || val.includes('\n')) {
            val = `"${val}"`;
          }
          rowData.push(val);
        }
        rows.push(rowData.join(','));
      }

      const csvContent = '\uFEFF' + rows.join('\r\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    // --- Data Management ---
    loadData(dataObj) {
      this.data = {};
      this.merges = {};
      this.mergedCells = {};
      this.colWidths = {};
      this.rowHeights = {};
      this.selectionStart = null;
      this.selectionEnd = null;
      for (const [k, v] of Object.entries(dataObj)) {
        const ref = k.toUpperCase().replace(/\$/g, '');
        if (typeof v === 'object' && v !== null && v.raw !== undefined) {
          this.data[ref] = {
            raw: String(v.raw),
            computed: '',
            bgColor: v.bgColor || '',
            textColor: v.textColor || '',
            bold: !!v.bold,
            italic: !!v.italic,
            align: v.align || 'left',
            wrapText: !!v.wrapText
          };
        } else {
          this.data[ref] = {
            raw: String(v),
            computed: '',
            bgColor: '',
            textColor: '',
            bold: false,
            italic: false,
            align: 'left',
            wrapText: false
          };
        }
      }
      this.recalculateAll();
      this.autoFitColumnsSilent();
    }

    loadSampleData(presetName) {
      this.currentPreset = presetName;
      this.data = {};
      this.merges = {};
      this.mergedCells = {};
      this.colWidths = {};
      this.rowHeights = {};
      this.selectionStart = null;
      this.selectionEnd = null;

      if (presetName === 'marks') {
        this.rows = Math.max(this.rows, 18);
        this.cols = Math.max(this.cols, 10);
        this.data = {
          'A1': { raw: 'Student Name', bold: true, bgColor: '#f1f5f9' },
          'B1': { raw: 'Physics', bold: true, bgColor: '#f1f5f9' },
          'C1': { raw: 'Comp Sci', bold: true, bgColor: '#f1f5f9' },
          'D1': { raw: 'Maths', bold: true, bgColor: '#f1f5f9' },
          'E1': { raw: 'Total Marks', bold: true, bgColor: '#f1f5f9' },
          'F1': { raw: 'Average %', bold: true, bgColor: '#f1f5f9' },
          'G1': { raw: 'Result Status', bold: true, bgColor: '#f1f5f9' },
          'H1': { raw: 'Grade Classification', bold: true, bgColor: '#f1f5f9' },

          'A2': { raw: 'Ramesh' },
          'B2': { raw: '85' },
          'C2': { raw: '90' },
          'D2': { raw: '88' },
          'E2': { raw: '=SUM(B2:D2)' },
          'F2': { raw: '=ROUND(AVERAGE(B2:D2), 1)' },
          'G2': { raw: '=IF(AND(B2>=35, C2>=35, D2>=35), "Pass", "Fail")', textColor: '#15803d', bold: true },
          'H2': { raw: '=IF(F2>=75, "Distinction", IF(F2>=60, "First Class", IF(F2>=50, "Second Class", "Pass")))' },

          'A3': { raw: 'Sita' },
          'B3': { raw: '78' },
          'C3': { raw: '82' },
          'D3': { raw: '75' },
          'E3': { raw: '=SUM(B3:D3)' },
          'F3': { raw: '=ROUND(AVERAGE(B3:D3), 1)' },
          'G3': { raw: '=IF(AND(B3>=35, C3>=35, D3>=35), "Pass", "Fail")', textColor: '#15803d', bold: true },
          'H3': { raw: '=IF(F3>=75, "Distinction", IF(F3>=60, "First Class", IF(F3>=50, "Second Class", "Pass")))' },

          'A4': { raw: 'Kiran' },
          'B4': { raw: '42' },
          'C4': { raw: '32' },
          'D4': { raw: '48' },
          'E4': { raw: '=SUM(B4:D4)' },
          'F4': { raw: '=ROUND(AVERAGE(B4:D4), 1)' },
          'G4': { raw: '=IF(AND(B4>=35, C4>=35, D4>=35), "Pass", "Fail")', textColor: '#b91c1c', bold: true },
          'H4': { raw: '=IF(F4>=75, "Distinction", IF(F4>=60, "First Class", IF(F4>=50, "Second Class", "Pass")))' },

          'A5': { raw: 'Priya' },
          'B5': { raw: '92' },
          'C5': { raw: '95' },
          'D5': { raw: '94' },
          'E5': { raw: '=SUM(B5:D5)' },
          'F5': { raw: '=ROUND(AVERAGE(B5:D5), 1)' },
          'G5': { raw: '=IF(AND(B5>=35, C5>=35, D5>=35), "Pass", "Fail")', textColor: '#15803d', bold: true },
          'H5': { raw: '=IF(F5>=75, "Distinction", IF(F5>=60, "First Class", IF(F5>=50, "Second Class", "Pass")))' },

          'A6': { raw: 'Summary Stats', bold: true, bgColor: '#e0f2fe' },
          'B6': { raw: 'Class Max:', bold: true },
          'C6': { raw: '=MAX(B2:D5)' },
          'D6': { raw: 'Class Min:', bold: true },
          'E6': { raw: '=MIN(B2:D5)' },
          'F6': { raw: 'Pass Count:', bold: true },
          'G6': { raw: '=COUNTIF(G2:G5, "Pass")', bold: true, textColor: '#15803d' },
          'H6': { raw: 'Fail: =COUNTIF(G2:G5, "Fail")', textColor: '#b91c1c' }
        };
      } else if (presetName === 'text') {
        this.rows = Math.max(this.rows, 18);
        this.cols = Math.max(this.cols, 10);
        this.data = {
          'A1': { raw: 'Subject Name', bold: true, bgColor: '#f1f5f9' },
          'B1': { raw: 'Dept Code', bold: true, bgColor: '#f1f5f9' },
          'C1': { raw: 'Course Level', bold: true, bgColor: '#f1f5f9' },
          'D1': { raw: 'Full Tag (CONCAT)', bold: true, bgColor: '#e0f2fe' },
          'E1': { raw: 'UPPER Case', bold: true, bgColor: '#e0f2fe' },
          'F1': { raw: 'Code Prefix (LEFT)', bold: true, bgColor: '#e0f2fe' },
          'G1': { raw: 'Length (LEN)', bold: true, bgColor: '#e0f2fe' },
          'H1': { raw: 'Curriculum List (TEXTJOIN)', bold: true, bgColor: '#fef3c7' },

          'A2': { raw: 'Physics' },
          'B2': { raw: 'PHY-101' },
          'C2': { raw: 'Undergraduate' },
          'D2': { raw: '=CONCAT(A2, " (", B2, ")")' },
          'E2': { raw: '=UPPER(A2)' },
          'F2': { raw: '=LEFT(B2, 3)' },
          'G2': { raw: '=LEN(A2)' },
          'H2': { raw: '=TEXTJOIN(", ", TRUE, A2:A5)', bold: true, textColor: '#0369a1' },

          'A3': { raw: 'Chemistry' },
          'B3': { raw: 'CHE-101' },
          'C3': { raw: 'Undergraduate' },
          'D2': { raw: '=CONCAT(A2, " (", B2, ")")' },
          'D3': { raw: '=CONCAT(A3, " (", B3, ")")' },
          'E3': { raw: '=UPPER(A3)' },
          'F3': { raw: '=LEFT(B3, 3)' },
          'G3': { raw: '=LEN(A3)' },
          'H3': { raw: 'Try: =TEXTJOIN(" - ", TRUE, B2:B5)' },

          'A4': { raw: 'Maths' },
          'B4': { raw: 'MAT-101' },
          'C4': { raw: 'Undergraduate' },
          'D4': { raw: '=CONCAT(A4, " (", B4, ")")' },
          'E4': { raw: '=UPPER(A4)' },
          'F4': { raw: '=LEFT(B4, 3)' },
          'G4': { raw: '=LEN(A4)' },

          'A5': { raw: 'Computer Science' },
          'B5': { raw: 'CSC-101' },
          'C5': { raw: 'Undergraduate' },
          'D5': { raw: '=CONCAT(A5, " (", B5, ")")' },
          'E5': { raw: '=UPPER(A5)' },
          'F5': { raw: '=LEFT(B5, 3)' },
          'G5': { raw: '=LEN(A5)' },

          'A7': { raw: 'Formula Practice Box:', bold: true, bgColor: '#fef3c7' },
          'B7': { raw: '=PROPER("s.v.a. govt degree college")' },
          'C7': { raw: '=MID(B2, 5, 3)' },
          'D7': { raw: '=TRIM("   Department   of   Physics   ")' }
        };
      } else if (presetName === 'payroll') {
        this.rows = Math.max(this.rows, 18);
        this.cols = Math.max(this.cols, 10);
        this.data = {
          'A1': { raw: 'Emp Name', bold: true, bgColor: '#f1f5f9' },
          'B1': { raw: 'Basic Pay', bold: true, bgColor: '#f1f5f9' },
          'C1': { raw: 'DA (30%)', bold: true, bgColor: '#f1f5f9' },
          'D1': { raw: 'HRA (16%)', bold: true, bgColor: '#f1f5f9' },
          'E1': { raw: 'Gross Pay', bold: true, bgColor: '#bbf7d0' },
          'F1': { raw: 'PF (12%)', bold: true, bgColor: '#fecdd3' },
          'G1': { raw: 'Net Salary', bold: true, bgColor: '#bae6fd' },

          'A2': { raw: 'Dr. Bapanayya' },
          'B2': { raw: '50000' },
          'C2': { raw: '=B2*30%' },
          'D2': { raw: '=B2*16%' },
          'E2': { raw: '=SUM(B2:D2)' },
          'F2': { raw: '=B2*12%' },
          'G2': { raw: '=E2-F2', bold: true },

          'A3': { raw: 'Suresh Kumar' },
          'B3': { raw: '42000' },
          'C3': { raw: '=B3*30%' },
          'D3': { raw: '=B3*16%' },
          'E3': { raw: '=SUM(B3:D3)' },
          'F3': { raw: '=B3*12%' },
          'G3': { raw: '=E3-F3', bold: true },

          'A4': { raw: 'Anitha Devi' },
          'B4': { raw: '48000' },
          'C4': { raw: '=B4*30%' },
          'D4': { raw: '=B4*16%' },
          'E4': { raw: '=SUM(B4:D4)' },
          'F4': { raw: '=B4*12%' },
          'G4': { raw: '=E4-F4', bold: true },

          'A5': { raw: 'Total Department Payroll:', bold: true, bgColor: '#f1f5f9' },
          'B5': { raw: '=SUM(B2:B4)', bold: true },
          'E5': { raw: '=SUM(E2:E4)', bold: true },
          'G5': { raw: '=SUM(G2:G4)', bold: true, textColor: '#1e40af' }
        };
      } else if (presetName === 'lookups') {
        this.rows = Math.max(this.rows, 18);
        this.cols = Math.max(this.cols, 10);
        this.data = {
          'A1': { raw: 'Emp ID', bold: true, bgColor: '#f1f5f9' },
          'B1': { raw: 'Staff Name', bold: true, bgColor: '#f1f5f9' },
          'C1': { raw: 'Department', bold: true, bgColor: '#f1f5f9' },
          'D1': { raw: 'Monthly Salary', bold: true, bgColor: '#f1f5f9' },
          'E1': { raw: 'Status', bold: true, bgColor: '#f1f5f9' },
          'F1': { raw: 'Target ID', bold: true, bgColor: '#fef3c7' },
          'G1': { raw: 'Lookup Result', bold: true, bgColor: '#fef3c7' },
          'H1': { raw: 'Lookup Method', bold: true, bgColor: '#fef3c7' },

          'A2': { raw: '101' },
          'B2': { raw: 'Dr. Rao' },
          'C2': { raw: 'Physics' },
          'D2': { raw: '75000' },
          'E2': { raw: 'Confirmed' },
          'F2': { raw: '102', bold: true, textColor: '#0284c7' },
          'G2': { raw: '=VLOOKUP(F2, A2:D4, 2, FALSE)', bold: true },
          'H2': { raw: 'VLOOKUP (Name)' },

          'A3': { raw: '102' },
          'B3': { raw: 'Priya Sharma' },
          'C3': { raw: 'Computers' },
          'D3': { raw: '62000' },
          'E3': { raw: 'Confirmed' },
          'F3': { raw: '103', bold: true, textColor: '#0284c7' },
          'G3': { raw: '=XLOOKUP(F3, A2:A4, D2:D4)', bold: true },
          'H3': { raw: 'XLOOKUP (Salary)' },

          'A4': { raw: '103' },
          'B4': { raw: 'Kavitha M' },
          'C4': { raw: 'Electronics' },
          'D4': { raw: '58000' },
          'E4': { raw: 'Probation' },
          'F4': { raw: '101', bold: true, textColor: '#0284c7' },
          'G4': { raw: '=INDEX(C2:C4, MATCH(F4, A2:A4, 0))', bold: true },
          'H4': { raw: 'INDEX + MATCH (Dept)' },

          'F5': { raw: '999', bold: true, textColor: '#b91c1c' },
          'G5': { raw: '=IFERROR(VLOOKUP(F5, A2:D4, 2, FALSE), "ID Not Found")', bold: true, textColor: '#b91c1c' },
          'H5': { raw: 'IFERROR Handling' }
        };
      } else if (presetName === 'timetable') {
        this.rows = Math.max(this.rows, 18);
        this.cols = Math.max(this.cols, 10);
        this.data = {
          'A1': { raw: 'Day / Time', bold: true, bgColor: '#f1f5f9' },
          'B1': { raw: '10:00 - 10:50', bold: true, bgColor: '#f1f5f9' },
          'C1': { raw: '10:50 - 11:40', bold: true, bgColor: '#f1f5f9' },
          'D1': { raw: '11:40 - 11:50', bold: true, bgColor: '#fef08a' },
          'E1': { raw: '11:50 - 12:40', bold: true, bgColor: '#f1f5f9' },
          'F1': { raw: '12:40 - 01:30', bold: true, bgColor: '#fed7aa' },
          'G1': { raw: '01:30 - 02:20', bold: true, bgColor: '#f1f5f9' },
          'H1': { raw: '02:20 - 03:10', bold: true, bgColor: '#f1f5f9' },

          'A2': { raw: 'Monday', bold: true },
          'B2': { raw: 'Physics Theory' },
          'C2': { raw: 'Comp Science' },
          'D2': { raw: 'TEA BREAK', bgColor: '#fef08a', bold: true },
          'E2': { raw: 'Mathematics' },
          'F2': { raw: 'LUNCH BREAK', bgColor: '#fed7aa', bold: true },
          'G2': { raw: 'Physics Lab (Batch A)', bgColor: '#bbf7d0' },
          'H2': { raw: 'Physics Lab (Batch A)', bgColor: '#bbf7d0' },

          'A3': { raw: 'Tuesday', bold: true },
          'B3': { raw: 'Mathematics' },
          'C3': { raw: 'Physics Theory' },
          'D3': { raw: 'TEA BREAK', bgColor: '#fef08a', bold: true },
          'E3': { raw: 'Comp Science' },
          'F3': { raw: 'LUNCH BREAK', bgColor: '#fed7aa', bold: true },
          'G3': { raw: 'General English' },
          'H3': { raw: 'Skill Course' },

          'A4': { raw: 'Wednesday', bold: true },
          'B4': { raw: 'Comp Science' },
          'C4': { raw: 'Mathematics' },
          'D4': { raw: 'TEA BREAK', bgColor: '#fef08a', bold: true },
          'E4': { raw: 'Physics Theory' },
          'F4': { raw: 'LUNCH BREAK', bgColor: '#fed7aa', bold: true },
          'G4': { raw: 'Computer Lab (Batch B)', bgColor: '#bae6fd', bold: true, align: 'center' },
          'H4': { raw: '' }
        };

        // Pre-merge 2-hour practical lab slots for clear visual illustration
        this.mergeRange('G2:H2', true);
        this.mergeRange('G4:H4', true);
      } else if (presetName === 'blank') {
        this.rows = Math.max(this.rows, 18);
        this.cols = Math.max(this.cols, 10);
        this.data = {};
      }

      this.recalculateAll();
      this.autoFitColumnsSilent();
    }

    getCellValue(ref) {
      ref = ref.toUpperCase().replace(/\$/g, '');
      const cell = this.data[ref];
      if (!cell || cell.raw === '' || cell.raw === undefined) return '';
      const comp = cell.computed !== undefined ? cell.computed : cell.raw;
      const num = parseFloat(comp);
      return !isNaN(num) && String(num) === String(comp).trim() ? num : comp;
    }

    getRawValue(ref) {
      ref = ref.toUpperCase().replace(/\$/g, '');
      return this.data[ref] ? this.data[ref].raw : '';
    }

    setCellValue(ref, val) {
      ref = ref.toUpperCase().replace(/\$/g, '');
      if (!this.data[ref]) {
        this.data[ref] = { raw: '', computed: '', bgColor: '', textColor: '', bold: false, italic: false, align: 'left', wrapText: false };
      }
      this.data[ref].raw = String(val);
      this.recalculateAll();
      this.updateDOM();
    }

    setCellFormat(ref, prop, value) {
      ref = ref.toUpperCase().replace(/\$/g, '');
      if (!this.data[ref]) {
        this.data[ref] = { raw: '', computed: '', bgColor: '', textColor: '', bold: false, italic: false, align: 'left', wrapText: false };
      }
      this.data[ref][prop] = value;
      this.updateDOM();
    }

    expandRange(rangeStr) {
      rangeStr = rangeStr.toUpperCase().replace(/\$/g, '').trim();
      const parts = rangeStr.split(':');
      if (parts.length === 1) return [parts[0]];
      const start = parts[0].trim();
      const end = parts[1].trim();

      const startColMatch = start.match(/^[A-Z]+/);
      const startRowMatch = start.match(/\d+$/);
      const endColMatch = end.match(/^[A-Z]+/);
      const endRowMatch = end.match(/\d+$/);

      if (!startColMatch || !startRowMatch || !endColMatch || !endRowMatch) {
        return [start];
      }

      const minCol = Math.min(this.colNameToIndex(startColMatch[0]), this.colNameToIndex(endColMatch[0]));
      const maxCol = Math.max(this.colNameToIndex(startColMatch[0]), this.colNameToIndex(endColMatch[0]));
      const minRow = Math.min(parseInt(startRowMatch[0], 10), parseInt(endRowMatch[0], 10));
      const maxRow = Math.max(parseInt(startRowMatch[0], 10), parseInt(endRowMatch[0], 10));

      const cells = [];
      for (let r = minRow; r <= maxRow; r++) {
        for (let c = minCol; c <= maxCol; c++) {
          cells.push(`${this.indexToColName(c)}${r}`);
        }
      }
      return cells;
    }

    // --- Robust Recursive Formula Evaluator ---
    splitTopLevel(str, separator = ',') {
      const args = [];
      let current = '';
      let depth = 0;
      let inQuote = false;
      let quoteChar = '';

      for (let i = 0; i < str.length; i++) {
        const ch = str[i];
        if ((ch === '"' || ch === "'") && !inQuote) {
          inQuote = true;
          quoteChar = ch;
          current += ch;
        } else if (ch === quoteChar && inQuote) {
          inQuote = false;
          quoteChar = '';
          current += ch;
        } else if (!inQuote && (ch === '(' || ch === '[' || ch === '{')) {
          depth++;
          current += ch;
        } else if (!inQuote && (ch === ')' || ch === ']' || ch === '}')) {
          depth--;
          current += ch;
        } else if (!inQuote && depth === 0 && str.substr(i, separator.length) === separator) {
          args.push(current.trim());
          current = '';
          i += separator.length - 1;
        } else {
          current += ch;
        }
      }
      if (current.trim().length > 0 || args.length > 0) {
        args.push(current.trim());
      }
      return args;
    }

    getFunctionCall(str) {
      str = str.trim();
      const match = str.match(/^([A-Za-z0-9_.]+)\s*\(/);
      if (!match) return null;

      const fnName = match[1].toUpperCase();
      const startIdx = match[0].length;
      let depth = 1;
      let inQuote = false;
      let quoteChar = '';

      for (let i = startIdx; i < str.length; i++) {
        const ch = str[i];
        if ((ch === '"' || ch === "'") && !inQuote) {
          inQuote = true;
          quoteChar = ch;
        } else if (ch === quoteChar && inQuote) {
          inQuote = false;
          quoteChar = '';
        } else if (!inQuote && ch === '(') {
          depth++;
        } else if (!inQuote && ch === ')') {
          depth--;
          if (depth === 0) {
            if (i === str.length - 1) {
              return {
                name: fnName,
                argsStr: str.substring(startIdx, i)
              };
            }
            return null;
          }
        }
      }
      return null;
    }

    resolveRangeOrValues(rawArg) {
      rawArg = rawArg.trim();
      if (/^\$?[A-Z]+\$?[0-9]+:\$?[A-Z]+\$?[0-9]+$/i.test(rawArg)) {
        const cells = this.expandRange(rawArg);
        return cells.map(c => this.getCellValue(c));
      }
      const val = this.evaluateExpr(rawArg);
      return [val];
    }

    evaluateExpr(expr) {
      if (typeof expr !== 'string') return expr;
      expr = expr.trim();
      if (expr.startsWith('=')) expr = expr.substring(1).trim();
      if (!expr) return '';

      // Strip wrapping outer parentheses if balanced: e.g. (A1 + B1)
      if (expr.startsWith('(') && expr.endsWith(')')) {
        let depth = 0, canStrip = true;
        for (let i = 0; i < expr.length - 1; i++) {
          if (expr[i] === '(') depth++;
          else if (expr[i] === ')') depth--;
          if (depth === 0) { canStrip = false; break; }
        }
        if (canStrip) return this.evaluateExpr(expr.substring(1, expr.length - 1));
      }

      // 1. Top-Level Function Call
      const fn = this.getFunctionCall(expr);
      if (fn) {
        const rawArgs = this.splitTopLevel(fn.argsStr, ',');
        return this.executeFunction(fn.name, rawArgs);
      }

      // 2. Comparison operators: =, <>, !=, <=, >=, <, >
      const compOps = ['<=', '>=', '<>', '!=', '==', '=', '<', '>'];
      for (const op of compOps) {
        const parts = this.splitTopLevel(expr, op);
        if (parts.length === 2) {
          const left = this.evaluateExpr(parts[0]);
          const right = this.evaluateExpr(parts[1]);
          const lNum = parseFloat(left);
          const rNum = parseFloat(right);
          const useNum = !isNaN(lNum) && !isNaN(rNum) && typeof left !== 'string' && typeof right !== 'string';
          const a = useNum ? lNum : left;
          const b = useNum ? rNum : right;

          switch (op) {
            case '=':
            case '==': return a == b;
            case '<>':
            case '!=': return a != b;
            case '<': return a < b;
            case '<=': return a <= b;
            case '>': return a > b;
            case '>=': return a >= b;
          }
        }
      }

      // 3. String Concatenation operator: &
      const concatParts = this.splitTopLevel(expr, '&');
      if (concatParts.length > 1) {
        return concatParts.map(p => {
          const val = this.evaluateExpr(p);
          return val === null || val === undefined ? '' : String(val);
        }).join('');
      }

      // 4. Additive operators: + and -
      let cur = '';
      let depth = 0;
      let inQ = false;
      let qCh = '';
      const tokens = [];

      for (let i = 0; i < expr.length; i++) {
        const ch = expr[i];
        if ((ch === '"' || ch === "'") && !inQ) { inQ = true; qCh = ch; cur += ch; }
        else if (ch === qCh && inQ) { inQ = false; cur += ch; }
        else if (!inQ && ch === '(') { depth++; cur += ch; }
        else if (!inQ && ch === ')') { depth--; cur += ch; }
        else if (!inQ && depth === 0 && (ch === '+' || ch === '-') && i > 0 && !['+', '-', '*', '/', '^', '(', ','].includes(expr[i - 1].trim())) {
          tokens.push(cur.trim());
          tokens.push(ch);
          cur = '';
        } else {
          cur += ch;
        }
      }
      if (tokens.length > 0) {
        tokens.push(cur.trim());
        let res = parseFloat(this.evaluateExpr(tokens[0])) || 0;
        for (let i = 1; i < tokens.length; i += 2) {
          const op = tokens[i];
          const nextVal = parseFloat(this.evaluateExpr(tokens[i + 1])) || 0;
          if (op === '+') res += nextVal;
          else if (op === '-') res -= nextVal;
        }
        return Math.round(res * 100000) / 100000;
      }

      // 5. Multiplicative operators: * and /
      cur = '';
      depth = 0;
      inQ = false;
      qCh = '';
      const mulTokens = [];

      for (let i = 0; i < expr.length; i++) {
        const ch = expr[i];
        if ((ch === '"' || ch === "'") && !inQ) { inQ = true; qCh = ch; cur += ch; }
        else if (ch === qCh && inQ) { inQ = false; cur += ch; }
        else if (!inQ && ch === '(') { depth++; cur += ch; }
        else if (!inQ && ch === ')') { depth--; cur += ch; }
        else if (!inQ && depth === 0 && (ch === '*' || ch === '/')) {
          mulTokens.push(cur.trim());
          mulTokens.push(ch);
          cur = '';
        } else {
          cur += ch;
        }
      }
      if (mulTokens.length > 0) {
        mulTokens.push(cur.trim());
        let res = parseFloat(this.evaluateExpr(mulTokens[0])) || 0;
        for (let i = 1; i < mulTokens.length; i += 2) {
          const op = mulTokens[i];
          const nextVal = parseFloat(this.evaluateExpr(mulTokens[i + 1])) || 0;
          if (op === '*') res *= nextVal;
          else if (op === '/') {
            if (nextVal === 0) return '#DIV/0!';
            res /= nextVal;
          }
        }
        return Math.round(res * 100000) / 100000;
      }

      // 6. Percentage postfix e.g. 30% -> 0.3
      if (expr.endsWith('%')) {
        const base = this.evaluateExpr(expr.slice(0, -1));
        return (parseFloat(base) || 0) / 100;
      }

      // 7. Literals & References
      if ((expr.startsWith('"') && expr.endsWith('"')) || (expr.startsWith("'") && expr.endsWith("'"))) {
        return expr.substring(1, expr.length - 1);
      }
      if (expr.toUpperCase() === 'TRUE') return true;
      if (expr.toUpperCase() === 'FALSE') return false;
      if (/^-?\d+(\.\d+)?$/.test(expr)) {
        return parseFloat(expr);
      }
      if (/^\$?[A-Z]+\$?[0-9]+$/i.test(expr)) {
        return this.getCellValue(expr);
      }

      return expr;
    }

    executeFunction(name, rawArgs) {
      try {
        switch (name) {
          // --- TEXT FUNCTIONS ---
          case 'TEXTJOIN': {
            if (rawArgs.length < 3) return '#VALUE!';
            const delim = String(this.evaluateExpr(rawArgs[0]));
            const ignoreEmpty = Boolean(this.evaluateExpr(rawArgs[1]));
            let items = [];
            for (let i = 2; i < rawArgs.length; i++) {
              items.push(...this.resolveRangeOrValues(rawArgs[i]));
            }
            if (ignoreEmpty) {
              items = items.filter(x => x !== '' && x !== null && x !== undefined);
            }
            return items.join(delim);
          }
          case 'CONCAT':
          case 'CONCATENATE': {
            let items = [];
            for (const arg of rawArgs) {
              items.push(...this.resolveRangeOrValues(arg));
            }
            return items.map(x => (x === null || x === undefined ? '' : String(x))).join('');
          }
          case 'LEFT': {
            const str = String(this.evaluateExpr(rawArgs[0]));
            const n = rawArgs[1] !== undefined ? parseInt(this.evaluateExpr(rawArgs[1]), 10) : 1;
            return str.substring(0, n);
          }
          case 'RIGHT': {
            const str = String(this.evaluateExpr(rawArgs[0]));
            const n = rawArgs[1] !== undefined ? parseInt(this.evaluateExpr(rawArgs[1]), 10) : 1;
            return str.substring(Math.max(0, str.length - n));
          }
          case 'MID': {
            const str = String(this.evaluateExpr(rawArgs[0]));
            const start = parseInt(this.evaluateExpr(rawArgs[1]), 10) - 1;
            const len = parseInt(this.evaluateExpr(rawArgs[2]), 10);
            return str.substring(start, start + len);
          }
          case 'LEN': {
            return String(this.evaluateExpr(rawArgs[0])).length;
          }
          case 'TRIM': {
            return String(this.evaluateExpr(rawArgs[0])).replace(/\s+/g, ' ').trim();
          }
          case 'UPPER': {
            return String(this.evaluateExpr(rawArgs[0])).toUpperCase();
          }
          case 'LOWER': {
            return String(this.evaluateExpr(rawArgs[0])).toLowerCase();
          }
          case 'PROPER': {
            return String(this.evaluateExpr(rawArgs[0])).toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
          }
          case 'REPT': {
            const str = String(this.evaluateExpr(rawArgs[0]));
            const times = parseInt(this.evaluateExpr(rawArgs[1]), 10) || 0;
            return str.repeat(Math.max(0, times));
          }
          case 'FIND': {
            const f = String(this.evaluateExpr(rawArgs[0]));
            const s = String(this.evaluateExpr(rawArgs[1]));
            const start = rawArgs[2] ? parseInt(this.evaluateExpr(rawArgs[2]), 10) - 1 : 0;
            const idx = s.indexOf(f, start);
            return idx !== -1 ? idx + 1 : '#VALUE!';
          }
          case 'SEARCH': {
            const f = String(this.evaluateExpr(rawArgs[0])).toLowerCase();
            const s = String(this.evaluateExpr(rawArgs[1])).toLowerCase();
            const start = rawArgs[2] ? parseInt(this.evaluateExpr(rawArgs[2]), 10) - 1 : 0;
            const idx = s.indexOf(f, start);
            return idx !== -1 ? idx + 1 : '#VALUE!';
          }
          case 'SUBSTITUTE': {
            let str = String(this.evaluateExpr(rawArgs[0]));
            const oldT = String(this.evaluateExpr(rawArgs[1]));
            const newT = String(this.evaluateExpr(rawArgs[2]));
            return str.split(oldT).join(newT);
          }

          // --- MATH & STATISTICAL FUNCTIONS ---
          case 'SUM': {
            let sum = 0;
            for (const arg of rawArgs) {
              for (const v of this.resolveRangeOrValues(arg)) {
                const n = parseFloat(v);
                if (!isNaN(n)) sum += n;
              }
            }
            return Math.round(sum * 100000) / 100000;
          }
          case 'AVERAGE': {
            let sum = 0, count = 0;
            for (const arg of rawArgs) {
              for (const v of this.resolveRangeOrValues(arg)) {
                const n = parseFloat(v);
                if (!isNaN(n)) { sum += n; count++; }
              }
            }
            return count > 0 ? Math.round((sum / count) * 100) / 100 : 0;
          }
          case 'COUNT': {
            let count = 0;
            for (const arg of rawArgs) {
              for (const v of this.resolveRangeOrValues(arg)) {
                if (typeof v === 'number' || (v !== '' && !isNaN(parseFloat(v)) && String(parseFloat(v)) === String(v).trim())) {
                  count++;
                }
              }
            }
            return count;
          }
          case 'COUNTA': {
            let count = 0;
            for (const arg of rawArgs) {
              for (const v of this.resolveRangeOrValues(arg)) {
                if (v !== '' && v !== null && v !== undefined) count++;
              }
            }
            return count;
          }
          case 'COUNTBLANK': {
            let count = 0;
            for (const arg of rawArgs) {
              for (const v of this.resolveRangeOrValues(arg)) {
                if (v === '' || v === null || v === undefined) count++;
              }
            }
            return count;
          }
          case 'COUNTIF': {
            const rangeVals = this.resolveRangeOrValues(rawArgs[0]);
            let crit = this.evaluateExpr(rawArgs[1]);
            let count = 0;
            const critStr = String(crit).trim();
            const matchOp = critStr.match(/^([><]=?|<>|=)?\s*(.*)$/);
            const op = (matchOp && matchOp[1]) || '=';
            const target = (matchOp && matchOp[2]) !== undefined ? matchOp[2] : critStr;
            const targetNum = parseFloat(target);

            for (const v of rangeVals) {
              const vNum = parseFloat(v);
              if (!isNaN(targetNum) && !isNaN(vNum)) {
                if (op === '>' && vNum > targetNum) count++;
                else if (op === '>=' && vNum >= targetNum) count++;
                else if (op === '<' && vNum < targetNum) count++;
                else if (op === '<=' && vNum <= targetNum) count++;
                else if ((op === '=' || op === '==') && vNum === targetNum) count++;
                else if (op === '<>' && vNum !== targetNum) count++;
              } else {
                const s1 = String(v).toLowerCase();
                const s2 = target.toLowerCase();
                if (op === '<>' ? s1 !== s2 : s1 === s2) count++;
              }
            }
            return count;
          }
          case 'SUMIF': {
            const rangeVals = this.resolveRangeOrValues(rawArgs[0]);
            const crit = this.evaluateExpr(rawArgs[1]);
            const sumVals = rawArgs[2] ? this.resolveRangeOrValues(rawArgs[2]) : rangeVals;
            let sum = 0;
            const critStr = String(crit).trim();
            const matchOp = critStr.match(/^([><]=?|<>|=)?\s*(.*)$/);
            const op = (matchOp && matchOp[1]) || '=';
            const target = (matchOp && matchOp[2]) !== undefined ? matchOp[2] : critStr;
            const targetNum = parseFloat(target);

            for (let i = 0; i < rangeVals.length; i++) {
              const v = rangeVals[i];
              const vNum = parseFloat(v);
              let match = false;
              if (!isNaN(targetNum) && !isNaN(vNum)) {
                if (op === '>' && vNum > targetNum) match = true;
                else if (op === '>=' && vNum >= targetNum) match = true;
                else if (op === '<' && vNum < targetNum) match = true;
                else if (op === '<=' && vNum <= targetNum) match = true;
                else if ((op === '=' || op === '==') && vNum === targetNum) match = true;
                else if (op === '<>' && vNum !== targetNum) match = true;
              } else {
                const s1 = String(v).toLowerCase();
                const s2 = target.toLowerCase();
                match = (op === '<>' ? s1 !== s2 : s1 === s2);
              }
              if (match && sumVals[i] !== undefined) {
                const sNum = parseFloat(sumVals[i]);
                if (!isNaN(sNum)) sum += sNum;
              }
            }
            return sum;
          }
          case 'MIN': {
            let min = Infinity;
            for (const arg of rawArgs) {
              for (const v of this.resolveRangeOrValues(arg)) {
                const n = parseFloat(v);
                if (!isNaN(n) && n < min) min = n;
              }
            }
            return min === Infinity ? 0 : min;
          }
          case 'MAX': {
            let max = -Infinity;
            for (const arg of rawArgs) {
              for (const v of this.resolveRangeOrValues(arg)) {
                const n = parseFloat(v);
                if (!isNaN(n) && n > max) max = n;
              }
            }
            return max === -Infinity ? 0 : max;
          }
          case 'LARGE': {
            const vals = this.resolveRangeOrValues(rawArgs[0]).map(v => parseFloat(v)).filter(n => !isNaN(n));
            vals.sort((a, b) => b - a);
            const k = parseInt(this.evaluateExpr(rawArgs[1]), 10) - 1;
            return vals[k] !== undefined ? vals[k] : '#NUM!';
          }
          case 'SMALL': {
            const vals = this.resolveRangeOrValues(rawArgs[0]).map(v => parseFloat(v)).filter(n => !isNaN(n));
            vals.sort((a, b) => a - b);
            const k = parseInt(this.evaluateExpr(rawArgs[1]), 10) - 1;
            return vals[k] !== undefined ? vals[k] : '#NUM!';
          }
          case 'ROUND': {
            const num = parseFloat(this.evaluateExpr(rawArgs[0]));
            const digits = rawArgs[1] !== undefined ? parseInt(this.evaluateExpr(rawArgs[1]), 10) : 0;
            if (isNaN(num)) return 0;
            const factor = Math.pow(10, digits);
            return Math.round(num * factor) / factor;
          }
          case 'ROUNDUP': {
            const num = parseFloat(this.evaluateExpr(rawArgs[0]));
            const digits = rawArgs[1] !== undefined ? parseInt(this.evaluateExpr(rawArgs[1]), 10) : 0;
            const factor = Math.pow(10, digits);
            return Math.ceil(num * factor) / factor;
          }
          case 'ROUNDDOWN': {
            const num = parseFloat(this.evaluateExpr(rawArgs[0]));
            const digits = rawArgs[1] !== undefined ? parseInt(this.evaluateExpr(rawArgs[1]), 10) : 0;
            const factor = Math.pow(10, digits);
            return Math.floor(num * factor) / factor;
          }
          case 'INT': {
            return Math.floor(parseFloat(this.evaluateExpr(rawArgs[0])) || 0);
          }
          case 'ABS': {
            return Math.abs(parseFloat(this.evaluateExpr(rawArgs[0])) || 0);
          }
          case 'MOD': {
            const n = parseFloat(this.evaluateExpr(rawArgs[0])) || 0;
            const d = parseFloat(this.evaluateExpr(rawArgs[1])) || 1;
            return n % d;
          }
          case 'POWER': {
            const n = parseFloat(this.evaluateExpr(rawArgs[0])) || 0;
            const p = parseFloat(this.evaluateExpr(rawArgs[1])) || 0;
            return Math.pow(n, p);
          }
          case 'SQRT': {
            const n = parseFloat(this.evaluateExpr(rawArgs[0])) || 0;
            return n >= 0 ? Math.sqrt(n) : '#NUM!';
          }
          case 'PRODUCT': {
            let prod = 1;
            for (const arg of rawArgs) {
              for (const v of this.resolveRangeOrValues(arg)) {
                const n = parseFloat(v);
                if (!isNaN(n)) prod *= n;
              }
            }
            return prod;
          }

          // --- LOGICAL FUNCTIONS ---
          case 'IF': {
            const cond = this.evaluateExpr(rawArgs[0]);
            const isTrue = cond === true || (typeof cond === 'number' && cond !== 0) || (typeof cond === 'string' && cond.toUpperCase() === 'TRUE');
            if (isTrue) {
              return rawArgs[1] !== undefined ? this.evaluateExpr(rawArgs[1]) : true;
            } else {
              return rawArgs[2] !== undefined ? this.evaluateExpr(rawArgs[2]) : false;
            }
          }
          case 'AND': {
            for (const arg of rawArgs) {
              const val = this.evaluateExpr(arg);
              if (!val || val === 'FALSE' || val === 0) return false;
            }
            return true;
          }
          case 'OR': {
            for (const arg of rawArgs) {
              const val = this.evaluateExpr(arg);
              if (val === true || val === 'TRUE' || (typeof val === 'number' && val !== 0)) return true;
            }
            return false;
          }
          case 'NOT': {
            const val = this.evaluateExpr(rawArgs[0]);
            return !val;
          }
          case 'IFERROR': {
            try {
              const val = this.evaluateExpr(rawArgs[0]);
              if (typeof val === 'string' && val.startsWith('#')) {
                return this.evaluateExpr(rawArgs[1]);
              }
              return val;
            } catch (e) {
              return this.evaluateExpr(rawArgs[1]);
            }
          }
          case 'TRUE': return true;
          case 'FALSE': return false;

          // --- LOOKUP & REFERENCE FUNCTIONS ---
          case 'VLOOKUP': {
            const searchVal = String(this.evaluateExpr(rawArgs[0])).trim().toLowerCase();
            const rangeStr = rawArgs[1].trim();
            const colIdx = parseInt(this.evaluateExpr(rawArgs[2]), 10);
            const cells = this.expandRange(rangeStr);

            const [startCell] = rangeStr.replace(/\$/g, '').split(':');
            const startColMatch = startCell.match(/^[A-Z]+/);
            if (!startColMatch) return '#REF!';
            const startColChar = startColMatch[0];
            const targetColIndex = this.colNameToIndex(startColChar) + colIdx - 1;
            const targetColChar = this.indexToColName(targetColIndex);
            const rows = [...new Set(cells.map(c => c.match(/\d+$/)[0]))];

            for (const r of rows) {
              const firstCellVal = String(this.getCellValue(`${startColChar}${r}`)).trim().toLowerCase();
              if (firstCellVal === searchVal) {
                return this.getCellValue(`${targetColChar}${r}`);
              }
            }
            return '#N/A';
          }
          case 'HLOOKUP': {
            const searchVal = String(this.evaluateExpr(rawArgs[0])).trim().toLowerCase();
            const rangeStr = rawArgs[1].trim();
            const rowIdx = parseInt(this.evaluateExpr(rawArgs[2]), 10);
            const cells = this.expandRange(rangeStr);

            const [startCell] = rangeStr.replace(/\$/g, '').split(':');
            const startRow = parseInt(startCell.match(/\d+$/)[0], 10);
            const targetRow = startRow + rowIdx - 1;
            const cols = [...new Set(cells.map(c => c.match(/^[A-Z]+/)[0]))];

            for (const col of cols) {
              const topCellVal = String(this.getCellValue(`${col}${startRow}`)).trim().toLowerCase();
              if (topCellVal === searchVal) {
                return this.getCellValue(`${col}${targetRow}`);
              }
            }
            return '#N/A';
          }
          case 'XLOOKUP': {
            const searchVal = String(this.evaluateExpr(rawArgs[0])).trim().toLowerCase();
            const lookupCells = this.expandRange(rawArgs[1]);
            const returnCells = this.expandRange(rawArgs[2]);
            const ifNotFound = rawArgs[3] !== undefined ? this.evaluateExpr(rawArgs[3]) : '#N/A';

            for (let i = 0; i < lookupCells.length; i++) {
              if (String(this.getCellValue(lookupCells[i])).trim().toLowerCase() === searchVal) {
                return this.getCellValue(returnCells[i]);
              }
            }
            return ifNotFound;
          }
          case 'MATCH': {
            const searchVal = String(this.evaluateExpr(rawArgs[0])).trim().toLowerCase();
            const cells = this.expandRange(rawArgs[1]);
            for (let i = 0; i < cells.length; i++) {
              if (String(this.getCellValue(cells[i])).trim().toLowerCase() === searchVal) {
                return i + 1;
              }
            }
            return '#N/A';
          }
          case 'INDEX': {
            const cells = this.expandRange(rawArgs[0]);
            const rowIdx = parseInt(this.evaluateExpr(rawArgs[1]), 10) - 1;
            return cells[rowIdx] ? this.getCellValue(cells[rowIdx]) : '#REF!';
          }

          // --- DATE & TIME FUNCTIONS ---
          case 'TODAY': {
            const d = new Date();
            return d.toISOString().split('T')[0];
          }
          case 'NOW': {
            const d = new Date();
            return d.toLocaleString();
          }
          case 'YEAR': {
            const val = String(this.evaluateExpr(rawArgs[0]));
            const d = new Date(val);
            return !isNaN(d.getFullYear()) ? d.getFullYear() : '#VALUE!';
          }
          case 'MONTH': {
            const val = String(this.evaluateExpr(rawArgs[0]));
            const d = new Date(val);
            return !isNaN(d.getMonth()) ? d.getMonth() + 1 : '#VALUE!';
          }
          case 'DAY': {
            const val = String(this.evaluateExpr(rawArgs[0]));
            const d = new Date(val);
            return !isNaN(d.getDate()) ? d.getDate() : '#VALUE!';
          }

          // --- INFORMATION FUNCTIONS ---
          case 'ISBLANK': {
            const v = this.evaluateExpr(rawArgs[0]);
            return v === '' || v === null || v === undefined;
          }
          case 'ISNUMBER': {
            const v = this.evaluateExpr(rawArgs[0]);
            return typeof v === 'number' && !isNaN(v);
          }
          case 'ISTEXT': {
            const v = this.evaluateExpr(rawArgs[0]);
            return typeof v === 'string';
          }

          default:
            return `#NAME? (${name})`;
        }
      } catch (err) {
        return '#ERROR!';
      }
    }

    recalculateAll() {
      // 3-pass topological calculation for dependent formulas
      for (let pass = 0; pass < 3; pass++) {
        for (const [ref, cell] of Object.entries(this.data)) {
          if (cell.raw && cell.raw.startsWith('=')) {
            cell.computed = this.evaluateExpr(cell.raw);
          } else {
            cell.computed = cell.raw !== undefined ? cell.raw : '';
          }
        }
      }
    }

    // --- Dynamic Grid Operations ---
    addRow() {
      this.rows++;
      this.render();
    }

    removeRow() {
      if (this.rows > 4) {
        this.rows--;
        this.render();
      }
    }

    addColumn() {
      if (this.cols < this.colNames.length) {
        this.cols++;
        this.render();
      }
    }

    removeColumn() {
      if (this.cols > 4) {
        this.cols--;
        this.render();
      }
    }

    clearSheet() {
      this.data = {};
      this.merges = {};
      this.mergedCells = {};
      this.colWidths = {};
      this.rowHeights = {};
      this.selectionStart = null;
      this.selectionEnd = null;
      this.recalculateAll();
      this.render();
    }

    // --- UI Rendering ---
    render() {
      if (!this.container) return;

      const activeCellData = this.data[this.activeCell] || {};
      const activeRaw = activeCellData.raw || '';
      const activeBg = activeCellData.bgColor || '#ffffff';
      const activeText = activeCellData.textColor || '#1e293b';

      this.container.innerHTML = `
        <div class="spreadsheet-container">
          <!-- Excel-Style Ribbon Toolbar -->
          <div class="spreadsheet-ribbon-toolbar">
            <!-- Grid Dimension Operations -->
            <div class="toolbar-btn-group">
              <span class="toolbar-group-label"><i class="fa-solid fa-table-cells"></i> Grid</span>
              <button type="button" class="spr-tool-btn" id="spr_btn_add_row" title="Add Row below">
                <i class="fa-solid fa-plus"></i> Row
              </button>
              <button type="button" class="spr-tool-btn" id="spr_btn_add_col" title="Add Column to the right">
                <i class="fa-solid fa-plus"></i> Col
              </button>
              <button type="button" class="spr-tool-btn" id="spr_btn_del_row" title="Remove last Row">
                <i class="fa-solid fa-minus"></i> Row
              </button>
              <button type="button" class="spr-tool-btn" id="spr_btn_del_col" title="Remove last Column">
                <i class="fa-solid fa-minus"></i> Col
              </button>
            </div>

            <div class="spr-toolbar-sep"></div>

            <!-- Typography & Formatting -->
            <div class="toolbar-btn-group">
              <span class="toolbar-group-label"><i class="fa-solid fa-font"></i> Format</span>
              <button type="button" class="spr-tool-btn ${activeCellData.bold ? 'active' : ''}" id="spr_btn_bold" title="Bold (Ctrl+B)">
                <i class="fa-solid fa-bold"></i>
              </button>
              <button type="button" class="spr-tool-btn ${activeCellData.italic ? 'active' : ''}" id="spr_btn_italic" title="Italic (Ctrl+I)">
                <i class="fa-solid fa-italic"></i>
              </button>
              <button type="button" class="spr-tool-btn ${activeCellData.align === 'left' ? 'active' : ''}" id="spr_btn_align_left" title="Align Left">
                <i class="fa-solid fa-align-left"></i>
              </button>
              <button type="button" class="spr-tool-btn ${activeCellData.align === 'center' ? 'active' : ''}" id="spr_btn_align_center" title="Align Center">
                <i class="fa-solid fa-align-center"></i>
              </button>
              <button type="button" class="spr-tool-btn ${activeCellData.align === 'right' ? 'active' : ''}" id="spr_btn_align_right" title="Align Right">
                <i class="fa-solid fa-align-right"></i>
              </button>
            </div>

            <div class="spr-toolbar-sep"></div>

            <!-- Cells Merge & Split -->
            <div class="toolbar-btn-group merge-group">
              <span class="toolbar-group-label"><i class="fa-solid fa-object-group"></i> Merge</span>
              <button type="button" class="spr-tool-btn" id="spr_btn_merge" title="Merge & Center selected cells (drag across cells or click to enter range)">
                <i class="fa-solid fa-arrows-to-dot"></i> Merge &amp; Center
              </button>
              <button type="button" class="spr-tool-btn ${this.isCellMerged(this.activeCell) ? 'active' : ''}" id="spr_btn_split" title="Split / Unmerge selected merged cell">
                <i class="fa-solid fa-arrows-split-up-and-left"></i> Split Cells
              </button>
            </div>

            <div class="spr-toolbar-sep"></div>

            <!-- Cell Dimensions & Visibility -->
            <div class="toolbar-btn-group size-group">
              <span class="toolbar-group-label"><i class="fa-solid fa-arrows-up-down-left-right"></i> Size</span>
              <button type="button" class="spr-tool-btn spr-btn-primary" id="spr_btn_autofit" title="Auto-fit all column widths so all cell contents are completely visible">
                <i class="fa-solid fa-arrows-left-right-to-line"></i> Auto-Fit
              </button>
              
              <div class="spr-size-stepper" title="Adjust Active Column Width">
                <span class="spr-stepper-label">Width:</span>
                <button type="button" class="spr-step-btn" id="spr_btn_col_w_minus" title="Decrease Column Width (-15px)">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <button type="button" class="spr-step-btn" id="spr_btn_col_w_plus" title="Increase Column Width (+20px)">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>

              <div class="spr-size-stepper" title="Adjust Active Row Height">
                <span class="spr-stepper-label">Height:</span>
                <button type="button" class="spr-step-btn" id="spr_btn_row_h_minus" title="Decrease Row Height (-6px)">
                  <i class="fa-solid fa-minus"></i>
                </button>
                <button type="button" class="spr-step-btn" id="spr_btn_row_h_plus" title="Increase Row Height (+8px)">
                  <i class="fa-solid fa-plus"></i>
                </button>
              </div>

              <button type="button" class="spr-tool-btn ${activeCellData.wrapText ? 'active' : ''}" id="spr_btn_wrap_text" title="Wrap long cell text onto multiple lines">
                <i class="fa-solid fa-text-width"></i> Wrap Text
              </button>
            </div>

            <div class="spr-toolbar-sep"></div>

            <!-- Color Palette & Fill Options -->
            <div class="toolbar-btn-group color-group">
              <span class="toolbar-group-label"><i class="fa-solid fa-palette"></i> Colors</span>
              
              <!-- Fill Color Dropdown / Input -->
              <div class="spr-color-trigger-wrap" title="Cell Fill Color (Background)">
                <label for="spr_input_fill_color" class="spr-color-label">
                  <i class="fa-solid fa-fill-drip"></i>
                  <span class="spr-color-swatch-bar" id="spr_fill_indicator" style="background-color: ${activeBg};"></span>
                </label>
                <input type="color" id="spr_input_fill_color" class="spr-color-native-input" value="${activeBg.startsWith('#') ? activeBg : '#ffffff'}">
              </div>

              <!-- Quick Fill Swatches -->
              <div class="spr-quick-swatches">
                <span class="spr-swatch" data-fill="" title="No Fill / Default" style="background: transparent; border: 1px dashed #94a3b8;"></span>
                <span class="spr-swatch" data-fill="#fef08a" title="Light Yellow (Tea Break)" style="background: #fef08a;"></span>
                <span class="spr-swatch" data-fill="#fed7aa" title="Light Orange (Lunch Break)" style="background: #fed7aa;"></span>
                <span class="spr-swatch" data-fill="#bbf7d0" title="Light Green (Pass / Lab A)" style="background: #bbf7d0;"></span>
                <span class="spr-swatch" data-fill="#bae6fd" title="Light Blue (Lab B / Highlight)" style="background: #bae6fd;"></span>
                <span class="spr-swatch" data-fill="#fecdd3" title="Light Pink (Alert / Fail)" style="background: #fecdd3;"></span>
                <span class="spr-swatch" data-fill="#f1f5f9" title="Soft Slate (Header)" style="background: #f1f5f9;"></span>
              </div>

              <div class="spr-toolbar-subsep"></div>

              <!-- Text Color Dropdown / Input -->
              <div class="spr-color-trigger-wrap" title="Font Text Color">
                <label for="spr_input_text_color" class="spr-color-label">
                  <i class="fa-solid fa-font"></i>
                  <span class="spr-color-swatch-bar" id="spr_text_indicator" style="background-color: ${activeText};"></span>
                </label>
                <input type="color" id="spr_input_text_color" class="spr-color-native-input" value="${activeText.startsWith('#') ? activeText : '#1e293b'}">
              </div>

              <!-- Quick Text Swatches -->
              <div class="spr-quick-swatches">
                <span class="spr-swatch" data-text="#1e293b" title="Dark Slate" style="background: #1e293b;"></span>
                <span class="spr-swatch" data-text="#1e40af" title="Navy Blue" style="background: #1e40af;"></span>
                <span class="spr-swatch" data-text="#15803d" title="Green" style="background: #15803d;"></span>
                <span class="spr-swatch" data-text="#b91c1c" title="Red" style="background: #b91c1c;"></span>
                <span class="spr-swatch" data-text="#7e22ce" title="Purple" style="background: #7e22ce;"></span>
              </div>
            </div>

            <div class="spr-toolbar-sep"></div>

            <!-- Download / Export Actions -->
            <div class="toolbar-btn-group export-group">
              <span class="toolbar-group-label"><i class="fa-solid fa-file-arrow-down"></i> Download</span>
              <button type="button" class="spr-tool-btn spr-btn-success" id="spr_btn_dl_excel" title="Download Excel workbook (.xls) with colors, merged cells & formulas">
                <i class="fa-solid fa-file-excel"></i> Excel (.xls)
              </button>
              <button type="button" class="spr-tool-btn spr-btn-secondary" id="spr_btn_dl_csv" title="Download CSV table (.csv)">
                <i class="fa-solid fa-file-csv"></i> CSV (.csv)
              </button>
            </div>

            <div class="spr-toolbar-sep"></div>

            <!-- Clear Action -->
            <div class="toolbar-btn-group">
              <button type="button" class="spr-tool-btn spr-btn-danger" id="spr_btn_clear" title="Clear All Cells">
                <i class="fa-solid fa-trash-can"></i> Clear
              </button>
            </div>
          </div>

          <!-- Formula Bar -->
          <div class="spreadsheet-formula-bar">
            <span class="formula-label-fx" title="Formula Insertion Point">fx</span>
            <span class="formula-cell-ref" id="active_cell_badge" title="Active Cell Coordinate">${this.activeCell}</span>
            <input type="text" class="formula-input-field" id="formula_input_field" value="${activeRaw}" placeholder="Type value or formula: =TEXTJOIN(', ', TRUE, A2:A5), =SUM(B2:D2), =IF(F2>=50,'Pass','Fail'), =VLOOKUP(...)">
          </div>

          <!-- Table Wrapper Grid -->
          <div class="spreadsheet-table-wrapper">
            <table class="spreadsheet-table">
              <colgroup>
                <col style="width: 44px; min-width: 44px; max-width: 44px;">
                ${this.colNames.slice(0, this.cols).map(c => `
                  <col data-col="${c}" style="width: ${this.getColWidth(c)}px; min-width: ${this.getColWidth(c)}px;">
                `).join('')}
              </colgroup>
              <thead>
                <tr data-row="0" style="height: 32px;">
                  <th class="row-header corner-header">#</th>
                  ${this.colNames.slice(0, this.cols).map(c => `
                    <th class="col-header" data-col="${c}" style="width: ${this.getColWidth(c)}px; min-width: ${this.getColWidth(c)}px;">
                      <span class="col-header-text">${c}</span>
                      <span class="col-resizer" data-col="${c}" title="Drag to resize column width, double-click to auto-fit"></span>
                    </th>
                  `).join('')}
                </tr>
              </thead>
              <tbody>
                ${Array.from({ length: this.rows }, (_, r) => {
                  const rowNum = r + 1;
                  const rowHeight = this.getRowHeight(rowNum);
                  return `
                    <tr data-row="${rowNum}" style="height: ${rowHeight}px;">
                      <th class="row-header" data-row="${rowNum}" style="height: ${rowHeight}px;">
                        <span class="row-header-text">${rowNum}</span>
                        <span class="row-resizer" data-row="${rowNum}" title="Drag to resize row height, double-click to reset"></span>
                      </th>
                      ${this.colNames.slice(0, this.cols).map(c => {
                        const cellRef = `${c}${rowNum}`;

                        // Skip secondary merged cells (covered by an existing merge master)
                        if (this.mergedCells && this.mergedCells[cellRef]) {
                          return '';
                        }

                        const merge = this.merges && this.merges[cellRef];
                        const colspanAttr = merge && merge.colspan > 1 ? ` colspan="${merge.colspan}"` : '';
                        const rowspanAttr = merge && merge.rowspan > 1 ? ` rowspan="${merge.rowspan}"` : '';
                        const isMergedMaster = !!merge;

                        const cell = this.data[cellRef] || { raw: '', computed: '', bgColor: '', textColor: '', bold: false, italic: false, align: 'left', wrapText: false };
                        const isFormula = cell.raw && cell.raw.startsWith('=');
                        const styleParts = [];
                        if (cell.bgColor) styleParts.push(`background-color: ${cell.bgColor};`);
                        if (cell.textColor) styleParts.push(`color: ${cell.textColor};`);
                        if (cell.bold) styleParts.push(`font-weight: bold;`);
                        if (cell.italic) styleParts.push(`font-style: italic;`);
                        if (cell.align) styleParts.push(`text-align: ${cell.align};`);
                        if (cell.wrapText) styleParts.push(`white-space: normal; word-break: break-word;`);
                        const inlineStyle = styleParts.join(' ');

                        const isCellActive = cellRef === this.activeCell || (this.mergedCells && this.mergedCells[this.activeCell] === cellRef);
                        const isWrap = !!cell.wrapText;

                        const editorHtml = isWrap
                          ? `<textarea class="cell-editor cell-textarea wrap-text" data-ref="${cellRef}" style="${inlineStyle}">${cell.computed !== undefined ? cell.computed : ''}</textarea>`
                          : `<input type="text" class="cell-editor" value="${cell.computed !== undefined ? cell.computed : ''}" data-ref="${cellRef}" style="${inlineStyle}">`;

                        return `
                          <td class="cell-input ${isCellActive ? 'cell-active' : ''} ${isMergedMaster ? 'cell-merged-master' : ''} ${isWrap ? 'cell-wrap' : ''}" 
                              data-ref="${cellRef}" 
                              ${colspanAttr}
                              ${rowspanAttr}
                              style="${inlineStyle}"
                              title="${isFormula ? cell.raw : (cell.computed !== undefined && cell.computed !== '' ? cell.computed : cellRef)}${isMergedMaster ? ' (Merged ' + merge.rangeStr + ')' : ''}">
                            ${editorHtml}
                          </td>
                        `;
                      }).join('')}
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>

          <!-- Practice Presets Selector -->
          <div class="spreadsheet-sample-presets">
            <strong><i class="fa-solid fa-folder-open"></i> Formula &amp; Lab Practice Presets:</strong>
            <button type="button" class="preset-chip ${this.currentPreset === 'marks' ? 'active' : ''}" data-preset="marks">
              📊 Student Marks &amp; Grading (Ex 8 &amp; 9)
            </button>
            <button type="button" class="preset-chip ${this.currentPreset === 'text' ? 'active' : ''}" data-preset="text">
              🔤 Text Functions (TEXTJOIN, CONCAT, MID...)
            </button>
            <button type="button" class="preset-chip ${this.currentPreset === 'payroll' ? 'active' : ''}" data-preset="payroll">
              💼 Employee Payroll (Ex 7)
            </button>
            <button type="button" class="preset-chip ${this.currentPreset === 'lookups' ? 'active' : ''}" data-preset="lookups">
              🔍 Lookups Studio (VLOOKUP, XLOOKUP, INDEX+MATCH)
            </button>
            <button type="button" class="preset-chip ${this.currentPreset === 'timetable' ? 'active' : ''}" data-preset="timetable">
              📅 College Class Timetable (Ex 6)
            </button>
            <button type="button" class="preset-chip ${this.currentPreset === 'blank' ? 'active' : ''}" data-preset="blank">
              📄 Blank Sheet (Free Practice)
            </button>
          </div>
        </div>
      `;

      this.attachEvents();
    }

    attachEvents() {
      const formulaInput = this.container.querySelector('#formula_input_field');

      // Cell selection, drag-to-select & editing
      this.container.querySelectorAll('.cell-input').forEach(td => {
        const input = td.querySelector('.cell-editor');
        const ref = td.getAttribute('data-ref');

        td.addEventListener('mousedown', (e) => {
          if (e.shiftKey && this.activeCell) {
            this.selectionStart = this.activeCell;
            this.selectionEnd = ref;
            this.highlightSelection();
          } else {
            this.isSelecting = true;
            this.selectionStart = ref;
            this.selectionEnd = ref;
            this.setActiveCell(ref);
            this.highlightSelection();
          }
        });

        td.addEventListener('mouseenter', () => {
          if (this.isSelecting) {
            this.selectionEnd = ref;
            this.highlightSelection();
          }
        });

        td.addEventListener('click', (e) => {
          if (!e.shiftKey) {
            this.setActiveCell(ref);
          }
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

      // Stop drag-selection on mouseup
      const stopSelecting = () => {
        this.isSelecting = false;
      };
      if (this._boundMouseUp) {
        document.removeEventListener('mouseup', this._boundMouseUp);
      }
      this._boundMouseUp = stopSelecting;
      document.addEventListener('mouseup', this._boundMouseUp);

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

      // --- Toolbar Actions ---
      // 1. Grid adjustments
      const btnAddRow = this.container.querySelector('#spr_btn_add_row');
      if (btnAddRow) btnAddRow.addEventListener('click', () => this.addRow());

      const btnAddCol = this.container.querySelector('#spr_btn_add_col');
      if (btnAddCol) btnAddCol.addEventListener('click', () => this.addColumn());

      const btnDelRow = this.container.querySelector('#spr_btn_del_row');
      if (btnDelRow) btnDelRow.addEventListener('click', () => this.removeRow());

      const btnDelCol = this.container.querySelector('#spr_btn_del_col');
      if (btnDelCol) btnDelCol.addEventListener('click', () => this.removeColumn());

      const btnClear = this.container.querySelector('#spr_btn_clear');
      if (btnClear) btnClear.addEventListener('click', () => {
        if (confirm('Clear all cell data on current sheet?')) {
          this.clearSheet();
        }
      });

      // 2. Formatting: Bold, Italic, Align
      const btnBold = this.container.querySelector('#spr_btn_bold');
      if (btnBold) {
        btnBold.addEventListener('click', () => {
          const current = this.data[this.activeCell] && this.data[this.activeCell].bold;
          this.setCellFormat(this.activeCell, 'bold', !current);
        });
      }

      const btnItalic = this.container.querySelector('#spr_btn_italic');
      if (btnItalic) {
        btnItalic.addEventListener('click', () => {
          const current = this.data[this.activeCell] && this.data[this.activeCell].italic;
          this.setCellFormat(this.activeCell, 'italic', !current);
        });
      }

      const btnLeft = this.container.querySelector('#spr_btn_align_left');
      if (btnLeft) btnLeft.addEventListener('click', () => this.setCellFormat(this.activeCell, 'align', 'left'));

      const btnCenter = this.container.querySelector('#spr_btn_align_center');
      if (btnCenter) btnCenter.addEventListener('click', () => this.setCellFormat(this.activeCell, 'align', 'center'));

      const btnRight = this.container.querySelector('#spr_btn_align_right');
      if (btnRight) btnRight.addEventListener('click', () => this.setCellFormat(this.activeCell, 'align', 'right'));

      // 3. Cells Merge & Split Actions
      const btnMerge = this.container.querySelector('#spr_btn_merge');
      if (btnMerge) {
        btnMerge.addEventListener('click', () => {
          let rangeToMerge = null;
          if (this.selectionStart && this.selectionEnd && this.selectionStart !== this.selectionEnd) {
            const m1 = this.selectionStart.match(/^([A-Z]+)(\d+)$/);
            const m2 = this.selectionEnd.match(/^([A-Z]+)(\d+)$/);
            if (m1 && m2) {
              const c1 = this.colNameToIndex(m1[1]), r1 = parseInt(m1[2], 10);
              const c2 = this.colNameToIndex(m2[1]), r2 = parseInt(m2[2], 10);
              rangeToMerge = `${this.indexToColName(Math.min(c1, c2))}${Math.min(r1, r2)}:${this.indexToColName(Math.max(c1, c2))}${Math.max(r1, r2)}`;
            }
          }

          if (!rangeToMerge) {
            const activeColMatch = this.activeCell.match(/^([A-Z]+)(\d+)$/);
            const defCol = activeColMatch ? this.indexToColName(Math.min(this.cols, this.colNameToIndex(activeColMatch[1]) + 1)) : 'B';
            const defRow = activeColMatch ? activeColMatch[2] : '1';
            const entered = prompt('Enter cell range to Merge & Center (e.g. A1:D1 or B2:C4):', `${this.activeCell}:${defCol}${defRow}`);
            if (entered && entered.trim()) {
              rangeToMerge = entered.trim().toUpperCase();
            }
          }

          if (rangeToMerge) {
            const ok = this.mergeRange(rangeToMerge);
            if (!ok) {
              alert('Invalid range for merge. Please use format like A1:D1 or B2:C4.');
            }
          }
        });
      }

      const btnSplit = this.container.querySelector('#spr_btn_split');
      if (btnSplit) {
        btnSplit.addEventListener('click', () => {
          const ok = this.splitCell(this.activeCell);
          if (!ok) {
            alert(`Cell ${this.activeCell} is not currently merged.\nSelect a merged cell first to split it.`);
          }
        });
      }

      // 4. Size Controls: Auto-Fit, Column Width, Row Height, Wrap Text
      const btnAutoFit = this.container.querySelector('#spr_btn_autofit');
      if (btnAutoFit) {
        btnAutoFit.addEventListener('click', () => {
          this.autoFitColumns();
        });
      }

      const btnColWPlus = this.container.querySelector('#spr_btn_col_w_plus');
      if (btnColWPlus) {
        btnColWPlus.addEventListener('click', () => {
          const m = this.activeCell.match(/^([A-Z]+)/);
          const col = m ? m[1] : 'A';
          this.setColWidth(col, this.getColWidth(col) + 20);
          this.render();
        });
      }

      const btnColWMinus = this.container.querySelector('#spr_btn_col_w_minus');
      if (btnColWMinus) {
        btnColWMinus.addEventListener('click', () => {
          const m = this.activeCell.match(/^([A-Z]+)/);
          const col = m ? m[1] : 'A';
          this.setColWidth(col, Math.max(50, this.getColWidth(col) - 15));
          this.render();
        });
      }

      const btnRowHPlus = this.container.querySelector('#spr_btn_row_h_plus');
      if (btnRowHPlus) {
        btnRowHPlus.addEventListener('click', () => {
          const m = this.activeCell.match(/\d+/);
          const row = m ? parseInt(m[0], 10) : 1;
          this.setRowHeight(row, this.getRowHeight(row) + 8);
          this.render();
        });
      }

      const btnRowHMinus = this.container.querySelector('#spr_btn_row_h_minus');
      if (btnRowHMinus) {
        btnRowHMinus.addEventListener('click', () => {
          const m = this.activeCell.match(/\d+/);
          const row = m ? parseInt(m[0], 10) : 1;
          this.setRowHeight(row, Math.max(22, this.getRowHeight(row) - 6));
          this.render();
        });
      }

      const btnWrapText = this.container.querySelector('#spr_btn_wrap_text');
      if (btnWrapText) {
        btnWrapText.addEventListener('click', () => {
          const current = this.data[this.activeCell] && this.data[this.activeCell].wrapText;
          this.setCellFormat(this.activeCell, 'wrapText', !current);
          if (!current) {
            const m = this.activeCell.match(/\d+/);
            const row = m ? parseInt(m[0], 10) : 1;
            if (this.getRowHeight(row) < 46) {
              this.setRowHeight(row, 46);
            }
          }
          this.render();
        });
      }

      // 5. Interactive Drag-to-Resize on Headers
      // Column Drag-to-Resize & Double-Click Auto-Fit
      this.container.querySelectorAll('.col-resizer').forEach(resizer => {
        const col = resizer.getAttribute('data-col');

        resizer.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          e.preventDefault();
          this.autoFitColumn(col);
          this.render();
        });

        resizer.addEventListener('mousedown', (e) => {
          e.stopPropagation();
          e.preventDefault();
          const startX = e.clientX;
          const startWidth = this.getColWidth(col);

          resizer.classList.add('is-resizing');
          document.body.style.cursor = 'col-resize';
          document.body.style.userSelect = 'none';

          const onMouseMove = (moveEvent) => {
            const delta = moveEvent.clientX - startX;
            const newWidth = Math.max(50, Math.min(650, startWidth + delta));
            this.colWidths[col] = newWidth;
            this.applyColWidthDOM(col, newWidth);
          };

          const onMouseUp = () => {
            resizer.classList.remove('is-resizing');
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
          };

          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
        });
      });

      // Row Drag-to-Resize & Double-Click Reset
      this.container.querySelectorAll('.row-resizer').forEach(resizer => {
        const row = parseInt(resizer.getAttribute('data-row'), 10);

        resizer.addEventListener('dblclick', (e) => {
          e.stopPropagation();
          e.preventDefault();
          this.setRowHeight(row, row === 1 ? 32 : this.defaultRowHeight);
          this.render();
        });

        resizer.addEventListener('mousedown', (e) => {
          e.stopPropagation();
          e.preventDefault();
          const startY = e.clientY;
          const startHeight = this.getRowHeight(row);

          resizer.classList.add('is-resizing');
          document.body.style.cursor = 'row-resize';
          document.body.style.userSelect = 'none';

          const onMouseMove = (moveEvent) => {
            const delta = moveEvent.clientY - startY;
            const newHeight = Math.max(22, Math.min(300, startHeight + delta));
            this.rowHeights[row] = newHeight;
            this.applyRowHeightDOM(row, newHeight);
          };

          const onMouseUp = () => {
            resizer.classList.remove('is-resizing');
            document.body.style.cursor = '';
            document.body.style.userSelect = '';
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
          };

          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
        });
      });

      // 6. Download / Export Actions
      const btnDlExcel = this.container.querySelector('#spr_btn_dl_excel');
      if (btnDlExcel) {
        btnDlExcel.addEventListener('click', () => {
          this.exportToExcel();
        });
      }

      const btnDlCsv = this.container.querySelector('#spr_btn_dl_csv');
      if (btnDlCsv) {
        btnDlCsv.addEventListener('click', (e) => {
          this.exportToCSV(e.shiftKey || e.altKey);
        });
      }

      // 7. Color controls: Fill Color
      const inputFill = this.container.querySelector('#spr_input_fill_color');
      if (inputFill) {
        inputFill.addEventListener('input', (e) => {
          this.setCellFormat(this.activeCell, 'bgColor', e.target.value);
        });
      }

      this.container.querySelectorAll('.spr-quick-swatches [data-fill]').forEach(swatch => {
        swatch.addEventListener('click', () => {
          const fill = swatch.getAttribute('data-fill');
          this.setCellFormat(this.activeCell, 'bgColor', fill);
        });
      });

      // 8. Color controls: Text Color
      const inputText = this.container.querySelector('#spr_input_text_color');
      if (inputText) {
        inputText.addEventListener('input', (e) => {
          this.setCellFormat(this.activeCell, 'textColor', e.target.value);
        });
      }

      this.container.querySelectorAll('.spr-quick-swatches [data-text]').forEach(swatch => {
        swatch.addEventListener('click', () => {
          const textColor = swatch.getAttribute('data-text');
          this.setCellFormat(this.activeCell, 'textColor', textColor);
        });
      });

      // 9. Presets
      this.container.querySelectorAll('.preset-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          const preset = chip.getAttribute('data-preset');
          this.loadSampleData(preset);
          this.render();
        });
      });
    }

    setActiveCell(ref) {
      if (this.mergedCells && this.mergedCells[ref]) {
        ref = this.mergedCells[ref];
      }
      this.activeCell = ref;
      const badge = this.container.querySelector('#active_cell_badge');
      const formulaInput = this.container.querySelector('#formula_input_field');

      const mergeInfo = this.getMergeInfo(ref);
      if (badge) {
        badge.textContent = mergeInfo ? `${ref} (${mergeInfo.rangeStr})` : ref;
      }
      if (formulaInput) formulaInput.value = this.getRawValue(ref);

      this.container.querySelectorAll('.cell-input').forEach(td => {
        td.classList.toggle('cell-active', td.getAttribute('data-ref') === ref);
      });

      // Update toolbar active formatting
      const cellData = this.data[ref] || {};
      const btnBold = this.container.querySelector('#spr_btn_bold');
      if (btnBold) btnBold.classList.toggle('active', !!cellData.bold);

      const btnItalic = this.container.querySelector('#spr_btn_italic');
      if (btnItalic) btnItalic.classList.toggle('active', !!cellData.italic);

      const btnSplit = this.container.querySelector('#spr_btn_split');
      if (btnSplit) btnSplit.classList.toggle('active', !!mergeInfo);

      const btnWrap = this.container.querySelector('#spr_btn_wrap_text');
      if (btnWrap) btnWrap.classList.toggle('active', !!cellData.wrapText);

      const fillIndicator = this.container.querySelector('#spr_fill_indicator');
      if (fillIndicator) fillIndicator.style.backgroundColor = cellData.bgColor || '#ffffff';

      const textIndicator = this.container.querySelector('#spr_text_indicator');
      if (textIndicator) textIndicator.style.backgroundColor = cellData.textColor || '#1e293b';
    }

    updateDOM() {
      this.container.querySelectorAll('.cell-input').forEach(td => {
        const ref = td.getAttribute('data-ref');
        const input = td.querySelector('.cell-editor');
        const cell = this.data[ref] || { raw: '', computed: '', bgColor: '', textColor: '', bold: false, italic: false, align: 'left', wrapText: false };
        
        // Update styles
        td.style.backgroundColor = cell.bgColor || '';
        td.style.color = cell.textColor || '';
        td.style.fontWeight = cell.bold ? 'bold' : 'normal';
        td.style.fontStyle = cell.italic ? 'italic' : 'normal';
        td.style.textAlign = cell.align || 'left';
        td.style.whiteSpace = cell.wrapText ? 'normal' : 'nowrap';
        td.style.wordBreak = cell.wrapText ? 'break-word' : 'normal';

        if (input) {
          input.style.backgroundColor = cell.bgColor || 'transparent';
          input.style.color = cell.textColor || 'inherit';
          input.style.fontWeight = cell.bold ? 'bold' : 'normal';
          input.style.fontStyle = cell.italic ? 'italic' : 'normal';
          input.style.textAlign = cell.align || 'left';
          input.style.whiteSpace = cell.wrapText ? 'normal' : 'nowrap';
          input.style.wordBreak = cell.wrapText ? 'break-word' : 'normal';

          if (document.activeElement !== input) {
            input.value = cell.computed !== undefined ? cell.computed : '';
            td.title = cell.raw && cell.raw.startsWith('=') ? cell.raw : (cell.computed !== undefined && cell.computed !== '' ? cell.computed : ref);
          }
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
