const pool = require("../config/db");

const errorHandler = require("../middleware/errorHandling");

const insertCity = (req, res) => {
    try {
        const { body: { c_name, state_id } } = req;
        const sq = `INSERT INTO city(c_name,state_id) VALUES ('${[c_name]}', (SELECT id FROM state WHERE s_name = '${[state_id]}')) RETURNING c_name,state_id`;
        pool.query(sql, (error, data) => {
            if (error) {
                errorHandler(error, req, res);
            } else {
                return res.end(JSON.stringify({ statusCode: 201, data: data.rows[0], message: " 👍🏻 City Insert Successfully" }));
            }
        });
    } catch (error) {
        errorHandler(error, req, res);
    }
}

const deleteCity = (req, res, id) => {
    try {
        const sql = `DELETE FROM city WHERE id = ${[id]} RETURNING c_name`;
        pool.query(sql, (error, data) => {
            if (error || data.rowCount === 0) {
                errorHandler(error, req, res);
            } else {
                return res.end(JSON.stringify({ statusCode: 200, data: data.rows, message: " 👍🏻 City Deleted Successfully" }));
            }
        });
    } catch (error) {
        errorHandler(error, req, res);
    }
};

const updatecity = (req, res, id) => {
    try {
        const { body: { c_name } } = req;
        const sql = `UPDATE city SET c_name = '${[c_name]}' WHERE id = ${[id]} RETURNING *`
        pool.query(sql, (error, data) => {
            if (error) {
                errorHandler(error, req, res);
            } else {
                return res.end(JSON.stringify({ statusCode: 200, data: data.rows, message: " 👍🏻 City Update Successfully" }));
            }
        });
    } catch (error) {
        errorHandler(error, req, res);
    }
}

const singalecity = (req, res, id) => {
    try {
        const sql = `SELECT city.c_name, state.s_name FROM city 
                     INNER JOIN state 
                     ON city.state_id = state.id
                     WHERE city.id = $1
                    `;
        const value = [id];
        pool.query(sql, value, (error, data) => {
            if (error) {
                errorHandler(error, req, res);
            }
            return res.end(JSON.stringify({ statusCode: 200, data: data.rows, message: " 👍🏻 City Fatch Successfully" }));
        });
    } catch (error) {
        errorHandler(error, req, res);
    }
}

const getAllCity = (req, res) => {
    try {
        const sql = `SELECT city.c_name,state.s_name FROM city 
                     INNER JOIN state
                     ON city.state_id = state.id
                    `
        pool.query(sql, (error, data) => {
            if (error) {
                errorHandler(error, req, res);
            }
            return res.end(JSON.stringify({ statusCode: 200, data: data.rows, message: " 👍🏻 City Fatch Successfully" }));
        });

    } catch (error) {
        errorHandler(error, req, res);
    }
}

module.exports = { insertCity, deleteCity, updatecity, singalecity, getAllCity }