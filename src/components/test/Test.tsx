import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { DefaultState } from '@src/store/DefaultState';
import { ITest } from './types';

export function Test({ str }: ITest) {
  const [defaultState, setDefaultState] = useRecoilState(DefaultState);

  return <TestStyled>{defaultState.id}</TestStyled>;
}

const TestStyled = styled.div``;
