import { atom } from 'recoil';

const isLoadingState = atom({
  key: 'IsLoading',
  default: false,
});

export default isLoadingState;
