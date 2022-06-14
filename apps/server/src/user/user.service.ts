import { Injectable } from '@nestjs/common';
import { Customer as DbCustomer, Role, User as DbUser } from '@prisma/client';
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

  async initCustomer(user: DbUser): Promise<DbCustomer> {
    const customer = await this.prisma.customer.create({
      data: {
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    return customer;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.prisma.user.findMany({
      where: {
        role: Role.client,
      },
      select: {
        name: true,
        email: true,
        phone: true,
        image: true,
        role: true,
        isInvited: true,
        addressLine1: true,
        addressLine2: true,
        addressCity: true,
        addressState: true,
        addressZip: true,
      },
    });

    return users;
  }
}
