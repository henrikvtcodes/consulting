import { InjectStripeClient } from '@golevelup/nestjs-stripe';
import { Injectable } from '@nestjs/common';
import { Customer as DbCustomer, User as DbUser } from '@prisma/client';
import Stripe from 'stripe';
import { Customer } from 'types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomerService {
  constructor(
    private readonly prisma: PrismaService,
    @InjectStripeClient() private stripe: Stripe,
  ) {}

  customerIsDeleted = (
    // Wacky typeguard thing
    customer: Stripe.Response<Stripe.Customer | Stripe.DeletedCustomer>,
  ): customer is Stripe.Response<Stripe.DeletedCustomer> => {
    return !!customer.deleted;
  };

  async createCustomer(user: DbUser): Promise<Stripe.Customer> {
    const customer = await this.stripe.customers.create({
      email: user.email,
      // name: user.name,
      // phone: user?.phone,
      // shipping: {
      //   name: user.name,
      //   address: {
      //     line1: user?.addressLine1,
      //     line2: user?.addressLine2,
      //     city: user?.addressCity,
      //     state: user?.addressState,
      //     postal_code: user?.addressZip,
      //   },
      // },
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

  async getCustomerData(customer: DbCustomer): Promise<Customer> {
    if (customer == null || customer.stripeID == null) {
      return null;
    }

    const stripeCustomer = await this.stripe.customers.retrieve(
      customer.stripeID,
    );

    const paymentMethods = await this.stripe.customers.listPaymentMethods(
      stripeCustomer.id,
      { type: 'card' },
    );

    return {
      customer: stripeCustomer,
      paymentMethods: paymentMethods.data,
    };
  }

  async getCustomer(user: DbUser): Promise<Stripe.Response<Stripe.Customer>> {
    const customer = await this.prisma.customer.findUnique({
      where: { userId: user.id },
    });

    if (!customer) {
      return null;
    }

    if (!customer.stripeID) {
      return null;
    }

    const stripeCustomer = await this.stripe.customers.retrieve(
      customer.stripeID,
    );

    if (this.customerIsDeleted(stripeCustomer)) return null;

    return stripeCustomer;
  }

  async getOrCreateCustomer(user: DbUser): Promise<Stripe.Customer> {
    const customer = await this.prisma.customer.findUnique({
      where: { userId: user.id },
      rejectOnNotFound: false,
    });

    if (customer.stripeID !== (null || undefined)) {
      const stripeCustomer = await this.stripe.customers.retrieve(
        customer.stripeID,
      );

      if (this.customerIsDeleted(stripeCustomer)) return null;

      return stripeCustomer;
    }

    return await this.createCustomer(user);
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

  // async createSetupIntent(
  //   cust: Stripe.Customer,
  //   url: string,
  // ): Promise<Stripe.Checkout.Session> {
  //   const session = await this.stripe.checkout.sessions.create({
  //     payment_method_types: ['card'],
  //     mode: 'setup',
  //     customer: cust.id,
  //     success_url: `${url}?session_id={CHECKOUT_SESSION_ID}`,
  //     cancel_url: `${url}`,
  //   });

  //   return session;
  // }
}
