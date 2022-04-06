import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  const [zipCode, setZipCode] = React.useState('');

  const handleInput = (e) => {
    setZipCode(e.target.value);
  };

  const handleSearch = () => {
    console.log(zipCode);
  };

  return (
    <Paper
      component='div'
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
      }}
    >
      <InputBase
        placeholder='Search ZIP Codes'
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
