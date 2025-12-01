import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';

@Injectable()
export class DishesService {
  constructor(private prisma: PrismaService) {}

  getAll() {
    return this.prisma.dish.findMany({
      include: { restaurant: true },
    });
  }

  async getById(id: number) {
    const dish = await this.prisma.dish.findUnique({
      where: { id },
      include: { restaurant: true },
    });

    if (!dish) {
      throw new NotFoundException('Dish not found');
    }

    return dish;
  }

  // Метод потрібний для OrdersService
  async getDishById(id: number) {
    const dish = await this.prisma.dish.findUnique({
      where: { id },
    });

    if (!dish) {
      throw new NotFoundException('Dish not found');
    }

    return dish;
  }

  create(dto: CreateDishDto) {
    return this.prisma.dish.create({
      data: {
        name: dto.name,
        description: dto.description,
        price: dto.price,
        restaurant: { connect: { id: dto.restaurantId } },
      },
    });
  }

  async update(id: number, dto: UpdateDishDto) {
    await this.getById(id);

    return this.prisma.dish.update({
      where: { id },
      data: dto,
    });
  }

  async delete(id: number) {
    await this.getById(id);

    return this.prisma.dish.delete({
      where: { id },
    });
  }
}
