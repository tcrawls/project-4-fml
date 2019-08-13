const express = require('express')
const categoryApi = require('../models/category.js')
const categoryRouter = express.Router()


// CATEGORY REQUEST HANDLERS:

categoryRouter.get('/', (req, res) => {
  categoryApi.getAllCategories()
    .then((categories) => {
      res.json(categories)
    })
})

module.exports = {
    categoryRouter
  }