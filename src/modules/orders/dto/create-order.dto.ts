import { IsInt, IsArray, ValidateNested, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

class OrderItemDto {
  @ApiProperty({
    example: 5,
    description: 'ID страви, яку замовляють',
  })
  @IsInt()
  dishId: number;

  @ApiProperty({
    example: 2,
    description: 'Кількість одиниць цієї страви',
    minimum: 1,
  })
  @IsInt()
  @Min(1)
  quantity: number;
}

export class CreateOrderDto {
  @ApiProperty({
    example: 1,
    description: 'ID користувача, який робить замовлення',
  })
  @IsInt()
  userId: number;

  @ApiProperty({
    example: 3,
    description: 'ID ресторану, з якого оформлюється замовлення',
  })
  @IsInt()
  restaurantId: number;

  @ApiProperty({
    description: 'Список страв у замовленні',
    type: [OrderItemDto],
    example: [
      { dishId: 5, quantity: 2 },
      { dishId: 8, quantity: 1 },
    ],
  })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  items: OrderItemDto[];
}
