module.exports = app => {
  const env = process.env.NODE_ENV;
  let config;
  if(env){
    return require(`./config.${env}.js`);
  }
  return require('./config.development.js');
};
