const path = require('path');

const dotenv = require('dotenv');
const getenv = require('getenv');

// load env file
dotenv.config();

const config = getenv.multi({
  env: 'NODE_ENV',
  host: process.env.OPENSHIFT_NODEJS_IP || 'SERVER_HOST',
  port: process.env.OPENSHIFT_NODEJS_PORT || 'SERVER_PORT',
});

const dir = {
  src: path.resolve(__dirname),
  views: path.resolve(__dirname, '..', 'views'),
  public: path.resolve(__dirname, '..', '..', 'public'),
  build: path.resolve(__dirname, '..', '..', 'public', 'build'),
  static: path.resolve(__dirname, '..', '..', 'public', 'static'),
};

module.exports = {
  config,
  dir
};
