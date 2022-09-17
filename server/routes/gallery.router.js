const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//GET ROUTE
router.get('/', (req, res) => {
    console.log('GET /gallery received a request');
    let queryText = 
        `SELECT * FROM "gallery"
            ORDER BY id;`;
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        })
        .catch(error => {
            console.log('error getting gallery', error);
            res.sendStatus(500);
        });
});

//POST ROUTE

//PUT ROUTE

//DELETE ROUTE

module.exports = router;