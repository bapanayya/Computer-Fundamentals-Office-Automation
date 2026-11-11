/**
 * Computer-Fund-OfficeAutomat-SVAGDC: Master Application Controller
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function() {
  'use strict';

  const DEFAULT_TOPIC_ID = 'cfoa-intro';
  const THEME_STORAGE_KEY = 'cfoa_theme_mode';

  // --- Theme Management ---
  function initTheme() {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) || 'light';
    setTheme(savedTheme);

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
      });
    }
  }

  function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.innerHTML = theme === 'dark' 
        ? '<i class="fa-solid fa-sun" style="color: #fbbf24;"></i>' 
        : '<i class="fa-solid fa-moon" style="color: #3b82f6;"></i>';
      toggleBtn.title = `Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`;
    }
  }

  // --- Math Formatting (KaTeX) ---
  function renderMath(el) {
    if (!el) return;
    const doRender = () => {
      if (typeof window.renderMathInElement === 'function') {
        try {
          window.renderMathInElement(el, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false },
              { left: '\\[', right: '\\]', display: true },
              { left: '\\(', right: '\\)', display: false }
            ],
            ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
            throwOnError: false
          });
        } catch (err) {
          console.warn('Math auto-render error:', err);
        }
      }
    };

    if (window.katex && window.renderMathInElement) {
      doRender();
    } else {
      setTimeout(doRender, 80);
      setTimeout(doRender, 300);
      setTimeout(doRender, 800);
    }
  }

  // --- Topic Rendering ---
  function renderTopic(topicId) {
    if (!window.CurriculumData) return;

    const topic = window.CurriculumData.getTopic(topicId);
    if (!topic) {
      console.warn(`Topic "${topicId}" not found. Loading default.`);
      window.location.hash = DEFAULT_TOPIC_ID;
      return;
    }

    const mainContainer = document.getElementById('topic-content-mount');
    if (!mainContainer) return;

    // Get adjacent topics for Prev / Next navigation
    const { prev, next } = window.CurriculumData.getAdjacentTopics(topicId);

    // Build Category & Track Titles for Breadcrumbs
    const categories = window.CurriculumData.getCategories();
    const cat = categories.find(c => c.id === topic.category);
    const catTitle = cat ? cat.title : 'Curriculum';

    // HTML Construction
    let html = `
      <!-- Breadcrumbs -->
      <nav class="breadcrumbs">
        <a href="#cfoa-intro"><i class="fa-solid fa-house"></i> Home</a>
        <span class="separator">/</span>
        <span style="color: var(--text-muted);">${catTitle}</span>
        <span class="separator">/</span>
        <span class="current">${topic.title}</span>
      </nav>

      <!-- Lesson Header -->
      <header class="lesson-header">
        <div class="lesson-meta-row">
          <span class="module-tag">${catTitle}</span>
          <span class="read-time"><i class="fa-regular fa-clock"></i> ${topic.readTime || '5 min read'}</span>
        </div>
        <h1 class="lesson-title">${topic.title}</h1>
        <p class="lesson-lead">${topic.lead}</p>
      </header>

      <!-- Main Pedagogical Theory Sections -->
      <article class="lesson-body">
        ${topic.htmlContent}
      </article>

      <!-- "Test Your Understanding" Quiz Component Mount -->
      <section class="quiz-section" style="margin-top: 2.5rem;">
        <div class="quiz-card" id="quiz_mount_${topic.id}"></div>
      </section>

      <!-- Bottom Chapter Navigation Bar -->
      <div class="nav-buttons-bar" style="margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--border-subtle); display: flex; justify-content: space-between; gap: 1rem; flex-wrap: wrap;">
        <a href="${prev ? '#' + prev.id : 'javascript:void(0)'}" 
           class="nav-btn ${!prev ? 'disabled' : ''}" 
           style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.2rem; border-radius: var(--radius-md); border: 1px solid var(--border-medium); background: var(--bg-surface); color: var(--text-primary); font-weight: 600; font-size: 0.88rem; ${!prev ? 'opacity: 0.4; pointer-events: none;' : ''}">
          <i class="fa-solid fa-arrow-left"></i> Previous Chapter
        </a>
        <a href="${next ? '#' + next.id : 'javascript:void(0)'}" 
           class="nav-btn primary ${!next ? 'disabled' : ''}" 
           style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.6rem 1.2rem; border-radius: var(--radius-md); border: 1px solid var(--primary); background: var(--primary); color: #ffffff; font-weight: 600; font-size: 0.88rem; ${!next ? 'opacity: 0.4; pointer-events: none;' : ''}">
          Next Chapter <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    `;

    mainContainer.innerHTML = html;

    // Render Mathematical Equations via KaTeX
    renderMath(mainContainer);

    // Scroll main pane to top smoothly
    const mainPane = document.getElementById('app-main');
    if (mainPane) mainPane.scrollTop = 0;

    // Initialize Interactive Tools if designated for this topic
    const toolMount = document.getElementById('interactive_tool_mount');
    if (toolMount && topic.toolType) {
      if (topic.toolType === 'converter' && window.NumberConverterEngine) {
        window.NumberConverterEngine.mount(toolMount);
      } else if (topic.toolType === 'topology' && window.TopologySimulatorEngine) {
        window.TopologySimulatorEngine.mount(toolMount);
      } else if (topic.toolType === 'spreadsheet' && window.SpreadsheetEngine) {
        const preset = topic.id.includes('salary') || topic.id.includes('payroll') ? 'payroll' : 
                       (topic.id.includes('search') || topic.id.includes('vlookup') || topic.id.includes('lookup') ? 'lookups' : 
                       (topic.id.includes('text') ? 'text' :
                       (topic.id.includes('timetable') ? 'timetable' : 'marks')));
        window.SpreadsheetEngine.create(toolMount, { initialPreset: preset });
      } else if ((topic.toolType === 'wordprocessor' || topic.toolType === 'mailmerge') && window.WordProcessorEngine) {
        const preset = topic.id.includes('resume') ? 'resume' : 
                       (topic.id.includes('leave') ? 'leave_letter' : 
                       (topic.toolType === 'mailmerge' || topic.id.includes('merge') ? 'mailmerge' : 'report'));
        window.WordProcessorEngine.create(toolMount, { initialPreset: preset, mode: topic.toolType });
      } else if (topic.toolType === 'presentation' && window.PresentationEngine) {
        const preset = topic.id.includes('physics') || topic.id.includes('lab') ? 'physics' : 'general';
        window.PresentationEngine.create(toolMount, { initialPreset: preset });
      } else if (topic.toolType === 'pivottable' && window.PivotEngine) {
        window.PivotEngine.create(toolMount, { topicId: topic.id });
      } else if (topic.toolType === 'whatif' && window.WhatIfEngine) {
        const mode = topic.id.includes('scenario') ? 'scenario' : 'goalseek';
        window.WhatIfEngine.create(toolMount, { mode: mode });
      } else if (topic.toolType === 'dashboard' && window.DashboardEngine) {
        window.DashboardEngine.create(toolMount, { topicId: topic.id });
      }
    }

    // Render Quiz Component
    if (window.QuizEngine && topic.quiz) {
      window.QuizEngine.init(`quiz_mount_${topic.id}`, topic.quiz);
    }

    // Update active state in sidebar and header track pills
    if (window.NavigationTracker) {
      window.NavigationTracker.updateActiveTopic(topic.id);
    }
  }

  // --- Router ---
  function handleRouting() {
    let topicId = window.location.hash.slice(1);
    if (!topicId || !window.CurriculumData.getTopic(topicId)) {
      topicId = DEFAULT_TOPIC_ID;
      history.replaceState(null, null, `#${DEFAULT_TOPIC_ID}`);
    }
    renderTopic(topicId);
  }

  // --- Track Pill Click Handlers ---
  function initTrackPills() {
    document.querySelectorAll('.track-pill').forEach(pill => {
      pill.addEventListener('click', (e) => {
        e.preventDefault();
        const targetTrack = pill.dataset.track;
        if (!window.CurriculumData) return;

        const categories = window.CurriculumData.getCategories();
        const firstCat = categories.find(c => c.track === targetTrack);
        if (firstCat && firstCat.topics.length > 0) {
          const firstTopicId = firstCat.topics[0];
          window.location.hash = firstTopicId;

          // Expand category in sidebar
          const group = document.getElementById(`group_${firstCat.id}`);
          if (group) group.classList.remove('collapsed');
        }
      });
    });
  }

  // --- App Initialization ---
  function init() {
    initTheme();

    if (window.NavigationTracker) {
      window.NavigationTracker.renderSidebar();
      window.NavigationTracker.initProgressBar();
      window.NavigationTracker.initSidebarResizer();
      window.NavigationTracker.initSidebarFilter();
      window.NavigationTracker.initGlobalSearchModal();
    }

    initTrackPills();

    window.addEventListener('hashchange', handleRouting);
    handleRouting();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
