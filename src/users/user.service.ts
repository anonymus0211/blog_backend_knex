import { Injectable } from "@nestjs/common";
import { KnexService } from "src/knex/knex.service";
import { UserModel } from "./user.model";

@Injectable()
export class UserService {
  constructor(private readonly knex: KnexService) {}

  allUsers(): Promise<UserModel[]> {
    return this.knex.query(UserModel).getMany()
  }

  getUserById(id: string): Promise<UserModel> {
    return this.knex.query(UserModel).where("id", id).getFirstOrNull()
  }
}