/**
 * Computer-Fund-OfficeAutomat-SVAGDC: Interactive Number System Converter & Complement Engine
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function(window) {
  'use strict';

  class NumberSystemConverter {
    constructor(containerId) {
      this.container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
      this.currentDecimal = 42;
      this.bitWidth = 8;
      this.render();
    }

    render() {
      if (!this.container) return;

      this.container.innerHTML = `
        <div class="converter-container">
          <div class="converter-grid">
            <div class="radix-card" data-radix="10">
              <div class="radix-header">
                <span class="radix-name"><i class="fa-solid fa-calculator"></i> Decimal</span>
                <span class="radix-base-badge">Base 10</span>
              </div>
              <input type="text" class="radix-input" id="radix_dec" value="${this.currentDecimal}" placeholder="e.g. 42">
            </div>

            <div class="radix-card" data-radix="2">
              <div class="radix-header">
                <span class="radix-name"><i class="fa-solid fa-microchip"></i> Binary</span>
                <span class="radix-base-badge">Base 2</span>
              </div>
              <input type="text" class="radix-input" id="radix_bin" value="${this.currentDecimal.toString(2)}" placeholder="e.g. 101010">
            </div>

            <div class="radix-card" data-radix="8">
              <div class="radix-header">
                <span class="radix-name"><i class="fa-solid fa-cubes"></i> Octal</span>
                <span class="radix-base-badge">Base 8</span>
              </div>
              <input type="text" class="radix-input" id="radix_oct" value="${this.currentDecimal.toString(8)}" placeholder="e.g. 52">
            </div>

            <div class="radix-card" data-radix="16">
              <div class="radix-header">
                <span class="radix-name"><i class="fa-solid fa-hashtag"></i> Hexadecimal</span>
                <span class="radix-base-badge">Base 16</span>
              </div>
              <input type="text" class="radix-input" id="radix_hex" value="${this.currentDecimal.toString(16).toUpperCase()}" placeholder="e.g. 2A">
            </div>
          </div>

          <!-- Complements & Signed Binary Representation Panel -->
          <div class="converter-complement-panel">
            <div class="complement-box">
              <span class="complement-label"><i class="fa-solid fa-code-compare"></i> 8-Bit Unsigned Binary</span>
              <span class="complement-val" id="comp_unsigned_bin">${this.getFormattedBinary(this.currentDecimal, 8)}</span>
            </div>
            <div class="complement-box">
              <span class="complement-label"><i class="fa-solid fa-arrow-right-arrow-left"></i> 1's Complement (Bitwise Inversion)</span>
              <span class="complement-val" id="comp_ones">${this.getOnesComplement(this.currentDecimal, 8)}</span>
            </div>
            <div class="complement-box">
              <span class="complement-label"><i class="fa-solid fa-circle-check"></i> 2's Complement (1's Comp + 1)</span>
              <span class="complement-val" id="comp_twos">${this.getTwosComplement(this.currentDecimal, 8)}</span>
            </div>
          </div>

          <!-- Step-by-Step Educational Explanation Box -->
          <div class="converter-steps-box" id="converter_steps_box">
            ${this.generateStepExplanation(this.currentDecimal)}
          </div>
        </div>
      `;

      this.attachEvents();
    }

    getFormattedBinary(dec, bits) {
      if (isNaN(dec) || dec < 0) return 'N/A';
      let bin = (dec >>> 0).toString(2);
      while (bin.length < bits) bin = '0' + bin;
      return bin.length > bits ? bin.slice(-bits) : bin;
    }

    getOnesComplement(dec, bits) {
      const bin = this.getFormattedBinary(dec, bits);
      return bin.split('').map(b => b === '0' ? '1' : '0').join('');
    }

    getTwosComplement(dec, bits) {
      const ones = this.getOnesComplement(dec, bits);
      const val = parseInt(ones, 2) + 1;
      return this.getFormattedBinary(val, bits);
    }

    generateStepExplanation(dec) {
      if (isNaN(dec)) return 'Enter a valid positive integer to view the mathematical derivation steps.';
      
      const bin = dec.toString(2);
      const oct = dec.toString(8);
      const hex = dec.toString(16).toUpperCase();

      // Division by 2 steps
      let temp = dec;
      const divSteps = [];
      while (temp > 0) {
        const q = Math.floor(temp / 2);
        const r = temp % 2;
        divSteps.push(`${temp} ÷ 2 = ${q} (Remainder: ${r})`);
        temp = q;
      }

      // Polynomial expansion for binary to decimal
      const polyTerms = [];
      for (let i = 0; i < bin.length; i++) {
        const bit = bin[i];
        const power = bin.length - 1 - i;
        polyTerms.push(`(${bit} &times; 2<sup>${power}</sup>)`);
      }

      return `
        <strong><i class="fa-solid fa-graduation-cap"></i> Step-by-Step Mathematical Derivation for Decimal ${dec}:</strong><br>
        <div style="margin-top: 0.5rem;">
          <strong>1. Decimal to Binary via Repeated Division by 2:</strong><br>
          ${divSteps.length > 0 ? divSteps.join('<br>') : '0 ÷ 2 = 0 (Remainder: 0)'}<br>
          <em>Reading remainders from bottom to top:</em> <strong>(${bin})₂</strong>
        </div>
        <div style="margin-top: 0.75rem;">
          <strong>2. Binary to Decimal Verification via Positional Powers:</strong><br>
          ${polyTerms.join(' + ')} = <strong>${dec}₁₀</strong>
        </div>
        <div style="margin-top: 0.75rem;">
          <strong>3. Direct Grouping Transformations:</strong><br>
          • <strong>Octal (Base 8):</strong> Group binary into 3-bit clusters: <em>(${bin})₂ = (${oct})₈</em><br>
          • <strong>Hexadecimal (Base 16):</strong> Group binary into 4-bit nibbles: <em>(${bin})₂ = (${hex})₁₆</em>
        </div>
      `;
    }

    attachEvents() {
      const decInput = this.container.querySelector('#radix_dec');
      const binInput = this.container.querySelector('#radix_bin');
      const octInput = this.container.querySelector('#radix_oct');
      const hexInput = this.container.querySelector('#radix_hex');

      const updateAllFromDecimal = (val) => {
        this.currentDecimal = val;
        if (isNaN(val)) return;

        if (document.activeElement !== decInput) decInput.value = val;
        if (document.activeElement !== binInput) binInput.value = val.toString(2);
        if (document.activeElement !== octInput) octInput.value = val.toString(8);
        if (document.activeElement !== hexInput) hexInput.value = val.toString(16).toUpperCase();

        const unsigned = this.container.querySelector('#comp_unsigned_bin');
        const ones = this.container.querySelector('#comp_ones');
        const twos = this.container.querySelector('#comp_twos');
        const steps = this.container.querySelector('#converter_steps_box');

        if (unsigned) unsigned.textContent = this.getFormattedBinary(val, 8);
        if (ones) ones.textContent = this.getOnesComplement(val, 8);
        if (twos) twos.textContent = this.getTwosComplement(val, 8);
        if (steps) steps.innerHTML = this.generateStepExplanation(val);
      };

      if (decInput) {
        decInput.addEventListener('input', (e) => {
          const val = parseInt(e.target.value.trim(), 10);
          if (!isNaN(val)) updateAllFromDecimal(val);
        });
      }

      if (binInput) {
        binInput.addEventListener('input', (e) => {
          const clean = e.target.value.trim().replace(/[^01]/g, '');
          const val = parseInt(clean, 2);
          if (!isNaN(val)) updateAllFromDecimal(val);
        });
      }

      if (octInput) {
        octInput.addEventListener('input', (e) => {
          const clean = e.target.value.trim().replace(/[^0-7]/g, '');
          const val = parseInt(clean, 8);
          if (!isNaN(val)) updateAllFromDecimal(val);
        });
      }

      if (hexInput) {
        hexInput.addEventListener('input', (e) => {
          const clean = e.target.value.trim().replace(/[^0-9a-fA-F]/g, '');
          const val = parseInt(clean, 16);
          if (!isNaN(val)) updateAllFromDecimal(val);
        });
      }
    }
  }

  window.NumberConverterEngine = {
    mount: (containerId) => new NumberSystemConverter(containerId)
  };

})(window);
