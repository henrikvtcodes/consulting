import { Test, TestingModule } from '@nestjs/testing';
import { CustomerEventService } from './customerEvent.service';

describe('CustomerEventService', () => {
  let service: CustomerEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerEventService],
    }).compile();

    service = module.get<CustomerEventService>(CustomerEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
