import {Injectable} from '@nestjs/common';
import {InvalidConfigurationException} from '../exception/invalid-configuration.exception';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

@Injectable()
export class ConfigurationService {
    private readonly envConfigurations: Record<string, string>;

    constructor(filePath: string) {
        this.envConfigurations = dotenv.parse(fs.readFileSync(filePath));
    }

    public get(configName: string): any {

        if (this.envConfigurations.hasOwnProperty(configName)) {
            return this.envConfigurations[configName];
        }

        throw new InvalidConfigurationException(configName);
    }

}
