const express = require('express');
const expressAsyncHandler = require("express-async-handler");
const User = require("../models/User.js");
const generateToken = require('../utils.js');
// const User = require('../models/User.js')

const userRouter = express.Router();

userRouter.post('/login', expressAsyncHandler(async (req, res) =>{
    const signinUser = await User.findOne({
        email: req.body.email,
        password: req.body.password,
    })
    if(!signinUser){
        res.status(401).send({
            message: "Invalid email or password ",
        });
    }else{
        res.send({
            _id: signinUser._id,
            name: signinUser.name,
            email: signinUser.email,
            token: generateToken(signinUser),
        })
    }
})
);
userRouter.post('/reqister',expressAsyncHandler(async (req, res) => {
    const user = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        });
        const createdUser = await user.save();
        if (!createdUser){
            res.status(401).send({
                message: 'Invalid User Data',
            });
        }else{
            res.send({
                _id: createdUser._id,
                email: createdUser.email,
                username: createdUser.username,
                token: generateToken(createdUser),
            });
        }
    }),

);
