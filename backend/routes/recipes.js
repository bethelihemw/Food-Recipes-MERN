const express = require('express');
const { getRecipes, getRecipe, addRecipe, editRecipe,deleteRecipe } = require('../controller/Recipe');
const routers = express.Router()

routers.get('/',getRecipes); //get recipe all
routers.get('/:id',getRecipe); //get recipe by id 
routers.post('/',addRecipe); //add recipe a
routers.put('/:id',editRecipe); //edit recipe by id 
routers.delete('/:id',deleteRecipe); //delete recipe all

module.exports = routers