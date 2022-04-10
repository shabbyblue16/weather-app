import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

function DailyForecast() {
  return (
    <Box sx={{ background: 'blue' }}>
      <Grid container direction='column'>
        {['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'].map((day) => (
          <Grid key={day} item>
            <Grid container>
              <Grid item>
                <div>{day}</div>
              </Grid>
              <Grid item>
                <div>Weather Icon</div>
              </Grid>
              <Grid item>
                <div>Hi/Lo</div>
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

export default DailyForecast;
