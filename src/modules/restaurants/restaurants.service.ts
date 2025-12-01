import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantsService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.restaurant.findMany({
      include: { dishes: true },
    });
  }

  async getById(id: number) {
    const restaurant = await this.prisma.restaurant.findUnique({
      where: { id },
      include: { dishes: true },
    });

    if (!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }

    return restaurant;
  }

  create(dto: CreateRestaurantDto) {
    return this.prisma.restaurant.create({
      data: dto,
    });
  }

  async update(id: number, dto: UpdateRestaurantDto) {
    await this.getById(id); // якщо нема — NotFoundException

    return this.prisma.restaurant.update({
      where: { id },
      data: dto,
    });
  }

  async delete(id: number) {
    await this.getById(id);

    return this.prisma.restaurant.delete({
      where: { id },
    });
  }
}
