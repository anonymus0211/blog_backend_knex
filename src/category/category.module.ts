import { Module } from "@nestjs/common";
import { ImageModule } from "src/image/image.module";
import { KnexModule } from "src/knex/knex.module";
import { CategoryResolver } from "./category.resolver";
import { CategoryService } from "./category.service";

@Module({
  imports: [KnexModule, ImageModule],
  providers: [CategoryService, CategoryResolver],
  exports: [CategoryService]
})
export class CategoryModule {}