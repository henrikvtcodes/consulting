import {
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Role } from '@prisma/client';
import { AuthdUser } from 'types';
import { SessionGuard } from '../../auth/nextauth-session.guard';
import { Roles } from '../../auth/role.decorator';
import { RolesGuard } from '../../auth/role.guard';
import { QuoteService } from './quote.service';

@Controller('quote')
@UseGuards(SessionGuard, RolesGuard)
export class QuoteController {
  constructor(private quoteService: QuoteService) {}

  @Get('/:id')
  async getQuoteData(@Req() req, @Param('id') id: any) {
    const user = req.user as AuthdUser;
    if (id === 'undefined') {
      throw new HttpException('No id provided', HttpStatus.BAD_REQUEST);
    }
    return this.quoteService.getQuoteData(id, user.customer.id);
  }

  @Patch('/:id/approve')
  @Roles(Role.client)
  @HttpCode(200)
  async approveQuote(@Req() req, @Param('id') id: string) {
    const user = req.user as AuthdUser;
    await this.quoteService.approveQuote(id, user.customer.id);
    return;
  }
}
