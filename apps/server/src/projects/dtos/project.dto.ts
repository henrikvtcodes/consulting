import { IsString } from 'class-validator';
import { RequestProject } from 'types';

export class RequestProjectDto implements RequestProject {
  @IsString()
  name: string;

  @IsString()
  description: string;
}

export class CreateProjectDto implements RequestProject {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  ownerId: string;
}
