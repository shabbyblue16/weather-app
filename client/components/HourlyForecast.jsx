import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function HourlyForecast() {
  return (
    <Box sx={{ background: 'grey' }}>
      <Grid container>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((hour) => (
          <Grid key={hour} item>
            <Grid container direction='column'>
              <Grid item>
                <div>Hour</div>
              </Grid>
              <Grid item>
                <div>Weather</div>
              </Grid>
              <Grid item>
                <div>Temp</div>
              </Grid>
              <Grid item>
                <div>Precipitation</div>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HourlyForecast;
