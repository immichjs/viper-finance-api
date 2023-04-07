import { DataSource } from 'typeorm';
import { Transaction } from './transaction.entity';

export const transactionRepository = [
  {
    provide: 'TRANSACTION_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Transaction),
    inject: ['DATA_SOURCE'],
  },
];
