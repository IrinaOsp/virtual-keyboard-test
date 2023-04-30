import { notServiceKeys } from './CapsLock.js';

let Shifts = [];
Shifts.push(document.querySelector('.key_shift-l'))
Shifts.push(document.querySelector('.key_shift-r'))

export const shiftHandler = Shifts.forEach(shift => {
  shift.addEventListener('mousedown', (event) => {
    notServiceKeys.forEach(key => {
      key.textContent = key.textContent.toUpperCase();
    })
  });
  shift.addEventListener('mouseup', (event) => {
    notServiceKeys.forEach(key => {
      key.textContent = key.textContent.toLowerCase();
    })
  });
});

export const realShiftHandlerDown = document.addEventListener('keydown', event => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    notServiceKeys.forEach(key => {
      key.textContent = key.textContent.toUpperCase();
    })
  }
});

export const realShiftHandlerUp = document.addEventListener('keyup', event => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    notServiceKeys.forEach(key => {
      key.textContent = key.textContent.toLowerCase();
    })
  }
});

