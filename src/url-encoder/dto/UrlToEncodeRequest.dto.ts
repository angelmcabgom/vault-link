import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UrlToEncodeRequestDTO {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ name: 'url', description: 'url to be encoded' })
  url: number;
}
