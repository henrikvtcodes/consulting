import { InjectStripeClient } from '@golevelup/nestjs-stripe';
import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { User as DbUser } from '@prisma/client';
import Stripe from 'stripe';
import { SessionGuard } from '../auth/nextauth-session.guard';
import { CustomerService } from './customer.service';

@Controller('stripe')
@UseGuards(SessionGuard)
export class StripeController {
  constructor(
    @InjectStripeClient() private stripe: Stripe,
    private customerService: CustomerService,
  ) {}
}
