const express = require('express');

// Creating the Express App
const app = express();

// Register the view engine
app.set('view engine', 'ejs');

// Running the app
app.listen(3000, () => {
    console.log('Listening for requests in http://localhost:3000/');
})

// Listening for Requests
app.get('/', (request, response) => {
    // response.send('<p>Home page</p>')
    // response.sendFile('/views/index.html', { root: __dirname })
    response.render('index')
})

app.get('/about', (request, response) => {
    // response.sendFile('/views/about.html', { root: __dirname })
    response.render('about')
})

app.get('/blogs/create', (request, response) => {
    response.render('create')
})

// 404 Page
app.use((request, response) => {
    // response.status(404).sendFile('/views/404.html', { root: __dirname })
    response.status(404).render('404')
})