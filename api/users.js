 
var usersApi = function (app)
{
var logs =[];

  var connection = require("../config/dbcon.js");
  
    //get all users...
    app.get("/users", (req, result)=>
     {
      // console.log(req.params.id);
        
       connection.query("SELECT id , name   FROM testtb",(err, res)=>
       { 
         if (err) throw err;
         console.log("API/USERS/GET/");
         logs.push("200","API/USERS/GET/");
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
         console.log("API/USERS/GET/:ID");
         logs.push("200","API/USERS/GET/:ID");
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
         console.log("API/USERS/DELETE/");
         logs.push("200","API/USERS/DELETE/");
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
         result.send("Added record successfully");
         console.log("API/USERS/POST/")
         logs.push("200","API/USERS/POST/");
          
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
         result.send("Updated record successfully");
         console.log("API/USERS/UPDATE/")
         logs.push("200","API/USERS/UPDATE/");
          
       });
        
        
      });
      //view all logs made on the server..
       
      app.get("/logs", (req, result)=>
       {
         result.send(logs);
         console.log(logs);
       });

       
}
    
module.exports= usersApi;
   