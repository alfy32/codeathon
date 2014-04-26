var db;

var queries = {
	
};





module.exports = function(app,d) {
	db =d;
	app.get('/venue',getVenue);
	app.post('/venue',addVenue);
};

function getVenue(request,response,next){
	var city = request.body.cityid;
	db.query(queries.getVenue,[city],function(err,venues){
		
	});
}

// function addEvent(request,response,next){
// 	var date = request.body.date;
// 	var time = request.body.time;
// 	var description = request.body.description;
// 	var cityid = request.body.cityid;
// 	var params = [[date,time,description,cityid]];
// 	db.query(queries.addEvent,params,function(err,result){
// 		if(err){
// 			return response.status(500).json({'data':err});
// 		}
// 		response.status(200).json({'data':'successfully saved event'});
// 	});
// }


// function getEvent(request,response,next){
// 	var categories = request.body.categories;
// 	if(categories === undefined){
// 		return getAllEvents(request,response,next);
// 	}
// 	else{
// 		return getEventsByCategories(request,response,next);
// 	}
// }


// function getAllEvents(request,response,next){
// 	var city = request.query.cityid;
// 	console.log(city);
// 	db.query(queries.getAllEvents,[city],function(err,events){
// 		if(err){
// 			return response.status(500).json({'data':err});
// 		}
// 		response.status(200).json({'data':events});
// 	});
// }

