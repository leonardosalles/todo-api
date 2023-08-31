import { IsBoolean, IsNotEmpty, IsString } from "class-validator"

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsBoolean()
  @IsNotEmpty()
  isDone: boolean
}
