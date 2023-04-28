import './index.html';
import './main.css';
import { createLayout, getRows } from './modules/DOM.js';
import { capsHandler } from './modules/CapsLock.js';
import { textArea, clicksHandler } from './modules/clicksHandler.js';

clicksHandler();

