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
              </select>
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
              <button type="button" class="ppt-tool-btn text-danger" id="ppt_btn_del_slide" title="Delete Slide"><i class="fa-solid fa-trash-can"></i></button>
            </div>

            <div class="ppt-toolbar-group">
              <span class="ppt-group-label">Layout:</span>
              <select class="ppt-select" id="ppt_layout_select">
                <option value="title">Title Slide</option>
                <option value="bullets">Title &amp; Bullets</option>
                <option value="two_col">Two Column Comparison</option>
                <option value="metric">Key Metric Card</option>
              </select>
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
            <div class="ppt-show-canvas" id="ppt_show_canvas"></div>
            <div class="ppt-show-controls">
              <button type="button" class="ppt-show-btn" id="ppt_show_prev" title="Previous Slide (Arrow Left)"><i class="fa-solid fa-chevron-left"></i></button>
              <span class="ppt-show-counter" id="ppt_show_counter">Slide 1 / 4</span>
              <button type="button" class="ppt-show-btn" id="ppt_show_next" title="Next Slide (Space / Arrow Right)"><i class="fa-solid fa-chevron-right"></i></button>
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
          if (s.layout === 'metric' && !s.metricVal) {
            s.metricVal = '99.4%';
            s.metricLabel = 'Efficiency Index';
            s.description = 'Key observation metrics recorded during the laboratory test.';
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

      if (startShowBtn && showModal) {
        startShowBtn.addEventListener('click', () => {
          this.isSlideShowActive = true;
          showModal.style.display = 'flex';
          this.renderShowSlide();
        });
      }

      if (closeShowBtn && showModal) {
        closeShowBtn.addEventListener('click', () => {
          this.isSlideShowActive = false;
          showModal.style.display = 'none';
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
          this.isSlideShowActive = false;
          if (showModal) showModal.style.display = 'none';
        }
      });
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
            <div class="ppt-thumb-num">${idx + 1}</div>
            <div class="ppt-thumb-preview ppt-theme-${this.currentTheme}">
              <div class="ppt-thumb-title">${s.title || 'Untitled Slide'}</div>
              <div class="ppt-thumb-snippet">${s.subtitle || (s.items ? s.items[0] : '') || ''}</div>
            </div>
          </div>
        `;
      });

      rail.innerHTML = html;

      rail.querySelectorAll('.ppt-thumb-card').forEach(card => {
        card.addEventListener('click', () => {
          this.currentIdx = parseInt(card.getAttribute('data-idx'), 10);
          this.updateSlideView();
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
  }

  // Global Engine Mount
  window.PresentationEngine = {
    create: (containerId, options) => new PresentationStudio(containerId, options)
  };

})(window);
