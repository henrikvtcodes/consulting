import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get()
  @UseGuards(AuthGuard('nextauth-session'))
  getCookies(@Req() request, @Res() response) {
    const user = request.user.user.id;

    response.send(user);
  }
}
