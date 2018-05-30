import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {MenuEntity} from "../menu/menu.entity";


@Entity('restaurante')
export class RestauranteEntity {

    @PrimaryGeneratedColumn()
    idRestaurante: number;

    @Column({length: 50})
    nombreRestaurante: string;

    @OneToMany(
        type => MenuEntity,
        menuEntity => menuEntity.restaurante)

    menu: MenuEntity[];
}