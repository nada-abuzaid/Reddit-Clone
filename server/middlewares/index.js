const express = require('express');
const compression = require('compression');
const cookieParse = require('cookie-parser');
const { join } = require('path');
const router = require('../routes');

const logger = (req, res, next) => {
  console.log(
    '**********************************Begin Logger**********************************'
  );
  console.log(`${req.method} ${req.originalUrl}`);
  console.log('Request Body :', req.body);
  console.log('Request Params :', req.params);
  console.log('Request Query :', req.query);
  console.log(
    '**********************************End Logger************************************'
  );

  next();
};

module.exports = logger;

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(compression());
  app.disabled('x-powered-by');
  app.use(cookieParse());
  app.use(logger);
  app.use(express.static(join(__dirname, '..', '..', 'client', 'public')));
  app.use(router);
};
