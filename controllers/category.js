const express = require('express')
const categoryApi = require('../models/category.js')
const postApi = require('../models/post.js')
const categoryRouter = express.Router()

// CATEGORY/ALBUM REQUEST HANDLERS:

categoryRouter.get('/', (req, res) => {
    categoryApi.getAllCategories()
        .then((categories) => {
            res.json(categories)
        })
})

categoryRouter.get('/:categoryId', (req, res) => {
    categoryApi.getCategory(req.params.categoryId)
        .then((category) => {
            res.json(category)
        })
})

categoryRouter.post('/', (req, res) => {
    categoryApi.addNewCategory(req.body)
        .then((category) => {
            res.json(category)
        })
})

categoryRouter.delete('/:categoryId', (req, res) => {
    categoryApi.deleteCategory(req.params.categoryId)
        .then((category) => {
            res.json(category)
        })
})

categoryRouter.put('/:categoryId', (req, res) => {
    categoryApi.updateCategory(req.params.categoryId, req.body)
        .then((category) => {
            res.json(category)
        })
})

module.exports = {
    categoryRouter
}