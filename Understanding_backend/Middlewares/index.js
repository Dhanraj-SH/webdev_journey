const express = require("express");
const app = express();

app.use(express.json());

app.use((req, res, next)=>{
    console.log("Request recived");
    next();
});

app.get("/", function(req, res){
    res.sendFile("C:/Users/dhanr/OneDrive/Documents/Development/Understanding_backend/Middlewares/index.html");
})

app.post("/add", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const ans = a + b;

    res.json({
        ans: ans
    });
});

app.post("/sub", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const ans = a - b;

    res.json({
        ans: ans
    });
});

app.post("/mul", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const ans = a * b;

    res.json({
        ans: ans
    });
});

app.post("/div", function(req, res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    const ans = a / b;

    res.json({
        ans: ans
    });
});

app.listen(3000);