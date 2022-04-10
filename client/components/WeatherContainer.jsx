import * as React from 'react';
import Box from '@mui/material/Box';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';
import useApiCall from './queries';

function WeatherContainer() {
  return (
    <Box component='div'>
      <div>weather container</div>
      <HourlyForecast />
      <DailyForecast />
    </Box>
  );
}

export default WeatherContainer;
