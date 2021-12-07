import { atom } from 'recoil';

interface IDefaultState {
  id: string;
}

const initDefaultState: IDefaultState = {
  id: 'test id',
};

export const DefaultState = atom({
  key: 'DefaultState',
  default: initDefaultState,
});
