import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';
import {
  cityState,
  dailyForecastState,
  hourlyForecastState,
  errorState,
  isLoadingState,
  enabledState,
} from './state';

const fetchWeather = async (zip) => {
  const { data } = await axios.get(
    `http://localhost:3003/weather/${zip}`,
  );
  return data;
};

export default function useApiCall(zipCode) {
  const setCity = useSetRecoilState(cityState);
  const setDailyForecast = useSetRecoilState(dailyForecastState);
  const setHourlyForecast = useSetRecoilState(hourlyForecastState);
  const setError = useSetRecoilState(errorState);
  const setIsLoading = useSetRecoilState(isLoadingState);

  const { data, isLoading, error } = useQuery(
    ['local-weather', zipCode],
    () => fetchWeather(zipCode),
    { enabled: enabledState },
  );

  setCity(data.cityName);
  setDailyForecast(data.dailyForecast);
  setHourlyForecast(data.hourlyForecast);
  setError(error);
  setIsLoading(isLoading);
}
