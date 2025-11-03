import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { DishesModule } from '../dishes/dishes.module';

@Module({
  imports: [DishesModule],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
