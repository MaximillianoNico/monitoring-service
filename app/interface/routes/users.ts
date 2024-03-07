import express, { Request, Response } from 'express';
import { Knex } from 'knex';
import { getUserFiles, getUserResources } from '../controllers/users';
import { IRequestMiddleware } from '../../infrastructure/middleware/guard-route';

const router = express.Router();
const UsersController = ({ db }: { db: Knex }) => {
  const getUserResource = async (req: IRequestMiddleware, res: Response) => {
    const user = await getUserResources(db, req.userName, req.userId);
    const files = await getUserFiles(db, req.userId);
    const data = {
      uptime: process.uptime(),
      message: 'Ok',
      data: {
        user,
        files
      }
    };

    res.status(200).send(data);
  }

  router.get('/', getUserResource);

  return router;
}

export default UsersController;
