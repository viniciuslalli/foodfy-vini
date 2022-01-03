const express = require('express')
const routes = express.Router()
const recipes = require('./controllers/recipes')

routes.get('/', recipes.index)
routes.get('/about', recipes.about)
routes.get('/recipes', recipes.recipes)
routes.get('/recipes/:index', recipes.recipeIndex)

module.exports = routes
