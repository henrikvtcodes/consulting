import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';

import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { NextAuthSession } from './nextauth-session.strategy';

@Module({
  imports: [PassportModule],
  providers: [AuthService, NextAuthSession],
  controllers: [AuthController],
})
export class AuthModule {}
