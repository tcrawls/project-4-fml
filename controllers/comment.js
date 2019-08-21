const express = require('express')
const commentApi = require('../models/comment.js')
const commentRouter = express.Router()

// COMMENT REQUEST HANDLERS:

commentRouter.get('/byPostId/:postId', (req, res) => {
  commentApi.getCommentsByPostId(req.params.postId)
    .then((comments) => {
      res.json(comments)
    })
})

commentRouter.get('/:commentId', (req, res) => {
    commentApi.getSingleComment(req.params.commentId)
    .then((comment) => {
      res.json(comment)
    })
})

commentRouter.post('/', (req, res) => {
    commentApi.addNewComment(req.body)
        .then((comment) => {
            res.json(comment)
    })
})

commentRouter.put('/:commentId', (req, res) => {
    commentApi.updateComment(req.params.commentId, req.body)
        .then((comment) => {
            res.json(comment)
        })
})

commentRouter.delete('/:commentId', (req, res) => {
    commentApi.deleteComment(req.params.commentId)
        .then((comment) => {
            res.json(comment)
        })
})

module.exports = {
    commentRouter
}