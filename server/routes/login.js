var		fs = require('fs'),
			config = require('../config'),
			// db,// = require('./database'),
			bcrypt = require('bcrypt-nodejs'),
			authA = require('../modules/authenticate').admin,
			auth = require('../modules/authenticate').user;
var db;

var queries = {
	getPassword:"SELECT * FROM users WHERE userName = ?;"
};


module.exports = function(app,d) {
	db =d;
	app.post('/login',login);
	app.get('/logout',logout);
};




function login(request,response, next) {
	console.log(request.body);
	db.query(queries.getPassword,[request.body.userName],function(err,result){
		if(err){
			console.log(err);
			response.status(500).json({'result':'failure','message': err});
			return;
		}
		
		if(result===undefined)
		{
			console.log("result was undefined");
			response.status(500).json({'result':'failure','message':'invalid password or username'});
			return;
		}
		result = result[0];
		console.log(result.password);
		bcrypt.compare(request.body.password,result.password,function(err,res){

			if(err){
				console.log('epic failure');
				response.status(500).json({'result':'failure','message': err});
				return;
			}
			else if(res === true){
				var type;
				request.session.user = result[0];
				if(result.admin==="true"){
					type = "admin";
				}
				else{
					type = "dealer";
				}
				response.status(200).json({'result':'success','type':type, 'message':request.body.username + ' logged in successfully'});
				return;
			}
			else
			{
				response.status(500).json({'result':'failure','message': "invalid password or username"});
				return;
			}
		});
	});
}



function logout(request,response, next){

	//maybe do some additional cleanup here

	request.session.destroy();
	response.redirect('/');
}

