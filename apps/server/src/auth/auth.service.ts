import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import type { Session } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async verifySession(sessionToken: string): Promise<Session | null> {
    const session = await this.prisma.session.findUnique({
      where: {
        sessionToken,
      },
    });
    if (session) {
      if (session.expires.valueOf() < Date.now()) {
        return session;
      } else {
        return;
      }
    }

    return null;
  }
}
