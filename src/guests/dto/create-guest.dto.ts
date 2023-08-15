import { IsNotEmpty } from 'class-validator';

export class CreateGuestDto {
  @IsNotEmpty()
  guest_name: string

  @IsNotEmpty()
  instance: string

  @IsNotEmpty()
  description: string
  
  @IsNotEmpty()
  email: string
}