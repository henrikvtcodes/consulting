import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ProjectStatus, Role } from '@prisma/client';

import { Roles } from '../auth/role.decorator';
import { SessionGuard } from '../auth/nextauth-session.guard';
import { AuthdUser } from 'types';
import { CreateProjectDto, RequestProjectDto } from './dtos/project.dto';
import { ProjectsService } from './projects.service';

@Controller('project')
@UseGuards(SessionGuard)
export class ProjectController {
  constructor(private projectService: ProjectsService) {}

  @Get()
  async getProjects(@Req() req) {
    // Method to get all a client's projects
    const user = req.user as AuthdUser;

    return await this.projectService.getProjects(user.customer.id);
  }

  @Get('/:id')
  async getProject(@Req() req, @Param('id') projectId: string) {
    const user = req.user as AuthdUser;

    const project = await this.projectService.getProject(
      user.customer.id,
      projectId,
    );

    if (!project) {
      throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
    }

    return project;
  }

  @Get('all')
  @Roles(Role.admin)
  async getAllProjects() {
    return await this.projectService.getAllProjects();
  }

  @Post('create')
  @HttpCode(200)
  @Roles(Role.admin)
  async createProject(@Req() req, @Body() projectData: CreateProjectDto) {
    const project = await this.projectService.createProject(
      projectData.name,
      projectData.description,
      projectData.ownerId,
      ProjectStatus.approved,
    );

    return project;
  }

  @Post('request')
  @HttpCode(200)
  async requestProject(@Req() req, @Body() projectData: RequestProjectDto) {
    const user = req.user as AuthdUser;

    return await this.projectService.createProject(
      projectData.name,
      projectData.description,
      user.customer.id,
    );
  }
}
