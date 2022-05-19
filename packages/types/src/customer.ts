import { AddressOpt } from "./address";

export interface Customer extends AddressOpt {
  firstName: string;
  lastName: string;
  separateAddr: boolean;
}

export interface CustomerDetailsForm extends AddressOpt {
  firstName?: string;
  lastName?: string;
  separateAddr?: boolean;
}

export interface CustomerExists {
  exists:
    | {
        stripe: boolean;
      }
    | false;
}
