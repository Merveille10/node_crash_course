const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

//express app
const app = express();

//connect to mongodb
const dbURI = 'mongodb+srv://merveille_gnahoui:merveille@10@nodetuto.e4dmewl.mongodb.net/node-tuts?retryWrites=true&w=majority&appName=nodetuto';
mongoose.connect(dbURI, {useNewUrlParser: true, useUndefinedTopology: true});

//register vien engine
app.set('view engine', 'ejs');

//listen for requests
app.listen(3000);

//middleware & static files
app.use(morgan('dev'));
app.use(express.static('public'));

//send response
app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds starts', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

//redirect
app.get('/blogs/create', (req, res) => {
    res.render('create', {title: 'Create'});
});

//404 error
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});