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
        entities: [User],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
