import { Injectable } from '@nestjs/common';
import { Project, ProjectStatus } from '@prisma/client';
import { AuthdUser, ProjectData } from 'types';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  async createProject(
    name: string,
    desc: string,
    ownerId: string,
    initialStatus: ProjectStatus = ProjectStatus.awaitingApproval,
  ): Promise<Project> {
    return await this.prisma.project.create({
      data: {
        name: name,
        description: desc,
        isClosed: false,
        ownerId: ownerId,
        status: initialStatus,
        totalCost: 0,
        totalDue: 0,
        totalPaid: 0,
      },
    });
  }

  async findLastCreatedProject(ownerId: string): Promise<Project> {
    return await this.prisma.project.findFirst({
      where: {
        ownerId: ownerId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async getProjects(ownerId: string): Promise<Project[]> {
    return await this.prisma.project.findMany({
      where: {
        ownerId: ownerId,
      },
    });
  }

  async getAllProjects(): Promise<Project[]> {
    return await this.prisma.project.findMany();
  }

  async getProject(ownerId: string, id: string): Promise<ProjectData> {
    return await this.prisma.project.findFirst({
      where: {
        id: id,
        ownerId: ownerId,
      },
      rejectOnNotFound: false,
      include: {
        invoices: true,
        quotes: true,
      },
    });
  }
}
