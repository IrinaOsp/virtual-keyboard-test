import { keyArr } from './DOM'

export const textArea = document.querySelector('.textarea');

let cursorPosition = textArea.selectionStart;

const keyboardArea = document.querySelector('.keyboard');

keyboardArea.addEventListener('mousedown', event => {
  if (event.target !== textArea) {
    event.preventDefault();
    textArea.focus();
    //moves coursor after clicks on virtual buttons
    textArea.selectionStart = cursorPosition - 1;
    textArea.selectionEnd = cursorPosition - 1;
  }
});

export function clicksHandler() {
  keyArr.forEach(key => {
    key.addEventListener('mousedown', (event) => {
      if (!key.classList.contains('key_service')) {
        textArea.value += key.textContent;
      } else {
        switch (key.textContent) {
          case 'space':
            textArea.value += ' ';
            break;
          case 'backspace':
            textArea.value = textArea.value.substring(0, textArea.value.length-1);
            break;
          case 'tab':
            textArea.value += '\t';
            break;
          case 'enter':
            textArea.value += '\n';
            break;
          case 'shift':
            console.log('shift');
            break;
          case 'alt':
            console.log('alt');
            break;
          case 'ctrl':
            console.log('alt');
            break;
          case '⇐':
            if (textArea.selectionStart >= 1) {
              cursorPosition = textArea.selectionStart;
              textArea.selectionStart = cursorPosition - 1;
              textArea.selectionEnd = cursorPosition - 1;
            }
            break;
          case '⇒': //to be fixed
            if (textArea.selectionStart < textArea.value.length) {
              console.log(textArea.selectionStart)
              cursorPosition = textArea.selectionStart;
              textArea.selectionStart = cursorPosition + 1;
              textArea.selectionEnd = cursorPosition + 1;
              console.log(textArea.selectionStart)
            }
            break;
          case '⇑':
            console.log('up')
            break;
          case '⇓':
            console.log('down')
        }
      }
    });
  })
}
