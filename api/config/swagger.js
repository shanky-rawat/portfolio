const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: {
    version: "1.0.0",
    title: "Portfolio API Documentation",
    description:
      "API Documentation for Portfolio, created with swagger-autogen and openapi 3 specs.",
  },
  servers: [
    {
      url: "http://localhost:4200/api/",
    },
  ],
};

const outputFile = "../docs/swagger-output.json";
const routes = ["../app.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the 
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc);
