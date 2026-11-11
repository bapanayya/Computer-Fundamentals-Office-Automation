/**
 * Computer-Fund-OfficeAutomat-SVAGDC: Interactive Presentation Studio & Slide Deck Player
 * Department of Physics & Computer Science, S.V.A. Govt. Degree College, Srikalahasti
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
        meta: 'Department of Computer Science & Physics &bull; S.V.A. Govt. Degree College',
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

            <!-- Central Slide Stage -->
            <div class="ppt-stage-wrapper">
              <div class="ppt-slide-canvas" id="ppt_slide_canvas" role="region" aria-label="Slide Canvas">
                <!-- Active Slide Injected Here -->
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
          this.insertSlideImage();
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

    insertSlideImage() {
      const s = this.slides[this.currentIdx];
      const url = prompt(
        'Enter image URL to embed in this slide:',
        'https://images.unsplash.com/photo-1507668077129-56e32842fceb?w=600&auto=format&fit=crop&q=80'
      );
      if (url) {
        s.customContent = `
          <div style="text-align: center; margin: 12px 0;">
            <img src="${url}" alt="Slide Visual" style="max-height: 220px; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.4);" />
            <p style="font-size: 0.85rem; opacity: 0.8; margin-top: 6px;">Figure: Scientific observation / Diagrammatic model</p>
          </div>
        `;
        s.layout = 'blank';
        this.updateSlideView();
      }
    }

    updateSlideView() {
      this.renderThumbnails();
      this.renderActiveSlide();
      this.updateControls();
    }

    renderThumbnails() {
      const rail = this.container.querySelector('#ppt_thumbnails_rail');
      if (!rail) return;

      let html = '';
      this.slides.forEach((s, idx) => {
        const isActive = idx === this.currentIdx;
        html += `
          <div class="ppt-thumb-card ${isActive ? 'active' : ''}" data-idx="${idx}">
            <div class="ppt-thumb-num">
              <span>${idx + 1}</span>
              <div style="display: flex; gap: 2px;">
                <button type="button" class="ppt-thumb-reorder-btn ppt-thumb-up" data-idx="${idx}" title="Move Up"><i class="fa-solid fa-chevron-up"></i></button>
                <button type="button" class="ppt-thumb-reorder-btn ppt-thumb-down" data-idx="${idx}" title="Move Down"><i class="fa-solid fa-chevron-down"></i></button>
              </div>
            </div>
            <div class="ppt-thumb-preview ppt-theme-${this.currentTheme}">
              <div class="ppt-thumb-title">${s.title || 'Untitled Slide'}</div>
              <div class="ppt-thumb-snippet">${s.subtitle || (s.items ? s.items[0] : '') || ''}</div>
            </div>
          </div>
        `;
      });

      rail.innerHTML = html;

      rail.querySelectorAll('.ppt-thumb-card').forEach(card => {
        card.addEventListener('click', (e) => {
          if (e.target.closest('.ppt-thumb-reorder-btn')) return;
          this.currentIdx = parseInt(card.getAttribute('data-idx'), 10);
          this.updateSlideView();
        });
      });

      rail.querySelectorAll('.ppt-thumb-up').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = parseInt(btn.getAttribute('data-idx'), 10);
          this.moveSlideUp(idx);
        });
      });

      rail.querySelectorAll('.ppt-thumb-down').forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = parseInt(btn.getAttribute('data-idx'), 10);
          this.moveSlideDown(idx);
        });
      });
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

      // Notes
      const notesEl = this.container.querySelector('#ppt_notes_editor');
      if (notesEl) {
        notesEl.innerText = s.notes || '';
      }
    }

    renderShowSlide() {
      const canvas = this.container.querySelector('#ppt_show_canvas');
      const counter = this.container.querySelector('#ppt_show_counter');
      if (!canvas) return;

      const s = this.slides[this.currentIdx];
      const th = THEMES[this.currentTheme] || THEMES.blue;

      canvas.style.background = th.bg;
      canvas.style.color = th.textColor;
      canvas.innerHTML = this.buildSlideHtml(s, th, false);

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
              <p style="margin: 4px 0; color: #475569; font-size: 0.95rem;">Department of Computer Science & Physics &bull; Course Handouts & Study Deck</p>
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
