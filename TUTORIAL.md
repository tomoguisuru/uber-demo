# Microservices with NextJS

### Install NextJS
```bash
npm i -g @nestjs/cli
```

### Create the Nest Application
```bash
nest new uber-services
```

### Add Microservices Scaffolding
```bash
nest generate app logging
nest generate app riders
```

### Update the microservices ports
`/apps/<service-name>/src/main.ts`
- user-service => 3000
- riders => 3001
- logging => 3002

### Start Microservice
```bash
npm run start <service-name>
```

or
```bash
nest start <service-name>
```

### Docker Config
You will need to install different DBs for each microservice.
Logging will use MongoDB and Rider will use Postgres

Using Docker Desktop, Click the `Images` tab and search for each of the above and click `pull`

Create the `docker-compose.yml` file and add the `mongo` config

_start_
```bash
docker compose up
```

_stop_
```bash
docker compose down
```


### Install Dependencies

- [MongooseJS](https://mongoosejs.com/docs/index.html)
```bash
npm i mongoose @nestjs/mongoose
```

- [MongoDB Compass](https://www.mongodb.com/try/download/compass)


# Create new Logging Module

From `apps/logging/src`
```bash
nest g module rider-coordinates
nest g controller rider-coordinates
nest g service rider-coordinates
```