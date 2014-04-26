var auth ={};


function timeout()
{
	return false;
}

auth.user = function (request, response, next){
		// remove next two lines to enable authentication
	next();
	return;
	
	if(request.session.user)
	{
		next();
	}
	else
	{
		console.log("i failed");
		response.redirect('/#/login');
		//response.json({result:'failure','message':'User is not logged in'});
		return;
	}
};


auth.admin = function (request, response, next){
	// remove next two lines to enable authentication
	next();
	return;

	//console.log(request.session.user);
	if(request.session.user !== undefined && request.session.user.admin==='true'){
		next();
		return;
	}
	else{
		console.log("i failed hard");
		// response.redirect('/#/login');
		response.json({result:'failure','message':'User is not an admin'});
		return;
	}
};

module.exports = auth;