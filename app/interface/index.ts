import { AnyARecord } from 'dns';
import healthCheck from './routes/healthcheck';
import uploader from './routes/uploader';
import users from './routes/users';
import { IMainRoute } from './types'

const Interface = ({ app, db, bucket }: IMainRoute) => {

  app.use('/app', healthCheck());
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
