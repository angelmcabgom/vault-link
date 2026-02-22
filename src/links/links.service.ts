import { Injectable, Logger } from '@nestjs/common';
import { LinksDao } from './dao/links.dao';

@Injectable()
export class LinksService {
  private readonly logger = new Logger(LinksService.name);

  constructor(private readonly linksDao: LinksDao) {}

  async manageLinkShorten(urlToShorten: string) {
    try {
      const slug = await this.linksDao.insertLinkDb(urlToShorten);

      return slug;
    } catch (err) {
      this.logger.error(err);
      throw new Error(err);
    }
  }

  async getLink(slug: string) {
    try {
      const link = await this.linksDao.retrieveLinkDb(slug);

      return link;
    } catch (err) {
      this.logger.error(err);
      throw new Error(err);
    }
  }
}
