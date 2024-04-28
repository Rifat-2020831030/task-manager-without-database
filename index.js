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

