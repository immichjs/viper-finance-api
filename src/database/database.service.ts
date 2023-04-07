import { Account } from 'src/entities/account/account.entity';
import { Card } from 'src/entities/card/card.entity';
import { Transaction } from 'src/entities/transaction/transaction.entity';
import { User } from 'src/entities/user/user.entity';
import { DataSource } from 'typeorm';

export const databaseServices = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'viper.finance',
        entities: [User, Account, Card, Transaction],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
