// import { keyArr } from './clicksHandler.js';
// import { capsHandler } from './CapsLock.js';

export const keyDown = document.addEventListener('keydown', (event) => {
  const keyCode = event.code;

  const virtualKey = document.querySelector(`.key[data-code="${keyCode}"]`);
  console.log(virtualKey)
  if (virtualKey) {
    virtualKey.classList.add('active');
  }
  // if (event.shiftKey && event.key === 'ShiftRight') {
    
  // }
});

export const keyUp = document.addEventListener('keyup', (event) => {
  const keyCode = event.code;
  const virtualKey = document.querySelector(`.key[data-code="${keyCode}"]`);
  if (virtualKey) {
    virtualKey.classList.remove('active');
  }
});
