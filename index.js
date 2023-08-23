//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path"; 
import { fileURLToPath } from "url";

const app= express();
const port=3000;
const __dirname = dirname(fileURLToPath(import.meta.url));


// app.user(morgan);

// get call
app.get("/",(req,res)=>{
    res.sendFile(__dirname+ "/public/index.html");
});

app.use(bodyParser.urlencoded({ extended: true }));

function secretText(req,res,next) {
    console.log(req.body);
    const pass= req.body["password"];
    if (pass== "ILoveProgramming"){
        res.sendFile(__dirname+"/public/secret.html");
    }
    else{
        res.sendFile(__dirname+"/public/index.html");
    }

};
app.use(secretText);




// listening port
app.listen(port ,(req,res)=>{
    console.log("Listening on port:"+ port);
});

