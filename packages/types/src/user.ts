import { User as DbUser, Customer, Role } from "@prisma/client";

import { AddressOpt } from "./address";

export interface UserData extends AddressOpt {
  name: string;
  email: string;
  phone: string;
  image: string;
  role: Role;
  isInvited: boolean;
}

export interface UserDetailsForm extends AddressOpt {
  name?: string;
  email?: string;
  phone?: string;
  image?: string;
}

export interface AuthdUser extends DbUser {
  customer: Customer;
}
