import path from 'path';

const config = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      user: 'root',
      password: 'password',
      database: 'littlelive',
      port: 5455,
    },
    migrations: {
      directory: path.resolve(__dirname, 'db', 'migrations'),
    },
    seeds: {
      directory: path.resolve(__dirname, 'db', 'seeds'),
    },
  },
  // Add other environments as needed (e.g., production)
};

export default config;