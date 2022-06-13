import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { AuthdUser } from 'types';
import { SessionGuard } from '../../auth/nextauth-session.guard';
import { RolesGuard } from '../../auth/role.guard';
import { QuoteService } from './quote.service';

@Controller('quote')
@UseGuards(SessionGuard, RolesGuard)
export class QuoteController {
  constructor(private quoteService: QuoteService) {}

  @Get('/:id')
  async getQuoteData(@Req() req, @Param('id') id: string) {
    const user = req.user as AuthdUser;
    return this.quoteService.getQuoteData(id, user.customer.id);
  }
}
