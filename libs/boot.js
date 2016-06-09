module.exports = app =>{
  app.db.sync().done(()=>{
    app.listen(app.get('port'),()=>{
      console.log(`BOT API - PORT ${app.get('port')}`);
    });
  });
};
