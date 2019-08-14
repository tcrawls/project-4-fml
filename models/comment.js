const mongoose = require('./connection.js')

const CommentSchema = new mongoose.Schema({
    createdBy: String,
    dateCreated: Date,
    description: String,
    postId: mongoose.Types.ObjectId
})

const CommentCollection = mongoose.model('Comment', CommentSchema)

// COMMENT MODEL FUNCTIONS:

function getAllComments() {
    return CommentCollection.find()
}

function getCommentsByPostId(postId) {
    return CommentCollection.find({ postId: postId })
}

function getSingleComment(commentId) {
    return CommentCollection.findById(commentId)
}

function addNewComment(commentObject) {
    return CommentCollection.create(commentObject)
}

function updateComment(commentId, updatedComment) {
    return CommentCollection.findByIdAndUpdate(commentId, updatedComment, { new: true })
}

function deleteComment(commentId) {
    return CommentCollection.findByIdAndDelete(commentId)
}

module.exports = {
    getAllComments,
    getCommentsByPostId,
    getSingleComment,
    addNewComment,
    updateComment,
    deleteComment
}