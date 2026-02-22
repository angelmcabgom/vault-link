import { Controller, Get, Logger, Param, Query, Res } from '@nestjs/common';
import { ShortenLinkRequestDTO } from './dto/ShortenLinkRequest.dto';
import type { Response } from 'express';
import { LinksService } from './links.service';
import { RedirectParamRequest } from './dto/RedirectParamRequest.dto';
import { ApiOperation } from '@nestjs/swagger';

@Controller('links')
export class LinksController {
  private readonly logger = new Logger(LinksController.name);

  constructor(private readonly linksService: LinksService) {}

  @Get('shortenUrl')
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

  @Get(':slug')
  @ApiOperation({
    description:
      'Redirect to original url, wont work with swagger due to cors. Paste the url in browser',
  })
  async redirect(@Param() params: RedirectParamRequest, @Res() res: Response) {
    try {
      const link = await this.linksService.getLink(params.slug);
      return res.redirect(302, link.originalUrl);
    } catch (err) {
      this.logger.error(err);
      return res.status(500).send('Error while shortening url');
    }
  }
}
