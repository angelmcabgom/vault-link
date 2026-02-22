import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LinkEntity } from 'src/db/models/link.entity';
import { EmptyResultError } from 'src/errors/empty.error';
import { FunctionsHelper } from 'src/helpers/functions.helper';
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

  async getUserByEmail() {
    try {
      const allUsers = await this.linkEntity.findOne({});

      if (!allUsers) {
        throw new EmptyResultError(
          `Resultado de query vacio en ${FunctionsHelper.getFunctionName()}`,
        );
      }

      return allUsers;
    } catch (err) {
      this.logger.error(err);
      throw new QueryFailedError(FunctionsHelper.getFunctionName(), [], err);
    }
  }
}
