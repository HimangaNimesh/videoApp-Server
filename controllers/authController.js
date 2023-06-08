import mongoose from "mongoose"
import User from "../models/UserModel.js"
import bcrypt from "bcryptjs"
import { createError } from "../error.js"

export const signup = async(req,res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const newUser = new User({...req.body, password: hash})

        await newUser.save()
        res.status(200).send("User has been created successfully")
    } catch (error) {
        next(error)
    }
}

export const signin = async(req,res, next) => {
    try {
        const user = await User.findOne({name: req.body.name})
        if(!user)return next(createError(404, "User not found!"))
    } catch (error) {
        next(error)
    }
}