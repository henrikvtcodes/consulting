import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { User as DbUser } from '@prisma/client';
import { Observable } from 'rxjs';
import { INVITE_KEY } from './invited.decorator';

@Injectable()
export class InviteGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<boolean>(
      INVITE_KEY,
      [context.getHandler(), context.getClass()],
    );
    if (!requiredRoles) {
      return false;
    }
    const req = context.switchToHttp().getRequest();
    const user = req.user as DbUser;
    return user.isInvited as boolean;
  }
}
