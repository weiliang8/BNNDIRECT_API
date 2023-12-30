const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");


// @desc Get all courses
// @route GET /api/googleResult/
// @access Public

exports.getResults = asyncHandler(async (req, res, next) => {
  originalTitle = req.body.title;
  const SearchApiUrl = `https://www.googleapis.com/customsearch/v1?key=${process.env.Custom_Search_API_Key}&cx=${process.env.Search_Engine_ID}&q=${originalTitle}`

  if (originalTitle === "" || originalTitle === undefined) {
    return next(
      new ErrorResponse('Article title is undefined!', 400) //BAD REQUEST
    );
  }

  let result = {};
  const response = await fetch(SearchApiUrl);
  const data = await response.json();

  if (!data.error) {
    const searchTerm = data.queries.request[0].searchTerms;
    const totalResultCount = data.searchInformation.totalResults;

    if (totalResultCount > 0) {
      result.title = data.items[0].title;
      result.url = data.items[0].link;
      result.thumbnail = data.items[0].pagemap.cse_image[0].src
    }
    res.header('Access-Control-Allow-Origin', 'https://www.bloomberg.com');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    return res.status(200).json({
      success: true,
      totalResultCount,
      result,
      searchTerm,
    })
  } else {
    return next(
      new ErrorResponse(data.error.message, data.error.code)
    );
  }
});
