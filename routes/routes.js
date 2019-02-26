var userAPI = require("../api/users");
var appRouter = function (app){
     
    userAPI(app);
    app.get("/", function(req, res){
        res.status(200).send("Runing well");

    });
    console.log(userAPI.giveusers)
}

module.exports= appRouter;