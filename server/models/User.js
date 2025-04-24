import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {type: String, reqired:true},
    email: {type: String, reqired:true, unique: true},
    password: {type: String, reqired:true},
    cartItems: {type: Object, default: {}},

}, {minimize:false})

const User = mongoose.model.user || mongoose.model ('user' ,  userSchema)

export default User