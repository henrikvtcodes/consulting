import { Body, Controller, Post } from '@nestjs/common';

@Controller('stripe')
export class StripeController {
  @Post('webhook')
  async webhook(@Body() body) {
    return 'ok';
  }
}
