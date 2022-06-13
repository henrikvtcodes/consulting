import { Injectable } from '@nestjs/common';
import { InvoiceStatus } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class QuoteService {
  constructor(private prisma: PrismaService) {}

  async getQuoteData(id: string, ownerId: string) {
    const data = await this.prisma.quote.findFirst({
      where: {
        id: id,
        customerId: ownerId,
      },
      rejectOnNotFound: false,
      include: {
        invoice: true,
      },
    });

    if (data.invoice && data.invoice.status === InvoiceStatus.draft) {
      data.invoice = null;
    }

    return data;
  }
}
