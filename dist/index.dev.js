"use strict";

var express = require('express');

var path = require('path');

var app = express();

var _require = require('express-handlebars'),
    engine = _require.engine;

var port = process.env.PORT || 4000;
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express["static"](path.join(__dirname, '/public')));
app.get('/', function (req, res) {
  res.render('home');
});
app.get('/html-css', function (req, res) {
  res.render('pages/html-css/html-css-main');
});
app.get("/yell", function (req, res) {
  res.render("yell", {
    title: "Yell",
    message: "hello world"
  });
});
app.listen(port, function () {
  console.log('app listen on port:', port);
});