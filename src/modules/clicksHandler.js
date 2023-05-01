import { keyArr } from './DOM.js';

export const textArea = document.querySelector('.textarea');

let cursorPosition = textArea.selectionStart;

const keyboardArea = document.querySelector('.keyboard');

keyboardArea.addEventListener('mousedown', (event) => {
  if (event.target !== textArea) {
    event.preventDefault();
    textArea.focus();
    textArea.selectionStart = cursorPosition - 1;
    textArea.selectionEnd = cursorPosition - 1;
  }
});

export function clicksHandler() {
  keyArr.forEach((key) => {
    key.addEventListener('mousedown', () => {
      if (!key.classList.contains('key_service')) {
        textArea.value += key.textContent;
      } else {
        switch (key.textContent) {
          case 'space':
            textArea.value += ' ';
            break;
          case 'backspace':
            textArea.value = textArea.value.substring(0, textArea.value.length - 1);
            break;
          case 'tab':
            textArea.value += '\t';
            break;
          case 'enter':
            textArea.value += '\n';
            break;
          case 'shift':
            break;
          case 'alt':
            break;
          case 'ctrl':
            break;
          case '⇐':
            if (textArea.selectionStart >= 1) {
              cursorPosition = textArea.selectionStart;
              textArea.selectionStart = cursorPosition - 1;
              textArea.selectionEnd = cursorPosition - 1;
            }
            break;
          case '⇒': // to be fixed
            if (textArea.selectionStart < textArea.value.length) {
              cursorPosition = textArea.selectionStart;
              textArea.selectionStart = cursorPosition + 1;
              textArea.selectionEnd = cursorPosition + 1;
            }
            break;
          case '⇑':
            break;
          case '⇓':
            break;
          default: break;
        }
      }
    });
  });
}
