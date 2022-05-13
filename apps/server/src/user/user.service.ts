import { Injectable } from '@nestjs/common';
import { Customer as DbCustomer, User as DbUser } from '@prisma/client';
import { AddressOpt, Customer, User, UserDetailsForm } from 'types';
import { PrismaService } from '../prisma/prisma.service';

import { addressFields } from 'types';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async updateUser(user: DbUser, newData: UserDetailsForm): Promise<DbUser> {
    const {
      name,
      phone,
      image,
      addressLine1,
      addressLine2,
      addressCity,
      addressState,
      addressZip,
    } = newData;

    const newUser = await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        // Ugly code, but it works; If field is empty, set as undefined to prevent Prisma from updating it
        name: name === '' ? undefined : name,
        phone: phone === '' ? undefined : phone,
        image: image === '' ? undefined : image,
        addressLine1: addressLine1 === '' ? undefined : addressLine1,
        addressLine2: addressLine2 === '' ? undefined : addressLine2,
        addressCity: addressCity === '' ? undefined : addressCity,
        addressState: addressState === '' ? undefined : addressState,
        addressZip: addressZip === '' ? undefined : addressZip,
      },
    });

    return newUser;
  }

  async newCustomer(user: DbUser, newData: Customer): Promise<DbCustomer> {
    const userDataObj: User = {
      ...user,
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
        ...newData,
      },
    });

    return newCustomer;
  }

  async updateCustomer(user: DbUser, newData: Customer): Promise<DbCustomer> {
    const customerData = await this.prisma.customer.findUnique({
      where: {
        userId: user.id,
      },
    });

    const userDataObj: User = {
      ...user,
    };

    if (!newData.separateAddr) {
      // ANCHOR If billing address is not separate, copy user address into billing addressS
      for (let key in newData) {
        key = key as string;
        let value = newData[key];

        if (addressFields.includes(key as keyof AddressOpt)) {
          value = userDataObj[key];
        }

        newData[key] = value;
      }
    }

    newData.firstName =
      newData.firstName === '' ? undefined : newData.firstName;
    newData.lastName = newData.lastName === '' ? undefined : newData.lastName;

    if (
      // If the user is only updating their billing address, convert unchanged fields to undefined
      customerData?.sepBillingAddr === true &&
      newData.separateAddr === true
    ) {
      newData.addressLine1 =
        newData.addressLine1 === '' ? undefined : newData.addressLine1;
      newData.addressCity =
        newData.addressCity === '' ? undefined : newData.addressCity;
      newData.addressState =
        newData.addressState === '' ? undefined : newData.addressState;
      newData.addressZip =
        newData.addressZip === '' ? undefined : newData.addressZip;
    } else if (
      customerData?.sepBillingAddr === false &&
      newData.separateAddr === true
    ) {
      for (let key in newData) {
        key = key as string;
        let value = newData[key];

        value = value === '' ? undefined : value;
        newData[key] = value;
      }
    }

    delete newData.separateAddr;

    const updatedCustomer = await this.prisma.customer.update({
      where: {
        userId: user.id,
      },
      data: {
        ...newData,
        sepBillingAddr: newData.separateAddr,
      },
    });

    return updatedCustomer;
  }
}
