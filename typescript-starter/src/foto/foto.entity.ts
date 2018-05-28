import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {ClienteEntity} from "../cliente/cliente.entity";


@Entity('web_eguezv_foto')
export class FotoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    url: string;

    @ManyToOne(
        type => ClienteEntity,
    usuarioEntity => usuarioEntity.fotos)

    usuario: ClienteEntity;

}