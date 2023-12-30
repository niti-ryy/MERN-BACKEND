const express=require("express")
const app=express()
const port=3099


app.get("/api/projects",(req,res)=>{
    res.json("projects")
})

app.get("/api/projects/total",(req,res)=>{
    res.json({total:5})
})


app.get("/api/users",(req,res)=>{  //create by gravit
    res.send("creating users branchh")
})

app.post("/auth",(req,res)=>{
    res.send("auth")
})

app.post("/api/v1/create",(req,res)=>{
    res.send("users")
})

app.listen(port,()=>{
    console.log("port running successfully on port",port)
})

app.post("/api/new",(req,res)=>{
    res.send("josn")
})