module.exports = {
  database: 'task_test',
  username: 'root',
  password: 'root',
  host: '33.33.33.10',
  params: {
    dialect: 'mysql',
    define: {
      underscored: true
    },
    logging: false
  },
  jwtSecret: 'Ntalk$-AP1',
  jwtSession: {
    session: false
  }
};
