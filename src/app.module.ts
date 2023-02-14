import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AccountModule } from './shared/account/account.module';
import { AuthenticationModule } from './shared/authentication/authentication.module';
import { CardModule } from './shared/card/card.module';

@Module({
  imports: [DatabaseModule, AuthenticationModule, AccountModule, CardModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
