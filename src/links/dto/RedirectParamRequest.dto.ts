import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RedirectParamRequest {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    name: 'slug',
    description: 'drop in a slug (shortened url) to be redirected',
  })
  slug: string;
}
