import { Injectable } from '@nestjs/common';
import { InvoiceStatus } from '@prisma/client';
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

    if (data?.invoice && data?.invoice.status === InvoiceStatus.draft) {
      data['invoice'] = null;

      return {
        ...data,
        invoice: null,
      };
    }

    const stripeInvoice = await this.invoiceService.getStripeInvoice(id);

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
}
