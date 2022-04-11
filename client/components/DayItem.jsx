import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function DayItem({ day }) {
  return (
    <Grid container spacing={5}>
      <Grid item>
        <Typography variant='h4'>{day.Date}</Typography>
      </Grid>
      <Grid item>
        <Typography variant='h4'>
          <img alt='icon' src={day.DayIcon} />
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h4'>
          {day.TemperatureMaxVal}
          &deg;/
          {day.TemperatureMinVal}
          &deg;
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h4'>
          <img alt='icon' src={day.NightIcon} />
        </Typography>
      </Grid>
    </Grid>
  );
}

DayItem.propTypes = ({
  day: PropTypes.object,
});

export default DayItem;
