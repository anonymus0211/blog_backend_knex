import { Module } from "@nestjs/common";
import { KnexModule } from "src/knex/knex.module";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";

@Module({
  imports: [KnexModule],
  providers: [UserService, UserResolver],
  exports: [UserService]
})
export class UserModule { }