import { IsAlphanumeric, MaxLength } from "class-validator";

export class CreateUserDto {
  @IsAlphanumeric()
  @MaxLength(5)
  name: string;
}
