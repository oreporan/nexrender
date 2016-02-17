'use strict';

const express       = require('express');
const bodyParser    = require('body-parser');
const morgan        = require('morgan');
const router        = require('./router');

let app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('tiny'));

app.use('/api', router);

module.exports = {
    start: function(port) {
        app.listen(port, function () {
            console.log('noxrender.server is listening on port:', port);
        });
    }
};