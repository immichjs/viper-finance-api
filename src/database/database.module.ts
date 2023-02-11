import { Module } from '@nestjs/common';
import { databaseServices } from './database.service';

@Module({
  providers: [...databaseServices],
  exports: [...databaseServices],
})
export class DatabaseModule {}
