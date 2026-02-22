import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class ShortenLinkRequestDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    name: 'url2shorten',
    description: 'just drop in a url to uuhh.. shorten',
    example: 'https://google.com',
  })
  url2shorten: string;
}
