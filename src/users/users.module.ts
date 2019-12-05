import {Module} from '@nestjs/common';
import {ConfigurationModule} from '../configuration/configuration.module';
import {DatabaseModule} from '../database/database.module';
import {UsersController} from './users.controller';

@Module({
    imports: [
        ConfigurationModule,
        DatabaseModule,
    ],
    controllers: [
        UsersController,
    ],
    exports: [],
    providers: [],
})
export class UsersModule {
}
