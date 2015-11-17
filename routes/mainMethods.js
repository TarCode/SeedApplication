module.exports = function(){
  //render landing page
  this.land = function (req, res){
    res.render('home');
  }
  //gets all restaurants from database
  this.show_restaurants = function(req, res){
    req.services(function(err, services){
        var mainService = services.mainDataService;
         mainService.get_restaurants(function(err, results) {
           if (err) console.log(err);
             res.render('restaurants', {restaurants: results});
         });
    });
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
               if (err) console.log(err);
               res.render('login', {msg: "You have successfully signed up"});
         });
       }
       else{
         res.render('sign_up', {msg: "Passwords do not match"});
       }
    });
  }

  //render login page
  this.show_login = function (req, res, next){
    res.render('login');
  }

  //check user against users in database
  this.post_login = function(req, res){
    var input = JSON.parse(JSON.stringify(req.body));
    req.services(function(err, services){
         var data = {
                       email: input.email,
                       password: input.password
                    }

         var mainService = services.mainDataService;
         mainService.login(data.email, function(err, results) {
               if (err) console.log(err);
               if(results.length === 0){
                 res.render('login', {msg: "Incorrect username or password"});

               }
               else if(results[0].password === data.password){
                 res.render('new_profile');
               }
               else{
                 res.render('login', {msg: "Incorrect username or password"});

               }
         });

    });
  }


}
