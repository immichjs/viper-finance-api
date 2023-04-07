import { Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Account } from '../../account/account.entity';
import { TransactionType } from '../enum/transaction-type.enum';

export class CreateTransactionDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toUpperCase())
  name: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toUpperCase())
  description: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsString()
  @IsNotEmpty()
  account: Account;

  @IsEnum(TransactionType)
  @IsNotEmpty()
  type: TransactionType;
}
