// Core Imports
const http = require('http');
const fs = require('fs');

// Library exports
const _ = require('lodash');

const server = http.createServer((request, response) => {

    // Lodash
    const num = _.random(0, 20);
    console.log(num)

    console.log(request.url, request.method)

    // Set Headers Content Type
    response.setHeader('Content-Type', 'text/html')

    // Sending Simple HTML File
    // fs.readFile('./views/index.html', (error, data) => {
    //     if (error) {
    //         console.log('An error ocurred');
    //     } else {
    //         response.write(data);
    //     }
    //     response.end();
    // })

    // Basic Routing Example
    let path = './views/';
    switch (request.url) {
        case '/':
            path = path + 'index.html';
            response.statusCode = 200;
            break;
        case '/about':
            path = path + 'about.html';
            response.statusCode = 200;
            break;
        case '/about-me':
            response.setHeader('Location', '/about');
            response.statusCode = 301;
            break;
        default:
            path = path + '404.html';
            response.statusCode = 404;
            break;
    }

    fs.readFile(path, (error, data) => {
        if (error) {
            console.log('An error ocurred!');
            response.end();
        } else {
            response.write(data);
            response.end();
        }
    })
});

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests in http://localhost:3000/');
});