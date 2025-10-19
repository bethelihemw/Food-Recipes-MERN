// const { get } = require("../routes/Recipe")
const Recipes = require("../models/recipeSchema")
const multer  = require('multer')

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, '../public/images')
//   },
//   filename: function (req, file, cb) {
//     const filename = Date.now() + '-' + file.filename
//     cb(null, filename )
//   }
// })

// const upload = multer({storage: storage})

const path = require('path');
const fs = require('fs');

// Ensure the images directory exists
const imagesPath = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesPath)) {
  fs.mkdirSync(imagesPath, { recursive: true });
}


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,  '../public/images');
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + '-' + file.originalname; // ✅ fixed here
    cb(null, filename);
  },
});

const upload = multer({ storage });

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
        res.json({message:"Required cant be empty"} )
    }

    const newRecipe = await Recipes.create({
        title,ingredients,instructions,time, coverImage:req.file.filename
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

module.exports = { getRecipe ,getRecipes, editRecipe, deleteRecipe ,addRecipe,upload}