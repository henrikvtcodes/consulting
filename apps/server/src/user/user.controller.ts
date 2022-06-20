import {
  Body,
  Controller,
  Get,
  HttpException,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { Role } from '@prisma/client';
import { AuthdUser, UserData } from 'types';

import { SessionGuard } from '../auth/nextauth-session.guard';
import { Roles } from '../auth/role.decorator';
import { RolesGuard } from '../auth/role.guard';
import { User } from './user.decorator';
import { UserService } from './user.service';

@Controller('user')
@UseGuards(SessionGuard, RolesGuard)
export class UserController {
  constructor(private userService: UserService) {}

  @Get() // Get User Data
  getUser(@User() user): { user: UserData } {
    delete user.emailVerified, user.customer; // Remove unneeded fields

    return { user };
  }

  @Get('all')
  @Roles(Role.admin)
  async getAllUsers(): Promise<{ users: UserData[] }> {
    const users = await this.userService.getAllUsers();

    return { users };
  }

  @Get('role') // Get user role
  getRole(@User() user: AuthdUser): { role: Role } {
    return { role: user.role };
  }

  @Patch() // Update user data
  async updateUser(
    @User() user: AuthdUser,
    @Body() body,
  ): Promise<{ user: UserData }> {
    const newUser = await this.userService.updateUser(user, body);

    delete newUser.emailVerified, newUser.isInvited, user.customer;

    return { user: newUser };
  }

  @Patch('invite')
  @Roles(Role.admin)
  async inviteUser(@Body() body): Promise<any> {
    const email: string | undefined = body['email'];
    if (!email) {
      throw new HttpException('Missing Email', 400);
    }
    return await this.userService.setUserInvited(email);
  }
}
