import { atom } from 'recoil';

const hourlyForecastState = atom({
  key: 'HourlyForecast',
  default: [],
});

export default hourlyForecastState;
