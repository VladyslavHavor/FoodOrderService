import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'test@gmail.com', description: 'Email користувача' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '123456', description: 'Пароль (мінімум 6 символів)' })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({
    example: 'Іван',
    description: 'Імʼя користувача',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;
}
