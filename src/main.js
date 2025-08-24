import './style.css';
import { readKeypresses } from './utils/keypress.js';

let keypresses = [];

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#app').innerHTML = `
    <div style="font-size:2em;" >
      Start typing to see your keypresses...
      <aside style="font-size:1rem;" >Sorry mobile users, this is a desktop only app.</aside>
    </div>`;
});

document.addEventListener('keydown', (event) => {
  readKeypresses(keypresses, event);
  console.log(keypresses);

  document.querySelector('#app').innerHTML = `
    <div id="container">
      ${keypresses.map((key) => `<div class="key">${key}</div>`).join('')}
    </div>
  `;
});
