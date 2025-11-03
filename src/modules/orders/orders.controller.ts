import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  create(@Body() body: {
    userId: number;
    restaurantId: number;
    items: { dishId: number; quantity: number }[];
  }) {
    const { userId, restaurantId, items } = body;
    return this.ordersService.createOrder(userId, restaurantId, items);
  }

  @Get()
  getAll() {
    return this.ordersService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.ordersService.getById(Number(id));
  }

  @Get('user/:userId')
  getByUser(@Param('userId') userId: string) {
    return this.ordersService.getByUser(Number(userId));
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body() body: { status: 'new'|'in_progress'|'delivered' }) {
    return this.ordersService.updateStatus(Number(id), body.status);
  }
}
