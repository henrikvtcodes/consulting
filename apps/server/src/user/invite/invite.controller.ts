import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
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
  async useInvite(@Req() req, @Body() body, @Res() res) {
    const user = req.user as User;

    const code: string | undefined = body['code'];

    if (!code) {
      throw new HttpException('No code provided', HttpStatus.BAD_REQUEST);
    }

    if (user.isInvited && user.role === 'client') {
      throw new HttpException(
        'You are not permitted to perform this operation',
        HttpStatus.UNAUTHORIZED,
      );
    }

    switch (user.role) {
      case 'admin':
        const resultAdmin = await this.inviteService.useInviteAdmin(code);
        if (resultAdmin === null) {
          throw new HttpException(
            'A Problem Occurred',
            HttpStatus.INTERNAL_SERVER_ERROR,
          );
        }

      case 'client':
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

        return res.status(HttpStatus.SEE_OTHER).redirect('/auth');
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
