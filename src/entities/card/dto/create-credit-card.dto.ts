import { Transform } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { User } from 'src/entities/user/user.entity';

export class CreateCreditCardDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toUpperCase())
  name: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.padStart(12, '*'))
  number: string;

  @IsNumber()
  @IsNotEmpty()
  credit: number;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.padStart(2, 0))
  expired: string;

  @IsNotEmpty()
  user: User;
}
