import { Application, Request } from 'express';
import { Knex } from 'knex';

export interface IMainRoute {
  app: Application,
  db: Knex
  bucket?: AWS.S3
}
