function addEvent(){
var desc = $('#desc').val();
var date = $('#date').val();
var time = $('#time').val();
var params = {
	'description':desc,
	'date':date,
	'time':time,
	'cityid':1
};

$.post('/event',params,function(resp){
	window.location='/';
});

}