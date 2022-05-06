import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy } from 'passport-custom';

import { AuthService } from './auth.service';
import { Request } from 'express';
import { Session, User } from '@prisma/client';

@Injectable()
export class NextAuthSession extends PassportStrategy(
  Strategy,
  'nextauth-session',
) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(req: Request): Promise<
    | (Session & {
        user: User;
      })
    | null
  > {
    const sessionToken = req.cookies['next-auth.session-token'];
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

    return session;
  }
}
