import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import type { Session, User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async verifySession(sessionToken: string): Promise<
    Session & {
      user: User;
    }
  > {
    const session = await this.prisma.session.findUnique({
      where: {
        sessionToken,
      },
      include: {
        user: true,
      },
    });
    if (session) {
      if (session.expires.valueOf() > Date.now()) {
        return session;
      } else {
        return null;
      }
    }
    return null;
  }
}
