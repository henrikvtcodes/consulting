import { Global, Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { NextAuthSession } from './nextauth-session.strategy';

@Global()
@Module({
  imports: [PassportModule],
  providers: [AuthService, NextAuthSession],
  controllers: [AuthController],
  exports: [AuthService, NextAuthSession],
})
export class AuthModule {}
