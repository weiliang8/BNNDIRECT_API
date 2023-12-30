const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // LOG TO CONSOLE FOR DEV
  console.log(err.name);
  console.log(err.stack); //err.stack

  if(error.statusCode===429){
    error.message="Third Party API Received Too Many Requests"
  }

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Internal Server Error",
  });
};

module.exports = errorHandler;
