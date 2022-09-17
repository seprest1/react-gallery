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
            console.log('SQL failed in GET /gallery/likes/:id', error);
            res.sendStatus(500);
        });
});

//POST ROUTE

//PUT ROUTE

router.put('/likes/:id', (req, res) => {
    console.log('PUT route received a request');
    console.log(req.body.newLikeCount);
    let queryText = 
        `UPDATE "gallery"
            SET "likes" = $1
            WHERE id=$2;`
    
    let sqlValues = [req.body.newLikeCount, req.params.id];
    pool.query (queryText, sqlValues)
        .then(result => {
            res.sendStatus(200);
        })
        .catch((error) => {
            console.log('SQL failed in PUT /gallery/likes/:id', error);
            res.sendStatus(500);
        });
});

//DELETE ROUTE

module.exports = router;