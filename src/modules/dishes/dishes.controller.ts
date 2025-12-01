import { Controller, Get, Post, Param, Body, Patch, Delete } from '@nestjs/common';
import { DishesService } from './dishes.service';
import { CreateDishDto } from './dto/create-dish.dto';
import { UpdateDishDto } from './dto/update-dish.dto';
import { ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('Dishes')
@Controller('dishes')
export class DishesController {
  constructor(private dishesService: DishesService) {}

  @Get()
  getAll() {
    return this.dishesService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.dishesService.getById(Number(id));
  }

  @Post()
  @ApiBody({ type: CreateDishDto })
  create(@Body() dto: CreateDishDto) {
    return this.dishesService.create(dto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateDishDto) {
    return this.dishesService.update(Number(id), dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.dishesService.delete(Number(id));
  }
}
