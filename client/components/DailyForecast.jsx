import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import useApiCall from './queries';
import DayItem from './DayItem';

function DailyForecast() {
  const {
    data,
    isLoading,
    error,
    isIdle,
  } = useApiCall();

  if (isLoading) return <Typography>Loading...</Typography>;

  if (error) {
    return (
      <Typography>
        An error has occured:
        Too man api calls. Try using a different accuweather key.
      </Typography>
    );
  }

  if (isIdle) return <Typography>Enter Zip Code</Typography>;

  return (
    <Box sx={{ mt: 10, mr: 10, background: 'rgb(0, 0, 0, 0.5)' }}>
      <Grid container direction='column' columns={10} spacing={8} alignItems='center'>
        {data.dailyForecast.map((day) => (
          <Grid key={day.Date} item xs={2} sx={{ width: '100%' }}>
            <DayItem day={day} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default DailyForecast;
