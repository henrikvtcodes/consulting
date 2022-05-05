import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import passportCustom from 'passport-custom';

import { AuthService } from './auth.service';
import { Request } from 'express';
import { Session, User } from '@prisma/client';

const CustomStrategy = passportCustom.Strategy;

@Injectable()
export class NextAuthSession extends PassportStrategy(
  CustomStrategy,
  'nextauth-session',
) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(req: Request): Promise<{
    session: Session & {
      user: User;
    };
  }> {
    const sessionToken = req.cookies['next-auth.session-token'];
    if (!sessionToken) {
      throw new UnauthorizedException({ message: 'No session token' });
    }

    const session = await this.authService.verifySession(sessionToken);
    if (!session) {
      throw new UnauthorizedException({
        statusCode: 401,
        message: 'Invalid Session',
        token: sessionToken,
      });
    }

    return {
      session: session,
    };
  }
}
