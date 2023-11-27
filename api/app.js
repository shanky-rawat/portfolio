const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = require("./docs/swagger-output.json");
const db = require("./config/database");
const pingRoutes = require("./src/ping/routes");

// DB connection test
db.authenticate()
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

// Express setup
const app = express();
app.use(bodyParser.json());

// API Header for CORS
app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-with, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

// Express routes
app.use("/ping", pingRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;
