import Product from '../models/Product.js'; // Import Product model
import Order from '../models/Order.js';
import { v2 as cloudinary } from 'cloudinary';

//place order cod /api/order/cod



export const placeOrderCOD = async (req,res)=>{
    try {
        const {userId , items, address} = req.body;
        if(!address || items.length===0){
            return res.json({success:false, message: "Invalid Data"})

        }
        //calculate amount using item

        let amount = await items.reduce(async (accPromise, item) => {
            const acc = await accPromise;
            const product = await Product.findById(item.product);
            return acc + product.offerPrice * item.quantity;
        }, Promise.resolve(0));
        
        //add tax charge
        amount += Math.floor(amount * 0.02);

        await Order.create({
            userId,
            items,
            amount,
            address,
            paymentType: "COD",
        });

        return res.json({ success: true, message: "Order placed successfully" });


    } catch (error) {
        return res.json({success:false, message: error.message})
        
    }
}

//get order by user id /api/order/user

export const getUserOrders = async (req,res)=>{
    try {
        const {userId} = req.body;
        const orders = await Order.find({
            userId,
            $or: [{paymentType: "COD"} ,{isPaid:true}]
        }).populate("items.product address").sort({createdAt: -1});
        res.json({success: true, orders})
    } catch (error) {
        return res.json({success:false, message: error.message})
        
    }
}

//get allorders /api/order/seller

export const getAllOrders = async (req,res)=>{
    try {
        const orders = await Order.find({
            $or: [{paymentType: "COD"} ,{isPaid:true}]
        }).populate("items.product address").sort({createdAt: -1});
        res.json({success: true, orders})
    } catch (error) {
        return res.json({success:false, message: error.message})
        
    }
}

