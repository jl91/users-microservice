import {Controller, Get} from '@nestjs/common';

@Controller()
export class AppController {

    constructor() {
    }

    @Get('/')
    pingAction() {
        return {
            status: 'ok',
            pong: new Date().getMilliseconds(),
        };
    }
}
