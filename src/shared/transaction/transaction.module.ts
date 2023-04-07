import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { transactionRepository } from 'src/entities/transaction/transaction.repository';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';

@Module({
  imports: [DatabaseModule],
  controllers: [TransactionController],
  providers: [TransactionService, ...transactionRepository],
})
export class TransactionModule {}
