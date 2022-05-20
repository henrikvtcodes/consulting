import { Test, TestingModule } from '@nestjs/testing';
import { CheckoutEventService } from './checkoutEvent.service';

describe('CheckoutService', () => {
  let service: CheckoutEventService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckoutEventService],
    }).compile();

    service = module.get<CheckoutEventService>(CheckoutEventService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
