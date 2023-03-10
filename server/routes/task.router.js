const express = require('express');
const taskRouter = express.Router();
const pg = require('pg');


// DB CONNECTION
const pool = new pg.Pool({
    database: 'weekend-to-do-app',
    host: 'localhost',
    port: 5432
});

//GET
taskRouter.get('/', (req, res) => {
    console.log('in router.get')
    const queryText = 'SELECT * FROM "tasks";';
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows)
    })
    .catch((error) => {
        res.sendStatus(500)
    })
})

//POST

taskRouter.post('/', (req, res) => {
    console.log('/tasks')
    let newTask = req.body;
    console.log('req.body', req.body);

    let queryText = `INSERT INTO "tasks" ("title", "complete") 
    VALUES ($1, $2);`;

    pool.query(queryText, [newTask.task, newTask.complete === false])
    .then((result) => {
        console.log('Success! Task added', newTask);
        res.sendStatus(201)
    })
    .catch((err) => {
        console.log('Error adding task', error)
        res.sendStatus(500)
    })
})

module.exports = taskRouter;