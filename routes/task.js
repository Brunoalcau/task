module.exports = app => {
  const Task = app.db.models.Task;
  app.route('/tasks')
  .all(app.auth.authenticate())
  .get((req,res)=>{
    Task.findAll({
      where: {user_id: req.user.id}
    })
    .then(result => res.json(result))
    .catch(error => res.status(412).json({msg: error.message}));
  }).post((req,res)=>{
    req.body.user_id = req.user.id;
    Task.create(req.body)
    .then(result => res.json(result))
    .catch(error => res.status(412).json({msg: error.message}));
  });
app.route('/tasks/:id')
.all(app.auth.authenticate())
.get((req,res)=>{
    Task.findOne({
      where: {
        id: req.params.id,
        user_id: req.user.id
      }
    })
    .then(result =>{
      if(result){
        res.json(result);
      }else {
        res.sendStatus(404);
      }
    }).catch(error => {
      res.status(412).json({msg: error.message});
    });
  }).put((req,res)=>{

    Task.update(req.body,{
      where: {
        id: req.params.id,
        user_id: req.user.id
      }
    }).then(result => res.sendStatus(204))
    .catch(error => {
      res.status(412).json({msg:error.message});
    });
  }).delete((req,res)=>{

    Task.destroy({
      where: {
        id: req.params.id,
        user_id: req.user.id
      }
    })
    .then(result=> res.sendStatus(204))
    .catch(error=> res.status.json({msg: error.message}));
  });
};
