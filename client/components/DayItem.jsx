import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function DayItem({ day }) {
  return (
    <Grid
      container
      spacing={{
        xs: 1,
        lg: 4,
        xl: 6,
      }}
      alignItems='center'
      sx={{ pl: 3 }}
    >
      <Grid
        item
        xs
      >
        <Typography variant='h4'>
          {day.Weekday}
        </Typography>
      </Grid>
      <Grid
        item
        xs
      >
        <Typography variant='h4'>
          {day.Date}
        </Typography>
      </Grid>
      <Grid
        item
        xs
      >
        <Typography variant='h4'>
          <img alt='icon' src={day.DayIcon} />
        </Typography>
      </Grid>
      <Grid
        item
        xs
      >
        <Typography variant='h4'>
          {day.TemperatureMaxVal}
          &deg;/
          {day.TemperatureMinVal}
          &deg;
        </Typography>
      </Grid>
      <Grid
        item
        xs
      >
        <Typography variant='h4'>
          <img alt='icon' src={day.NightIcon} />
        </Typography>
      </Grid>
      <Grid
        item
        xs
      >
        <Typography variant='h4' color='blue'>
          {day.Precipitation}
          %
        </Typography>
      </Grid>
      <Grid
        item
        xs
      >
        <Typography variant='h4' color='orange'>
          UV&nbsp;
          {day.UVIndex}
        </Typography>
      </Grid>
    </Grid>
  );
}

DayItem.propTypes = ({
  day: PropTypes.object,
});

export default DayItem;
