import { Injectable } from '@nestjs/common';
import { KnexService } from 'src/knex/knex.service';
import { UserModel } from 'src/users/user.model';
import { BlogModel } from './blog.model';

@Injectable()
export class BlogService {
  constructor(private readonly knex: KnexService) {}

  getAllBlogs(): Promise<BlogModel[]> {
    return this.knex.query(BlogModel).getMany();
  }

  getBlogById(id: string) {
    return this.knex
      .query(BlogModel)
      .innerJoin('author', UserModel, 'id', '=', 'authorId')
      .where('id', id)
      .select(
        'id',
        'title',
        'categoryId',
        'content',
        'excerpt',
        'authorId',
        'publishedAt',
        'author.id',
        'author.name',
        'author.role',
      )
      .getFirstOrNull();
  }

  getBlogsByCategoryId(categoryId: string): Promise<BlogModel[]> {
    return this.knex.query(BlogModel).where('categoryId', categoryId).getMany();
  }
}
