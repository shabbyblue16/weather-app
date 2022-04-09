import { atom } from 'recoil';

const errorState = atom({
  key: 'Error',
  default: null,
});

export default errorState;
