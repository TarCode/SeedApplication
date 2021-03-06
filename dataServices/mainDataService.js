module.exports = function(connection){

  var getData = function(query, cb){
      connection.query( query, cb);
  };

  var changeData = function(query, data, cb){
      connection.query(query, data, cb);
  };

  this.get_restaurants = function(cb){
    getData('SELECT * FROM restaurants', cb);
  }
  this.sign_up = function(data, cb){
      changeData('INSERT INTO users SET ?', data,  cb);
  }
  this.login = function (data, cb) {
      changeData('SELECT * FROM users WHERE email = ?', [data], cb );
  };

}
