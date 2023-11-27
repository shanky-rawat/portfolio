# portfolio
A portfolio website, with some insights about me, my random thoughts, my blogs, and collection of different projects I work on.

## Installation

This project uses docker to simplify the development process. In this project I am using below technologies
- ![image](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
- ![image](https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
- ![image](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
- ![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
- ![Swagger](https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&logo=swagger&logoColor=white)

### Prerequisite
- [docker](https://docs.docker.com/get-docker/)
- [docker-compose](https://docs.docker.com/compose/)

### Generic installation steps
- Start with `docker-compose build` to start the build process.
- Once build is done, `docker-compose up` to start the project.
- Or you can combine both command as `docker-compose up --build`.

### Ports and urls
The website will open on [localhost:4200](http://localhost:4200/) and the api can be connected on [/api](http://localhost:4200/api/).
server ping test can be done on [/api/ping](http://localhost:4200/api/ping).

### API Documentation
This project uses Swagger-autogen and swagger-ui-express to generate api documentation using openapi 3.0 specs. All API documentation can be read on [/api/api-docs](localhost:4200/api/api-docs/).


## License

[MIT](https://choosealicense.com/licenses/mit/)
