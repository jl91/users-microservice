import {Injectable} from '@nestjs/common';
import {TypeOrmModuleOptions, TypeOrmOptionsFactory} from '@nestjs/typeorm';

@Injectable()
export class TypeOrmConfigurationService implements TypeOrmOptionsFactory {

    private envConfigurations;

    constructor() {
        this.envConfigurations = require('dotenv').config().parsed;
    }

    createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            type: this.envConfigurations.DATABASE_TYPE,
            host: this.envConfigurations.DATABASE_HOST,
            port: this.envConfigurations.DATABASE_PORT,
            username: this.envConfigurations.DATABASE_USER,
            password: this.envConfigurations.DATABASE_PASSWORD,
            database: this.envConfigurations.DATABASE_NAME,
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
