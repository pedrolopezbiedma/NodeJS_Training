const express = require('express');

// Creating the Express App
const app = express();

// Running the app
app.listen(3000, () => {
    console.log('Listening for requests in http://localhost:3000/');
})

// Listening for Requests
app.get('/', (request, response) => {
    response.send('<p>Head file</p>')
})