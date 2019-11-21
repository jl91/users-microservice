import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm';

@Entity('documents', {schema: 'users'})
@Index('fk_documents_users1_idx', ['userId'])
@Index('fk_documents_documents_types1_idx', ['documentsTypeId'])
export class DocumentEntity {

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

    @Column('int', {
        nullable: false,
        unsigned: true,
        name: 'documents_type_id',
    })
    public documentsTypeId: number;

    @Column('char', {
        nullable: false,
        length: 20,
        name: 'document',
    })
    public document: string;

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

    public constructor(init?: Partial<DocumentEntity>) {
        Object.assign(this, init);
    }
}
