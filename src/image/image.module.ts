import { Module } from "@nestjs/common";
import { KnexModule } from "src/knex/knex.module";
import { ImageService } from "./image.service";

@Module({
  imports: [KnexModule],
  providers: [ImageService],
  exports: [ImageService]
})
export class ImageModule {}