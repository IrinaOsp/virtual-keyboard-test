import { notServiceKeys } from './CapsLock.js';

const Shifts = [];
Shifts.push(document.querySelector('.key_shift-l'));
Shifts.push(document.querySelector('.key_shift-r'));

export const shiftHandler = Shifts.forEach((shift) => {
  shift.addEventListener('mousedown', () => {
    for (let i = 0; i < notServiceKeys.length; i += 1) {
      notServiceKeys[i].textContent = notServiceKeys[i].textContent.toUpperCase();
    }
  });
  shift.addEventListener('mouseup', () => {
    for (let i = 0; i < notServiceKeys.length; i += 1) {
      notServiceKeys[i].textContent = notServiceKeys[i].textContent.toLowerCase();
    }
  });
});

export const realShiftHandlerDown = document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    for (let i = 0; i < notServiceKeys.length; i += 1) {
      notServiceKeys[i].textContent = notServiceKeys[i].textContent.toUpperCase();
    }
  }
});

export const realShiftHandlerUp = document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    for (let i = 0; i < notServiceKeys.length; i += 1) {
      notServiceKeys[i].textContent = notServiceKeys[i].textContent.toLowerCase();
    }
  }
});
