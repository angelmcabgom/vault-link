import { IsNotEmpty, IsString } from 'class-validator';

export class UrlToEncodeRequestDTO {
  @IsString()
  @IsNotEmpty()
  url: string;
}
