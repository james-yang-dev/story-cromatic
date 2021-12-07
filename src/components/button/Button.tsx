import styled from '@emotion/styled';
import { IButton, ButtonColorValue } from './types';

export function Button({ color, onClick, label }: IButton) {
  const getColorValue = ButtonColorValue[color];

  return (
    <ButtonStyled colorValue={getColorValue} onClick={onClick}>
      {label}
    </ButtonStyled>
  );
}

Button.defaultProps = { color: 'PINK' };

const ButtonStyled = styled.button<{ colorValue: string }>`
  display: block;
  height: 30px;
  background-color: ${({ colorValue }) => colorValue};
`;
