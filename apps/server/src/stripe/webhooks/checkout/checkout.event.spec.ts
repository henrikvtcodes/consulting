import { Test, TestingModule } from '@nestjs/testing';
import { CheckoutEvent } from './checkout.event';

describe('CheckoutEvent', () => {
  let service: CheckoutEvent;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CheckoutEvent],
    }).compile();

    service = module.get<CheckoutEvent>(CheckoutEvent);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
