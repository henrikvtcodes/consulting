import { Invoice, Project, Quote } from "@prisma/client";

export interface ProjectData extends Project {
  invoices: Invoice[];
  quotes: Quote[];
}
