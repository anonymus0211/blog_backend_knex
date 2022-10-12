import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { KnexModule } from './knex/knex.module';
import { GraphQLModule } from '@nestjs/graphql';
import { CategoryModule } from './category/category.module';
import { ImageModule } from './image/image.module';
import { UserModule } from './users/user.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [
    KnexModule,
    CategoryModule,
    ImageModule,
    UserModule,
    BlogModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
