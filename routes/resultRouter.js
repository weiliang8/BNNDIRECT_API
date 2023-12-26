const express = require("express");
const router = express.Router();

const {getResults}= require("../controller/resultController")

router
  .route("/")
  .post(getResults);

  module.exports = router;