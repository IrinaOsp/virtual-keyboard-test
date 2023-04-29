import { keyArr } from './DOM.js';

let notServiceKeys = [];
keyArr.forEach(key => {
  if (!key.classList.contains('key_service')) {
    notServiceKeys.push(key);
  }
});

export const capsHandler = document.addEventListener('keydown', (event) => {
  if (event.code === 'CapsLock') {
      const isCapsLockOn = event.getModifierState("CapsLock");
      if (isCapsLockOn) {
          console.log("Caps Lock turned on");
          document.querySelector('.key_caps').classList.add('key_caps_active')
          notServiceKeys.forEach(key => {
            key.textContent = key.textContent.toUpperCase();
          })
      } else {
          console.log("Caps Lock turned off");
          document.querySelector('.key_caps').classList.remove('key_caps_active')
          notServiceKeys.forEach(key => {
            key.textContent = key.textContent.toLowerCase();
          })
      }
  }
});