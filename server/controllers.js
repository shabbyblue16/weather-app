const { getLocationKey, getForecast } = require('./helpers');
const { DayModel, HourModel } = require('./models');

function fetchWeather(req, res, zip) {
  const response = {};
  let locationKey;

  getLocationKey(zip)
    .then((data) => {
      response.location = {
        EnglishName: data[0].EnglishName,
        AdministrativeArea: data[0].AdministrativeArea.EnglishName,
      };
      locationKey = data[0].Key;
      return getForecast(locationKey, 'daily');
    })
    .then((data) => {
      const dailyForecast = DayModel(data);
      response.dailyForecast = dailyForecast;
      return getForecast(locationKey, 'hourly');
    })
    .then((data) => {
      const hourlyForecast = HourModel(data);
      response.hourlyForecast = hourlyForecast;
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(503).send(err);
    });
}

module.exports = fetchWeather;
