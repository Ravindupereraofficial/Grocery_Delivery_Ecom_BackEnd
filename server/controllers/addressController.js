import Address from '../models/address.js';



//add address /api/address/add
export const addAddress = async(req, res)=>{
    try {
        const {address,userId} = req.body
        await Address.create({...address,userId})
        res.json({success: true, message: "Address Added succesfully"})
    } catch (error) {
        console.error(error.message);
        res.json({ success: false, message: error.message }); 
    }
}

//get address /api/address/get

export const getAddress = async(req, res)=>{
    try {
        const {userId} = req.body
        const addresses = await Address.find({userId})
        res.json({success: true, addresses})
    } catch (error) {
        console.error(error.message);
        res.json({ success: false, message: error.message }); 
    }
}