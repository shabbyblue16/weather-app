import * as React from 'react';
import { useQuery } from 'react-query';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import useApiCall from './queries';
import { enabledState } from './state';

function SearchBar() {
  const [input, setInput] = React.useState('');
  const isEnabled = useSetRecoilState(enabledState);

  const handleInput = (e) => {
    setInput(e.target.value);
    if (input.length === 5) {
      isEnabled(true);
    } else {
      isEnabled(false);
    }
  };

  const useSearch = () => {
    useApiCall(input);
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
        placeholder='Search ZIP Codes'
        value={input}
        onChange={handleInput}
        sx={{ ml: 1, flex: 1 }}
      />
      <IconButton
        onClick={useSearch}
        sx={{ p: '10px' }}
        aria-label='search'
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
