module.exports = function(){
  //render landing page
  this.land = function (req, res){
    res.render('home');
  }

  //render sign up page
  this.show_sign_up = function (req, res){
    res.render('sign_up');
  }

  //post sign up data to database
  this.post_sign_up = function(req, res){
    var input = JSON.parse(JSON.stringify(req.body));
    req.services(function(err, services){

       if(input.password === input.password2){
         var data = {
                       email: input.email,
                       password: input.password
                    }

         var mainService = services.mainDataService;
         mainService.sign_up(data, function(err, results) {
               if (err) return next(err);
               res.render('login', {msg: "You have successfully signed up"});
         });
       }
       else{
         res.render('sign_up', {msg: "Passwords do not match"});
       }
    });
  }

  //render login page
  this.show_login = function (req, res){
    res.render('login');
  }

}
