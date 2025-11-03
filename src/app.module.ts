import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { RestaurantsModule } from './modules/restaurants/restaurants.module';
import { DishesModule } from './modules/dishes/dishes.module';
import { OrdersModule } from './modules/orders/orders.module';

@Module({
  imports: [UsersModule, RestaurantsModule, DishesModule, OrdersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
