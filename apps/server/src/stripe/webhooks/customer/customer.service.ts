import { StripeWebhookHandler } from '@golevelup/nestjs-stripe';
import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  @StripeWebhookHandler('customer.updated')
  async handleCustomerUpdated(event: Stripe.Event) {
    const customer = event.data.object as Stripe.Customer;
    const userId = customer.metadata['userId'];

    await this.prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        addressLine1: customer.shipping.address.line1,
        addressLine2: customer.shipping.address.line2,
        addressCity: customer.shipping.address.city,
        addressState: customer.shipping.address.state,
        addressZip: customer.shipping.address.postal_code,
      },
    });
  }
}
