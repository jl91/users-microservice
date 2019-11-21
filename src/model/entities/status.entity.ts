import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('statuses', {schema: 'users'})
export class StatusEntity {

    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id',
    })
    public id: number;

    @Column('varchar', {
        nullable: false,
        length: 60,
        name: 'status',
    })
    public status: string;

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

    public constructor(init?: Partial<StatusEntity>) {
        Object.assign(this, init);
    }
}
