import { Test, TestingModule } from '@nestjs/testing';
import { CustomerEvent } from './customer.event';

describe('CustomerEventService', () => {
  let service: CustomerEvent;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CustomerEvent],
    }).compile();

    service = module.get<CustomerEvent>(CustomerEvent);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
