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
      it('return autheticated user token',done =>{
        request.post('/token/')
        .send({
          email: 'brunoalcau@gmail.com',
          password: '12345'
        })
        .expect(200)
        .end((err, res)=>{
          console.log(res.body);
          expect(res.body).to.include.keys('token');
          done(err);
        })
      });
    });
  });
});
