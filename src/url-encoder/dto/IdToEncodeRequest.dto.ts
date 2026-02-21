import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class IdToEncodeRequestDTO {
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    name: 'url',
    description: 'url to be encoded',
    example: '6nK8a2W',
  })
  url: number;
}
