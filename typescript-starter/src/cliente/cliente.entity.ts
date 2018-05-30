import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {OrdenEntity} from "../orden/orden.entity";

@Entity('cliente')
export class ClienteEntity {

    @PrimaryGeneratedColumn()
    idCliente: number;

    @Column({length: 50})
    nombreCliente: string;

    @Column({length: 50})
    emailCliente: string;

    @OneToMany(
        type => OrdenEntity,
        ordenEntity => ordenEntity.cliente)

    orden: OrdenEntity[];
}