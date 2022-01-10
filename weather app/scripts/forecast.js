const key = 'Cjs1ugcs2x3eSzqAL11R39AWDhNJjUjX';


// get city info
const getCity = async (city) => {

    const cityResource = `http://dataservice.accuweather.com/locations/v1/cities/search`;
    const query =  `?apikey=${key}&q=${city}`;
    const response = await fetch(cityResource + query);
    const data = await response.json();
    return data[0];

};


// get weather info
const getWeather = async (id) => {

    const weatherResource = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query =  `${id}?apikey=${key}`;
    const response = await fetch(weatherResource + query);
    const data = await response.json();
    return data[0];

};

