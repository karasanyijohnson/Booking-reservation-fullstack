import jwt from 'jsonwebtoken';
import { createError } from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_Token;
    if (!token) {
        return next(createError(401, "You are not authenticated!"))
    }
    jwt.verify(token, process.env.JWT, (err, user) => {
        if (err) return next(createError(403, "Token is not valid!"))
        req.user=user;
        next()
    })
}

export const verifyUser =(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        // it means only user and admin can delete this account
        if(req.user.id===req.params.id ||req.user.isAdmin){
            next()
        } else{
            return next(createError(403, "You are not authorized!"))
        }
    })
}

export const verifyAdmin =(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        // only request user is Admin
        if(req.user.isAdmin){
            next()
        } else{
            return next(createError(403, "You are not authorized!"))
        }
    })
}