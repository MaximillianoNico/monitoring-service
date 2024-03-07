# monitoring-service
[LittleLive]: Monitoring Service API 

## Descriptions
This service will handle upload into S3 AWS and also do monitoring such as logging user file saved, limitation each user and also Authorization

## How to run
> First need to install all dependencies by using 
```
yarn install
```
> Execute Migration
```bash
npx knex migrate:latest --knexfile knexfile.ts
```
> And also copy file of .env.dist into file .env, added the credentials on the .env file
```
cp .env.dist .env
```
> Then, start the service 
```
yarn dev
```

## API Docs
Postman: https://documenter.getpostman.com/view/4055949/2sA2xfXYMW