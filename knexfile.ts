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
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },
  // Add other environments as needed (e.g., production)
};

export default config;