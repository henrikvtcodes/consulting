import { Injectable } from '@nestjs/common';
import { Customer, User } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

import {
  UserMetaData_Alter,
  UserMetadata,
  UpsertCustomer,
  CreateCustomer,
  addressFields,
} from './user.controller';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async updateUser(user: User, newData: UserMetaData_Alter): Promise<User> {
    const {
      name,
      phone,
      photo_url,
      address_line1,
      address_line2,
      city,
      state,
      postal_code,
    } = newData;

    const newUser = await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        // Ugly code, but it works; If field is empty, set as undefined to prevent Prisma from updating it
        name: name === '' ? undefined : name,
        phone: phone === '' ? undefined : phone,
        image: photo_url === '' ? undefined : photo_url,
        addressLine1: address_line1 === '' ? undefined : address_line1,
        addressLine2: address_line2 === '' ? undefined : address_line2,
        addressCity: city === '' ? undefined : city,
        addressState: state === '' ? undefined : state,
        addressZip: postal_code === '' ? undefined : postal_code,
      },
    });

    return newUser;
  }

  async newCustomer(user: User, newData: UpsertCustomer): Promise<Customer> {
    const userDataObj: UserMetadata = {
      ...user,
      address_line1: user.addressLine1 as string,
      address_line2: user.addressLine2 as string,
      city: user.addressCity as string,
      state: user.addressState as string,
      postal_code: user.addressZip as string,
    };

    for (let key in newData) {
      key = key as string;

      let value = newData[key];

      value = value === '' ? userDataObj[key] : value;

      newData[key] = value;
    }

    const newCustomer = await this.prisma.customer.create({
      data: {
        userId: user.id,
        firstName: newData.first_name,
        lastName: newData.last_name,
        addressLine1: newData.address_line1,
        addressLine2: newData.address_line2,
        addressCity: newData.city,
        addressState: newData.state,
        addressZip: newData.postal_code,
        sepBillingAddr: newData.sepBillingAddr,
      },
    });

    return newCustomer;
  }

  async updateCustomer(user: User, newData: CreateCustomer): Promise<Customer> {
    const customerData = await this.prisma.customer.findUnique({
      where: {
        userId: user.id,
      },
    });

    const userDataObj: UserMetadata = {
      ...user,
      address_line1: user.addressLine1 as string,
      address_line2: user.addressLine2 as string,
      city: user.addressCity as string,
      state: user.addressState as string,
      postal_code: user.addressZip as string,
    };

    if (!newData.sepBillingAddr) {
      // ANCHOR If billing address is not separate, copy user address into billing addressS
      for (let key in newData) {
        key = key as string;
        let value = newData[key];

        if (addressFields.includes(key)) {
          value = userDataObj[key];
        }

        newData[key] = value;
      }
    }

    newData.first_name =
      newData.first_name === '' ? undefined : newData.first_name;
    newData.last_name =
      newData.last_name === '' ? undefined : newData.last_name;

    if (
      // If the user is only updating their billing address, convert unchanged fields to undefined
      customerData?.sepBillingAddr === true &&
      newData.sepBillingAddr === true
    ) {
      newData.address_line1 =
        newData.address_line1 === '' ? undefined : newData.address_line1;
      newData.city = newData.city === '' ? undefined : newData.city;
      newData.state = newData.state === '' ? undefined : newData.state;
      newData.postal_code =
        newData.postal_code === '' ? undefined : newData.postal_code;
    } else if (
      customerData?.sepBillingAddr === false &&
      newData.sepBillingAddr === true
    ) {
      for (let key in newData) {
        key = key as string;
        let value = newData[key];

        value = value === '' ? undefined : value;
        newData[key] = value;
      }
    }

    const updatedCustomer = await this.prisma.customer.update({
      where: {
        userId: user.id,
      },
      data: {
        firstName: newData.first_name,
        lastName: newData.last_name,
        addressLine1: newData.address_line1,
        addressLine2: newData.address_line2,
        addressCity: newData.city,
        addressState: newData.state,
        addressZip: newData.postal_code,
        sepBillingAddr: newData.sepBillingAddr,
      },
    });

    return updatedCustomer;
  }
}
