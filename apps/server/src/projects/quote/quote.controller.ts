import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { Role } from '@prisma/client';
import { AuthdUser } from 'types';
import { SessionGuard } from '../../auth/nextauth-session.guard';
import { Roles } from '../../auth/role.decorator';
import { RolesGuard } from '../../auth/role.guard';
import { User } from '../../user/user.decorator';
import { QuoteService } from './quote.service';

@Controller('quote')
@UseGuards(SessionGuard, RolesGuard)
export class QuoteController {
  constructor(private quoteService: QuoteService) {}

  @Get('/:id')
  async getQuoteData(@User() user: AuthdUser, @Param('id') id: any) {
    if (id === 'undefined') {
      throw new HttpException('No id provided', HttpStatus.BAD_REQUEST);
    }
    return this.quoteService.getQuoteData(id, user.customer.id);
  }

  @Patch('/:id/approve')
  @Roles(Role.client)
  @HttpCode(200)
  async approveQuote(@User() user: AuthdUser, @Param('id') id: string) {
    await this.quoteService.approveQuote(id, user.customer.id);
    return;
  }
}
