import { Module } from '@nestjs/common';
import { StripeModule as StripeHandler } from '@golevelup/nestjs-stripe';

import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import { CustomerService } from './customer.service';
import { InvoiceController } from './invoice/invoice.controller';
import { CheckoutEventService } from './webhooks/checkout/checkoutEvent.service';
import { CustomerEventService } from './webhooks/customer/customerEvent.service';

@Module({
  imports: [
    StripeHandler.forRoot(StripeHandler, {
      apiKey: process.env.STRIPE_SECRET_KEY,
      webhookConfig: {
        stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
      },
    }),
  ],
  controllers: [StripeController, InvoiceController],
  providers: [
    StripeService,
    CustomerService,
    CustomerEventService,
    CheckoutEventService,
  ],
  exports: [CustomerService],
})
export class StripeModule {}
