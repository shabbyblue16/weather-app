import { atom } from 'recoil';

const dailyForecastState = atom({
  key: 'DailyForecast',
  default: [],
});

export default dailyForecastState;
