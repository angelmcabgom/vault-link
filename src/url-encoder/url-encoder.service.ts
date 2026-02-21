import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UrlEncoderService {
  private readonly logger = new Logger(UrlEncoderService.name);

  encoderUrl(url: string) {
    try {
      const encodedUrl = crypto(,);

      return encodedUrl;
    } catch (err) {
      this.logger.error(err);
    }
  }
}
