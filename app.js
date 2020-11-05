const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;
const index = require('./routes');
const errorHandler = require('errorhandler');

require('dotenv').config()
require('./database');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('short'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(index);

if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    const code = err.code || 500
    res.status(code).json({
      code: code,
      message: code === 500 ? null : err.message
    })
  })
}

app.listen(port);