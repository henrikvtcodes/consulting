import { Controller, Get, Post, UseGuards } from '@nestjs/common';

import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../auth/role.decorator';
import { Role } from '@prisma/client';
import { NextAuthSession } from '../auth/nextauth-session.strategy';

@Controller('project')
@UseGuards(NextAuthSession)
export class ProjectsController {
  @Get('all')
  async getAllProjects() {
    return 'This action returns all projects';
  }

  @Post('create')
  async createProject() {
    return 'This action adds a new project';
  }
}
