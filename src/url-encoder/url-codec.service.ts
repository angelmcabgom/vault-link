import { Injectable, Logger } from '@nestjs/common';
import { Base62Utils } from 'src/utils/base62.util';

@Injectable()
export class UrlCodecService {
  private readonly logger = new Logger(UrlCodecService.name);

  encodeId(url: number) {
    try {
      const encodedUrl = Base62Utils.base62encoder(url);

      return encodedUrl;
    } catch (err) {
      this.logger.error(err);
      throw new Error(err);
    }
  }

  decodeId(encodedId: string) {
    try {
      const decodedId = Base62Utils.base62decoder(encodedId);
      return decodedId;
    } catch (err) {
      this.logger.error(err);
      throw new Error(err);
    }
  }
}
