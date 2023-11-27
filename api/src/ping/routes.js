const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/", controller.ping);

module.exports = router;
