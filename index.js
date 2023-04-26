async function geocode(location) {
    try {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}`);
        const geoData = await response.json();
        errorDiv.textContent = '';

        let locationObj = geoData.results[0];

        // this assumes if a user is searching by postal/zip code, they are only looking for US addresses
        // if the search entry starts with a number (search by zip code), the results are looped over until
        // a US location is found and the loop breaks
        if (!isNaN((location).charAt(0))) {
            for (const [index, city] of geoData.results.entries()) {
                locationObj = geoData.results[index];
                if (city.country == 'United States') {
                    break
                }
            }
        }

        const name = locationObj.name;
        const lat = locationObj.latitude;
        const long = locationObj.longitude;
        getWeather(lat, long, name);
        
    } catch {
        errorDiv.textContent = 'Cannot find city, please enter a valid city or postal code';
    }
}

async function getWeather(latitude, longitude, name) {
    const responseFahrenheit = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York`);
    const dataFahrenheit = await responseFahrenheit.json();
    const responseCelsius = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max&current_weather=true&timezone=America%2FNew_York`);
    const dataCelsius = await responseCelsius.json();

    console.log(dataFahrenheit);
    console.log(dataCelsius);


}





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
degreeDiv.textContent = '75';

const detailsDiv = document.createElement('div');
detailsDiv.id = 'detailsDiv';

const feelsLikeDiv = document.createElement('div');
feelsLikeDiv.textContent = `Feels like 72`;

const windDiv = document.createElement('div');
windDiv.textContent = `Wind: 8MPH`;

const humidityDiv = document.createElement('div');
humidityDiv.textContent = `Humidity: 42%`;

detailsDiv.append(feelsLikeDiv, windDiv, humidityDiv);
tempDiv.append(degreeDiv, detailsDiv);

weatherDiv.append(weatherCodeDiv, locationDiv, tempDiv);

