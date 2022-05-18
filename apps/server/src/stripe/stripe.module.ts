import { Module } from '@nestjs/common';
import { StripeModule as StripeHandler } from '@golevelup/nestjs-stripe';

import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import { CustomerService } from './customer.service';
import { InvoiceController } from './invoice/invoice.controller';
import { CheckoutService } from './webhooks/checkout/checkout.service';

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
  providers: [StripeService, CustomerService, CheckoutService],
  exports: [CustomerService],
})
export class StripeModule {}
