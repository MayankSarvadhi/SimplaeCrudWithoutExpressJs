const { insertState, destroyState, getAllState, updates, singaleREC } = require("../controller/states_city.controller");
const { insertCity, deleteCity, updatecity, singalecity, getAllCity } = require("../controller/city.controller");

const router = {
    // state Routing
    "/api/v1/state_city/insertState": {
        POST: insertState
    },
    "/api/v1/state_city/deleteState/": {
        DELETE: destroyState,
    },
    "/api/v1/state_city/getState/": {
        GET: getAllState
    },
    "/api/v1/state_city/getSingaleState/": {
        GET: singaleREC
    },
    "/api/v1/state_city/updateData/": {
        PUT: updates
    },
    // City Routing
    "/api/v1/state_city/addCity": {
        POST: insertCity
    },
    "/api/v1/state_city/destroyCity/": {
        DELETE: deleteCity
    },
    "/api/v1/state_city/updateCity/": {
        PUT: updatecity
    },
    "/api/v1/state_city/singaleCity/": {
        GET: singalecity
    },
    "/api/v1/state_city/getAllCity": {
        GET: getAllCity
    }
};

module.exports = router