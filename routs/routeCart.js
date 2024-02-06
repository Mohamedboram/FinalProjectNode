import express from "express";
import isLogged from "../Services/isLogged.js";
import { applyCouponOnCart, createCart, updateCart } from "../controller/cart.controller.js";
const routCart = express.Router();



routCart.route("/add_to/:productId").post(
    isLogged,createCart
    
)

routCart.route("/update/:cartId").patch(
    isLogged,updateCart
    
)

routCart.route("/coupon").post(
    isLogged,applyCouponOnCart
    
)


export default routCart