import { IsString, IsEmail, IsPhoneNumber, IsUrl } from 'class-validator';

import { UserDetailsForm } from 'types';

export class UserDto implements UserDetailsForm {
  @IsString()
  name?: string;

  @IsEmail()
  email?: string;

  @IsPhoneNumber('US')
  phone?: string;

  @IsUrl()
  image?: string;

  @IsString()
  addressLine1?: string;

  @IsString()
  addressLine2?: string;

  @IsString()
  addressCity?: string;

  @IsString()
  addressState?: string;

  @IsString()
  addressZip?: string;
}
