import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Card } from 'src/entities/card/card.entity';
import { CreateCreditCardDto } from 'src/entities/card/dto/create-credit-card.dto';
import { CardService } from './card.service';

@Controller('card')
@UseGuards(AuthGuard('jwt'))
export class CardController {
  constructor(private readonly cardService: CardService) {}

  @Post()
  async createCreditCard(
    @Body() createCreditCardDto: CreateCreditCardDto,
  ): Promise<Card> {
    return await this.cardService.createCreditCard(createCreditCardDto);
  }

  @Get(':id')
  async fetchCards(@Param('id') id: string): Promise<Card[]> {
    return await this.cardService.fetchCards(id);
  }
}
