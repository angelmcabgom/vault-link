import { Controller, Get, Logger, Query, Res } from '@nestjs/common';
import type { Response } from 'express';
import { IdToEncodeRequestDTO } from './dto/IdToEncodeRequest.dto';
import { UrlCodecService } from './url-codec.service';
import { StringToDecodeRequestDTO } from './dto/StringToDecodeRequest.dto';

@Controller('id-codec')
export class UrlCodecController {
  private readonly logger = new Logger(UrlCodecController.name);

  constructor(private readonly urlCodecService: UrlCodecService) {}

  @Get('encode-url')
  encodeUrl(@Query() query: IdToEncodeRequestDTO, @Res() res: Response) {
    try {
      const encodedUrl = this.urlCodecService.encodeId(query.url);
      return res.status(200).send(encodedUrl);
    } catch (err) {
      this.logger.error(err);
      return res.status(500).send('Error encoding the url');
    }
  }

  @Get('decode-url')
  decodeUrl(@Query() query: StringToDecodeRequestDTO, @Res() res: Response) {
    try {
      const decodedId = this.urlCodecService.decodeId(query.encodedId);
      return res.status(200).send(decodedId);
    } catch (err) {
      this.logger.error(err);
      return res.status(500).send('Error decoding id');
    }
  }
}
