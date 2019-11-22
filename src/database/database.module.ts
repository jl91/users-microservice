import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {TypeOrmConfigurationService} from '../configuration/services/type-orm-configuration.service';
import {UserEntity} from './entities/user.entity';
import {StatusEntity} from './entities/status.entity';
import {PersonalDataEntity} from './entities/personal-data.entity';
import {LoginEntity} from './entities/login.entity';
import {DocumentsTypesEntity} from './entities/documents-types.entity';
import {DocumentEntity} from './entities/document.entity';
import {ContactEntity} from './entities/contact.entity';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            useClass: TypeOrmConfigurationService,
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
    providers: [],
    exports: [],
})
export class DatabaseModule {
}
