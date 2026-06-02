/*
Q: Write a function that

1. Reads the contents of a file
2. Trims the extra space from the left and right
3. Writes it back to the file
*/

const fs = require("fs");

function cleanFilePromise(filepath, encoding){
    return new Promise((resolve, reject) =>{
        fs.readFile(filepath, encoding, (err, data) =>{
            if(err){
                reject(err);
            } else{
                data = data.trim();
                fs.writeFile(filepath, data, ()=>{
                    resolve();
                });
            }
        });
    });
}

async function main(){
    try{
        await cleanFilePromise("a.txt", "utf-8");
        console.log("Done cleaning the file");
    } catch(e){
        console.log("Error while cleaning the file")
        console.log(e);
    }
}

main();