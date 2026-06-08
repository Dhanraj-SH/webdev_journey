// create a http server that supports 4 routes (/sum, /sub, /div, /mul)
// express, hono, elysiajs, trpc

const express = require("express");

const app = express();

// Query parameter
app.get("/sum", function (req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = a + b;

    /*
    json response

    res.json({
        ans: sum
    })

    plaintext response
    
    res.send(sum.toString());
    */

    res.json({
        ans: sum
    })

});

//path parameter
/*
app.get("/sum/:a/:b", (req, res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    const sum = a + b;

    //json response

    res.json({
        ans: sum
    })

    //plaintext response
    
    res.send(sum.toString());

    res.json({
        ans: sum
    })

});
*/

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