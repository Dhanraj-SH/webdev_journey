const fs = require("fs");

function fsReadFilePromise(filepath, encoding){
    return new Promise((resolve, reject) => {
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

async function main(){
    try{
        const result = await fsReadFilePromise("a.txt", "utf-8");
        console.log(result);
    } catch(err){
        console.log("Error while reading the file");
        console.log(err);
    }
}

main();