import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

let app= express();
const PORT=4000;

app.get('/',(req,res)=>{
    res.send("in home directory");
});

app.listen(PORT,()=>{
    console.log(`Node CRM API running on port ${PORT}...`);
});