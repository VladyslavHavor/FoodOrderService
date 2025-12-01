import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderStatusDto } from './dto/update-status.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() dto: CreateOrderDto) {
    return this.ordersService.createOrder(dto.userId, dto.restaurantId, dto.items);
  }

  @Get()
  getAll() {
    return this.ordersService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.ordersService.getById(Number(id));
  }

  @Get('user/:userId')
  getByUser(@Param('userId') userId: string) {
    return this.ordersService.getByUser(Number(userId));
  }

 @Patch(':id/status')
updateStatus(
  @Param('id') id: string,
  @Body() dto: UpdateOrderStatusDto
) {
  return this.ordersService.updateStatus(Number(id), dto.status);
}

}
