import { Inject, Injectable } from '@nestjs/common';
import { Account } from 'src/entities/account/account.entity';
import { CreateAccountDto } from 'src/entities/account/dto/create-account.dto';
import { Repository } from 'typeorm';

@Injectable()
export class AccountService {
  constructor(
    @Inject('ACCOUNT_REPOSITORY')
    private accountRepository: Repository<Account>,
  ) {}

  async fetchAccounts(id: string) {
    const accounts = await this.accountRepository.find({
      where: {
        user: {
          id,
        },
      },
      select: {
        name: true,
        balance: true,
        createdAt: true,
      },
    });

    return accounts;
  }

  async createAccount(createAccountDto: CreateAccountDto): Promise<Account> {
    const createdAccount = this.accountRepository.create(createAccountDto);
    await this.accountRepository.save(createdAccount);

    createdAccount.user = undefined;
    return createdAccount;
  }
}
