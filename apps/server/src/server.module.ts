import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ServerController } from './server/server.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['../../.env'],
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
  ],
  controllers: [ServerController],
  providers: [],
})
export class ServerModule {}
