module.exports = function(){
  //render landing page
  this.land = function (req, res){
    res.render('home');
  }

  //render sign up page
  this.show_sign_up = function (req, res){
    res.render('sign_up');
  }

  //render login page
  this.show_login = function (req, res){
    res.render('login');
  }

}
