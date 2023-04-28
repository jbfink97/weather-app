import { unit, errorDiv, weatherCodeDiv, locationDiv, degreeDiv, maxTempDiv, minTempDiv, windDiv } from "./index";
import weatherCodes from "./weatherCodes";
import Weather from "./class";

let fahrenheitData;
let celsiusData;

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

        const city = locationObj.name;
        const state = locationObj.admin1;
        const country = locationObj.country;
        let displayedLocation = '';

        if (country == 'United States') {
            displayedLocation = `${city}, ${state}`;
        } else {
            displayedLocation = `${city}, ${country}`;
        }

        const lat = locationObj.latitude;
        const long = locationObj.longitude;
        getWeather(lat, long, displayedLocation);

    } catch {
        errorDiv.textContent = 'Cannot find city, please enter a valid city or postal code';
    }
}

async function getWeather(latitude, longitude, displayedLocation) {
    const responseFahrenheit = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max&current_weather=true&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York`);
    const dataFahrenheit = await responseFahrenheit.json();
    const responseCelsius = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max&current_weather=true&timezone=America%2FNew_York`);
    const dataCelsius = await responseCelsius.json();

    parseData(dataFahrenheit, dataCelsius, displayedLocation);

}

function parseData(fahrenheit, celsius, displayedLocation) {

    const weatherCodeKey = fahrenheit['current_weather'].weathercode;
    const weatherConditions = weatherCodes[weatherCodeKey];
    const fahrenheitCurrentTemp = Math.round(fahrenheit['current_weather'].temperature);
    const fahrenheitMax = Math.round(fahrenheit['daily']['temperature_2m_max'][0]);
    const fahrenheitMin = Math.round(fahrenheit['daily']['temperature_2m_min'][0]);
    const fahrenheitWind = Math.round(fahrenheit['current_weather'].windspeed);

    const celsiusCurrentTemp = Math.round(celsius['current_weather'].temperature);
    const celsiusMax = Math.round(celsius['daily']['temperature_2m_max'][0]);
    const celsiusMin = Math.round(celsius['daily']['temperature_2m_min'][0]);
    const celsiusWind = Math.round(celsius['current_weather'].windspeed);

    fahrenheitData = new Weather('F', weatherConditions, fahrenheitCurrentTemp, fahrenheitMax, fahrenheitMin, fahrenheitWind);
    celsiusData = new Weather('C', weatherConditions, celsiusCurrentTemp, celsiusMax, celsiusMin, celsiusWind);
    updatePage(fahrenheitData, celsiusData, displayedLocation);


}

function updatePage(fahrenheitClass, celsiusClass, displayedLocation) {
    weatherCodeDiv.textContent = `${fahrenheitClass.weatherConditions}`;
    locationDiv.textContent = displayedLocation;
    // weatherCodeDiv, locationDiv, degreeDiv, maxTempDiv, minTempDiv, windDiv
    if (unit == 'F') {
        degreeDiv.innerHTML = `${fahrenheitClass.currentTemp} &#8457;`;
        maxTempDiv.innerHTML = `Max: ${fahrenheitClass.max} &#8457;`;
        minTempDiv.innerHTML = `Min : ${fahrenheitClass.min} &#8457;`;
        windDiv.textContent = `Wind: ${fahrenheitClass.wind} MPH`;
    } else {
        degreeDiv.innerHTML = `${celsiusClass.currentTemp} &#8451;`;
        maxTempDiv.innerHTML = `Max: ${celsiusClass.max} &#8451;`;
        minTempDiv.innerHTML = `Min : ${celsiusClass.min} &#8451;`;
        windDiv.textContent = `Wind: ${celsiusClass.wind} Km/h`;
    }
}



export { geocode, updatePage, fahrenheitData, celsiusData }
