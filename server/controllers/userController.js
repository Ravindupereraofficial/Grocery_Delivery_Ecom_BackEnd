import User from "../models/User.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//register user /api/user/register
export const register = async (req,res)=>{
    try {
        const {name,email,password} = req.body;

        if(!name || !email || !password){
            return res.jason({success: false, message: 'Missing Details'})
        }
        const existingUser = await User.findone({email})

        if(existingUser)
            return res.jason({success: false, message: 'Missing Details'})
        
        const hashedPassword = await bcrypt.hash(password,10)

        const user = await User.create({name,email ,password:hashedPassword})
   
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET,{expiresIn:'7d'});

        res.cookie('token' , token, {
            httpOnly: true,  //prevent js to acces cookie
            secure: process.env.NODE_ENV === 'production', //use secure cookie in pr

             sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict', //csrf protection
            
             maxAge: 7 *24 * 60 * 60 *1000, //cookie expire time
       
            })

            return res.jason({success: false, User: {email:user.email,name:user.name}})


    } catch (error) {
        console.error(error.massege);
        res.json({succes: false, message:error.message});
    }
}