/**
 * Computer-Fund-OfficeAutomat-SVAGDC: Navigation & Curriculum Tree Coordinator
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function(window) {
  'use strict';

  const STORAGE_COMPLETED_KEY = 'cfoa_completed_topics';
  let completedTopics = new Set();

  try {
    const saved = localStorage.getItem(STORAGE_COMPLETED_KEY);
    if (saved) {
      completedTopics = new Set(JSON.parse(saved));
    }
  } catch (e) {
    console.warn('Could not load completed topics from localStorage', e);
  }

  function saveCompleted() {
    try {
      localStorage.setItem(STORAGE_COMPLETED_KEY, JSON.stringify(Array.from(completedTopics)));
    } catch (e) {}
  }

  function renderSidebar(activeTopicId = null) {
    const container = document.getElementById('curriculum-tree');
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
        const isCompleted = completedTopics.has(tid);

        html += `
          <li class="topic-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}" id="nav_item_${tid}">
            <a href="#${tid}" title="${t.title}" onclick="window.NavigationTracker.closeMobileSidebar()">
              <span>${t.title}</span>
              <i class="fa-solid fa-circle-check check-icon" title="Completed"></i>
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

    // Expand category containing active topic
    if (activeTopicId) {
      const activeTopic = allTopics[activeTopicId];
      if (activeTopic) {
        const activeGroup = document.getElementById(`group_${activeTopic.category}`);
        if (activeGroup) {
          activeGroup.classList.remove('collapsed');
        }
      }
    }
  }

  function updateActiveTopic(topicId) {
    document.querySelectorAll('.topic-item').forEach(el => el.classList.remove('active'));
    const targetItem = document.getElementById(`nav_item_${topicId}`);
    if (targetItem) {
      targetItem.classList.add('active');
      targetItem.scrollIntoView({ block: 'nearest', behavior: 'smooth' });

      // Ensure parent category group is expanded
      const parentGroup = targetItem.closest('.category-group');
      if (parentGroup) {
        parentGroup.classList.remove('collapsed');
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

  function toggleCategory(categoryId) {
    const group = document.getElementById(`group_${categoryId}`);
    if (group) {
      group.classList.toggle('collapsed');
    }
  }

  function filterSidebar(query) {
    const q = (query || '').toLowerCase().trim();
    const items = document.querySelectorAll('.topic-item');

    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (!q || text.includes(q)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });

    document.querySelectorAll('.category-group').forEach(group => {
      if (!q) return;
      const hasVisible = Array.from(group.querySelectorAll('.topic-item')).some(it => it.style.display !== 'none');
      if (hasVisible) {
        group.classList.remove('collapsed');
      }
    });
  }

  function markCurrentTopicCompleted(topicId = null) {
    const id = topicId || (window.location.hash ? window.location.hash.slice(1) : null);
    if (!id) return;
    completedTopics.add(id);
    saveCompleted();
    const item = document.getElementById(`nav_item_${id}`);
    if (item) item.classList.add('completed');
  }

  function closeMobileSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.remove('open');
    if (backdrop) backdrop.classList.remove('active');
  }

  function toggleMobileSidebar() {
    const sidebar = document.getElementById('app-sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');
    if (sidebar) sidebar.classList.toggle('open');
    if (backdrop) backdrop.classList.toggle('active');
  }

  // Reading progress bar updater
  function initProgressBar() {
    const mainPane = document.getElementById('app-main');
    const progressBar = document.getElementById('read-progress-bar');
    if (!mainPane || !progressBar) return;

    mainPane.addEventListener('scroll', () => {
      const scrollTop = mainPane.scrollTop;
      const scrollHeight = mainPane.scrollHeight - mainPane.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      progressBar.style.width = `${progress}%`;
    });
  }

  // Sidebar Width Adjustment, Dragging & Desktop Collapse
  function initSidebarResizer() {
    const sidebar = document.getElementById('app-sidebar');
    const resizer = document.getElementById('sidebar-resizer');
    const collapseBtn = document.getElementById('sidebar-collapse-btn');
    const floatingToggle = document.getElementById('sidebar-floating-toggle');
    const presetBtns = document.querySelectorAll('.btn-width-preset');

    if (!sidebar) return;

    const STORAGE_KEY = 'cfoa_sidebar_width';
    const MIN_WIDTH = 190;
    const MAX_WIDTH = 520;
    const DEFAULT_WIDTH = 280;

    function updatePresetButtons(currentWidth) {
      presetBtns.forEach(btn => {
        const targetWidth = parseInt(btn.dataset.width, 10);
        btn.classList.toggle('active', Math.abs(currentWidth - targetWidth) < 15);
      });
    }

    function setSidebarWidth(w, save = true) {
      const clamped = Math.max(MIN_WIDTH, Math.min(MAX_WIDTH, w));
      sidebar.style.width = `${clamped}px`;
      sidebar.style.minWidth = `${clamped}px`;
      sidebar.classList.remove('collapsed');
      if (floatingToggle) floatingToggle.style.display = 'none';
      if (save) {
        try { localStorage.setItem(STORAGE_KEY, clamped); } catch (e) {}
      }
      updatePresetButtons(clamped);
    }

    function collapseSidebar() {
      sidebar.classList.add('collapsed');
      if (floatingToggle) floatingToggle.style.display = 'inline-flex';
    }

    function expandSidebar() {
      sidebar.classList.remove('collapsed');
      if (floatingToggle) floatingToggle.style.display = 'none';
    }

    // Load saved width
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setSidebarWidth(parseInt(saved, 10), false);
      }
    } catch (e) {}

    // Preset button listeners
    presetBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const w = parseInt(btn.dataset.width, 10);
        setSidebarWidth(w);
      });
    });

    // Collapse and toggle buttons
    if (collapseBtn) collapseBtn.addEventListener('click', collapseSidebar);
    if (floatingToggle) floatingToggle.addEventListener('click', expandSidebar);

    // Drag-to-resize logic
    if (resizer) {
      let isDragging = false;
      let startX = 0;
      let startWidth = 0;

      resizer.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startWidth = sidebar.getBoundingClientRect().width;
        document.body.classList.add('resizing-active');
        e.preventDefault();
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const delta = e.clientX - startX;
        setSidebarWidth(startWidth + delta, false);
      });

      window.addEventListener('mouseup', () => {
        if (!isDragging) return;
        isDragging = false;
        document.body.classList.remove('resizing-active');
        const finalWidth = sidebar.getBoundingClientRect().width;
        try { localStorage.setItem(STORAGE_KEY, Math.round(finalWidth)); } catch (e) {}
      });

      resizer.addEventListener('dblclick', () => {
        setSidebarWidth(DEFAULT_WIDTH);
      });
    }
  }

  // Quick Filter Input in Sidebar
  function initSidebarFilter() {
    const input = document.getElementById('sidebar-search-input');
    if (!input) return;

    input.addEventListener('input', (e) => {
      filterSidebar(e.target.value);
    });

    window.addEventListener('keydown', (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const modal = document.getElementById('search-modal-backdrop');
        const modalInput = document.getElementById('search-modal-input');
        if (modal) {
          modal.classList.add('active');
          if (modalInput) {
            modalInput.value = '';
            modalInput.focus();
            window.NavigationTracker.searchGlobal('');
          }
        }
      }
    });
  }

  // Global Fast Search Modal (Ctrl+K)
  function initGlobalSearchModal() {
    const modal = document.getElementById('search-modal-backdrop');
    const input = document.getElementById('search-modal-input');
    const closeBtn = document.getElementById('search-modal-close');
    const resultsList = document.getElementById('search-results-list');

    if (!modal || !input || !resultsList) return;

    function closeModal() {
      modal.classList.remove('active');
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });

    input.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!window.CurriculumData) return;

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
    });
  }

  // Export API
  window.NavigationTracker = {
    renderSidebar,
    updateActiveTopic,
    toggleCategory,
    filterSidebar,
    markCurrentTopicCompleted,
    closeMobileSidebar,
    toggleMobileSidebar,
    initProgressBar,
    initSidebarResizer,
    initSidebarFilter,
    initGlobalSearchModal,
    searchGlobal: (q) => {
      const input = document.getElementById('search-modal-input');
      if (input) {
        input.value = q;
        input.dispatchEvent(new Event('input'));
      }
    }
  };

})(window);
