import { Role } from "@prisma/client";

import { AddressOpt } from "./address";

export interface User extends AddressOpt {
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
