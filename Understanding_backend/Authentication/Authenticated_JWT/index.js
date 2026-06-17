const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const notes = [];
const users = [];

app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const userExists = users.find(user => user.username === username);

    if(userExists){
        return res.status(403).json({
            message: "User with the username already exists"
        });
    }

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "You have signed up"
    });
    
});

app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    const userExists = users.find(user => user.username === username && user.password === password);

    if(!userExists){
        res.status(403).json({
            message: "Incorrect Credentials"
        });
        return;
    }

    const token = jwt.sign({
        username: username
    }, "token");

    res.json({
        token: token
    });

});

app.get("/", (req, res) => {
    res.sendFile("C:/Users/dhanr/OneDrive/Documents/Development/Understanding_backend/Authentication/Authenticated_JWT/frontend/index.html");
});

app.get("/script.js", (req, res) => {
    res.sendFile("C:/Users/dhanr/OneDrive/Documents/Development/Understanding_backend/Authentication/Authenticated_JWT/frontend/script.js");
});

app.get("/signup", (req, res) => {
    res.sendFile("C:/Users/dhanr/OneDrive/Documents/Development/Understanding_backend/Authentication/Authenticated_JWT/frontend/signup.html");
});

app.get("/signin", (req, res) => {
    res.sendFile("C:/Users/dhanr/OneDrive/Documents/Development/Understanding_backend/Authentication/Authenticated_JWT/frontend/signin.html");
});

function getUsername(req, res) {
    const token = req.headers.token;

    if (!token) {
        res.status(403).json({
            message: "You are not logged in"
        });
        return;
    }

    const decoded = jwt.verify(token, "token");

    if (!decoded.username) {
        res.status(403).json({
            message: "malformed token"
        });
        return;
    }

    return decoded.username;
}

app.post("/notes", (req, res) => {

    const username = getUsername(req, res);
    if (!username) return;

    const note = req.body.note;

    notes.push({note, username});

    res.json({
        message: "Done!!!"
    });
});

app.get("/notes", (req, res) => {

    const username = getUsername(req, res);
    if (!username) return;

    const userNotes = notes.filter(
        note => note.username === username
    );

    res.json({
        notes: userNotes
    });
});

app.listen(3000);