import { keyArr } from './DOM.js';

export const virtualCaps = document.querySelector('.key_caps');

export const notServiceKeys = [];
keyArr.forEach((key) => {
  if (!key.classList.contains('key_service')) {
    notServiceKeys.push(key);
  }
});

const setCaps = () => {
  if (!virtualCaps.classList.contains('key_caps_active')) {
    virtualCaps.classList.add('key_caps_active');
    for (let i = 0; i < notServiceKeys.length; i += 1) {
      notServiceKeys[i].textContent = notServiceKeys[i].textContent.toUpperCase();
    }
  } else {
    document.querySelector('.key_caps').classList.remove('key_caps_active');
    for (let i = 0; i < notServiceKeys.length; i += 1) {
      notServiceKeys[i].textContent = notServiceKeys[i].textContent.toLowerCase();
    }
  }
};

export const capsHandler = document.addEventListener('keydown', (event) => {
  if (event.code === 'CapsLock') {
    setCaps();
  }
});

export const virtualCapsHandler = virtualCaps.addEventListener('mousedown', setCaps);
