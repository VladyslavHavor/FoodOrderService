import { Controller, Get, Param } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';

@Controller('restaurants')
export class RestaurantsController {
  constructor(private readonly restaurantsService: RestaurantsService) {}

  @Get()
  getAllRestaurants() {
    return this.restaurantsService.getAllRestaurants();
  }

  @Get(':id')
  getRestaurantById(@Param('id') id: string) {
    return this.restaurantsService.getRestaurantById(Number(id));
  }
}
