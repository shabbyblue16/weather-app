import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useApiCall from './queries';
import hourlyForecast from './fixtures/hourlyForecast.json';
import location from './fixtures/location.json';

function CityAndTemp() {
  // const {
  //   data,
  //   isLoading,
  //   isIdle,
  //   error,
  // } = useApiCall();

  // if (isLoading) return 'Loading...';

  // if (error) return `An error has occured: ${error.message}`;

  // if (isIdle) return <div>Enter ZipCode</div>;

  const data = {
    location,
    hourlyForecast,
  };

  return (
    <Container component='div'>
      <Grid container direction='column' alignItems='center' sx={{ color: 'white' }}>
        <Grid item>
          <Typography variant='h4' gutterBottom>
            {data.location.EnglishName}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h1' gutterBottom>
            {data.hourlyForecast[0].Temperature.Value}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h4'>
            {data.hourlyForecast[0].IconPhrase}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CityAndTemp;
