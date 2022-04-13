const axios = require('axios');
require('dotenv').config();

const url = 'http://dataservice.accuweather.com';

async function getLocationKey(zipCode) {
  const { data } = await axios.get(`${url}/locations/v1/postalcodes/search?q=${zipCode}&apikey=${process.env.API_KEY}`);
  return data;
}

async function getForecast(key, interval) {
  let intervalStr;
  if (interval === 'daily') {
    intervalStr = 'daily/5day';
  } else {
    intervalStr = 'hourly/12hour';
  }
  const { data } = await axios.get(`${url}/forecasts/v1/${intervalStr}/${key}?apikey=${process.env.API_KEY}&details=true`);
  return data;
}

module.exports = {
  getLocationKey,
  getForecast,
};
