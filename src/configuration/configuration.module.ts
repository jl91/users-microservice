import {Module} from '@nestjs/common';
import {ConfigurationService} from './services/configuration.service';
import {TypeOrmConfigurationService} from './services/type-orm-configuration.service';

@Module({
    imports: [],
    providers: [
        ConfigurationService,
        TypeOrmConfigurationService,
    ],
    exports: [
        ConfigurationService,
        TypeOrmConfigurationService,
    ],
})
export class ConfigurationModule {
}
