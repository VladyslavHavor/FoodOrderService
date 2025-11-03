import { Injectable } from '@nestjs/common';

@Injectable()
export class DishesService {
  private dishes = [
    { id: 1, name: 'Cheeseburger', price: 150, restaurantId: 1 },
    { id: 2, name: 'Big Pizza', price: 300, restaurantId: 2 },
    { id: 3, name: 'Sushi Set', price: 250, restaurantId: 3 },
    { id: 4, name: 'Fries', price: 70, restaurantId: 1 },
  ];

  getAllDishes() {
    return this.dishes;
  }

  getDishesByRestaurant(restaurantId: number) {
    return this.dishes.filter(dish => dish.restaurantId === restaurantId);
  }

  getDishById(id: number) {
    return this.dishes.find(dish => dish.id === id);
  }
}
