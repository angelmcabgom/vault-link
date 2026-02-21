import { IsNotEmpty, IsNumber } from 'class-validator';

export class UrlToEncodeRequestDTO {
  @IsNumber()
  @IsNotEmpty()
  url: number;
}
