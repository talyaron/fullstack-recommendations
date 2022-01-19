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
app.get('/html-css-start', function (req, res) {
  res.render('pages/html-css/start');
});
app.get('/html-css-flex', function (req, res) {
  res.render('pages/html-css/flex');
});
app.get('/js-start', function (req, res) {
  res.render('pages/javascript/start');
});
app.get('/js-objects', function (req, res) {
  res.render('pages/javascript/objects');
});
app.get('/job-problem', function (req, res) {
  res.render('pages/job/theProblem');
});
app.listen(port, function () {
  console.log('app listen on port:', port);
});