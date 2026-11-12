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
        <hr style="border: 0; border-top: 2px solid #2563eb; margin: 0.8rem 0;">
        
        <h3 style="color: #1e3a8a; border-bottom: 1px solid #cbd5e1; padding-bottom: 0.3rem;">ACADEMIC PROFILE &amp; OBJECTIVE</h3>
        <p>Diligent and analytical Physics undergraduate seeking a competitive foundation in scientific computing, electronic instrumentation, and data analysis. Aiming to contribute with strong laboratory rigor and practical problem-solving.</p>
        
        <h3 style="color: #1e3a8a; border-bottom: 1px solid #cbd5e1; padding-bottom: 0.3rem; margin-top: 0.8rem;">EDUCATIONAL QUALIFICATIONS</h3>
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
        
        <h3 style="color: #1e3a8a; border-bottom: 1px solid #cbd5e1; padding-bottom: 0.3rem; margin-top: 0.8rem;">TECHNICAL &amp; LAB SKILLS</h3>
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
    },
    lab_report: {
      title: 'Physics Laboratory Experiment Record',
      content: `
        <h2 style="text-align: center; color: #1e3a8a; margin-bottom: 4px;">S.V.A. GOVT. DEGREE COLLEGE, SRIKALAHASTI</h2>
        <p style="text-align: center; font-size: 0.95rem; color: #475569; margin-top: 0;">Department of Physics &bull; Laboratory Observation Record</p>
        <hr style="border: 0; border-top: 2px solid #2563eb; margin: 10px 0;">
        
        <p><strong>Experiment:</strong> Wavelength Determination of Laser Diode using Diffraction Grating<br>
        <strong>Student:</strong> K. Ramesh Babu &nbsp;&bull;&nbsp; <strong>Roll No:</strong> 23PH01 &nbsp;&bull;&nbsp; <strong>Date:</strong> 28-09-2026</p>
        
        <h3>1. Aim &amp; Apparatus</h3>
        <p><strong>Aim:</strong> To measure the wavelength (&lambda;) of spectral emission from a Semiconductor Diode Laser using a transmission diffraction grating.</p>
        <p><strong>Apparatus:</strong> Diode laser source (650 nm), diffraction grating (15,000 LPI), optical bench, calibrated meter scale, screen.</p>
        
        <h3>2. Governing Principle &amp; Formula</h3>
        <div style="background: #f8fafc; border-left: 4px solid #2563eb; padding: 10px 14px; margin: 8px 0;">
          <p style="margin: 0;"><strong>Grating Equation:</strong> <code>(a + b) &bull; sin(&theta;) = n &bull; &lambda;</code></p>
          <p style="margin: 4px 0 0 0; font-size: 0.88rem; color: #475569;">Where <code>(a + b)</code> is the grating element, <code>n</code> is the diffraction order, and <code>&theta;</code> is the diffraction angle.</p>
        </div>
        
        <h3>3. Tabular Observations</h3>
        <table style="width: 100%; border-collapse: collapse; margin: 10px 0;" border="1">
          <thead>
            <tr style="background: #f1f5f9;">
              <th style="padding: 6px; text-align: center;">Order (n)</th>
              <th style="padding: 6px; text-align: center;">Distance D (cm)</th>
              <th style="padding: 6px; text-align: center;">Spot Separation 2x (cm)</th>
              <th style="padding: 6px; text-align: center;">Calculated &lambda; (nm)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style="padding: 6px; text-align: center;">n = 1</td><td style="padding: 6px; text-align: center;">100.0</td><td style="padding: 6px; text-align: center;">38.4</td><td style="padding: 6px; text-align: center;">652.8 nm</td></tr>
            <tr><td style="padding: 6px; text-align: center;">n = 2</td><td style="padding: 6px; text-align: center;">100.0</td><td style="padding: 6px; text-align: center;">82.6</td><td style="padding: 6px; text-align: center;">649.5 nm</td></tr>
          </tbody>
        </table>
        
        <h3>4. Result &amp; Inferences</h3>
        <p>The experimental wavelength of the laser diode was determined to be <strong>&lambda; = 651.15 nm</strong> (Standard reference: 650.0 nm; percentage error &lt; 0.2%).</p>
      `
    },
    blank: {
      title: 'Blank Document',
      content: `
        <h2 style="color: #1e3a8a;">Untitled Document</h2>
        <p>Start typing or designing your departmental document here...</p>
      `
    }
  };

  class WordProcessor {
    constructor(mountEl, options = {}) {
      this.container = typeof mountEl === 'string' ? document.getElementById(mountEl) : mountEl;
      this.mode = options.mode || 'wordprocessor';
      this.presetKey = options.initialPreset || (this.mode === 'mailmerge' ? 'mailmerge' : 'leave_letter');
      this.currentRecipientIdx = 0;
      this.isPreviewActive = false;
      this.mergedDrafts = [];
      this.findMatchesList = [];
      this.currentMatchIndex = -1;
      this.isFindReplaceOpen = false;
      this.orientation = 'portrait';
      this.margins = 'normal';
      this.lineHeight = '1.5';
      this.activeTableCell = null;
      this.activeContentEl = null;
      this.activeImageContainer = null;
      this.pendingImageDataUrl = null;
      this.paginateTimer = null;
      this.draggedImageContainer = null;
      this.init();
    }

    init() {
      if (!this.container) return;
      this.render();
      this.bindEvents();
      this.loadPreset(this.presetKey);
      this.updateStats();
      this.renderRulers();
    }

    render() {
      const isMailMerge = this.mode === 'mailmerge';

      this.container.innerHTML = `
        <div class="interactive-tool-section wordproc-tool-container">
          <div class="tool-card-header">
            <div class="tool-title-group">
              <span class="tool-badge"><i class="fa-solid fa-file-word"></i> ${isMailMerge ? 'Mail Merge Studio' : 'Word Processor Lab'}</span>
              <span class="tool-title-text">${isMailMerge ? 'Dynamic Mail Merge &amp; Document Automation Sandbox' : 'Live Interactive Rich-Text Word Processor (A4 Pages)'}</span>
            </div>
            <div class="tool-actions-group">
              <select class="wp-preset-select" id="wp_preset_select" title="Load Academic Template">
                <option value="leave_letter" ${this.presetKey === 'leave_letter' ? 'selected' : ''}>📄 Leave Letter (Lab 4)</option>
                <option value="resume" ${this.presetKey === 'resume' ? 'selected' : ''}>📋 Student Resume (Lab 3)</option>
                <option value="lab_report" ${this.presetKey === 'lab_report' ? 'selected' : ''}>🔬 Physics Lab Record (Exp. 1)</option>
                <option value="mailmerge" ${this.presetKey === 'mailmerge' ? 'selected' : ''}>✉️ Mail Merge Template</option>
                <option value="report" ${this.presetKey === 'report' ? 'selected' : ''}>📑 Seminar Abstract</option>
                <option value="blank" ${this.presetKey === 'blank' ? 'selected' : ''}>📝 Blank Document</option>
              </select>
              <button type="button" class="btn-tool-action" id="wp_btn_add_page" title="Insert New A4 Page Break"><i class="fa-regular fa-file"></i> + Page</button>
              <button type="button" class="btn-tool-action text-danger" id="wp_btn_del_page" title="Delete Active or Blank Page"><i class="fa-solid fa-trash-can"></i> - Page</button>
              <button type="button" class="btn-tool-action btn-success-accent" id="wp_btn_export_doc" title="Download as MS Word Document (.doc)"><i class="fa-solid fa-file-word"></i> Word (.doc)</button>
              <button type="button" class="btn-tool-action" id="wp_btn_export_txt" title="Download Plain Text (.txt)"><i class="fa-solid fa-file-lines"></i> Text (.txt)</button>
              <button type="button" class="btn-tool-action" id="wp_btn_copy" title="Copy Document HTML"><i class="fa-regular fa-copy"></i> Copy</button>
              <button type="button" class="btn-tool-action" id="wp_btn_print" title="Print / PDF View"><i class="fa-solid fa-print"></i> Print</button>
              <button type="button" class="btn-tool-action text-danger" id="wp_btn_clear" title="Clear Document"><i class="fa-solid fa-eraser"></i> Clear</button>
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
              <div class="wp-ribbon-row" style="align-items: center; gap: 4px;">
                <button type="button" class="wp-btn" data-cmd="bold" title="Bold (Ctrl+B)"><i class="fa-solid fa-bold"></i></button>
                <button type="button" class="wp-btn" data-cmd="italic" title="Italic (Ctrl+I)"><i class="fa-solid fa-italic"></i></button>
                <button type="button" class="wp-btn" data-cmd="underline" title="Underline (Ctrl+U)"><i class="fa-solid fa-underline"></i></button>
                <button type="button" class="wp-btn" data-cmd="strikeThrough" title="Strikethrough"><i class="fa-solid fa-strikethrough"></i></button>
                <button type="button" class="wp-btn" data-cmd="subscript" title="Subscript (X₂)"><i class="fa-solid fa-subscript"></i></button>
                <button type="button" class="wp-btn" data-cmd="superscript" title="Superscript (X²)"><i class="fa-solid fa-superscript"></i></button>

                <!-- Distinct TC and HC Mobile Labels with Visual Color Swatches -->
                <label class="wp-color-btn-wrapper" for="wp_fore_color" title="Text Color (TC)">
                  <span class="wp-color-tag-tc">TC</span>
                  <i class="fa-solid fa-font"></i>
                  <span class="wp-color-indicator" id="wp_fore_indicator" style="background-color: #1e293b;"></span>
                  <input type="color" id="wp_fore_color" class="wp-color-picker-hidden" value="#1e293b">
                </label>

                <label class="wp-color-btn-wrapper" for="wp_hilite_color" title="Highlight Color (HC)">
                  <span class="wp-color-tag-hc">HC</span>
                  <i class="fa-solid fa-highlighter"></i>
                  <span class="wp-color-indicator" id="wp_hilite_indicator" style="background-color: #fef08a;"></span>
                  <input type="color" id="wp_hilite_color" class="wp-color-picker-hidden" value="#fef08a">
                </label>
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
                <select class="wp-select" id="wp_line_spacing" title="Line Spacing">
                  <option value="1.0">Line: 1.0</option>
                  <option value="1.15">Line: 1.15</option>
                  <option value="1.5" selected>Line: 1.5</option>
                  <option value="2.0">Line: 2.0</option>
                </select>
              </div>
            </div>

            <!-- Page Layout Group -->
            <div class="wp-ribbon-group">
              <span class="wp-group-label">Page Layout (A4)</span>
              <div class="wp-ribbon-row">
                <select class="wp-select" id="wp_page_margins" title="Margins">
                  <option value="normal" selected>Margins: Normal (1 in)</option>
                  <option value="narrow">Margins: Narrow (0.5 in)</option>
                  <option value="compact">Margins: Compact (0.25cm)</option>
                </select>
              </div>
              <div class="wp-ribbon-row">
                <select class="wp-select" id="wp_page_orientation" title="Orientation">
                  <option value="portrait" selected>A4 Portrait (210 &times; 297mm)</option>
                  <option value="landscape">A4 Landscape (297 &times; 210mm)</option>
                </select>
              </div>
            </div>

            <!-- Table Tools Group -->
            <div class="wp-ribbon-group">
              <span class="wp-group-label">Table Tools</span>
              <div class="wp-ribbon-row">
                <button type="button" class="wp-btn wp-btn-text" id="wp_btn_insert_table" title="Insert New Table"><i class="fa-solid fa-table"></i> + Table</button>
                <button type="button" class="wp-btn wp-btn-text" id="wp_btn_add_row" title="Add Row Below in Table"><i class="fa-solid fa-plus"></i> Row</button>
                <button type="button" class="wp-btn wp-btn-text" id="wp_btn_add_col" title="Add Column Right in Table"><i class="fa-solid fa-plus"></i> Col</button>
              </div>
              <div class="wp-ribbon-row">
                <button type="button" class="wp-btn wp-btn-text text-danger" id="wp_btn_del_row" title="Delete Selected Row"><i class="fa-solid fa-minus"></i> Row</button>
                <button type="button" class="wp-btn wp-btn-text text-danger" id="wp_btn_del_col" title="Delete Selected Col"><i class="fa-solid fa-minus"></i> Col</button>
                <button type="button" class="wp-btn wp-btn-text text-danger" id="wp_btn_del_table" title="Delete Table"><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>

            <!-- Insert & Tools Group -->
            <div class="wp-ribbon-group">
              <span class="wp-group-label">Insert &amp; Tools</span>
              <div class="wp-ribbon-row">
                <button type="button" class="wp-btn wp-btn-text" id="wp_btn_open_img_modal" title="Upload Image from Phone Gallery or Folders"><i class="fa-solid fa-image"></i> Image</button>
                <button type="button" class="wp-btn wp-btn-text" id="wp_btn_insert_callout" title="Insert Callout Card"><i class="fa-solid fa-circle-info"></i> Note</button>
              </div>
              <div class="wp-ribbon-row">
                <button type="button" class="wp-btn" data-cmd="insertHorizontalRule" title="Horizontal Line"><i class="fa-solid fa-minus"></i></button>
                <button type="button" class="wp-btn" data-cmd="undo" title="Undo (Ctrl+Z)"><i class="fa-solid fa-rotate-left"></i></button>
                <button type="button" class="wp-btn" data-cmd="redo" title="Redo (Ctrl+Y)"><i class="fa-solid fa-rotate-right"></i></button>
                <button type="button" class="wp-btn wp-btn-text" id="wp_btn_toggle_find" title="Find &amp; Replace (Ctrl+F)"><i class="fa-solid fa-magnifying-glass"></i> Find</button>
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

          <!-- Floating Find & Replace Bar -->
          <div class="wp-find-replace-bar" id="wp_find_replace_bar" style="display: none;">
            <div class="wp-fr-group">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" class="wp-fr-input" id="wp_find_input" placeholder="Find in document...">
              <span class="wp-fr-counter" id="wp_find_counter">0 of 0</span>
            </div>
            <div class="wp-fr-buttons">
              <button type="button" class="wp-fr-btn" id="wp_find_prev" title="Previous match"><i class="fa-solid fa-chevron-up"></i></button>
              <button type="button" class="wp-fr-btn" id="wp_find_next" title="Next match"><i class="fa-solid fa-chevron-down"></i></button>
            </div>
            <div class="wp-fr-group">
              <i class="fa-solid fa-repeat"></i>
              <input type="text" class="wp-fr-input" id="wp_replace_input" placeholder="Replace with...">
            </div>
            <div class="wp-fr-buttons">
              <button type="button" class="wp-fr-btn" id="wp_btn_replace" title="Replace current match">Replace</button>
              <button type="button" class="wp-fr-btn" id="wp_btn_replace_all" title="Replace all occurrences">Replace All</button>
            </div>
            <button type="button" class="wp-fr-close" id="wp_find_close" title="Close Find &amp; Replace">&times;</button>
          </div>

          <!-- Floating Table Helper Bar -->
          <div class="wp-table-floating-bar" id="wp_table_floating_bar">
            <button type="button" class="wp-tbl-btn" id="wp_float_add_row" title="Add Row Below"><i class="fa-solid fa-plus"></i> Row</button>
            <button type="button" class="wp-tbl-btn" id="wp_float_add_col" title="Add Column Right"><i class="fa-solid fa-plus"></i> Col</button>
            <button type="button" class="wp-tbl-btn text-danger" id="wp_float_del_row" title="Delete Row"><i class="fa-solid fa-minus"></i> Row</button>
            <button type="button" class="wp-tbl-btn text-danger" id="wp_float_del_col" title="Delete Col"><i class="fa-solid fa-minus"></i> Col</button>
            <button type="button" class="wp-tbl-btn text-danger" id="wp_float_del_tbl" title="Delete Table"><i class="fa-solid fa-trash"></i></button>
          </div>

          <!-- Document Workspace Wrapper with Dual Rulers & A4 Multi-Page Container -->
          <div class="wp-workspace" id="wp_workspace">
            <div class="wp-workspace-inner">
              <!-- Ruler Top Row: Corner Block + Horizontal Ruler -->
              <div class="wp-ruler-top-row">
                <div class="wp-ruler-corner" title="Ruler: Inches"><i class="fa-solid fa-ruler-combined"></i></div>
                <div class="wp-ruler-horizontal" id="wp_ruler_h">
                  <!-- Dynamically drawn ruler ticks & margin zones -->
                </div>
              </div>

              <!-- Main Workspace Row: Vertical Ruler + A4 Pages Container -->
              <div class="wp-workspace-main-row">
                <div class="wp-ruler-vertical" id="wp_ruler_v">
                  <!-- Dynamically drawn vertical ruler ticks & margin zones -->
                </div>
                <div class="wp-pages-container" id="wp_pages_container">
                  <!-- Discrete A4 Page Sheets generated here -->
                </div>
              </div>
            </div>
          </div>

          <!-- Status Bar -->
          <div class="wp-status-bar">
            <div class="wp-status-left">
              <span class="wp-status-item" id="wp_stat_pages"><i class="fa-regular fa-file"></i> Page 1 of 1</span>
              <span class="wp-status-item" id="wp_stat_words">Words: 0</span>
              <span class="wp-status-item" id="wp_stat_chars">Characters: 0</span>
              <span class="wp-status-item" id="wp_stat_read_time">Est. Read: 1 min</span>
            </div>
            <div class="wp-status-right">
              <span class="wp-status-item"><i class="fa-solid fa-check-double text-success"></i> Auto-saved locally</span>
              <span class="wp-status-badge">A4 Sheet</span>
            </div>
          </div>

          <!-- Insert Image Modal (Gallery / Folders & URL) -->
          <div class="wp-dialog-modal" id="wp_image_modal" style="display: none;">
            <div class="wp-dialog-content">
              <div class="wp-dialog-header">
                <h3><i class="fa-solid fa-image"></i> Insert Image / Diagram</h3>
                <button type="button" class="wp-fr-close" id="wp_modal_img_close">&times;</button>
              </div>
              <div class="wp-dialog-body">
                <!-- Option 1: Device / Gallery Upload -->
                <div>
                  <label style="font-weight: 700; font-size: 0.85rem; color: var(--text-primary); display: block; margin-bottom: 6px;">
                    <i class="fa-solid fa-folder-open text-primary"></i> 1. Choose from Phone Gallery / Folders:
                  </label>
                  <div class="wp-upload-dropzone" id="wp_modal_dropzone">
                    <i class="fa-solid fa-cloud-arrow-up" style="font-size: 1.8rem; color: var(--primary); margin-bottom: 6px;"></i>
                    <p style="margin: 0; font-size: 0.85rem; font-weight: 600;">Tap to select photo from Gallery / Computer</p>
                    <p style="margin: 4px 0 0 0; font-size: 0.75rem; color: var(--text-muted);">Supports PNG, JPG, JPEG, GIF, WEBP, SVG</p>
                    <input type="file" id="wp_modal_file_input" accept="image/*" style="display: none;">
                    <img id="wp_modal_preview" class="wp-upload-preview" alt="Preview">
                  </div>
                </div>

                <!-- Option 2: Web URL or Physics Diagrams -->
                <div>
                  <label style="font-weight: 700; font-size: 0.85rem; color: var(--text-primary); display: block; margin-bottom: 6px;">
                    <i class="fa-solid fa-globe text-primary"></i> 2. Or Enter Web Image URL / Physics Diagrams:
                  </label>
                  <input type="text" class="wp-fr-input" id="wp_modal_url_input" placeholder="https://images.unsplash.com/..." style="width: 100%; box-sizing: border-box; padding: 0.4rem 0.6rem;">
                  <div class="wp-sample-pills">
                    <span class="wp-sample-pill" data-url="https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=600&auto=format&fit=crop&q=80">🔬 Laser Diffraction</span>
                    <span class="wp-sample-pill" data-url="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=80">🧪 Laboratory Setup</span>
                    <span class="wp-sample-pill" data-url="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=80">⚡ Semiconductor Physics</span>
                  </div>
                </div>

                <!-- Placement Mode Selection -->
                <div>
                  <label style="font-weight: 600; font-size: 0.8rem; color: var(--text-secondary); display: block; margin-bottom: 4px;">Initial Placement Mode:</label>
                  <select class="wp-select" id="wp_modal_placement_select" style="width: 100%;">
                    <option value="passport">📷 Passport Photo (Top-Right Corner)</option>
                    <option value="floating" selected>🔲 Free Floating (Drag anywhere over text)</option>
                    <option value="wrap_right">▶ Right Wrapped (Text flows around)</option>
                    <option value="inline">■ Standard Inline Block</option>
                  </select>
                </div>
              </div>
              <div class="wp-dialog-footer">
                <button type="button" class="wp-fr-btn" id="wp_modal_img_cancel">Cancel</button>
                <button type="button" class="wp-fr-btn wp-btn-primary" id="wp_modal_img_insert"><i class="fa-solid fa-check"></i> Insert into Document</button>
              </div>
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
      // Ribbon Command Buttons
      this.container.querySelectorAll('.wp-btn[data-cmd]').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          const cmd = btn.getAttribute('data-cmd');
          this.ensureActiveFocus();
          document.execCommand(cmd, false, null);
          this.updateStats();
          this.schedulePagination();
        });
      });

      // Heading block format
      const blockSelect = this.container.querySelector('#wp_format_block');
      if (blockSelect) {
        blockSelect.addEventListener('change', () => {
          this.ensureActiveFocus();
          document.execCommand('formatBlock', false, `<${blockSelect.value}>`);
          this.schedulePagination();
        });
      }

      // Font Family
      const fontSelect = this.container.querySelector('#wp_font_name');
      if (fontSelect) {
        fontSelect.addEventListener('change', () => {
          this.ensureActiveFocus();
          document.execCommand('fontName', false, fontSelect.value);
        });
      }

      // Font Size
      const sizeSelect = this.container.querySelector('#wp_font_size');
      if (sizeSelect) {
        sizeSelect.addEventListener('change', () => {
          this.ensureActiveFocus();
          document.execCommand('fontSize', false, sizeSelect.value);
          this.schedulePagination();
        });
      }

      // Text Color (TC)
      const foreColor = this.container.querySelector('#wp_fore_color');
      const foreIndicator = this.container.querySelector('#wp_fore_indicator');
      if (foreColor) {
        foreColor.addEventListener('input', () => {
          if (foreIndicator) foreIndicator.style.backgroundColor = foreColor.value;
          this.ensureActiveFocus();
          document.execCommand('foreColor', false, foreColor.value);
        });
      }

      // Highlight Color (HC)
      const hiliteColor = this.container.querySelector('#wp_hilite_color');
      const hiliteIndicator = this.container.querySelector('#wp_hilite_indicator');
      if (hiliteColor) {
        hiliteColor.addEventListener('input', () => {
          if (hiliteIndicator) hiliteIndicator.style.backgroundColor = hiliteColor.value;
          this.ensureActiveFocus();
          document.execCommand('hiliteColor', false, hiliteColor.value);
        });
      }

      // Line Spacing
      const lineSpacing = this.container.querySelector('#wp_line_spacing');
      if (lineSpacing) {
        lineSpacing.addEventListener('change', () => {
          this.setLineHeight(lineSpacing.value);
        });
      }

      // Page Margins
      const pageMargins = this.container.querySelector('#wp_page_margins');
      if (pageMargins) {
        pageMargins.addEventListener('change', () => {
          this.setMargins(pageMargins.value);
        });
      }

      // Page Orientation
      const pageOrientation = this.container.querySelector('#wp_page_orientation');
      if (pageOrientation) {
        pageOrientation.addEventListener('change', () => {
          this.setOrientation(pageOrientation.value);
        });
      }

      // Manual Add Page (+ Page Break)
      const addPageBtn = this.container.querySelector('#wp_btn_add_page');
      if (addPageBtn) {
        addPageBtn.addEventListener('click', () => {
          this.addPage('<p><br></p>');
        });
      }

      // Manual Delete Page (- Page)
      const delPageBtn = this.container.querySelector('#wp_btn_del_page');
      if (delPageBtn) {
        delPageBtn.addEventListener('click', () => {
          this.deleteActivePage();
        });
      }

      // Table Tools in Ribbon
      const btnInsertTable = this.container.querySelector('#wp_btn_insert_table');
      if (btnInsertTable) {
        btnInsertTable.addEventListener('click', () => {
          this.insertCustomTable();
        });
      }

      const btnAddRow = this.container.querySelector('#wp_btn_add_row');
      if (btnAddRow) btnAddRow.addEventListener('click', () => this.addRow());

      const btnAddCol = this.container.querySelector('#wp_btn_add_col');
      if (btnAddCol) btnAddCol.addEventListener('click', () => this.addCol());

      const btnDelRow = this.container.querySelector('#wp_btn_del_row');
      if (btnDelRow) btnDelRow.addEventListener('click', () => this.deleteRow());

      const btnDelCol = this.container.querySelector('#wp_btn_del_col');
      if (btnDelCol) btnDelCol.addEventListener('click', () => this.deleteCol());

      const btnDelTable = this.container.querySelector('#wp_btn_del_table');
      if (btnDelTable) btnDelTable.addEventListener('click', () => this.deleteTable());

      // Floating Table Bar Actions
      const floatAddRow = this.container.querySelector('#wp_float_add_row');
      if (floatAddRow) floatAddRow.addEventListener('click', () => this.addRow());

      const floatAddCol = this.container.querySelector('#wp_float_add_col');
      if (floatAddCol) floatAddCol.addEventListener('click', () => this.addCol());

      const floatDelRow = this.container.querySelector('#wp_float_del_row');
      if (floatDelRow) floatDelRow.addEventListener('click', () => this.deleteRow());

      const floatDelCol = this.container.querySelector('#wp_float_del_col');
      if (floatDelCol) floatDelCol.addEventListener('click', () => this.deleteCol());

      const floatDelTbl = this.container.querySelector('#wp_float_del_tbl');
      if (floatDelTbl) floatDelTbl.addEventListener('click', () => this.deleteTable());

      // Image Insertion Modal Open / Close
      const openImgBtn = this.container.querySelector('#wp_btn_open_img_modal');
      const imgModal = this.container.querySelector('#wp_image_modal');
      const closeImgBtn = this.container.querySelector('#wp_modal_img_close');
      const cancelImgBtn = this.container.querySelector('#wp_modal_img_cancel');
      const insertImgBtn = this.container.querySelector('#wp_modal_img_insert');
      const dropzone = this.container.querySelector('#wp_modal_dropzone');
      const fileInput = this.container.querySelector('#wp_modal_file_input');
      const previewImg = this.container.querySelector('#wp_modal_preview');
      const urlInput = this.container.querySelector('#wp_modal_url_input');
      const placementSelect = this.container.querySelector('#wp_modal_placement_select');

      if (openImgBtn && imgModal) {
        openImgBtn.addEventListener('click', () => {
          this.pendingImageDataUrl = null;
          if (previewImg) { previewImg.src = ''; previewImg.style.display = 'none'; }
          if (urlInput) urlInput.value = '';
          imgModal.style.display = 'flex';
        });
      }

      const closeImageModal = () => {
        if (imgModal) imgModal.style.display = 'none';
      };
      if (closeImgBtn) closeImgBtn.addEventListener('click', closeImageModal);
      if (cancelImgBtn) cancelImgBtn.addEventListener('click', closeImageModal);

      // Dropzone click triggers device file picker
      if (dropzone && fileInput) {
        dropzone.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', () => {
          if (fileInput.files && fileInput.files[0]) {
            const file = fileInput.files[0];
            const reader = new FileReader();
            reader.onload = (ev) => {
              this.pendingImageDataUrl = ev.target.result;
              if (previewImg) {
                previewImg.src = ev.target.result;
                previewImg.style.display = 'block';
              }
            };
            reader.readAsDataURL(file);
          }
        });
      }

      // Sample Pills
      this.container.querySelectorAll('.wp-sample-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          const sampleUrl = pill.getAttribute('data-url');
          if (urlInput) urlInput.value = sampleUrl;
          if (previewImg) {
            previewImg.src = sampleUrl;
            previewImg.style.display = 'block';
          }
          this.pendingImageDataUrl = sampleUrl;
        });
      });

      // Insert image action
      if (insertImgBtn) {
        insertImgBtn.addEventListener('click', () => {
          const finalSrc = this.pendingImageDataUrl || (urlInput ? urlInput.value.trim() : '');
          if (!finalSrc) {
            alert('Please select an image from your device or enter an image URL.');
            return;
          }
          const placement = placementSelect ? placementSelect.value : 'floating';
          this.insertCustomImage(finalSrc, placement);
          closeImageModal();
        });
      }

      // Insert Callout Box
      const btnCallout = this.container.querySelector('#wp_btn_insert_callout');
      if (btnCallout) {
        btnCallout.addEventListener('click', () => {
          const calloutHtml = `
            <div style="background: #eff6ff; border-left: 4px solid #2563eb; padding: 10px 14px; margin: 10px 0; border-radius: 4px;">
              <strong>Note:</strong> Enter important departmental observation, safety protocol, or remark here.
            </div>
            <p><br></p>
          `;
          this.ensureActiveFocus();
          document.execCommand('insertHTML', false, calloutHtml);
          this.updateStats();
          this.schedulePagination();
        });
      }

      // Export MS Word (.doc)
      const exportDocBtn = this.container.querySelector('#wp_btn_export_doc');
      if (exportDocBtn) {
        exportDocBtn.addEventListener('click', () => {
          this.exportToWord();
        });
      }

      // Export Plain Text (.txt)
      const exportTxtBtn = this.container.querySelector('#wp_btn_export_txt');
      if (exportTxtBtn) {
        exportTxtBtn.addEventListener('click', () => {
          this.exportToTxt();
        });
      }

      // Clear Document
      const clearBtn = this.container.querySelector('#wp_btn_clear');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          this.clearDocument();
        });
      }

      // Find & Replace Toolbar Toggle
      const findBtn = this.container.querySelector('#wp_btn_toggle_find');
      if (findBtn) {
        findBtn.addEventListener('click', () => {
          this.toggleFindReplace();
        });
      }

      const findClose = this.container.querySelector('#wp_find_close');
      if (findClose) {
        findClose.addEventListener('click', () => {
          this.toggleFindReplace();
        });
      }

      // Find & Replace Inputs & Buttons
      const findInput = this.container.querySelector('#wp_find_input');
      const replaceInput = this.container.querySelector('#wp_replace_input');
      const findNextBtn = this.container.querySelector('#wp_find_next');
      const findPrevBtn = this.container.querySelector('#wp_find_prev');
      const replaceBtn = this.container.querySelector('#wp_btn_replace');
      const replaceAllBtn = this.container.querySelector('#wp_btn_replace_all');

      if (findInput) {
        findInput.addEventListener('input', () => {
          this.highlightMatches(findInput.value);
        });
        findInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            if (e.shiftKey) {
              this.findPrev();
            } else {
              this.findNext();
            }
          }
        });
      }

      if (findNextBtn) findNextBtn.addEventListener('click', () => this.findNext());
      if (findPrevBtn) findPrevBtn.addEventListener('click', () => this.findPrev());

      if (replaceBtn) {
        replaceBtn.addEventListener('click', () => {
          this.replaceCurrent(replaceInput ? replaceInput.value : '');
        });
      }

      if (replaceAllBtn) {
        replaceAllBtn.addEventListener('click', () => {
          const q = findInput ? findInput.value : '';
          const r = replaceInput ? replaceInput.value : '';
          this.replaceAll(q, r);
        });
      }

      // Preset Selector
      const presetSelect = this.container.querySelector('#wp_preset_select');
      if (presetSelect) {
        presetSelect.addEventListener('change', () => {
          this.loadPreset(presetSelect.value);
        });
      }

      // Copy Button
      const copyBtn = this.container.querySelector('#wp_btn_copy');
      if (copyBtn) {
        copyBtn.addEventListener('click', () => {
          const fullHtml = this.getAllPagesHtml();
          navigator.clipboard.writeText(fullHtml).then(() => {
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
          window.print();
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
            this.ensureActiveFocus();
            document.execCommand('insertHTML', false, tokenHtml);
            this.updateStats();
            this.schedulePagination();
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
            this.savedTemplate = this.getAllPagesHtml();
            this.renderPreview();
          } else {
            if (this.savedTemplate) {
              this.setAllPagesHtml(this.savedTemplate);
            }
          }
          this.updateStats();
        });
      }

      // Modal Close for Mail Merge
      const modal = this.container.querySelector('#wp_merge_modal');
      const modalClose = this.container.querySelector('#wp_modal_close');
      if (modalClose && modal) {
        modalClose.addEventListener('click', () => { modal.style.display = 'none'; });
      }

      // Workspace Delegations (Tables, Images, Page Delete Buttons)
      const pagesContainer = this.container.querySelector('#wp_pages_container');
      if (pagesContainer) {
        pagesContainer.addEventListener('click', (e) => {
          // Page delete button in header band
          const closeBtn = e.target.closest('.wp-page-close-btn');
          if (closeBtn) {
            const pageEl = closeBtn.closest('.wp-a4-page');
            const pages = Array.from(pagesContainer.querySelectorAll('.wp-a4-page'));
            const idx = pages.indexOf(pageEl);
            if (idx > 0) this.deletePage(idx);
            return;
          }

          // Table cell focus
          const cell = e.target.closest('td, th');
          if (cell) {
            this.activeTableCell = cell;
            this.showTableFloatingBar(cell);
          } else if (!e.target.closest('#wp_table_floating_bar')) {
            this.hideTableFloatingBar();
          }

          // Image selection
          const imgContainer = e.target.closest('.wp-image-container');
          if (imgContainer) {
            this.container.querySelectorAll('.wp-image-container').forEach(c => c.classList.remove('active-selected'));
            imgContainer.classList.add('active-selected');
            this.activeImageContainer = imgContainer;
          } else if (!e.target.closest('.wp-img-tool-btn')) {
            this.container.querySelectorAll('.wp-image-container').forEach(c => c.classList.remove('active-selected'));
            this.activeImageContainer = null;
          }

          // Page content focus tracking
          const content = e.target.closest('.wp-page-content');
          if (content) {
            this.activeContentEl = content;
            this.updateActivePageStat();
          }
        });

        // Keyboard Shortcut: Ctrl+F to open Find & Replace
        pagesContainer.addEventListener('keydown', (e) => {
          if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'f') {
            e.preventDefault();
            this.toggleFindReplace();
          }
        });
      }
    }

    // ==========================================
    // Calibrated Horizontal & Vertical Dual Rulers
    // ==========================================

    renderRulers() {
      const rulerH = this.container.querySelector('#wp_ruler_h');
      const rulerV = this.container.querySelector('#wp_ruler_v');
      if (!rulerH || !rulerV) return;

      const isLandscape = this.orientation === 'landscape';
      const pageW = isLandscape ? 1123 : 794;
      const pageH = isLandscape ? 794 : 1123;

      rulerH.style.width = pageW + 'px';
      rulerV.style.height = pageH + 'px';

      let padLeft = 72;
      let padRight = 72;
      let padTop = 60;
      let padBottom = 60;
      if (this.margins === 'narrow') {
        padLeft = 42; padRight = 42; padTop = 35; padBottom = 35;
      } else if (this.margins === 'compact') {
        padLeft = 18; padRight = 18; padTop = 14; padBottom = 14;
      }

      // Horizontal Ruler Ticks & Shaded Margins
      let htmlH = '';
      htmlH += `<div class="wp-ruler-margin-zone" style="left:0; top:0; bottom:0; width:${padLeft}px;"></div>`;
      htmlH += `<div class="wp-ruler-margin-zone" style="right:0; top:0; bottom:0; width:${padRight}px;"></div>`;

      for (let px = 0; px <= pageW; px += 24) {
        const isMajor = px % 96 === 0;
        const isHalf = px % 48 === 0 && !isMajor;
        const inch = px / 96;
        if (isMajor && px > 0 && px < pageW) {
          htmlH += `<div class="ruler-num-h" style="left:${px}px;">${inch}</div>`;
          htmlH += `<div class="ruler-tick-h major" style="left:${px}px;"></div>`;
        } else {
          htmlH += `<div class="ruler-tick-h ${isHalf ? 'major' : 'sub'}" style="left:${px}px;"></div>`;
        }
      }
      rulerH.innerHTML = htmlH;

      // Vertical Ruler Ticks & Shaded Margins
      let htmlV = '';
      htmlV += `<div class="wp-ruler-margin-zone" style="top:0; left:0; right:0; height:${padTop}px;"></div>`;
      htmlV += `<div class="wp-ruler-margin-zone" style="bottom:0; left:0; right:0; height:${padBottom}px;"></div>`;

      for (let py = 0; py <= pageH; py += 24) {
        const isMajor = py % 96 === 0;
        const isHalf = py % 48 === 0 && !isMajor;
        const inch = py / 96;
        if (isMajor && py > 0 && py < pageH) {
          htmlV += `<div class="ruler-num-v" style="top:${py}px;">${inch}</div>`;
          htmlV += `<div class="ruler-tick-v major" style="top:${py}px;"></div>`;
        } else {
          htmlV += `<div class="ruler-tick-v ${isHalf ? 'major' : 'sub'}" style="top:${py}px;"></div>`;
        }
      }
      rulerV.innerHTML = htmlV;
    }

    // ==========================================
    // Multi-Page A4 Sheet Management & Pagination
    // ==========================================

    createA4PageElement(pageNum = 1, initialHtml = '') {
      const page = document.createElement('div');
      page.className = 'wp-a4-page';
      page.setAttribute('data-page-num', pageNum);

      page.innerHTML = `
        <div class="wp-page-header-band">
          <span><i class="fa-solid fa-graduation-cap"></i> S.V.A. Govt. Degree College, Srikalahasti</span>
          <div style="display: flex; align-items: center; gap: 8px;">
            <span class="wp-page-num-indicator">Page ${pageNum}</span>
            ${pageNum > 1 ? `<button type="button" class="wp-page-close-btn" title="Delete Page ${pageNum}">&times;</button>` : ''}
          </div>
        </div>
        <div class="wp-page-content" contenteditable="true" spellcheck="true" role="textbox" aria-multiline="true" style="position: relative;">
          ${initialHtml || '<p><br></p>'}
        </div>
        <div class="wp-page-footer-band">
          <span>Department of Physics &bull; S.V.A. Govt. Degree College</span>
          <span class="wp-page-orientation-indicator">A4 Sheet</span>
        </div>
      `;

      const content = page.querySelector('.wp-page-content');
      content.style.lineHeight = this.lineHeight;

      content.addEventListener('input', () => {
        this.activeContentEl = content;
        this.updateStats();
        this.schedulePagination();
      });

      content.addEventListener('focus', () => {
        this.activeContentEl = content;
        this.updateActivePageStat();
      });

      // Drag and drop across pages
      page.addEventListener('dragover', (e) => {
        e.preventDefault();
      });

      page.addEventListener('drop', (e) => {
        if (this.draggedImageContainer) {
          e.preventDefault();
          if (this.draggedImageContainer.classList.contains('wp-image-floating')) {
            page.appendChild(this.draggedImageContainer);
            const rect = page.getBoundingClientRect();
            this.draggedImageContainer.style.left = Math.max(10, e.clientX - rect.left - 60) + 'px';
            this.draggedImageContainer.style.top = Math.max(10, e.clientY - rect.top - 60) + 'px';
          } else {
            const target = e.target.closest('p, h1, h2, h3, h4, table, div');
            if (target && target !== this.draggedImageContainer && content.contains(target)) {
              content.insertBefore(this.draggedImageContainer, target);
            } else {
              content.appendChild(this.draggedImageContainer);
            }
          }
          this.draggedImageContainer = null;
          this.schedulePagination();
        }
      });

      return page;
    }

    addPage(initialHtml = '') {
      const pagesContainer = this.container.querySelector('#wp_pages_container');
      if (!pagesContainer) return null;
      const count = pagesContainer.querySelectorAll('.wp-a4-page').length;
      const newPage = this.createA4PageElement(count + 1, initialHtml);
      pagesContainer.appendChild(newPage);
      this.updatePageNumbers();
      const content = newPage.querySelector('.wp-page-content');
      if (content) {
        content.focus();
        this.activeContentEl = content;
      }
      this.updateStats();
      this.renderRulers();
      return newPage;
    }

    deletePage(pageIdx) {
      const pagesContainer = this.container.querySelector('#wp_pages_container');
      if (!pagesContainer) return;
      const pages = pagesContainer.querySelectorAll('.wp-a4-page');
      if (pages.length <= 1) {
        alert('A document must have at least one page.');
        return;
      }
      if (pageIdx < 0 || pageIdx >= pages.length) return;

      const pageToDelete = pages[pageIdx];
      const content = pageToDelete.querySelector('.wp-page-content');
      const text = content ? (content.innerText || '').trim() : '';

      if (text.length > 0) {
        if (!confirm(`Delete Page ${pageIdx + 1}? Any text or diagrams on this page will be removed.`)) {
          return;
        }
      }

      pageToDelete.remove();
      this.updatePageNumbers();
      this.activeContentEl = this.container.querySelector('.wp-page-content');
      this.updateStats();
    }

    deleteActivePage() {
      const pages = Array.from(this.container.querySelectorAll('.wp-a4-page'));
      if (pages.length <= 1) {
        alert('A document must have at least one page.');
        return;
      }
      let currentIdx = pages.length - 1;
      if (this.activeContentEl) {
        const parentPage = this.activeContentEl.closest('.wp-a4-page');
        if (parentPage) currentIdx = pages.indexOf(parentPage);
      }
      if (currentIdx === 0 && pages.length > 1) {
        currentIdx = pages.length - 1;
      }
      this.deletePage(currentIdx);
    }

    updatePageNumbers() {
      const pages = this.container.querySelectorAll('.wp-a4-page');
      pages.forEach((page, idx) => {
        page.setAttribute('data-page-num', idx + 1);
        const ind = page.querySelector('.wp-page-num-indicator');
        if (ind) ind.textContent = `Page ${idx + 1} of ${pages.length}`;
        const closeBtn = page.querySelector('.wp-page-close-btn');
        if (closeBtn) closeBtn.title = `Delete Page ${idx + 1}`;
      });
      this.updateActivePageStat();
    }

    updateActivePageStat() {
      const pages = Array.from(this.container.querySelectorAll('.wp-a4-page'));
      let currentIdx = 0;
      if (this.activeContentEl) {
        const parentPage = this.activeContentEl.closest('.wp-a4-page');
        if (parentPage) {
          currentIdx = pages.indexOf(parentPage);
        }
      }
      const statPages = this.container.querySelector('#wp_stat_pages');
      if (statPages) {
        statPages.innerHTML = `<i class="fa-regular fa-file"></i> Page ${Math.max(1, currentIdx + 1)} of ${Math.max(1, pages.length)}`;
      }
    }

    ensureActiveFocus() {
      if (!this.activeContentEl || !this.container.contains(this.activeContentEl)) {
        const first = this.container.querySelector('.wp-page-content');
        if (first) {
          this.activeContentEl = first;
          first.focus();
        }
      } else {
        this.activeContentEl.focus();
      }
    }

    getMaxPageContentHeight() {
      const isLandscape = this.orientation === 'landscape';
      const totalH = isLandscape ? 794 : 1123;
      let pad = 120;
      if (this.margins === 'narrow') pad = 70;
      if (this.margins === 'compact') pad = 28;
      return totalH - pad - 60;
    }

    schedulePagination() {
      if (this.paginateTimer) clearTimeout(this.paginateTimer);
      this.paginateTimer = setTimeout(() => {
        this.checkPagination();
      }, 400);
    }

    checkPagination() {
      const pagesContainer = this.container.querySelector('#wp_pages_container');
      if (!pagesContainer) return;
      const pages = pagesContainer.querySelectorAll('.wp-a4-page');
      const maxH = this.getMaxPageContentHeight();

      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        const content = page.querySelector('.wp-page-content');
        if (!content) continue;

        // Clean up trailing empty pages (page > 0)
        if (i > 0 && pages.length > 1 && (content.innerText || '').trim() === '' && content.querySelectorAll('img, table').length === 0) {
          if (content !== this.activeContentEl) {
            page.remove();
            this.updatePageNumbers();
            continue;
          }
        }

        // Only paginate if scrollHeight genuinely overflows with safe buffer
        if (content.scrollHeight > maxH + 50) {
          const children = Array.from(content.children);
          if (children.length <= 1) continue;

          let splitIndex = -1;
          for (let c = 0; c < children.length; c++) {
            const child = children[c];
            // Skip floating or absolute passport photos
            if (child.classList.contains('wp-image-floating') || child.classList.contains('wp-image-passport')) continue;
            const relTop = child.offsetTop;
            if (relTop + child.offsetHeight > maxH) {
              splitIndex = c;
              break;
            }
          }

          if (splitIndex > 0 && splitIndex < children.length) {
            const overflowing = children.slice(splitIndex);
            const frag = document.createDocumentFragment();
            overflowing.forEach(node => frag.appendChild(node));

            let nextPage = pages[i + 1];
            if (!nextPage) {
              nextPage = this.createA4PageElement(pages.length + 1, '');
              pagesContainer.appendChild(nextPage);
            }
            const nextContent = nextPage.querySelector('.wp-page-content');
            if (nextContent.firstChild) {
              nextContent.insertBefore(frag, nextContent.firstChild);
            } else {
              nextContent.appendChild(frag);
            }

            this.updatePageNumbers();
            break;
          }
        }
      }
    }

    // ==========================================
    // Image Upload, Drag & Drop, Free Floating & Resizing
    // ==========================================

    insertCustomImage(src, placementMode = 'floating') {
      this.ensureActiveFocus();
      const container = document.createElement('div');
      container.className = 'wp-image-container active-selected';
      container.setAttribute('contenteditable', 'false');

      const wrapper = document.createElement('div');
      wrapper.className = 'wp-image-wrapper';

      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Uploaded Academic Visual';
      img.className = 'wp-doc-image';
      img.style.width = placementMode === 'passport' ? '115px' : '280px';

      const handle = document.createElement('div');
      handle.className = 'wp-image-resize-handle';
      handle.title = 'Drag corner to resize';

      const toolbar = document.createElement('div');
      toolbar.className = 'wp-image-floating-bar';
      toolbar.innerHTML = `
        <button type="button" class="wp-img-tool-btn" data-action="passport" title="Snap as Passport Photo (Top-Right)">📷 Passport</button>
        <button type="button" class="wp-img-tool-btn" data-action="float" title="Free Float (Over text)">🔲 Float</button>
        <button type="button" class="wp-img-tool-btn" data-action="wrap-right" title="Wrap Right">▶ Wrap</button>
        <button type="button" class="wp-img-tool-btn" data-action="wrap-left" title="Wrap Left">◀ Wrap</button>
        <button type="button" class="wp-img-tool-btn" data-action="inline" title="Inline Center">■ Center</button>
        <button type="button" class="wp-img-tool-btn" data-action="w25" title="25% width">25%</button>
        <button type="button" class="wp-img-tool-btn" data-action="w50" title="50% width">50%</button>
        <button type="button" class="wp-img-tool-btn" data-action="w100" title="100% width">100%</button>
        <button type="button" class="wp-img-tool-btn" data-action="page-prev" title="Move to Previous Page">⏮</button>
        <button type="button" class="wp-img-tool-btn" data-action="page-next" title="Move to Next Page">⏭</button>
        <button type="button" class="wp-img-tool-btn btn-danger-tool" data-action="delete" title="Delete Image"><i class="fa-solid fa-trash"></i></button>
      `;

      wrapper.appendChild(img);
      wrapper.appendChild(handle);
      wrapper.appendChild(toolbar);
      container.appendChild(wrapper);

      // Target page selection
      const targetContent = this.activeContentEl || this.container.querySelector('.wp-page-content');
      const targetPage = targetContent ? targetContent.closest('.wp-a4-page') : this.container.querySelector('.wp-a4-page');

      if (placementMode === 'passport') {
        container.classList.add('wp-image-passport');
        if (targetPage) targetPage.appendChild(container);
      } else if (placementMode === 'floating') {
        container.classList.add('wp-image-floating');
        container.style.top = '120px';
        container.style.right = '60px';
        if (targetPage) targetPage.appendChild(container);
      } else if (placementMode === 'wrap_right') {
        container.classList.add('wp-image-wrap-right');
        if (targetContent) targetContent.prepend(container);
      } else {
        if (targetContent) {
          targetContent.appendChild(container);
          const spacer = document.createElement('p');
          spacer.innerHTML = '<br>';
          targetContent.appendChild(spacer);
        }
      }

      this.bindImageInteractive(container, img, handle, toolbar);
      this.activeImageContainer = container;
      this.updateStats();
      this.schedulePagination();
    }

    bindImageInteractive(container, img, handle, toolbar) {
      // Free drag over text & across pages when floating / passport
      const onDragStart = (e) => {
        if (e.target.closest('.wp-img-tool-btn') || e.target.classList.contains('wp-image-resize-handle')) return;
        const isFloating = container.classList.contains('wp-image-floating') || container.classList.contains('wp-image-passport');
        if (!isFloating) return;

        e.preventDefault();
        const curPage = container.closest('.wp-a4-page');
        if (!curPage) return;

        const pageRect = curPage.getBoundingClientRect();
        const contRect = container.getBoundingClientRect();
        const clientX = e.clientX || (e.touches && e.touches[0].clientX);
        const clientY = e.clientY || (e.touches && e.touches[0].clientY);
        const offsetX = clientX - contRect.left;
        const offsetY = clientY - contRect.top;

        const onDragMove = (ev) => {
          const moveX = ev.clientX || (ev.touches && ev.touches[0].clientX);
          const moveY = ev.clientY || (ev.touches && ev.touches[0].clientY);
          if (!moveX || !moveY) return;

          // Detect page under cursor to allow dragging across pages
          const hoveredEl = document.elementFromPoint(moveX, moveY);
          const targetHoverPage = hoveredEl ? hoveredEl.closest('.wp-a4-page') : null;
          const activePage = targetHoverPage || curPage;

          if (activePage && activePage !== container.parentNode) {
            activePage.appendChild(container);
          }

          const targetRect = activePage.getBoundingClientRect();
          const newLeft = moveX - targetRect.left - offsetX;
          const newTop = moveY - targetRect.top - offsetY;

          container.style.left = Math.max(10, Math.min(targetRect.width - container.offsetWidth - 10, newLeft)) + 'px';
          container.style.top = Math.max(10, Math.min(targetRect.height - container.offsetHeight - 10, newTop)) + 'px';
          container.style.right = 'auto';
        };

        const onDragEnd = () => {
          window.removeEventListener('mousemove', onDragMove);
          window.removeEventListener('mouseup', onDragEnd);
          window.removeEventListener('touchmove', onDragMove);
          window.removeEventListener('touchend', onDragEnd);
        };

        window.addEventListener('mousemove', onDragMove);
        window.addEventListener('mouseup', onDragEnd);
        window.addEventListener('touchmove', onDragMove, { passive: false });
        window.addEventListener('touchend', onDragEnd);
      };

      container.addEventListener('mousedown', onDragStart);
      container.addEventListener('touchstart', onDragStart, { passive: false });

      // Corner resize dragging
      const onResizeStart = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const startX = e.clientX || (e.touches && e.touches[0].clientX);
        const startW = img.offsetWidth;

        const onMove = (ev) => {
          const curX = ev.clientX || (ev.touches && ev.touches[0].clientX);
          if (!curX) return;
          const diff = curX - startX;
          const newW = Math.max(80, Math.min(680, startW + diff));
          img.style.width = newW + 'px';
        };

        const onStop = () => {
          window.removeEventListener('mousemove', onMove);
          window.removeEventListener('mouseup', onStop);
          window.removeEventListener('touchmove', onMove);
          window.removeEventListener('touchend', onStop);
          this.schedulePagination();
        };

        window.addEventListener('mousemove', onMove);
        window.addEventListener('mouseup', onStop);
        window.addEventListener('touchmove', onMove, { passive: false });
        window.addEventListener('touchend', onStop);
      };

      handle.addEventListener('mousedown', onResizeStart);
      handle.addEventListener('touchstart', onResizeStart, { passive: false });

      // Floating toolbar actions
      toolbar.querySelectorAll('.wp-img-tool-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const action = btn.getAttribute('data-action');
          const curPage = container.closest('.wp-a4-page') || this.container.querySelector('.wp-a4-page');

          if (action === 'passport') {
            container.classList.remove('wp-image-floating', 'wp-image-wrap-right', 'wp-image-wrap-left');
            container.classList.add('wp-image-passport');
            if (curPage && container.parentNode !== curPage) curPage.appendChild(container);
            container.style.position = 'absolute';
            container.style.top = '45px';
            container.style.right = '50px';
            container.style.left = 'auto';
            img.style.width = '115px';
            img.style.height = '140px';
          } else if (action === 'float') {
            container.classList.remove('wp-image-passport', 'wp-image-wrap-right', 'wp-image-wrap-left');
            container.classList.add('wp-image-floating');
            if (curPage && container.parentNode !== curPage) curPage.appendChild(container);
            container.style.position = 'absolute';
            if (!container.style.top) container.style.top = '120px';
            if (!container.style.left) container.style.left = '80px';
          } else if (action === 'wrap-right') {
            container.classList.remove('wp-image-floating', 'wp-image-passport', 'wp-image-wrap-left');
            container.classList.add('wp-image-wrap-right');
            container.style.position = 'relative';
            container.style.top = 'auto';
            container.style.left = 'auto';
            container.style.right = 'auto';
            const content = curPage ? curPage.querySelector('.wp-page-content') : null;
            if (content && container.parentNode !== content) content.prepend(container);
          } else if (action === 'wrap-left') {
            container.classList.remove('wp-image-floating', 'wp-image-passport', 'wp-image-wrap-right');
            container.classList.add('wp-image-wrap-left');
            container.style.position = 'relative';
            container.style.top = 'auto';
            container.style.left = 'auto';
            container.style.right = 'auto';
            const content = curPage ? curPage.querySelector('.wp-page-content') : null;
            if (content && container.parentNode !== content) content.prepend(container);
          } else if (action === 'inline') {
            container.classList.remove('wp-image-floating', 'wp-image-passport', 'wp-image-wrap-right', 'wp-image-wrap-left');
            container.style.position = 'relative';
            container.style.top = 'auto';
            container.style.left = 'auto';
            container.style.right = 'auto';
            container.style.display = 'block';
            container.style.margin = '14px auto';
            container.style.textAlign = 'center';
            const content = curPage ? curPage.querySelector('.wp-page-content') : null;
            if (content && container.parentNode !== content) content.appendChild(container);
          } else if (action === 'w25') {
            img.style.width = '25%';
            img.style.height = 'auto';
          } else if (action === 'w50') {
            img.style.width = '50%';
            img.style.height = 'auto';
          } else if (action === 'w75') {
            img.style.width = '75%';
            img.style.height = 'auto';
          } else if (action === 'w100') {
            img.style.width = '100%';
            img.style.height = 'auto';
          } else if (action === 'page-prev') {
            const pages = Array.from(this.container.querySelectorAll('.wp-a4-page'));
            const idx = pages.indexOf(curPage);
            if (idx > 0) {
              const prevPage = pages[idx - 1];
              if (container.classList.contains('wp-image-floating') || container.classList.contains('wp-image-passport')) {
                prevPage.appendChild(container);
              } else {
                prevPage.querySelector('.wp-page-content').appendChild(container);
              }
            }
          } else if (action === 'page-next') {
            const pages = Array.from(this.container.querySelectorAll('.wp-a4-page'));
            const idx = pages.indexOf(curPage);
            let nextPage = pages[idx + 1];
            if (!nextPage) {
              nextPage = this.addPage('');
            }
            if (container.classList.contains('wp-image-floating') || container.classList.contains('wp-image-passport')) {
              nextPage.appendChild(container);
            } else {
              nextPage.querySelector('.wp-page-content').appendChild(container);
            }
          } else if (action === 'delete') {
            container.remove();
            this.activeImageContainer = null;
          }
          this.schedulePagination();
          this.updateStats();
        });
      });
    }

    // ==========================================
    // Table Tools: Insert, +Row, +Col, -Row, -Col
    // ==========================================

    insertCustomTable() {
      const rowsInput = prompt('Enter number of rows (e.g. 2 to 10):', '3');
      if (rowsInput === null) return;
      const colsInput = prompt('Enter number of columns (e.g. 2 to 8):', '3');
      if (colsInput === null) return;
      const rows = Math.max(1, Math.min(20, parseInt(rowsInput, 10) || 3));
      const cols = Math.max(1, Math.min(10, parseInt(colsInput, 10) || 3));

      let headerThs = '';
      for (let c = 1; c <= cols; c++) {
        headerThs += `<th style="padding: 8px; border: 1px solid #cbd5e1; text-align: left; background: #f8fafc;">Column ${c}</th>`;
      }
      let bodyRows = '';
      for (let r = 1; r <= rows; r++) {
        let tds = '';
        for (let c = 1; c <= cols; c++) {
          tds += `<td style="padding: 8px; border: 1px solid #cbd5e1;">Data R${r}C${c}</td>`;
        }
        bodyRows += `<tr>${tds}</tr>`;
      }

      const tableHtml = `
        <table style="width: 100%; border-collapse: collapse; margin: 12px 0; font-size: 0.95rem;" border="1">
          <thead>
            <tr style="background: #f1f5f9;">${headerThs}</tr>
          </thead>
          <tbody>
            ${bodyRows}
          </tbody>
        </table>
        <p><br></p>
      `;
      this.ensureActiveFocus();
      document.execCommand('insertHTML', false, tableHtml);
      this.updateStats();
      this.schedulePagination();
    }

    addRow() {
      if (!this.activeTableCell) {
        const table = this.container.querySelector('.wp-page-content table');
        if (!table) return alert('Please click inside a table to add a row.');
        const rows = table.querySelectorAll('tr');
        if (rows.length) this.activeTableCell = rows[rows.length - 1].querySelector('td, th');
      }
      if (!this.activeTableCell) return;

      const tr = this.activeTableCell.closest('tr');
      const table = tr.closest('table');
      const cols = tr.children.length;

      const newTr = document.createElement('tr');
      for (let i = 0; i < cols; i++) {
        const td = document.createElement('td');
        td.style.padding = '8px';
        td.style.border = '1px solid #cbd5e1';
        td.innerHTML = '<br>';
        newTr.appendChild(td);
      }

      tr.parentNode.insertBefore(newTr, tr.nextSibling);
      this.activeTableCell = newTr.children[0];
      this.activeTableCell.focus();
      this.showTableFloatingBar(this.activeTableCell);
      this.schedulePagination();
      this.updateStats();
    }

    addCol() {
      if (!this.activeTableCell) {
        const table = this.container.querySelector('.wp-page-content table');
        if (!table) return alert('Please click inside a table to add a column.');
        this.activeTableCell = table.querySelector('td, th');
      }
      if (!this.activeTableCell) return;

      const tr = this.activeTableCell.closest('tr');
      const table = tr.closest('table');
      const colIdx = Array.from(tr.children).indexOf(this.activeTableCell);

      const allRows = table.querySelectorAll('tr');
      allRows.forEach(row => {
        const isHeader = row.parentNode.tagName === 'THEAD';
        const cell = document.createElement(isHeader ? 'th' : 'td');
        cell.style.padding = '8px';
        cell.style.border = '1px solid #cbd5e1';
        if (isHeader) {
          cell.style.background = '#f8fafc';
          cell.textContent = `Col ${row.children.length + 1}`;
        } else {
          cell.innerHTML = '<br>';
        }
        if (colIdx >= 0 && colIdx < row.children.length) {
          row.insertBefore(cell, row.children[colIdx].nextSibling);
        } else {
          row.appendChild(cell);
        }
      });

      this.schedulePagination();
      this.updateStats();
    }

    deleteRow() {
      if (!this.activeTableCell) return;
      const tr = this.activeTableCell.closest('tr');
      const table = tr.closest('table');
      const rows = table.querySelectorAll('tr');
      if (rows.length <= 1) {
        if (confirm('Delete the entire table?')) {
          table.remove();
          this.activeTableCell = null;
          this.hideTableFloatingBar();
        }
      } else {
        tr.remove();
        this.activeTableCell = null;
        this.hideTableFloatingBar();
      }
      this.schedulePagination();
      this.updateStats();
    }

    deleteCol() {
      if (!this.activeTableCell) return;
      const tr = this.activeTableCell.closest('tr');
      const table = tr.closest('table');
      const colIdx = Array.from(tr.children).indexOf(this.activeTableCell);
      if (tr.children.length <= 1) {
        if (confirm('Delete the entire table?')) {
          table.remove();
          this.activeTableCell = null;
          this.hideTableFloatingBar();
        }
      } else {
        const allRows = table.querySelectorAll('tr');
        allRows.forEach(row => {
          if (row.children[colIdx]) row.children[colIdx].remove();
        });
        this.activeTableCell = null;
        this.hideTableFloatingBar();
      }
      this.schedulePagination();
      this.updateStats();
    }

    deleteTable() {
      if (!this.activeTableCell) return;
      const table = this.activeTableCell.closest('table');
      if (table && confirm('Are you sure you want to delete this table?')) {
        table.remove();
        this.activeTableCell = null;
        this.hideTableFloatingBar();
        this.schedulePagination();
        this.updateStats();
      }
    }

    showTableFloatingBar(cell) {
      const bar = this.container.querySelector('#wp_table_floating_bar');
      if (!bar || !cell) return;
      const rect = cell.getBoundingClientRect();
      const containerRect = this.container.getBoundingClientRect();
      bar.style.display = 'flex';
      bar.style.top = `${rect.top - containerRect.top - 38}px`;
      bar.style.left = `${rect.left - containerRect.left}px`;
    }

    hideTableFloatingBar() {
      const bar = this.container.querySelector('#wp_table_floating_bar');
      if (bar) bar.style.display = 'none';
    }

    // ==========================================
    // Page Layout, Formatting & Preset Loader
    // ==========================================

    setMargins(type) {
      this.margins = type;
      const pagesContainer = this.container.querySelector('#wp_pages_container');
      if (!pagesContainer) return;
      pagesContainer.classList.remove('margins-narrow', 'margins-compact');
      if (type === 'narrow') {
        pagesContainer.classList.add('margins-narrow');
      } else if (type === 'compact') {
        pagesContainer.classList.add('margins-compact');
      }
      this.renderRulers();
      this.schedulePagination();
    }

    setOrientation(type) {
      this.orientation = type;
      const pagesContainer = this.container.querySelector('#wp_pages_container');
      const workspace = this.container.querySelector('#wp_workspace');
      if (!pagesContainer) return;
      if (type === 'landscape') {
        pagesContainer.classList.add('orientation-landscape');
        if (workspace) workspace.classList.add('orientation-landscape');
      } else {
        pagesContainer.classList.remove('orientation-landscape');
        if (workspace) workspace.classList.remove('orientation-landscape');
      }
      const ind = this.container.querySelectorAll('.wp-page-orientation-indicator');
      ind.forEach(el => el.textContent = type === 'landscape' ? 'A4 Landscape' : 'A4 Portrait');
      this.renderRulers();
      this.schedulePagination();
    }

    setLineHeight(val) {
      this.lineHeight = val;
      this.container.querySelectorAll('.wp-page-content').forEach(content => {
        content.style.lineHeight = val;
      });
    }

    loadPreset(key) {
      const pagesContainer = this.container.querySelector('#wp_pages_container');
      if (!pagesContainer) return;
      pagesContainer.innerHTML = '';

      const p = PRESETS[key] || PRESETS.leave_letter;
      const page1 = this.createA4PageElement(1, p.content);
      pagesContainer.appendChild(page1);

      this.activeContentEl = page1.querySelector('.wp-page-content');
      this.currentRecipientIdx = 0;
      this.isPreviewActive = false;

      const previewBtn = this.container.querySelector('#wp_btn_toggle_preview');
      if (previewBtn) previewBtn.classList.remove('active');

      this.updateRecordIndicator();
      this.updatePageNumbers();
      this.updateStats();
      this.renderRulers();

      page1.querySelectorAll('img:not(.wp-doc-image)').forEach(img => {
        this.wrapExistingImage(img);
      });
    }

    wrapExistingImage(img) {
      const parent = img.parentNode;
      const container = document.createElement('div');
      container.className = 'wp-image-container';
      container.setAttribute('contenteditable', 'false');

      const wrapper = document.createElement('div');
      wrapper.className = 'wp-image-wrapper';

      const handle = document.createElement('div');
      handle.className = 'wp-image-resize-handle';
      handle.title = 'Drag corner to resize';

      const toolbar = document.createElement('div');
      toolbar.className = 'wp-image-floating-bar';
      toolbar.innerHTML = `
        <button type="button" class="wp-img-tool-btn" data-action="passport" title="Snap as Passport Photo">📷 Passport</button>
        <button type="button" class="wp-img-tool-btn" data-action="float" title="Free Float (Over text)">🔲 Float</button>
        <button type="button" class="wp-img-tool-btn" data-action="wrap-right" title="Wrap Right">▶ Wrap</button>
        <button type="button" class="wp-img-tool-btn" data-action="wrap-left" title="Wrap Left">◀ Wrap</button>
        <button type="button" class="wp-img-tool-btn" data-action="inline" title="Inline Center">■ Center</button>
        <button type="button" class="wp-img-tool-btn" data-action="w25" title="25% width">25%</button>
        <button type="button" class="wp-img-tool-btn" data-action="w50" title="50% width">50%</button>
        <button type="button" class="wp-img-tool-btn" data-action="w100" title="100% width">100%</button>
        <button type="button" class="wp-img-tool-btn" data-action="page-prev" title="Move to Prev Page">⏮</button>
        <button type="button" class="wp-img-tool-btn" data-action="page-next" title="Move to Next Page">⏭</button>
        <button type="button" class="wp-img-tool-btn btn-danger-tool" data-action="delete" title="Delete Image"><i class="fa-solid fa-trash"></i></button>
      `;

      img.classList.add('wp-doc-image');
      parent.insertBefore(container, img);
      wrapper.appendChild(img);
      wrapper.appendChild(handle);
      wrapper.appendChild(toolbar);
      container.appendChild(wrapper);

      this.bindImageInteractive(container, img, handle, toolbar);
    }

    clearDocument() {
      if (confirm('Clear entire document and start with a blank A4 sheet?')) {
        const pagesContainer = this.container.querySelector('#wp_pages_container');
        if (pagesContainer) {
          pagesContainer.innerHTML = '';
          const p1 = this.createA4PageElement(1, '<p><br></p>');
          pagesContainer.appendChild(p1);
          this.activeContentEl = p1.querySelector('.wp-page-content');
          this.activeContentEl.focus();
        }
        this.clearFindHighlights();
        this.hideTableFloatingBar();
        this.updatePageNumbers();
        this.updateStats();
        this.renderRulers();
      }
    }

    getAllPagesHtml() {
      const contents = this.container.querySelectorAll('.wp-page-content');
      const htmls = [];
      contents.forEach(c => htmls.push(c.innerHTML));
      return htmls.join('<br clear="all" style="page-break-before:always; mso-break-type:section-break">');
    }

    setAllPagesHtml(html) {
      const pagesContainer = this.container.querySelector('#wp_pages_container');
      if (!pagesContainer) return;
      pagesContainer.innerHTML = '';
      const p1 = this.createA4PageElement(1, html);
      pagesContainer.appendChild(p1);
      this.activeContentEl = p1.querySelector('.wp-page-content');
      this.updatePageNumbers();
      this.renderRulers();
    }

    exportToWord() {
      const orientation = this.orientation === 'landscape' ? 'landscape' : 'portrait';
      const marginsCss = this.margins === 'compact' ? '0.25cm' : (this.margins === 'narrow' ? '1.27cm' : '2.54cm');
      const fullHtml = this.getAllPagesHtml();

      const htmlContent = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
          <meta charset='utf-8'>
          <title>${this.presetKey || 'Document'}</title>
          <!--[if gte mso 9]>
          <xml>
          <w:WordDocument>
          <w:View>Print</w:View>
          <w:Zoom>100</w:Zoom>
          <w:DoNotOptimizeForBrowser/>
          </w:WordDocument>
          </xml>
          <![endif]-->
          <style>
            @page Section1 {
              size: ${orientation === 'landscape' ? '11in 8.5in' : '8.5in 11in'};
              margin: ${marginsCss};
              mso-page-orientation: ${orientation};
            }
            div.Section1 { page: Section1; }
            body {
              font-family: 'Times New Roman', serif;
              font-size: 11pt;
              line-height: ${this.lineHeight};
              color: #1e293b;
            }
            table { width: 100%; border-collapse: collapse; margin: 12px 0; }
            th, td { border: 1px solid #334155; padding: 6px 10px; font-size: 10pt; }
            th { background-color: #f1f5f9; font-weight: bold; }
            h1, h2, h3, h4 { color: #1e3a8a; }
            p { margin: 6px 0; }
            .wp-image-floating-bar, .wp-image-resize-handle { display: none !important; }
          </style>
        </head>
        <body>
          <div class="Section1">
            ${fullHtml}
          </div>
        </body>
        </html>
      `;
      const blob = new Blob(['\ufeff', htmlContent], { type: 'application/msword;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${this.presetKey || 'document'}_export.doc`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    exportToTxt() {
      const contents = this.container.querySelectorAll('.wp-page-content');
      const texts = [];
      contents.forEach((c, idx) => {
        texts.push(`--- Page ${idx + 1} ---\n` + (c.innerText || c.textContent || ''));
      });
      const blob = new Blob([texts.join('\n\n')], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${this.presetKey || 'document'}_export.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    updateStats() {
      let totalWords = 0;
      let totalChars = 0;

      this.container.querySelectorAll('.wp-page-content').forEach(content => {
        const text = content.innerText || content.textContent || '';
        totalWords += text.trim() ? text.trim().split(/\s+/).length : 0;
        totalChars += text.length;
      });

      const readTime = Math.max(1, Math.ceil(totalWords / 200));

      const wEl = this.container.querySelector('#wp_stat_words');
      const cEl = this.container.querySelector('#wp_stat_chars');
      const rEl = this.container.querySelector('#wp_stat_read_time');

      if (wEl) wEl.textContent = `Words: ${totalWords}`;
      if (cEl) cEl.textContent = `Characters: ${totalChars}`;
      if (rEl) rEl.textContent = `Est. Read: ${readTime} min`;
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
      const template = this.savedTemplate || this.getAllPagesHtml();
      const rec = SAMPLE_RECIPIENTS[this.currentRecipientIdx];

      const merged = template
        .replace(/«Student_Name»/g, `<strong>${rec.name}</strong>`)
        .replace(/«Roll_No»/g, `<strong>${rec.roll}</strong>`)
        .replace(/«Department»/g, `<strong>${rec.dept}</strong>`)
        .replace(/«Marks»/g, `<strong>${rec.marks}</strong>`)
        .replace(/«Result»/g, `<strong>${rec.result}</strong>`)
        .replace(/«Grade»/g, `<strong>${rec.grade}</strong>`);

      this.setAllPagesHtml(merged);
    }

    // ==========================================
    // Find & Replace System
    // ==========================================

    toggleFindReplace() {
      const bar = this.container.querySelector('#wp_find_replace_bar');
      if (!bar) return;
      this.isFindReplaceOpen = !this.isFindReplaceOpen;
      bar.style.display = this.isFindReplaceOpen ? 'flex' : 'none';
      if (this.isFindReplaceOpen) {
        const input = this.container.querySelector('#wp_find_input');
        if (input) {
          input.focus();
          input.select();
          if (input.value) this.highlightMatches(input.value);
        }
      } else {
        this.clearFindHighlights();
      }
    }

    clearFindHighlights() {
      const marks = this.container.querySelectorAll('mark.wp-find-highlight');
      marks.forEach(m => {
        const parent = m.parentNode;
        while (m.firstChild) parent.insertBefore(m.firstChild, m);
        parent.removeChild(m);
      });
      this.container.querySelectorAll('.wp-page-content').forEach(c => c.normalize());
      this.findMatchesList = [];
      this.currentMatchIndex = -1;
      this.updateFindCounter();
    }

    highlightMatches(query) {
      this.clearFindHighlights();
      if (!query || query.trim() === '') return;

      const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escaped, 'gi');

      this.container.querySelectorAll('.wp-page-content').forEach(content => {
        const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, null, false);
        const textNodes = [];
        let node;
        while ((node = walker.nextNode())) {
          if (node.nodeValue && regex.test(node.nodeValue)) {
            textNodes.push(node);
          }
        }

        textNodes.forEach(textNode => {
          const parent = textNode.parentNode;
          if (parent && parent.nodeName === 'MARK') return;
          const text = textNode.nodeValue;
          const frag = document.createDocumentFragment();
          let lastIdx = 0;
          let match;
          regex.lastIndex = 0;
          while ((match = regex.exec(text)) !== null) {
            if (match.index > lastIdx) {
              frag.appendChild(document.createTextNode(text.substring(lastIdx, match.index)));
            }
            const mark = document.createElement('mark');
            mark.className = 'wp-find-highlight';
            mark.textContent = match[0];
            frag.appendChild(mark);
            lastIdx = regex.lastIndex;
          }
          if (lastIdx < text.length) {
            frag.appendChild(document.createTextNode(text.substring(lastIdx)));
          }
          parent.replaceChild(frag, textNode);
        });
      });

      this.findMatchesList = Array.from(this.container.querySelectorAll('mark.wp-find-highlight'));
      this.currentMatchIndex = this.findMatchesList.length > 0 ? 0 : -1;
      this.focusCurrentMatch();
    }

    focusCurrentMatch() {
      this.findMatchesList.forEach((m, idx) => {
        m.classList.toggle('current', idx === this.currentMatchIndex);
      });
      if (this.currentMatchIndex >= 0 && this.findMatchesList[this.currentMatchIndex]) {
        const cur = this.findMatchesList[this.currentMatchIndex];
        cur.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      this.updateFindCounter();
    }

    findNext() {
      if (this.findMatchesList.length === 0) return;
      this.currentMatchIndex = (this.currentMatchIndex + 1) % this.findMatchesList.length;
      this.focusCurrentMatch();
    }

    findPrev() {
      if (this.findMatchesList.length === 0) return;
      this.currentMatchIndex = (this.currentMatchIndex - 1 + this.findMatchesList.length) % this.findMatchesList.length;
      this.focusCurrentMatch();
    }

    updateFindCounter() {
      const counter = this.container.querySelector('#wp_find_counter');
      if (!counter) return;
      const total = this.findMatchesList.length;
      const current = total > 0 && this.currentMatchIndex >= 0 ? this.currentMatchIndex + 1 : 0;
      counter.textContent = `${current} of ${total}`;
    }

    replaceCurrent(replacement) {
      if (this.currentMatchIndex < 0 || !this.findMatchesList[this.currentMatchIndex]) return;
      const cur = this.findMatchesList[this.currentMatchIndex];
      const textNode = document.createTextNode(replacement || '');
      const parent = cur.parentNode;
      parent.replaceChild(textNode, cur);
      const input = this.container.querySelector('#wp_find_input');
      const query = input ? input.value : '';
      this.highlightMatches(query);
      this.updateStats();
      this.schedulePagination();
    }

    replaceAll(query, replacement) {
      if (!query) return;
      this.clearFindHighlights();
      const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escaped, 'gi');

      this.container.querySelectorAll('.wp-page-content').forEach(content => {
        const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT, null, false);
        const textNodes = [];
        let node;
        while ((node = walker.nextNode())) {
          if (node.nodeValue && regex.test(node.nodeValue)) {
            textNodes.push(node);
          }
        }
        textNodes.forEach(tn => {
          tn.nodeValue = tn.nodeValue.replace(regex, replacement || '');
        });
        content.normalize();
      });

      this.updateStats();
      this.highlightMatches(query);
      this.schedulePagination();
    }
  }

  // Global Engine Mount
  window.WordProcessorEngine = {
    create: (containerId, options) => new WordProcessor(containerId, options)
  };

})(window);
