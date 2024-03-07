import { AnyARecord } from 'dns';
import healthCheck from './routes/healthcheck';
import uploader from './routes/uploader';
import users from './routes/users';
import { IMainRoute } from './types'
import GuardRoute from '../infrastructure/middleware/guard-route';

const Interface = ({ app, db, bucket }: IMainRoute) => {

  app.use('/app', healthCheck());
  // @ts-ignore
  app.use('/api', GuardRoute);
  app.use('/api/files', uploader({ db, bucket }));
  app.use('/api/users', users({ db }));

  /**
   * Catch 404 and forward to error handle.
   */
  app.use((req, res, next) => {
    let err = {
      message: new Error('Not Found'),
      status: 404
    }
    
    next(err);
  });
}

export default Interface;
