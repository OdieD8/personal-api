var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

var middleware = require("./controllers/middleware");
var mainCtrl = require("./controllers/mainCtrl");

app.use(middleware.addHeaders);

app.get("/name", mainCtrl.getName);
app.get("/location", mainCtrl.location);
app.get("/occupations", mainCtrl.occupations);
app.get("/occupations/latest", mainCtrl.latestOcc);
app.get("/hobbies", mainCtrl.hobbies);
app.get("/hobbies/:type", mainCtrl.hobbieType);
app.put("/name", mainCtrl.changeName);
app.put("/location", mainCtrl.updateLocation);
app.post("/hobbies", mainCtrl.addHobbie);
app.post("/occupations", mainCtrl.addOccupation);
app.get("/skills", mainCtrl.skills);
app.post("/skills", middleware.generateId, mainCtrl.addSkills);

var port = 8800;
app.listen(port, function() {
	console.log("listening on port:", port);
});
