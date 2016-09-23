import fs from 'fs';
import Winston from 'winston';

if(!fs.existsSync('logs')){
  fs.mkdirSync('logs');
}
module.exports = new Winston.Logger({
  transports: [
    new Winston.transports.File({
      leve: 'info',
      filename: 'logs/app.log',
      maxsize: 1048576,
      maxFiles: 10,
      colorize: false
    })
  ]
});
