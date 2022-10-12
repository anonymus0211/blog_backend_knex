import { Injectable } from "@nestjs/common";
import { KnexService } from "src/knex/knex.service";
import { CategoryModel } from "./category.model";

@Injectable()
export class CategoryService {
  constructor(private readonly knex: KnexService) {}

  async getAllCategories(): Promise<CategoryModel[]> {
    return this.knex.query(CategoryModel).getMany();
  }

  async getCategoryById(id: string): Promise<CategoryModel> {
    return this.knex.query(CategoryModel).where('id', id).getFirstOrNull();
  }
}