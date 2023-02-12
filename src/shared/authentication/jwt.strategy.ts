import { Inject, UnauthorizedException } from '@nestjs/common';
import { Injectable } from '@nestjs/common/decorators';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Repository } from 'typeorm';
import { User } from '../../entities/user/user.entity';
import { IJwtPayload } from '../../interfaces/jwt-payload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
  ) {
    super({
      secretOrKey: 'viper',
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate({ email }: IJwtPayload): Promise<User> {
    const user: User = await this.userRepository.findOne({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
