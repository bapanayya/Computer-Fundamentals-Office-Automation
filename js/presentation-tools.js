/**
 * High-Performance Presentation & Teacher Annotation Engine
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 * Dual Viewport-Fixed Canvas Engine (60-120 FPS) with Laser Pointer,
 * Drawing Tools, Presentation Mode, and Keyboard Navigation.
 */

(function(window) {
  'use strict';

  // --- STATE VARIABLES ---
  let currentTool = 'cursor'; // 'cursor', 'laser', 'pen', 'highlighter', 'eraser'
  let currentColor = '#D50000';
  let currentSize = 5.5;
  let isDrawing = false;
  let currentStroke = null;
  let strokes = [];
  let redoStack = [];
  let isCanvasVisible = true;
  let drawRafId = null;
  let scrollRafId = null;
  let isTouchDevice = false;

  // Presentation State
  let presentationIndex = 0;
  let presentationSections = [];

  // --- DOM INJECTION OF ANNOTATION & PRESENTER CHROME ---
  function ensureDOMMounts() {
    if (!document.getElementById('annotationContainer')) {
      const container = document.createElement('div');
      container.id = 'annotationContainer';
      container.innerHTML = `
        <canvas id="annotationBaseCanvas"></canvas>
        <canvas id="annotationActiveCanvas"></canvas>
      `;
      document.body.appendChild(container);
    }

    if (!document.getElementById('laserPointerDot')) {
      const dot = document.createElement('div');
      dot.id = 'laserPointerDot';
      document.body.appendChild(dot);
    }

    if (!document.getElementById('teacherPillLauncher')) {
      const launcher = document.createElement('button');
      launcher.id = 'teacherPillLauncher';
      launcher.setAttribute('onclick', 'window.PresentationTools.toggleAnnotationToolbar()');
      launcher.title = 'Open Pen & Pointer Toolbar (Shortcut: Alt+P)';
      launcher.innerHTML = '✏️ Pen &amp; Pointer Tools';
      document.body.appendChild(launcher);
    }

    if (!document.getElementById('teacherToolbar')) {
      const tb = document.createElement('div');
      tb.id = 'teacherToolbar';
      tb.className = 'minimized';
      tb.innerHTML = `
        <!-- Drag Handle -->
        <div class="tb-drag-handle" title="Drag toolbar anywhere">⠿</div>

        <!-- Mode Buttons: Cursor, Laser, Pen, Highlighter, Eraser -->
        <div class="tb-btn-group">
          <button id="tool-cursor" class="tb-btn active" onclick="window.PresentationTools.setAnnotationTool('cursor')" title="Interact / Normal Cursor (Key: 1)">
            👆<span class="tb-tooltip">Interact / Scroll (1)</span>
          </button>
          <button id="tool-laser" class="tb-btn tb-laser" onclick="window.PresentationTools.setAnnotationTool('laser')" title="Laser Pointer (Key: 2)">
            🔴<span class="tb-tooltip">Laser Pointer (2)</span>
          </button>
          <button id="tool-pen" class="tb-btn tb-pen" onclick="window.PresentationTools.setAnnotationTool('pen')" title="Pen (Key: 3)">
            ✏️<span class="tb-tooltip">Pen (3)</span>
          </button>
          <button id="tool-highlighter" class="tb-btn tb-highlighter" onclick="window.PresentationTools.setAnnotationTool('highlighter')" title="Highlighter (Key: 4)">
            🖊️<span class="tb-tooltip">Highlighter (4)</span>
          </button>
          <button id="tool-eraser" class="tb-btn tb-eraser" onclick="window.PresentationTools.setAnnotationTool('eraser')" title="Eraser (Key: 5)">
            🧹<span class="tb-tooltip">Eraser (5)</span>
          </button>
        </div>

        <div class="tb-divider"></div>

        <!-- Color Palette -->
        <div class="tb-btn-group" id="colorPalette">
          <div class="tb-color-swatch active" style="background:#D50000;" onclick="window.PresentationTools.setAnnotationColor('#D50000', this)" title="Ruby Red"></div>
          <div class="tb-color-swatch" style="background:#FFD600;" onclick="window.PresentationTools.setAnnotationColor('#FFD600', this)" title="Laser Yellow"></div>
          <div class="tb-color-swatch" style="background:#00E676;" onclick="window.PresentationTools.setAnnotationColor('#00E676', this)" title="Neon Green"></div>
          <div class="tb-color-swatch" style="background:#1565C0;" onclick="window.PresentationTools.setAnnotationColor('#1565C0', this)" title="Electric Blue"></div>
          <div class="tb-color-swatch" style="background:#AA00FF;" onclick="window.PresentationTools.setAnnotationColor('#AA00FF', this)" title="Vivid Purple"></div>
          <div class="tb-color-swatch" style="background:#0F172A;" onclick="window.PresentationTools.setAnnotationColor('#0F172A', this)" title="Dark Ink"></div>
          <input type="color" id="customColorInput" onchange="window.PresentationTools.setAnnotationColor(this.value, null)" style="width:24px; height:24px; border:none; border-radius:50%; cursor:pointer; background:none;" title="Custom Color">
        </div>

        <div class="tb-divider"></div>

        <!-- Stroke Thickness -->
        <div class="tb-btn-group">
          <button id="size-fine" class="tb-size-btn" onclick="window.PresentationTools.setAnnotationSize(2.5, this)">Fine</button>
          <button id="size-med" class="tb-size-btn active" onclick="window.PresentationTools.setAnnotationSize(5.5, this)">Med</button>
          <button id="size-thick" class="tb-size-btn" onclick="window.PresentationTools.setAnnotationSize(14, this)">Bold</button>
        </div>

        <div class="tb-divider"></div>

        <!-- Actions: Undo, Redo, Toggle View, Clear, Minimize -->
        <div class="tb-btn-group">
          <button class="tb-btn" onclick="window.PresentationTools.undoAnnotation()" title="Undo Stroke (Ctrl+Z)">
            ↩️<span class="tb-tooltip">Undo</span>
          </button>
          <button class="tb-btn" onclick="window.PresentationTools.redoAnnotation()" title="Redo Stroke (Ctrl+Y)">
            ↪️<span class="tb-tooltip">Redo</span>
          </button>
          <button class="tb-btn" onclick="window.PresentationTools.toggleCanvasVisibility()" id="btnToggleVis" title="Hide/Show Drawings">
            👁️<span class="tb-tooltip">Hide/Show</span>
          </button>
          <button class="tb-btn" onclick="window.PresentationTools.clearAnnotationCanvas()" title="Clear All Drawings (Key: C)">
            🗑️<span class="tb-tooltip">Clear Board</span>
          </button>
          <button class="tb-btn" onclick="window.PresentationTools.toggleAnnotationToolbar()" title="Minimize Toolbar (Alt+P)">
            ✖<span class="tb-tooltip">Minimize</span>
          </button>
        </div>
      `;
      document.body.appendChild(tb);
    }

    if (!document.getElementById('annotationToast')) {
      const toast = document.createElement('div');
      toast.id = 'annotationToast';
      document.body.appendChild(toast);
    }

    if (!document.getElementById('presenterControlBar')) {
      const bar = document.createElement('div');
      bar.id = 'presenterControlBar';
      bar.innerHTML = `
        <div class="pres-brand-badge">
          <span class="laser-dot"></span> <span>PRESENTER VIEW</span>
        </div>
        <button class="pres-ctrl-btn" onclick="window.PresentationTools.navigatePresentation(-1)" title="Previous Topic (Left Arrow)">◄ Prev</button>
        <span class="pres-progress-pill" id="presProgress">Section 1 of 1</span>
        <button class="pres-ctrl-btn" onclick="window.PresentationTools.navigatePresentation(1)" title="Next Topic (Right Arrow / Space)">Next ►</button>
        <button class="pres-ctrl-btn exit-btn" onclick="window.PresentationTools.togglePresentationMode()" title="Exit Presentation (Esc)">✖ Exit</button>
      `;
      document.body.appendChild(bar);
    }
  }

  // --- TOAST HELPER ---
  let toastTimer = null;
  function showToast(msg) {
    const toast = document.getElementById('annotationToast');
    if (!toast) return;
    toast.innerText = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2000);
  }

  // --- RESIZE DUAL CANVASES ---
  function resizeCanvases() {
    const baseCanvas = document.getElementById('annotationBaseCanvas');
    const activeCanvas = document.getElementById('annotationActiveCanvas');
    if (!baseCanvas || !activeCanvas) return;

    const w = window.innerWidth;
    const h = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const targetW = Math.round(w * dpr);
    const targetH = Math.round(h * dpr);

    if (baseCanvas.width !== targetW || baseCanvas.height !== targetH) {
      baseCanvas.width = targetW;
      baseCanvas.height = targetH;
      baseCanvas.style.width = w + 'px';
      baseCanvas.style.height = h + 'px';

      activeCanvas.width = targetW;
      activeCanvas.height = targetH;
      activeCanvas.style.width = w + 'px';
      activeCanvas.style.height = h + 'px';

      redrawBaseCanvas();
    }
  }

  // --- VIEWPORT SCROLL SYNC ---
  function handleViewportScroll() {
    if (!scrollRafId) {
      scrollRafId = requestAnimationFrame(() => {
        redrawBaseCanvas();
        if (isDrawing && currentStroke) {
          drawActiveStroke();
        }
        scrollRafId = null;
      });
    }
  }

  // --- REDRAW BASE CANVAS ---
  function redrawBaseCanvas() {
    const canvas = document.getElementById('annotationBaseCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(dpr, dpr);
    ctx.translate(-window.scrollX, -window.scrollY);

    if (isCanvasVisible && strokes.length > 0) {
      for (let i = 0; i < strokes.length; i++) {
        drawSingleStroke(ctx, strokes[i]);
      }
    }

    ctx.restore();
  }

  // --- DRAW ACTIVE STROKE ---
  function drawActiveStroke() {
    const canvas = document.getElementById('annotationActiveCanvas');
    if (!canvas || !currentStroke) return;
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.scale(dpr, dpr);
    ctx.translate(-window.scrollX, -window.scrollY);

    drawSingleStroke(ctx, currentStroke);
    ctx.restore();
  }

  function clearActiveCanvas() {
    const canvas = document.getElementById('annotationActiveCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  }

  // --- DRAW SINGLE STROKE ---
  function drawSingleStroke(ctx, stroke) {
    if (!stroke.points || stroke.points.length === 0) return;

    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (stroke.tool === 'highlighter') {
      ctx.globalAlpha = 0.38;
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.size * 2.8;
    } else if (stroke.tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.lineWidth = stroke.size * 3.5;
    } else {
      ctx.globalAlpha = 1.0;
      ctx.strokeStyle = stroke.color;
      ctx.lineWidth = stroke.size;
    }

    ctx.beginPath();
    const pts = stroke.points;

    if (pts.length === 1) {
      ctx.arc(pts[0].x, pts[0].y, ctx.lineWidth / 2, 0, Math.PI * 2);
      ctx.fillStyle = ctx.strokeStyle;
      ctx.fill();
    } else {
      ctx.moveTo(pts[0].x, pts[0].y);
      for (let i = 1; i < pts.length - 1; i++) {
        const xc = (pts[i].x + pts[i + 1].x) / 2;
        const yc = (pts[i].y + pts[i + 1].y) / 2;
        ctx.quadraticCurveTo(pts[i].x, pts[i].y, xc, yc);
      }
      ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y);
      ctx.stroke();
    }

    ctx.restore();
  }

  // --- POINTER EVENTS ---
  function handlePointerDown(e) {
    if (currentTool === 'cursor') return;

    if (currentTool === 'laser') {
      updateLaserPosition(e.clientX, e.clientY);
      triggerLaserRipple(e.clientX, e.clientY, currentColor);
      if (e.target && e.target.setPointerCapture) {
        try { e.target.setPointerCapture(e.pointerId); } catch(err) {}
      }
      return;
    }

    e.preventDefault();
    isDrawing = true;

    if (e.target && e.target.setPointerCapture) {
      try { e.target.setPointerCapture(e.pointerId); } catch(err) {}
    }

    const docX = e.clientX + window.scrollX;
    const docY = e.clientY + window.scrollY;

    currentStroke = {
      tool: currentTool,
      color: currentColor,
      size: currentSize,
      points: [{ x: docX, y: docY }]
    };

    drawActiveStroke();
  }

  function handlePointerMove(e) {
    if (currentTool === 'laser') {
      updateLaserPosition(e.clientX, e.clientY);
      return;
    }

    if (!isDrawing || !currentStroke) return;
    e.preventDefault();

    const docX = e.clientX + window.scrollX;
    const docY = e.clientY + window.scrollY;
    currentStroke.points.push({ x: docX, y: docY });

    if (!drawRafId) {
      drawRafId = requestAnimationFrame(() => {
        drawActiveStroke();
        drawRafId = null;
      });
    }
  }

  function handlePointerUp(e) {
    if (currentTool === 'laser') {
      if (e.target && e.target.releasePointerCapture) {
        try { e.target.releasePointerCapture(e.pointerId); } catch(err) {}
      }
      return;
    }

    if (!isDrawing) return;
    isDrawing = false;

    if (e.target && e.target.releasePointerCapture) {
      try { e.target.releasePointerCapture(e.pointerId); } catch(err) {}
    }

    if (currentStroke && currentStroke.points.length > 0) {
      strokes.push(currentStroke);
      redoStack = [];
    }
    currentStroke = null;

    clearActiveCanvas();
    redrawBaseCanvas();
  }

  function handleWindowLaserMove(e) {
    if (currentTool === 'laser') {
      updateLaserPosition(e.clientX, e.clientY);
    }
  }

  function updateLaserPosition(clientX, clientY) {
    const dot = document.getElementById('laserPointerDot');
    if (!dot) return;
    dot.style.display = 'block';
    dot.style.transform = `translate3d(${clientX}px, ${clientY}px, 0) translate(-50%, -50%)`;
  }

  function handleLaserClick(e) {
    if (currentTool !== 'laser') return;
    const toolbar = document.getElementById('teacherToolbar');
    if (toolbar && toolbar.contains(e.target)) return;
    triggerLaserRipple(e.clientX, e.clientY, currentColor);
  }

  function triggerLaserRipple(clientX, clientY, color) {
    const ripple = document.createElement('div');
    ripple.className = 'laser-ripple';
    ripple.style.setProperty('--rx', clientX + 'px');
    ripple.style.setProperty('--ry', clientY + 'px');
    ripple.style.borderColor = color || currentColor;
    document.body.appendChild(ripple);

    setTimeout(() => {
      if (ripple.parentNode) ripple.parentNode.removeChild(ripple);
    }, 600);
  }

  // --- TOOLBAR CONTROLS ---
  function setAnnotationTool(tool) {
    currentTool = tool;
    const container = document.getElementById('annotationContainer');
    const dot = document.getElementById('laserPointerDot');

    const toolButtons = document.querySelectorAll('.tb-btn[id^="tool-"]');
    toolButtons.forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.getElementById('tool-' + tool);
    if (activeBtn) activeBtn.classList.add('active');

    isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    if (container) {
      container.classList.remove('active-drawing', 'active-laser', 'cursor-pen', 'cursor-highlighter', 'cursor-eraser');

      if (tool === 'pen') {
        container.classList.add('active-drawing', 'cursor-pen');
        if (dot) dot.style.display = 'none';
        showToast("✏️ Pen Tool Active (Freehand writing)");
      } else if (tool === 'highlighter') {
        container.classList.add('active-drawing', 'cursor-highlighter');
        if (dot) dot.style.display = 'none';
        showToast("🖊️ Highlighter Active");
      } else if (tool === 'eraser') {
        container.classList.add('active-drawing', 'cursor-eraser');
        if (dot) dot.style.display = 'none';
        showToast("🧹 Eraser Tool Active");
      } else if (tool === 'laser') {
        if (isTouchDevice) container.classList.add('active-laser');
        if (dot) dot.style.display = 'block';
        showToast("🔴 Laser Pointer Active");
      } else {
        if (dot) dot.style.display = 'none';
        showToast("👆 Normal Cursor Active");
      }
    }

    if (dot) {
      if (currentColor === '#00E676') dot.classList.add('green-laser');
      else dot.classList.remove('green-laser');
    }
  }

  function setAnnotationColor(color, swatchEl) {
    currentColor = color;

    const swatches = document.querySelectorAll('.tb-color-swatch');
    swatches.forEach(s => s.classList.remove('active'));
    if (swatchEl) swatchEl.classList.add('active');

    const dot = document.getElementById('laserPointerDot');
    if (dot) {
      if (color === '#00E676') {
        dot.classList.add('green-laser');
        dot.style.boxShadow = '0 0 6px #00E676, 0 0 14px #00E676, 0 0 26px #00E676, 0 0 40px #00C853';
      } else {
        dot.classList.remove('green-laser');
        dot.style.boxShadow = `0 0 6px ${color}, 0 0 14px ${color}, 0 0 26px ${color}`;
      }
    }

    if (currentTool === 'cursor' || currentTool === 'eraser') {
      setAnnotationTool('pen');
    }
  }

  function setAnnotationSize(size, btnEl) {
    currentSize = size;
    const sizeBtns = document.querySelectorAll('.tb-size-btn');
    sizeBtns.forEach(b => b.classList.remove('active'));
    if (btnEl) btnEl.classList.add('active');
  }

  function undoAnnotation() {
    if (strokes.length === 0) {
      showToast("Nothing to undo!");
      return;
    }
    const last = strokes.pop();
    redoStack.push(last);
    redrawBaseCanvas();
    showToast("↩️ Undone last stroke");
  }

  function redoAnnotation() {
    if (redoStack.length === 0) {
      showToast("Nothing to redo!");
      return;
    }
    const restored = redoStack.pop();
    strokes.push(restored);
    redrawBaseCanvas();
    showToast("↪️ Redone stroke");
  }

  function clearAnnotationCanvas() {
    if (strokes.length === 0) {
      showToast("Canvas is already clear!");
      return;
    }
    redoStack = [...strokes];
    strokes = [];
    redrawBaseCanvas();
    clearActiveCanvas();
    showToast("🗑️ Canvas cleared! (Undo to restore)");
  }

  function toggleCanvasVisibility() {
    isCanvasVisible = !isCanvasVisible;
    const btn = document.getElementById('btnToggleVis');
    if (btn) {
      btn.innerHTML = isCanvasVisible ? '👁️<span class="tb-tooltip">Hide Drawings</span>' : '🙈<span class="tb-tooltip">Show Drawings</span>';
    }
    redrawBaseCanvas();
    showToast(isCanvasVisible ? "👁️ Drawings Visible" : "🙈 Drawings Hidden");
  }

  function toggleAnnotationToolbar() {
    const toolbar = document.getElementById('teacherToolbar');
    const launcher = document.getElementById('teacherPillLauncher');
    if (!toolbar) return;

    const isMin = toolbar.classList.contains('minimized');
    if (isMin) {
      toolbar.classList.remove('minimized');
      if (launcher) launcher.classList.add('hidden');
      if (currentTool === 'cursor') setAnnotationTool('laser');
    } else {
      toolbar.classList.add('minimized');
      if (launcher) launcher.classList.remove('hidden');
      setAnnotationTool('cursor');
    }
  }

  // --- DRAGGABLE TOOLBAR ---
  function initToolbarDrag() {
    const tb = document.getElementById('teacherToolbar');
    const handle = tb ? tb.querySelector('.tb-drag-handle') : null;
    if (!tb || !handle) return;

    let isDragging = false;
    let startX = 0, startY = 0;
    let tbStartX = 0, tbStartY = 0;

    handle.addEventListener('pointerdown', (e) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      const rect = tb.getBoundingClientRect();
      tbStartX = rect.left;
      tbStartY = rect.top;
      tb.style.transition = 'none';
      handle.setPointerCapture(e.pointerId);
    });

    window.addEventListener('pointermove', (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      tb.style.left = `${tbStartX + dx + tb.offsetWidth / 2}px`;
      tb.style.top = `${tbStartY + dy}px`;
      tb.style.bottom = 'auto';
      tb.style.transform = 'translateX(-50%)';
    });

    window.addEventListener('pointerup', (e) => {
      if (!isDragging) return;
      isDragging = false;
      tb.style.transition = '';
      try { handle.releasePointerCapture(e.pointerId); } catch(err) {}
    });
  }

  // --- KEYBOARD SHORTCUTS ---
  function handleAnnotationShortcuts(e) {
    // Ignore when typing inside inputs or contenteditables
    if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName) || e.target.isContentEditable) {
      return;
    }

    if (e.altKey && (e.key === 'p' || e.key === 'P')) {
      e.preventDefault();
      toggleAnnotationToolbar();
      return;
    }

    if (e.key === 'Escape') {
      if (document.body.classList.contains('presentation-mode')) {
        togglePresentationMode();
        return;
      }
      const tb = document.getElementById('teacherToolbar');
      if (tb && !tb.classList.contains('minimized')) {
        toggleAnnotationToolbar();
        return;
      }
    }

    if (!e.ctrlKey && !e.metaKey && !e.altKey) {
      if (e.key === '1') setAnnotationTool('cursor');
      else if (e.key === '2') setAnnotationTool('laser');
      else if (e.key === '3') setAnnotationTool('pen');
      else if (e.key === '4') setAnnotationTool('highlighter');
      else if (e.key === '5') setAnnotationTool('eraser');
      else if (e.key === 'c' || e.key === 'C') clearAnnotationCanvas();
    }

    if ((e.ctrlKey || e.metaKey) && (e.key === 'z' || e.key === 'Z')) {
      e.preventDefault();
      undoAnnotation();
    }
    if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || e.key === 'Y')) {
      e.preventDefault();
      redoAnnotation();
    }

    // Presentation Mode Navigation via Keys
    if (document.body.classList.contains('presentation-mode')) {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        e.preventDefault();
        navigatePresentation(1);
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        navigatePresentation(-1);
      }
    }
  }

  // --- PRESENTATION MODE CONTROLLER ---
  function collectPresentationSections() {
    // Collect potential presentation sections on current page
    const selectors = [
      '.topic-section',
      '.curriculum-topic-card',
      '#slide-canvas',
      '.slide-stage',
      '.topic-card',
      '.unit-card',
      'main > section',
      'article',
      '.course-card'
    ];
    let sections = [];
    for (const sel of selectors) {
      const found = Array.from(document.querySelectorAll(sel));
      if (found.length > 1) {
        sections = found;
        break;
      }
    }

    // Fallback: collect major headings or sections
    if (sections.length === 0) {
      sections = Array.from(document.querySelectorAll('section, h2, h3'));
    }

    presentationSections = sections.filter(el => el.offsetParent !== null);
    if (presentationSections.length === 0) {
      presentationSections = [document.body];
    }
    updatePresentationProgress();
  }

  function updatePresentationProgress() {
    const progressEl = document.getElementById('presProgress');
    if (!progressEl) return;
    const total = Math.max(1, presentationSections.length);
    const curr = Math.min(total, presentationIndex + 1);
    progressEl.innerText = `Topic ${curr} of ${total}`;
  }

  function navigatePresentation(dir) {
    if (presentationSections.length === 0) collectPresentationSections();
    presentationIndex += dir;
    if (presentationIndex < 0) presentationIndex = 0;
    if (presentationIndex >= presentationSections.length) {
      presentationIndex = presentationSections.length - 1;
    }

    const target = presentationSections[presentationIndex];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Visual accent pulse
      target.style.transition = 'box-shadow 0.4s ease';
      target.style.boxShadow = '0 0 0 4px #38BDF8, 0 16px 40px rgba(56, 189, 248, 0.25)';
      setTimeout(() => {
        target.style.boxShadow = '';
      }, 1200);
    }
    updatePresentationProgress();
  }

  function togglePresentationMode() {
    document.body.classList.toggle('presentation-mode');
    const isPres = document.body.classList.contains('presentation-mode');

    // Update all Presentation buttons in navbar
    const presBtns = document.querySelectorAll('#presModeBtn, .btn-presentation, [data-pres-toggle]');
    presBtns.forEach(btn => {
      btn.innerHTML = isPres ? '✖ Exit Presentation' : '📽 Presentation Mode';
      if (isPres) {
        btn.classList.add('active-pres');
      } else {
        btn.classList.remove('active-pres');
      }
    });

    if (isPres) {
      collectPresentationSections();
      if (presentationSections.length > 0) {
        presentationIndex = 0;
        navigatePresentation(0);
      }
      showToast("📽 Presentation Mode Active (Use Left/Right Arrows or Esc)");

      // Request browser fullscreen if allowed
      if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      }
    } else {
      showToast("Exited Presentation Mode");
      if (document.exitFullscreen && document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    }
  }

  // --- INITIALIZATION ---
  let isInitialized = false;
  function init() {
    if (isInitialized) return;
    isInitialized = true;

    ensureDOMMounts();

    const container = document.getElementById('annotationContainer');
    if (!container) return;

    isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

    window.addEventListener('resize', resizeCanvases);
    window.addEventListener('orientationchange', resizeCanvases);
    resizeCanvases();

    window.addEventListener('scroll', handleViewportScroll, { passive: true });

    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    window.addEventListener('pointercancel', handlePointerUp);

    window.addEventListener('pointermove', handleWindowLaserMove);
    window.addEventListener('click', handleLaserClick);
    window.addEventListener('keydown', handleAnnotationShortcuts);

    initToolbarDrag();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose global API
  window.PresentationTools = {
    init: init,
    setAnnotationTool: setAnnotationTool,
    setAnnotationColor: setAnnotationColor,
    setAnnotationSize: setAnnotationSize,
    undoAnnotation: undoAnnotation,
    redoAnnotation: redoAnnotation,
    clearAnnotationCanvas: clearAnnotationCanvas,
    toggleCanvasVisibility: toggleCanvasVisibility,
    toggleAnnotationToolbar: toggleAnnotationToolbar,
    togglePresentationMode: togglePresentationMode,
    navigatePresentation: navigatePresentation
  };

  // Expose standard laser suite functions globally for seamless backward compatibility
  window.toggleAnnotationToolbar = toggleAnnotationToolbar;
  window.togglePresentationMode = togglePresentationMode;
  window.setAnnotationTool = setAnnotationTool;
  window.setAnnotationColor = setAnnotationColor;
  window.setAnnotationSize = setAnnotationSize;
  window.undoAnnotation = undoAnnotation;
  window.redoAnnotation = redoAnnotation;
  window.clearAnnotationCanvas = clearAnnotationCanvas;
  window.toggleCanvasVisibility = toggleCanvasVisibility;

})(window);
