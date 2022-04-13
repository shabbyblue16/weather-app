const iconUrl = 'https://developer.accuweather.com/sites/default/files';
const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function DayModel(data) {
  const dailyForecast = data.DailyForecasts.map((day) => {
    const NewDate = new Date(day.Date);
    const Weekday = week[NewDate.getDay()];
    const DayAndMonth = `${NewDate.getMonth() + 1}/${NewDate.getDate()}`;
    const DayIcon = day.Day.Icon < 10 ? `0${day.Day.Icon}-s.png` : `${day.Day.Icon}-s.png`;
    const NightIcon = day.Night.Icon < 10 ? `0${day.Night.Icon}-s.png` : `${day.Night.Icon}-s.png`;
    const sanitizedDay = {
      Weekday,
      Date: DayAndMonth,
      DayIcon: `${iconUrl}/${DayIcon}`,
      NightIcon: `${iconUrl}/${NightIcon}`,
      TemperatureMaxVal: day.Temperature.Maximum.Value,
      TemperatureMinVal: day.Temperature.Minimum.Value,
      Precipitation: day.Day.PrecipitationProbability,
      Phrase: day.Day.LongPhrase,
      UVIndex: day.AirAndPollen[5].Value,
    };
    return sanitizedDay;
  });
  return dailyForecast;
}

function HourModel(data) {
  const hourly = data.slice(0, 8);
  const hourlyForecast = hourly.map((hour) => {
    const WeatherIcon = hour.WeatherIcon < 10 ? `0${hour.WeatherIcon}-s.png` : `${hour.WeatherIcon}-s.png`;
    const NewTime = new Date(hour.DateTime).getHours();
    let Time;
    if (NewTime === 0) {
      Time = `${NewTime + 12}AM`;
    } else if (NewTime === 12) {
      Time = `${NewTime}PM`;
    } else if (NewTime < 12) {
      Time = `${NewTime}AM`;
    } else {
      Time = `${NewTime % 12}PM`;
    }
    const sanitizedHour = {
      Time,
      TemperatureValue: hour.Temperature.Value,
      IconPhrase: hour.IconPhrase,
      WeatherIcon: `${iconUrl}/${WeatherIcon}`,
      PrecipitationProbability: hour.PrecipitationProbability,
    };
    return sanitizedHour;
  });
  return hourlyForecast;
}

module.exports = {
  DayModel,
  HourModel,
};
