var http = require("http");
var express = require("express");

var app = express();



                                         

/**Configuaration*/

/** enables CORS security */

app.use(function (req, res, next) {

res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
next();

});


         
/** read req body as obj*/
var bodyParser = require("body-parser");
app.use(bodyParser.json());





/** Web server functionality */



app.get("/", function(req, res){
    res.send("<center><h1 style='color:darkblue;'> Hello from my own Server </h1>");
})

app.get("/contact", function(req, res){
    res.send("My contact info is: NS  4545-3030, oheyer@sandiego.edu");
});

app.get("/about", function(req, res){
    res.send("My name is Oliver Heyer");
});


app.listen(8080, function () {
    console.log("Server running at http://localhost:8080");
});



/**    This is for API functionality        */
/**                                         */
/**                                         */
/**                                         */
/**                                         */

var items = [];
var count = 0;

app.get('/api/products', function (req, res){
    console.log("User wants the catalog");

    res.json(items);

});

app.post('/api/products', function(req, res){
    console.log("User wants to save item");

    // read the item 
    var item = req.body;
    

    // assign unique id
    item.id = count;
    count += 1;

    // store and send back the item
    items.push(item);

    res.json(item);
})