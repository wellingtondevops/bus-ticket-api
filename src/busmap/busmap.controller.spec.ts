import { Test, TestingModule } from '@nestjs/testing';
import { BusmapController } from './busmap.controller';

describe('BusmapController', () => {
  let controller: BusmapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BusmapController],
    }).compile();

    controller = module.get<BusmapController>(BusmapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
