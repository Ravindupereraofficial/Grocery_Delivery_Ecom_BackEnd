import express from "express"; // You forgot to import 'express'
import authUser from "../middlewares/authUser.js";
import { addAddress, getAddress } from "../controllers/addressController.js";

const addressRouter = express.Router(); // Fix typo: 'ROuter' ➝ 'Router'

addressRouter.post('/add', authUser, addAddress);
addressRouter.get('/get', authUser, getAddress);

export default addressRouter;
