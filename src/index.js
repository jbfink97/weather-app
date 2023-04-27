import { geocode, updatePage, fahrenheitData, celsiusData } from './functions';
import './style.css';


let unit = 'F';

const content = document.getElementById('main');

const form = document.createElement('form');
const searchBarDiv = document.createElement('div');
searchBarDiv.id = 'searchBarDiv';
const input = document.createElement('input');
input.type = 'text';
input.id = 'Location';
input.placeholder = 'Search city or postal code';

const submitBtn = document.createElement('button');
submitBtn.id = 'submitBtn';

form.append(input, submitBtn)
searchBarDiv.append(form);
content.append(searchBarDiv);

const weatherDiv = document.createElement('div');
content.append(weatherDiv);
weatherDiv.id = 'weatherDiv';


submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    geocode(input.value);
})

const errorDiv = document.createElement('div');
errorDiv.id = 'errorMessage';
searchBarDiv.append(errorDiv);

const weatherCodeDiv = document.createElement('div');
weatherCodeDiv.id = 'weatherCodeDiv';

const locationDiv = document.createElement('div');
locationDiv.id = 'locationDiv';


const tempDiv = document.createElement('div');
tempDiv.id = 'tempDiv';

const degreeDiv = document.createElement('div');
degreeDiv.id = 'degreeDiv';

const degreeSpan = document.createElement('span');
degreeSpan.innerHTML = '&#8457;'

const detailsDiv = document.createElement('div');
detailsDiv.id = 'detailsDiv';

const maxTempDiv = document.createElement('div');
maxTempDiv.classList = 'maxmin';

const maxTempSpan = document.createElement('span');
maxTempSpan.innerHTML = '&#8457';

const minTempDiv = document.createElement('div');
minTempDiv.classList = 'maxmin';

const minTempSpan = document.createElement('span');
minTempSpan.innerHTML = '&#8457';


const windDiv = document.createElement('div');

maxTempDiv.append(maxTempSpan);
minTempDiv.append(minTempSpan);
degreeDiv.append(degreeSpan);
detailsDiv.append(maxTempDiv, minTempDiv, windDiv);
tempDiv.append(degreeDiv, detailsDiv);
geocode('Raleigh');

const unitBtn = document.createElement('button');
unitBtn.type = 'button';
unitBtn.id = 'unitBtn';
unitBtn.innerHTML = '&#8457;'
unitBtn.addEventListener('click', () => {
    if (unit == 'F') {
        unit = 'C';
        unitBtn.innerHTML = '&#8451;';
        updatePage(fahrenheitData, celsiusData, locationDiv.textContent);
    } else {
        unit = 'F';
        unitBtn.innerHTML = '&#8457;';
        updatePage(fahrenheitData, celsiusData, locationDiv.textContent);
    }
})

weatherDiv.append(weatherCodeDiv, locationDiv, tempDiv, unitBtn);

export { unit, errorDiv, weatherCodeDiv, locationDiv, degreeDiv, maxTempDiv, minTempDiv, windDiv };


