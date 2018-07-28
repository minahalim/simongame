const http = require('http');

const bodyParser = require('body-parser');
const express = require('express');
const isDev = require('isdev');

const { config, dir } = require('./config/serverConfig');
const { log, logServerConfig } = require('./logger');
const routes = require('./routes');

const app = express();
const server = http.createServer(app);

// use ejs template engine on express
app
  .set('view engine', 'ejs')
  .set('views', dir.views);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app
  .use('/build', express.static(dir.build))
  .use('/static', express.static(dir.static));

// middleware to use for all requests
app.use(function(req, res, next) {
  // do logging
  log.info('Time: ', Date.now());
  next(); // make sure we go to the next routes and don't stop here
});

app.use('/', routes);

// loading the hot-middleware
if (isDev) {
  const middleware = require('./middleware/hot');

  app.use(middleware());
}

app.get('*', (req, res) => {
  res
    .status(200)
    .render('index', {
      build: isDev ? null : '/build',
    });
});

server
  .listen(
    config.port,
    config.host,
    err => logServerConfig(err),
  );
