// const { get } = require("../routes/Recipe")
const Recipes = require("../models/recipeSchema")


const getRecipe = async(req , res) => {
    const recipe = await Recipes.findById(req.params.id)
    res.json(recipe)
}

const getRecipes =async(req , res) => {
    const recip = await Recipes.find()
    return res.json(recip)
}

const addRecipe = async(req , res) => {
    const {title, ingredients, instructions, time} = req.body

    if(!title || !ingredients || !instructions){
        res.json({message:"Required cant be empty"})
    }

    const newRecipe = await Recipes.create({
        title,ingredients,instructions,time
    })
    return res.json(newRecipe)
    // res.json({message: "hello"})
}

const editRecipe = async(req , res) => {
    const {title, ingredients, instructions, time} = req.body
    let recipe = await Recipes.findById(req.params.id)
    try{
        if(recipe){
            await Recipes.findByIdAndUpdate(req.params.id, req.body,{new:true})
            res.json({title, ingredients, instructions, time})
        }
    }catch(err){
        return res.status(404).json({message: "error in fetching the item..."})
    }
}
const deleteRecipe = (req , res) => {
    res.json({message: "hello"})
}

module.exports = { getRecipe ,getRecipes, editRecipe, deleteRecipe ,addRecipe}