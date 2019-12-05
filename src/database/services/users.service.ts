import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {TypeOrmCrudService} from '@nestjsx/crud-typeorm';
import {UserEntity} from '../entities/user.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<UserEntity> {
    constructor(@InjectRepository(UserEntity) repository) {
        super(repository);
    }
}
