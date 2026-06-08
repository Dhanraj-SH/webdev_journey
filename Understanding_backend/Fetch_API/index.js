const express = require("express");

const app = express();

app.use(express.json);

app.get("/", function(req, res){
    res.sendFile("C:/Users/dhanr/OneDrive/Documents/Development/Understanding_backend/Fetch_API/index.html");
});

app.get("/sum/:a/:b", function (req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const sum = a + b;

    res.json({
        ans: sum
    })

});

// post method and body parameter
// app.post("/sum", function (req, res){
//     const a = parseInt(req.body.a);
//     const b = parseInt(req.body.b);

//     const sum = a + b;

//     res.json({
//         ans: sum
//     })
// });

app.get("/sub/:a/:b", function(req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const sub = a - b;

    res.json({
        ans: sub
    })

});

app.get("/mul/:a/:b", function(req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const mul = a * b;

    res.json({
        ans: mul
    })
    
});

app.get("/div/:a/:b", function(req, res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    const div = a / b;

    res.json({
        ans: div
    })
    
});

app.listen(3000);