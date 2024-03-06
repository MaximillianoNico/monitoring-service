import express, { Request, Response } from 'express';
import { Knex } from 'knex';

const router = express.Router();
const UsersController = ({ db }: { db: Knex }) => {
  const getUserLost = (req: Request, res: Response) => {
    const data = {
      uptime: process.uptime(),
      message: 'Ok',
      date: new Date()
    };

    res.status(200).send(data);
  }

  router.get('/', getUserLost);

  return router;
}

export default UsersController;
