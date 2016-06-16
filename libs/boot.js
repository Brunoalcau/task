module.exports = app =>{
  app.db.sequelize.sync().done(()=>{
    app.listen(app.get('port'),()=>{
      console.log(`BOT API - PORT ${app.get('port')}`);
    });
  });
};
