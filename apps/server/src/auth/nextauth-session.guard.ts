import { AuthGuard } from '@nestjs/passport';

export class SessionGuard extends AuthGuard('nextauth-session') {}
