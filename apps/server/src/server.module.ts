import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { applyRawBodyOnlyTo } from '@golevelup/nestjs-webhooks';

import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ServerController } from './server.controller';
import { StripeModule } from './stripe/stripe.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['../../.env'],
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    StripeModule,
    UserModule,
  ],
  controllers: [ServerController],
  providers: [],
})
export class ServerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    applyRawBodyOnlyTo(consumer, {
      method: RequestMethod.ALL,
      path: 'stripe/webhook',
    });
  }
}
