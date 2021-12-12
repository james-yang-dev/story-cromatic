import styled from '@emotion/styled';
import { Button } from '@src/components/button/Button';

export function Card() {
  const handleCardClick = () => {
    console.log('clicked by card');
  };
  return (
    <CardStyled>
      <CardHeader>Template Card</CardHeader>
      <Button label={'cardText'} onClick={handleCardClick} />
    </CardStyled>
  );
}

const CardStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  border: solid 1px #000000;
  border-radius: 5px;
  padding: 10px;
`;

const CardHeader = styled.span`
  padding: 0 0 10px 0;
`;
