import {Module} from '@nestjs/common';
import {DatabaseModule} from '../database/database.module';
import {ConfigurationModule} from '../configuration/configuration.module';

@Module({
    imports: [
        ConfigurationModule,
        DatabaseModule,
    ],
    controllers: [],
    exports: [
        ConfigurationModule,
        DatabaseModule,
    ],
    providers: [],
})
export class SharedModule {
}
