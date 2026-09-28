/**
 * Responsive Sidebar Navigation, Search & State Tracker
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function(window) {
  'use strict';

  const STORAGE_COMPLETED_KEY = 'cfoa_completed_topics';
  const STORAGE_WIDTH_KEY = 'svagdc_sidebar_width';
  let completedTopics = new Set();

  function loadCompleted() {
    try {
      const pathSuffix = window.location && window.location.pathname ? window.location.pathname.replace(/[^a-zA-Z0-9]/g, '_') : 'default';
      const saved = localStorage.getItem(STORAGE_COMPLETED_KEY) || 
                    localStorage.getItem('svagdc_comp_' + pathSuffix);
      if (saved) {
        completedTopics = new Set(JSON.parse(saved));
      }
    } catch (e) {
      completedTopics = new Set();
    }
  }

  function saveCompleted() {
    try {
      localStorage.setItem(STORAGE_COMPLETED_KEY, JSON.stringify(Array.from(completedTopics)));
    } catch (e) {}
  }

  function renderSidebar(activeTopicId) {
    const container = document.getElementById('curriculum-tree') || document.getElementById('curriculum-nav-container');
    if (!container || !window.CurriculumData) return;

    const categories = window.CurriculumData.getCategories();
    const allTopics = window.CurriculumData.getTopics();

    let html = '';
    categories.forEach(cat => {
      html += `
        <div class="category-group" id="group_${cat.id}" data-category-id="${cat.id}">
          <div class="category-header" onclick="window.NavigationTracker.toggleCategory('${cat.id}')">
            <div class="category-header-title">
              <i class="${cat.icon || 'fa-solid fa-folder'}"></i>
              <span>${cat.title}</span>
            </div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <span class="category-badge">${cat.topics.length}</span>
              <i class="fa-solid fa-chevron-down category-arrow"></i>
            </div>
          </div>
          <ul class="topic-list">
      `;

      cat.topics.forEach(tid => {
        const t = allTopics[tid];
        if (!t) return;
        const isActive = tid === activeTopicId;
        const isDone = completedTopics.has(tid);

        html += `
          <li class="topic-item ${isActive ? 'active' : ''} ${isDone ? 'completed' : ''}" id="nav_item_${tid}">
            <a href="#${tid}" title="${t.title}" onclick="window.NavigationTracker.closeMobileSidebar()">
              <span class="topic-status-icon">
                <i class="${isDone ? 'fa-solid fa-circle-check' : (isActive ? 'fa-solid fa-circle-play' : 'fa-regular fa-circle')}"></i>
              </span>
              <span class="topic-title-text">${t.title}</span>
              ${t.toolType ? '<span class="interactive-pill" title="Interactive Simulator Included"><i class="fa-solid fa-bolt"></i> Lab</span>' : ''}
            </a>
          </li>
        `;
      });

      html += `
          </ul>
        </div>
      `;
    });

    container.innerHTML = html;

    if (typeof window.renderMathInElement === 'function') {
      try {
        window.renderMathInElement(container, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      } catch(e) {}
    }

    // Auto-expand the active topic's category
    if (activeTopicId && allTopics[activeTopicId] && allTopics[activeTopicId].category) {
      expandCategory(allTopics[activeTopicId].category);
    }
  }

  function updateActiveTopic(topicId) {
    if (!topicId) return;

    // Update active class on all sidebar items
    document.querySelectorAll('.topic-item').forEach(el => {
      el.classList.remove('active');
      const icon = el.querySelector('.topic-status-icon i');
      if (icon && !el.classList.contains('completed')) {
        icon.className = 'fa-regular fa-circle';
      }
    });

    const targetItem = document.getElementById(`nav_item_${topicId}`);
    if (targetItem) {
      targetItem.classList.add('active');
      const icon = targetItem.querySelector('.topic-status-icon i');
      if (icon && !targetItem.classList.contains('completed')) {
        icon.className = 'fa-solid fa-circle-play';
      }
      try {
        targetItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      } catch (e) {
        targetItem.scrollIntoView(false);
      }

      // Ensure parent category group is expanded
      const parentGroup = targetItem.closest ? targetItem.closest('.category-group') : null;
      if (parentGroup) {
        parentGroup.classList.remove('collapsed');
      } else {
        const t = window.CurriculumData ? window.CurriculumData.getTopic(topicId) : null;
        if (t && t.category) {
          const g = document.getElementById(`group_${t.category}`);
          if (g) g.classList.remove('collapsed');
        }
      }
    }

    // Update track pill in header
    const topic = window.CurriculumData ? window.CurriculumData.getTopic(topicId) : null;
    if (topic) {
      document.querySelectorAll('.track-pill').forEach(pill => {
        if (pill.dataset.track === topic.track) {
          pill.classList.add('active');
        } else {
          pill.classList.remove('active');
        }
      });
    }
  }

  function toggleCategory(catId) {
    const el = document.getElementById(`group_${catId}`);
    if (el) el.classList.toggle('collapsed');
  }

  function expandCategory(catId) {
    const el = document.getElementById(`group_${catId}`);
    if (el) el.classList.remove('collapsed');
  }

  function markCompleted(topicId) {
    const id = topicId || (window.location.hash ? window.location.hash.slice(1) : null);
    if (!id) return;
    completedTopics.add(id);
    saveCompleted();
    const item = document.getElementById(`nav_item_${id}`);
    if (item) {
      item.classList.add('completed');
      const icon = item.querySelector('.topic-status-icon i');
      if (icon) icon.className = 'fa-solid fa-circle-check';
    }
  }

  // Sidebar Resizing & Preset Widths
  function initSidebarResizer() {
    const sidebar = document.getElementById('app-sidebar');
    const resizer = document.getElementById('sidebar-resizer');
    const collapseBtn = document.getElementById('sidebar-collapse-btn');
    const floatingToggle = document.getElementById('sidebar-floating-toggle');
    const widthButtons = document.querySelectorAll('.btn-width-preset');

    const savedWidth = localStorage.getItem(STORAGE_WIDTH_KEY);
    if (savedWidth && sidebar) {
      sidebar.style.width = `${savedWidth}px`;
      document.documentElement.style.setProperty('--sidebar-width', `${savedWidth}px`);
      updateActivePresetBtn(parseInt(savedWidth, 10));
    }

    function updateActivePresetBtn(w) {
      widthButtons.forEach(b => {
        if (Math.abs(parseInt(b.dataset.width, 10) - w) < 20) b.classList.add('active');
        else b.classList.remove('active');
      });
    }

    widthButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const w = parseInt(btn.dataset.width, 10);
        if (sidebar && !isNaN(w)) {
          sidebar.style.width = `${w}px`;
          document.documentElement.style.setProperty('--sidebar-width', `${w}px`);
          localStorage.setItem(STORAGE_WIDTH_KEY, w);
          updateActivePresetBtn(w);
        }
      });
    });

    if (collapseBtn && sidebar) {
      collapseBtn.addEventListener('click', () => {
        sidebar.classList.add('collapsed-desktop');
        if (floatingToggle) floatingToggle.classList.add('visible');
      });
    }

    if (floatingToggle && sidebar) {
      floatingToggle.addEventListener('click', () => {
        sidebar.classList.remove('collapsed-desktop');
        floatingToggle.classList.remove('visible');
      });
    }

    if (resizer && sidebar) {
      let isDragging = false;

      resizer.addEventListener('mousedown', () => {
        isDragging = true;
        document.body.classList.add('resizing-sidebar');
      });

      document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const newWidth = Math.max(200, Math.min(520, e.clientX));
        sidebar.style.width = `${newWidth}px`;
        document.documentElement.style.setProperty('--sidebar-width', `${newWidth}px`);
      });

      document.addEventListener('mouseup', () => {
        if (isDragging) {
          isDragging = false;
          document.body.classList.remove('resizing-sidebar');
          const finalW = parseInt(sidebar.style.width, 10);
          if (!isNaN(finalW)) {
            localStorage.setItem(STORAGE_WIDTH_KEY, finalW);
            updateActivePresetBtn(finalW);
          }
        }
      });

      resizer.addEventListener('dblclick', () => {
        sidebar.style.width = '290px';
        document.documentElement.style.setProperty('--sidebar-width', '290px');
        localStorage.setItem(STORAGE_WIDTH_KEY, 290);
        updateActivePresetBtn(290);
      });
    }
  }

  // Live Sidebar Filter
  function filterSidebar(query) {
    const q = (query || '').toLowerCase().trim();
    const groups = document.querySelectorAll('.category-group');

    groups.forEach(g => {
      let hasMatch = false;
      const items = g.querySelectorAll('.topic-item');
      items.forEach(it => {
        const text = it.textContent.toLowerCase();
        if (!q || text.includes(q)) {
          it.style.display = '';
          hasMatch = true;
        } else {
          it.style.display = 'none';
        }
      });

      if (hasMatch) {
        g.style.display = '';
        if (q) g.classList.remove('collapsed');
      } else {
        g.style.display = 'none';
      }
    });
  }

  function initSidebarFilter() {
    const input = document.getElementById('sidebar-search-input') || document.getElementById('curriculum-search');
    if (input) {
      input.addEventListener('input', (e) => {
        filterSidebar(e.target.value);
      });
    }

    // Ctrl+K keyboard shortcut
    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        openGlobalSearchModal();
      }
    });

    // Clicking the "Ctrl K" badge in sidebar
    const kbd = document.querySelector('.sidebar-search-kbd');
    if (kbd) {
      kbd.style.cursor = 'pointer';
      kbd.addEventListener('click', (e) => {
        e.preventDefault();
        openGlobalSearchModal();
      });
    }
  }

  function openGlobalSearchModal() {
    const modal = document.getElementById('search-modal-backdrop');
    const modalInput = document.getElementById('search-modal-input');
    if (modal) {
      modal.classList.add('active');
      if (modalInput) {
        modalInput.value = '';
        modalInput.focus();
        searchGlobal('');
      }
    }
  }

  // Course Dropdown Menu Handler
  function initCourseDropdown() {
    const dropdown = document.getElementById('course-dropdown');
    const dropdownBtn = document.getElementById('course-dropdown-btn');
    if (!dropdown || !dropdownBtn) return;
    if (dropdownBtn.getAttribute('data-has-dropdown-init') === 'true') return;
    dropdownBtn.setAttribute('data-has-dropdown-init', 'true');

    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('active');
      const isExpanded = dropdown.classList.contains('active');
      dropdownBtn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('active');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dropdown.classList.contains('active')) {
        dropdown.classList.remove('active');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on link click
    const links = dropdown.querySelectorAll('.course-dropdown-item');
    links.forEach(l => {
      l.addEventListener('click', () => {
        dropdown.classList.remove('active');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Reading Progress Bar
  function initReadingProgress() {
    const bar = document.getElementById('read-progress-bar');
    const main = document.getElementById('app-main');
    if (!bar || !main) return;

    main.addEventListener('scroll', () => {
      const scrollHeight = main.scrollHeight - main.clientHeight;
      if (scrollHeight > 0) {
        const percent = (main.scrollTop / scrollHeight) * 100;
        bar.style.width = `${percent}%`;
      } else {
        bar.style.width = '0%';
      }
    });
  }

  // Global Fast Search Modal (Ctrl+K)
  function searchGlobal(query) {
    const q = (query || '').toLowerCase().trim();
    const resultsList = document.getElementById('search-results-list');
    if (!resultsList || !window.CurriculumData) return;

    const topics = window.CurriculumData.getTopics();
    const categories = window.CurriculumData.getCategories();
    const matches = [];

    if (q.length > 0) {
      Object.values(topics).forEach(t => {
        const matchTitle = t.title.toLowerCase().includes(q);
        const matchLead = (t.lead || '').toLowerCase().includes(q);
        const matchContent = (t.htmlContent || '').toLowerCase().includes(q);

        if (matchTitle || matchLead || matchContent) {
          const cat = categories.find(c => c.id === t.category);
          matches.push({
            topic: t,
            catTitle: cat ? cat.title : 'Curriculum',
            priority: matchTitle ? 2 : 1
          });
        }
      });
    }

    matches.sort((a, b) => b.priority - a.priority);

    if (matches.length === 0) {
      resultsList.innerHTML = `
        <li class="search-result-empty">
          <i class="fa-solid fa-magnifying-glass"></i>
          <span>${q.length === 0 ? 'Type to search across all units, formulas, tools, and lab experiments...' : 'No matching topics found.'}</span>
        </li>
      `;
      return;
    }

    let html = '';
    matches.slice(0, 15).forEach(({ topic, catTitle }) => {
      html += `
        <li class="search-result-item">
          <a href="#${topic.id}" onclick="document.getElementById('search-modal-backdrop').classList.remove('active')">
            <div class="result-title">${topic.title}</div>
            <div class="result-meta">${catTitle} &bull; ${topic.readTime || '5 min read'}</div>
          </a>
        </li>
      `;
    });

    resultsList.innerHTML = html;
  }

  function initGlobalSearchModal() {
    const modal = document.getElementById('search-modal-backdrop');
    const input = document.getElementById('search-modal-input');
    const closeBtn = document.getElementById('search-modal-close');

    if (!modal) return;

    function closeModal() {
      modal.classList.remove('active');
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    if (input) {
      input.addEventListener('input', (e) => {
        searchGlobal(e.target.value);
      });
    }
  }

  function toggleMobileSidebar() {
    const sb = document.getElementById('app-sidebar');
    const bd = document.getElementById('sidebar-backdrop');
    if (sb) sb.classList.toggle('open');
    if (bd) bd.classList.toggle('active');
  }

  function closeMobileSidebar() {
    const sb = document.getElementById('app-sidebar');
    const bd = document.getElementById('sidebar-backdrop');
    if (sb) sb.classList.remove('open');
    if (bd) bd.classList.remove('active');
  }

  let isNavTrackerInitialized = false;
  function init() {
    if (isNavTrackerInitialized) return;
    isNavTrackerInitialized = true;
    loadCompleted();
    initSidebarResizer();
    initSidebarFilter();
    initCourseDropdown();
    initReadingProgress();
    initGlobalSearchModal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.NavigationTracker = {
    init: init,
    renderSidebar: renderSidebar,
    updateActiveTopic: updateActiveTopic,
    toggleCategory: toggleCategory,
    expandCategory: expandCategory,
    filterSidebar: filterSidebar,
    markCompleted: markCompleted,
    markCurrentTopicCompleted: markCompleted,
    toggleMobileSidebar: toggleMobileSidebar,
    closeMobileSidebar: closeMobileSidebar,
    initSidebarResizer: initSidebarResizer,
    initSidebarFilter: initSidebarFilter,
    initCourseDropdown: initCourseDropdown,
    initReadingProgress: initReadingProgress,
    initProgressBar: initReadingProgress,
    initGlobalSearchModal: initGlobalSearchModal,
    searchGlobal: (q) => {
      const input = document.getElementById('search-modal-input');
      if (input) {
        input.value = q;
      }
      searchGlobal(q);
    }
  };

})(window);
