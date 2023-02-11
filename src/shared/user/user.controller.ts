import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/entities/user/dto/user-create.dto';
import { User } from 'src/entities/user/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getUsers(): Promise<User[]> {
    return await this.userService.getUsers();
  }

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userService.createUser(createUserDto);
  }
}
