import { IsString, IsNumber, IsOptional, IsInt, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateDishDto {
  @ApiProperty({
    example: 'Маргарита',
    description: 'Назва страви',
  })
  @IsString()
  name: string;

  @ApiProperty({
    example: 'Класична піца з томатним соусом і сиром моцарела',
    description: 'Опис страви',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({
    example: 185.5,
    description: 'Ціна страви у гривнях',
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    example: 1,
    description: 'ID ресторану, якому належить ця страва',
  })
  @IsInt()
  @Min(1)
  restaurantId: number;
}
