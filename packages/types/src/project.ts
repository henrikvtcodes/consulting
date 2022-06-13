import { Invoice, Project, Quote } from "@prisma/client";

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
  invoice: Invoice | null;
}
