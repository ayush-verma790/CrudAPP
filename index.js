const express=require("express");
const app=express();

require("dotenv").config();

const PORT=process.env.PORT  || 4000; 

app.use(express.json());

//import routes 
 const createRoute=require("./routes/empRoutes");
 app.use("/api/v1",createRoute);

 app.listen(PORT,()=>{
    console.log(`server started ${PORT}`);
 })

 const dbconnect=require("./config/database");
 dbconnect();
 app.get("/",(req,res)=>{
    res.send(`<h1> This is Homage</h1>`)
 })
