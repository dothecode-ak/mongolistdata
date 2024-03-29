const express=require('express');
const mongoose=require('mongoose');
require('dotenv').config()
var app=express();
const port=process.env.PORT;

var Data=require('./model');

//db
const db ='mongodb+srv://'+`${process.env.db_user}`+':'+encodeURIComponent(`${process.env.db_pass}`)+'@alivenowdb.5klxw.mongodb.net/heroku_vnts03fq?retryWrites=true';
mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>
{
    console.log("connected");
}).catch(()=>console.log("not connected"));

//route

app.get('/data',(req,res)=>
{
    Data.find().then((data)=>
    {
        res.json(data)
    })
})
app.listen(port,()=>
{
    console.log("Server is running");
});