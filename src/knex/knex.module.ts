import { Module } from "@nestjs/common";
import { KnexService } from "./knex.service";
import Knex from 'knex';
import { TypedKnex } from "@wwwouter/typed-knex";

import { config } from '../../knexfile'

@Module({
  imports: [],
  providers: [
    KnexService,
    // {
    // provide: KnexService,
    // useFactory: () => {
    //   const environment = process.env.ENVIRONMENT || 'development'
    //   const configuration = config[environment]
    //   const knex = Knex(configuration)
    //   return new TypedKnex(knex)
    // },
    // }
  ],
  exports: [KnexService]
})
export class KnexModule {

}