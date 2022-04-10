import * as React from 'react';
import { useRecoilState } from 'recoil';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { enabledState, zipCodeState } from './state';

function SearchBar() {
  const [input, setInput] = React.useState('');
  const [zipCode, setZipCode] = useRecoilState(zipCodeState);
  const [isEnabled, setIsEnabled] = useRecoilState(enabledState);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (input.length === 5) {
      setZipCode(input);
      setIsEnabled(true);
    } else {
      setIsEnabled(false);
    }
  };

  return (
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
        placeholder='Search 5-digit ZIP Codes'
        value={input}
        onChange={handleInput}
        sx={{ ml: 1, flex: 1, color: 'white' }}
      />
      <IconButton
        onClick={handleSearch}
        sx={{ p: '10px', color: 'white' }}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
