import { Controller, Get, Param } from '@nestjs/common';
import { DishesService } from './dishes.service';

@Controller('dishes')
export class DishesController {
  constructor(private readonly dishesService: DishesService) {}

  @Get()
  getAllDishes() {
    return this.dishesService.getAllDishes();
  }

  @Get('restaurant/:id')
  getDishesByRestaurant(@Param('id') id: string) {
    return this.dishesService.getDishesByRestaurant(Number(id));
  }

  @Get(':id')
  getDishById(@Param('id') id: string) {
    return this.dishesService.getDishById(Number(id));
  }
}
