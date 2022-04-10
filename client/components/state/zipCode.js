import { atom } from 'recoil';

const zipCodeState = atom({
  key: 'ZipCode',
  default: '',
});

export default zipCodeState;
