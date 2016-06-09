module.exports = app => {
  return {
    findAll: (param, callback) =>{
      return callback ([
        {title: 'Fazer compras'},
        {title: 'Concerta o pc'}
      ])
    }
  };
};
