import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useApiCall from './queries';

function CityAndTemp() {
  const {
    data,
    isLoading,
    isIdle,
    error,
  } = useApiCall();

  if (isLoading || error || isIdle) return <div />;

  return (
    <Container component='div'>
      <Grid container direction='column' alignItems='center' sx={{ color: 'white' }}>
        <Grid item>
          <Typography variant='h5' gutterBottom>
            {data.location.EnglishName}
            {', '}
            {data.location.AdministrativeArea}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h1'>
            {data.hourlyForecast[0].TemperatureValue}
            &deg;
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='h6'>
            <em>{data.dailyForecast[0].Phrase}</em>
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CityAndTemp;
