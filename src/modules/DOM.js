export const KEYS_EN = [
  '`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace',
  'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
  'caps lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter',
  'shift-l', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'shift-r',
  'ctrl-l', 'win', 'alt-l', 'space', 'alt-r', 'ctrl-r', '⇐', '⇑', '⇓', '⇒',
];

const keyMap = {
  a: 'KeyA',
  b: 'KeyB',
  c: 'KeyC',
  d: 'KeyD',
  e: 'KeyE',
  f: 'KeyF',
  g: 'KeyG',
  h: 'KeyH',
  i: 'KeyI',
  j: 'KeyJ',
  k: 'KeyK',
  l: 'KeyL',
  m: 'KeyM',
  n: 'KeyN',
  o: 'KeyO',
  p: 'KeyP',
  q: 'KeyQ',
  r: 'KeyR',
  s: 'KeyS',
  t: 'KeyT',
  u: 'KeyU',
  v: 'KeyV',
  w: 'KeyW',
  x: 'KeyX',
  y: 'KeyY',
  z: 'KeyZ',
  0: 'Digit0',
  1: 'Digit1',
  2: 'Digit2',
  3: 'Digit3',
  4: 'Digit4',
  5: 'Digit5',
  6: 'Digit6',
  7: 'Digit7',
  8: 'Digit8',
  9: 'Digit9',
  space: 'Space',
  '`': 'Backquote',
  tab: 'Tab',
  enter: 'Enter',
  'shift-l': 'ShiftLeft',
  'shift-r': 'ShiftRight',
  'ctrl-l': 'ControlLeft',
  'ctrl-r': 'ControlRight',
  'alt-l': 'AltLeft',
  'alt-r': 'AltRight',
  'caps lock': 'CapsLock',
  win: 'MetaLeft',
  '⇑': 'ArrowUp',
  '⇓': 'ArrowDown',
  '⇐': 'ArrowLeft',
  '⇒': 'ArrowRight',
  backspace: 'Backspace',
  '-': 'Minus',
  '=': 'Equal',
  '[': 'BracketLeft',
  ']': 'BracketRight',
  ';': 'Semicolon',
  '\'': 'Quote',
  '\\': 'Backslash',
  ',': 'Comma',
  '.': 'Period',
  '/': 'Slash',
};

let TEXTAREA = null;

export const createLayout = (function createLayout() {
  const INPUT_WRAPPER = document.createElement('div');
  INPUT_WRAPPER.className = 'wrapper wrapper_input';

  const INPUT_LABEL = document.createElement('label');
  INPUT_LABEL.className = 'label';
  INPUT_LABEL.setAttribute('for', 'typed-text');
  INPUT_LABEL.textContent = 'Virtual keyboard for Windows';

  TEXTAREA = document.createElement('textarea');
  TEXTAREA.className = 'textarea';
  TEXTAREA.setAttribute('id', 'typed-text');
  TEXTAREA.setAttribute('name', 'typed-text');
  TEXTAREA.setAttribute('rows', '10');
  TEXTAREA.setAttribute('cols', '120');
  TEXTAREA.setAttribute('autofocus', 'true');

  const KEYBOARD_WRAPPER = document.createElement('div');
  KEYBOARD_WRAPPER.className = 'wrapper';

  const KEYBOARD = document.createElement('div');
  KEYBOARD.className = 'keyboard';

  for (let i = 0; i < 5; i += 1) {
    const row = document.createElement('div');
    row.classList.add('row');
    row.classList.add(`row_${i}`);
    KEYBOARD.appendChild(row);
  }

  const INFO_WRAPPER = document.createElement('div');
  INFO_WRAPPER.className = 'wrapper';

  const INFO_PARAGR = document.createElement('p');
  INFO_PARAGR.className = 'info';
  INFO_PARAGR.innerHTML = 'Current language is <span class="language">English</span>. To switch language press left ctr+alt';

  document.body.appendChild(INPUT_WRAPPER);
  INPUT_WRAPPER.appendChild(INPUT_LABEL);
  INPUT_WRAPPER.appendChild(TEXTAREA);

  document.body.appendChild(KEYBOARD_WRAPPER);
  KEYBOARD_WRAPPER.appendChild(KEYBOARD);

  document.body.appendChild(INFO_WRAPPER);
  INFO_WRAPPER.appendChild(INFO_PARAGR);
}());

export const getRows = function getKeys(keys) {
  keys.forEach((el, index) => {
    const key = document.createElement('button');
    key.className = 'key';
    if (el === 'caps lock') {
      key.classList.add('key_caps');
      key.classList.add('key_service');
    } else if (el === '⇐') {
      key.classList.add('key_left');
      key.classList.add('key_service');
    } else if (el === '⇒') {
      key.classList.add('key_right');
      key.classList.add('key_service');
    } else if (el === '⇑') {
      key.classList.add('key_up');
      key.classList.add('key_service');
    } else if (el === '⇓') {
      key.classList.add('key_down');
      key.classList.add('key_service');
    } else {
      key.classList.add(`key_${el}`);
      if (el.length > 1) {
        key.classList.add('key_service');
      }
    }
    key.textContent = el;

    if (index < 14) {
      document.querySelector('.row_0').appendChild(key);
    } else if (index < 28) {
      document.querySelector('.row_1').appendChild(key);
    } else if (index < 41) {
      document.querySelector('.row_2').appendChild(key);
    } else if (index < 53) {
      document.querySelector('.row_3').appendChild(key);
    } else if (el === '⇑') {
      const reserve = document.createElement('div');
      reserve.classList.add('key_reserve');
      document.querySelector('.row_4').appendChild(reserve);
      reserve.appendChild(key);
    } else if (el === '⇓') {
      document.querySelector('.key_reserve').appendChild(key);
    } else {
      document.querySelector('.row_4').appendChild(key);
    }
  });
};
getRows(KEYS_EN);

export const keyArr = document.querySelectorAll('.key');

for (let i = 0; i < keyArr.length; i += 1) {
  if (keyMap[keyArr[i].textContent]) {
    keyArr[i].dataset.code = keyMap[keyArr[i].textContent];
    const index = keyArr[i].textContent.indexOf('-');
    if (index !== -1 && keyArr[i].textContent.length > 1) {
      const ind = KEYS_EN.indexOf(keyArr[i].textContent);
      if (index !== -1) {
        KEYS_EN[ind] = keyArr[i].textContent.slice(0, index);
      }
      keyArr[i].textContent = keyArr[i].textContent.slice(0, index);
    }
  }
}
