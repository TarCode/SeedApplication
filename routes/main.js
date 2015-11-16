//render landing page
exports.land = function (req, res){
  res.render('home');
}

//render sign up page
exports.show_sign_up = function (req, res){
  res.render('sign_up');
}

//render login page
exports.show_login = function (req, res){
  res.render('login');
}
