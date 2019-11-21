import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity('personal_data', {schema: 'users'})
@Index('fk_personal_data_users1_idx', ['userId'])
export class PersonalDataEntity {

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

    @Column('varchar', {
        nullable: false,
        name: 'first_name',
    })
    public firstName: string;

    @Column('varchar', {
        nullable: false,
        name: 'last_name',
    })
    public lastName: string;

    @Column('varchar', {
        nullable: false,
        name: 'social_name',
    })
    public socialName: string;

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

    public constructor(init?: Partial<PersonalDataEntity>) {
        Object.assign(this, init);
    }
}
