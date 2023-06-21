const http = require("http");
require("dotenv").config();

const port = process.env.PORT || 8000;

const routes = require("./app/routes")
const errorHandler = require("./app/middleware/errorHandling");
const body_parser = require("body-parser");
const encode = body_parser.json();

const server = http.createServer((req, res) => {
    encode(req, res, () => {
        try {
            routes(req, res);
        } catch (error) {
            errorHandler(error, req, res)
        }
    }); 
});

server.listen(port, (err) => {
    if (err) {
        return false;
    }
    console.log("Server is Listening on Port: " + port);
});