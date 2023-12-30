const express=require("express")
const app=express()
const port=3099


app.get("/api/projects",(req,res)=>{
    res.json("projects")
})

app.get("/api/projects/total",(req,res)=>{
    res.json({total:5})
})

app.get("/api/users",(req,res)=>{  //create by gravita
    res.send("creating users branch")
})

app.listen(port,()=>{
    console.log("port running successfully on port",port)
})