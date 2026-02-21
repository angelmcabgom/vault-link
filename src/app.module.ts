import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlCodecModule } from './url-encoder/url-codec.module';

@Module({
  imports: [UrlCodecModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
