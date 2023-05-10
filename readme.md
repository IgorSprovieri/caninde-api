# Canindé API

I did this project for a gas station to optimized the internal processes and help to manage the company

I used Clean Architeture to developed this project with this technologies below:

- Typescript [(typescriptlang.org)](https://www.typescriptlang.org)
- Express.js [(expressjs.com)](https://expressjs.com)
- TypeORM [(typeorm.io)](https://typeorm.io)
- Docker [(docker.com)](https://www.docker.com)
- Postgres [(postgresql.org)](https://www.postgresql.org)

## Features

- Rent System: Calculate the rents of the store that rent interior space
- Wash System: Control the customers washes
- Park System: Control of customers that stop at the park
- Debtors System: Control of customers who are in debt
- Expenses System: Calculate and organize the future expenses of the company

## Production Link

The API was deployed with AWS EC2

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

6. Start on dev mode to create tables

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

Programming student since 2013, started working with Unity C# in 2020, paticipated in 16 team projects as a freelancer and his own game studio. At this time, he was a tutor on Crie Seus Jogos company, helping students and writing articles to company's website. In 2022 he decided to learn web development with HTML, CSS and JS. Actually he is fullstack programmer and he is specializing in react.js, node.js, docker, mongoose, postgres and sequelize.
