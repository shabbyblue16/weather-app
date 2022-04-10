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
        alignItems: 'center',
        width: 400,
        maxWidth: '100%',
      }}
    >
      <InputBase
        placeholder='Search 5-digit ZIP Codes'
        value={input}
        onChange={handleInput}
        sx={{ ml: 1, flex: 1 }}
      />
      <IconButton
        onClick={handleSearch}
        sx={{ p: '10px' }}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
