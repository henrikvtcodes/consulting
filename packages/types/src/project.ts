import { Invoice, Project, Quote } from "@prisma/client";
import Stripe from "stripe";

export interface ProjectData extends Project {
  invoices: Invoice[];
  quotes: Quote[];
}

export interface RequestProject {
  name: string;
  description: string;
}

export interface CreateProject extends RequestProject {
  ownerId: string;
}

export interface QuoteData extends Quote {
  invoice: InvoiceData | null;
}

export interface PrismaQuoteAndInvoice extends Quote {
  invoice: Invoice | null;
}

export interface RawInvoiceData extends Invoice {
  stripe: Stripe.Invoice;
}

export interface InvoiceData extends Invoice {
  amount: number;
  file: string;
  payUrl: string;
}
