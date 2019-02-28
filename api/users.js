const fs = require('fs');
var usersApi = function (app)
{
var logs =[];
var timestamp;

  var connection = require("../config/dbcon.js");
  
    //get all users...
    app.get("/users", (req, result)=>
     {
      // console.log(req.params.id);
        
       connection.query("SELECT id , name   FROM testtb",(err, res)=>
       { 
         if (err) throw err;
         gettime();
         console.log("API/USERS/GET/");
         logs.push(timestamp+"200","API/USERS/GET/");
         result.send(res);
       });
       
     });

    //get a specific user
     app.get("/users/:id", (req, result)=>
     {
       //console.log(req.params.id);
        
       connection.query("SELECT id , name   FROM testtb where id="+req.params.id, (err, res)=>
       { 
         if (err) throw err;
         gettime();
         console.log("API/USERS/GET/:ID");
         logs.push(timestamp+"200","API/USERS/GET/:ID");
         result.send(res);
       });
       
     });
     //delete a specific user
     app.delete("/users/:id", (req, result)=>
     {
       //console.log(req.params.id);
        
       connection.query("DELETE FROM testtb WHERE id="+req.params.id, (err, res)=>
       { 
         if (err) throw err;
         gettime();
         console.log("API/USERS/DELETE/");
         logs.push(timestamp+"200","API/USERS/DELETE/");
         result.send("Deleted record..");
       });
       
     });

     //create a user...
     app.post("/users/add" , (req, result)=>
     {
      // name: req.body.name;
        
       var name_new =req.query.name;
       var comments_new =req.query.comments;
       var number_new = req.query.number;
       //console.log(name_new+comments_new+number_new);

       connection.query("INSERT INTO  testtb (`name`, `comments`, `number`) VALUES ('"+name_new+"','"+comments_new+"','"+number_new+"')", (err, res)=>
       {
         if (err) throw err;
         else
         gettime();
         result.send("Added record successfully");
         console.log("API/USERS/POST/")
         logs.push(timestamp+"200","API/USERS/POST/");
          
       });
        
        
      });


      //update a user...
     app.post("/users/update/:id" , (req, result)=>
     {
      // name: req.body.name;
        
       var name_new =req.query.name;
       var comments_new =req.query.comments;
       var number_new = req.query.number;
       //console.log(name_new+comments_new+number_new);

       connection.query("UPDATE `testtb` SET  `name`='"+name_new+"',`comments`='"+comments_new+"',`number`='"+number_new+"' WHERE id ="+req.params.id, (err, res)=>
       {
         if (err) throw err;
         else
         gettime();
         result.send("Updated record successfully");
         console.log("API/USERS/UPDATE/")
         logs.push(timestamp+"200","API/USERS/UPDATE/");
          
       });
        
        
      });
      //view all logs made on the server..
       
      app.get("/logs", (req, result)=>
       {  createlogs();
         result.send(logs);
         console.log(logs);
       });

       function gettime()
       {
         var date = new Date();
         var year = date.getFullYear().toString();
         var getmon = date.getMonth()+1;
         var month = getmon.toString();
         var day = date.getDate().toString();
         var daymonthyear = day+"/"+month+"/"+year;

         var hours = date.getHours().toString();
         var minutes = date.getMinutes().toString();
         var seconds = date.getSeconds().toString();
         var time = hours+":"+minutes+":"+seconds;

           
         timestamp = daymonthyear+":"+time;
       }
      function createlogs()
      {
           fs.writeFile('./logs/logs.txt', logs, (err) => {  
            if (err) throw err;
            console.log('Logs saved!');
        });
       }

}
    
module.exports= usersApi;
   