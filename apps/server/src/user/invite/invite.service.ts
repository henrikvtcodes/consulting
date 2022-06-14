import { Injectable } from '@nestjs/common';
import { User as DbUser } from '@prisma/client';
import { customAlphabet } from 'nanoid';

import { PrismaService } from '../../prisma/prisma.service';

const genHexCode = customAlphabet('abcdefABCDEF123456', 6);

@Injectable()
export class InviteService {
  constructor(private readonly prisma: PrismaService) {}

  async getInvite(code: string) {
    const invite = await this.prisma.invite.findUnique({
      where: {
        token: code,
      },
    });

    return invite;
  }

  async getAllInvites() {
    return await this.prisma.invite.findMany({
      orderBy: {
        used: 'asc',
      },
    });
  }

  async getManyNewInvites(quantity: number) {
    const codes: { token: string }[] = [];
    for (let i = 0; i < quantity; i++) {
      codes.push({ token: genHexCode() });
    }

    const invites = await this.prisma.invite.createMany({
      data: codes,
      skipDuplicates: true,
    });
    return invites;
  }

  async validateInvite(code: string) {
    const invite = await this.getInvite(code);
    if (!invite) {
      return null;
    }

    return !invite.used;
  }

  async createNewInvite(code?: string) {
    let newCode: string;

    if (code) {
      newCode = code;
    } else {
      newCode = genHexCode();
    }

    const invite = await this.prisma.invite.create({
      data: {
        token: newCode,
      },
    });

    return invite;
  }

  async useInviteClient(user: DbUser, code: string) {
    const invite = await this.getInvite(code);

    if (!invite) {
      // Invite doesnt exist, return null
      return null;
    } else if (invite.used) {
      console.log('Invite Used');
      // Invite has already been used, return null
      return null;
    } else if (user.isInvited) {
      console.log('User Already Invited');
      // User is already invited, return null
      return null;
    }

    const updatedInvite = await this.prisma.invite.update({
      where: {
        id: invite.id,
      },
      data: {
        used: true,
        usedBy: user.id,
        usedOn: new Date(),
      },
    });

    await this.prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        isInvited: true,
      },
    });

    return updatedInvite;
  }

  async useInviteAdmin(code: string) {
    const invite = await this.getInvite(code);

    if (!invite) {
      // Invite doesnt exist, return null
      return null;
    } else if (invite.used) {
      // Invite has already been used, return null
      return null;
    }

    const updatedInvite = await this.prisma.invite.update({
      where: {
        id: invite.id,
      },
      data: {
        used: true,
        usedBy: null,
        usedOn: new Date(),
      },
    });

    return updatedInvite;
  }
}
