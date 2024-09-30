import { Test, TestingModule } from '@nestjs/testing';
import { BusmapService } from './busmap.service';

describe('BusmapService', () => {
  let service: BusmapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusmapService],
    }).compile();

    service = module.get<BusmapService>(BusmapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
