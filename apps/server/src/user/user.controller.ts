import { Controller, Get, Header, Req, Res, UseGuards } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';

@Controller('user')
@UseGuards(AuthGuard('nextauth-session'))
export class UserController {
  @Get()
  @Header('Access-Control-Allow-Credentials', 'true')
  getUser(@Req() req, @Res() res) {
    return res.json({ user: req.user });
  }

  @Get('role')
  @Header('Access-Control-Allow-Credentials', 'true')
  getRole(@Req() req, @Res() res): string {
    return res.json({ role: req.user.role });
  }
}
