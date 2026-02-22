import { Logger, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LinkEntity } from '../entities/link.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (env: ConfigService) => {
        Logger.debug('DB HOST', env.getOrThrow<string>('DB_HOST'));
        Logger.debug('DB NAME', env.getOrThrow<string>('DB_NAME'));
        Logger.debug('DB PORT', env.getOrThrow<number>('DB_PORT'));
        Logger.debug('DB USER', env.getOrThrow<string>('DB_USER'));
        Logger.debug('DB PASS', env.getOrThrow<string>('DB_PASS'));

        return {
          type: 'postgres', // Specify the dialect as 'postgres'
          host: env.getOrThrow<string>('DB_HOST'),
          database: env.getOrThrow<string>('DB_NAME'),
          port: env.getOrThrow<number>('DB_PORT') || 5432,
          username: env.getOrThrow<string>('DB_USER'),
          password: env.getOrThrow<string>('DB_PASS'),
          // It's a list of entity classes.
          entities: [LinkEntity],
          extra: {
            pool: {
              max: 5,
              min: 1,
              acquireTimeoutMillis: 100000,
            },
          },
          synchronize: env.getOrThrow<boolean>('TYPEORM_SYNC'),
          logging: false,
        };
      },
    }),
  ],
  exports: [PgTypeormModule],
})
export class PgTypeormModule {}
