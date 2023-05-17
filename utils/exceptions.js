class HttpException extends Error {
    statusCode;
    errorMessage;

    constructor(statusCode, message) {
        super(JSON.stringify({ message }));

        this.statusCode = statusCode;
        this.errorMessage = { message };
    }
}

module.exports = { HttpException };
