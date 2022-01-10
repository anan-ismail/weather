const locationForm = document.querySelector('form');
const card = document.querySelector('card');
const details = document.querySelector('amongus');

const updateUI = data => {
    
    const citydets = data.cityDetails;
    const weather = data.weather;

    console.log(citydets.EnglishName, weather.Temperature.Metric.Value);

    details.innerHTML = `
        <h5>${citydets.EnglishName}</h5>
        <span>${weather.WeatherText}</span>
        <span>&deg;C</span>
    `;

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
     .then(data => updateUI(data))
     .catch(error => console.log(error));

});