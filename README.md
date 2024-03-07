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
> Then, start the service 
```
yarn dev
```

## API Docs
Postman: https://documenter.getpostman.com/view/4055949/2sA2xfXYMW