import { AddressOpt } from "./address";

export interface CustomerDetailsForm extends AddressOpt {
  first_name?: string;
  last_name?: string;
  separateAddr?: boolean;
}
