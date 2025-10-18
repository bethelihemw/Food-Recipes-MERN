const express = require('express');
const { getUser, userSignUp, userLogin} = require('../controller/user');
const routers = express.Router()


routers.post('/signUp', userSignUp)
routers.post('/login', userLogin)
routers.get('/user/:id', getUser)

module.exports =routers