import { Module } from '@nestjs/common';
import { LinksService } from './links.service';
import { LinksController } from './links.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkEntity } from 'src/db/entities/link.entity';
import { LinksDao } from './dao/links.dao';

@Module({
  imports: [TypeOrmModule.forFeature([LinkEntity])],
  providers: [LinksService, LinksDao],
  controllers: [LinksController],
})
export class LinksModule {}
