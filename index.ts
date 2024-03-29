import APIBootstrap from './app/infrastructure/webserver/server';
import dotenv from 'dotenv';

dotenv.config({
  path: "./.env"
});

const start = () => {
  try {
    APIBootstrap.createServer();

  } catch (err) {

    console.log(err);
    process.exit(1);
  }
}

start();
