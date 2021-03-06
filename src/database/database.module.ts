import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TypeOrmConfigurationService} from './services/type-orm-configuration.service';
import {UserEntity} from './entities/user.entity';
import {StatusEntity} from './entities/status.entity';
import {PersonalDataEntity} from './entities/personal-data.entity';
import {LoginEntity} from './entities/login.entity';
import {DocumentsTypesEntity} from './entities/documents-types.entity';
import {DocumentEntity} from './entities/document.entity';
import {ContactEntity} from './entities/contact.entity';
import {UsersService} from './services/users.service';
import {ConfigurationModule} from '../configuration/configuration.module';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmConfigurationService,
            imports: [
                ConfigurationModule,
            ],
        }),
        TypeOrmModule.forFeature([
            UserEntity,
            StatusEntity,
            PersonalDataEntity,
            LoginEntity,
            DocumentsTypesEntity,
            DocumentEntity,
            ContactEntity,
        ]),
    ],
    providers: [
        UsersService,
    ],
    exports: [
        TypeOrmModule,
        UsersService,
    ],
})
export class DatabaseModule {
}
