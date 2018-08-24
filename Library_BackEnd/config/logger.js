'use strict';
const winston = require('winston');
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
const logDir = 'log';

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}
const tsFormat = () => (new Date()).toLocaleString();
const logger = new (winston.Logger)({
  transports: [
    new winston.transports.File({
      level: 'silly',
      filename:  logDir + '/logs.log',
      handleExceptions: true,
      json: false,
      timestamp: tsFormat,
      maxsize: 5242880, //5MB
      maxFiles: 5,
      colorize: false
  }),
  // colorize the output to the console
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
      level :'silly',
      handleExceptions: true,
    })
  ],
  exitOnError: false,  
});

process.on('uncaughtException', function (err) {
  // logger.error('uncaughtException', { message : err.message, stack : err.stack }); // logging with MetaData
  // process.exit(1); // exit with failure
});
module.exports =logger;
