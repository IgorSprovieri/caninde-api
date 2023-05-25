# Canindé API

I developed this project for a gas station to optimized the internal processes and help to manage the company

I used Clean Architecture to develop this project with this technologies below:

- Typescript [(typescriptlang.org)](https://www.typescriptlang.org)
- Express.js [(expressjs.com)](https://expressjs.com)
- TypeORM [(typeorm.io)](https://typeorm.io)
- Docker [(docker.com)](https://www.docker.com)
- Postgres [(postgresql.org)](https://www.postgresql.org)

## Features

- Rent System: Calculate the rents of the store that rent interior space
- Wash System: Control the customers washes (cooming soon)
- Park System: Control of customers that stop at the park (cooming soon)
- Debtors System: Control of customers who are in debt (cooming soon)
- Expenses System: Calculate and organize the future expenses of the company (cooming soon)

## Production Link

The API was deployed on a local server

## Documentation

1. Open the file below with figma:

```
https://github.com/IgorSprovieri/caninde-api/blob/main/Insomnia.json
```

## Getting Started

1. Clone the repo

```
git clone https://github.com/IgorSprovieri/caninde-api
```

2. Open the project

```
cd caninde-api
```

3. Install dependencies

```
npm install
```

4. Create DB

```
docker run --name caninde-db -e POSTGRES_PASSWORD=docker -e POSTGRES_USER=docker -p 5432:5432 -d -t postgres
```

5. Create a .env file following example:

```
HASH_SECRET=""

HOST="localhost"
PORT=5432
USERNAME="docker"
PASSWORD="docker"
DATABASE="postgres"
```

Create your hash secret using: [md5hashgenerator.com](https://www.md5hashgenerator.com)

6. Start on dev mode

```
npm run start:dev
```

Use CTRL + C to stop

7. Build the project

```
npm run build
```

8. Start the project

```
npm run start
```

Use CTRL + C to stop

## Author

<img src="./public/myImage.jpeg" width="22%">

### _Igor Sprovieri Pereira_

In 2013 I learned to programming games how as a hobbie, in 2020 I started to work on this area, I did some freelancers, opened my game studio and I was a writter for over a year on site crieseusjogos.com. In 2022 I decided to go a web developer professional and today I am fullstack with react and node
