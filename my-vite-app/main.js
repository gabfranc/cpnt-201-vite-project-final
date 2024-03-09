import '../css/style.css'
import javascriptLogo from './images/javascript.svg'
import viteLogo from './images/vite.svg'
import { setupCounter } from '../js/counter'
import { format } from 'date-fns'
import _ from 'lodash'

const array = [1, 2, 3, 4, 5];
const numArray = _.map(array, num => num * num);
console.log(numArray);

document.addEventListener('DOMContentLoaded', function() {
  const date = document.getElementById('date');
  const dateToday = new Date();
  const dateFormat = format(dateToday, 'MMMM dd, yyyy');

  date.textContent = "" + dateFormat;
})

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>

    <div> Today's date: <span id="date"></span> </div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
