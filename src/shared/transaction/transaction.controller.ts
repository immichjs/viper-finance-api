import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { CreateTransactionDto } from 'src/entities/transaction/dto/create-transaction.dto';
import { Transaction } from 'src/entities/transaction/transaction.entity';
import { TransactionService } from './transaction.service';

@Controller('transaction')
@UseGuards(AuthGuard('jwt'))
export class TransactionController {
  constructor(private readonly transactionService: TransactionService) {}

  @Get(':id')
  async fetchTransactions(@Param('id') id: string): Promise<Transaction[]> {
    return await this.transactionService.fetchTransactions(id);
  }

  @Post()
  async createTransaction(
    @Body() createTransactionDto: CreateTransactionDto,
  ): Promise<Transaction> {
    return await this.transactionService.createTransaction(
      createTransactionDto,
    );
  }
}
