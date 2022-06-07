import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { Role, User as DbUser } from '@prisma/client';

import { RolesGuard } from '../auth/role.guard';
import { Roles } from '../auth/role.decorator';
import { PrismaService } from '../prisma/prisma.service';
import { SessionGuard } from '../auth/nextauth-session.guard';

@Controller('project')
@UseGuards(SessionGuard)
export class ProjectController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getProject(@Req() req) {
    // Method to get all a client's projects
    const user = req.user as DbUser;

    const customerWithProjects = await this.prisma.customer.findUnique({
      where: {
        userId: user.id,
      },
      include: {
        projects: true,
      },
    });

    const projects = customerWithProjects.projects;

    return projects;
  }

  @Get('all')
  @Roles(Role.admin)
  async getAllProjects() {
    return 'This action returns all projects';
  }

  @Post('create')
  async createProject() {
    return 'This action adds a new project';
  }
}
