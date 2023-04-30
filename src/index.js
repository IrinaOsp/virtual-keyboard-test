import './index.html';
import './main.css';
import { createLayout, getRows, keyArr } from './modules/DOM.js';
import { textArea, clicksHandler } from './modules/clicksHandler.js';
import { keyDown, keyUp } from './modules/keyPressHandler.js';
import { capsHandler } from './modules/CapsLock.js';
import { shiftHandler, realShiftHandler } from './modules/Shift.js';

clicksHandler();
