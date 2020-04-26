import {user} from "../models/user";
import {Request,Response} from "express";


const userController={
    showUser:(req:Request,res:Response)=>{
        user.find((err,userData)=>{
            if(err){
               res.json(err);
            }else{
              res.json({data:userData});
            }
         });
    },
    addUser:(req:Request,res:Response)=>{
        const userr = {
            name:req.body.name,
            address:req.body.address
         };
             const usr = new user(userr);
          usr.save((err,data)=>{
             res.json({dataa:data});
          });
    },
    updateUser:(req:Request,res:Response)=>{
        const upUser = {
            name:req.body.name,
            address:req.body.address
         }
         user.updateOne({"_id":req.body.id},{$set:upUser},(err,upData)=>{
              if(err){
                 res.json({error:err});
              }else{
                 res.json({msg:upData});
              }
         });
    },
    deleteUser:(req:Request,res:Response)=>{
        user.findOneAndDelete({"_id":req.params.id},(err,data)=>{
            if(err){
               res.json({error:err});
            }else{
               res.json({msg:"user Deleted"})
            }
       });
    }
}

export const users =userController;