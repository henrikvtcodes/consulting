import { InjectStripeClient } from '@golevelup/nestjs-stripe';
import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { PrismaService } from '../../prisma/prisma.service';

import { InvoiceData, RawInvoiceData } from 'types';

@Injectable()
export class InvoiceService {
  constructor(
    private prisma: PrismaService,
    @InjectStripeClient() private stripe: Stripe,
  ) {}

  async getInvoiceData(id: string): Promise<RawInvoiceData> {
    const dbInvoice = await this.prisma.invoice.findUnique({
      where: {
        id: id,
      },
    });

    if (!dbInvoice) {
      return null;
    }

    const stripeInvoice = await this.stripe.invoices.retrieve(id);

    return {
      ...dbInvoice,
      stripe: stripeInvoice,
    };
  }

  async getStripeInvoice(id: string): Promise<Stripe.Invoice> {
    return this.stripe.invoices.retrieve(id);
  }
}
