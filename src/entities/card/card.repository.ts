import { DataSource } from 'typeorm';
import { Card } from './card.entity';

export const cardRepository = [
  {
    provide: 'CARD_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Card),
    inject: ['DATA_SOURCE'],
  },
];
