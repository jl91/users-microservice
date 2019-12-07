import {Injectable} from '@nestjs/common';
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from '@nestjs/typeorm';
import {ConfigurationService} from '../../configuration/services/configuration.service';

@Injectable()
export class TypeOrmConfigurationService implements TypeOrmOptionsFactory {

    constructor(
        private configurationService: ConfigurationService,
    ) {
    }

    public createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: this.configurationService.get('DATABASE_TYPE'),
            host: this.configurationService.get('DATABASE_HOST'),
            port: this.configurationService.get('DATABASE_PORT'),
            username: this.configurationService.get('DATABASE_USER'),
            password: this.configurationService.get('DATABASE_PASSWORD'),
            database: this.configurationService.get('DATABASE_NAME'),
            synchronize: false,
            entities: [__dirname + '/../../database/entities/**/*.entity{.ts,.js}'],
            migrations: [__dirname + '/../../database/migrations/**/*.migration{.ts,.js}'],
            subscribers: [__dirname + '/../../database/subscribers/**/*.subscriber{.ts,.js}'],
            logging: ['error'],
            cli: {
                entitiesDir: __dirname + '/../../database/entities',
                migrationsDir: __dirname + '/../../database/migrations',
                subscribersDir: __dirname + '/../../database/subscribers',
            },
        };
    }
}
