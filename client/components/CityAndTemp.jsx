import * as React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import useApiCall from './queries';

function CityAndTemp() {
  const {
    data,
    isLoading,
    isIdle,
    error,
  } = useApiCall();

  if (isLoading) return 'Loading...';

  if (error) return `An error has occured: ${error.message}`;

  if (isIdle) return <div>Enter ZipCode</div>;

  return (
    <Container component='div'>
      <Grid container direction='column'>
        <Grid item>
          <div>{data.location.EnglishName}</div>
        </Grid>
        <Grid item>
          <div>Temp</div>
        </Grid>
        <Grid item>
          <div>Weather</div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CityAndTemp;
