import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import useApiCall from './queries';
import hourlyForecast from './fixtures/hourlyForecast.json';

function HourlyForecast() {
  // const {
  //   data,
  //   isLoading,
  //   error,
  //   isIdle,
  // } = useApiCall();

  // if (isLoading) return 'Loading...';

  // if (error) return `An error has occured: ${error.message}`;

  // if (isIdle) return <div>Enter ZipCode</div>;
  const data = { hourlyForecast };

  return (
    <Box sx={{
      p: 2,
      mr: 10,
      background: 'rgb(0, 0, 0, 0.5)',
    }}
    >
      <Grid container columns={16}>
        {data.hourlyForecast.map((hour) => (
          <Grid key={hour.EpochDateTime} xs={2} item>
            <Grid container direction='column' spacing={1} alignItems='center'>
              <Grid item>
                {/* <Typography>{hour.DateTime}</Typography> */}
                <Typography variant='h5'>3PM</Typography>
              </Grid>
              <Grid item>
                <img alt='icon' src='https://developer.accuweather.com/sites/default/files/01-s.png' />
                {/* <Typography>{hour.WeatherIcon}</Typography> */}
              </Grid>
              <Grid item>
                <Typography variant='h5'>
                  {hour.Temperature.Value}
                  &deg;
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='h5' color='blue'>
                  {hour.PrecipitationProbability}
                  %
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HourlyForecast;
