import { Router } from "express";
import db from "../db.js";
import { isValidPassword } from "../utils.js";
import bcryptjs from "bcryptjs";

const {compare,genSalt,hash } = bcryptjs;

const router = Router();

router.post("/signup",async (req,res) => {
    console.log(req.body);
    const { username , password } = req.body;

    // validation username and password
    if(!isValidPassword) {
        res.status(400).json({
            error: "Password must be more than 8 characters long and contain a capital letter",
        });
        return ;
    }

    // check if username already exists or not
    const hasUsername = !!(await db.collection('user').findOne({
        username,
    }));

    if(hasUsername) {
        res.status(401).json({
            error: "Username already exists",
        });
        return ;
    }


    // hashing password
    const salt = await genSalt(16);
    const hashPassword = await hash(password,salt);

    // saving to database
    db.collection("user").insertOne({
        username,
        password: hashPassword,
    });

    res.status(204).json({});

}).post("/login",async (req,res) => {
    const { username, password } = req.body;

     // validation username and password
     if(!isValidPassword) {
        res.status(400).json({
            error: "Password must be more than 8 characters long and contain a capital letter",
        });
        return ;
    }

    const getUser = await db.collection('user').findOne({
        username,
    });
    if(!getUser) {
        res.json({
            error: "User doesn't exists",
        });
        return ;
    }

    // comparing passwords
    const doesPasswordMatch = await compare(password,getUser.password);
    if(!doesPasswordMatch) {
        res.json({
            error: "Wrong password credentials provided"
        });
        return ;
    }
    const copyOfUser = structuredClone(getUser);
    delete copyOfUser.password;

    res.json({
        data: copyOfUser,
    });
});

export default router;