const log = require('winston');

const { config } = require('../config/serverConfig');

// set log as cli mode
log.cli();

function logServerConfig(err) {
  if (err) {
    log.error(err);
  }

  const url = ['http://', config.host, ':', config.port].join('');

  log.info('==========================================');
  log.info('Environment:', config.env);
  log.info('Listening at:', url);
  log.info('==========================================');
}

module.exports = {
  log,
  logServerConfig
};
