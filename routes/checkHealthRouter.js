const express = require("express");
const router = express.Router();

const {getHealth}= require("../controller/checkHealthController")

router
  .route("/")
  .get(getHealth);

  module.exports = router;