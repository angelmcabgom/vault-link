import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LinkEntity } from 'src/db/entities/link.entity';
import { EmptyResultError } from 'src/errors/empty.error';
import { FunctionsHelper } from 'src/helpers/functions.helper';
import { Base62Utils } from 'src/utils/base62.util';
import { QueryFailedError, Repository } from 'typeorm';

@Injectable()
export class LinksDao {
  // Renamed from ModelRepository to ModelDAO
  private readonly logger = new Logger(LinksDao.name);

  constructor(
    // Inject the TypeORM Repository for VariableEntity
    @InjectRepository(LinkEntity)
    private linkEntity: Repository<LinkEntity>,
  ) {}

  async insertLinkDb(urlToInsert: string) {
    try {
      const newLink = this.linkEntity.create({ originalUrl: urlToInsert });
      const insertedLinkId = await this.linkEntity.save(newLink);

      const slug = Base62Utils.base62encoder(insertedLinkId.id);

      if (!slug) {
        throw new EmptyResultError(
          `Resultado de query vacio en ${FunctionsHelper.getFunctionName()}`,
        );
      }

      return slug;
    } catch (err) {
      this.logger.error(err);
      throw new QueryFailedError(FunctionsHelper.getFunctionName(), [], err);
    }
  }
}
