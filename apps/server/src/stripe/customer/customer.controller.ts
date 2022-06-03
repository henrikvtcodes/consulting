import { Body, Controller, Post, Get, Req, UseGuards } from '@nestjs/common';
import { User as DbUser } from '@prisma/client';
import { Customer, CustomerExists } from 'types';
import { SessionGuard } from '../../auth/nextauth-session.guard';
import { PrismaService } from '../../prisma/prisma.service';
import { CustomerService } from '../customer.service';

@Controller('customer')
@UseGuards(SessionGuard)
export class CustomerController {
  constructor(
    private readonly prisma: PrismaService,
    private customerService: CustomerService,
  ) {}
  @Get() // Get customer data
  async getCustomer(@Req() req): Promise<Customer> {
    const user = req.user as DbUser;

    const customer = await this.prisma.customer.findUnique({
      where: {
        userId: user.id,
      },
    });

    return await this.customerService.getCustomer(customer);
  }

  @Get('exists') // Get customer data
  async checkIfCustomerExists(@Req() req): Promise<CustomerExists> {
    const user = req.user as DbUser;

    const customer = await this.prisma.customer.findUnique({
      where: { userId: user.id },
    });

    if (!customer) {
      return { exists: false };
    }

    if (!customer.stripeID) {
      return { exists: false };
    }

    return { exists: true };
  }

  @Post('/createPortalSession')
  async setupCustomer(@Req() req, @Body() body) {
    const user = req.user as DbUser;

    const customer = await this.customerService.createCustomer(user);

    const session = await this.customerService.createCustomerPortal(
      customer,
      body.url,
    );

    return {
      url: session.url,
    };
  }
}
