require("dotenv").config();
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {Pool} = require("pg");
const z = require("zod");

const pool = new Pool({
    connectionString: process.env.DB_URL
});

const app = express();
app.use(express.json());

const {signupSchema, signinSchema} = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
    email : z.email()
});

app.post("/signup", async (req, res)=>{
   
    const {data, success, error} = signupSchema.safeParse(req.body);

    if(!success){
        return res.status(409).json({
            message: "Incorrect Inputs",
            error: JSON.parse(error)
        });
    }

    // const username = req.body.username;
    // const email = req.body.email;
    // const password = await bcrypt.hash((req.body.password), 10);

    const {username, email, password} = data;

    const userExists = await pool.query(
        `SELECT * FROM users WHERE username = $1 OR email = $2`,
        [username, email]
    );

    if (userExists.rows.length > 0) {
        return res.status(409).json({
            message: "Username or email already exists"
        });
    }

    const hashPassword = await bcrypt.hash((password, 10));

    const response = await pool.query(`INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING id;`, [username, hashPassword, email]);

    res.json({
        message: "Signup done",
        id: response.rows[0].id
    });
});


app.post("/signin", async (req, res)=>{
    // const username = req.body.username;
    // const email = req.body.email;
    // const password = req.body.password;

    const {data, success, error} = signinSchema.safeParse(req.body);

    if(!success){
        return res.status(403).json({
            message: "Incorrect Inputs",
            error: JSON.parse(error)
        });
    }

    const {username, email, password} = data;

    const response = await pool.query(`SELECT * FROM users WHERE username = $1 OR email = $2`, [username, email]);

    const userExists = response.rows[0];

    if (!userExists) {
        return res.status(403).json({
            message: "You have not signed up or incorrect credentials"
        });
    }else{
        const checkPassword = await bcrypt.compare(password, userExists.password);

        if(!checkPassword){
            return res.status(403).json({
                message: "Incorrect credentails"
            });
        }else{

            const token = jwt.sign({
                id: userExists.id,
                username: userExists.username
            },process.env.JWT_SECRET);

            return res.json({
                token: token
            });
        }
    }
});

app.listen(3000);