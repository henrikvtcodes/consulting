import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';
import { AuthdUser, User } from 'types';

import { SessionGuard } from '../auth/nextauth-session.guard';
import { RolesGuard } from '../auth/role.guard';
import { UserService } from './user.service';

@Controller('user')
@UseGuards(SessionGuard, RolesGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get() // Get User Data
  getUser(@Req() req): { user: User } {
    const user = req.user as AuthdUser;

    delete user.emailVerified, user.customer; // Remove unneeded fields

    return { user };
  }

  @Get('role') // Get user role
  getRole(@Req() req): { role: Role } {
    return { role: req.user.role };
  }

  @Patch() // Update user data
  async updateUser(@Req() req, @Body() body): Promise<{ user: User }> {
    const user = req.user as AuthdUser;

    const newUser = await this.userService.updateUser(user, body);

    delete newUser.emailVerified, newUser.isInvited, user.customer;

    return { user: newUser };
  }
}
