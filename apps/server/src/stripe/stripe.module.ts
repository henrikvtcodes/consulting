import { Module } from '@nestjs/common';
import { StripeModule as StripeHandler } from '@golevelup/nestjs-stripe';

import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import { CustomerService } from './customer.service';
import { InvoiceController } from './invoice/invoice.controller';
import { WebhooksModule } from './webhooks/webhooks.module';
import { CustomerController } from './customer/customer.controller';
import { InvoiceService } from './invoice/invoice.service';

@Module({
  imports: [
    StripeHandler.forRoot(StripeHandler, {
      apiKey: process.env.STRIPE_SECRET_KEY,
      webhookConfig: {
        stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
      },
    }),
    WebhooksModule,
  ],
  controllers: [StripeController, InvoiceController, CustomerController],
  providers: [StripeService, CustomerService, InvoiceService],
  exports: [CustomerService, InvoiceService],
})
export class StripeModule {}
