import { Controller, UseGuards } from '@nestjs/common';
import { SessionGuard } from '../../auth/nextauth-session.guard';
import { RolesGuard } from '../../auth/role.guard';
import { QuoteService } from './quote.service';

@Controller('quote')
@UseGuards(SessionGuard, RolesGuard)
export class QuoteController {
  constructor(private quoteService: QuoteService) {}
}
