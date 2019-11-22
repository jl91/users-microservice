import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity('logins', {schema: 'users'})
@Index('fk_logins_users_idx', ['userId'])
export class LoginEntity {

    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id',
    })
    public id: number;

    @Column('int', {
        nullable: false,
        unsigned: true,
        name: 'user_id',
    })
    public userId: number;

    @Column('char', {
        nullable: false,
        length: 20,
        name: 'ip',
    })
    public ip: string;

    @Column('tinyint', {
        nullable: false,
        width: 1,
        name: 'is_ipv4',
    })
    public isIpv4: boolean;

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

    public constructor(init?: Partial<LoginEntity>) {
        Object.assign(this, init);
    }
}
