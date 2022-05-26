import { Module } from '@nestjs/common';
import { StripeModule } from '../stripe/stripe.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { InviteController } from './invite/invite.controller';
import { InviteService } from './invite/invite.service';

@Module({
  imports: [StripeModule],
  controllers: [UserController, InviteController],
  providers: [UserService, InviteService],
})
export class UserModule {}
