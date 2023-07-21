//Dependencies
const express = require('express')
const BlogController = require('../controllers/blogController')

// Router
const router = express.Router()

router.get('/', BlogController.all_blogs)
router.post('/', BlogController.blog_create_post)

router.get('/create', BlogController.blog_create_get)

router.get('/:id', BlogController.blog_details)
router.delete('/:id', BlogController.blog_delete)

module.exports = router