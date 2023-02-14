import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { Account } from 'src/entities/account/account.entity';
import { CreateAccountDto } from 'src/entities/account/dto/create-account.dto';
import { AccountService } from './account.service';

@Controller('account')
@UseGuards(AuthGuard('jwt'))
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get(':id')
  async fetchAccounts(@Param('id') id: string): Promise<Account[]> {
    return await this.accountService.fetchAccounts(id);
  }

  @Post()
  async createAccount(
    @Body() createAccountDto: CreateAccountDto,
  ): Promise<Account> {
    return await this.accountService.createAccount(createAccountDto);
  }
}
