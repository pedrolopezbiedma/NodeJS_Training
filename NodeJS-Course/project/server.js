// Core Imports
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    console.log('Request received!');
    console.log(request.url, request.method)

    // Set Headers Content Type
    response.setHeader('Content-Type', 'text/html')

    // Sending HTML File
    fs.readFile('./views/index.html', (error, data) => {
        if (error) {
            console.log('An error ocurred');
        } else {
            response.write(data);
        }
        response.end();
    })
});

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests in http://localhost:3000/');
});