module.exports = app => {
  const Task = app.models.task;
  app.get('/task',(req,res)=>{
    Task.findAll({},(task)=>{
      res.json({
        tasks:task
      });
    });
  });
};
