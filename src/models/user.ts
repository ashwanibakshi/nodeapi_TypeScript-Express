import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:String,
    address:String
});

export const user = mongoose.model('user',userSchema);