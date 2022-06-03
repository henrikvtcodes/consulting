import { Module } from '@nestjs/common';
import { CheckoutEvent } from './checkout/checkout.event';
import { CustomerEvent } from './customer/customer.event';

@Module({
  providers: [CustomerEvent, CheckoutEvent],
})
export class WebhooksModule {}
