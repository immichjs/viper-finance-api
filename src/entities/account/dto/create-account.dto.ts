import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { User } from 'src/entities/user/user.entity';

export class CreateAccountDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toUpperCase())
  name: string;

  @IsNumber()
  @IsNotEmpty()
  balance: number;

  @IsString()
  @IsNotEmpty()
  user: User;
}
