import { NextFunction, Request } from "express";

export interface IRequestMiddleware extends Request {
  userId?: string
  userName?: string
}

const GuardRoute = (req: IRequestMiddleware, res: Response, next: NextFunction) => {
  const userInfo = req?.get('x-user') ?? '';
  const userData = userInfo?.split(':')

  req.userId = userData[0];
  req.userName = userData[1];

  next();
}

export default GuardRoute;