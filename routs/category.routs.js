import express from "express";
import isLogged from "../Services/isLogged.js";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  specificCategory,
  updateCategory,
} from "../controller/category.controller.js";
import upload from "../middelware/upload.middleware.js";

const routCategory = express.Router();

routCategory.route("/").get(getAllCategory);
routCategory.route("/:categoryName").get(specificCategory);
routCategory
  .route("/:categoryName")
  .patch(isLogged, upload.single("image"), updateCategory)
  .delete(isLogged, deleteCategory);

routCategory
  .route("/add")
  .post(isLogged, upload.single("image"), addCategory);

export default routCategory;
