const express = require('express')
const router = express.Router()
const {Signup,Login,Getusers} =require('../Controller/Auth')
const verifyToken = require('../verifytoken')
const jwt = require('jsonwebtoken')



router.post('/signup',Signup)
router.post('/login',Login)
router.get('/get',Getusers)






module.exports=router