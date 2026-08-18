const express = require("express");

const app = express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("I am root api");
});
app.post("/create",(req,res)=>{

    console.log(req.body);
})

app.listen(3000,()=>{
    console.log("Express server is running on port no. 3000...");
});