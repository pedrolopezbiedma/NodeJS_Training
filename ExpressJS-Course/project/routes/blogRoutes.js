//Dependencies
const express = require('express');
const BlogModel = require('../models/blog');

// Router
const router = express.Router();

router.get('/', (request, response) => {
    BlogModel.find().sort({ createdAt: -1 })
        .then((blogs) => {
            response.render('index', { title: 'All Blogs', blogs })
        })
        .catch((error) => {
            response.send('The error getting all the blogs is ->', error)
        })
})

router.post('/', (request, response) => {
    const newBlog = new BlogModel(request.body).save()
        .then((result) => {
            response.redirect('/blogs')
        })
        .catch((error) => {
            response.send('The error saving the new blog was -> ', error);
        })
})

router.get('/create', (request, response) => {
    response.render('create', { title: 'Create a New Blog'})
})

router.get('/:id', (request, response) => {
    const blogId = request.params.id
    BlogModel.findById(blogId)
        .then((blog) => {
            response.render('details', { title: 'Blog details', blog })
        })
        .catch((error) => {
            response.send('The error getting one blog by id was -> ', error);
        })
})

router.delete('/:id', (request, response) => {
    const blogId = request.params.id
    BlogModel.findByIdAndDelete(blogId)
        .then((result) => {
            response.json({ redirect: '/blogs' })
        })
        .catch((error) => {
            response.send('The error deleting one blog was -> ', error);
        })

})

module.exports = router;