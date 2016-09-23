import https from 'https';
import fs from 'fs';

module.exports = app =>{
  const credentials = {
    key : fs.readFileSync('ntask.key'),
    cert : fs.readFileSync('ntask.cert')
  }
  if(process.env.NODE_ENV !== 'test' ){
    app.db.sequelize.sync().done(()=>{
      app.listen(app.get('port'),()=>{
        console.log(`BOT API - PORT ${app.get('port')}`);
      });
    });
  }
};
