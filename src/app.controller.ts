import {Controller, Get} from '@nestjs/common';
import {UserEntity} from './database/entities/user.entity';
import {CrudController} from '@nestjsx/crud';
import {UsersService} from './database/services/users.service';

@Controller()
export class AppController implements CrudController<UserEntity> {
    constructor(public service: UsersService) {
    }

    @Get('/')
    pingAction() {
        return {
            status: 'ok',
            pong: new Date().getMilliseconds(),
        };
    }
}
