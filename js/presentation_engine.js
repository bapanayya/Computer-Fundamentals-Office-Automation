/**
 * Computer-Fund-OfficeAutomat-SVAGDC: Interactive Presentation Studio & Slide Deck Player
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function(window) {
  'use strict';

  const THEMES = {
    blue: {
      name: 'Academic Blue',
      bg: 'linear-gradient(135deg, #0f172a, #1e3a8a)',
      titleColor: '#ffffff',
      textColor: '#cbd5e1',
      accentColor: '#38bdf8',
      cardBg: 'rgba(255, 255, 255, 0.08)'
    },
    emerald: {
      name: 'Emerald Science',
      bg: 'linear-gradient(135deg, #064e3b, #047857)',
      titleColor: '#ecfdf5',
      textColor: '#a7f3d0',
      accentColor: '#34d399',
      cardBg: 'rgba(255, 255, 255, 0.1)'
    },
    crimson: {
      name: 'Crimson Elegant',
      bg: 'linear-gradient(135deg, #450a0a, #881337)',
      titleColor: '#fff1f2',
      textColor: '#fecdd3',
      accentColor: '#fb7185',
      cardBg: 'rgba(255, 255, 255, 0.1)'
    },
    dark: {
      name: 'Modern Slate',
      bg: 'linear-gradient(135deg, #18181b, #27272a)',
      titleColor: '#fafafa',
      textColor: '#d4d4d8',
      accentColor: '#38bdf8',
      cardBg: 'rgba(255, 255, 255, 0.06)'
    }
  };

  const SAMPLE_DECKS = {
    physics: [
      {
        layout: 'title',
        title: 'SEMICONDUCTOR LASERS & OPTOELECTRONICS',
        subtitle: 'Principles of Population Inversion, Heterostructures & Applications',
        meta: 'Department of Physics &bull; S.V.A. Govt. Degree College, Srikalahasti',
        notes: 'Welcome the audience. Introduce the importance of optoelectronic devices in fiber communication.'
      },
      {
        layout: 'bullets',
        title: 'Fundamental Laser Principles',
        subtitle: 'Three Primary Light-Matter Interactions',
        items: [
          '<strong>Stimulated Absorption:</strong> Ground state carrier absorbs incident photon hv = E2 - E1.',
          '<strong>Spontaneous Emission:</strong> Random radiative decay generating incoherent photons.',
          '<strong>Stimulated Emission:</strong> Incident photon triggers identical coherent photon emission (in phase, frequency & polarization).'
        ],
        notes: 'Explain Einstein A and B coefficients and population inversion condition N2 > N1.'
      },
      {
        layout: 'two_col',
        title: 'Homojunction vs Double Heterostructure',
        col1Title: 'Homojunction (GaAs)',
        col1Text: 'Single p-n junction with high threshold current density (~50,000 A/cm² at 300K). Poor optical and carrier confinement.',
        col2Title: 'Double Heterostructure (GaAs/AlGaAs)',
        col2Text: 'Thin active GaAs layer sandwiched between wider bandgap AlGaAs layers. Dramatic threshold reduction (<1,000 A/cm²) enabling continuous room-temperature operation.',
        notes: 'Point out refractive index difference creating an optical waveguide.'
      },
      {
        layout: 'metric',
        title: 'Optoelectronic Performance Scorecard',
        metricVal: '850 nm',
        metricLabel: 'Primary Fiber Optical Wavelength',
        description: 'GaAs diode lasers operate in the near-infrared spectrum, optimal for multimode optical fiber transmission.',
        notes: 'Mention future directions in quantum dot lasers and photonic integrated circuits.'
      }
    ],
    general: [
      {
        layout: 'title',
        title: 'EFFECTIVE PRESENTATION DESIGN',
        subtitle: 'Pedagogical Guidelines: Rule of Thirds, 6x6 Rule & Contrast',
        meta: 'Computer Fundamentals &bull; Unit 3 Presentation Mastery',
        notes: 'Introduce basic design psychology for scientific presentations.'
      },
      {
        layout: 'bullets',
        title: 'The 6 x 6 Presentation Rule',
        subtitle: 'Optimizing Cognitive Bandwidth for Students',
        items: [
          '<strong>Maximum 6 lines per slide</strong> to prevent cognitive overload.',
          '<strong>Maximum 6 words per line</strong> for immediate legibility.',
          '<strong>High Contrast:</strong> Light text on dark background or vice versa.',
          '<strong>Visual Anchors:</strong> Pair textual bullet points with relevant scientific diagrams.'
        ],
        notes: 'Emphasize that slides are visual aids, not teleprompters.'
      },
      {
        layout: 'two_col',
        title: 'Slide Transitions vs Object Animations',
        col1Title: 'Transitions (Slide to Slide)',
        col1Text: 'Controls the movement between consecutive slides (e.g. Fade, Push, Reveal). Best kept subtle and consistent (0.5s duration).',
        col2Title: 'Animations (Within a Slide)',
        col2Text: 'Controls individual elements appearing, emphasizing, or exiting (Entrance, Emphasis, Exit, Motion Paths). Use sequentially to guide audience attention.',
        notes: 'Demonstrate live transition and animation preview below.'
      }
    ],
    office_suite: [
      {
        layout: 'title',
        title: 'OFFICE AUTOMATION & IT SUITE',
        subtitle: 'Comprehensive Workflow: Word Processing, Spreadsheets & Slide Decks',
        meta: 'Department of Physics &bull; S.V.A. Govt. Degree College, Srikalahasti',
        notes: 'Introduce the core objective: digital office efficiency and automation standards.'
      },
      {
        layout: 'three_col',
        title: 'Triad of Modern Productivity Software',
        subtitle: 'Specialized Tools Serving Distinct Business & Academic Workflows',
        col1Title: 'Word Processing',
        col1Text: 'Formal administrative circulars, laboratory experiment reports, student resumes, and automated bulk Mail Merge dispatches.',
        col2Title: 'Spreadsheet Modeling',
        col2Text: 'Empirical datasets, grade registers, financial payroll accounting, dynamic VLOOKUP models, and statistical pivot tables.',
        col3Title: 'Dynamic Presentations',
        col3Text: 'Pedagogical lectures, conference seminar dissertations, animated visual walkthroughs, and multimedia demonstrations.',
        notes: 'Contrast when to use a document vs when to present via structured visual slides.'
      },
      {
        layout: 'quote',
        title: 'Guiding Pedagogical Axiom',
        quoteText: 'The computer is an instrument whose music is ideas. Real computer literacy is the ability to communicate, calculate, and synthesize thought.',
        author: 'Alan Kay &bull; Computer Pioneer',
        notes: 'Inspire students to look beyond mere tool buttons towards computational thinking.'
      },
      {
        layout: 'code_diagram',
        title: 'Automation & Computational Syntax',
        subtitle: 'Automating Repetitive Tasks with Formulas & Merge Fields',
        col1Title: 'Logic & Architecture',
        col1Text: 'Automated document generation and spreadsheet analysis rely on structured expressions, binding static templates to dynamic record lists.',
        code: `// Excel Dynamic Grade Lookup
=IF(D2>=75, "Distinction", IF(D2>=50, "Second Class", "Pass"))

// Word Mail Merge Substitution
Dear «Student_Name» (Roll: «Roll_No»),
Your secured score in Physics is «Marks» («Result»).`,
        notes: 'Walk through how spreadsheet formulas evaluate conditions and mail merge tokens get dynamically replaced.'
      }
    ]
  };

  class PresentationStudio {
    constructor(mountEl, options = {}) {
      this.container = typeof mountEl === 'string' ? document.getElementById(mountEl) : mountEl;
      this.deckKey = options.initialPreset || 'physics';
      this.slides = JSON.parse(JSON.stringify(SAMPLE_DECKS[this.deckKey] || SAMPLE_DECKS.physics));
      this.currentIdx = 0;
      this.currentTheme = 'blue';
      this.currentTransition = 'fade';
      this.isSlideShowActive = false;

      // Slide show superpower state
      this.timerSeconds = 0;
      this.timerInterval = null;
      this.isLaserActive = false;
      this.isAutoplayActive = false;
      this.autoplayInterval = null;
      this.isShowNotesActive = false;

      this.init();
    }

    init() {
      if (!this.container) return;
      this.render();
      this.bindEvents();
      this.updateSlideView();
    }

    render() {
      this.container.innerHTML = `
        <div class="interactive-tool-section presentation-tool-container">
          <div class="tool-card-header">
            <div class="tool-title-group">
              <span class="tool-badge"><i class="fa-solid fa-person-chalkboard"></i> Presentation Studio</span>
              <span class="tool-title-text">Interactive Slide Deck Creator &amp; Animation Player</span>
            </div>
            <div class="tool-actions-group">
              <select class="ppt-select" id="ppt_deck_preset" title="Load Pre-built Deck">
                <option value="physics" ${this.deckKey === 'physics' ? 'selected' : ''}>⚛️ Physics Seminar (Lab 5)</option>
                <option value="general" ${this.deckKey === 'general' ? 'selected' : ''}>📐 Slide Design Principles</option>
                <option value="office_suite" ${this.deckKey === 'office_suite' ? 'selected' : ''}>💼 Office Automation &amp; IT Suite</option>
              </select>
              <button type="button" class="btn-tool-action btn-success-accent" id="ppt_btn_export_html" title="Download Standalone Offline Presentation (.html)">
                <i class="fa-solid fa-file-code"></i> Export HTML Deck
              </button>
              <button type="button" class="btn-tool-action" id="ppt_btn_export_handouts" title="Print Lecture Handouts with Speaker Notes">
                <i class="fa-solid fa-print"></i> Handouts
              </button>
              <button type="button" class="btn-tool-action" id="ppt_btn_export_json" title="Download Deck JSON Backup">
                <i class="fa-solid fa-download"></i> JSON
              </button>
              <button type="button" class="btn-tool-action btn-primary-accent" id="ppt_btn_start_show" title="Start Fullscreen Presentation (F5)">
                <i class="fa-solid fa-play"></i> Slide Show
              </button>
            </div>
          </div>

          <!-- Studio Toolbar -->
          <div class="ppt-toolbar">
            <div class="ppt-toolbar-group">
              <button type="button" class="ppt-tool-btn" id="ppt_btn_add_slide" title="Add New Slide"><i class="fa-solid fa-plus"></i> New Slide</button>
              <button type="button" class="ppt-tool-btn" id="ppt_btn_dup_slide" title="Duplicate Current Slide"><i class="fa-regular fa-copy"></i> Duplicate</button>
              <button type="button" class="ppt-tool-btn" id="ppt_btn_move_up" title="Move Slide Up"><i class="fa-solid fa-arrow-up"></i></button>
              <button type="button" class="ppt-tool-btn" id="ppt_btn_move_down" title="Move Slide Down"><i class="fa-solid fa-arrow-down"></i></button>
              <button type="button" class="ppt-tool-btn text-danger" id="ppt_btn_del_slide" title="Delete Slide"><i class="fa-solid fa-trash-can"></i></button>
            </div>

            <div class="ppt-toolbar-group">
              <span class="ppt-group-label">Layout:</span>
              <select class="ppt-select" id="ppt_layout_select">
                <option value="title">Title Slide</option>
                <option value="bullets">Title &amp; Bullets</option>
                <option value="two_col">Two Column Comparison</option>
                <option value="three_col">Three Column Cards</option>
                <option value="quote">Quote / Axiom</option>
                <option value="code_diagram">Code / Formula Split</option>
                <option value="metric">Key Metric Card</option>
                <option value="blank">Blank Canvas</option>
              </select>
            </div>

            <div class="ppt-toolbar-group">
              <span class="ppt-group-label">Insert:</span>
              <button type="button" class="ppt-tool-btn" id="ppt_btn_insert_bullet" title="Add Bullet Point"><i class="fa-solid fa-list-ul"></i> + Bullet</button>
              <button type="button" class="ppt-tool-btn" id="ppt_btn_insert_image" title="Insert Slide Image"><i class="fa-solid fa-image"></i> Image</button>
            </div>

            <div class="ppt-toolbar-group">
              <span class="ppt-group-label">Theme:</span>
              <select class="ppt-select" id="ppt_theme_select">
                <option value="blue">Academic Blue</option>
                <option value="emerald">Emerald Science</option>
                <option value="crimson">Crimson Elegant</option>
                <option value="dark">Modern Slate</option>
              </select>
            </div>

            <div class="ppt-toolbar-group">
              <span class="ppt-group-label">Transition:</span>
              <select class="ppt-select" id="ppt_transition_select">
                <option value="fade">Fade</option>
                <option value="slide_left">Slide Left</option>
                <option value="zoom">Zoom In</option>
                <option value="flip">3D Flip</option>
              </select>
              <button type="button" class="ppt-tool-btn" id="ppt_btn_test_anim" title="Test Transition &amp; Animations"><i class="fa-solid fa-wand-magic-sparkles"></i> Play</button>
            </div>
          </div>

          <!-- Studio Workspace -->
          <div class="ppt-workspace">
            <!-- Left Thumbnails Panel -->
            <div class="ppt-thumbnails-rail" id="ppt_thumbnails_rail">
              <!-- Rendered via JS -->
            </div>

            <!-- Central Slide Stage with Dual Alignment Rulers -->
            <div class="ppt-stage-wrapper">
              <div class="ppt-stage-outer">
                <div class="ppt-ruler-top-row">
                  <div class="ppt-ruler-corner" title="Slide Ruler Scale (Inches)"><i class="fa-solid fa-ruler-combined"></i></div>
                  <div class="ppt-ruler-h" id="ppt_ruler_h"></div>
                </div>
                <div class="ppt-stage-main-row">
                  <div class="ppt-ruler-v" id="ppt_ruler_v"></div>
                  <div class="ppt-slide-canvas" id="ppt_slide_canvas" role="region" aria-label="Slide Canvas">
                    <!-- Active Slide Content + Floating Images Injected Here -->
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Slide Speaker Notes Bar -->
          <div class="ppt-notes-bar">
            <div class="ppt-notes-header">
              <i class="fa-regular fa-note-sticky"></i>
              <span>Presenter Speaker Notes (Editable):</span>
            </div>
            <div class="ppt-notes-editor" id="ppt_notes_editor" contenteditable="true" placeholder="Enter talking points for this slide..."></div>
          </div>

          <!-- Fullscreen Slide Show Overlay Modal -->
          <div class="ppt-show-modal" id="ppt_show_modal" style="display: none;">
            <div class="ppt-laser-pointer" id="ppt_laser_pointer"></div>
            <div class="ppt-show-canvas" id="ppt_show_canvas"></div>
            <div class="ppt-notes-show-drawer" id="ppt_notes_show_drawer" style="display: none;">
              <strong><i class="fa-regular fa-note-sticky"></i> Presenter Talking Points:</strong>
              <div id="ppt_show_notes_content" style="margin-top: 6px;"></div>
            </div>
            <div class="ppt-show-controls">
              <span class="ppt-show-timer" id="ppt_show_timer" title="Elapsed Presentation Time"><i class="fa-regular fa-clock"></i> 00:00</span>
              <button type="button" class="ppt-show-btn" id="ppt_show_prev" title="Previous Slide (Arrow Left)"><i class="fa-solid fa-chevron-left"></i></button>
              <span class="ppt-show-counter" id="ppt_show_counter">Slide 1 / 4</span>
              <button type="button" class="ppt-show-btn" id="ppt_show_next" title="Next Slide (Space / Arrow Right)"><i class="fa-solid fa-chevron-right"></i></button>
              <button type="button" class="ppt-show-btn" id="ppt_show_autoplay" title="Auto-Play Slides (5s)"><i class="fa-solid fa-play"></i> Auto</button>
              <button type="button" class="ppt-show-btn" id="ppt_show_laser" title="Toggle Laser Pointer"><i class="fa-solid fa-bullseye"></i> Laser</button>
              <button type="button" class="ppt-show-btn" id="ppt_show_notes_toggle" title="Toggle Presenter Notes"><i class="fa-regular fa-note-sticky"></i> Notes</button>
              <button type="button" class="ppt-show-btn ppt-show-close" id="ppt_show_close" title="Exit Show (Esc)"><i class="fa-solid fa-xmark"></i></button>
            </div>
          </div>

          <!-- Image Insertion Dialog Modal -->
          <div class="ppt-dialog-modal" id="ppt_image_modal" style="display: none;">
            <div class="ppt-dialog-content">
              <div class="ppt-dialog-header">
                <h3><i class="fa-solid fa-image"></i> Insert Image / Scientific Diagram</h3>
                <button type="button" class="wp-dialog-close" id="ppt_modal_close_btn" style="background: none; border: none; font-size: 1.25rem; cursor: pointer; color: var(--text-secondary);">&times;</button>
              </div>
              <div class="ppt-dialog-body">
                <div class="wp-modal-tabs" style="display: flex; gap: 8px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 8px;">
                  <button type="button" class="wp-tab-btn active" id="ppt_tab_device" style="padding: 5px 12px; font-size: 0.82rem; border-radius: 4px; border: 1px solid #38bdf8; background: rgba(56,189,248,0.12); color: #38bdf8; cursor: pointer; font-weight: 600;"><i class="fa-solid fa-folder-open"></i> From Device / Gallery</button>
                  <button type="button" class="wp-tab-btn" id="ppt_tab_web" style="padding: 5px 12px; font-size: 0.82rem; border-radius: 4px; border: 1px solid var(--border-medium); background: transparent; color: var(--text-secondary); cursor: pointer;"><i class="fa-solid fa-globe"></i> Web URL / Physics Samples</button>
                </div>

                <!-- Device upload tab -->
                <div id="ppt_panel_device">
                  <div class="wp-upload-dropzone" id="ppt_upload_dropzone">
                    <i class="fa-solid fa-cloud-arrow-up" style="font-size: 2rem; color: #38bdf8; margin-bottom: 6px;"></i>
                    <p style="margin: 0; font-size: 0.9rem; font-weight: 600;">Click or Drag &amp; Drop Image Here</p>
                    <span style="font-size: 0.75rem; color: var(--text-muted);">Supports PNG, JPG, JPEG, SVG, WebP from Phone / PC</span>
                    <input type="file" id="ppt_modal_file_input" accept="image/*" style="display: none;">
                    <img id="ppt_modal_preview" class="wp-upload-preview" alt="Preview">
                  </div>
                </div>

                <!-- Web URL tab -->
                <div id="ppt_panel_web" style="display: none;">
                  <label style="font-size: 0.82rem; font-weight: 600; display: block; margin-bottom: 4px;">Image Web URL:</label>
                  <input type="text" class="wp-fr-input" id="ppt_modal_url_input" placeholder="https://images.unsplash.com/..." style="width: 100%; box-sizing: border-box; padding: 0.45rem 0.6rem; border: 1px solid var(--border-medium); border-radius: 4px; background: var(--bg-surface); color: var(--text-primary); font-size: 0.85rem;">
                  <div style="margin-top: 10px;">
                    <span style="font-size: 0.75rem; color: var(--text-muted); display: block; margin-bottom: 4px;">Physics Sample Diagrams:</span>
                    <div class="wp-sample-pills">
                      <span class="wp-sample-pill ppt-sample-pill" data-url="https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=600&auto=format&fit=crop&q=80">🔬 Laser Diffraction</span>
                      <span class="wp-sample-pill ppt-sample-pill" data-url="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&auto=format&fit=crop&q=80">🧪 Optics Bench</span>
                      <span class="wp-sample-pill ppt-sample-pill" data-url="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&auto=format&fit=crop&q=80">⚡ Semiconductor Bandgap</span>
                      <span class="wp-sample-pill ppt-sample-pill" data-url="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80">⚛️ Microchip Architecture</span>
                    </div>
                  </div>
                </div>

                <!-- Initial Placement Options -->
                <div>
                  <label style="font-size: 0.82rem; font-weight: 600; display: block; margin-bottom: 4px;">Initial Slide Placement:</label>
                  <select id="ppt_modal_placement" style="width: 100%; padding: 0.45rem 0.6rem; border-radius: 4px; border: 1px solid var(--border-medium); background: var(--bg-surface); color: var(--text-primary); font-size: 0.85rem;">
                    <option value="passport">📷 Top-Right Passport / Badge (Docked Over Text)</option>
                    <option value="center">■ Center Floating (Freely Draggable)</option>
                    <option value="bottom_right">↘ Bottom-Right Corner</option>
                  </select>
                </div>
              </div>
              <div class="ppt-dialog-footer">
                <button type="button" class="btn-tool-action" id="ppt_modal_cancel_btn">Cancel</button>
                <button type="button" class="btn-tool-action btn-primary-accent" id="ppt_modal_insert_btn"><i class="fa-solid fa-check"></i> Insert into Slide</button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    bindEvents() {
      // Preset Selection
      const presetSelect = this.container.querySelector('#ppt_deck_preset');
      if (presetSelect) {
        presetSelect.addEventListener('change', () => {
          this.deckKey = presetSelect.value;
          this.slides = JSON.parse(JSON.stringify(SAMPLE_DECKS[this.deckKey] || SAMPLE_DECKS.physics));
          this.currentIdx = 0;
          this.updateSlideView();
        });
      }

      // Add Slide
      const addBtn = this.container.querySelector('#ppt_btn_add_slide');
      if (addBtn) {
        addBtn.addEventListener('click', () => {
          this.slides.splice(this.currentIdx + 1, 0, {
            layout: 'bullets',
            title: 'New Slide Title',
            subtitle: 'Slide Subtitle or Description',
            items: ['First key research finding.', 'Second experimental observation.', 'Third conclusion.'],
            notes: 'Enter presenter notes here.'
          });
          this.currentIdx++;
          this.updateSlideView();
        });
      }

      // Duplicate Slide
      const dupBtn = this.container.querySelector('#ppt_btn_dup_slide');
      if (dupBtn) {
        dupBtn.addEventListener('click', () => {
          const clone = JSON.parse(JSON.stringify(this.slides[this.currentIdx]));
          this.slides.splice(this.currentIdx + 1, 0, clone);
          this.currentIdx++;
          this.updateSlideView();
        });
      }

      // Move Slide Up
      const moveUpBtn = this.container.querySelector('#ppt_btn_move_up');
      if (moveUpBtn) {
        moveUpBtn.addEventListener('click', () => {
          this.moveSlideUp(this.currentIdx);
        });
      }

      // Move Slide Down
      const moveDownBtn = this.container.querySelector('#ppt_btn_move_down');
      if (moveDownBtn) {
        moveDownBtn.addEventListener('click', () => {
          this.moveSlideDown(this.currentIdx);
        });
      }

      // Delete Slide
      const delBtn = this.container.querySelector('#ppt_btn_del_slide');
      if (delBtn) {
        delBtn.addEventListener('click', () => {
          if (this.slides.length <= 1) {
            alert('A presentation deck must have at least one slide.');
            return;
          }
          this.slides.splice(this.currentIdx, 1);
          if (this.currentIdx >= this.slides.length) this.currentIdx = this.slides.length - 1;
          this.updateSlideView();
        });
      }

      // Insert Bullet Item
      const insertBulletBtn = this.container.querySelector('#ppt_btn_insert_bullet');
      if (insertBulletBtn) {
        insertBulletBtn.addEventListener('click', () => {
          this.insertBulletItem();
        });
      }

      // Insert Slide Image
      const insertImageBtn = this.container.querySelector('#ppt_btn_insert_image');
      if (insertImageBtn) {
        insertImageBtn.addEventListener('click', () => {
          this.openImageModal();
        });
      }

      // Export HTML Deck
      const exportHtmlBtn = this.container.querySelector('#ppt_btn_export_html');
      if (exportHtmlBtn) {
        exportHtmlBtn.addEventListener('click', () => {
          this.exportToHtmlDeck();
        });
      }

      // Export Handouts
      const exportHandoutsBtn = this.container.querySelector('#ppt_btn_export_handouts');
      if (exportHandoutsBtn) {
        exportHandoutsBtn.addEventListener('click', () => {
          this.exportHandouts();
        });
      }

      // Export JSON
      const exportJsonBtn = this.container.querySelector('#ppt_btn_export_json');
      if (exportJsonBtn) {
        exportJsonBtn.addEventListener('click', () => {
          this.exportToJson();
        });
      }

      // Layout Switcher
      const layoutSelect = this.container.querySelector('#ppt_layout_select');
      if (layoutSelect) {
        layoutSelect.addEventListener('change', () => {
          const s = this.slides[this.currentIdx];
          s.layout = layoutSelect.value;
          if (s.layout === 'bullets' && !s.items) {
            s.items = ['Point one explanation.', 'Point two explanation.'];
          }
          if (s.layout === 'two_col' && !s.col1Title) {
            s.col1Title = 'Comparison Factor A';
            s.col1Text = 'Description for factor A.';
            s.col2Title = 'Comparison Factor B';
            s.col2Text = 'Description for factor B.';
          }
          if (s.layout === 'three_col' && !s.col1Title) {
            s.col1Title = 'Card One';
            s.col1Text = 'Key details for component 1.';
            s.col2Title = 'Card Two';
            s.col2Text = 'Key details for component 2.';
            s.col3Title = 'Card Three';
            s.col3Text = 'Key details for component 3.';
          }
          if (s.layout === 'quote' && !s.quoteText) {
            s.quoteText = 'Science is the poetry of reality.';
            s.author = 'Richard Dawkins';
          }
          if (s.layout === 'code_diagram' && !s.code) {
            s.col1Title = 'Expression Architecture';
            s.col1Text = 'Conditional formula testing logic.';
            s.code = '// Sample formula or code\n=IF(Score >= 75, "Distinction", "Pass")';
          }
          if (s.layout === 'metric' && !s.metricVal) {
            s.metricVal = '99.4%';
            s.metricLabel = 'Efficiency Index';
            s.description = 'Key observation metrics recorded during the laboratory test.';
          }
          if (s.layout === 'blank' && !s.customContent) {
            s.customContent = '<p>Design your custom slide content freely here...</p>';
          }
          this.updateSlideView();
        });
      }

      // Theme Switcher
      const themeSelect = this.container.querySelector('#ppt_theme_select');
      if (themeSelect) {
        themeSelect.addEventListener('change', () => {
          this.currentTheme = themeSelect.value;
          this.updateSlideView();
        });
      }

      // Transition Switcher
      const transSelect = this.container.querySelector('#ppt_transition_select');
      if (transSelect) {
        transSelect.addEventListener('change', () => {
          this.currentTransition = transSelect.value;
        });
      }

      // Test Animation
      const testBtn = this.container.querySelector('#ppt_btn_test_anim');
      if (testBtn) {
        testBtn.addEventListener('click', () => {
          this.playTransitionEffect(this.container.querySelector('#ppt_slide_canvas'));
        });
      }

      // Notes Editor
      const notesEditor = this.container.querySelector('#ppt_notes_editor');
      if (notesEditor) {
        notesEditor.addEventListener('input', () => {
          this.slides[this.currentIdx].notes = notesEditor.innerText;
        });
      }

      // Slide Show Controls
      const startShowBtn = this.container.querySelector('#ppt_btn_start_show');
      const showModal = this.container.querySelector('#ppt_show_modal');
      const closeShowBtn = this.container.querySelector('#ppt_show_close');
      const nextShowBtn = this.container.querySelector('#ppt_show_next');
      const prevShowBtn = this.container.querySelector('#ppt_show_prev');
      const laserBtn = this.container.querySelector('#ppt_show_laser');
      const autoBtn = this.container.querySelector('#ppt_show_autoplay');
      const notesToggleBtn = this.container.querySelector('#ppt_show_notes_toggle');

      if (startShowBtn && showModal) {
        startShowBtn.addEventListener('click', () => {
          this.isSlideShowActive = true;
          showModal.style.display = 'flex';
          this.startShowTimer();
          this.renderShowSlide();
        });
      }

      if (closeShowBtn && showModal) {
        closeShowBtn.addEventListener('click', () => {
          this.exitSlideShow();
        });
      }

      if (nextShowBtn) {
        nextShowBtn.addEventListener('click', () => {
          if (this.currentIdx < this.slides.length - 1) {
            this.currentIdx++;
            this.renderShowSlide();
            this.updateSlideView();
          }
        });
      }

      if (prevShowBtn) {
        prevShowBtn.addEventListener('click', () => {
          if (this.currentIdx > 0) {
            this.currentIdx--;
            this.renderShowSlide();
            this.updateSlideView();
          }
        });
      }

      if (laserBtn) {
        laserBtn.addEventListener('click', () => {
          this.toggleLaserPointer();
        });
      }

      if (autoBtn) {
        autoBtn.addEventListener('click', () => {
          this.toggleAutoplay();
        });
      }

      if (notesToggleBtn) {
        notesToggleBtn.addEventListener('click', () => {
          this.toggleShowNotes();
        });
      }

      // Track mouse in Slide Show for laser pointer
      if (showModal) {
        showModal.addEventListener('mousemove', (e) => {
          if (this.isLaserActive) {
            const laser = this.container.querySelector('#ppt_laser_pointer');
            if (laser) {
              laser.style.left = `${e.clientX}px`;
              laser.style.top = `${e.clientY}px`;
            }
          }
        });
      }

      // Keyboard navigation for Slide Show
      window.addEventListener('keydown', (e) => {
        if (!this.isSlideShowActive) return;
        if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
          e.preventDefault();
          if (this.currentIdx < this.slides.length - 1) {
            this.currentIdx++;
            this.renderShowSlide();
            this.updateSlideView();
          }
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
          e.preventDefault();
          if (this.currentIdx > 0) {
            this.currentIdx--;
            this.renderShowSlide();
            this.updateSlideView();
          }
        } else if (e.key === 'Escape') {
          e.preventDefault();
          this.exitSlideShow();
        } else if (e.key.toLowerCase() === 'l') {
          this.toggleLaserPointer();
        } else if (e.key.toLowerCase() === 'n') {
          this.toggleShowNotes();
        }
      });
    }

    exitSlideShow() {
      this.isSlideShowActive = false;
      const showModal = this.container.querySelector('#ppt_show_modal');
      if (showModal) showModal.style.display = 'none';
      this.stopShowTimer();
      if (this.isAutoplayActive) this.toggleAutoplay();
      if (this.isLaserActive) this.toggleLaserPointer();
      if (this.isShowNotesActive) this.toggleShowNotes();
    }

    startShowTimer() {
      this.timerSeconds = 0;
      const timerEl = this.container.querySelector('#ppt_show_timer');
      if (this.timerInterval) clearInterval(this.timerInterval);
      this.timerInterval = setInterval(() => {
        this.timerSeconds++;
        const mins = String(Math.floor(this.timerSeconds / 60)).padStart(2, '0');
        const secs = String(this.timerSeconds % 60).padStart(2, '0');
        if (timerEl) timerEl.innerHTML = `<i class="fa-regular fa-clock"></i> ${mins}:${secs}`;
      }, 1000);
    }

    stopShowTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    }

    toggleLaserPointer() {
      this.isLaserActive = !this.isLaserActive;
      const laserEl = this.container.querySelector('#ppt_laser_pointer');
      const laserBtn = this.container.querySelector('#ppt_show_laser');
      if (laserBtn) laserBtn.classList.toggle('active', this.isLaserActive);
      if (laserEl) laserEl.style.display = this.isLaserActive ? 'block' : 'none';
    }

    toggleAutoplay() {
      this.isAutoplayActive = !this.isAutoplayActive;
      const autoBtn = this.container.querySelector('#ppt_show_autoplay');
      if (this.isAutoplayActive) {
        if (autoBtn) autoBtn.innerHTML = '<i class="fa-solid fa-pause"></i> Pause';
        this.autoplayInterval = setInterval(() => {
          if (this.currentIdx < this.slides.length - 1) {
            this.currentIdx++;
          } else {
            this.currentIdx = 0;
          }
          this.renderShowSlide();
          this.updateSlideView();
        }, 5000);
      } else {
        if (autoBtn) autoBtn.innerHTML = '<i class="fa-solid fa-play"></i> Auto';
        if (this.autoplayInterval) {
          clearInterval(this.autoplayInterval);
          this.autoplayInterval = null;
        }
      }
    }

    toggleShowNotes() {
      this.isShowNotesActive = !this.isShowNotesActive;
      const drawer = this.container.querySelector('#ppt_notes_show_drawer');
      const notesBtn = this.container.querySelector('#ppt_show_notes_toggle');
      if (notesBtn) notesBtn.classList.toggle('active', this.isShowNotesActive);
      if (drawer) {
        drawer.style.display = this.isShowNotesActive ? 'block' : 'none';
        const notesContent = this.container.querySelector('#ppt_show_notes_content');
        if (notesContent) {
          notesContent.innerText = this.slides[this.currentIdx].notes || 'No presenter notes for this slide.';
        }
      }

      // Bind Insert Image Modal (Gallery / Camera / Web URL)
      this.bindImageModal();
    }

    moveSlideUp(idx) {
      if (idx <= 0) return;
      const temp = this.slides[idx];
      this.slides[idx] = this.slides[idx - 1];
      this.slides[idx - 1] = temp;
      this.currentIdx = idx - 1;
      this.updateSlideView();
    }

    moveSlideDown(idx) {
      if (idx >= this.slides.length - 1) return;
      const temp = this.slides[idx];
      this.slides[idx] = this.slides[idx + 1];
      this.slides[idx + 1] = temp;
      this.currentIdx = idx + 1;
      this.updateSlideView();
    }

    insertBulletItem() {
      const s = this.slides[this.currentIdx];
      if (!s.items) s.items = [];
      const text = prompt('Enter text for new bullet point:', 'New experimental finding or concept point.');
      if (text) {
        s.items.push(text);
        if (s.layout !== 'bullets') s.layout = 'bullets';
        this.updateSlideView();
      }
    }

    openImageModal() {
      const modal = this.container.querySelector('#ppt_image_modal');
      if (modal) {
        modal.style.display = 'flex';
      }
    }

    bindImageModal() {
      const modal = this.container.querySelector('#ppt_image_modal');
      const closeBtn = this.container.querySelector('#ppt_modal_close_btn');
      const cancelBtn = this.container.querySelector('#ppt_modal_cancel_btn');
      const insertBtn = this.container.querySelector('#ppt_modal_insert_btn');
      const tabDevice = this.container.querySelector('#ppt_tab_device');
      const tabWeb = this.container.querySelector('#ppt_tab_web');
      const panelDevice = this.container.querySelector('#ppt_panel_device');
      const panelWeb = this.container.querySelector('#ppt_panel_web');
      const dropzone = this.container.querySelector('#ppt_upload_dropzone');
      const fileInput = this.container.querySelector('#ppt_modal_file_input');
      const preview = this.container.querySelector('#ppt_modal_preview');
      const urlInput = this.container.querySelector('#ppt_modal_url_input');
      const placementSelect = this.container.querySelector('#ppt_modal_placement');

      const closeModal = () => {
        if (modal) modal.style.display = 'none';
        this.pendingImageSrc = null;
        if (preview) { preview.src = ''; preview.style.display = 'none'; }
        if (urlInput) urlInput.value = '';
        if (fileInput) fileInput.value = '';
      };

      if (closeBtn) closeBtn.addEventListener('click', closeModal);
      if (cancelBtn) cancelBtn.addEventListener('click', closeModal);

      // Tabs
      if (tabDevice && tabWeb) {
        tabDevice.addEventListener('click', () => {
          tabDevice.classList.add('active');
          tabDevice.style.borderColor = '#38bdf8';
          tabDevice.style.background = 'rgba(56,189,248,0.12)';
          tabDevice.style.color = '#38bdf8';
          tabWeb.classList.remove('active');
          tabWeb.style.borderColor = 'var(--border-medium)';
          tabWeb.style.background = 'transparent';
          tabWeb.style.color = 'var(--text-secondary)';
          if (panelDevice) panelDevice.style.display = 'block';
          if (panelWeb) panelWeb.style.display = 'none';
        });

        tabWeb.addEventListener('click', () => {
          tabWeb.classList.add('active');
          tabWeb.style.borderColor = '#38bdf8';
          tabWeb.style.background = 'rgba(56,189,248,0.12)';
          tabWeb.style.color = '#38bdf8';
          tabDevice.classList.remove('active');
          tabDevice.style.borderColor = 'var(--border-medium)';
          tabDevice.style.background = 'transparent';
          tabDevice.style.color = 'var(--text-secondary)';
          if (panelWeb) panelWeb.style.display = 'block';
          if (panelDevice) panelDevice.style.display = 'none';
        });
      }

      // Dropzone & File Input
      const handleFile = (file) => {
        if (!file.type.startsWith('image/')) {
          alert('Please select a valid image file (PNG, JPG, SVG, WebP).');
          return;
        }
        const reader = new FileReader();
        reader.onload = (e) => {
          this.pendingImageSrc = e.target.result;
          if (preview) {
            preview.src = this.pendingImageSrc;
            preview.style.display = 'block';
          }
        };
        reader.readAsDataURL(file);
      };

      if (dropzone && fileInput) {
        dropzone.addEventListener('click', () => fileInput.click());
        dropzone.addEventListener('dragover', (e) => {
          e.preventDefault();
          dropzone.style.background = 'rgba(56, 189, 248, 0.15)';
        });
        dropzone.addEventListener('dragleave', () => {
          dropzone.style.background = '';
        });
        dropzone.addEventListener('drop', (e) => {
          e.preventDefault();
          dropzone.style.background = '';
          if (e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFile(e.dataTransfer.files[0]);
          }
        });
        fileInput.addEventListener('change', () => {
          if (fileInput.files && fileInput.files[0]) {
            handleFile(fileInput.files[0]);
          }
        });
      }

      // Sample Pills
      this.container.querySelectorAll('.ppt-sample-pill').forEach(pill => {
        pill.addEventListener('click', () => {
          const url = pill.getAttribute('data-url');
          if (urlInput) urlInput.value = url;
          this.pendingImageSrc = url;
          if (preview) {
            preview.src = url;
            preview.style.display = 'block';
          }
        });
      });

      // Insert Action
      if (insertBtn) {
        insertBtn.addEventListener('click', () => {
          const src = this.pendingImageSrc || (urlInput ? urlInput.value.trim() : '');
          if (!src) {
            alert('Please select an image from your device or choose/enter an image URL.');
            return;
          }
          const placement = placementSelect ? placementSelect.value : 'passport';
          this.insertSlideImage(src, placement);
          closeModal();
        });
      }
    }

    insertSlideImage(src, placement = 'passport') {
      const s = this.slides[this.currentIdx];
      if (!s.images) s.images = [];

      const imgId = 'ppt_img_' + Date.now();
      let imgObj;

      if (placement === 'passport') {
        imgObj = {
          id: imgId,
          src: src,
          isPassport: true,
          left: 'auto',
          right: '20px',
          top: '20px',
          bottom: 'auto',
          width: '115px'
        };
      } else if (placement === 'bottom_right') {
        imgObj = {
          id: imgId,
          src: src,
          isPassport: false,
          left: 'auto',
          right: '24px',
          top: 'auto',
          bottom: '24px',
          width: '200px'
        };
      } else {
        // Center floating
        imgObj = {
          id: imgId,
          src: src,
          isPassport: false,
          left: '35%',
          top: '30%',
          right: 'auto',
          bottom: 'auto',
          width: '220px'
        };
      }

      s.images.push(imgObj);
      this.renderActiveSlide();
    }

    renderPresentationRulers() {
      const rulerH = this.container.querySelector('#ppt_ruler_h');
      const rulerV = this.container.querySelector('#ppt_ruler_v');
      if (!rulerH || !rulerV) return;

      // Horizontal: 0 to 10 inches
      let htmlH = '';
      for (let i = 0; i <= 10; i++) {
        const leftPct = (i / 10) * 100;
        htmlH += `
          <div class="ppt-ruler-tick-h" style="left: ${leftPct}%; height: 10px;"></div>
          <div class="ppt-ruler-num-h" style="left: ${leftPct}%;">${i}"</div>
        `;
        if (i < 10) {
          htmlH += `<div class="ppt-ruler-tick-h" style="left: ${leftPct + 5}%; height: 5px; opacity: 0.5;"></div>`;
        }
      }
      rulerH.innerHTML = htmlH;

      // Vertical: 0 to 6 inches
      let htmlV = '';
      for (let i = 0; i <= 6; i++) {
        const topPct = (i / 6) * 100;
        htmlV += `
          <div class="ppt-ruler-tick-v" style="top: ${topPct}%; width: 10px;"></div>
          <div class="ppt-ruler-num-v" style="top: ${topPct}%;">${i}"</div>
        `;
        if (i < 6) {
          htmlV += `<div class="ppt-ruler-tick-v" style="top: ${topPct + (100 / 12)}%; width: 5px; opacity: 0.5;"></div>`;
        }
      }
      rulerV.innerHTML = htmlV;
    }

    renderActiveSlide() {
      const canvas = this.container.querySelector('#ppt_slide_canvas');
      if (!canvas) return;

      const s = this.slides[this.currentIdx];
      const th = THEMES[this.currentTheme] || THEMES.blue;

      canvas.style.background = th.bg;
      canvas.style.color = th.textColor;

      canvas.innerHTML = this.buildSlideHtml(s, th, true);
      this.bindEditableElements(canvas, s);

      // Render floating draggable images
      if (s.images && s.images.length) {
        s.images.forEach(imgData => {
          const imgEl = this.createSlideImageElement(imgData, s);
          canvas.appendChild(imgEl);
        });
      }

      // Deselect images when clicking anywhere on empty canvas
      canvas.addEventListener('click', (e) => {
        if (!e.target.closest('.ppt-slide-img-container')) {
          this.container.querySelectorAll('.ppt-slide-img-container').forEach(c => c.classList.remove('active-selected'));
        }
      });

      // Update rulers
      this.renderPresentationRulers();

      // Notes
      const notesEl = this.container.querySelector('#ppt_notes_editor');
      if (notesEl) {
        notesEl.innerText = s.notes || '';
      }
    }

    createSlideImageElement(imgData, s) {
      const container = document.createElement('div');
      container.className = 'ppt-slide-img-container' + (imgData.isPassport ? ' ppt-image-passport' : '');
      container.dataset.imgId = imgData.id;
      container.style.position = 'absolute';
      container.style.width = imgData.width || '200px';
      if (imgData.isPassport) {
        container.style.left = 'auto';
        container.style.right = imgData.right || '20px';
        container.style.top = imgData.top || '20px';
        container.style.bottom = 'auto';
      } else {
        if (imgData.left) container.style.left = imgData.left;
        if (imgData.top) container.style.top = imgData.top;
        if (imgData.right) container.style.right = imgData.right;
        if (imgData.bottom) container.style.bottom = imgData.bottom;
      }

      // Floating toolbar
      const toolbar = document.createElement('div');
      toolbar.className = 'ppt-image-floating-bar';
      toolbar.innerHTML = `
        <button type="button" class="ppt-img-tool-btn" data-act="passport" title="Dock as Passport Photo / Badge (Top-Right)"><i class="fa-solid fa-id-badge"></i> Passport</button>
        <button type="button" class="ppt-img-tool-btn" data-act="float" title="Unlock Free Float"><i class="fa-regular fa-square"></i> Float</button>
        <button type="button" class="ppt-img-tool-btn" data-act="size" data-val="140px" title="Small (140px)">25%</button>
        <button type="button" class="ppt-img-tool-btn" data-act="size" data-val="240px" title="Medium (240px)">50%</button>
        <button type="button" class="ppt-img-tool-btn" data-act="size" data-val="360px" title="Large (360px)">75%</button>
        <button type="button" class="ppt-img-tool-btn" data-act="center" title="Center on Slide"><i class="fa-solid fa-align-center"></i></button>
        <button type="button" class="ppt-img-tool-btn btn-danger" data-act="delete" title="Delete Image"><i class="fa-solid fa-trash-can"></i></button>
      `;
      container.appendChild(toolbar);

      // Image element
      const img = document.createElement('img');
      img.src = imgData.src;
      img.className = 'ppt-slide-img';
      img.alt = 'Slide Graphic';
      img.draggable = false;
      container.appendChild(img);

      // Corner resize handle
      const resizeHandle = document.createElement('div');
      resizeHandle.className = 'ppt-img-resize-handle';
      container.appendChild(resizeHandle);

      // Selection toggle
      container.addEventListener('click', (e) => {
        e.stopPropagation();
        this.container.querySelectorAll('.ppt-slide-img-container').forEach(c => c.classList.remove('active-selected'));
        container.classList.add('active-selected');
      });

      // Toolbar actions
      toolbar.querySelectorAll('.ppt-img-tool-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const act = btn.getAttribute('data-act');
          if (act === 'delete') {
            s.images = (s.images || []).filter(im => im.id !== imgData.id);
            container.remove();
          } else if (act === 'passport') {
            imgData.isPassport = true;
            imgData.left = 'auto';
            imgData.right = '20px';
            imgData.top = '20px';
            imgData.bottom = 'auto';
            imgData.width = '115px';
            container.classList.add('ppt-image-passport');
            container.style.left = 'auto';
            container.style.right = '20px';
            container.style.top = '20px';
            container.style.bottom = 'auto';
            container.style.width = '115px';
          } else if (act === 'float') {
            imgData.isPassport = false;
            container.classList.remove('ppt-image-passport');
            const rect = container.getBoundingClientRect();
            const canvasRect = this.container.querySelector('#ppt_slide_canvas').getBoundingClientRect();
            imgData.left = Math.round(rect.left - canvasRect.left) + 'px';
            imgData.top = Math.round(rect.top - canvasRect.top) + 'px';
            imgData.right = 'auto';
            imgData.bottom = 'auto';
            container.style.left = imgData.left;
            container.style.top = imgData.top;
            container.style.right = 'auto';
            container.style.bottom = 'auto';
          } else if (act === 'size') {
            const val = btn.getAttribute('data-val');
            imgData.width = val;
            container.style.width = val;
          } else if (act === 'center') {
            imgData.isPassport = false;
            container.classList.remove('ppt-image-passport');
            const canvas = this.container.querySelector('#ppt_slide_canvas');
            const cW = canvas.clientWidth;
            const cH = canvas.clientHeight;
            const iW = container.offsetWidth || 220;
            const iH = container.offsetHeight || 160;
            imgData.left = Math.max(10, Math.round((cW - iW) / 2)) + 'px';
            imgData.top = Math.max(10, Math.round((cH - iH) / 2)) + 'px';
            imgData.right = 'auto';
            imgData.bottom = 'auto';
            container.style.left = imgData.left;
            container.style.top = imgData.top;
            container.style.right = 'auto';
            container.style.bottom = 'auto';
          }
        });
      });

      // Mouse & Touch Dragging over slide canvas elements
      let isDragging = false;
      let startX = 0, startY = 0;
      let initLeft = 0, initTop = 0;

      const onDragStart = (clientX, clientY, e) => {
        if (e.target.closest('.ppt-img-tool-btn') || e.target.classList.contains('ppt-img-resize-handle')) return;
        isDragging = true;
        startX = clientX;
        startY = clientY;
        const canvas = this.container.querySelector('#ppt_slide_canvas');
        const canvasRect = canvas.getBoundingClientRect();
        const contRect = container.getBoundingClientRect();
        initLeft = contRect.left - canvasRect.left;
        initTop = contRect.top - canvasRect.top;
        this.container.querySelectorAll('.ppt-slide-img-container').forEach(c => c.classList.remove('active-selected'));
        container.classList.add('active-selected');
        e.preventDefault();
      };

      const onDragMove = (clientX, clientY) => {
        if (!isDragging) return;
        const canvas = this.container.querySelector('#ppt_slide_canvas');
        const canvasRect = canvas.getBoundingClientRect();
        const dx = clientX - startX;
        const dy = clientY - startY;

        let newLeft = initLeft + dx;
        let newTop = initTop + dy;

        const maxLeft = canvasRect.width - (container.offsetWidth || 50);
        const maxTop = canvasRect.height - (container.offsetHeight || 50);
        newLeft = Math.max(0, Math.min(newLeft, maxLeft));
        newTop = Math.max(0, Math.min(newTop, maxTop));

        container.classList.remove('ppt-image-passport');
        imgData.isPassport = false;
        imgData.left = Math.round(newLeft) + 'px';
        imgData.top = Math.round(newTop) + 'px';
        imgData.right = 'auto';
        imgData.bottom = 'auto';

        container.style.left = imgData.left;
        container.style.top = imgData.top;
        container.style.right = 'auto';
        container.style.bottom = 'auto';
      };

      const onDragEnd = () => {
        if (!isDragging) return;
        isDragging = false;
      };

      container.addEventListener('mousedown', (e) => onDragStart(e.clientX, e.clientY, e));
      window.addEventListener('mousemove', (e) => onDragMove(e.clientX, e.clientY));
      window.addEventListener('mouseup', onDragEnd);

      container.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches[0]) onDragStart(e.touches[0].clientX, e.touches[0].clientY, e);
      }, { passive: false });
      window.addEventListener('touchmove', (e) => {
        if (e.touches && e.touches[0]) onDragMove(e.touches[0].clientX, e.touches[0].clientY);
      });
      window.addEventListener('touchend', onDragEnd);

      // Resize Handle Drag
      let isResizing = false;
      let startW = 0, startRX = 0;

      const onResizeStart = (clientX, e) => {
        e.stopPropagation();
        e.preventDefault();
        isResizing = true;
        startRX = clientX;
        startW = container.offsetWidth;
      };

      const onResizeMove = (clientX) => {
        if (!isResizing) return;
        const dw = clientX - startRX;
        const newW = Math.max(60, Math.min(startW + dw, 650));
        container.style.width = newW + 'px';
        imgData.width = newW + 'px';
        if (imgData.isPassport) {
          container.classList.remove('ppt-image-passport');
          imgData.isPassport = false;
        }
      };

      const onResizeEnd = () => {
        if (!isResizing) return;
        isResizing = false;
      };

      resizeHandle.addEventListener('mousedown', (e) => onResizeStart(e.clientX, e));
      window.addEventListener('mousemove', (e) => onResizeMove(e.clientX));
      window.addEventListener('mouseup', onResizeEnd);

      resizeHandle.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches[0]) onResizeStart(e.touches[0].clientX, e);
      }, { passive: false });
      window.addEventListener('touchmove', (e) => {
        if (e.touches && e.touches[0]) onResizeMove(e.touches[0].clientX);
      });
      window.addEventListener('touchend', onResizeEnd);

      return container;
    }

    renderShowSlide() {
      const canvas = this.container.querySelector('#ppt_show_canvas');
      const counter = this.container.querySelector('#ppt_show_counter');
      if (!canvas) return;

      const s = this.slides[this.currentIdx];
      const th = THEMES[this.currentTheme] || THEMES.blue;

      canvas.style.background = th.bg;
      canvas.style.color = th.textColor;
      canvas.style.position = 'relative';
      canvas.innerHTML = this.buildSlideHtml(s, th, false);

      // Render floating images in show mode
      if (s.images && s.images.length) {
        s.images.forEach(img => {
          const imgDiv = document.createElement('div');
          imgDiv.className = 'ppt-slide-img-container' + (img.isPassport ? ' ppt-image-passport' : '');
          imgDiv.style.position = 'absolute';
          imgDiv.style.pointerEvents = 'none';
          imgDiv.style.zIndex = '30';
          imgDiv.style.width = img.width || '200px';
          if (img.isPassport) {
            imgDiv.style.left = 'auto';
            imgDiv.style.right = img.right || '20px';
            imgDiv.style.top = img.top || '20px';
            imgDiv.style.bottom = 'auto';
          } else {
            if (img.left) imgDiv.style.left = img.left;
            if (img.top) imgDiv.style.top = img.top;
            if (img.right) imgDiv.style.right = img.right;
            if (img.bottom) imgDiv.style.bottom = img.bottom;
          }
          imgDiv.innerHTML = `<img src="${img.src}" class="ppt-slide-img" alt="Slide Visual" />`;
          canvas.appendChild(imgDiv);
        });
      }

      this.playTransitionEffect(canvas);

      if (counter) {
        counter.textContent = `Slide ${this.currentIdx + 1} / ${this.slides.length}`;
      }

      // Update speaker notes drawer in show mode if open
      const notesContent = this.container.querySelector('#ppt_show_notes_content');
      if (notesContent) {
        notesContent.innerText = s.notes || 'No presenter notes for this slide.';
      }
    }

    buildSlideHtml(s, th, isEditable) {
      const edAttr = isEditable ? 'contenteditable="true"' : '';

      if (s.layout === 'title') {
        return `
          <div class="ppt-slide-layout-title">
            <div class="ppt-title-badge"><i class="fa-solid fa-atom"></i> Academic Lecture Deck</div>
            <h1 class="ppt-slide-h1" style="color: ${th.titleColor};" ${edAttr} data-field="title">${s.title}</h1>
            <p class="ppt-slide-subtitle" style="color: ${th.accentColor};" ${edAttr} data-field="subtitle">${s.subtitle || ''}</p>
            <div class="ppt-slide-meta" ${edAttr} data-field="meta">${s.meta || ''}</div>
          </div>
        `;
      }

      if (s.layout === 'two_col') {
        return `
          <div class="ppt-slide-layout-standard">
            <h2 class="ppt-slide-h2" style="color: ${th.titleColor};" ${edAttr} data-field="title">${s.title}</h2>
            <div class="ppt-two-col-grid">
              <div class="ppt-col-card" style="background: ${th.cardBg}; border: 1px solid rgba(255,255,255,0.15);">
                <h3 style="color: ${th.accentColor};" ${edAttr} data-field="col1Title">${s.col1Title || 'Column 1'}</h3>
                <p ${edAttr} data-field="col1Text">${s.col1Text || ''}</p>
              </div>
              <div class="ppt-col-card" style="background: ${th.cardBg}; border: 1px solid rgba(255,255,255,0.15);">
                <h3 style="color: ${th.accentColor};" ${edAttr} data-field="col2Title">${s.col2Title || 'Column 2'}</h3>
                <p ${edAttr} data-field="col2Text">${s.col2Text || ''}</p>
              </div>
            </div>
          </div>
        `;
      }

      if (s.layout === 'three_col') {
        return `
          <div class="ppt-slide-layout-standard">
            <h2 class="ppt-slide-h2" style="color: ${th.titleColor};" ${edAttr} data-field="title">${s.title}</h2>
            <p class="ppt-slide-subhead" style="color: ${th.accentColor};" ${edAttr} data-field="subtitle">${s.subtitle || ''}</p>
            <div class="ppt-three-col-grid">
              <div class="ppt-col-card" style="background: ${th.cardBg}; border: 1px solid rgba(255,255,255,0.15);">
                <h3 style="color: ${th.accentColor}; font-size: 1.05rem; margin-top: 0;" ${edAttr} data-field="col1Title">${s.col1Title || 'Topic 1'}</h3>
                <p style="font-size: 0.88rem; line-height: 1.5;" ${edAttr} data-field="col1Text">${s.col1Text || ''}</p>
              </div>
              <div class="ppt-col-card" style="background: ${th.cardBg}; border: 1px solid rgba(255,255,255,0.15);">
                <h3 style="color: ${th.accentColor}; font-size: 1.05rem; margin-top: 0;" ${edAttr} data-field="col2Title">${s.col2Title || 'Topic 2'}</h3>
                <p style="font-size: 0.88rem; line-height: 1.5;" ${edAttr} data-field="col2Text">${s.col2Text || ''}</p>
              </div>
              <div class="ppt-col-card" style="background: ${th.cardBg}; border: 1px solid rgba(255,255,255,0.15);">
                <h3 style="color: ${th.accentColor}; font-size: 1.05rem; margin-top: 0;" ${edAttr} data-field="col3Title">${s.col3Title || 'Topic 3'}</h3>
                <p style="font-size: 0.88rem; line-height: 1.5;" ${edAttr} data-field="col3Text">${s.col3Text || ''}</p>
              </div>
            </div>
          </div>
        `;
      }

      if (s.layout === 'quote') {
        return `
          <div class="ppt-slide-layout-standard" style="display: flex; flex-direction: column; justify-content: center; min-height: 280px;">
            <h2 class="ppt-slide-h2" style="color: ${th.titleColor};" ${edAttr} data-field="title">${s.title}</h2>
            <div class="ppt-quote-box" style="border-left: 4px solid ${th.accentColor}; background: ${th.cardBg};">
              <p style="margin: 0; font-size: 1.25rem; font-style: italic; line-height: 1.6;" ${edAttr} data-field="quoteText">&ldquo;${s.quoteText || 'Enter inspiring quote or scientific principle here.'}&rdquo;</p>
              <div class="ppt-quote-author" style="color: ${th.accentColor};" ${edAttr} data-field="author">&mdash; ${s.author || 'Author / Pioneer'}</div>
            </div>
          </div>
        `;
      }

      if (s.layout === 'code_diagram') {
        return `
          <div class="ppt-slide-layout-standard">
            <h2 class="ppt-slide-h2" style="color: ${th.titleColor};" ${edAttr} data-field="title">${s.title}</h2>
            <p class="ppt-slide-subhead" style="color: ${th.accentColor};" ${edAttr} data-field="subtitle">${s.subtitle || ''}</p>
            <div class="ppt-code-grid">
              <div class="ppt-col-card" style="background: ${th.cardBg}; border: 1px solid rgba(255,255,255,0.15); padding: 1rem; border-radius: 8px;">
                <h4 style="color: ${th.accentColor}; margin-top: 0;" ${edAttr} data-field="col1Title">${s.col1Title || 'Description & Concepts'}</h4>
                <p style="font-size: 0.9rem; line-height: 1.5;" ${edAttr} data-field="col1Text">${s.col1Text || ''}</p>
              </div>
              <pre class="ppt-code-block" ${edAttr} data-field="code">${s.code || '// Sample Code or Formulas'}</pre>
            </div>
          </div>
        `;
      }

      if (s.layout === 'metric') {
        return `
          <div class="ppt-slide-layout-standard">
            <h2 class="ppt-slide-h2" style="color: ${th.titleColor};" ${edAttr} data-field="title">${s.title}</h2>
            <div class="ppt-metric-box" style="background: ${th.cardBg}; border: 2px solid ${th.accentColor}; border-radius: 12px; padding: 24px; text-align: center; margin: 20px 0;">
              <div class="ppt-big-metric" style="font-size: 3.5rem; font-weight: 800; color: ${th.accentColor};" ${edAttr} data-field="metricVal">${s.metricVal || '100%'}</div>
              <div class="ppt-metric-label" style="font-size: 1.1rem; font-weight: 600; color: ${th.titleColor}; margin: 8px 0;" ${edAttr} data-field="metricLabel">${s.metricLabel || 'Metric'}</div>
              <p class="ppt-metric-desc" ${edAttr} data-field="description">${s.description || ''}</p>
            </div>
          </div>
        `;
      }

      if (s.layout === 'blank') {
        return `
          <div class="ppt-slide-layout-standard">
            <h2 class="ppt-slide-h2" style="color: ${th.titleColor};" ${edAttr} data-field="title">${s.title || 'Blank Canvas'}</h2>
            <div class="ppt-blank-canvas" ${edAttr} data-field="customContent" style="min-height: 220px; padding: 1rem; border: 1px dashed rgba(255,255,255,0.2); border-radius: 8px;">
              ${s.customContent || '<p>Design your custom slide content freely here...</p>'}
            </div>
          </div>
        `;
      }

      // Default: Bullets
      const itemsHtml = (s.items || []).map((it, idx) => `
        <li ${edAttr} data-item-idx="${idx}" class="ppt-animated-item">${it}</li>
      `).join('');

      return `
        <div class="ppt-slide-layout-standard">
          <h2 class="ppt-slide-h2" style="color: ${th.titleColor};" ${edAttr} data-field="title">${s.title}</h2>
          <p class="ppt-slide-subhead" style="color: ${th.accentColor};" ${edAttr} data-field="subtitle">${s.subtitle || ''}</p>
          <ul class="ppt-slide-bullet-list">
            ${itemsHtml}
          </ul>
        </div>
      `;
    }

    bindEditableElements(canvas, s) {
      canvas.querySelectorAll('[contenteditable="true"]').forEach(el => {
        el.addEventListener('input', () => {
          const field = el.getAttribute('data-field');
          const itemIdx = el.getAttribute('data-item-idx');
          if (field) {
            s[field] = el.innerHTML;
          } else if (itemIdx !== null && s.items) {
            s.items[parseInt(itemIdx, 10)] = el.innerHTML;
          }
          this.renderThumbnails();
        });
      });
    }

    playTransitionEffect(el) {
      if (!el) return;
      el.classList.remove('ppt-anim-fade', 'ppt-anim-slide-left', 'ppt-anim-zoom', 'ppt-anim-flip');
      void el.offsetWidth; // trigger reflow
      const animClass = `ppt-anim-${this.currentTransition.replace('_', '-')}`;
      el.classList.add(animClass);
    }

    updateControls() {
      const s = this.slides[this.currentIdx];
      const layoutSelect = this.container.querySelector('#ppt_layout_select');
      const themeSelect = this.container.querySelector('#ppt_theme_select');

      if (layoutSelect && s.layout) layoutSelect.value = s.layout;
      if (themeSelect) themeSelect.value = this.currentTheme;
    }

    exportToHtmlDeck() {
      const th = THEMES[this.currentTheme] || THEMES.blue;
      const deckTitle = (this.slides[0] && this.slides[0].title) ? this.slides[0].title.replace(/<[^>]*>/g, '') : 'Presentation Deck';
      const deckJson = JSON.stringify(this.slides);

      const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${deckTitle} - S.V.A. Govt. Degree College</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <style>
    :root {
      --bg-slide: ${th.bg};
      --text-title: ${th.titleColor};
      --text-main: ${th.textColor};
      --accent: ${th.accentColor};
      --card-bg: ${th.cardBg};
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      background: #020617;
      color: #f8fafc;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100vw;
    }
    .deck-viewport {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
      position: relative;
    }
    .slide-card {
      width: 100%;
      max-width: 1100px;
      aspect-ratio: 16 / 9;
      background: var(--bg-slide);
      color: var(--text-main);
      border-radius: 16px;
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);
      padding: 48px 56px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(255, 255, 255, 0.15);
      animation: fadeIn 0.35s ease-out;
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.98); }
      to { opacity: 1; transform: scale(1); }
    }
    .slide-title-badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--accent);
      background: rgba(255, 255, 255, 0.08);
      padding: 4px 12px;
      border-radius: 20px;
      margin-bottom: 16px;
      width: fit-content;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    h1.slide-h1 {
      font-size: 2.75rem;
      font-weight: 800;
      color: var(--text-title);
      line-height: 1.2;
      margin-bottom: 16px;
    }
    h2.slide-h2 {
      font-size: 2.1rem;
      font-weight: 700;
      color: var(--text-title);
      margin-bottom: 12px;
    }
    .slide-subtitle {
      font-size: 1.25rem;
      color: var(--accent);
      font-weight: 500;
      margin-bottom: 24px;
    }
    .slide-meta {
      font-size: 0.95rem;
      opacity: 0.8;
      border-top: 1px solid rgba(255,255,255,0.15);
      padding-top: 16px;
      margin-top: 16px;
    }
    .slide-bullet-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 14px;
      font-size: 1.15rem;
      line-height: 1.6;
    }
    .slide-bullet-list li {
      position: relative;
      padding-left: 28px;
    }
    .slide-bullet-list li::before {
      content: "\\25CF";
      position: absolute;
      left: 0;
      color: var(--accent);
      font-size: 1.3rem;
      line-height: 1;
    }
    .two-col-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 24px;
      margin-top: 12px;
    }
    .three-col-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-top: 12px;
    }
    .col-card {
      background: var(--card-bg);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 12px;
      padding: 20px;
    }
    .col-card h3 {
      color: var(--accent);
      font-size: 1.15rem;
      margin-bottom: 8px;
    }
    .col-card p {
      font-size: 0.95rem;
      line-height: 1.5;
    }
    .quote-box {
      border-left: 4px solid var(--accent);
      background: var(--card-bg);
      padding: 28px;
      border-radius: 0 12px 12px 0;
      margin: 16px 0;
    }
    .quote-text {
      font-size: 1.35rem;
      font-style: italic;
      line-height: 1.6;
    }
    .quote-author {
      font-size: 1rem;
      color: var(--accent);
      margin-top: 12px;
      font-weight: 600;
    }
    .code-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
      margin-top: 12px;
    }
    .code-block {
      font-family: Consolas, monospace;
      font-size: 0.88rem;
      background: rgba(0,0,0,0.5);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 10px;
      padding: 16px;
      white-space: pre-wrap;
      color: #a7f3d0;
      line-height: 1.5;
    }
    .metric-box {
      background: var(--card-bg);
      border: 2px solid var(--accent);
      border-radius: 16px;
      padding: 32px;
      text-align: center;
      margin: 20px auto;
      max-width: 500px;
    }
    .metric-val {
      font-size: 4rem;
      font-weight: 800;
      color: var(--accent);
    }
    .metric-label {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--text-title);
      margin: 8px 0;
    }
    .control-bar {
      height: 60px;
      background: #0f172a;
      border-top: 1px solid #1e293b;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 24px;
      user-select: none;
    }
    .control-left, .control-center, .control-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .bar-btn {
      background: #1e293b;
      color: #f8fafc;
      border: 1px solid #334155;
      padding: 6px 14px;
      border-radius: 6px;
      cursor: pointer;
      font-size: 0.88rem;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      transition: background 0.2s;
    }
    .bar-btn:hover { background: #334155; }
    .bar-btn.active { background: #0284c7; border-color: #38bdf8; }
    .laser-pointer {
      position: fixed;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: #ff0044;
      box-shadow: 0 0 12px 4px #ff0044, 0 0 20px 8px rgba(255, 0, 68, 0.6);
      pointer-events: none;
      z-index: 99999;
      transform: translate(-50%, -50%);
      display: none;
    }
    .notes-drawer {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 320px;
      background: rgba(15, 23, 42, 0.95);
      border: 1px solid rgba(255,255,255,0.25);
      border-radius: 10px;
      padding: 16px;
      color: #e2e8f0;
      font-size: 0.88rem;
      line-height: 1.5;
      box-shadow: 0 10px 25px rgba(0,0,0,0.5);
      display: none;
      z-index: 1000;
    }
  </style>
</head>
<body>
  <div class="laser-pointer" id="laser"></div>
  <div class="deck-viewport" id="viewport">
    <div class="slide-card" id="slide_card"></div>
    <div class="notes-drawer" id="notes_drawer">
      <strong><i class="fa-regular fa-note-sticky"></i> Presenter Notes:</strong>
      <div id="notes_text" style="margin-top: 8px;"></div>
    </div>
  </div>
  <div class="control-bar">
    <div class="control-left">
      <span style="font-size: 0.85rem; font-weight: 600; color: #94a3b8;">
        <i class="fa-solid fa-graduation-cap"></i> S.V.A. GDC Lecture Deck
      </span>
      <span id="timer" style="font-family: monospace; font-size: 0.9rem; color: #38bdf8; margin-left: 10px;">⏱ 00:00</span>
    </div>
    <div class="control-center">
      <button class="bar-btn" id="btn_prev"><i class="fa-solid fa-chevron-left"></i> Prev</button>
      <span id="counter" style="font-weight: 600; min-width: 90px; text-align: center;">1 / 1</span>
      <button class="bar-btn" id="btn_next">Next <i class="fa-solid fa-chevron-right"></i></button>
    </div>
    <div class="control-right">
      <button class="bar-btn" id="btn_laser"><i class="fa-solid fa-bullseye"></i> Laser</button>
      <button class="bar-btn" id="btn_notes"><i class="fa-regular fa-note-sticky"></i> Notes</button>
      <button class="bar-btn" id="btn_fullscreen"><i class="fa-solid fa-expand"></i> Fullscreen</button>
    </div>
  </div>

  <script>
    const slides = ${deckJson};
    let currentIdx = 0;
    let isLaserActive = false;
    let isNotesActive = false;
    let timerSec = 0;

    setInterval(() => {
      timerSec++;
      const m = String(Math.floor(timerSec / 60)).padStart(2, '0');
      const s = String(timerSec % 60).padStart(2, '0');
      document.getElementById('timer').textContent = \`⏱ \${m}:\${s}\`;
    }, 1000);

    function renderSlide() {
      const s = slides[currentIdx];
      const card = document.getElementById('slide_card');
      const counter = document.getElementById('counter');
      const notesText = document.getElementById('notes_text');

      counter.textContent = \`\${currentIdx + 1} / \${slides.length}\`;
      notesText.innerText = s.notes || 'No notes for this slide.';

      let html = '';
      if (s.layout === 'title') {
        html = \`
          <div class="slide-title-badge"><i class="fa-solid fa-atom"></i> Academic Lecture Deck</div>
          <h1 class="slide-h1">\${s.title}</h1>
          <p class="slide-subtitle">\${s.subtitle || ''}</p>
          <div class="slide-meta">\${s.meta || ''}</div>
        \`;
      } else if (s.layout === 'two_col') {
        html = \`
          <h2 class="slide-h2">\${s.title}</h2>
          <div class="two-col-grid">
            <div class="col-card">
              <h3>\${s.col1Title || 'Column 1'}</h3>
              <p>\${s.col1Text || ''}</p>
            </div>
            <div class="col-card">
              <h3>\${s.col2Title || 'Column 2'}</h3>
              <p>\${s.col2Text || ''}</p>
            </div>
          </div>
        \`;
      } else if (s.layout === 'three_col') {
        html = \`
          <h2 class="slide-h2">\${s.title}</h2>
          <p class="slide-subtitle" style="margin-bottom: 12px;">\${s.subtitle || ''}</p>
          <div class="three-col-grid">
            <div class="col-card">
              <h3>\${s.col1Title || 'Topic 1'}</h3>
              <p>\${s.col1Text || ''}</p>
            </div>
            <div class="col-card">
              <h3>\${s.col2Title || 'Topic 2'}</h3>
              <p>\${s.col2Text || ''}</p>
            </div>
            <div class="col-card">
              <h3>\${s.col3Title || 'Topic 3'}</h3>
              <p>\${s.col3Text || ''}</p>
            </div>
          </div>
        \`;
      } else if (s.layout === 'quote') {
        html = \`
          <h2 class="slide-h2">\${s.title}</h2>
          <div class="quote-box">
            <p class="quote-text">&ldquo;\${s.quoteText || ''}&rdquo;</p>
            <div class="quote-author">&mdash; \${s.author || ''}</div>
          </div>
        \`;
      } else if (s.layout === 'code_diagram') {
        html = \`
          <h2 class="slide-h2">\${s.title}</h2>
          <p class="slide-subtitle" style="margin-bottom: 12px;">\${s.subtitle || ''}</p>
          <div class="code-grid">
            <div class="col-card">
              <h3>\${s.col1Title || 'Logic & Syntax'}</h3>
              <p>\${s.col1Text || ''}</p>
            </div>
            <pre class="code-block">\${s.code || ''}</pre>
          </div>
        \`;
      } else if (s.layout === 'metric') {
        html = \`
          <h2 class="slide-h2">\${s.title}</h2>
          <div class="metric-box">
            <div class="metric-val">\${s.metricVal || '100%'}</div>
            <div class="metric-label">\${s.metricLabel || ''}</div>
            <p style="font-size: 0.95rem; opacity: 0.9;">\${s.description || ''}</p>
          </div>
        \`;
      } else {
        const items = (s.items || []).map(it => \`<li>\${it}</li>\`).join('');
        html = \`
          <h2 class="slide-h2">\${s.title}</h2>
          <p class="slide-subtitle">\${s.subtitle || ''}</p>
          <ul class="slide-bullet-list">\${items}</ul>
        \`;
      }

      card.innerHTML = html;

      if (s.images && s.images.length) {
        s.images.forEach(function(im) {
          var passStyle = im.isPassport
            ? 'position: absolute; top: 20px; right: 20px; width: 115px; height: 140px; object-fit: cover; border: 2px solid rgba(255,255,255,0.75); border-radius: 4px; z-index: 30;'
            : 'position: absolute; left: ' + (im.left || 'auto') + '; top: ' + (im.top || 'auto') + '; right: ' + (im.right || 'auto') + '; bottom: ' + (im.bottom || 'auto') + '; width: ' + (im.width || '200px') + '; border-radius: 6px; box-shadow: 0 4px 15px rgba(0,0,0,0.35); z-index: 30;';
          var imgEl = document.createElement('img');
          imgEl.src = im.src;
          imgEl.style.cssText = passStyle;
          imgEl.alt = 'Slide Visual';
          card.appendChild(imgEl);
        });
      }
    }

    function nextSlide() {
      if (currentIdx < slides.length - 1) {
        currentIdx++;
        renderSlide();
      }
    }
    function prevSlide() {
      if (currentIdx > 0) {
        currentIdx--;
        renderSlide();
      }
    }

    document.getElementById('btn_next').addEventListener('click', nextSlide);
    document.getElementById('btn_prev').addEventListener('click', prevSlide);

    window.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key.toLowerCase() === 'f') {
        toggleFullscreen();
      } else if (e.key.toLowerCase() === 'l') {
        toggleLaser();
      } else if (e.key.toLowerCase() === 'n') {
        toggleNotes();
      }
    });

    const laser = document.getElementById('laser');
    function toggleLaser() {
      isLaserActive = !isLaserActive;
      laser.style.display = isLaserActive ? 'block' : 'none';
      document.getElementById('btn_laser').classList.toggle('active', isLaserActive);
    }
    document.getElementById('btn_laser').addEventListener('click', toggleLaser);
    window.addEventListener('mousemove', (e) => {
      if (isLaserActive) {
        laser.style.left = e.clientX + 'px';
        laser.style.top = e.clientY + 'px';
      }
    });

    function toggleNotes() {
      isNotesActive = !isNotesActive;
      document.getElementById('notes_drawer').style.display = isNotesActive ? 'block' : 'none';
      document.getElementById('btn_notes').classList.toggle('active', isNotesActive);
    }
    document.getElementById('btn_notes').addEventListener('click', toggleNotes);

    function toggleFullscreen() {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }
    document.getElementById('btn_fullscreen').addEventListener('click', toggleFullscreen);

    renderSlide();
  </script>
</body>
</html>`;

      const blob = new Blob([htmlContent], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${this.deckKey || 'presentation'}_deck.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    exportHandouts() {
      const deckTitle = (this.slides[0] && this.slides[0].title) ? this.slides[0].title.replace(/<[^>]*>/g, '') : 'Presentation Deck';
      let slidesHtml = '';
      this.slides.forEach((s, idx) => {
        let contentHtml = '';
        if (s.items && s.items.length) {
          contentHtml = '<ul>' + s.items.map(it => `<li>${it}</li>`).join('') + '</ul>';
        } else if (s.col1Text || s.col2Text) {
          contentHtml = `
            <div style="display: flex; gap: 20px; margin-top: 8px;">
              <div style="flex: 1; border: 1px solid #e2e8f0; padding: 10px; border-radius: 4px;">
                <strong>${s.col1Title || ''}</strong>
                <p>${s.col1Text || ''}</p>
              </div>
              <div style="flex: 1; border: 1px solid #e2e8f0; padding: 10px; border-radius: 4px;">
                <strong>${s.col2Title || ''}</strong>
                <p>${s.col2Text || ''}</p>
              </div>
            </div>
          `;
        } else if (s.quoteText) {
          contentHtml = `<blockquote style="font-style: italic; border-left: 3px solid #2563eb; padding-left: 12px; margin: 10px 0;">&ldquo;${s.quoteText}&rdquo; &mdash; ${s.author || ''}</blockquote>`;
        } else if (s.code) {
          contentHtml = `<pre style="background: #f8fafc; border: 1px solid #e2e8f0; padding: 10px; border-radius: 4px; font-family: monospace;">${s.code}</pre>`;
        } else if (s.metricVal) {
          contentHtml = `<div style="text-align: center; padding: 12px; font-size: 1.5rem; font-weight: bold; color: #2563eb;">${s.metricVal} - ${s.metricLabel || ''}</div><p style="text-align: center;">${s.description || ''}</p>`;
        } else {
          contentHtml = `<p>${s.subtitle || s.customContent || ''}</p>`;
        }

        if (s.images && s.images.length) {
          contentHtml += '<div style="display: flex; gap: 10px; margin-top: 10px; flex-wrap: wrap;">' +
            s.images.map(im => `<img src="${im.src}" style="max-height: 90px; border-radius: 4px; border: 1px solid #cbd5e1; box-shadow: 0 1px 4px rgba(0,0,0,0.1);" alt="Visual" />`).join('') +
            '</div>';
        }

        slidesHtml += `
          <div class="handout-slide" style="page-break-inside: avoid; border: 1px solid #cbd5e1; border-radius: 8px; padding: 16px; margin-bottom: 24px; background: #ffffff;">
            <div style="display: flex; justify-content: space-between; border-bottom: 2px solid #2563eb; padding-bottom: 6px; margin-bottom: 10px;">
              <span style="font-weight: bold; color: #1e3a8a; font-size: 1.1rem;">Slide ${idx + 1}: ${s.title || 'Untitled'}</span>
              <span style="font-size: 0.85rem; color: #64748b; font-family: sans-serif;">Layout: ${s.layout || 'standard'}</span>
            </div>
            <div style="font-size: 0.95rem; line-height: 1.5; color: #334155;">
              ${contentHtml}
            </div>
            <div style="margin-top: 14px; background: #f8fafc; border-left: 3px solid #0284c7; padding: 8px 12px; border-radius: 4px; font-size: 0.88rem; color: #475569;">
              <strong><i class="fa-regular fa-note-sticky"></i> Presenter Notes / Key Takeaways:</strong>
              <div style="margin-top: 4px;">${s.notes || 'No additional presenter notes provided.'}</div>
            </div>
          </div>
        `;
      });

      const win = window.open('', '_blank');
      win.document.write(`
        <html>
          <head>
            <title>Lecture Handouts - ${deckTitle}</title>
            <style>
              body { font-family: 'Times New Roman', serif; padding: 30px; color: #0f172a; line-height: 1.5; }
              @media print { body { padding: 0; } }
            </style>
          </head>
          <body>
            <div style="text-align: center; border-bottom: 2px solid #1e3a8a; padding-bottom: 12px; margin-bottom: 24px;">
              <h2 style="margin: 0; color: #1e3a8a;">S.V.A. GOVT. DEGREE COLLEGE, SRIKALAHASTI</h2>
              <p style="margin: 4px 0; color: #475569; font-size: 0.95rem;">Department of Physics &bull; S.V.A. Govt. Degree College, Srikalahasti &bull; Course Handouts & Study Deck</p>
              <h3 style="margin: 8px 0 0 0; color: #2563eb;">${deckTitle}</h3>
            </div>
            ${slidesHtml}
          </body>
        </html>
      `);
      win.document.close();
      win.focus();
      win.print();
    }

    exportToJson() {
      const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.slides, null, 2));
      const a = document.createElement('a');
      a.href = dataStr;
      a.download = `${this.deckKey || 'presentation'}_deck.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  // Global Engine Mount
  window.PresentationEngine = {
    create: (containerId, options) => new PresentationStudio(containerId, options)
  };

})(window);
