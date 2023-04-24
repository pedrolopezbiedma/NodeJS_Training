const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');

// Creating the Express App
const app = express();

// Register the view engine
app.set('view engine', 'ejs');

// Middleware && Static files
app.use(morgan('dev'))
app.use(express.static('public'));

// Connect to MongoDB
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


// Listening for Requests
app.get('/', (request, response) => {
    // response.send('<p>Home page</p>')
    // response.sendFile('/views/index.html', { root: __dirname })
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
    ];
    response.render('index', { title: 'Home', blogs })
})

app.get('/about', (request, response) => {
    // response.sendFile('/views/about.html', { root: __dirname })
    response.render('about', { title: 'About'})
})

app.get('/blogs/create', (request, response) => {
    response.render('create', { title: 'Create a New Blog'})
})

// 404 Page
app.use((request, response) => {
    // response.status(404).sendFile('/views/404.html', { root: __dirname })
    response.status(404).render('404', { title: '404'})
})