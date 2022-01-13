const locationForm = document.querySelector('form');
const card = document.getElementById('caerd');
const details = document.getElementById('amongus')
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')

const updateUI = data => {
    
    const citydets = data.cityDetails;
    const weather = data.weather;

    console.log(citydets.EnglishName, weather.Temperature.Metric.Value);

    details.innerHTML = `
            <h5 class="my-3">${citydets.EnglishName}</h5>
            <div class="my-3">${weather.WeatherText}</div>
            <div class="display-4 my-4">
              <span>${weather.Temperature.Metric.Value}</span>
              <span>&deg;C</span>
            </div>
    `;

    //updating the picture and icon
    const iconImage = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconImage);

    let timeImage = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';
    time.setAttribute('src', timeImage);


    if(card.classList.contains('d-none')){
        card.classList.remove('d-none');
    };

};


// getting the location data from forecast.js
const updateLocation = async (city) => {

    const cityDetails = await getCity(city);
    const weather = await getWeather(cityDetails.Key);

    return {
        cityDetails: cityDetails,
        weather: weather
    };

};

// form field
locationForm.addEventListener('submit', e => {
    e.preventDefault();

    //get location
    const location = locationForm.city.value.trim();
    locationForm.reset();

    updateLocation(location)
     .then((data) => updateUI(data))
     .catch(error => console.log(error));

});