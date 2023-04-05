const express = require('express');

// Creating the Express App
const app = express();

// Running the app
app.listen(3000, () => {
    console.log('Listening for requests in http://localhost:3000/');
})

// Listening for Requests
app.get('/', (request, response) => {
    // response.send('<p>Home page</p>')
    response.sendFile('/views/index.html', { root: __dirname })
})

app.get('/about', (request, response) => {
    response.sendFile('/views/about.html', { root: __dirname })
})

// Redirects
app.get('/about-me', (request, response) => {
    response.redirect('/about');
})

// 404 Page
app.use((request, response) => {
    response.status(404).sendFile('/views/404.html', { root: __dirname })
})