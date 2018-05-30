import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {MenuEntity} from "../menu/menu.entity";
import {OrdenEntity} from "../orden/orden.entity";


@Entity('bebida')
export class BebidaEntity {

    @PrimaryGeneratedColumn()
    idBebida: number;

    @Column({length: 50})
    tipoBebida: string;

    @Column({length: 50})
    saborBebida: string;

    @ManyToOne(
        type => MenuEntity,
        menuEntity => menuEntity.bebida)

    menu: MenuEntity;

    @ManyToOne(
        type => OrdenEntity,
        ordenEntity => ordenEntity.bebida)

    orden: OrdenEntity;
}