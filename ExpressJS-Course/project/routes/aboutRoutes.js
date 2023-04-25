// Dependencies
const express = require('express');

// Router
const router = express.Router();

router.get('/', (request, response) => {
    // response.sendFile('/views/about.html', { root: __dirname })
    response.render('about', { title: 'About'})
})

module.exports = router;