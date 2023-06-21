const url = require("url");
const queryString = require("querystring");
const router = require("../utils/allrouter");

const routes = (req, res) => {
    try {
        const parsedUrl = url.parse(req.url);
        const query = queryString.parse(parsedUrl.query);
        const routeHandler = router[parsedUrl.pathname];
        let [id] = Object.keys(query);
        if (routeHandler) {
            const handler = routeHandler[req.method];

            if (handler) {
                handler( req, res, id);
            } else {
                sendResponse(res, 405, 'Method Not Allowed');
            }
        } else {
            sendResponse(res, 404, 'Not Found');
        }
    } catch (error) {
        console.log('Error:', error.message);
        sendResponse(res, 500, 'Internal Server Error');
    }
};

function sendResponse(res, statusCode, message) {
    res.writeHead(statusCode, { 'Content-Type': 'text/plain' });
    res.end(message);
}

module.exports = routes;


