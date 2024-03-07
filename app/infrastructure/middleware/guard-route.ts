import { NextFunction, Request, Response } from "express";

export interface IRequestMiddleware extends Request {
  userId?: string
  userName?: string
}

const GuardRoute = (req: IRequestMiddleware, res: Response, next: NextFunction) => {
  const xToken = req?.get('x-token-api');

  if (xToken !== process.env.API_KEY_INTERNAL) {
    return res.status(403).send({
      message: "Forbidden"
    })
  }
  const userInfo = req?.get('x-user') ?? '';
  const userData = userInfo?.split(':')

  req.userId = userData[0];
  req.userName = userData[1];

  next();
}

export default GuardRoute;