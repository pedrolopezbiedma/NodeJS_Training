// Dependencies
const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const blogRoutes = require('./routes/blogRoutes')
const aboutRoutes = require('./routes/aboutRoutes');

// Creating the Express App
const app = express();

// Connecting to MongoDB
const dbURI = 'mongodb+srv://pedrol:test1234@nodejs-cluster.fvghcpj.mongodb.net/NodeJS-Database?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to db')
        // Listening for requests in the app
        app.listen(3000, () => {
            console.log('Listening for requests in http://localhost:3000/');
        })
    })
    .catch((error) => console.log('Error while connecting to the db: ', error));

// Register the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('dev')) // Logger middleware
app.use(express.urlencoded({ extended: true })); // to support URL-encoded bodies

// Static files
app.use(express.static('public')); // Use folder as static to use CSS & Images

// Listening for Requests
app.get('/', (request, response) => {
    // response.send('<p>Home page</p>')
    // response.sendFile('/views/index.html', { root: __dirname })
    // const blogs = [
    //     {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    //     {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    // ];
    // response.render('index', { title: 'Home', blogs })
    response.redirect('/blogs');
})
app.use('/blogs', blogRoutes);
app.use('/about', aboutRoutes);

// 404 Page
app.use((request, response) => {
    // response.status(404).sendFile('/views/404.html', { root: __dirname })
    response.status(404).render('404', { title: '404'})
})

// Lesson 12 - Wrap up
// Cambiar el delete de borrar por el trashcan