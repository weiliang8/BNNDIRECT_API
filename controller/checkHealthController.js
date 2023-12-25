const asyncHandler = require("../middleware/async");

exports.getHealth = asyncHandler(async (req, res, next) => {
    return res.status(200).json({
        success: true
      })
  });
  