import User from '../models/user.js';

export const register = async (req, res, next) => {
    try {
        const newUser = new User({
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        })
        await newUser.save()
        // Stopped at 00:48:46

    } catch (err) {
        next(err)
    }
}