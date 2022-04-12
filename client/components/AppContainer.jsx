import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import { SearchContainer, WeatherContainer } from '.';

function AppContainer() {
  const image = 'https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
  const styles = {
    paperContainer: {
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      height: '100vh',
    },
  };

  return (
    <Paper style={styles.paperContainer}>
      <Grid container spacing={1} columns={24} alignItems='stretch'>
        <Grid item xs={7} sx={{ height: '100%' }}>
          <SearchContainer />
        </Grid>
        <Grid item xs={17} sx={{ height: '100%' }}>
          <WeatherContainer />
        </Grid>
      </Grid>
      <AppBar
        position='fixed'
        sx={{
          background: 'transparent',
          top: 'auto',
          bottom: 0,
          alignItems: 'center',
        }}
      >
        <Typography>
          Powered by&nbsp;
          <Link href='https://developer.accuweather.com/' sx={{ textDecoration: 'none' }}>AccuWeather API</Link>
        </Typography>
      </AppBar>
    </Paper>
  );
}

export default AppContainer;
