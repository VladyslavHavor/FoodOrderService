import { Injectable } from '@nestjs/common';

@Injectable()
export class RestaurantsService {
  private restaurants = [
    { id: 1, name: 'Burger Town', category: 'Fast Food', rating: 4.6 },
    { id: 2, name: 'Pasta House', category: 'Italian', rating: 4.8 },
    { id: 3, name: 'Sushi Time', category: 'Japanese', rating: 4.5 },
  ];

  getAllRestaurants() {
    return this.restaurants;
  }

  getRestaurantById(id: number) {
    return this.restaurants.find(r => r.id === id);
  }
}
