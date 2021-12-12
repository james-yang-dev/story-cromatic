import styled from '@emotion/styled';
import { Card } from '@src/features/card';
import { ICardSample } from './cardSample';

interface ICardList {
  cardData: ICardSample[];
}

export function CardList({ cardData }: ICardList) {
  return (
    <CardListStyled>
      {cardData.map((card) => {
        const handleCardClick = (id: string) => {
          console.log('on click card from card id via cardList', id);
        };
        return <Card key={card.id} {...card} onClick={handleCardClick} />;
      })}
    </CardListStyled>
  );
}

const CardListStyled = styled.div``;
