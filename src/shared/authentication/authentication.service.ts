import {
  ConflictException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthCredentialsDto } from 'src/entities/user/dto/auth-credentials.dto';
import { CreateUserDto } from 'src/entities/user/dto/create-user.dto';
import { User } from 'src/entities/user/user.entity';
import { IJwtPayload } from 'src/interfaces/jwt-payload.interface';
import { IUserAuthentication } from 'src/interfaces/user-authentication.interface';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  async signUp({
    name,
    email,
    password,
  }: CreateUserDto): Promise<IUserAuthentication> {
    const hash = await bcrypt.hash(password, 10);

    const createdUser: User = await this.userRepository.create({
      name,
      email,
      password: hash,
    });

    try {
      const savedUser = await this.userRepository.save(createdUser);

      savedUser.password = undefined;
      const payload: IJwtPayload = { email };

      const token = await this.jwtService.sign({
        payload,
      });

      return {
        ...savedUser,
        token,
      };
    } catch ({ code }) {
      if (code === '23505') {
        throw new ConflictException(
          'Já existe um usuário com essas credenciais.',
        );
      }
    }
  }

  async signIn({
    email,
    password,
  }: AuthCredentialsDto): Promise<IUserAuthentication> {
    const findedUser = await this.userRepository.findOne({
      where: { email },
    });

    const compareUserPassword = await bcrypt.compare(
      password,
      findedUser.password,
    );

    if (findedUser && compareUserPassword) {
      findedUser.password = undefined;
      const payload: IJwtPayload = { email };

      const token = await this.jwtService.sign({
        payload,
      });

      return { ...findedUser, token };
    } else {
      throw new UnauthorizedException(
        'Por favor, verifique as suas credenciais de acesso.',
      );
    }
  }
}
