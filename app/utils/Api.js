const axios = require('axios');

module.exports = {
    getCityCurrentWeather: function(city) {
        let encodedURI = window.encodeURI('http://api.openweathermap.org/data/2.5/weather?q=' + city +'&type=accurate&APPID=2a6f2e04b990c522dc83b33eb2797292');

        return axios.get(encodedURI)
            .then( response => response.data);
    }
}