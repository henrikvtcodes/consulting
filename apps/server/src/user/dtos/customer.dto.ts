import { IsString, IsNotEmpty, ValidateIf, IsBoolean } from 'class-validator';

import { CustomerDetailsForm } from 'types';

export class CustomerDto implements CustomerDetailsForm {
  @IsString()
  firstName?: string;

  @IsString()
  lastName?: string;

  @IsNotEmpty()
  @IsBoolean()
  separateAddr?: boolean;

  @ValidateIf((e) => e.separateAddr === false)
  @IsString()
  addressLine1?: string;

  @ValidateIf((e) => e.separateAddr === false)
  @IsString()
  addressLine2?: string;

  @ValidateIf((e) => e.separateAddr === false)
  @IsString()
  addressCity?: string;

  @ValidateIf((e) => e.separateAddr === false)
  @IsString()
  addressState?: string;

  @ValidateIf((e) => e.separateAddr === false)
  @IsString()
  addressZip?: string;
}
