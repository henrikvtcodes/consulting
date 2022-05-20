import { InjectStripeClient } from '@golevelup/nestjs-stripe';
import { Body, Controller, Post, Req } from '@nestjs/common';
import { User as DbUser } from '@prisma/client';
import Stripe from 'stripe';
import { CustomerService } from './customer.service';

@Controller('stripe')
export class StripeController {
  constructor(
    @InjectStripeClient() private stripe: Stripe,
    private customerService: CustomerService,
  ) {}
  @Post('/createPortalSession')
  async setupCustomer(@Req() req, @Body() body) {
    const user = req.user as DbUser;

    const customer = await this.customerService.createCustomer(user);

    const session = await this.customerService.createCustomerPortal(
      customer,
      body.url,
    );

    return {
      url: session.url,
    };
  }
}
