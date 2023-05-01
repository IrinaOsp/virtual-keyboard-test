import { keyArr, KEYS_EN } from './DOM.js';
import { virtualCaps } from './CapsLock.js';

const KEYS_RU = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
  'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
  'caps lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter',
  'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'shift',
  'ctrl', 'win', 'alt', 'space', 'alt', 'ctrl', '⇐', '⇑', '⇓', '⇒',
];

const language = document.querySelector('.language');

const switchLang = document.addEventListener('keydown', (event) => {
  if (event.ctrlKey && event.altKey && language.textContent === 'English') {
    document.querySelector('.language').textContent = 'Russian';
    for (let i = 0; i < keyArr.length; i += 1) {
      if (virtualCaps.classList.contains('key_caps_active')) {
        if (!keyArr[i].classList.contains('key_service')) {
          keyArr[i].textContent = KEYS_RU[i].toUpperCase();
        } else {
          keyArr[i].textContent = KEYS_RU[i];
        }
      } else {
        keyArr[i].textContent = KEYS_RU[i];
      }
    }
  } else if (event.ctrlKey && event.altKey && language.textContent === 'Russian') {
    document.querySelector('.language').textContent = 'English';
    for (let i = 0; i < keyArr.length; i += 1) {
      if (virtualCaps.classList.contains('key_caps_active')) {
        if (!keyArr[i].classList.contains('key_service')) {
          keyArr[i].textContent = KEYS_EN[i].toUpperCase();
        } else {
          keyArr[i].textContent = KEYS_EN[i];
        }
      } else {
        keyArr[i].textContent = KEYS_EN[i];
      }
    }
  }
});

export default switchLang;

function setLocalStorage() {
  localStorage.setItem('language', language.textContent);
}
window.addEventListener('beforeunload', setLocalStorage);

function getLocalStorage() {
  if (localStorage.getItem('language') === 'underfined') {
    language.textContent = 'English';
  } else {
    language.textContent = localStorage.getItem('language');
  }
}
window.addEventListener('load', getLocalStorage);
