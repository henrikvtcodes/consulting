import { Stripe } from "stripe";
import { AddressOpt } from "./address";

export interface CustomerDetailsForm extends AddressOpt {
  firstName?: string;
  lastName?: string;
  separateAddr?: boolean;
}

export interface CustomerExists {
  exists: boolean;
}

export interface Customer {
  customer: Stripe.Response<Stripe.Customer | Stripe.DeletedCustomer>;
  paymentMethods: Stripe.PaymentMethod[];
}
