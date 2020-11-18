var express = require("express");
var path = require("path");

var PORT = 9999;
var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/assets'))









app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname, "index.html"));
})

app.get("/add", function(req, res) {

    res.sendFile(path.join(__dirname, "add.html"));
})

app.get("/reservations", function(req, res) {

    res.sendFile(path.join(__dirname, "reservations.html"));
})



























app.listen(PORT, function(){
    console.log("You did it Five!  Port open and listening on " + PORT)
})