const axios = require("axios");

// function main(){
//     fetch("https://www.postb.in/1780999116705-6011397351976")
//     .then(async response =>{
//         const data = await response.text();
//         console.log(data);
//     });
// }

// async function main(){
//     const response = await fetch("https://www.postb.in/1780999116705-6011397351976");
//     const data = await response.text();
//     console.log(data);
// }

// async function main(){
//     const response = await axios.get("https://www.postb.in/1780999116705-6011397351976");
//     console.log(response.data);
// }


//post request

// async function main(){
//     const response = await axios.post("https://httpdump.app/dumps/5c03bc03-b0f8-4c2a-9129-f97cc0f1bf41",{
//         "username": "saku",
//         "password": 112334
//     }, 
//     {
//         headers: {
//             "Authorization": "Bearer 123",
//         },
//     },);
    
//     console.log(response.data);
// }


//get request

// async function main(){
//     const response = await axios.get("https://httpdump.app/dumps/5c03bc03-b0f8-4c2a-9129-f97cc0f1bf41",
//         {
//             headers: {
//                 "Authorization": "Bearer 123",
//             },
//         },
//     );
//     console.log(response.data);
// }

async function main(){
    const response = await axios({
        url: "https://httpdump.app/dumps/5c03bc03-b0f8-4c2a-9129-f97cc0f1bf41",
        method: "POST",
        headers: {
            Authorization: "Bearer 123",
        },
        data: {
            "username": "saku",
            "password": 101007, 
        },
    });
}

main();