import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AccountModule } from './shared/account/account.module';
import { AuthenticationModule } from './shared/authentication/authentication.module';
import { CardModule } from './shared/card/card.module';
import { TransactionModule } from './shared/transaction/transaction.module';

@Module({
  imports: [
    DatabaseModule,
    AuthenticationModule,
    AccountModule,
    CardModule,
    TransactionModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
