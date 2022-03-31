declare module 'remark';

declare module 'react-typical';

import type { PrismaClient as PrismaClientType } from "@prisma/client";

interface CustomNodeJsGlobal extends NodeJS.Global {
  prisma: PrismaClientType
}

declare const global: CustomNodeJsGlobal