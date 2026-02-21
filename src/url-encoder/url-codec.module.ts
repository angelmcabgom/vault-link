import { Module } from '@nestjs/common';
import { UrlCodecService } from './url-codec.service';
import { UrlCodecController } from './url-codec.controller';

@Module({
  providers: [UrlCodecService],
  controllers: [UrlCodecController],
})
export class UrlCodecModule {}
