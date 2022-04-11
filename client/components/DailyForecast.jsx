import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useApiCall from './queries';
import dailyForecast from './fixtures/dailyForecast.json';

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
    <Box sx={{ mt: 10, background: 'black' }}>
      <Grid container direction='column'>
        {data.dailyForecast.DailyForecasts.map((day) => (
          <Grid key={day.EpochDate} item>
            <Grid container>
              <Grid item>
                <div>{day.Date}</div>
              </Grid>
              <Grid item>
                <div>{day.Day.IconPhrase}</div>
              </Grid>
              <Grid item>
                <div>
                  {day.Temperature.Maximum.Value}
                  /
                  {day.Temperature.Minimum.Value}
                </div>
              </Grid>
              {/* <Grid item>
                <div>Precipitation</div>
              </Grid> */}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DailyForecast;
