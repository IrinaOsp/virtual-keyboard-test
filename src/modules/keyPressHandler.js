import { textArea } from './clicksHandler.js';

export const keyDown = document.addEventListener('keydown', (event) => {
  const keyCode = event.code;
  const virtualKey = document.querySelector(`.key[data-code="${keyCode}"]`);
  if (virtualKey) {
    virtualKey.classList.add('active');
    if (!virtualKey.classList.contains('key_service')) {
      event.preventDefault();
      textArea.value += virtualKey.textContent;
    }
  }
});

export const keyUp = document.addEventListener('keyup', (event) => {
  const keyCode = event.code;
  const virtualKey = document.querySelector(`.key[data-code="${keyCode}"]`);
  if (virtualKey) {
    virtualKey.classList.remove('active');
  }
});
