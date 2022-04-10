import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import useApiCall from './queries';

function HourlyForecast() {
  const {
    data,
    isLoading,
    error,
    isIdle,
  } = useApiCall();

  if (isLoading) return 'Loading...';

  if (error) return `An error has occured: ${error.message}`;

  if (isIdle) return <div>Enter ZipCode</div>;

  return (
    <Box sx={{ background: 'grey' }}>
      <Grid container>
        {data.hourlyForecast.map((hour) => (
          <Grid key={hour.EpochDateTime} item>
            <Grid container direction='column'>
              <Grid item>
                <div>{hour.DateTime}</div>
              </Grid>
              <Grid item>
                <div>{hour.IconPhrase}</div>
              </Grid>
              <Grid item>
                <div>{hour.Temperature.Value}</div>
              </Grid>
              <Grid item>
                <div>{hour.PrecipitationProbability}</div>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HourlyForecast;
