import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { OrderStatus } from '@prisma/client';
@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async createOrder(
    userId: number,
    restaurantId: number,
    items: { dishId: number; quantity: number }[],
  ) {
    // 1. Перевіряємо, чи існує ресторан
    const restaurant = await this.prisma.restaurant.findUnique({
      where: { id: restaurantId },
    });
    if (!restaurant) throw new NotFoundException('Restaurant not found');

    // 2. Беремо всі страви
    const dishIds = items.map((i) => i.dishId);

    const dishes = await this.prisma.dish.findMany({
      where: { id: { in: dishIds } },
    });

    if (dishes.length !== items.length)
      throw new NotFoundException('One of the dishes does not exist');

    // 3. Рахуємо total
    const total = items.reduce((sum, i) => {
      const dish = dishes.find((d) => d.id === i.dishId)!;
      return sum + Number(dish.price) * i.quantity;
    }, 0);

    // 4. Створюємо order
    const order = await this.prisma.order.create({
      data: {
        userId,
        total,
        restaurantId,
        items: {
          create: items.map((i) => ({
            dishId: i.dishId,
            quantity: i.quantity,
          })),
        },
      },
      include: {
        items: true,
      },
    });

    return order;
  }

  getAll() {
    return this.prisma.order.findMany({
      include: { items: true },
    });
  }

  getById(id: number) {
    return this.prisma.order.findUnique({
      where: { id },
      include: { items: true },
    });
  }

  getByUser(userId: number) {
    return this.prisma.order.findMany({
      where: { userId },
      include: { items: true },
    });
  }

async updateStatus(id: number, status: OrderStatus) {
  return this.prisma.order.update({
    where: { id },
    data: { status },
  });
}
}
