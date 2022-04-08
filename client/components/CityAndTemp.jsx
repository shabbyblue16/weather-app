import * as React from 'react';
import { useRecoilState } from 'recoil';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { cityState } from './state';

function CityAndTemp() {
  const city = useRecoilState(cityState);

  return (
    <Container component='div'>
      <Grid container direction='column'>
        <Grid item>
          <div>City</div>
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
