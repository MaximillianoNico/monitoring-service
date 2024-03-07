import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTable('user_files', function(table) {
      table.increments('id').primary();
      
      table.integer('user_id').unsigned().notNullable();
      table.foreign('user_id').references('users.id').onDelete('CASCADE');

      table.string('fileName').notNullable();
      table.timestamps(true, true);
    })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user_files')
}

