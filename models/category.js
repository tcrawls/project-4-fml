const mongoose = require('./connection.js')

const CategorySchema = new mongoose.Schema({
  name: String,
  previewImage: String
})

const CategoryCollection = mongoose.model('Category', CategorySchema)

// CATEGORY/ALBUM MODEL FUNCTIONS:

function getAllCategories() {
  return CategoryCollection.find()
}

function getCategory(categoryId) {
  return CategoryCollection.findById(categoryId)
}

function addNewCategory(categoryObject) {
  return CategoryCollection.create(categoryObject)
}

function deleteCategory(categoryId) {
  return CategoryCollection.findByIdAndDelete(categoryId)
}

module.exports = {
  getAllCategories,
  getCategory,
  addNewCategory,
  deleteCategory
}