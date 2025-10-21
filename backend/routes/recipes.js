const express = require('express');
const { getRecipes, getRecipe, addRecipe, editRecipe,deleteRecipe ,upload } = require('../controller/recipe' );
const routers = express.Router()
const verifyToken = require('../middleware/auth'); 


routers.get('/',getRecipes); //get recipe all
routers.get('/:id',getRecipe); //get recipe by id 
routers.post('/', upload.single('file') , verifyToken, addRecipe); //add recipe a
routers.put('/:id', upload.single('file') ,editRecipe); //edit recipe by id 
routers.delete('/:id',deleteRecipe); //delete recipe all

module.exports = routers