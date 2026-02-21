import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlEncoderModule } from './url-encoder/url-encoder.module';

@Module({
  imports: [UrlEncoderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
