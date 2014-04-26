var		config = require('../config'),
			bcrypt = require('bcrypt-nodejs'),
			authA = require('../modules/authenticate').admin,
			auth = require('../modules/authenticate').user;
var db;

var queries = {
	addUser : "INSERT INTO users (firstName,lastName, userName,email,admin,password) VALUES (?);"
};
module.exports = function(app,d){
	db = d;
	app.post('/user',authA,addUser);

};


function addUser(request,response,next){
	var firstName = request.body.firstName;
	var lastName = request.body.lastName;
	var userName = request.body.userName;
	var email = request.body.email;
	var admin = request.body.admin;
	var password = request.body.password;
	bcrypt.hash(password,null,null,function(err,hash){
		if(err)	{
			response.status(500).json({'data':'unable to hash password','error':err});
			return;
		}
		var params = [[firstName,lastName,userName,email,admin,hash]];
		db.query(queries.addUser,params,function(err,result){
			if(err){
				console.log(x.sql);
				response.status(500).json({'data':'unable to save user','error':err});
				return;
			}
			response.status(200).json({'data':'successfully saved user'});
		});
	});
}