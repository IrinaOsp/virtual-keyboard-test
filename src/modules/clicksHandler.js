export const textArea = document.querySelector('.textarea');
let cursorPosition = textArea.selectionStart;

const keyboardArea = document.querySelector('.keyboard');
keyboardArea.addEventListener("mousedown", function(event) {
  if (event.target !== textArea) {
    event.preventDefault();
    textArea.focus();
    textArea.selectionStart = cursorPosition - 1;
    textArea.selectionEnd = cursorPosition - 1;
  }
});

export function clicksHandler() {
  let keyArr = document.querySelectorAll('.key'); //массив клавиш
  keyArr.forEach(key => {
    key.addEventListener('mousedown', () => {
      if (!key.classList.contains('key_service')) {
        textArea.textContent += key.textContent;
      } else {
        switch (key.textContent) {
          case 'space':
            textArea.textContent += ' ';
            break;
          case 'backspace':
            textArea.textContent = textArea.textContent.substring(0, textArea.textContent.length-1);
            break;
          case 'tab':
            textArea.innerHTML += '\t';
            break;
          case 'enter':
            textArea.innerHTML += '\n';
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
