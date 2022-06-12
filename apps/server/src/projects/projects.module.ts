import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectsService } from './projects.service';
import { QuoteController } from './quote/quote.controller';
import { QuoteService } from './quote/quote.service';

@Module({
  controllers: [ProjectController, QuoteController],
  providers: [ProjectsService, QuoteService],
})
export class ProjectsModule {}
