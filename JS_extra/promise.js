const fs = require("fs");

function fsReadFilePromise(filepath, encoding){
    return new Promise((resolve, reject)=>{
        fs.readFile(filepath, encoding, (err, data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        });
    });
}

fsReadFilePromise("a.txt", "utf-8")
    .then((data)=>{
        console.log(data);
    })
    .catch((e)=>{
        console.log("Error while reading the file")
    });


function setTimeoutPromisified(delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        }, delay);
    });
}

setTimeoutPromisified(5000)
    .then(() => {
        console.log("5 seconds passed")
    });