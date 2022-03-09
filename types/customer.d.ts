export interface CustomerData {

}

export type UpsertCustomer = {
  first_name?: string;
  last_name?: string;
  sepBillingAddr?: boolean;
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
}