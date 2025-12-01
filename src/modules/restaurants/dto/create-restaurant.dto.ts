import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRestaurantDto {
  @ApiProperty({
    example: 'Pizza House',
    description: 'Назва ресторану',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Найкраща піца у місті',
    description: 'Опис ресторану',
    required: false,
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({
    example: 'вул. Центральна 12, Київ',
    description: 'Фізична адреса ресторану',
  })
  @IsString()
  @IsNotEmpty()
  address: string;
}
