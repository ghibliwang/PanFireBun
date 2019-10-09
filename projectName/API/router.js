//register & login
const express = require('express')
const router = express.Router()
const user = require('./../models')

router.get('/test',async (req,res)=>{
    const test= await user.find()
    res.send(test)
})

router.post('/register',async (req,res)=>{
    const newuser = new user({
    
    password:req.body.password,
    name : req.body.name,
    
    })
    await newuser.save()
    res.send(newuser)
})

module.exports = router