import {Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {UserEntity} from './database/entities/user.entity';
import {InjectRepository} from '@nestjs/typeorm';

@Injectable()
export class AppService {

    constructor(
        @InjectRepository(UserEntity)
        private repository: Repository<UserEntity>,
    ) {

    }

    public fetchAll(): Promise<UserEntity[]> {
        return this.repository.find();
    }

}
