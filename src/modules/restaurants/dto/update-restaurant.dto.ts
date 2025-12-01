import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateRestaurantDto {
  @ApiProperty({
    example: 'New Pizza House',
    description: 'Оновлена назва ресторану',
    required: false,
  })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({
    example: 'Ресторан повністю оновив меню та інтерʼєр',
    description: 'Оновлений опис ресторану',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 'вул. Нова 20, Київ',
    description: 'Оновлена адреса ресторану',
    required: false,
  })
  @IsOptional()
  @IsString()
  address?: string;
}
