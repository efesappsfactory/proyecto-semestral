import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {MenuEntity} from "../menu/menu.entity";
import {OrdenEntity} from "../orden/orden.entity";


@Entity('combo')
export class ComboEntity {

    @PrimaryGeneratedColumn()
    idCombo: number;

    @Column({length: 50})
    nombreCombo: string;

    @ManyToOne(
        type => MenuEntity,
        menuEntity => menuEntity.combo)

    menu: MenuEntity;

    @ManyToOne(
        type => OrdenEntity,
        ordenEntity => ordenEntity.combo)

    orden: OrdenEntity;
}