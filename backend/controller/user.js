const User = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSignUp =async(req,res) =>{
    const {email, password} =req.body
    if(!email || !password){
        return res.status(400).json({message:"email and password are required"})
    }
    let user = await User.findOne({email})
    if (user){
        return res.status(400).json({error:"email already exist"})
    }
    const hashpwd = await bcrypt.hash(password, 10)
    const newUser = await User.create({
        email,password:hashpwd
    })
    let token = jwt.sign({
        email,id:newUser._id}, process.env.SECRET_KEY)
        return res.status(200).json({token, user:newUser})
}
const userLogin =async(req,res) =>{
    const {email, password} =req.body
    if(!email || !password){
        return res.status(400).json({message:"email and password are required"})
    }
    let user = await User.findOne({email})
    if(user && await bcrypt.compare(password,  user.password)){
        let token = jwt.sign({email,id: user._id}, process.env.SECRET_KEY)
        return res.status(200).json({token, user})
    }
    else{
       return res.status(400).json({error:"invalid credentials"})
    }
}
const getUser =async(req,res) =>{
    const user = await User.findById(req.params.id)
    return res.json({email:user.email})

    
}

module.exports ={getUser, userLogin, userSignUp}