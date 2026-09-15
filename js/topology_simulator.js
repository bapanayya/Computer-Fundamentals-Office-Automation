/**
 * Computer-Fund-OfficeAutomat-SVAGDC: Interactive Network Topology Simulator
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function(window) {
  'use strict';

  class TopologySimulator {
    constructor(containerId) {
      this.container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
      this.currentTopology = 'star';
      this.animating = false;
      this.packetProgress = 0;
      this.brokenNodeIndex = -1; // -1 means all healthy
      this.render();
    }

    render() {
      if (!this.container) return;

      this.container.innerHTML = `
        <div class="topology-container">
          <div class="topology-controls-bar">
            <div class="topology-pills">
              <button type="button" class="topology-pill ${this.currentTopology === 'star' ? 'active' : ''}" data-topo="star">
                <i class="fa-solid fa-asterisk"></i> Star Topology
              </button>
              <button type="button" class="topology-pill ${this.currentTopology === 'bus' ? 'active' : ''}" data-topo="bus">
                <i class="fa-solid fa-arrows-left-right"></i> Bus Topology
              </button>
              <button type="button" class="topology-pill ${this.currentTopology === 'ring' ? 'active' : ''}" data-topo="ring">
                <i class="fa-solid fa-circle-notch"></i> Ring Topology
              </button>
              <button type="button" class="topology-pill ${this.currentTopology === 'mesh' ? 'active' : ''}" data-topo="mesh">
                <i class="fa-solid fa-network-wired"></i> Mesh Topology
              </button>
            </div>

            <div class="tool-actions-group">
              <button type="button" class="tool-btn tool-btn-primary" id="btn_transmit_packet">
                <i class="fa-solid fa-paper-plane"></i> Transmit Packet
              </button>
              <button type="button" class="tool-btn" id="btn_toggle_fault">
                <i class="fa-solid fa-bolt-lightning"></i> ${this.brokenNodeIndex === -1 ? 'Simulate Fault' : 'Repair Fault'}
              </button>
            </div>
          </div>

          <div class="topology-canvas-wrapper">
            <canvas class="topology-canvas" id="topo_canvas" width="760" height="360"></canvas>
          </div>

          <div class="topology-info-panel" id="topo_info_panel">
            ${this.getTopologyInfoHTML(this.currentTopology)}
          </div>
        </div>
      `;

      this.canvas = this.container.querySelector('#topo_canvas');
      this.ctx = this.canvas.getContext('2d');
      this.attachEvents();
      this.draw();
    }

    getTopologyInfoHTML(topo) {
      const data = {
        star: {
          title: 'Star Topology (Central Switch / Hub Architecture)',
          pros: 'Easy to install & wire; single node failure does not affect the rest of the network.',
          cons: 'High dependency on central device (if central switch fails, the entire network goes down).',
          cabling: 'Requires individual cable runs (UTP Cat6) from switch to each node.'
        },
        bus: {
          title: 'Bus Topology (Single Backbone Cable Architecture)',
          pros: 'Economical, uses minimum cable length, easy to connect workstations.',
          cons: 'A break in the central backbone cable halts all communication; difficult fault isolation.',
          cabling: 'Single linear coaxial backbone with BNC T-connectors and 50-ohm terminators at each end.'
        },
        ring: {
          title: 'Ring Topology (Token Passing Loop Architecture)',
          pros: 'Predictable performance under heavy loads; equal network access for all nodes.',
          cons: 'Unidirectional ring: failure of any single computer breaks the loop unless Dual Ring (FDDI) is used.',
          cabling: 'Point-to-point connections forming a closed continuous circular pathway.'
        },
        mesh: {
          title: 'Mesh Topology (Fully Redundant Interconnected Architecture)',
          pros: 'Highest fault tolerance; dedicated links prevent traffic congestion and guarantee maximum privacy.',
          cons: 'Extremely high cabling cost and complex installation: requires n(n-1)/2 physical channels.',
          cabling: 'Every single computer is directly wired to every other computer in the network.'
        }
      };

      const info = data[topo];
      return `
        <div>
          <strong style="color: var(--primary); font-size: 0.95rem;">${info.title}</strong>
          <p style="margin-top: 0.35rem; color: var(--text-secondary);">${info.cabling}</p>
        </div>
        <div>
          <strong style="color: var(--accent-emerald);"><i class="fa-solid fa-circle-check"></i> Advantages:</strong>
          <p style="margin-top: 0.2rem; color: var(--text-muted);">${info.pros}</p>
        </div>
        <div>
          <strong style="color: var(--accent-rose);"><i class="fa-solid fa-triangle-exclamation"></i> Limitations:</strong>
          <p style="margin-top: 0.2rem; color: var(--text-muted);">${info.cons}</p>
        </div>
      `;
    }

    draw() {
      if (!this.ctx) return;
      const ctx = this.ctx;
      const w = this.canvas.width;
      const h = this.canvas.height;

      ctx.clearRect(0, 0, w, h);

      // Background subtle grid
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.15)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 30) {
        ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
      }
      for (let y = 0; y < h; y += 30) {
        ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
      }

      if (this.currentTopology === 'star') {
        this.drawStar(ctx, w, h);
      } else if (this.currentTopology === 'bus') {
        this.drawBus(ctx, w, h);
      } else if (this.currentTopology === 'ring') {
        this.drawRing(ctx, w, h);
      } else if (this.currentTopology === 'mesh') {
        this.drawMesh(ctx, w, h);
      }
    }

    drawStar(ctx, w, h) {
      const cx = w / 2;
      const cy = h / 2;
      const radius = 120;
      const nodeCount = 5;
      const nodes = [];

      for (let i = 0; i < nodeCount; i++) {
        const angle = (i * 2 * Math.PI / nodeCount) - Math.PI / 2;
        nodes.push({
          x: cx + radius * Math.cos(angle),
          y: cy + radius * Math.sin(angle),
          name: `Node ${String.fromCharCode(65 + i)}`,
          fault: i === this.brokenNodeIndex
        });
      }

      // Draw links from central switch to each node
      nodes.forEach((node, i) => {
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(node.x, node.y);
        ctx.strokeStyle = node.fault ? '#ef4444' : '#3b82f6';
        ctx.lineWidth = node.fault ? 2 : 2.5;
        if (node.fault) ctx.setLineDash([6, 4]);
        else ctx.setLineDash([]);
        ctx.stroke();
        ctx.setLineDash([]);
      });

      // Central Switch
      ctx.fillStyle = '#1e3a8a';
      ctx.beginPath();
      ctx.arc(cx, cy, 28, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#60a5fa';
      ctx.lineWidth = 3;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('SWITCH', cx, cy);

      // Workstations
      nodes.forEach((node) => {
        this.drawWorkstation(ctx, node.x, node.y, node.name, node.fault);
      });

      // Animate packet along Node A -> Switch -> Node C
      if (this.animating) {
        const src = nodes[0];
        const dest = nodes[2];
        let px, py;
        if (this.packetProgress <= 0.5) {
          const t = this.packetProgress * 2;
          px = src.x + (cx - src.x) * t;
          py = src.y + (cy - src.y) * t;
        } else {
          const t = (this.packetProgress - 0.5) * 2;
          px = cx + (dest.x - cx) * t;
          py = cy + (dest.y - cy) * t;
        }
        this.drawPacket(ctx, px, py);
      }
    }

    drawBus(ctx, w, h) {
      const y = h / 2;
      const startX = 70;
      const endX = w - 70;
      const nodeCount = 5;

      // Backbone cable
      ctx.beginPath();
      ctx.moveTo(startX, y);
      ctx.lineTo(endX, y);
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 6;
      ctx.stroke();

      // Terminators
      this.drawTerminator(ctx, startX, y, 'Terminator 50Ω');
      this.drawTerminator(ctx, endX, y, 'Terminator 50Ω');

      const spacing = (endX - startX) / (nodeCount + 1);
      const nodes = [];

      for (let i = 0; i < nodeCount; i++) {
        const nx = startX + spacing * (i + 1);
        const isUp = i % 2 === 0;
        const ny = isUp ? y - 80 : y + 80;

        nodes.push({
          x: nx,
          y: ny,
          busX: nx,
          busY: y,
          name: `Node ${String.fromCharCode(65 + i)}`,
          fault: i === this.brokenNodeIndex
        });

        // Drop line
        ctx.beginPath();
        ctx.moveTo(nx, y);
        ctx.lineTo(nx, ny);
        ctx.strokeStyle = i === this.brokenNodeIndex ? '#ef4444' : '#0284c7';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        this.drawWorkstation(ctx, nx, ny, `Node ${String.fromCharCode(65 + i)}`, i === this.brokenNodeIndex);
      }

      // Animate packet
      if (this.animating) {
        const px = startX + (endX - startX) * this.packetProgress;
        this.drawPacket(ctx, px, y);
      }
    }

    drawRing(ctx, w, h) {
      const cx = w / 2;
      const cy = h / 2;
      const radius = 110;
      const nodeCount = 5;
      const nodes = [];

      for (let i = 0; i < nodeCount; i++) {
        const angle = (i * 2 * Math.PI / nodeCount) - Math.PI / 2;
        nodes.push({
          x: cx + radius * Math.cos(angle),
          y: cy + radius * Math.sin(angle),
          name: `Node ${String.fromCharCode(65 + i)}`,
          fault: i === this.brokenNodeIndex
        });
      }

      // Draw continuous ring loop
      for (let i = 0; i < nodeCount; i++) {
        const next = nodes[(i + 1) % nodeCount];
        ctx.beginPath();
        ctx.moveTo(nodes[i].x, nodes[i].y);
        ctx.lineTo(next.x, next.y);
        ctx.strokeStyle = (nodes[i].fault || next.fault) ? '#ef4444' : '#2563eb';
        ctx.lineWidth = 3;
        ctx.stroke();
      }

      nodes.forEach(node => {
        this.drawWorkstation(ctx, node.x, node.y, node.name, node.fault);
      });

      // Animate token along the circumference
      if (this.animating) {
        const currentAngle = (this.packetProgress * 2 * Math.PI) - Math.PI / 2;
        const px = cx + radius * Math.cos(currentAngle);
        const py = cy + radius * Math.sin(currentAngle);
        this.drawPacket(ctx, px, py);
      }
    }

    drawMesh(ctx, w, h) {
      const cx = w / 2;
      const cy = h / 2;
      const radius = 115;
      const nodeCount = 5;
      const nodes = [];

      for (let i = 0; i < nodeCount; i++) {
        const angle = (i * 2 * Math.PI / nodeCount) - Math.PI / 2;
        nodes.push({
          x: cx + radius * Math.cos(angle),
          y: cy + radius * Math.sin(angle),
          name: `Node ${String.fromCharCode(65 + i)}`,
          fault: i === this.brokenNodeIndex
        });
      }

      // Draw full mesh connections: n(n-1)/2 = 10 lines
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          const isFaulty = nodes[i].fault || nodes[j].fault;
          ctx.strokeStyle = isFaulty ? 'rgba(239, 68, 68, 0.4)' : 'rgba(37, 99, 235, 0.5)';
          ctx.lineWidth = 1.5;
          ctx.stroke();
        }
      }

      nodes.forEach(node => {
        this.drawWorkstation(ctx, node.x, node.y, node.name, node.fault);
      });

      // Animate packet along direct dedicated link A -> C
      if (this.animating) {
        const src = nodes[0];
        const dest = nodes[2];
        const px = src.x + (dest.x - src.x) * this.packetProgress;
        const py = src.y + (dest.y - src.y) * this.packetProgress;
        this.drawPacket(ctx, px, py);
      }
    }

    drawWorkstation(ctx, x, y, name, isFault) {
      ctx.fillStyle = isFault ? '#ef4444' : '#ffffff';
      ctx.strokeStyle = isFault ? '#991b1b' : '#2563eb';
      ctx.lineWidth = 2.5;

      // Monitor Screen
      ctx.beginPath();
      ctx.roundRect(x - 20, y - 16, 40, 26, 4);
      ctx.fill();
      ctx.stroke();

      // Stand
      ctx.beginPath();
      ctx.moveTo(x - 5, y + 10);
      ctx.lineTo(x + 5, y + 10);
      ctx.moveTo(x, y + 10);
      ctx.lineTo(x, y + 15);
      ctx.moveTo(x - 12, y + 15);
      ctx.lineTo(x + 12, y + 15);
      ctx.stroke();

      // Text label
      ctx.fillStyle = isFault ? '#ef4444' : '#0f172a';
      ctx.font = 'bold 11px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.fillText(name + (isFault ? ' (FAULT)' : ''), x, y + 20);
    }

    drawTerminator(ctx, x, y, label) {
      ctx.fillStyle = '#475569';
      ctx.fillRect(x - 6, y - 14, 12, 28);
      ctx.strokeStyle = '#0f172a';
      ctx.lineWidth = 1.5;
      ctx.strokeRect(x - 6, y - 14, 12, 28);
    }

    drawPacket(ctx, x, y) {
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(x, y, 7, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.stroke();
    }

    transmitPacket() {
      if (this.animating) return;
      this.animating = true;
      this.packetProgress = 0;

      const step = () => {
        this.packetProgress += 0.02;
        this.draw();

        if (this.packetProgress < 1) {
          requestAnimationFrame(step);
        } else {
          this.animating = false;
          this.draw();
        }
      };
      requestAnimationFrame(step);
    }

    toggleFault() {
      this.brokenNodeIndex = this.brokenNodeIndex === -1 ? 1 : -1; // Toggle Node B fault
      const btn = this.container.querySelector('#btn_toggle_fault');
      if (btn) {
        btn.innerHTML = `<i class="fa-solid fa-bolt-lightning"></i> ${this.brokenNodeIndex === -1 ? 'Simulate Fault' : 'Repair Fault'}`;
      }
      this.draw();
    }

    attachEvents() {
      this.container.querySelectorAll('.topology-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          this.currentTopology = btn.getAttribute('data-topo');
          this.container.querySelectorAll('.topology-pill').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const panel = this.container.querySelector('#topo_info_panel');
          if (panel) panel.innerHTML = this.getTopologyInfoHTML(this.currentTopology);
          this.draw();
        });
      });

      const transmitBtn = this.container.querySelector('#btn_transmit_packet');
      if (transmitBtn) {
        transmitBtn.addEventListener('click', () => this.transmitPacket());
      }

      const faultBtn = this.container.querySelector('#btn_toggle_fault');
      if (faultBtn) {
        faultBtn.addEventListener('click', () => this.toggleFault());
      }
    }
  }

  window.TopologySimulatorEngine = {
    mount: (containerId) => new TopologySimulator(containerId)
  };

})(window);
