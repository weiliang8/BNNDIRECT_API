const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // LOG TO CONSOLE FOR DEV
  console.log(err.name);
  console.log(err.stack); //err.stack

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
