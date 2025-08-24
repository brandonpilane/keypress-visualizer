import './style.css';
import { readKeypresses } from './utils/keypress.js';

let keypresses = [];

document.addEventListener('keydown', (event) => {
  readKeypresses(keypresses, event);
  console.log(keypresses);

  document.querySelector('#app').innerHTML = `
    <div id="keypresses">
      ${keypresses.map((key) => `<div>${key}</div>`).join('')}
    </div>
  `;
});
