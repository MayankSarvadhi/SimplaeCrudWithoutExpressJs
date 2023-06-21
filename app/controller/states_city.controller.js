const pool = require("../config/db");

const errorHandling = require("../middleware/errorHandling");

const insertState = (req, res) => {
    try {
        const { s_name } = req.body;
        const sql = `INSERT INTO state(s_name) VALUES($1) RETURNING *`
        const values = [s_name]
        pool.query(sql, values, (error, data) => {
            if (error) {
                errorHandling(error, req, res);
            }
            return res.end(JSON.stringify({ statusCode: 201, data: data.rows, message: " 👍🏻 State Insert Successfully" }));
        });
    } catch (error) {
        errorHandling(error, req, res);
    }
}

const destroyState = (req, res, id) => {
    try {
        const sql = `WITH deleted_cities AS
                    ( DELETE FROM city 
                    WHERE state_id = ${[id]} )
                    DELETE FROM state
                    WHERE id = ${[id]} 
                    RETURNING *`;
        pool.query(sql, (error, data) => {
            if (error || !id || data.rowCount === 0) {
                errorHandling(error, req, res);
            }
            return res.end(JSON.stringify({ statusCode: 200, data: data.rows, message: " 👍🏻 State Deleted Successfully" }));
        });
    } catch (error) {
        errorHandling(error, req, res);
    }
}

const getAllState = (req, res) => {
    try {
        const sql = `
                        SELECT s_name,c_name FROM state 
                        INNER JOIN city 
                        ON state.id = city.state_id
                    `
        pool.query(sql, (error, data) => {
            if (error) {
                errorHandling(error, req, res);
            }
            return res.end(JSON.stringify({ statusCode: 200, data: data.rows, message: " 👍🏻 State Fatch Successfully" }));
        });
    } catch (error) {
        errorHandling(error, req, res);
    }
}

const singaleREC = (req, res, id) => {
    try {
        const sql = `
            SELECT s.s_name, c.c_name
            FROM state s
            INNER JOIN city c ON s.id = c.state_id
            WHERE s.id = $1
        `;
        const values = [id];
        pool.query(sql, values, (error, data) => {
            if (error) {
                errorHandling(error, req, res);
            }
            return res.end(JSON.stringify({ statusCode: 200, data: data.rows, message: " 👍🏻 State Fetch Successfully" }));
        });
    } catch (error) {
        errorHandling(error, req, res);
    }
};

const updates = (req, res, id) => {
    try {
        const { body: { s_name } } = req;
        const sql = `UPDATE state SET s_name = '${[s_name]}' WHERE id = ${[id]} RETURNING *`
        pool.query(sql, (error, data) => {
            if (error) {
                errorHandling(error, req, res);
            }
            return res.end(JSON.stringify({ statusCode: 200, data: data.rows, message: " 👍🏻 State Update Successfully" }));
        });
    } catch (error) {
        errorHandling(error, req, res);
    }
}

module.exports = { insertState, destroyState, getAllState, singaleREC, updates }