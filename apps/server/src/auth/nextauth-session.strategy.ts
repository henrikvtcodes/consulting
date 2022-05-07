import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-custom';

import { AuthService } from './auth.service';
import { Request } from 'express';
import { User } from '@prisma/client';

const cookieName =
  process.env.NODE_ENV === 'production'
    ? '__Secure-next-auth.session-token'
    : 'next-auth.session-token';

@Injectable()
export class NextAuthSession extends PassportStrategy(
  Strategy,
  'nextauth-session',
) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(req: Request): Promise<User | null> {
    const sessionToken = req.cookies[cookieName];
    if (!sessionToken) {
      throw new UnauthorizedException({ message: 'No session token' });
    }

    const session = await this.authService.verifySession(sessionToken);
    if (!session) {
      throw new UnauthorizedException({
        statusCode: 401,
        message: 'Invalid Session',
      });
    }

    return session.user;
  }
}
