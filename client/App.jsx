import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SearchContainer, WeatherContainer } from './components';

function App() {
  return (
    <RecoilRoot>
      <Box component='span'>
        <Grid container spacing={1} columns={12} alignItems='stretch'>
          <Grid item xs={4} sx={{ height: '100%', border: 'solid' }}>
            <SearchContainer />
          </Grid>
          <Grid item xs={8} sx={{ height: '100%', border: 'solid' }}>
            <WeatherContainer />
          </Grid>
        </Grid>
      </Box>
    </RecoilRoot>
  );
}

export default App;
