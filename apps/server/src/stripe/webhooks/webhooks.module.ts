import { Module } from '@nestjs/common';
import { CheckoutService } from './checkout/checkout.service';
import { CustomerService } from './customer/customer.service';

@Module({
  providers: [CustomerService, CheckoutService],
})
export class WebhooksModule {}
