import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import {routes} from "./routes/demoRoute";

export class App{
    app = express();
    ports:any;

    constructor(){
        this.initialise();
    }

    private initialise(){
        mongoose.connect('mongodb://localhost:27017/apii',{useNewUrlParser:true})
        .then(()=>console.log('connected to db')).catch((err)=>console.log(err))

        this.app.use(bodyParser.json());

         this.app.use('/user',routes);

        this.ports = process.env.PORT || 3000;
    }
    listen(){
        this.app.listen(this.ports,()=>console.log('server run at port '+this.ports));
    }
}