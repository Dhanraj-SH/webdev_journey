const express = require("express");
const app = express();

app.use(express.json());

const notes = [];

app.get("/", (req, res) => {
    res.sendFile("C:/Users/dhanr/OneDrive/Documents/Development/Understanding_backend/Authentication/frontend/index.html");
});

app.get("/script.js", (req, res) => {
    res.sendFile("C:/Users/dhanr/OneDrive/Documents/Development/Understanding_backend/Authentication/frontend/script.js");
});

app.post("/notes", (req, res)=>{
    const note = req.body.note;
    notes.push(note);

    res.json({
        message:"Done!!!"
    })

});

app.get("/notes", (req, res)=>{
    res.json({
        notes
    })
})

app.listen(3000);