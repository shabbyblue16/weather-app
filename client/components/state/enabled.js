import { atom } from 'recoil';

const enabledState = atom({
  key: 'Enabled',
  default: false,
});

export default enabledState;
