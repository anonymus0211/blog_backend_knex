import { Resolver, Query, Args, ResolveField, Parent } from "@nestjs/graphql";
import { Category } from "./category.model";
import { Image } from '../image/image.model'
import { CategoryService } from "./category.service";
import { ImageService } from "src/image/image.service";

@Resolver(() => Category)
export class CategoryResolver {
  constructor(
    private readonly categoryService: CategoryService,
    private readonly imageService: ImageService,
  ) {}

  @Query(() => [Category])
  allCategories(): Promise<Category[]> {
    return this.categoryService.getAllCategories();
  }

  @Query(() => Category, { nullable: true })
  category(@Args('id') id: string): Promise<Category> {
    return this.categoryService.getCategoryById(id);
  }

  @ResolveField('images', () => [Image], { nullable: true })
  getImages(@Parent() category: Category): Promise<Image[]> {
    return this.imageService.getImagesForCategory(category.id);
  }
}