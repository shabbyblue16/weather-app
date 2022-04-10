import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { enabledState, zipCodeState } from './state';

async function fetchWeather(zipcode) {
  const { data } = await axios.get(
    `http://localhost:3003/weather/${zipcode}`,
  );
  return data;
}

export default function useApiCall() {
  const [zipCode, setZipcode] = useRecoilState(zipCodeState);
  const [enabled, setEnabled] = useRecoilState(enabledState);
  return useQuery(
    ['local-weather', zipCode],
    () => fetchWeather(zipCode),
    { enabled },
  );
}
