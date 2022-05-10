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
import { Roles } from '../auth/role.decorator';
import { Role } from '../auth/role.enum';
import { RolesGuard } from '../auth/role.guard';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from './user.service';

export interface UserMetadata extends Address {
  id: string;
  name: string;
  email: string;
  role: string;
  phone?: string;
  image: string;
}

export interface UserMetaData_Alter extends Address {
  name?: string;
  phone?: string;
  photo_url?: string;
}

export type Address = {
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

export const addressFields = [
  'address_line1',
  'address_line2',
  'city',
  'state',
  'postal_code',
];

@Controller('user')
@UseGuards(SessionGuard, RolesGuard)
@Roles(Role.CLIENT)
export class UserController {
  constructor(
    private readonly prisma: PrismaService,
    private readonly userService: UserService,
  ) {}

  @Get() // Get User Data
  getUser(@Req() req, @Res() res) {
    const user = req.user as User;

    delete user.isInvited, user.emailVerified; // Remove unneeded fields

    return res.json({ data: user });
  }

  @Get('role') // Get user role
  getRole(@Req() req) {
    return { role: req.user.role };
  }

  @Get('customer') // Get customer data
  async getCustomer(@Req() req): Promise<any> {
    const customer = await this.prisma.customer.findUnique({
      where: {
        userId: req.user.id,
      },
    });

    if (!customer) {
      throw new HttpException('Customer Data not found', HttpStatus.NOT_FOUND);
    }

    delete customer.id, customer.stripeID, customer.userId;

    return {
      customer: {
        first_name: customer.firstName,
        last_name: customer.lastName,
        address_line1: customer.addressLine1,
        address_line2: customer.addressLine2,
        city: customer.addressCity,
        state: customer.addressState,
        postal_code: customer.addressZip,
        sepBillingAddr: customer.sepBillingAddr,
      },
    };
  }

  @Patch() // Update user data
  async updateUser(@Req() req, @Body() body): Promise<any> {
    const user = req.user as User;

    const newUser = await this.userService.updateUser(user, body);

    delete newUser.emailVerified, newUser.isInvited;

    return newUser;
  }

  @Post('customer')
  async newCustomer(@Req() req, @Body() body): Promise<any> {
    const user = req.user as User;

    const newCustomer = await this.userService.newCustomer(user, body);

    delete newCustomer.userId, newCustomer.stripeID, newCustomer.id;

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
    const updateCustomer = await this.userService.updateCustomer(
      req.user as User,
      body,
    );

    delete updateCustomer.id, updateCustomer.stripeID, updateCustomer.userId;

    return {
      customer: {
        first_name: updateCustomer.firstName,
        last_name: updateCustomer.lastName,
        address_line1: updateCustomer.addressLine1,
        address_line2: updateCustomer.addressLine2,
        city: updateCustomer.addressCity,
        state: updateCustomer.addressState,
        postal_code: updateCustomer.addressZip,
        sepBillingAddr: updateCustomer.sepBillingAddr,
      },
    };
  }
}
