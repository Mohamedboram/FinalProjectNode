import express from "express";
import isLogged from "../Services/isLogged.js";
import { addCoupon, allCoupons, applyCoupon, deleteCoupon, updateCoupon } from "../controller/coupon.controller.js";


const routCoupon = express.Router();


routCoupon.route("/add").post(

    isLogged,addCoupon
);
routCoupon.route("/update/:couponCode").patch(

    isLogged,updateCoupon
);
routCoupon.route("/delete/:couponCode").delete(

    isLogged,deleteCoupon
);
routCoupon.route("/all").get(

    allCoupons
);
routCoupon.route("/apply").post(

       isLogged,applyCoupon   

)











export default routCoupon