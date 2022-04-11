import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function HourItem({ hour }) {
  return (
    <Grid container direction='column' spacing={1} alignItems='center'>
      <Grid item>
        <Typography variant='h5'>{hour.Time}</Typography>
      </Grid>
      <Grid item>
        <img alt='icon' src={hour.WeatherIcon} />
      </Grid>
      <Grid item>
        <Typography variant='h5'>
          {hour.TemperatureValue}
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
  );
}

HourItem.propTypes = ({
  hour: PropTypes.object,
});

export default HourItem;
