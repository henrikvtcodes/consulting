import { Body, Controller, Get, Patch, Req, UseGuards } from '@nestjs/common';
import { User as DbUser, Role } from '@prisma/client';
import { User } from 'types';

import { SessionGuard } from '../auth/nextauth-session.guard';
import { Roles } from '../auth/role.decorator';
import { RolesGuard } from '../auth/role.guard';
import { PrismaService } from '../prisma/prisma.service';
import { UserService } from './user.service';

@Controller('user')
@UseGuards(SessionGuard, RolesGuard)
@Roles(Role.client)
export class UserController {
  constructor(private userService: UserService) {}

  @Get() // Get User Data
  getUser(@Req() req): { user: User } {
    const user = req.user as DbUser;

    delete user.emailVerified; // Remove unneeded fields

    return { user };
  }

  @Get('role') // Get user role
  getRole(@Req() req): { role: Role } {
    return { role: req.user.role };
  }

  @Patch() // Update user data
  async updateUser(@Req() req, @Body() body): Promise<{ user: User }> {
    const user = req.user as DbUser;

    const newUser = await this.userService.updateUser(user, body);

    delete newUser.emailVerified, newUser.isInvited;

    return { user: newUser };
  }
}
