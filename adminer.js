const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
require('./routes')(app);
app.use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({
        extended: false
    }))
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*')
            .setHeader('Access-Control-Allow-Headers', 'Origin,X-Requested-With,Content-Type,Accept')
            .setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
        next();
    })
    .listen(3000, (err) => {
        console.log("Server is listening port 3000");
    });
module.exports = app;