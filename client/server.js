/**
 * Simple express server that serve static content.
 */

var express = require("express");
var path = require("path");

var PORT = process.env.PORT || 8000;

var app = express();
app.use(express.static(path.join(__dirname,"public")));
app.get('*', (req,res) => res.sendFile(path.join(__dirname,"public/index.html")));

app.listen(PORT,function(){
    console.log("Started listening on port", PORT);
});
