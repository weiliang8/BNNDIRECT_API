const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const hpp = require('hpp')
const cors = require('cors');
const sanitizer = require("perfect-express-sanitizer");
const errorHandler = require("./middleware/error");
const app = express();

// LOAD ENV VARIABLES
dotenv.config({ path: `${__dirname}/config/config.env` });

// ROUTE FILE
const result = require("./routes/resultRouter")
const checkHealth = require("./routes/checkHealthRouter");

// BODY PARSER
app.use(express.json());

// DEV LOGGING MIDDLEWARE
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// SANITIZE DATA
app.use(mongoSanitize())

// SET SECURITY HEADERS
app.use(helmet())

// PREVENT XSS ATTACK
app.use(
  sanitizer.clean({
    xss: true,
    noSql: true,
    sql: true,
  })
);

// RATE LIMITING 
const limiter = rateLimit({
  windowMs : 10*60*1000, //10mins
  max:100
})

app.use(limiter)

// PREVENT HTTP PARAM POLLUTION
app.use(hpp())

// ENABLE CORS
app.use(cors())

// MOUNT ROUTER
app.use("/api/googleResult",result)
app.use("/api/checkHealth",checkHealth)

app.use(errorHandler);

const PORT = process.env.PORT || 8000;

const server =app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT} ...`
  )
);

// HANDLE UNHANDLED PROMISE REJECTIONS
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error ${err}`);
    // CLOSE SERVER & EXIT PROCESS
    server.close(() => process.exit(1));
  });