import {Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {MenuEntity} from "../menu/menu.entity";
import {RestauranteEntity} from "../restaurante/restaurante.entity";
import {OrdenEntity} from "../orden/orden.entity";

@Entity('plato')
export class PlatoEntity {

    @PrimaryGeneratedColumn()
    idPlato: number;

    @Column({length: 50})
    nombrePlato: string;

    @ManyToOne(
        type => MenuEntity,
        menuEntity => menuEntity.plato)

    menu: MenuEntity;

    @ManyToOne(
        type => OrdenEntity,
        ordenEntity => ordenEntity.plato)

    orden: OrdenEntity;
}