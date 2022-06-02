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
import { ProjectsModule } from './projects/projects.module';
import { FilesModule } from './files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['../../../.env'],
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    StripeModule,
    UserModule,
    ProjectsModule,
    FilesModule,
  ],
  controllers: [ServerController],
  providers: [],
})
export class ServerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    applyRawBodyOnlyTo(consumer, {
      // Reapplies standard body parsing middleware to all requests except for webhooks
      method: RequestMethod.ALL,
      path: 'stripe/webhook',
    });
  }
}
