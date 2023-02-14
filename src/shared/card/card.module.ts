import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { cardRepository } from 'src/entities/card/card.repository';
import { CardController } from './card.controller';
import { CardService } from './card.service';

@Module({
  imports: [DatabaseModule],
  providers: [CardService, ...cardRepository],
  controllers: [CardController],
})
export class CardModule {}
