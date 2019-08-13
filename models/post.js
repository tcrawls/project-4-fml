const mongoose = require('./connection.js')

const PostSchema = new mongoose.Schema({
    createdBy: String,
    dateCreated: Date,
    image: String,
    caption: String,
    categoryId: mongoose.Types.ObjectId
})

const PostCollection = mongoose.model('Post', PostSchema)

// CATEGORY MODEL FUNCTIONS:

function getAllPosts() {
    return PostCollection.find()
}

function getPostsByCategoryId(categoryId) {
    return PostCollection.find({ categoryId: categoryId })
}

function getSinglePost(postId) {
    return PostCollection.findById(postId)
}

function addNewPost(postObject) {
    return PostCollection.create(postObject)
}

function updatePost(postId, updatedPost) {
    return PostCollection.findByIdAndUpdate(postId, updatedPost, { new: true })
  }

function deletePost(postId) {
    return PostCollection.findByIdAndDelete(postId)
}

module.exports = {
    getAllCategories,
    getCategory,
    addNewCategory,
    deleteCategory
}