import { Controller, Get, Logger, Req, Res } from '@nestjs/common';
import type { Response } from 'express';
import { UrlToEncodeRequestDTO } from './dto/UrlToEncodeRequest.dto';
import { UrlEncoderService } from './url-encoder.service';

@Controller('url-encoder')
export class UrlEncoderController {
  private readonly logger = new Logger(UrlEncoderController.name);

  constructor(private readonly urlEncoderService: UrlEncoderService) {}

  @Get('encode-url')
  encodeUrl(@Req() req: UrlToEncodeRequestDTO, @Res() res: Response) {
    try {
      const encodedUrl = this.urlEncoderService.encoderUrl(req.url);

      return res.status(200).send(encodedUrl);
    } catch (err) {
      this.logger.error(err);
      return res.status(500).send('Error encoding the url');
    }
  }
}
