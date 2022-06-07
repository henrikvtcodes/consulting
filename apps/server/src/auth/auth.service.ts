import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

import type { Session } from '@prisma/client';
import { AuthdUser } from 'types';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async verifySession(sessionToken: string): Promise<Session | null> {
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

  async readUser(userId: string): Promise<AuthdUser> {
    return await this.prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        customer: true,
      },
    });
  }
}
