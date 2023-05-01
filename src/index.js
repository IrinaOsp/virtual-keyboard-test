import './index.html';
import './main.css';
import { createLayout, getRows, keyArr } from './modules/DOM';
import { textArea, clicksHandler } from './modules/clicksHandler';
import { keyDown, keyUp } from './modules/keyPressHandler';
import { capsHandler } from './modules/CapsLock';
import { shiftHandler } from './modules/Shift';
import switchLang from './modules/switchLang';

clicksHandler();
