import express from "express"; 
import authUser from "../middlewares/authUser.js";
import { getAllOrders, getUserOrders, placeOrderCOD } from "../controllers/orderController.js";
import authSeller from "../middlewares/authSeller.js";

const OrderRouter = express.Router();

OrderRouter.post('/cod' , authUser, placeOrderCOD)
OrderRouter.get('/user' , authUser, getUserOrders)
OrderRouter.get('/seller' , authSeller, getAllOrders)

export default OrderRouter;