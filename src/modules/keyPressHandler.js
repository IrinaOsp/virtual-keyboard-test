// import { keyArr } from './clicksHandler.js';
// import { capsHandler } from './CapsLock.js';
import { textArea } from './clicksHandler.js';


export const keyDown = document.addEventListener('keydown', (event) => {
  const keyCode = event.code;

  const virtualKey = document.querySelector(`.key[data-code="${keyCode}"]`);
  if (virtualKey) {
    virtualKey.classList.add('active');
    if (virtualKey.textContent === virtualKey.textContent.toUpperCase()) {
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
