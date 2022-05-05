import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get()
  @UseGuards(AuthGuard('nextauth-session'))
  getCookies(@Req() request: Request, @Res() response) {
    const cookies = request.cookies['next-auth.session-token'];
    console.log(cookies);
    response.send(cookies);
  }
}