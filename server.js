const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

const dbURI = 'mongodb+srv://First:@P03pst33n@node-crash-course.bgqjg.mongodb.net/node-crash-course?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));


// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));

// routes
app.get('/', home);
app.get('/about', about);
app.get('/contact', contact);
app.get('/blogs', allBlogs);


// functions
function home(req, res) {
    res.render('index');
};

function about(req, res) {
    res.send("hello");
};

function contact(req, res) {
    res.send("hello");
};

function allBlogs(req, res) {
        Blog.find()
        .then((result) => {
            res.render('all-blogs', {blogs: result})
        })
        .catch((err) => {
            console.log(err)
        });
};














// function addBlog(req, res) {
//     const blog = new Blog({
//         title: 'newer blog',
//         snippet: 'about my new blog',
//         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ducimus numquam molestias ullam impedit nam quis asperiores doloremque perferendis temporibus ipsum, sequi sapiente consequuntur nemo.'
//     });
//     blog.save()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// };

// function allBlogs(req, res) {
//     Blog.find()
//         .then((result) => {
//             res.send(result)
//         })
//         .catch((err) => {
//             console.log(err)
//         });
// }