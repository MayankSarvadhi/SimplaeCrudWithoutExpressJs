const errorHandler = (error, req, res) => {
    if (error) {
        const statusCode = 500
        const message = error.message || "Internal Server Error";
        res.writeHead(statusCode, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ statusCode, message }));
    } else {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ status_code: 500, message: "Something went wrong. Please check." }));
    }
};

module.exports = errorHandler;
