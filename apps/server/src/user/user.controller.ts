import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { User as DbUser, Role } from '@prisma/client';
import { CustomerExists, User } from 'types';

import { SessionGuard } from '../auth/nextauth-session.guard';
import { Roles } from '../auth/role.decorator';
import { RolesGuard } from '../auth/role.guard';
import { PrismaService } from '../prisma/prisma.service';
import { CustomerService } from '../stripe/customer.service';
import { UserService } from './user.service';

@Controller('user')
@UseGuards(SessionGuard, RolesGuard)
@Roles(Role.client)
export class UserController {
  constructor(
    private readonly prisma: PrismaService,
    private userService: UserService,
    private customerService: CustomerService,
  ) {}

  @Get() // Get User Data
  getUser(@Req() req): { user: User } {
    const user = req.user as DbUser;

    delete user.emailVerified; // Remove unneeded fields

    return { user };
  }

  @Get('role') // Get user role
  getRole(@Req() req): { role: Role } {
    return { role: req.user.role };
  }

  @Get('customer/exists') // Get customer data
  async checkIfCustomerExists(@Req() req): Promise<CustomerExists> {
    const user = req.user as DbUser;
    const customer = await this.prisma.customer.findUnique({
      where: { userId: user.id },
    });

    if (!customer) {
      return { exists: false };
    }

    if (!customer.stripeID) {
      return { exists: { stripe: false } };
    }

    return { exists: { stripe: true } };
  }

  // @Get('customer') // Get customer data
  // async getCustomer(@Req() req): Promise<{ customer: Customer }> {
  //   const user = req.user as DbUser;

  //   const customer = await this.prisma.customer.findUnique({
  //     where: {
  //       userId: user.id,
  //     },
  //   });

  //   if (!customer) {
  //     throw new HttpException('Customer Data not found', HttpStatus.NOT_FOUND);
  //   }

  //   console.log(customer);

  //   delete customer.id, customer.stripeID, customer.userId;

  //   return {
  //     customer: {
  //       ...customer,
  //       separateAddr: customer.sepBillingAddr,
  //     },
  //   };
  // }

  @Patch() // Update user data
  async updateUser(@Req() req, @Body() body): Promise<{ user: User }> {
    const user = req.user as DbUser;

    const newUser = await this.userService.updateUser(user, body);

    delete newUser.emailVerified, newUser.isInvited;

    return { user: newUser };
  }

  // @Post('customer')
  // async newCustomer(@Req() req, @Body() body): Promise<{ customer: Customer }> {
  //   const user = req.user as DbUser;

  //   const newCustomer = await this.userService.newCustomer(user, body);

  //   delete newCustomer.userId, newCustomer.stripeID, newCustomer.id;

  //   return {
  //     customer: {
  //       ...newCustomer,
  //       separateAddr: newCustomer.sepBillingAddr,
  //     },
  //   };
  // }

  // @Patch('customer')
  // async updateCustomer(
  //   @Req() req,
  //   @Body() body,
  // ): Promise<{ customer: Customer }> {
  //   const updateCustomer = await this.userService.updateCustomer(
  //     req.user as DbUser,
  //     body,
  //   );

  //   delete updateCustomer.id, updateCustomer.stripeID, updateCustomer.userId;

  //   return {
  //     customer: {
  //       ...updateCustomer,
  //       separateAddr: updateCustomer.sepBillingAddr,
  //     },
  //   };
  // }
}
