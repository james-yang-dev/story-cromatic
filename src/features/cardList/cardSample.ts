import { images } from '@src/assets/images';
import { ICard } from '../card/Card';

export type ICardSample = Omit<ICard, 'onClick'>;

export const cardSample: ICardSample[] = [
  {
    id: 'card-sample-1',
    header: '시무룩 고양이',
    src: images.simuruk,
  },
];
