import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { Request } from 'express';
import { AuthdUser } from 'types';
import { SessionGuard } from '../../auth/nextauth-session.guard';
import { Roles } from '../../auth/role.decorator';
import { Role } from '../../auth/role.enum';
import { RolesGuard } from '../../auth/role.guard';
import { InviteService } from './invite.service';

@Controller('invite')
@UseGuards(SessionGuard, RolesGuard)
export class InviteController {
  constructor(private inviteService: InviteService) {}

  @Post() // Allow admin to create a new invite code
  @Roles(Role.ADMIN)
  async getNewInvite(@Req() req, @Body() body) {
    const requestCode: string | undefined = body['code'];

    const newInvite = await this.inviteService.createInvite(requestCode);

    return newInvite;
  }

  @Post('submit') // Allow user to use an invite code
  @HttpCode(200)
  async useInvite(@Req() req, @Body() body) {
    const user = req.user as AuthdUser;
    // const { hostname: origin, protocol } = req as Request;

    const code: string | undefined = body['code'];

    if (!code) {
      throw new HttpException('No code provided', HttpStatus.BAD_REQUEST);
    }

    switch (user.role) {
      default:
        throw new HttpException(
          'Invalid Role - Operation blocked',
          HttpStatus.FORBIDDEN,
        );
      case 'admin':
        const resultAdmin = await this.inviteService.useInviteAdmin(code);
        if (resultAdmin === null) {
          throw new HttpException(
            'A Problem Occurred',
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }

      case 'client':
        if (user.isInvited === true) {
          throw new HttpException(
            'You are not permitted to perform this operation',
            HttpStatus.FORBIDDEN,
          );
        }
        const resultClient = await this.inviteService.useInviteClient(
          user,
          code,
        );
        if (resultClient === null) {
          throw new HttpException(
            'A Problem Occurred',
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }

        // const originUrl =
        //   origin === 'localhost'
        //     ? `${protocol}://${origin}:3000`
        //     : `${protocol}://${origin}`;

        return {
          message: 'Invite Successful',
        };
    }
  }

  @Get('status') // Check if the logged in user is invited
  async getInviteStatus(@Req() req) {
    const user = req.user as User;
    return { invited: user.isInvited };
  }

  @Get('validate/:code')
  async validateInvite(@Param('code') code: string, @Req() req) {
    const user = req.user as User;

    if (user.isInvited) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          message: 'You are already invited',
          isValid: false,
        },
        HttpStatus.FORBIDDEN,
      );
    }

    // const code = body['code'];
    const isValid = await this.inviteService.validateInvite(code);

    if (isValid === null) {
      return {
        message: 'Code does not exist',
        isValid: false,
      };
    } else if (isValid) {
      return {
        message: 'Code is valid',
        isValid: true,
      };
    } else if (isValid === false) {
      return {
        message: 'Code is invalid',
        isValid: false,
      };
    }
  }
}
