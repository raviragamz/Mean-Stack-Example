var http = require("http");//hhtp:standard node based library, therefore http was avaiable when typing paramter for require.
var express = require("express");
var app = express();
var _dirname ="/Users/raviragampeta/Documents/Technical/Node/NodeWebApp";
app.get("/",function(req,res)
{
	//instead of write and end, we can use send.
	//res.send("<html><body><h1>" + "Response from web server: hello request from" + req.url + "</h1></body></html>");
	res.sendFile(_dirname + '/client/views/index.html');

});

app.use('/js', express.static(_dirname + '/client/js/'));

//when building an api.
app.get("/api/users/", function(req,res)
{
	res.set("Content-Type","application/json");
	res.send({name:'Ravi',isValid:true, group:"Admin"});
});

var server = http.createServer(app);

//we have to listen to server.port:80-public facing webserver
server.listen(3000,function()
	{
		console.log("Server up and running..")
	});