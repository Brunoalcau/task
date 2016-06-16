module.exports = app => {
  const Task = app.db.models.Task;
  app.get('/task',(req,res)=>{
    Task.findAll({},(task)=>{
      res.json({
        tasks:task
      });
    });
  });
};
