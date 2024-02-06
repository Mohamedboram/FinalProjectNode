import express from "express";

import verifyIslogin from "../Services/isLogged.js";

import {
  addProduct,
  allProducts,
  categoryProduct,
  deleteProduct,
  specificProduct,
  updateProduct,
} from "../controller/product.controller.js";
import upload from "../middelware/upload.middleware.js";

const routProducts = express.Router();

routProducts
  .route("/add")
  .post(verifyIslogin, upload.single("image"), addProduct);

routProducts
  .route("/update/:id")
  .put(isLogged, upload.single("image"), updateProduct);

routProducts.route("/delete/:id").delete(isLogged, allProducts);
routProducts.route("/all").get(allProducts);
routProducts.route("/all/category/:category").get(categoryProduct);
routProducts.route("/:id").get(specificProduct);

export default routProducts;
