import './style.css';
import { Countries } from './models/Countries.enum';
import { Country } from './models/Country';
import { Medals } from './models/Medals.enum';
import { Result } from './models/Result';
import { Sports } from './models/Sports.enum';

const countrySelect: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById('country-slt')
);
const medalSelect: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById('medal-slt')
);
const sportSelect: HTMLSelectElement = <HTMLSelectElement>(
  document.getElementById('sport-slt')
);

const addButton: HTMLElement = document.getElementById('add-btn');
addButton.addEventListener('click', addMedal);

let countries: Array<Country> = [];

init();

function init() {
  let count = 0;
  for (let c in Countries) {
    if (isNaN(Number(c))) {
      let newOption: HTMLOptionElement = document.createElement('option');
      newOption.innerHTML = c;
      newOption.value = count.toString();
      count++;
      countrySelect.add(newOption);
    }
  }

  for (let s in Sports) {
    if (isNaN(Number(s))) {
      let newOption: HTMLOptionElement = document.createElement('option');
      newOption.innerHTML = s;
      newOption.value = count.toString();
      count++;
      sportSelect.add(newOption);
    }
  }

  for (let m in Medals) {
    if (isNaN(Number(m))) {
      let newOption: HTMLOptionElement = document.createElement('option');
      newOption.innerHTML = m;
      newOption.value = count.toString();
      count++;
      medalSelect.add(newOption);
    }
  }
}

// This function adds a medal to the countries tally
function addMedal() {
  //TODO: complete this function

  displayTable();
}

// This function refreshes the medal tally table
function displayTable() {
  const resultsBody: HTMLTableSectionElement = <HTMLTableSectionElement>(
    document.getElementById('results-body')
  );

  let newBody: HTMLTableSectionElement = <HTMLTableSectionElement>(
    document.createElement('tbody')
  );
  newBody.id = 'results-body';

  // TODO: create the rows required for the new table body element

  // replaces the old body with the new one created above
  resultsBody.parentNode.replaceChild(newBody, resultsBody);
}
