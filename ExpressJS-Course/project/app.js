const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose');
const BlogModel = require('./models/blog');

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

// MongoDB & Mongoose sandbox
// app.get('/create-dummy-blog', (request, response) => {
//     const newBlog = new BlogModel({
//         title: 'A brand new blog 2',
//         snippet: 'This is my new blog',
//         body: "Look how cool is my blog dude!"
//     });

//     newBlog.save()
//         .then((newBlog) => {
//             response.send(newBlog)
//         })
//         .catch((error) => {
//             console.log('The error saving the blog is -> ', error)
//         })
// })

// app.get('/all-blogs', (request, response) => {
//     BlogModel.find()
//         .then((blogs) => {
//             response.send(blogs)
//         })
//         .catch((error) => {
//             console.log('The error getting all the blogs is -> ', error)
//         })
// })

// app.get('/get-blog', (request, response) => {
//     BlogModel.findById('6446e9c565299c69bba94b4d')
//         .then((blog) => {
//             response.send(blog)
//         })
//         .catch((error) => {
//             console.log('The error getting a fix blog is -> ', error)
//         })
// })

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

app.get('/about', (request, response) => {
    // response.sendFile('/views/about.html', { root: __dirname })
    response.render('about', { title: 'About'})
})

app.get('/blogs', (request, response) => {
    BlogModel.find().sort({ createdAt: -1 })
        .then((blogs) => {
            response.render('index', { title: 'All Blogs', blogs })
        })
        .catch((error) => {
            response.send('The error getting all the blogs is ->', error)
        })
})

app.get('/blogs/create', (request, response) => {
    response.render('create', { title: 'Create a New Blog'})
})

// 404 Page
app.use((request, response) => {
    // response.status(404).sendFile('/views/404.html', { root: __dirname })
    response.status(404).render('404', { title: '404'})
})