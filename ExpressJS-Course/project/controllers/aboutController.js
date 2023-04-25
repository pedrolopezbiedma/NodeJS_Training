const about_index = (request, response) => {
    // response.sendFile('/views/about.html', { root: __dirname })
    response.render('about', { title: 'About'})
}

module.exports = {
    about_index
}