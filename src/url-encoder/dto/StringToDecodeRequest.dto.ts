import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Matches } from 'class-validator';

export class StringToDecodeRequestDTO {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[a-zA-Z0-9]+$/, {
    message: 'encodedId must be a valid base62 string (alphanumeric only)',
  })
  @ApiProperty({
    name: 'encodedId',
    description: 'base62 encoded id',
    example: '6nK8a2W',
  })
  encodedId: string;
}
