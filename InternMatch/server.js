const express = require('express');
const user = require('./model/users.js');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));

// routes
app.get('/', home);
app.get('/about', about);
app.get('/contact', contact);

// functions
function home(req, res) {
    res.render('index', user);
}

function about(req, res) {
    res.send("hello");
}

function contact(req, res) {
    res.send("hello");
}


app.listen(3000);