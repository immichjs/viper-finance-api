import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { accountRepository } from 'src/entities/account/account.repository';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

@Module({
  imports: [DatabaseModule],
  controllers: [AccountController],
  providers: [AccountService, ...accountRepository],
})
export class AccountModule {}
