const request = require('request');
const weatherData = require('../data');

// call weather api or return mock data
const getWeather = (mock) => {
  if (mock) { // for mocking the api
    return weatherData;
  }
  request.post('http://www.weatherapi.com', (err, res, data) => {
    if (err) throw new Error(err);
    return data; // return the data from the api
  });
}

// return formatted string with degree for temp number given
const formatTemp = temp => `${temp}°F`;

// takes data object, decontructs cities off of it and
// sort the cities by temp, returning an array of city
// names in temperature order
const listCitiesByTemp = ({ cities }) => {
  let citiesArray = [];
  cities.sort(_sorter).forEach(city => {
    citiesArray.push(city.name);
  });
  return citiesArray;
};

// private sorting function for use with previous func
// only exported for testing
const _sorter = (a, b) => {
  if (a.temp > b.temp)
    return -1;
  if (a.temp < b.temp)
    return 1;
  return 0;
}

module.exports = {
  getWeather,
  formatTemp,
  listCitiesByTemp,
  _sorter // exported for testing
};
