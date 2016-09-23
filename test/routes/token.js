describe('Routes: Token',()=>{
  const User = app.db.models.User;
  describe('POST / Token',()=>{
    beforeEach(done =>{
      User.destroy({where: {}})
      .then(()=>
        User.create({
          'name':'BrunoCau',
          'email': 'brunoalcau@gmail.com',
          'password': '12345'
        })).then(done());
    });
    describe('status 200',()=>{
      // it('return autheticated user token',done =>{
      //   request.post('/token')
      //   .send({
      //     email: 'brunoalcau@gmail.com',
      //     password: '12345'
      //   })
      //   .expect(200)
      //   .end((err, res)=>{
      //     console.log(err);
      //     expect(res.body).to.include.keys('token');
      //     done(err);
      //   });
      // });
    });
    describe('status 401',function(){
      it('throws error when password is incorrect',function(){
        request.post('/token')
        .send({
          email: 'brunoalcau@gmail.com',
          password: '1313131'
        })
        .expect(401)
        .end((err, res)=>{
          done(err)
        });
      });
      it('throws error when email not exit',function functionName() {
        request.post('/token')
        .send({
          email: 'bruuuuu@gmail.com',
          password: '503810'
        }).expect(401)
        .end((err, res)=>{
          done(err);
        });
      });
      it('throws error email and password are black',function(){
        request.post('/token')
        .expect(401)
        .end((err, res)=>{
          done(err);
        });
      });
    });
  });
});
