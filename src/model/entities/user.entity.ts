import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity('users', {schema: 'users'})
@Index('fk_users_status1_idx', ['statusId'])
export class UserEntity {

    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id',
    })
    public id: number;

    @Column('int', {
        nullable: false,
        unsigned: true,
        name: 'status_id',
    })
    public statusId: number;

    @Column('varchar', {
        nullable: false,
        name: 'username',
    })
    public username: string;

    @Column('varchar', {
        nullable: false,
        name: 'password',
    })
    public password: string;

    @Column('datetime', {
        nullable: false,
        name: 'created_at',
    })
    public createdAt: Date;

    @Column('datetime', {
        nullable: false,
        name: 'updated_at',
    })
    public updatedAt: Date;

    @Column('datetime', {
        nullable: true,
        name: 'deleted_at',
    })
    public deletedAt: Date | null;

    public constructor(init?: Partial<UserEntity>) {
        Object.assign(this, init);
    }
}
