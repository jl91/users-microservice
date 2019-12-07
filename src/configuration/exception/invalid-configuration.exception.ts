import {HttpException} from '@nestjs/common';

export class InvalidConfigurationException extends HttpException {
    constructor(configName) {
        super(`Invalid configuration ${configName} provided`, 500);
    }
}
