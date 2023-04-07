import { Inject, Injectable } from '@nestjs/common';
import { CreateTransactionDto } from 'src/entities/transaction/dto/create-transaction.dto';
import { Transaction } from 'src/entities/transaction/transaction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService {
  constructor(
    @Inject('TRANSACTION_REPOSITORY')
    private transactionRepository: Repository<Transaction>,
  ) {}

  async fetchTransactions(id: string): Promise<Transaction[]> {
    const transactions = await this.transactionRepository.find({
      where: {
        account: {
          id,
        },
      },
    });

    return transactions;
  }

  async createTransaction(
    createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    const createdTransaction =
      this.transactionRepository.create(createTransactionDto);
    await this.transactionRepository.save(createdTransaction);

    createdTransaction.account = undefined;
    return createdTransaction;
  }
}
