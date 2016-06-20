module.exports = {
  database: 'task',
  username: 'root',
  password: 'root',
  host: '33.33.33.10',
  params: {
    dialect: 'mysql',
    define: {
      underscored: true
    }
  },
  jwtSecret: 'Ntalk$-AP1',
  jwtSession: {
    session: false
  }
};
