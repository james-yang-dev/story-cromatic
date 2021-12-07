import styled from '@emotion/styled';
import { IButton } from './types';

export function Button({ onClick, label }: IButton) {
  return <ButtonStyled onClick={onClick}>{label}</ButtonStyled>;
}

const ButtonStyled = styled.button``;
