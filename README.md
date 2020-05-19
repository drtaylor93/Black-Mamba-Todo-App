## Background

This project was inspired by the life and career of Kobe Bryant. Over his 20 year career, he inspired many around the world to exceed their own expectations. This TODO app was created to inspire fans of Kobe and non NBA fans alike to aspire for greatness, starting with daily motivation and routines.

## Getting Started

To use the app you will need a Postgres database. You can either use your own, or
start up the database provided by the docker image made availble in the docker-compose.yml.

If you would prefer to not install postgres on your local machine, this app offers a docker setup that will allow you to run it in an isolated environment.

Docker can be installed via Docker Hub on Mac, Windows, or Linux [here.](https://docs.docker.com/)

To get the container up and runnning run:
`docker-compose up --build`

This will start a containerized instance of PostgreSql running on port 5432.

From the root directory run the following:
* `npm install`

* `sequelize db:migrate`

* `nodemon server.js`

At this point the postgres database and the todo app should be running. The app can be reached at `localhost:54320`.

Only sophisticated Github users can access this work, so have your login in mind if you want to see the app.