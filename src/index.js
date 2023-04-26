import './style.css';

const fahrenheitData = {};
const celsiusData = {};


console.log('load page fn');
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
weatherCodeDiv.textContent = 'Sunny';

const locationDiv = document.createElement('div');
locationDiv.id = 'locationDiv';
locationDiv.textContent = 'Raleigh, NC';

const tempDiv = document.createElement('div');
tempDiv.id = 'tempDiv';

const degreeDiv = document.createElement('div');
degreeDiv.id = 'degreeDiv';
degreeDiv.textContent = `77`;
const degreeSpan = document.createElement('span');
degreeSpan.innerHTML = '&#8457';

const detailsDiv = document.createElement('div');
detailsDiv.id = 'detailsDiv';

const feelsLikeDiv = document.createElement('div');
feelsLikeDiv.textContent = `Feels like 72`;
feelsLikeDiv.id = 'feelsLikeDiv';
const feelsLikeSpan = document.createElement('span');
feelsLikeSpan.innerHTML = '&#8457';


const windDiv = document.createElement('div');
windDiv.textContent = `Wind: 8MPH`;

const humidityDiv = document.createElement('div');
humidityDiv.textContent = `Humidity: 42%`;

feelsLikeDiv.append(feelsLikeSpan);
degreeDiv.append(degreeSpan);
detailsDiv.append(feelsLikeDiv, windDiv, humidityDiv);
tempDiv.append(degreeDiv, detailsDiv);

weatherDiv.append(weatherCodeDiv, locationDiv, tempDiv);

export { errorDiv, weatherCodeDiv, locationDiv, tempDiv, detailsDiv, fahrenheitData, celsiusData };


