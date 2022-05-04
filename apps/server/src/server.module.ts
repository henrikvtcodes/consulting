import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ServerController } from './server.controller';
import { ServerService } from './server.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['../../.env'],
      isGlobal: true,
    }),
  ],
  controllers: [ServerController],
  providers: [ServerService],
})
export class ServerModule {}
