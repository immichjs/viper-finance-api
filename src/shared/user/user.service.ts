import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/entities/user/dto/user-create.dto';
import { User } from 'src/entities/user/user.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY')
    private readonly userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const checkUserEmailExists = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    console.log(checkUserEmailExists);

    if (checkUserEmailExists) {
      throw new BadRequestException(
        'Já existe um usuário com este email cadastrado.',
      );
    }

    const defineUserData = this.userRepository.create(createUserDto);
    const userCreated = await this.userRepository.save(defineUserData);

    return userCreated;
  }
}
