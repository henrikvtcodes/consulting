import { InjectStripeClient } from '@golevelup/nestjs-stripe';
import { Injectable } from '@nestjs/common';
import { User as DbUser } from '@prisma/client';
import Stripe from 'stripe';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomerService {
  constructor(
    private readonly prisma: PrismaService,
    @InjectStripeClient() private stripe: Stripe,
  ) {}

  async createCustomer(user: DbUser): Promise<Stripe.Customer> {
    const customer = await this.stripe.customers.create({
      email: user.email,
      name: user.name,
      phone: user?.phone,
      shipping: {
        name: user.name,
        address: {
          line1: user?.addressLine1,
          line2: user?.addressLine2,
          city: user?.addressCity,
          state: user?.addressState,
          postal_code: user?.addressZip,
        },
      },
      metadata: {
        userId: user.id,
      },
    });

    await this.prisma.customer.upsert({
      create: {
        user: {
          connect: {
            id: user.id,
          },
        },
        stripeID: customer.id,
      },
      update: {
        stripeID: customer.id,
      },
      where: {
        userId: user.id,
      },
    });

    return customer;
  }

  async createCustomerPortal(
    cust: Stripe.Customer,
    url: string,
  ): Promise<Stripe.BillingPortal.Session> {
    const session = await this.stripe.billingPortal.sessions.create({
      customer: cust.id,
      return_url: url,
    });

    return session;
  }
}
