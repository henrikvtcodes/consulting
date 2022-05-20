import { SetMetadata } from '@nestjs/common';

export const INVITE_KEY = 'invite';
export const IsInvited = (status: boolean) => SetMetadata(INVITE_KEY, status);
