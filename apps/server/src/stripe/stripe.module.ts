import { Module } from '@nestjs/common';
import { StripeModule as StripeHandler } from '@golevelup/nestjs-stripe';

import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';

@Module({
  imports: [
    StripeHandler.forRoot(StripeHandler, {
      apiKey: process.env.STRIPE_SECRET_KEY,
      webhookConfig: {
        stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
      },
    }),
  ],
  controllers: [StripeController],
  providers: [StripeService],
})
export class StripeModule {}
