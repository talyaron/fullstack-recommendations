const express = require('express');
const path = require('path')
const app = express()
const { engine } = require( 'express-handlebars');
const port = process.env.PORT || 4000;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
    res.render('home');
});
app.get('/html-css', (req, res) => {
    res.render('pages/html-css/html-css-main');
});

app.get("/yell", (req, res) => {
	res.render("yell", {title: "Yell",message: "hello world"});
});

app.listen(port, ()=>{
    console.log('app listen on port:', port)
})