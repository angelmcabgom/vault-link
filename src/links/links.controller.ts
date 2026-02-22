import { Controller, Get, Logger, Query, Res } from '@nestjs/common';
import { ShortenLinkRequestDTO } from './dto/ShortenLinkRequest.dto';
import type { Response } from 'express';
import { LinksService } from './links.service';

@Controller('links')
export class LinksController {
  private readonly logger = new Logger(LinksController.name);

  constructor(private readonly linksService: LinksService) {}

  @Get()
  async shortLink(@Query() query: ShortenLinkRequestDTO, @Res() res: Response) {
    try {
      const shortenedUrl = await this.linksService.manageLinkShorten(
        query.url2shorten,
      );
      return res.status(200).send(shortenedUrl);
    } catch (err) {
      this.logger.error(err);
      return res.status(500).send('Error while shortening url');
    }
  }
}
