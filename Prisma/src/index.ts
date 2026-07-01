import "dotenv/config";
import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import z from "zod";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { createEmitAndSemanticDiagnosticsBuilderProgram } from "typescript";

const app = express();

const adapter = new PrismaPg({connectionString: process.env.DATABASE_URL});
const client = new PrismaClient({adapter});

app.use(express.json());

const signupSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
    email: z.email()
});

const signinSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
    email: z.email()
});

app.post("/signup", async (req, res)=>{
    const {data, success, error} = signupSchema.safeParse(req.body);
    if(!success){
        return res.status(403).json({
            error: error.issues
        });
    }

    const {username, email, password} = data;

    const userExists = await client.user.findFirst({
        where:{
            username: username,
            email: email
        }
    });

    if(userExists){
        return res.status(403).json({
            message: "The username or email already exists"
        });
    }

    const newUser = await client.user.create({
        data:{
            username: username,
            email: email,
            password: await bcrypt.hash(password, 10)
        }
    });

    res.json({
        message: "New user created" + newUser.id
    });
});

app.post("signin", async (req, res) =>{
    const {data, success, error} = signinSchema.safeParse(req.body);
    if(!success){
        return res.status(403).json({
            error: error.issues
        });
    } 

    const {username, password, email} = data;

    const userExists = await client.user.findFirst({
        where:{
            username: username,
            email: email
        }
    });

    if(!userExists){
        return res.status(403).json({
            message: "Incorrect credentials"
        });
    }

    const checkPassword = await bcrypt.compare(password, userExists.password);
    
    if(!checkPassword){
        return res.status(403).json({
            message: "Incorect credentials"
        });
    }

    const token = jwt.sign({
        userId: userExists.id
    }, process.env.JWT_SECRET!);

    res.json({
        token: token
    });

});

app.get("/users", async (req, res)=>{
    const user = await client.user.findMany();
    res.json({
        users: user
    });
});

app.listen(3000);