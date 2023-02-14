import { Inject, Injectable } from '@nestjs/common';
import { Card } from 'src/entities/card/card.entity';
import { CreateCreditCardDto } from 'src/entities/card/dto/create-credit-card.dto';
import { Repository } from 'typeorm';

@Injectable()
export class CardService {
  constructor(
    @Inject('CARD_REPOSITORY')
    private readonly cardRepository: Repository<Card>,
  ) {}

  async createCreditCard(
    createCreditCardDto: CreateCreditCardDto,
  ): Promise<Card> {
    const createdCreditCard = this.cardRepository.create(createCreditCardDto);
    await this.cardRepository.save(createdCreditCard);

    return createdCreditCard;
  }

  async fetchCards(id: string): Promise<Card[]> {
    const cards = await this.cardRepository.find({
      where: {
        user: {
          id,
        },
      },
    });

    return cards;
  }
}
