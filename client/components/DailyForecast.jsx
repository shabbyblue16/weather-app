import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useApiCall from './queries';
import dailyForecast from './fixtures/dailyForecast.json';
import DayItem from './DayItem';

function DailyForecast() {
  // const {
  //   data,
  //   isLoading,
  //   error,
  //   isIdle,
  // } = useApiCall();

  // if (isLoading) return 'Loading...';

  // if (error) return `An error has occured: ${error.message}`;

  // if (isIdle) return <div>Daily Weather</div>;
  const data = { dailyForecast };

  return (
    <Box sx={{ mt: 10, mr: 10, background: 'rgb(0, 0, 0, 0.5)' }}>
      <Grid container direction='column' columns={14} spacing={4} alignItems='center'>
        {data.dailyForecast.DailyForecasts.map((day) => (
          <Grid key={day.EpochDate} item xs={2}>
            <DayItem day={day} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DailyForecast;
