const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.sendFile("C:/Users/dhanr/OneDrive/Documents/Development/Understanding_backend/Fetch_API/index.html");
});

app.get("/sum", function (req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = a + b;

    res.json({
        ans: sum
    })

});

app.get("/sub", function(req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const sub = a - b;

    res.json({
        ans: sub
    })

});

app.get("/mul", function(req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const mul = a * b;

    res.json({
        ans: sub
    })
    
});

app.get("/div", function(req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const div = a / b;

    res.json({
        ans: sub
    })
    
});

app.listen(3000);