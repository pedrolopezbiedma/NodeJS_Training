const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: { type: String, require: true },
    snippet: { type: String, require: true },
    body: { type: String, require: true },
}, { 
    timestamps: true
});

// Careful with the name inside the model method.
// It will lowercase + pluralize it and search for that in the database collections, so in this case, 'blogs'
const BlogModel = mongoose.model('Blog', blogSchema) 

module.exports = BlogModel;