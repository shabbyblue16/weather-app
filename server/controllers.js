const { getLocationKey, getForecast } = require('./helpers');

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
      const dailyForecast = data.DailyForecasts.map((day) => {
        const sanitizedDay = {
          Date: new Date(day.Date).getDay(),
          DayIcon: `https://developer.accuweather.com/sites/default/files/${day.Day.Icon}-s.png`,
          NightIcon: `https://developer.accuweather.com/sites/default/files/${day.Night.Icon}-s.png`,
          TemperatureMaxVal: day.Temperature.Maximum.Value,
          TemperatureMinVal: day.Temperature.Minimum.Value,
        };
        return sanitizedDay;
      });
      response.dailyForecast = dailyForecast;
      return getForecast(locationKey, 'hourly');
    })
    .then((data) => {
      const hourly = data.slice(0, 8);
      const hourlyForecast = hourly.map((hour) => {
        const sanitizedHour = {
          Time: new Date(hour.DateTime).getHours(),
          TemperatureValue: hour.Temperature.Value,
          IconPhrase: hour.IconPhrase,
          WeatherIcon: `https://developer.accuweather.com/sites/default/files/${hour.WeatherIcon}-s.png`,
          PrecipitationProbability: hour.PrecipitationProbability,
        };
        return sanitizedHour;
      });
      response.hourlyForecast = hourlyForecast;
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send(err);
    });
}

module.exports = fetchWeather;
