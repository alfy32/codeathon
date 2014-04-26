var db;

var queries = {
	getEvent:"",
	addEvent:"INSERT INTO events ( date,time, description, cityid) VALUES (?);",
	getAllEvents:'SELECT * FROM events WHERE cityid = ? ORDER BY date,time'
};





module.exports = function(app,d) {
	db =d;
	app.get('/event',getEvent);
	app.post('/event',addEvent);
};



function addEvent(request,response,next){
	var date = request.body.date;
	var time = request.body.time;
	var description = request.body.description;
	var cityid = request.body.cityid;
	var params = [[date,time,description,cityid]];
	db.query(queries.addEvent,params,function(err,result){
		if(err){
			return response.status(500).json({'data':err});
		}
		response.status(200).json({'data':'successfully saved event'});
	});
}


function getEvent(request,response,next){
	var categories = request.body.categories;
	if(categories === undefined){
		return getAllEvents(request,response,next);
	}
	else{
		return getEventsByCategories(request,response,next);
	}
}


function getAllEvents(request,response,next){
	var city = request.query.cityid;
	console.log(city);
	db.query(queries.getAllEvents,[city],function(err,events){
		if(err){
			return response.status(500).json({'data':err});
		}
		response.status(200).json({'data':events});
	});
}

