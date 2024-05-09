const http = require('http');
const express = require('express');
const parser = require('body-parser');
const routes = require('./routers.js')

const app = express();

const PORT = 3000;
app.use(parser.json());

app.use('/', routes);

app.listen(PORT, ()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});

// all routes
// get task -> http://localhost:3000/api/get
// post task -> http://localhost:3000/
// search task by id -> http://localhost:3000/:id  - GET REQUEST
// update status -> http://localhost:3000/:id   - PATCH REQUEST
// delete task -> http://localhost:3000/:id  - DELETE REQUEST
