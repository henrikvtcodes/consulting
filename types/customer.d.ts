import { Address } from "./user";

export interface CustomerData {

}

export interface UpsertCustomer extends Address {
  first_name?: string;
  last_name?: string;
  sepBillingAddr?: boolean;
}

export interface CreateCustomer extends Address {
  first_name: string;
  last_name: string;
  sepBillingAddr: boolean;
}