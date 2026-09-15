/**
 * Computer-Fund-OfficeAutomat-SVAGDC: Interactive "Test Your Understanding" Quiz & Exercise Engine
 * Department of Physics, S.V.A. Govt. Degree College, Srikalahasti
 */

(function(window) {
  'use strict';

  function initQuiz(containerId, quizData) {
    const container = document.getElementById(containerId);
    if (!container || !quizData) return;

    const quizzes = Array.isArray(quizData) ? quizData : [quizData];
    if (quizzes.length === 0) return;

    let html = `
      <div class="quiz-header-bar">
        <div class="quiz-badge"><i class="fa-solid fa-graduation-cap"></i> Test Your Understanding</div>
        <span class="quiz-count-badge"><i class="fa-solid fa-list-check"></i> ${quizzes.length} Exercise${quizzes.length > 1 ? 's' : ''}</span>
      </div>
    `;

    quizzes.forEach((q, qIdx) => {
      html += `
        <div class="quiz-item-block" id="quiz_item_${containerId}_${qIdx}">
          <div class="quiz-q-num">Exercise ${qIdx + 1} of ${quizzes.length}</div>
          <div class="quiz-question">${q.question}</div>
      `;

      if (q.type === 'fill-in') {
        html += `
          <div class="quiz-code-prompt">
            ${q.codeTemplate}
          </div>
        `;
      } else if (q.type === 'multiple-choice') {
        html += `<div class="quiz-options">`;
        q.options.forEach((opt, idx) => {
          html += `
            <label class="quiz-option-label">
              <input type="radio" name="quiz_${containerId}_${qIdx}" value="${idx}">
              <span>${opt}</span>
            </label>
          `;
        });
        html += `</div>`;
      }

      html += `
          <div class="quiz-actions">
            <button class="btn-check-answer" id="check_${containerId}_${qIdx}">
              <i class="fa-solid fa-circle-check"></i> Check Answer
            </button>
            <button class="btn-show-solution" id="solution_${containerId}_${qIdx}">
              <i class="fa-regular fa-lightbulb"></i> Show Solution
            </button>
          </div>
          <div class="quiz-feedback" id="feedback_${containerId}_${qIdx}"></div>
        </div>
      `;
    });

    container.innerHTML = html;

    // Attach event listeners for each question
    quizzes.forEach((q, qIdx) => {
      const block = container.querySelector(`#quiz_item_${containerId}_${qIdx}`);
      const checkBtn = document.getElementById(`check_${containerId}_${qIdx}`);
      const solutionBtn = document.getElementById(`solution_${containerId}_${qIdx}`);
      const feedback = document.getElementById(`feedback_${containerId}_${qIdx}`);

      // Handle radio selection styling
      if (block) {
        const radios = block.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
          radio.addEventListener('change', () => {
            block.querySelectorAll('.quiz-option-label').forEach(lbl => lbl.classList.remove('selected'));
            radio.closest('.quiz-option-label')?.classList.add('selected');
          });
        });
      }

      if (checkBtn) {
        checkBtn.addEventListener('click', () => {
          let isCorrect = false;
          const explanation = q.explanation || '';

          if (q.type === 'fill-in') {
            const input = container.querySelector(`#quiz_item_${containerId}_${qIdx} input.quiz-fill-input`);
            if (input) {
              const val = input.value.trim();
              const correctVals = Array.isArray(q.answer) ? q.answer : [q.answer];
              isCorrect = correctVals.some(v => v.toLowerCase() === val.toLowerCase());
            }
          } else if (q.type === 'multiple-choice') {
            const selected = container.querySelector(`input[name="quiz_${containerId}_${qIdx}"]:checked`);
            if (selected) {
              isCorrect = parseInt(selected.value, 10) === q.correctIndex;
            } else {
              feedback.className = 'quiz-feedback incorrect';
              feedback.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i> <strong>Please select an answer choice first.</strong>';
              return;
            }
          }

          if (isCorrect) {
            feedback.className = 'quiz-feedback correct';
            feedback.innerHTML = `<strong><i class="fa-solid fa-circle-check"></i> Correct!</strong> ${explanation}`;
            if (window.NavigationTracker) {
              window.NavigationTracker.markCurrentTopicCompleted();
            }
          } else {
            feedback.className = 'quiz-feedback incorrect';
            feedback.innerHTML = `<strong><i class="fa-solid fa-circle-xmark"></i> Incorrect.</strong> Try again! Review the lesson section above or click "Show Solution" for details.`;
          }
        });
      }

      if (solutionBtn) {
        solutionBtn.addEventListener('click', () => {
          if (q.type === 'fill-in') {
            const expected = Array.isArray(q.answer) ? q.answer[0] : q.answer;
            feedback.className = 'quiz-feedback solution';
            feedback.innerHTML = `<strong><i class="fa-regular fa-lightbulb"></i> Correct Answer:</strong> <code>${expected}</code><br><span style="margin-top: 0.45rem; display: inline-block;">${q.explanation || ''}</span>`;
            const input = container.querySelector(`#quiz_item_${containerId}_${qIdx} input.quiz-fill-input`);
            if (input) input.value = expected;
          } else if (q.type === 'multiple-choice') {
            const correctOpt = q.options[q.correctIndex];
            feedback.className = 'quiz-feedback solution';
            feedback.innerHTML = `<strong><i class="fa-regular fa-lightbulb"></i> Correct Answer:</strong> ${correctOpt}<br><span style="margin-top: 0.45rem; display: inline-block;">${q.explanation || ''}</span>`;
            const radio = container.querySelector(`input[name="quiz_${containerId}_${qIdx}"][value="${q.correctIndex}"]`);
            if (radio) {
              radio.checked = true;
              block?.querySelectorAll('.quiz-option-label').forEach(lbl => lbl.classList.remove('selected'));
              radio.closest('.quiz-option-label')?.classList.add('selected');
            }
          }
        });
      }
    });
  }

  window.QuizEngine = {
    init: initQuiz
  };

})(window);
