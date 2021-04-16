const express = require('express');
const morgan = require('morgan');

// express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

// listen for requests
app.listen(3000);

// middleware & static files
app.use(express.static('public'));
app.use(morgan('dev'));

// ROUTES
// Home
app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quaerat.'},
        {title: 'mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quaerat.'},
        {title: 'How to defeat Bowser', snippet: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, quaerat.'},
    ];
    res.render('index', {title: 'Home', blogs});
});
// About
app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});
// create
app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create Blog'});
});
// 404
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});