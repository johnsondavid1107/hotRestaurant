var express = require("express");
var path = require("path");

var PORT = 3003;
var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/assets'))


const tables = [];
var onTheBooks = [];
var waitlist = [];




app.get("/", function (req, res) {

    res.sendFile(path.join(__dirname, "index.html"));
    // console.log("knocking on the Home door!")
})

app.get("/add", function (req, res) {

    res.sendFile(path.join(__dirname, "add.html"));
    // console.log("knocking on the ADD door!")

})

app.get("/reservations", function (req, res) {

    res.sendFile(path.join(__dirname, "reservations.html"));
    // console.log("knocking on the RESERVATIONS door!")

});

app.get("/api/table", function (req, res) {

    if (tables.length <= 5) {

        onTheBooks = tables.slice(0, 5);

    }

    // console.log("knocking on the API Table door!")
    return res.json(onTheBooks);
    // console.log(tables)
});

app.get("/api/waitlist", function (req, res) {
    if (tables.length > 5) {

        waitlist = tables.slice(5, tables.length);

    }

    // console.log("knocking on the API WAITLIST door!")

    return res.json(waitlist);



});



app.post("/reservation", function (req, res) {

    const reservations = req.body;
    // console.log(reservations);
    tables.push(reservations);

})


























app.listen(PORT, function () {
    console.log("You did it Five!  Port open and listening on " + PORT)
})