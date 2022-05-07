import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Patch,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';

import { SessionGuard } from '../auth/nextauth-session.guard';
import { PrismaService } from '../prisma/prisma.service';

interface UserMetadata extends Address {
  id: string;
  name: string;
  email: string;
  role: string;
  phone?: string;
  image: string;
}

interface UserMetaData_Alter extends Address {
  name?: string;
  phone?: string;
  photo_url?: string;
}

type Address = {
  address_line1?: string;
  address_line2?: string;
  city?: string;
  state?: string;
  postal_code?: string;
};

export interface UpsertCustomer extends Address {
  first_name?: string;
  last_name?: string;
  sepBillingAddr?: boolean;
}

export interface CreateCustomer extends Address {
  first_name: string;
  last_name: string;
  sepBillingAddr: boolean;
}

const addressFields = [
  'address_line1',
  'address_line2',
  'city',
  'state',
  'postal_code',
];

@Controller('user')
@UseGuards(SessionGuard)
export class UserController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  getUser(@Req() req, @Res() res) {
    const user = req.user as User;

    const userDataObj: UserMetadata = {
      id: user.id,
      email: user.email as string,
      name: user.name as string,
      role: user.role as string,
      phone: user.phone as string,
      image: user.image as string,
      address_line1: user.addressLine1 as string,
      address_line2: user.addressLine2 as string,
      city: user.addressCity as string,
      state: user.addressState as string,
      postal_code: user.addressZip as string,
    };
    return res.json({ data: userDataObj });
  }

  @Get('role')
  getRole(@Req() req) {
    return { role: req.user.role };
  }

  @Get('customer')
  async getCustomer(@Req() req): Promise<any> {
    const customer = await this.prisma.customer.findUnique({
      where: {
        userId: req.user.id,
      },
    });

    if (!customer) {
      throw new HttpException('Customer Data not found', HttpStatus.NOT_FOUND);
    }

    return {
      first_name: customer.firstName,
      last_name: customer.lastName,
      address_line1: customer.addressLine1,
      address_line2: customer.addressLine2,
      city: customer.addressCity,
      state: customer.addressState,
      postal_code: customer.addressZip,
      sepBillingAddr: customer.sepBillingAddr,
    };
  }

  @Patch() // Route to update user data
  async updateUser(@Req() req, @Body() body): Promise<any> {
    const user = req.user as User;

    const {
      name,
      phone,
      photo_url,
      address_line1,
      address_line2,
      city,
      state,
      postal_code,
    }: UserMetaData_Alter = body;

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

    const newUserData: UserMetadata = {
      id: newUser.id,
      email: newUser.email as string,
      name: newUser.name as string,
      role: newUser.role as string,
      phone: newUser.phone as string,
      image: newUser.image as string,
      address_line1: newUser.addressLine1 as string,
      address_line2: newUser.addressLine2 as string,
      city: newUser.addressCity as string,
      state: newUser.addressState as string,
      postal_code: newUser.addressZip as string,
    };

    return newUserData;
  }

  @Post('customer')
  async newCustomer(@Req() req, @Body() body): Promise<any> {
    const user = req.user as User;

    const userDataObj: UserMetadata = {
      id: user.id,
      email: user.email as string,
      name: user.name as string,
      role: user.role as string,
      phone: user.phone as string,
      image: user.image as string,
      address_line1: user.addressLine1 as string,
      address_line2: user.addressLine2 as string,
      city: user.addressCity as string,
      state: user.addressState as string,
      postal_code: user.addressZip as string,
    };

    const createCustomer: CreateCustomer = body;

    for (let key in createCustomer) {
      key = key as string;

      let value = createCustomer[key];

      value = value === '' ? userDataObj[key] : value;

      createCustomer[key] = value;
    }

    const newCustomer = await this.prisma.customer.create({
      data: {
        userId: user.id,
        firstName: createCustomer.first_name,
        lastName: createCustomer.last_name,
        addressLine1: createCustomer.address_line1,
        addressLine2: createCustomer.address_line2,
        addressCity: createCustomer.city,
        addressState: createCustomer.state,
        addressZip: createCustomer.postal_code,
        sepBillingAddr: createCustomer.sepBillingAddr,
      },
    });

    if (newCustomer === null) {
      throw new HttpException(
        'Customer Create Failed',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return {
      customer: {
        first_name: newCustomer.firstName,
        last_name: newCustomer.lastName,
        address_line1: newCustomer.addressLine1,
        address_line2: newCustomer.addressLine2,
        city: newCustomer.addressCity,
        state: newCustomer.addressState,
        postal_code: newCustomer.addressZip,
        sepBillingAddr: newCustomer.sepBillingAddr,
      },
    };
  }

  @Patch('customer')
  async updateCustomer(@Req() req, @Body() body): Promise<any> {
    const user = req.user as User;

    const customerData = await this.prisma.customer.findUnique({
      where: {
        userId: user.id,
      },
    });

    const userDataObj: UserMetadata = {
      id: user.id,
      email: user.email as string,
      name: user.name as string,
      role: user.role as string,
      phone: user.phone as string,
      image: user.image as string,
      address_line1: user.addressLine1 as string,
      address_line2: user.addressLine2 as string,
      city: user.addressCity as string,
      state: user.addressState as string,
      postal_code: user.addressZip as string,
    };

    const upsertCustomer: UpsertCustomer = body;

    if (!upsertCustomer.sepBillingAddr) {
      // ANCHOR If billing address is not separate, copy user address into billing addressS
      for (let key in upsertCustomer) {
        key = key as string;
        let value = upsertCustomer[key];

        if (addressFields.includes(key)) {
          value = userDataObj[key];
        }

        upsertCustomer[key] = value;
      }
    }

    upsertCustomer.first_name =
      upsertCustomer.first_name === '' ? undefined : upsertCustomer.first_name;
    upsertCustomer.last_name =
      upsertCustomer.last_name === '' ? undefined : upsertCustomer.last_name;

    if (
      // If the user is only updating their billing address, convert unchanged fields to undefined
      customerData?.sepBillingAddr === true &&
      upsertCustomer.sepBillingAddr === true
    ) {
      upsertCustomer.address_line1 =
        upsertCustomer.address_line1 === ''
          ? undefined
          : upsertCustomer.address_line1;
      // upsertCustomer.address_line2 =
      //   upsertCustomer.address_line2 === ""
      //     ? undefined
      //     : upsertCustomer.address_line2;
      upsertCustomer.city =
        upsertCustomer.city === '' ? undefined : upsertCustomer.city;
      upsertCustomer.state =
        upsertCustomer.state === '' ? undefined : upsertCustomer.state;
      upsertCustomer.postal_code =
        upsertCustomer.postal_code === ''
          ? undefined
          : upsertCustomer.postal_code;
    } else if (
      customerData?.sepBillingAddr === false &&
      upsertCustomer.sepBillingAddr === true
    ) {
      for (let key in upsertCustomer) {
        key = key as string;
        let value = upsertCustomer[key];

        value = value === '' ? undefined : value;
        upsertCustomer[key] = value;
      }
    }

    const updatedCustomer = await this.prisma.customer.update({
      where: {
        userId: user.id,
      },
      data: {
        firstName: upsertCustomer.first_name,
        lastName: upsertCustomer.last_name,
        addressLine1: upsertCustomer.address_line1,
        addressLine2: upsertCustomer.address_line2,
        addressCity: upsertCustomer.city,
        addressState: upsertCustomer.state,
        addressZip: upsertCustomer.postal_code,
        sepBillingAddr: upsertCustomer.sepBillingAddr,
      },
    });

    return {
      customer: {
        first_name: updatedCustomer.firstName,
        last_name: updatedCustomer.lastName,
        address_line1: updatedCustomer.addressLine1,
        address_line2: updatedCustomer.addressLine2,
        city: updatedCustomer.addressCity,
        state: updatedCustomer.addressState,
        postal_code: updatedCustomer.addressZip,
        sepBillingAddr: updatedCustomer.sepBillingAddr,
      },
    };
  }
}
