import logging from './logger.js';

module.exports = {
  database: 'task',
  username: 'root',
  password: 'root',
  host: '33.33.33.10',
  params: {
    dialect: 'mysql',
    define: {
      underscored: true
    },
    logging: (sql) => {
      logging.info(`[${new Date()}] ${sql}`);
    }
  },
  jwtSecret: 'Ntalk$-AP1',
  jwtSession: {
    session: false
  }
};
