import { Body, Controller, Post, Get, UseGuards } from '@nestjs/common';
import { AuthdUser, Customer, CustomerExists } from 'types';
import { SessionGuard } from '../../auth/nextauth-session.guard';
import { PrismaService } from '../../prisma/prisma.service';
import { User } from '../../user/user.decorator';
import { CustomerService } from '../customer.service';

@Controller('customer')
@UseGuards(SessionGuard)
export class CustomerController {
  constructor(
    private readonly prisma: PrismaService,
    private customerService: CustomerService,
  ) {}
  @Get() // Get customer data
  async getCustomer(@User() user: AuthdUser): Promise<Customer> {
    const customer = await this.prisma.customer.findUnique({
      where: {
        userId: user.id,
      },
    });

    return await this.customerService.getCustomerData(customer);
  }

  @Get('exists') // Get customer data
  async checkIfCustomerExists(
    @User() user: AuthdUser,
  ): Promise<CustomerExists> {
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
  async setupCustomer(@User() user: AuthdUser, @Body() body) {
    const customer = await this.customerService.getOrCreateCustomer(user);

    const session = await this.customerService.createCustomerPortal(
      customer,
      body.url,
    );

    return {
      url: session.url,
    };
  }

  // @Post('/setupPaymentMethod')
  // async setupPaymentMethod(@Req() req, @Body() body) {
  //   const user = req.user as DbUser;

  //   const customer = await this.customerService.getRawCustomer(user);

  //   if (customer === null) {
  //     throw new HttpException('Customer not found', HttpStatus.NOT_FOUND);
  //   }

  //   const session = await this.customerService.createSetupIntent(
  //     customer,
  //     body.url,
  //   );

  //   return {
  //     url: session.url,
  //   };
  // }
}
