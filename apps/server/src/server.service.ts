import { Injectable } from '@nestjs/common';

@Injectable()
export class ServerService {
  getHello(): string {
    return `NextAuth URL: ${process.env.NEXTAUTH_URL}`;
  }
}
