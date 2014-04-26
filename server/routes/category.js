var db;

var queries = {
	addCategory: "INSERT INTO category (description) values (?);",
	getCategory:'select * from category'
};

module.exports = function(app,d) {
	db =d;
	app.post('/category',addCategory);
	app.get('/category',getCategory);
};


function getCategory(request,response,next){
	db.query(queries.getCategory,[],function(err,result){
		if(err){
			return response.status(500).json({"data":err});
		}
		response.status(200).json({'data':result});
	});
}

function addCategory(request,response,next){
	var description = request.body.description;
	db.query(queries.addCategory,[description],function(err,result){
		if(err){
			return response.status(500).json({"data":err});
		}
		response.status(200).json({'data':'successfully saved category'});
	});

}