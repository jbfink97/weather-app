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
    console.log('click');
})

