import { Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { Role } from '@prisma/client';

import { Roles } from '../auth/role.decorator';
import { PrismaService } from '../prisma/prisma.service';
import { SessionGuard } from '../auth/nextauth-session.guard';
import { AuthdUser } from 'types';

@Controller('project')
@UseGuards(SessionGuard)
export class ProjectController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async getProjects(@Req() req) {
    // Method to get all a client's projects
    const user = req.user as AuthdUser;

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

  @Get('/:id')
  async getProject(@Req() req, @Param('id') id) {
    const user = req.user as AuthdUser;

    const project = await this.prisma.project.findFirst({
      where: {
        id,
        ownerId: user.customer.id,
      },
      include: {
        invoices: true,
        quotes: true,
      },
    });

    return project;
  }

  @Get('all')
  @Roles(Role.admin)
  async getAllProjects() {
    return await this.prisma.project.findMany();
  }

  @Post('create')
  async createProject() {
    return 'This action adds a new project';
  }
}
