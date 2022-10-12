import { Injectable } from "@nestjs/common";
import Knex from 'knex';
import { TypedKnex } from "@wwwouter/typed-knex";
import { config } from '../../knexfile';


@Injectable()
export class KnexService extends TypedKnex {
  constructor() {
    const environment = process.env.ENVIRONMENT || 'development';
    const configuration = config[environment];
    const knex = Knex(configuration);
    super(knex)
  }
}