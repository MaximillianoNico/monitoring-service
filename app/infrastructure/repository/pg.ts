import knex from 'knex';

const pg = knex({
  client: 'pg',
  connection: process.env.DATABASE_URL,
  searchPath: ['knex', 'public'],
});

export const client = pg