import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { DishesService } from '../dishes/dishes.service';

describe('OrdersService', () => {
  let service: OrdersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrdersService,
        {
          provide: DishesService,
          useValue: {}, // mock dependency
        },
      ],
    }).compile();

    service = module.get<OrdersService>(OrdersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
