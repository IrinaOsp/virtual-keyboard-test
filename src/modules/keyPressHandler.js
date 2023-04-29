import { keyArr } from './clicksHandler.js';

// const virtualKeys = document.querySelectorAll('.virtual-key'); =keyArr

// Добавляем обработчик событий на нажатие клавиши на реальной клавиатуре
export const keyDown = document.addEventListener('keydown', (event) => {
  // Получаем код нажатой клавиши

  const keyCode = event.code;
  console.log(event.code)

  // Находим соответствующую кнопку на виртуальной клавиатуре
  const virtualKey = document.querySelector(`.key[data-code="${keyCode}"]`);
  console.log(virtualKey)
  // Если кнопка найдена, добавляем псевдо класс active
  if (virtualKey) {
    virtualKey.classList.add('active');
  }
});

// Добавляем обработчик событий на отпускание клавиши на реальной клавиатуре
export const keyUp = document.addEventListener('keyup', (event) => {
  // Получаем код отпущенной клавиши
  const keyCode = event.code;
  
  // Находим соответствующую кнопку на виртуальной клавиатуре
  const virtualKey = document.querySelector(`.key[data-code="${keyCode}"]`);
  
  // Если кнопка найдена, удаляем псевдо класс active
  if (virtualKey) {
    virtualKey.classList.remove('active');
  }
});
