import * as React from 'react';
import { useRecoilState } from 'recoil';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { enabledState, zipCodeState } from './state';

function SearchBar() {
  const [input, setInput] = React.useState('');
  const [alert, setAlert] = React.useState(false);
  const [zipCode, setZipCode] = useRecoilState(zipCodeState);
  const [isEnabled, setIsEnabled] = useRecoilState(enabledState);

  const handleInput = (e) => {
    setInput(e.target.value);
    setAlert(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.length === 5 && /^[0-9]+$/.test(input)) {
      setZipCode(input);
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
      setAlert(true);
    }
  };

  return (
    <>
      <Paper
        component='div'
        sx={{
          p: '2px 4px',
          display: 'flex',
          maxWidth: '100%',
          background: 'transparent',
        }}
      >
        <InputBase
          inputProps={{ 'data-testid': 'search-input' }}
          placeholder='Search 5-digit ZIP codes'
          value={input}
          onChange={handleInput}
          sx={{ ml: 1, flex: 1, color: 'white' }}
        />
        <IconButton
          data-testid='search-submit'
          onClick={handleSearch}
          sx={{ p: '10px', color: 'white' }}
          aria-label='search'
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      {alert && <Alert severity='error' sx={{ color: 'white', background: 'transparent' }}>Please enter a valid 5-digit ZIP code</Alert>}
    </>
  );
}

export default SearchBar;
