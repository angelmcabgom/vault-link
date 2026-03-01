import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlCodecModule } from './url-encoder/url-codec.module';
import { PgTypeormModule } from './db/connections/pg-typeorm.module';
import { LinksModule } from './links/links.module';
import { HealthModule } from './health/health.module';

@Module({
  imports: [UrlCodecModule, PgTypeormModule, LinksModule, HealthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
