import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

let app= express();
const PORT=4000;

//mongoose connection
mongoose.Promise= global.Promise;
mongoose.connect("mongodb://localhost:27017/CRMdb",{
    useNewUrlParser: true,
    useUnifiedTopology:true
});

//bodyparser setup
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

routes(app);

app.get('/',(req,res)=>{
    res.send("in home directory");
});

app.listen(PORT,()=>{
    console.log(`Node CRM API running on port ${PORT}...`);
});