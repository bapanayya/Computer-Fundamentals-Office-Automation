/**
 * Computer-Fund-OfficeAutomat-SVAGDC: Interactive Word Processor & Mail Merge Engine
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function(window) {
  'use strict';

  // Sample Recipient Database for Mail Merge
  const SAMPLE_RECIPIENTS = [
    { name: 'K. Ramesh Babu', roll: '23PH01', dept: 'B.Sc. Physics (MPC)', marks: 88, result: 'Distinction', grade: 'A+' },
    { name: 'P. Sita Devi', roll: '23PH02', dept: 'B.Sc. Physics (MPE)', marks: 94, result: 'Distinction', grade: 'O' },
    { name: 'G. Suresh Kumar', roll: '23PH03', dept: 'B.Sc. Physics (MPC)', marks: 76, result: 'First Class', grade: 'A' },
    { name: 'M. Anitha Reddy', roll: '23PH04', dept: 'B.Sc. Physics (MPE)', marks: 82, result: 'First Class', grade: 'A+' },
    { name: 'V. Kalyan Varma', roll: '23PH05', dept: 'B.Sc. Physics (MPC)', marks: 68, result: 'First Class', grade: 'B+' }
  ];

  // Document Presets
  const PRESETS = {
    leave_letter: {
      title: 'Leave Application to Principal',
      content: `
        <p style="text-align: right;"><strong>Date:</strong> 28th September 2026</p>
        <p><strong>To,</strong><br>
        The Principal,<br>
        S.V.A. Govt. Degree College,<br>
        Srikalahasti, Tirupati District, A.P.</p>
        
        <p style="text-align: center; margin-top: 1.2rem;"><strong><u>SUBJECT: Application for 10 Days Academic Leave - Reg.</u></strong></p>
        
        <p>Respected Sir,</p>
        <p>I am a bona fide student of Semester-III, studying <strong>B.Sc. Physics (MPC)</strong> in our esteemed college, holding Roll Number <strong>23PH01</strong>.</p>
        <p>I respectfully submit that I have been selected to attend the <em>Inter-University Science Talent Summer Camp</em> scheduled from <strong>01-10-2026 to 10-10-2026</strong> at Sri Venkateswara University, Tirupati. Therefore, I request you to kindly grant me permission and academic leave of absence for 10 days.</p>
        <p>I assure you that upon returning, I will cover all the laboratory experiments and lecture notes with the guidance of the Department of Physics faculty.</p>
        <p>Thanking you,</p>
        <br>
        <p style="text-align: right;">Yours obediently,<br><strong>K. Ramesh Babu</strong><br>Roll No: 23PH01</p>
      `
    },
    resume: {
      title: 'Academic Curriculum Vitae / Resume',
      content: `
        <h1 style="text-align: center; margin-bottom: 0.2rem; color: #1e3a8a;">K. RAMESH BABU</h1>
        <p style="text-align: center; font-size: 0.9rem; color: #475569; margin-top: 0;">
          Department of Physics, S.V.A. Govt. Degree College, Srikalahasti<br>
          Email: ramesh.physics.sva@gmail.com &bull; Phone: +91 98765 43210 &bull; LinkedIn: linkedin.com/in/ramesh-sva
        </p>
        <hr style="border: 0; border-top: 2px solid #2563eb; margin: 1rem 0;">
        
        <h3 style="color: #1e3a8a; border-bottom: 1px solid #cbd5e1; padding-bottom: 0.3rem;">ACADEMIC PROFILE &amp; OBJECTIVE</h3>
        <p>Diligent and analytical Physics undergraduate seeking a competitive foundation in scientific computing, electronic instrumentation, and data analysis. Aiming to contribute with strong laboratory rigor and practical problem-solving.</p>
        
        <h3 style="color: #1e3a8a; border-bottom: 1px solid #cbd5e1; padding-bottom: 0.3rem; margin-top: 1rem;">EDUCATIONAL QUALIFICATIONS</h3>
        <table style="width: 100%; border-collapse: collapse; margin-top: 0.5rem;" border="1">
          <thead>
            <tr style="background: #f1f5f9;">
              <th style="padding: 6px; text-align: left;">Course / Degree</th>
              <th style="padding: 6px; text-align: left;">Institution / Board</th>
              <th style="padding: 6px; text-align: center;">Year</th>
              <th style="padding: 6px; text-align: center;">CGPA / %</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 6px;">B.Sc. (Physics, Mathematics, Chemistry)</td>
              <td style="padding: 6px;">S.V.A. Govt. Degree College, Srikalahasti</td>
              <td style="padding: 6px; text-align: center;">2024-2027</td>
              <td style="padding: 6px; text-align: center;">8.85 / 10.0</td>
            </tr>
            <tr>
              <td style="padding: 6px;">Intermediate (MPC)</td>
              <td style="padding: 6px;">Govt. Junior College, Srikalahasti</td>
              <td style="padding: 6px; text-align: center;">2024</td>
              <td style="padding: 6px; text-align: center;">92.4%</td>
            </tr>
          </tbody>
        </table>
        
        <h3 style="color: #1e3a8a; border-bottom: 1px solid #cbd5e1; padding-bottom: 0.3rem; margin-top: 1rem;">TECHNICAL &amp; LAB SKILLS</h3>
        <ul>
          <li><strong>Computer Literacy:</strong> MS Word (Mail Merge, Document Styles), MS Excel (Formulas, Pivot Tables, Lookups), PowerPoint Presentation Design.</li>
          <li><strong>Programming &amp; Tools:</strong> Python Fundamentals, Markdown, HTML5 Basics.</li>
          <li><strong>Physics Laboratory:</strong> Spectrometer Experiments, Digital Multimeter, CRO &amp; Breadboard Circuitry.</li>
        </ul>
      `
    },
    mailmerge: {
      title: 'Mail Merge Letter Template',
      content: `
        <p style="text-align: right;"><strong>Date:</strong> 28th September 2026</p>
        <p style="text-align: center; color: #1e3a8a;"><strong>DEPARTMENT OF PHYSICS</strong><br>
        S.V.A. Govt. Degree College, Srikalahasti - 517644</p>
        
        <p style="margin-top: 1.5rem;"><strong>To:</strong><br>
        Student Name: <span class="merge-token">«Student_Name»</span><br>
        Roll Number: <span class="merge-token">«Roll_No»</span><br>
        Programme: <span class="merge-token">«Department»</span></p>
        
        <p style="text-align: center; margin-top: 1.2rem;"><strong><u>SUBJECT: Provisional Academic Performance Intimation</u></strong></p>
        
        <p>Dear <span class="merge-token">«Student_Name»</span>,</p>
        <p>We are delighted to communicate the formal evaluation of your performance in the Semester-III practical and theory examinations in <strong>Computer Fundamentals &amp; Office Automation</strong>.</p>
        
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; margin: 15px 0;">
          <p style="margin: 4px 0;">&bull; <strong>Marks Scored:</strong> <span class="merge-token">«Marks»</span> / 100</p>
          <p style="margin: 4px 0;">&bull; <strong>Examination Result:</strong> <span class="merge-token">«Result»</span></p>
          <p style="margin: 4px 0;">&bull; <strong>Awarded Grade:</strong> <span class="merge-token">«Grade»</span></p>
        </div>
        
        <p>The Department commends your disciplined performance. Kindly retain this notification for university registration and semester credit audit.</p>
        <p>With best wishes for your continued academic excellence,</p>
        <br>
        <p><strong>Head, Department of Physics</strong><br>S.V.A. Govt. Degree College, Srikalahasti</p>
      `
    },
    report: {
      title: 'Departmental Seminar Abstract',
      content: `
        <h2 style="text-align: center; color: #1e3a8a;">RECENT ADVANCES IN SOLID-STATE OPTOELECTRONICS</h2>
        <p style="text-align: center; font-size: 0.95rem; color: #64748b;">A Technical Seminar Paper presented by the Department of Physics</p>
        <hr style="border: 0; border-top: 1px solid #cbd5e1; margin: 1rem 0;">
        
        <h3>1. Abstract</h3>
        <p>Semiconductor optoelectronics bridges photonic emission and electronic carrier transport in crystalline solids. This report reviews wide band-gap semiconductor heterostructures, with particular emphasis on Gallium Nitride (GaN) and Indium Gallium Nitride (InGaN) Quantum Well light emitters.</p>
        
        <h3>2. Key Research Highlights</h3>
        <ul>
          <li><strong>Direct vs Indirect Band-gap:</strong> Radiative recombination efficiency in GaAs vs non-radiative phonon requirements in Silicon.</li>
          <li><strong>Carrier Confinement:</strong> Energy quantization inside nanoscale potential wells.</li>
          <li><strong>Experimental Measurements:</strong> Photoluminescence spectroscopy and UV-Vis absorption spectrophotometry.</li>
        </ul>
      `
    }
  };

  class WordProcessor {
    constructor(mountEl, options = {}) {
      this.container = typeof mountEl === 'string' ? document.getElementById(mountEl) : mountEl;
      this.mode = options.mode || 'wordprocessor'; // 'wordprocessor' or 'mailmerge'
      this.presetKey = options.initialPreset || (this.mode === 'mailmerge' ? 'mailmerge' : 'leave_letter');
      this.currentRecipientIdx = 0;
      this.isPreviewActive = false;
      this.mergedDrafts = [];
      this.init();
    }

    init() {
      if (!this.container) return;
      this.render();
      this.bindEvents();
      this.loadPreset(this.presetKey);
      this.updateStats();
    }

    render() {
      const isMailMerge = this.mode === 'mailmerge';

      this.container.innerHTML = `
        <div class="interactive-tool-section wordproc-tool-container">
          <div class="tool-card-header">
            <div class="tool-title-group">
              <span class="tool-badge"><i class="fa-solid fa-file-word"></i> ${isMailMerge ? 'Mail Merge Studio' : 'Word Processor Lab'}</span>
              <span class="tool-title-text">${isMailMerge ? 'Dynamic Mail Merge & Document Automation Sandbox' : 'Live Interactive Rich-Text Word Processor'}</span>
            </div>
            <div class="tool-actions-group">
              <select class="wp-preset-select" id="wp_preset_select" title="Load Academic Template">
                <option value="leave_letter" ${this.presetKey === 'leave_letter' ? 'selected' : ''}>📄 Leave Letter (Lab 4)</option>
                <option value="resume" ${this.presetKey === 'resume' ? 'selected' : ''}>📋 Student Resume (Lab 3)</option>
                <option value="mailmerge" ${this.presetKey === 'mailmerge' ? 'selected' : ''}>✉️ Mail Merge Template</option>
                <option value="report" ${this.presetKey === 'report' ? 'selected' : ''}>📑 Seminar Abstract</option>
              </select>
              <button type="button" class="btn-tool-action" id="wp_btn_copy" title="Copy Document HTML"><i class="fa-regular fa-copy"></i> Copy</button>
              <button type="button" class="btn-tool-action" id="wp_btn_print" title="Print / PDF View"><i class="fa-solid fa-print"></i> Print</button>
            </div>
          </div>

          <!-- Ribbon Toolbar -->
          <div class="wp-ribbon">
            <!-- Text Formatting Group -->
            <div class="wp-ribbon-group">
              <span class="wp-group-label">Font</span>
              <div class="wp-ribbon-row">
                <select class="wp-select" id="wp_format_block" title="Heading Style">
                  <option value="P">Paragraph</option>
                  <option value="H1">Heading 1</option>
                  <option value="H2">Heading 2</option>
                  <option value="H3">Heading 3</option>
                </select>
                <select class="wp-select" id="wp_font_name" title="Font Family">
                  <option value="Inter, sans-serif">Inter</option>
                  <option value="'Times New Roman', serif">Times New Roman</option>
                  <option value="Georgia, serif">Georgia</option>
                  <option value="Arial, sans-serif">Arial</option>
                  <option value="'JetBrains Mono', monospace">JetBrains Mono</option>
                </select>
                <select class="wp-select" id="wp_font_size" title="Font Size">
                  <option value="3">12 pt (Normal)</option>
                  <option value="4">14 pt (Large)</option>
                  <option value="5">18 pt (Heading)</option>
                  <option value="6">24 pt (Title)</option>
                </select>
              </div>
              <div class="wp-ribbon-row">
                <button type="button" class="wp-btn" data-cmd="bold" title="Bold (Ctrl+B)"><i class="fa-solid fa-bold"></i></button>
                <button type="button" class="wp-btn" data-cmd="italic" title="Italic (Ctrl+I)"><i class="fa-solid fa-italic"></i></button>
                <button type="button" class="wp-btn" data-cmd="underline" title="Underline (Ctrl+U)"><i class="fa-solid fa-underline"></i></button>
                <button type="button" class="wp-btn" data-cmd="strikeThrough" title="Strikethrough"><i class="fa-solid fa-strikethrough"></i></button>
                <input type="color" id="wp_fore_color" class="wp-color-picker" value="#1e293b" title="Text Color">
                <input type="color" id="wp_hilite_color" class="wp-color-picker" value="#fef08a" title="Highlight Color">
              </div>
            </div>

            <!-- Paragraph Formatting Group -->
            <div class="wp-ribbon-group">
              <span class="wp-group-label">Paragraph</span>
              <div class="wp-ribbon-row">
                <button type="button" class="wp-btn" data-cmd="justifyLeft" title="Align Left"><i class="fa-solid fa-align-left"></i></button>
                <button type="button" class="wp-btn" data-cmd="justifyCenter" title="Center"><i class="fa-solid fa-align-center"></i></button>
                <button type="button" class="wp-btn" data-cmd="justifyRight" title="Align Right"><i class="fa-solid fa-align-right"></i></button>
                <button type="button" class="wp-btn" data-cmd="justifyFull" title="Justify"><i class="fa-solid fa-align-justify"></i></button>
              </div>
              <div class="wp-ribbon-row">
                <button type="button" class="wp-btn" data-cmd="insertUnorderedList" title="Bulleted List"><i class="fa-solid fa-list-ul"></i></button>
                <button type="button" class="wp-btn" data-cmd="insertOrderedList" title="Numbered List"><i class="fa-solid fa-list-ol"></i></button>
                <button type="button" class="wp-btn" data-cmd="outdent" title="Decrease Indent"><i class="fa-solid fa-outdent"></i></button>
                <button type="button" class="wp-btn" data-cmd="indent" title="Increase Indent"><i class="fa-solid fa-indent"></i></button>
              </div>
            </div>

            <!-- Insert Group -->
            <div class="wp-ribbon-group">
              <span class="wp-group-label">Insert</span>
              <div class="wp-ribbon-row">
                <button type="button" class="wp-btn wp-btn-text" id="wp_btn_insert_table" title="Insert 3x3 Table"><i class="fa-solid fa-table"></i> Table</button>
                <button type="button" class="wp-btn wp-btn-text" id="wp_btn_insert_callout" title="Insert Callout Card"><i class="fa-solid fa-circle-info"></i> Note</button>
              </div>
              <div class="wp-ribbon-row">
                <button type="button" class="wp-btn" data-cmd="insertHorizontalRule" title="Horizontal Line"><i class="fa-solid fa-minus"></i></button>
                <button type="button" class="wp-btn" data-cmd="undo" title="Undo (Ctrl+Z)"><i class="fa-solid fa-rotate-left"></i></button>
                <button type="button" class="wp-btn" data-cmd="redo" title="Redo (Ctrl+Y)"><i class="fa-solid fa-rotate-right"></i></button>
              </div>
            </div>

            <!-- Mail Merge Group -->
            <div class="wp-ribbon-group wp-merge-group ${isMailMerge ? 'highlighted' : ''}">
              <span class="wp-group-label"><i class="fa-solid fa-envelope-open-text"></i> Mail Merge</span>
              <div class="wp-ribbon-row">
                <select class="wp-select" id="wp_merge_field_select" title="Choose Field to Insert">
                  <option value="">Insert Merge Field...</option>
                  <option value="«Student_Name»">«Student_Name»</option>
                  <option value="«Roll_No»">«Roll_No»</option>
                  <option value="«Department»">«Department»</option>
                  <option value="«Marks»">«Marks»</option>
                  <option value="«Result»">«Result»</option>
                  <option value="«Grade»">«Grade»</option>
                </select>
                <button type="button" class="wp-btn wp-btn-primary" id="wp_btn_add_field" title="Insert Field at Cursor">Insert</button>
              </div>
              <div class="wp-ribbon-row" style="align-items: center; gap: 6px;">
                <button type="button" class="wp-btn" id="wp_btn_prev_record" title="Previous Recipient"><i class="fa-solid fa-chevron-left"></i></button>
                <span class="wp-record-indicator" id="wp_record_indicator" title="Current Record">Record 1 / 5</span>
                <button type="button" class="wp-btn" id="wp_btn_next_record" title="Next Recipient"><i class="fa-solid fa-chevron-right"></i></button>
                <button type="button" class="wp-btn wp-btn-toggle" id="wp_btn_toggle_preview" title="Toggle Merged Data Preview">
                  <i class="fa-solid fa-eye"></i> Preview
                </button>
              </div>
            </div>
          </div>

          <!-- Document Workspace Wrapper -->
          <div class="wp-workspace">
            <div class="wp-ruler-bar">
              <span class="ruler-mark">0</span><span class="ruler-mark">1</span><span class="ruler-mark">2</span>
              <span class="ruler-mark">3</span><span class="ruler-mark">4</span><span class="ruler-mark">5</span>
              <span class="ruler-mark">6</span><span class="ruler-mark">7</span><span class="ruler-mark">8</span>
            </div>

            <!-- Page Canvas -->
            <div class="wp-page-container">
              <div class="wp-paper-page" id="wp_editor_page" contenteditable="true" spellcheck="true" role="textbox" aria-multiline="true">
                <!-- Injected via preset -->
              </div>
            </div>
          </div>

          <!-- Status Bar -->
          <div class="wp-status-bar">
            <div class="wp-status-left">
              <span class="wp-status-item"><i class="fa-regular fa-file"></i> Page 1 of 1</span>
              <span class="wp-status-item" id="wp_stat_words">Words: 0</span>
              <span class="wp-status-item" id="wp_stat_chars">Characters: 0</span>
              <span class="wp-status-item" id="wp_stat_read_time">Est. Read: 1 min</span>
            </div>
            <div class="wp-status-right">
              <span class="wp-status-item"><i class="fa-solid fa-check-double text-success"></i> Auto-saved locally</span>
              <span class="wp-status-badge">100% Zoom</span>
            </div>
          </div>

          <!-- Batch Mail Merge Preview Modal -->
          <div class="wp-merge-modal" id="wp_merge_modal" style="display: none;">
            <div class="wp-merge-modal-content">
              <div class="wp-merge-modal-header">
                <h3><i class="fa-solid fa-envelopes-bulk"></i> Batch Mail Merge Output (${SAMPLE_RECIPIENTS.length} Letters Generated)</h3>
                <button type="button" class="wp-modal-close" id="wp_modal_close">&times;</button>
              </div>
              <div class="wp-merge-modal-body" id="wp_merge_modal_body">
                <!-- Dynamic cards -->
              </div>
            </div>
          </div>
        </div>
      `;
    }

    bindEvents() {
      const editor = this.container.querySelector('#wp_editor_page');
      if (!editor) return;

      // Ribbon Command Buttons
      this.container.querySelectorAll('.wp-btn[data-cmd]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const cmd = btn.getAttribute('data-cmd');
          document.execCommand(cmd, false, null);
          editor.focus();
          this.updateStats();
        });
      });

      // Heading block format
      const blockSelect = this.container.querySelector('#wp_format_block');
      if (blockSelect) {
        blockSelect.addEventListener('change', () => {
          const val = blockSelect.value;
          document.execCommand('formatBlock', false, `<${val}>`);
          editor.focus();
        });
      }

      // Font Family
      const fontSelect = this.container.querySelector('#wp_font_name');
      if (fontSelect) {
        fontSelect.addEventListener('change', () => {
          document.execCommand('fontName', false, fontSelect.value);
          editor.focus();
        });
      }

      // Font Size
      const sizeSelect = this.container.querySelector('#wp_font_size');
      if (sizeSelect) {
        sizeSelect.addEventListener('change', () => {
          document.execCommand('fontSize', false, sizeSelect.value);
          editor.focus();
        });
      }

      // Colors
      const foreColor = this.container.querySelector('#wp_fore_color');
      if (foreColor) {
        foreColor.addEventListener('input', () => {
          document.execCommand('foreColor', false, foreColor.value);
        });
      }

      const hiliteColor = this.container.querySelector('#wp_hilite_color');
      if (hiliteColor) {
        hiliteColor.addEventListener('input', () => {
          document.execCommand('hiliteColor', false, hiliteColor.value);
        });
      }

      // Insert Table
      const btnTable = this.container.querySelector('#wp_btn_insert_table');
      if (btnTable) {
        btnTable.addEventListener('click', () => {
          const tableHtml = `
            <table style="width: 100%; border-collapse: collapse; margin: 12px 0;" border="1">
              <thead>
                <tr style="background: #f1f5f9;">
                  <th style="padding: 6px;">Header 1</th>
                  <th style="padding: 6px;">Header 2</th>
                  <th style="padding: 6px;">Header 3</th>
                </tr>
              </thead>
              <tbody>
                <tr><td style="padding: 6px;">Cell 1</td><td style="padding: 6px;">Cell 2</td><td style="padding: 6px;">Cell 3</td></tr>
                <tr><td style="padding: 6px;">Cell 4</td><td style="padding: 6px;">Cell 5</td><td style="padding: 6px;">Cell 6</td></tr>
              </tbody>
            </table>
            <p><br></p>
          `;
          document.execCommand('insertHTML', false, tableHtml);
          this.updateStats();
        });
      }

      // Insert Callout Box
      const btnCallout = this.container.querySelector('#wp_btn_insert_callout');
      if (btnCallout) {
        btnCallout.addEventListener('click', () => {
          const calloutHtml = `
            <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 10px 14px; margin: 10px 0; border-radius: 4px;">
              <strong>Note:</strong> Enter important departmental observation or remark here.
            </div>
            <p><br></p>
          `;
          document.execCommand('insertHTML', false, calloutHtml);
          this.updateStats();
        });
      }

      // Preset Selector
      const presetSelect = this.container.querySelector('#wp_preset_select');
      if (presetSelect) {
        presetSelect.addEventListener('change', () => {
          this.loadPreset(presetSelect.value);
        });
      }

      // Live Stats Update
      editor.addEventListener('input', () => {
        this.updateStats();
      });

      // Copy Button
      const copyBtn = this.container.querySelector('#wp_btn_copy');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          navigator.clipboard.writeText(editor.innerHTML).then(() => {
            const orig = copyBtn.innerHTML;
            copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
            setTimeout(() => { copyBtn.innerHTML = orig; }, 1500);
          });
        });
      }

      // Print Button
      const printBtn = this.container.querySelector('#wp_btn_print');
      if (printBtn) {
        printBtn.addEventListener('click', () => {
          const win = window.open('', '_blank');
          win.document.write(`
            <html>
              <head>
                <title>Printed Document - S.V.A. Govt. Degree College</title>
                <style>
                  body { font-family: 'Times New Roman', serif; padding: 40px; color: #111; line-height: 1.6; }
                  table { width: 100%; border-collapse: collapse; margin: 15px 0; }
                  th, td { border: 1px solid #333; padding: 8px; text-align: left; }
                  @media print { body { padding: 0; } }
                </style>
              </head>
              <body>
                ${editor.innerHTML}
              </body>
            </html>
          `);
          win.document.close();
          win.focus();
          win.print();
        });
      }

      // Mail Merge Controls
      const fieldSelect = this.container.querySelector('#wp_merge_field_select');
      const addFieldBtn = this.container.querySelector('#wp_btn_add_field');
      if (addFieldBtn && fieldSelect) {
        addFieldBtn.addEventListener('click', () => {
          const val = fieldSelect.value;
          if (val) {
            const tokenHtml = `<span class="merge-token" style="background: #e0f2fe; color: #0369a1; padding: 2px 6px; border-radius: 4px; font-weight: 600; border: 1px dashed #0284c7;">${val}</span>&nbsp;`;
            document.execCommand('insertHTML', false, tokenHtml);
            editor.focus();
            this.updateStats();
          }
        });
      }

      const prevBtn = this.container.querySelector('#wp_btn_prev_record');
      const nextBtn = this.container.querySelector('#wp_btn_next_record');
      const previewBtn = this.container.querySelector('#wp_btn_toggle_preview');

      if (prevBtn) {
        prevBtn.addEventListener('click', () => {
          if (this.currentRecipientIdx > 0) {
            this.currentRecipientIdx--;
            this.updateRecordIndicator();
            if (this.isPreviewActive) this.renderPreview();
          }
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener('click', () => {
          if (this.currentRecipientIdx < SAMPLE_RECIPIENTS.length - 1) {
            this.currentRecipientIdx++;
            this.updateRecordIndicator();
            if (this.isPreviewActive) this.renderPreview();
          }
        });
      }

      if (previewBtn) {
        previewBtn.addEventListener('click', () => {
          this.isPreviewActive = !this.isPreviewActive;
          previewBtn.classList.toggle('active', this.isPreviewActive);
          if (this.isPreviewActive) {
            this.savedTemplate = editor.innerHTML;
            this.renderPreview();
          } else {
            if (this.savedTemplate) editor.innerHTML = this.savedTemplate;
          }
          this.updateStats();
        });
      }

      // Modal Close
      const modal = this.container.querySelector('#wp_merge_modal');
      const modalClose = this.container.querySelector('#wp_modal_close');
      if (modalClose && modal) {
        modalClose.addEventListener('click', () => { modal.style.display = 'none'; });
      }
    }

    loadPreset(key) {
      const editor = this.container.querySelector('#wp_editor_page');
      if (!editor) return;
      const p = PRESETS[key] || PRESETS.leave_letter;
      editor.innerHTML = p.content;
      this.currentRecipientIdx = 0;
      this.isPreviewActive = false;
      const previewBtn = this.container.querySelector('#wp_btn_toggle_preview');
      if (previewBtn) previewBtn.classList.remove('active');
      this.updateRecordIndicator();
      this.updateStats();
    }

    updateRecordIndicator() {
      const indicator = this.container.querySelector('#wp_record_indicator');
      if (indicator) {
        indicator.textContent = `Record ${this.currentRecipientIdx + 1} / ${SAMPLE_RECIPIENTS.length}`;
        const rec = SAMPLE_RECIPIENTS[this.currentRecipientIdx];
        indicator.title = `${rec.name} (${rec.roll})`;
      }
    }

    renderPreview() {
      const editor = this.container.querySelector('#wp_editor_page');
      if (!editor) return;

      const template = this.savedTemplate || editor.innerHTML;
      const rec = SAMPLE_RECIPIENTS[this.currentRecipientIdx];

      let merged = template
        .replace(/«Student_Name»/g, `<strong>${rec.name}</strong>`)
        .replace(/«Roll_No»/g, `<strong>${rec.roll}</strong>`)
        .replace(/«Department»/g, `<strong>${rec.dept}</strong>`)
        .replace(/«Marks»/g, `<strong>${rec.marks}</strong>`)
        .replace(/«Result»/g, `<strong>${rec.result}</strong>`)
        .replace(/«Grade»/g, `<strong>${rec.grade}</strong>`);

      editor.innerHTML = merged;
    }

    updateStats() {
      const editor = this.container.querySelector('#wp_editor_page');
      if (!editor) return;

      const text = editor.innerText || editor.textContent || '';
      const words = text.trim() ? text.trim().split(/\s+/).length : 0;
      const chars = text.length;
      const readTime = Math.max(1, Math.ceil(words / 200));

      const wEl = this.container.querySelector('#wp_stat_words');
      const cEl = this.container.querySelector('#wp_stat_chars');
      const rEl = this.container.querySelector('#wp_stat_read_time');

      if (wEl) wEl.textContent = `Words: ${words}`;
      if (cEl) cEl.textContent = `Characters: ${chars}`;
      if (rEl) rEl.textContent = `Est. Read: ${readTime} min`;
    }
  }

  // Global Engine Mount
  window.WordProcessorEngine = {
    create: (containerId, options) => new WordProcessor(containerId, options)
  };

})(window);
