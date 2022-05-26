export type Address = {
  addressLine1: string;
  addressLine2: string;
  addressCity: string;
  addressState: string;
  addressZip: string;
};

export type AddressOpt = {
  addressLine1?: string;
  addressLine2?: string;
  addressCity?: string;
  addressState?: string;
  addressZip?: string;
};

type EnforceKeys<T> = Array<keyof T>; // Helpful doodad from StackOverflow

export const addressFields: EnforceKeys<Address> = [
  "addressLine1",
  "addressLine2",
  "addressCity",
  "addressState",
  "addressZip",
];
