const express = require('express')
const postApi = require('../models/post.js')
const postRouter = express.Router()

// POST REQUEST HANDLERS:

postRouter.get('/byCategoryId/:categoryId', (req, res) => {
    postApi.getPostsByCategoryId(req.params.categoryId)
        .then((posts) => {
            res.json(posts)
        })
})

postRouter.get('/', (req, res) => {
    postApi.getAllPosts()
        .then((posts) => {
            res.json(posts)
        })
})

postRouter.get('/:postId', (req, res) => {
    postApi.getSinglePost(req.params.postId)
        .then((post) => {
            res.json(post)
        })
})

postRouter.post('/', (req, res) => {
    postApi.addNewPost(req.body)
        .then((post) => {
            res.json(post)
        })
})

postRouter.put('/:postId', (req, res) => {
    postApi.updatePost(req.params.postId, req.body)
        .then((post) => {
            res.json(post)
        })
})

postRouter.delete('/:postId', (req, res) => {
    postApi.deletePost(req.params.postId)
        .then((post) => {
            res.json(post)
        })
})


module.exports = {
    postRouter
}