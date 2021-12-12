import styled from '@emotion/styled';
import { Button } from '@src/components/button/Button';

export interface ICard {
  id: string;
  header: string;
  src: string;
  onClick: (id: string) => void;
}

export function Card({ id, header, src, onClick }: ICard) {
  const handleCardClick = () => {
    console.log('clicked by card', id);
    onClick(id);
  };
  return (
    <CardStyled>
      <CardHeader>{header}</CardHeader>
      <CardImage src={src} alt={header} />
      <Button label={'카드'} onClick={handleCardClick} />
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

const CardImage = styled.img`
  width: 100px;
  height: 100px;
  padding: 0 0 10px 0;
`;
