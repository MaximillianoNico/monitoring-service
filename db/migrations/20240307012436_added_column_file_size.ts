import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .table('user_files', function(table) {
      table.bigint('fileSize')
    })
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .table('user_files', function(table) {
      table.dropColumn('fileSize')
    })
}

