var parse = require('url').parse;
var config = {};

if(process.env.CLEARDB_DATABASE_URL){
    var url = parse(process.env.CLEARDB_DATABASE_URL);
    var auth = url.auth.split(':');
    config.db = {
        host:url.hostname,
        database:url.pathname.substr(1),
        user:auth[0],
        password : auth[1],
        multipleStatements:true
    };
}
else{
config.db = {
    user:"b7b335d649aca4",
    password:"f9dea4e1",
    host:"us-cdbr-east-05.cleardb.net",
    port:3306,
    schema:'heroku_0dd2cf29160ca2c',
    database:'heroku_0dd2cf29160ca2c',    
    multipleStatements: true
    };
  }

module.exports = config;