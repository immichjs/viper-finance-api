import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt/dist';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from 'src/database/database.module';
import { userRepository } from 'src/entities/user/user.repository';
import { AuthController } from './authentication.controller';
import { AuthenticationService } from './authentication.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'viper',
      signOptions: {
        expiresIn: 89400,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthenticationService, JwtStrategy, ...userRepository],
  exports: [JwtStrategy, PassportModule],
})
export class AuthenticationModule {}
