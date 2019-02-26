var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database: 'testdb'
});
connection.connect(function(err){
    if(err){
         throw err;
    }
    else {
      
      console.log("connection successful")
    }
 }
 );
module.exports = connection;
