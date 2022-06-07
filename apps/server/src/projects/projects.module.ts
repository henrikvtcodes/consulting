import { Module } from '@nestjs/common';
import { ProjectController } from './project.controller';
import { ProjectsService } from './projects.service';

@Module({
  controllers: [ProjectController],
  providers: [ProjectsService],
})
export class ProjectsModule {}
