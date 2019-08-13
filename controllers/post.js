const express = require('express')
const postApi = require('../models/post.js')
const postRouter = express.Router()


// POST REQUEST HANDLERS:


// postRouter.get('/:categoryId', (req, res) => {
//   postApi.getPostsByCategoryId(req.params.categoryId)
//     .then((posts) => {
//       res.json(posts)
//     })
// })

postRouter.get('/post/:postId', (req, res) => {
    postApi.getSinglePost(req.params.postId)
    .then((post) => {
      res.json(post)
    })
})



module.exports = {
  postRouter
}