import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthenticationModule } from './shared/authentication/authentication.module';

@Module({
  imports: [DatabaseModule, AuthenticationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
