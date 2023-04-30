import { keyArr } from './DOM.js';
import { KEYS_EN } from './DOM.js';

const KEYS_RU = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
  'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
  'caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
  'shift-l', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'shift-r',
  'ctrl-l', 'win', 'alt-l', 'space', 'alt-r', 'ctrl-r', '⇐', '⇑', '⇓', '⇒',
];

const language = document.querySelector('.language');

export const switchLang = document.addEventListener('keydown', (event) => {
  console.log('switchLang')
  if (event.ctrlKey && event.altKey && language.textContent === 'English') {
    document.querySelector('.language').textContent = 'Russian';
    keyArr.forEach((key, index) => {
      key.textContent = KEYS_RU[index]
    })
  } else if (event.ctrlKey && event.altKey && language.textContent === 'Russian') {
    document.querySelector('.language').textContent = 'English';
    keyArr.forEach((key, index) => {
      key.textContent = KEYS_EN[index]
  })
}
});

function setLocalStorage() {
  localStorage.setItem('language', language.textContent);
};
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('language')) {
      localStorage.getItem('language') === 'underfined' ? language.textContent = 'English' : language.textContent = localStorage.getItem('language');
  }
}
window.addEventListener('load', getLocalStorage);