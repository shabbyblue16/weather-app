import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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
      <Grid container spacing={1} columns={12} alignItems='stretch'>
        <Grid item xs={4} sx={{ height: '100%' }}>
          <SearchContainer />
        </Grid>
        <Grid item xs={8} sx={{ height: '100%' }}>
          <WeatherContainer />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default AppContainer;
