const asyncHandler = require("express-async-handler");
const { HttpException } = require("../utils/exceptions");

module.exports.notFound = asyncHandler((_req, res, _next) => {
    throw new HttpException(404, "route not found");
});

module.exports.errorHandler = (err, _req, res, _next) => {
    console.error(err);

    if (err instanceof HttpException) {
        const message = process.env.NODE_ENV === "production" ? err.errorMessage : { ...err.errorMessage, stack: err.stack };
        res.status(err.statusCode).json(message);
    } else {
        res.status(500).json("internal server error");
    }
};