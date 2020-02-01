import {Controller} from '@nestjs/common';

import {Crud, CrudController} from '@nestjsx/crud';
import {UserEntity} from '../database/entities/user.entity';
import {UsersService} from '../database/services/users.service';
import {DEFAULT_QUERY_CONFIGURATIONS} from "../shared/default-query-configurations.const";

@Crud({
    model: {
        type: UserEntity,
    },
    query: DEFAULT_QUERY_CONFIGURATIONS,
})
@Controller('users')
export class UsersController implements CrudController<UserEntity> {
    constructor(public service: UsersService) {
    }
}
