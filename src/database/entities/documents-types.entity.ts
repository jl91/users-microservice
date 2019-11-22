import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity('documents_types', {schema: 'users'})
export class DocumentsTypesEntity {

    @PrimaryGeneratedColumn({
        type: 'int',
        unsigned: true,
        name: 'id',
    })
    public id: number;

    @Column('varchar', {
        nullable: false,
        length: 50,
        name: 'type',
    })
    public type: string;

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

    public constructor(init?: Partial<DocumentsTypesEntity>) {
        Object.assign(this, init);
    }
}
