describe('Routes: Index',()=>{
  describe('GET',()=>{
    it('Return status web api',()=>{
      request.get('/')
      .expect(200)
      .end((err,res)=>{
        const expected = {status: 'BOT API'}
        expect(res.body).to.eql(expected);
        done(err);
      });
    });
  });
});
