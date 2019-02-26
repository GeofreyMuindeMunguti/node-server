This is a sample NodeJS server that makes the CRUD operations to a database.

FrameWorks

1. NodeJS
2. ExpressJs
3. MYSQL 
4. XAMPP server

Preferences

1. POSTMAN( For easy api calls)

Getting started

1. Be sure to have install Node in your machine
2. Clone this repository
3. In project root folder: run npm install express(This will install expressJS for you)
4. In project root folder: run npm install (This will install all the required dependencies for you)
5. Start your XAMPP server (Or whatever you use for this)
6. Create a database that matches what is in the dbcon.js file which is in config folder of this project.
                         ***************************
                Import the .sql file in the database folder of this project
                         ***************************
7. Change the database connection in dbcon.js file to match your database configurations.
                         ****************************
    By now npm must have completed installing the required dependencies.
                        *****************************

9. To run the server, run nodemon app.js
10. You will see a log on your command prompt that tells you that the server is    running on port 4200.
11. If you get an error that the port is in use, you can change it in app.js, then re-run the server
12. Now open your browser and serve the url that is shown on your command prompt (localhost:4200).

Making the calls

Note: BaseUrl = localhost:4200 || localhost:the_port_you_set.
**************************************************************************************************************************
_______________________________________________________________________________________________________________________
|Type    Data         URL                          Function                                   Examples                 |
|______________________________________________________________________________________________________________________|
|GET                 BaseUrl/users                  Get all users in the database                localhost:4200/users  |
|GET     id(int)     BaseUrl/users/{id}             Get a certain user by id                     localhost:4200/users/1|
|POST                BaseUrl/users/add              Create a new user                            Refer to screenshots. |
|DELETE  id(int)     BaseUrl/users/{id}             Delete a certain user by their id            localhost:4200/users/1|
|GET                 BaseUrl/logs                   Get a log of all operations  on the server   localhost:4200/logs   | 
|POST    id(int)     BaseUrl/users/update/:id       Update a certain user record by id           Refer to screenshots  |
________________________________________________________________________________________________________________________
**************************************************************************************************************************

Note* ( For endpoints BaseUrl/user || & BaseUrl/users/update/:id)

                           ******************************
        To create a new user or update a user, note that data is passed as a query. Check the screenshots folder to see how the data is passed using postman.
                           *******************************

Future Works
1. Remote server Deployment(To upload a deployment guidelines document soon on github repo soon).
2. More Endpoints for more database operations.


                           *********************************
             If you need any help, be sure to halla at muindegeofrey@gmail.com

 




