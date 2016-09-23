import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import logger from './logger.js';
import compression from 'compression';
import helmet from 'helmet';
module.exports = app => {
  app.set('port',3000);
  app.set('json spaces',4);
  app.use(bodyParser.json());
  app.use(app.auth.initialize());

  app.use(morgan('common',{
    stream :{
      write: (message)=>{
          logger.info(message);
      }
    }
  }))
  app.use(helmet());
  app.use(cors({
    methods: ['GET','POST','PUT','DELETE'],
    allowedHeaders: ['Content-Type','Authorization']
  }));
  app.use((req, res, next)=>{
    delete req.body.id;
    next();
  });
  app.use(compression());
  app.use(express.static('public'));
};
