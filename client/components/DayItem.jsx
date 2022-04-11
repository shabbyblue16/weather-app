import * as React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

function DayItem({ day }) {
  return (
    <Grid container spacing={15}>
      <Grid item>
        {/* <Typography>{day.Date}</Typography> */}
        <Typography variant='h4'>Friday</Typography>
      </Grid>
      <Grid item>
        {/* <div>{day.Day.Icon}</div> */}
        <Typography variant='h4'>
          <img alt='icon' src='https://developer.accuweather.com/sites/default/files/01-s.png' />
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant='h4'>
          {day.Temperature.Maximum.Value}
          &deg;/
          {day.Temperature.Minimum.Value}
          &deg;
        </Typography>
      </Grid>
      {/* <Grid item>
      <div>Precipitation</div>
    </Grid> */}
    </Grid>
  );
}

DayItem.propTypes = ({
  day: PropTypes.object,
});

export default DayItem;
