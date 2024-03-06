import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSaasDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  documentId: string;
}
