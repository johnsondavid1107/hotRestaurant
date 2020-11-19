var express = require("express");
var path = require("path");

var PORT = 9999;
var app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/assets'))


const onTheBooks = [];

const waitlist = [];

for (let i = 0; i < onTheBooks.length; i++){

    if (onTheBooks[i] > 5){
        waitlist = onTheBooks.slice(5,onTheBooks.length);
    }
}

console.log(onTheBooks);
console.log(waitlist);





app.get("/", function(req, res) {

    res.sendFile(path.join(__dirname, "index.html"));
    console.log("knocking on the Home door!")
})

app.get("/add", function(req, res) {

    res.sendFile(path.join(__dirname, "add.html"));
    console.log("knocking on the ADD door!")
    
})

app.get("/reservations", function(req, res) {

    res.sendFile(path.join(__dirname, "reservations.html"));
    console.log("knocking on the RESERVATIONS door!")
   
});

app.get("/api/table", function(req, res) {

    
    console.log("knocking on the API Table door!")
    return res.json(onTheBooks);
});

app.get("/api/waitlist", function(req, res) {

    
    console.log("knocking on the API WAITLIST door!")
    return res.json(waitlist);
    console.log(waitlist);
});



app.post("/reservation", function(req, res) {

    const reservations = req.body;
    console.log(reservations);
    onTheBooks.push(reservations);

})


























app.listen(PORT, function(){
    console.log("You did it Five!  Port open and listening on " + PORT)
})