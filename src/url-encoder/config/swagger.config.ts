import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerConfig {
  static init(app: INestApplication) {
    // no swagger needed in production
    if (process.env.NODE_ENV === 'production') return;

    const config = new DocumentBuilder()
      .setTitle('vault-link')
      .setDescription('s3 type vault for homelab')
      .setVersion('1.0')
      .addTag('cats')
      .build();

    const document = SwaggerModule.createDocument(app, config);

    // 'api' is the path where the docs will be hosted (e.g., localhost:3000/api)
    SwaggerModule.setup('api', app, document, {
      customSiteTitle: 'vault-link',
      swaggerOptions: {
        displayRequestDuration: true,
      },
    });
  }
}
