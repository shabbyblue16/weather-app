import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SearchBar from './SearchBar';
import CityAndTemp from './CityAndTemp';

function SearchContainer() {
  return (
    <Box>
      <Grid container direction='column' alignItems='center' sx={{ height: '100%' }}>
        <Grid item sx={{ pt: 5, pb: 60 }}>
          <SearchBar />
        </Grid>
        <Grid item>
          <CityAndTemp />
        </Grid>
      </Grid>
    </Box>
  );
}

export default SearchContainer;
