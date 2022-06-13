import { Injectable } from '@nestjs/common';
import { InvoiceStatus, QuoteStatus } from '@prisma/client';
import { QuoteData, PrismaQuoteAndInvoice } from 'types';
import { PrismaService } from '../../prisma/prisma.service';
import { InvoiceService } from '../../stripe/invoice/invoice.service';

@Injectable()
export class QuoteService {
  constructor(
    private prisma: PrismaService,
    private invoiceService: InvoiceService,
  ) {}

  async getQuoteData(id: string, ownerId: string): Promise<QuoteData> {
    const data: PrismaQuoteAndInvoice = await this.prisma.quote.findFirst({
      where: {
        id: id,
        customerId: ownerId,
      },
      rejectOnNotFound: false,
      include: {
        invoice: true,
      },
    });

    if (!data.invoice) {
      data['invoice'] = null;
      // console.log('invoice is nonexistant');

      return {
        ...data,
        invoice: null,
      };
    }

    // console.log('invoice is existant');

    if (data?.invoice.status === InvoiceStatus.draft) {
      data['invoice'] = null;
      console.log('invoice is draft');

      return {
        ...data,
        invoice: null,
      };
    }

    // console.log('invoice is not draft');

    const stripeInvoice = await this.invoiceService.getStripeInvoice(
      data.invoice.id,
    );

    return {
      ...data,
      invoice: {
        ...data.invoice,
        amount: stripeInvoice.total,
        file: stripeInvoice.invoice_pdf,
        payUrl: stripeInvoice.hosted_invoice_url,
      },
    };
  }

  async approveQuote(id: string, ownerId: string): Promise<void | null> {
    const quote = await this.prisma.quote.findFirst({
      where: {
        id: id,
        customerId: ownerId,
      },
      rejectOnNotFound: false,
    });

    if (!quote) {
      return null;
    }

    await this.prisma.quote.update({
      where: {
        id: quote.id,
      },
      data: {
        status: QuoteStatus.approved,
      },
    });
  }
}
