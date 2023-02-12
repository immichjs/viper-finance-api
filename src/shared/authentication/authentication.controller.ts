import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialsDto } from 'src/entities/user/dto/auth-credentials.dto';
import { CreateUserDto } from 'src/entities/user/dto/create-user.dto';
import { IUserAuthentication } from 'src/interfaces/user-authentication.interface';
import { AuthenticationService } from './authentication.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('/signup')
  async signUp(
    @Body() createUserDto: CreateUserDto,
  ): Promise<IUserAuthentication> {
    return await this.authenticationService.signUp(createUserDto);
  }

  @Post('/signin')
  signIn(
    @Body() authCredencialsDto: AuthCredentialsDto,
  ): Promise<IUserAuthentication> {
    return this.authenticationService.signIn(authCredencialsDto);
  }
}
