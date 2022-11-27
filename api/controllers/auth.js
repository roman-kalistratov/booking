import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const userName = await User.find({ firstname: req.body.firstname });
        const userEmail = await User.find({ email: req.body.email });
       
        if (userName.length > 0) {
            res.status(500).send("A user with the same name already exists.");
            console.log(userName)
        }

        else if (userEmail.length > 0) {
            res.status(500).send("A user with the same email already exists.")
        }

        else {
            const newUser = new User({
                firstname: req.body.firstname,
                lastname: req.body.lastname,
                email: req.body.email,
                password: hash,
                phone: req.body.phone,
                country: req.body.country,
                city: req.body.city,
            })

            await newUser.save();
            res.status(200).send("User has been created.")
        }
    } catch (err) {
        next(err)
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ firstname: req.body.firstname })
        if (!user) return next(createError(404, "user not found!"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if (!isPasswordCorrect) return next(createError(400, "Wrong password or username!"));

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT);

        const { password, isAdmin, ...otherDetails } = user._doc;

        res
            .cookie("access_token", token, {
                httpOnly: true,
            })
            .status(200)
            .json({ ...otherDetails });
    } catch (err) {
        next(err)
    }
}

export const logout = async (req, res, next) => {
    try {
        res
            .clearCookie("access_token")
            .status(200)
            .json({ ...otherDetails });

    } catch (err) {
        next(err)
    }
}