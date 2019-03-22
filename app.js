//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

// install Jquery
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
const $ = require("jquery")(window);
//////////////////////

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



//heroku ports listen

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log("Server has started Succesffully");
});
