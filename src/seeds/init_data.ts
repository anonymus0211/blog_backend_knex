import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
  const categories = {
    lifestyle: {
      id: uuidv4(),
      name: 'Lifestyle',
    },
    wellness: {
      id: uuidv4(),
      name: 'Wellness',
    },
  };

  await knex('categories').insert(
    Object.values(categories),
  );

  const users = {
    testUser: {
      id: uuidv4(),
      name: 'TestUser',
      role: 'USER'
    },
    adminUser: {
      id: uuidv4(),
      name: 'AdminUser',
      role: 'ADMIN'
    }
  }

  await knex('users').insert(Object.values(users))

  const blogs = {
    blog1: {
      id: uuidv4(),
      title: 'Blog1 Title',
      content: 'Blog1 Content',
      excerpt: 'Blog1 Data',
      publishedAt: new Date(),
      authorId: users.testUser.id,
      categoryId: categories.lifestyle.id,
    },
    blog2: {
      id: uuidv4(),
      title: 'Blog2 Title',
      content: 'Blog2 Content',
      excerpt: 'Blog2 Data',
      publishedAt: new Date(),
      authorId: users.adminUser.id,
      categoryId: categories.wellness.id,
    },
  };

  await knex('blogs').insert(Object.values(blogs))

  const images = {
    image1: {
      id: uuidv4(),
      path: 'https://via.placeholder.com/728',
      type: 'CATEGORY',
      typeId: categories.lifestyle.id,
    },
    image2: {
      id: uuidv4(),
      path: 'https://via.placeholder.com/728',
      type: 'CATEGORY',
      typeId: categories.wellness.id
    },
  };

  await knex('images').insert(Object.values(images))
}
