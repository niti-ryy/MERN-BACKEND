const express=require("express")
const app=express()
const port=3099

app.listen(port,()=>{
    console.log("port running successfully on port",port)
})