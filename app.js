//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
 extended: true
}));
app.use(express.static("public"));
// // app.use(express.static(__dirname + 'public'));
// app.use(express.static(__dirname + '/public'));

app.use('/public/images/', express.static('./public/images'));

///////////////////////////GET REQUETS////////////////////////////
app.get("/", function(req, res) {
  res.render("home");
});



app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/contact", function(req, res) {

  res.render("contact");
});
app.get("/gallery", function(req, res) {

  res.render("gallery");
});

app.get("/menu", function(req, res) {

  res.render("menu");
});




app.listen(3000, function() {
 console.log("Server started on port 3000");
});
