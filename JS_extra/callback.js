const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err, data){
    const trimmedContents = data.trim();
    fs.writeFile("a.txt", trimmedContents, function(){
        console.log("done");
    });
});