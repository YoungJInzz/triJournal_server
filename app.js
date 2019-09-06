const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const parser = require('body-parser');
const router = require('./routes.js');
const app = express();
const port = 3000;

app.use(cors());
app.use(morgan('dev'));
app.use(parser.json());
app.use('/', router);

app.set('port', port);

if (!module.parent) {
  app.listen(port);
  console.log('Listening on ', port);
}

module.exports.app = app;