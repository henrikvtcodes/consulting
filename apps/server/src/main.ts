import { NestFactory } from '@nestjs/core';
import { ServerModule } from './server.module';
import cookieParser from 'cookie-parser';

import { PrismaService } from './prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(ServerModule, {
    bodyParser: false,
  });

  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  app.use(cookieParser());

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'https://dev.consulting.henrikvt.com',
      'https://consulting.henrikvt.com',
    ],
    allowedHeaders: ['Cookies', 'Content-Type'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
  });

  await app.listen(3333);
}
bootstrap();
