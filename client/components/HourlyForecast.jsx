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
    <Box>
      <Grid container>
        {data.hourlyForecast.map((hour) => (
          <Grid key={hour.EpochDateTime} item>
            <Grid container direction='column' alignItems='center'>
              <Grid item>
                {/* <Typography>{hour.DateTime}</Typography> */}
                <Typography>3PM</Typography>
              </Grid>
              <Grid item>
                <img alt='icon' src='https://developer.accuweather.com/sites/default/files/01-s.png' />
                {/* <Typography>{hour.WeatherIcon}</Typography> */}
              </Grid>
              <Grid item>
                <Typography>
                  {hour.Temperature.Value}
                  &deg;
                </Typography>
              </Grid>
              <Grid item>
                <Typography color='blue'>
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
