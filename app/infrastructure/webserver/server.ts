import express from 'express';
import cors from 'cors'
import Interface from '../../interface';
import knexConfig from '../../../knexfile'
import knex from 'knex';
import { Init } from '../storage-aws';

const createServer = () => {
  const app = express()
  const API_PORT = process.env.PORT || process.env.NX_API_PORT;

  const db = knex(knexConfig.development);
  // const bucket = Init();

  app.use(cors());
  app.use(express.json());

  // Init SocketIO
  // const { io, server } = Socket.createClient({ app });
  Interface({ app, db })

  app.listen(API_PORT || 3000, () => {
    console.log(`Server listen on port ${API_PORT} server-time ${new Date().getHours()}:${new Date().getMinutes()}`);
  });

  return app;

}

export default { createServer }
