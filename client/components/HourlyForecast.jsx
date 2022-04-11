import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import useApiCall from './queries';
import HourItem from './HourItem';

function HourlyForecast() {
  const {
    data,
    isLoading,
    error,
    isIdle,
  } = useApiCall();

  if (isIdle || isLoading) return <Typography variant='h4'>Weather App</Typography>;

  if (error) return <div />;

  return (
    <Box sx={{
      p: 2,
      mr: 10,
      background: 'rgb(0, 0, 0, 0.5)',
    }}
    >
      <Grid container columns={16}>
        {data.hourlyForecast.map((hour) => (
          <Grid key={hour.Time} xs={2} item>
            <HourItem hour={hour} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default HourlyForecast;
