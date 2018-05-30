import {Module, NestModule, MiddlewareConsumer} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {UsuarioController} from "./usuario.controller";
import {UsuarioService} from "./usuario.service";
import {ParametrosController} from "./parametros.controller";
import {LogMiddleware} from './log.middleware';

import {TypeOrmModule} from '@nestjs/typeorm';
import {ClienteEntity} from "./cliente/cliente.entity";
import {OrdenEntity} from "./orden/orden.entity";
import {RestauranteEntity} from "./restaurante/restaurante.entity";
import {MenuEntity} from "../dist/menu/menu.entity";
import {PlatoEntity} from "./plato/plato.entity";
import {ComboEntity} from "./combo/combo.entity";
import {BebidaEntity} from "./bebida/bebida.entity";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'dbserver-proyecto-appweb.mysql.database.azure.com',
            port: 3306,
            username: 'myadmin@dbserver-proyecto-appweb',
            password: 'ei8%uC#\\y6PfDbl',
            database: 'restauranteGS',
            entities: [
                __dirname +
                '/../**/*.entity{.ts,.js}'
            ],
            synchronize: true,
            ssl: false
        }),
        TypeOrmModule.forFeature([
            ClienteEntity,
            OrdenEntity,
            RestauranteEntity,
            MenuEntity,
            PlatoEntity,
            ComboEntity,
            BebidaEntity
        ])
    ],
    controllers: [
        AppController,
        UsuarioController,
        ParametrosController],
    providers: [
        AppService,
        UsuarioService
    ],
})
export class AppModule implements NestModule {
    nombreAplicacion = 'EPN';

    configure(consumer: MiddlewareConsumer)
        : void {
        consumer
            .apply(LogMiddleware)
            .with(this.nombreAplicacion, 1989)
            .forRoutes(
                UsuarioController,
                AppController,
                ParametrosController
            )
        //.apply(OtroMiddleware)
        //.forRoutes(Otras rutas);
    }

}