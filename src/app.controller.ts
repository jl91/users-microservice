import {Controller, Get, Header, HttpCode} from '@nestjs/common';
import {AppService} from './app.service';
import {UserEntity} from './database/entities/user.entity';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get('/')
    @HttpCode(200)
    @Header('Content-Type', 'application/hal+json')
    public index(): Promise<UserEntity[]> {
        return this.appService.fetchAll();
    }
}
