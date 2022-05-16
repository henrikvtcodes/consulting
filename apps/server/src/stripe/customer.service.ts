import { InjectStripeClient } from '@golevelup/nestjs-stripe';
import { Injectable } from '@nestjs/common';
import { Customer as DbCustomer } from '@prisma/client';
import Stripe from 'stripe';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CustomerService {
  constructor(
    private readonly prismaService: PrismaService,
    @InjectStripeClient() private stripe: Stripe,
  ) {}

  async createCustomer(
    customer: DbCustomer,
  ): Promise<Stripe.Response<Stripe.Customer>> {
    const allDetails = await this.prismaService.customer.findUnique({
      where: {
        id: customer.id,
      },
      include: {
        user: true,
      },
    });

    const sepAddr = allDetails.sepBillingAddr;

    const stripeCustomer = await this.stripe.customers.create({
      name: `${allDetails.firstName} ${allDetails.lastName}`,
      email: allDetails.user.email,
      phone: allDetails.user.phone,
      address: {
        line1: sepAddr ? allDetails.addressLine1 : allDetails.user.addressLine1,
        line2: sepAddr ? allDetails.addressLine2 : allDetails.user.addressLine2,
        city: sepAddr ? allDetails.addressCity : allDetails.user.addressCity,
        state: sepAddr ? allDetails.addressState : allDetails.user.addressState,
        postal_code: sepAddr
          ? allDetails.addressZip
          : allDetails.user.addressZip,
      },
      shipping: {
        name: allDetails.user.name,
        phone: allDetails.user.phone,
        address: {
          line1: allDetails.user.addressLine1,
          line2: allDetails.user.addressLine2,
          city: allDetails.user.addressCity,
          state: allDetails.user.addressState,
          postal_code: allDetails.user.addressZip,
        },
      },
    });

    return stripeCustomer;
  }

  async updateCustomer(
    customer: DbCustomer,
  ): Promise<Stripe.Response<Stripe.Customer>> {
    const allDetails = await this.prismaService.customer.findUnique({
      where: {
        id: customer.id,
      },
      include: {
        user: true,
      },
    });

    const sepAddr = allDetails.sepBillingAddr;

    const stripeCustomer = await this.stripe.customers.update(
      allDetails.stripeID,
      {
        name: `${allDetails.firstName} ${allDetails.lastName}`,
        email: allDetails.user.email,
        phone: allDetails.user.phone,
        address: {
          line1: sepAddr
            ? allDetails.addressLine1
            : allDetails.user.addressLine1,
          line2: sepAddr
            ? allDetails.addressLine2
            : allDetails.user.addressLine2,
          city: sepAddr ? allDetails.addressCity : allDetails.user.addressCity,
          state: sepAddr
            ? allDetails.addressState
            : allDetails.user.addressState,
          postal_code: sepAddr
            ? allDetails.addressZip
            : allDetails.user.addressZip,
        },
        shipping: {
          name: allDetails.user.name,
          phone: allDetails.user.phone,
          address: {
            line1: allDetails.user.addressLine1,
            line2: allDetails.user.addressLine2,
            city: allDetails.user.addressCity,
            state: allDetails.user.addressState,
            postal_code: allDetails.user.addressZip,
          },
        },
      },
    );

    return stripeCustomer;
  }

  async createSetupCheckout(
    customerId: string,
    url: string,
  ): Promise<Stripe.Response<Stripe.Checkout.Session>> {
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'setup',
      customer: customerId,
      success_url: `${url}/client/account?setupstate=failed&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${url}/client/account?setupstate=failed`,
    });

    return session;
  }
}
