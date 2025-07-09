import express from "express"
const app= express()
import cors from "cors"
# this is code testing

app.use(cors("http://localhost:5173"))
app.get("/",(req,res)=>{
    res.send("Welcome to my website 1122")

});

app.get("/data",(req,res)=>{
    res.json({
        products:["Devanshu","agarwal","Kapil","tanwar"],
       
      
    });
});

const port = 8000
app.listen(port,()=>console.log("Server is running on port 8000"));
