import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity('contacts', {schema: 'users'})
@Index('fk_contacts_users1_idx', ['userId'])
export class ContactEntity {

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
        nullable: true,
        length: 20,
        name: 'phone_number',
    })
    public phoneNumber: string | null;

    @Column('varchar', {
        nullable: true,
        name: 'email',
    })
    public email: string | null;

    @Column('tinyint', {
        nullable: false,
        width: 1,
        name: 'is_cell_phone',
    })
    public isCellPhone: boolean;

    @Column('tinyint', {
        nullable: false,
        width: 1,
        name: 'is_email',
    })
    public isEmail: boolean;

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

    public constructor(init?: Partial<ContactEntity>) {
        Object.assign(this, init);
    }
}
