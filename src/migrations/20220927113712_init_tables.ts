import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', table => {
    table.uuid('id').primary()
    table.string('name')
    table.enum('role', ['USER', 'ADMIN'])
    table.timestamps(true, true);
  })
    .createTable('categories', table => {
      table.uuid('id').primary();
      table.string('name')
      table.timestamps(true, true);
    })
    .createTable('images', table => {
      table.uuid('id').primary();
      table.string('path')
      table.enum('type', ['CATEGORY', 'BLOG'])
      table.uuid('typeId')
      table.unique(['type', 'typeId'])
      table.timestamps(true, true)
    }).createTable('blogs', table => {
      table.uuid('id').primary();
      table.string('title')
      table.text('content')
      table.text('excerpt')
      table.dateTime('publishedAt')
      table.uuid('categoryId')
      table.uuid('authorId')
      table.timestamps(true, true);
    }).table('blogs', table => {
      table.foreign('authorId').references('users.id')
      table.index('authorId')
      table.foreign('categoryId').references('categories.id')
      table.index('categoryId')
  })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTable('blogs')
    .dropTable('categories')
    .dropTable('users')
    .dropTable('images')
}

