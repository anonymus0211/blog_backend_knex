import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Category } from 'src/category/category.model';
import { CategoryService } from 'src/category/category.service';
import { User, UserModel } from 'src/users/user.model';
import { UserService } from 'src/users/user.service';
import { Blog, BlogModel } from "./blog.model";
import { BlogService } from "./blog.service";

@Resolver(() => Blog)
export class BlogResolver {
  constructor(private readonly blogService: BlogService, private readonly categoryService: CategoryService, private readonly userService: UserService) {}

  @Query(() => [Blog], { name: 'allBlogs', nullable: true  })
  getAllBlogs(): Promise<Blog[]> {
    return this.blogService.getAllBlogs()
  }

  @Query(() => Blog, { name: 'blog', nullable: true})
  getBlog(@Args('id') id: string): Promise<Blog> {
    return this.blogService.getBlogById(id)
  }

  @Query(() => [Blog], { nullable: true })
  getBlogsForCategory(@Args('categoryId') categoryId: string): Promise<Blog[]> {
    return this.blogService.getBlogsByCategoryId(categoryId)
  }

  @ResolveField('category', () => Category, { nullable: true })
  getCategory(@Parent() blog: Blog): Promise<Category> {
    if (blog.categoryId) {
      return this.categoryService.getCategoryById(blog.categoryId)
    }
    return null
  }

  @ResolveField('author', () => User, { nullable: true })
  getAuthor(@Parent() blog: BlogModel): Promise<User> {
    if (blog.author) {
      return Promise.resolve(blog?.author)
    }
    if (blog.authorId) {
      return this.userService.getUserById(blog.authorId)
    }
    return null
  }
}