import { Injectable } from '@nestjs/common';
import { KnexService } from 'src/knex/knex.service';
import { ImageModel, ImageType } from './image.model';

@Injectable()
export class ImageService {
  constructor(private readonly knex: KnexService) {}

  getImagesForCategory(categoryId: string): Promise<ImageModel[]> {
    return this.knex
      .query(ImageModel)
      .where('type', ImageType.CATEGORY)
      .andWhere('typeId', categoryId)
      .getMany();
  }

  getImagesForBlog(blogId: string): Promise<ImageModel[]> {
    return this.knex
      .query(ImageModel)
      .where('type', ImageType.BLOG)
      .andWhere('typeId', blogId)
      .getMany();
  }
}
