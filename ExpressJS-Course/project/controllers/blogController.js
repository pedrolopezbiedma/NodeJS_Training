// Dependencies
const BlogModel = require('../models/blog');

const all_blogs = (request, response) => {
    BlogModel.find().sort({ createdAt: -1 })
        .then((blogs) => {
            response.render('./blogs/index', { title: 'All Blogs', blogs })
        })
        .catch((error) => {
            response.send('The error getting all the blogs is ->', error)
        })
}

const blog_details = (request, response) => {
    const blogId = request.params.id
    BlogModel.findById(blogId)
        .then((blog) => {
            response.render('./blogs/details', { title: 'Blog details', blog })
        })
        .catch((error) => {
            response.send('The error getting one blog by id was -> ', error);
        })
}

const blog_create_get = (request, response) => {
    response.render('./blogs/create', { title: 'Create a New Blog'})
}

const blog_create_post = (request, response) => {
    const newBlog = new BlogModel(request.body).save()
        .then((result) => {
            response.redirect('/blogs')
        })
        .catch((error) => {
            response.send('The error saving the new blog was -> ', error);
        })
}

const blog_delete = (request, response) => {
    const blogId = request.params.id
    BlogModel.findByIdAndDelete(blogId)
        .then((result) => {
            response.json({ redirect: '/blogs' })
        })
        .catch((error) => {
            response.send('The error deleting one blog was -> ', error);
        })
}

module.exports = {
    all_blogs,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
}