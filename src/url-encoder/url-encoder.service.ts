import { Injectable, Logger } from '@nestjs/common';
import { Base62Utils } from 'src/utils/base62.util';

@Injectable()
export class UrlEncoderService {
  private readonly logger = new Logger(UrlEncoderService.name);

  encoderUrl(url: number) {
    try {
      const encodedUrl = Base62Utils.base62encoder(url);

      return encodedUrl;
    } catch (err) {
      this.logger.error(err);
    }
  }
}
