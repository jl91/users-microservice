import {Injectable} from '@nestjs/common';

@Injectable()
export class ConfigurationService {
    private readonly envConfigurations: any;

    constructor() {
        this.envConfigurations = require('dotenv').config().parsed;
    }

    get baseUrl(): string {
        return this.envConfigurations.BASE_URL;
    }

    get applicationPort(): string {
        return this.envConfigurations.BASE_URL;
    }

}
