import { Injectable } from '@nestjs/common';
import { DishesService } from '../dishes/dishes.service';

export type OrderStatus = 'new' | 'in_progress' | 'delivered';
export type OrderItem = { dishId: number; quantity: number };

// 🔹 додаємо `export` перед інтерфейсом
export interface Order {
  id: number;
  userId: number;
  restaurantId: number;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
  createdAt: Date;
}

@Injectable()
export class OrdersService {
  private orders: Order[] = [];
  private nextId = 1;

  constructor(private readonly dishesService: DishesService) {}

  createOrder(userId: number, restaurantId: number, items: OrderItem[]): Order {
    // рахуємо суму по цінах із DishesService
    const total = items.reduce((sum, it) => {
      const dish = this.dishesService.getDishById(it.dishId);
      return sum + (dish?.price ?? 0) * it.quantity;
    }, 0);

    const order: Order = {
      id: this.nextId++,
      userId,
      restaurantId,
      items,
      total,
      status: 'new',
      createdAt: new Date(),
    };

    this.orders.push(order);
    return order;
  }

  getAll(): Order[] {
    return this.orders;
  }

  getById(id: number): Order | undefined {
    return this.orders.find(o => o.id === id);
  }

  getByUser(userId: number): Order[] {
    return this.orders.filter(o => o.userId === userId);
  }

  updateStatus(id: number, status: OrderStatus): Order | undefined {
    const order = this.getById(id);
    if (order) order.status = status;
    return order;
  }
}
