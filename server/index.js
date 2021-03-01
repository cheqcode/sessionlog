const express=require("express")
const mysql=require("mysql")
const cors=require("cors")
 
const app=express()
app.use(express.json());
app.use(cors())

const db=mysql.createConnection({
    user:"kepha",
    host:"localhost",
    password:"Password123@#",
    database:"okoth"
})

app.post("/register",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    db.query('INSERT INTO register (username, password) VALUES (?,?)',[username,password],(err, result)=>{
        console.log(err)
    })

})

app.post("/login",(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    db.query('SELECT * FROM register WHERE username = ? AND password = ? ',[username,password],
    (err, result)=>{
        if(err){
        res.send({err:err})
        }

            if(result.length > 0){
                res.send(result)
            }else{
                res.send({message:"No user found"})
            }
        
    })

})



app.listen(4000,()=>{
    console.log("server running on port 4000")
})