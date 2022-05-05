import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import passportCustom from 'passport-custom';

import { AuthService } from './auth.service';
import { Request } from 'express';

const CustomStrategy = passportCustom.Strategy;

@Injectable()
export class NextAuthSession extends PassportStrategy(
  CustomStrategy,
  'nextauth-session',
) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(req: Request): Promise<any> {
    const sessionToken = req.cookies['next-auth.session-token'];
    if (!sessionToken) {
      throw new UnauthorizedException();
    }

    const session = await this.authService.verifySession(sessionToken);
    if (!session) {
      throw new UnauthorizedException();
    }

    return {
      id: session.id,
      userId: session.userId,
      expires: session.expires,
    };
  }
}
