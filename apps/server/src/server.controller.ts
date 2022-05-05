import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Controller('healthcheck')
export class ServerController {
  constructor(private readonly prisma: PrismaService) {}
  @Get()
  getHealthCheck(): object {
    this.prisma.$connect();
    return {
      status: 'OK',
    };
  }
}
